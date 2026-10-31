import Image from "next/image";
import { notFound } from "next/navigation";

interface ArticleBodyBlock {
  type: string;
  text?: string;
  url?: string;
  altText?: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface NewsArticle {
  title: string;
  imageUrl: string;
  firstPublished: string;
  byline: { name: string }[];
  source: string;
  sourceUrl: string;
  body: ArticleBodyBlock[];
}

interface ArticleResponse {
  data: NewsArticle | null;
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsid: string }>;
}) => {
  const { newsid } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${encodeURIComponent(newsid)}`,
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to load article: ${res.status}`);
  }

  const data: ArticleResponse = await res.json();
  const news = data.data;

  if (!news) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8">
      <article>
        <h1 className="mb-5 text-3xl font-bold leading-relaxed md:text-4xl">
          {news.title}
        </h1>

        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
          {news.byline.length > 0 && (
            <p>{news.byline.map((author) => author.name).join(", ")}</p>
          )}
          <time dateTime={news.firstPublished}>
            {new Intl.DateTimeFormat("bn-BD", {
              dateStyle: "long",
              timeStyle: "short",
            }).format(new Date(news.firstPublished))}
          </time>
          <a
            className="text-red-700 underline"
            href={news.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            {news.source}
          </a>
        </div>

        <figure className="mb-8">
          <Image
            className="h-auto w-full"
            src={news.imageUrl}
            alt={news.title}
            width={1200}
            height={675}
            priority
          />
        </figure>

        <div className="space-y-5 text-lg leading-9">
          {news.body.map((block, index) => {
            if (block.type === "image" && block.url) {
              return (
                <figure key={`${block.url}-${index}`} className="space-y-2">
                  <Image
                    className="h-auto w-full"
                    src={block.url}
                    alt={block.altText ?? block.caption ?? news.title}
                    width={block.width ?? 1200}
                    height={block.height ?? 675}
                  />
                  {block.caption && (
                    <figcaption className="text-sm text-gray-600">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (block.type === "subheading" && block.text) {
              return (
                <h2
                  key={`${block.text}-${index}`}
                  className="pt-2 text-2xl font-bold"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.text) {
              return (
                <p key={`${block.text.slice(0, 40)}-${index}`} className="whitespace-pre-line">
                  {block.text}
                </p>
              );
            }

            return null;
          })}
        </div>
      </article>
    </main>
  );
};

export default NewsDetails;