import { defineConfig, loadEnv } from "@wagmi/cli";
import { erc721Abi } from "viem";
import { etherscan, react } from "@wagmi/cli/plugins";
import {
  mainnet,
  polygon,
  polygonAmoy,
  polygonMumbai,
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
        chainId: polygonAmoy.id,
        contracts: [
          {
            name: "MetaSoccerToken",
            address: "0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1",
          },
        ],
      }),
      react(),
    ],
  };
});
