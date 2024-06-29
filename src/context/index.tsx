import { WagmiProvider } from "./WagmiProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { State } from 'wagmi'

export function Providers({
  initialState,
  children
}: {
  initialState?: State
  children: React.ReactNode
}) {
  return (
    <WagmiProvider initialState={initialState}>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </WagmiProvider>
  );
}
