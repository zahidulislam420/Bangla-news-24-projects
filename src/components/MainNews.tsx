
import Image from "next/image";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string

}
const MainNews = ({ news }: {news: News[]}) => {
  const [firstNews, ...otherNews] = news;

  //   const otherNews = news.slice(1)
    // console.log(otherNews)

  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-2">
   <Link href={`/news/${firstNews.id}`}>
      <div className="card w-full min-w-0 bg-base-100 shadow-sm">
        <figure>
          <Image
            className="h-auto w-full"
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-600 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
   </Link>

      <div className="grid min-w-0 gap-2">
        {otherNews.slice(0, 4).map((on) => (
          <div
            className="card min-w-0 bg-base-100 border border-gray-300 p-4 sm:p-5"
            key={on.id}
          >
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
            <div>{on.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;