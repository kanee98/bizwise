"use client";
import { useEffect, useState } from "react";
import Home from "@/app/pages/home";
import Loader from "@/components/loader/CircuitMaster";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return showLoader ? <Loader /> : <Home />;
}