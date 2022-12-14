import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" &&
      process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ) {
      const { worker } = require("mocks/browser");
      worker.start().then(() => setShouldRender(true));
    } else {
      setShouldRender(true);
    }
  }, []);

  return (
    <>
      {shouldRender && (
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      )}
    </>
  );
}
