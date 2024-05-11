import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import { SiweMessage } from "siwe";

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch(
      "https://api.prosoccer.io/api/auth/generate-nonce",
      {
        credentials: "include",
      }
    );
    return await response.text();
  },
  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the app.",
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
    const verifyRes = await fetch("https://api.prosoccer.io/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, signature }),
      credentials: "include",
    });
    console.log(verifyRes.ok);
    return Boolean(verifyRes.ok);
  },
  signOut: async () => {
    await fetch("https://api.prosoccer.io/api/auth/logout");
  },
});
