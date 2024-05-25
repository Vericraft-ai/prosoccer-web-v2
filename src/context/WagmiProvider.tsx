import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygonAmoy } from "wagmi/chains";
import { WagmiProvider as OriginalWagmiProvider } from "wagmi";
import { ProviderType } from "./@types";

const config = getDefaultConfig({
  appName: "Prosoccer",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "PROVIDE_PROJECT_ID",
  chains: [polygonAmoy],
  ssr: true,
});

export const WagmiProvider = ({ children }: ProviderType) => {
  return (
    <OriginalWagmiProvider config={config}>{children}</OriginalWagmiProvider>
  );
};
