import Image from "next/image";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <div className="navbar bg-base-100 shadow-md px-6">

            {/* Left Side */}
            <div className="navbar-start"></div>

            {/* Center: Logo + Date */}
            <div className="navbar-center flex items-center gap-4">
                <Image
                    src="/logo.webp"
                    alt="Bangla News 24"
                    width={180}
                    height={60}
                    className="w-auto h-14 object-contain"
                />

                <p className="text-sm text-gray-500 whitespace-nowrap">
                    {date}
                </p>
            </div>

            {/* Right Side */}
            <div className="navbar-end flex items-center gap-2">
                <button className="btn btn-outline">
                    Sign In
                </button>

                <button className="btn bg-red-700 text-white border-none">
                    Sign Up
                </button>
            </div>

        </div>
    );
};

export default Header;