import NewsCard from "@/components/NewsCard";

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

interface CategoryResponse {
    title: string;
    data: News[];
}

type CategoryPageProps = {
    params: Promise<{slug: string}>
}

const CategoryNews = async({params}: CategoryPageProps) => {
    const {slug} = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${slug}`)

    const data: CategoryResponse = await res.json()
    const categoryNews = data.data
   
    if(!categoryNews) {
        notFound()
    }
    
    return (
        <div>
          <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
            {data.title} </h1>

        <div className="grid grid-cols-3 gap-10">
        {categoryNews.map(news => <NewsCard key={news.id}
         news={news}/> )}
        </div>

        </div>
    );
};

export default CategoryNews;