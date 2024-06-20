import { WagmiProvider as OriginalWagmiProvider, State } from "wagmi";
import { ProviderType } from "./@types";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import {config, projectId} from './WalletConnectProvider/config'

if (!projectId) throw new Error('Project ID is not defined')

 // Create modal
 createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export const WagmiProvider = ({ children, initialState }: ProviderType & {initialState?: State}) => {
  return (
    <OriginalWagmiProvider config={config} initialState={initialState}>{children}</OriginalWagmiProvider>
  );
};
