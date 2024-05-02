import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { avalancheFuji, polygonAmoy } from "wagmi/chains";
import { http } from "wagmi";
import { WagmiProvider as OriginalWagmiProvider } from "wagmi";
import { ProviderType } from "./@types";

const config = getDefaultConfig({
  appName: "Prosoccer",
  projectId: process.env.WC_PROJECT_ID || "PROVIDE_PROJECT_ID",
  chains: [avalancheFuji, polygonAmoy],
  ssr: true,
  transports: {
    [avalancheFuji.id]: http("https://api.avax-test.network/ext/bc/C/rpc"),
    [polygonAmoy.id]: http("https://rpc-amoy.polygon.technology/"),
  },
});

export const WagmiProvider = ({ children }: ProviderType) => {
  return (
    <OriginalWagmiProvider config={config}>{children}</OriginalWagmiProvider>
  );
};
