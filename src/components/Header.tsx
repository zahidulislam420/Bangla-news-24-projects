
import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative w-full py-4">
      {/* Center: Logo, Website Name & Date */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4">
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

        <span className="text-xs text-neutral-500">
          {date}
        </span>
      </div>

      {/* Right: Sign In & Sign Up */}
      <div className="absolute right-6 top-4 z-10 flex items-center gap-2">
  <button className="btn btn-outline btn-sm">
    Sign In
  </button>

  <button className="btn btn-sm border-red-700 bg-red-700 text-white hover:border-red-800 hover:bg-red-800">
    Sign Up
  </button>
</div>

      {/* Navigation */}
      <NavLinks />
    </header>
  );
};

export default Header;