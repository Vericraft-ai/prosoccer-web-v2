import { Sidebar } from "@/features/Layout/components/Sidebar";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";

export default function Home() {
  return (
    <Wrapper className="flex min-h-screen">
      <Sidebar />
      <Header />
    </Wrapper>
  );
}
