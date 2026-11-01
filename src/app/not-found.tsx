
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-6">
      <div className="max-w-xl w-full text-center">

        {/* 404 Number */}
        <h1 className="text-[140px] md:text-[180px] font-extrabold leading-none text-red-600">
          404
        </h1>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
          Sorry, the page you're looking for doesn't exist or
          may have been moved to another location.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-7 py-3
          bg-red-600 text-white font-semibold rounded-lg
          hover:bg-red-700 transition-all duration-300
          hover:shadow-lg hover:-translate-y-1"
        >
          <span>←</span>
          Back to Home
        </Link>

        <p className="text-sm text-red-400 mt-12">
          ERROR 404 | PAGE NOT FOUND
        </p>
      </div>
    </div>
  );
};

export default NotFound;
