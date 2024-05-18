import {
  RainbowKitProvider as OriginalRainbowKitProvider,
  RainbowKitAuthenticationProvider,
  AuthenticationStatus,
} from "@rainbow-me/rainbowkit";
import { ProviderType } from "../@types";
import { authenticationAdapter } from "./adapter";
import { useEffect, useState } from "react";

export const RainbowKitProvider = ({ children, token }: ProviderType) => {
  const [authenticationStatus, setAuthenticatedStatus] =
    useState<AuthenticationStatus>("unauthenticated");

  useEffect(() => {
    if (token) {
      setAuthenticatedStatus("authenticated");
    } else {
      setAuthenticatedStatus("unauthenticated");
    }
  }, [token]);
  return (
    <RainbowKitAuthenticationProvider
      adapter={authenticationAdapter}
      status={authenticationStatus}
    >
      <OriginalRainbowKitProvider>{children}</OriginalRainbowKitProvider>
    </RainbowKitAuthenticationProvider>
  );
};
