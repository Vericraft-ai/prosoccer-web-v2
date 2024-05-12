import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { avalancheFuji, polygonZkEvmCardona } from "wagmi/chains";
import { http } from "wagmi";
import { WagmiProvider as OriginalWagmiProvider } from "wagmi";
import { ProviderType } from "./@types";

const config = getDefaultConfig({
  appName: "Prosoccer",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "PROVIDE_PROJECT_ID",
  chains: [avalancheFuji, polygonZkEvmCardona],
  ssr: true,
  transports: {
    [avalancheFuji.id]: http("https://api.avax-test.network/ext/bc/C/rpc"),
    [polygonZkEvmCardona.id]: http(
      "https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public"
    ),
  },
});

export const WagmiProvider = ({ children }: ProviderType) => {
  return (
    <OriginalWagmiProvider config={config}>{children}</OriginalWagmiProvider>
  );
};
