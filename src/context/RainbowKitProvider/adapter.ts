import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import { SiweMessage } from "siwe";
import Router from "next/router";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch(`${BASE_URL}/api/auth/generate-nonce`, {
      credentials: "include",
    });
    return await response.text();
  },
  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the Prosoccer",
      uri: window.location.origin,
      version: "1",
      chainId,
      nonce,
    });
  },
  getMessageBody: ({ message }) => {
    return message.prepareMessage();
  },
  verify: async ({ message, signature }) => {
    const verifyRes = await fetch(`${BASE_URL}/api/auth/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, signature }),
      credentials: "include",
    });
    if (verifyRes.ok) {
      Router.reload();
    }
    return verifyRes.ok;
  },
  signOut: async () => {
    const logoutRes = await fetch(`${BASE_URL}/api/auth/logout`);

    if (logoutRes.ok) {
      Router.reload();
    }
  },
  
});
