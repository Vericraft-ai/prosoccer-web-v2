import { HeaderBanner } from "@/features/Home/components/HeaderBanner";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";

export default function Home() {
  return (
    <Wrapper className="flex flex-row">
      <Header hasSearchBar>
        <HeaderBanner />
      </Header>
    </Wrapper>
  );
}
