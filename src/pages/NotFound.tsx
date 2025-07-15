import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <span className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></span>
    </div>
  );
}

const NotFound = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
