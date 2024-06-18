import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";
import { HeaderLinks } from "@/features/Market/components/HeaderLinks";
import { MarketCards } from "@/features/Market/components/MarketCards";

export default function Home() {
  return (
    <Wrapper>
      <div className="w-full">
        {/* <Header >
          <HeaderLinks />
        </Header> */}
        <MarketCards />
      </div>
    </Wrapper>
  );
}
