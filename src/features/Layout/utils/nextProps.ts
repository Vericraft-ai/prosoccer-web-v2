import { getCookie } from "cookies-next";
import App, { AppContext } from "next/app";
import { AUTH_COOKIE_NAME } from "@/features/Auth/consts";

export const initGetInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const token = getCookie(AUTH_COOKIE_NAME, context.ctx);
  const isServer = !!context.ctx.req;
  if (isServer) {
    return {
      ...pageProps,
      token,
    };
  }
  return {
    ...pageProps,
  };
};
