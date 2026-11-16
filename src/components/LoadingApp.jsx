import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoadingApp({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="fixed inset-0 bg-[#0D111C] flex flex-col items-center justify-center gap-6"
        role="status"
        aria-label="Loading"
      >
        <div className="w-14 h-14 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm tracking-[0.4rem] text-gray-400">
          VICHET <span className="text-green-400">CHOUB</span>
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}