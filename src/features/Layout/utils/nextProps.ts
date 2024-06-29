import { getCookie, getCookies } from "cookies-next";
import App, { AppContext } from "next/app";
import { AUTH_COOKIE_NAME } from "@/features/Auth/consts";
import { cookies } from "next/headers";

export const initGetInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const token = getCookie(AUTH_COOKIE_NAME, context.ctx);
  const isServer = !!context.ctx.req;
  if (isServer) {
    return {
      ...pageProps,
      token,
      cookies: context.ctx.req?.headers?.cookie,
    };
  }
  return {
    ...pageProps,
    cookies: context.ctx.req?.headers?.cookie,
  };
};
