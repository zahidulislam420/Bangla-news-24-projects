
const LoadingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-4">

            {/* Loading Spinner */}
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
                <div className="absolute w-3 h-3 bg-red-600 rounded-full"></div>
            </div>

            {/* Loading Text */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8">
                Loading...
            </h2>

            <p className="text-gray-500 text-sm mt-2 text-center">
                Please wait while we prepare everything for you.
            </p>

            {/* Loading Progress Animation */}
            <div className="w-48 h-1.5 bg-red-100 rounded-full mt-6 overflow-hidden">
                <div className="h-full w-1/2 bg-red-600 rounded-full animate-pulse"></div>
            </div>

            <p className="text-xs text-red-400 mt-5 font-medium tracking-widest uppercase">
                Please Wait
            </p>

        </div>
    );
};

export default LoadingPage;
