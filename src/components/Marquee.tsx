import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines {
    id: string
    title: string
    url: string
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json();
    const headlines: Headlines[] = data.data
    console.log(headlines)
    return (
        <div className="bg-red-600 text-white">

        <div className="mx-auto flex w-full max-w-7xl">
             <div className="shrink-0 bg-red-700 px-3 py-1 font-bold sm:px-5">সর্বশেষ</div>

            <MarqueeText className="min-w-0 flex-1 py-1" direction="right" duration={10}>
                        {
                headlines.map(h => <span key={h.id}>
                    <span>{h.title}</span>
                    <span className="mx-5">•</span>
                </span>)
            }
            </MarqueeText>
        </div>

        </div>
    );
};

export default Marquee;
