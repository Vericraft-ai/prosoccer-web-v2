import { RainbowKitProvider as OriginalRainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ProviderType } from "./@types";

export const RainbowKitProvider = ({ children }: ProviderType) => {
  return <OriginalRainbowKitProvider>{children}</OriginalRainbowKitProvider>;
};
