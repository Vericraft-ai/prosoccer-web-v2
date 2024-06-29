import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Providers } from "@/context";
import { initGetInitialProps } from "@/features/Layout/utils/nextProps";
import { cookieToInitialState, State } from 'wagmi'
import { config } from '@/context/WalletConnectProvider/config'

type AppPropsExtended = AppProps & {
  token?: string;
  cookies: string;
};

export default function App({ Component, pageProps, token, cookies }: AppPropsExtended) {
  const initialState = cookieToInitialState(config, cookies) as State
  return (
    <Providers initialState={initialState}>
      <Component {...pageProps} />
    </Providers>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const props = await initGetInitialProps(context);
  return initGetInitialProps(context);
};
