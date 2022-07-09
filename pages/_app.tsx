import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import { ErrorProvider } from "@/context/error/userProvider";
import "@/styles/style.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQuery>
      <ErrorProvider>
        <Component {...pageProps} />
      </ErrorProvider>
    </ReactQuery>
  );
}

export default MyApp;
