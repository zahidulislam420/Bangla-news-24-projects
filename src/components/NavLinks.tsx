import Link from "next/link";

interface Navs {
    slug: string
    title: string
    topicId: string | null
    url:string
    scrapable: boolean
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs:Navs[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);
  return (
    <nav className="mx-auto mt-4 flex w-full flex-wrap justify-center gap-x-4 gap-y-2 px-2 text-center text-sm sm:mt-5 sm:gap-5 sm:px-4 sm:text-base">
      <Link href={"/"}>হোম</Link>

      {filteredNavs.map((n, i) => (
        <Link key={i} href={`/category/${n.slug}`}>
          {n.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;