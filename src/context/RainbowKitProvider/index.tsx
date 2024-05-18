import {
  RainbowKitProvider as OriginalRainbowKitProvider,
  RainbowKitAuthenticationProvider,
  AuthenticationStatus,
} from "@rainbow-me/rainbowkit";
import { ProviderType } from "../@types";
import { authenticationAdapter } from "./adapter";

export const RainbowKitProvider = ({ children, token }: ProviderType) => {
  const AUTHENTICATION_STATUS: AuthenticationStatus = token
    ? "authenticated"
    : "unauthenticated";
  return (
    <RainbowKitAuthenticationProvider
      adapter={authenticationAdapter}
      status={AUTHENTICATION_STATUS}
    >
      <OriginalRainbowKitProvider>{children}</OriginalRainbowKitProvider>
    </RainbowKitAuthenticationProvider>
  );
};
