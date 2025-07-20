"use client";
import Home from "@/app/pages/home";
import Loader from "@/components/loader/CircuitMaster";
import { usePageLoader } from "@/hooks/homePage";

export default function Pages() {
  const loading = usePageLoader(3000);

  return loading ? <Loader /> : <Home />;
}