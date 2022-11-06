import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const { worker } = require("mocks/browser");
      worker.start().then(() => setShouldRender(true));
    } else {
      setShouldRender(true);
    }
  }, []);

  return <>{shouldRender && <Component {...pageProps} />}</>;
}
