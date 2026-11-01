
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative w-full py-4">
      {/* Center: Logo, Website Name & Date */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Bangla News 24"
            width={40}
            height={40}
            priority
          />

          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
        </div>

        <span className="text-xs text-neutral-500">
          {date}
        </span>
      </div>

     

     <UserInfo/>

      <NavLinks />
    </header>
  );
};

export default Header;