"use client";
import Home from "@/app/home/page";
import Loader from "@/app/loader/page";
import { usePageLoader } from "@/hooks/page";

export default function Pages() {
  const loading = usePageLoader(3000);

  return loading ? <Loader /> : <Home />;
}