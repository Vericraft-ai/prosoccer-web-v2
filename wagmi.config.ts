import { defineConfig, loadEnv } from "@wagmi/cli";
import { erc721Abi } from "viem";
import { etherscan, react } from "@wagmi/cli/plugins";
import {
  avalancheFuji,
  mainnet,
  polygon,
  polygonAmoy,
  polygonMumbai,
  polygonZkEvmCardona,
  sepolia,
} from "wagmi/chains";

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });

  return {
    out: "src/contracts/generated.ts",
    contracts: [
      {
        name: "erc721",
        abi: erc721Abi,
      },
    ],
    plugins: [
      etherscan({
        apiKey: process.env.ETHERSCAN_API_KEY || "PLEASE PROVIDE API KEY",
        chainId: avalancheFuji.id,
        contracts: [
          {
            name: "ProsoccerNFT",
            address: "0xAef261A10E105777EDc79C6A79ca6667c0A6b69A",
          },
        ],
      }),
      react(),
    ],
  };
});
