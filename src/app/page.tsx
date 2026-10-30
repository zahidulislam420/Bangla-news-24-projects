
import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';
import NewsCard from '@/components/NewsCard';

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

const page = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  if (!res.ok) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 text-center">
      </main>
    );
  }

  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;

  const otherSections:IOtherSection[] = section.slice(1);

  console.log(section);
  console.log(otherSections);

  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 max-w-7xl mx-auto">

        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className='grid gap-5 mt-5'>
            {otherSections.map(os => (
              <div
                className=''
                key={os.curationId}
              >
                <h1 className='font-bold border-b-2 pb-1'>{os.title}</h1>

               
                <div className='grid mt-3 grid-cols-3 gap-2'>
                 {os.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
               </div>
              

              </div>
            ))}
          </div>

        </div>

        {/* most read section */}
        <div className='bg-green-500 col-span-1'>
        </div>

      </div>
    </div>
  );
};

export default page;
