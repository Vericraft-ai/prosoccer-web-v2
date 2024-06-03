import { HeaderBanner } from "@/features/Home/components/HeaderBanner";
import { Header } from "@/features/Layout/components/Header";
import { SearchInput } from "@/features/Layout/components/SearchInput";
import { Wrapper } from "@/features/Layout/components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col w-full">
        <Header>
          <SearchInput onSearch={(query) => console.log(query)} />
        </Header>
        <HeaderBanner />
      </div>
    </Wrapper>
  );
}
