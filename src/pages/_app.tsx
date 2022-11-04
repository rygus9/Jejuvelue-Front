import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { worker } from "@/mockapi/browser";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") worker.start();
  }, []);
  return <Component {...pageProps} />;
}
