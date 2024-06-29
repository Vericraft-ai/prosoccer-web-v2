import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";
import { MarketTabs } from "@/features/Market/components/MarketTabs";

export default function Home() {
  return (
    <Wrapper>
      <Header isConnected={true} search />
      <MarketTabs />
    </Wrapper>
  );
}
