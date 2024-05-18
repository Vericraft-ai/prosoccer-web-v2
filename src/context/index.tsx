import { WagmiProvider } from "./WagmiProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { RainbowKitProvider } from "./RainbowKitProvider";

export function Providers({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) {
  return (
    <WagmiProvider>
      <ReactQueryProvider>
        <RainbowKitProvider token={token}>{children}</RainbowKitProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  );
}
