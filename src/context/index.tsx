import { WagmiProvider } from "./WagmiProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { RainbowKitProvider } from "./RainbowKitProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider>
      <ReactQueryProvider>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  );
}
