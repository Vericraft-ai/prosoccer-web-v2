import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/context";
import { initGetInitialProps } from "@/features/Layout/utils/nextProps";

type AppPropsExtended = AppProps & {
  token?: string;
};

export default function App({ Component, pageProps, token }: AppPropsExtended) {
  console.log(token);
  return (
    <Providers token={token}>
      <Component {...pageProps} />
    </Providers>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const props = await initGetInitialProps(context);
  console.log(props);
  return initGetInitialProps(context);
};
