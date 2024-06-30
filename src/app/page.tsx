import Header from "@/components/Header/Header";
import MainSection from "@/components/Main/Main";
import Menu from "@/components/Menu/Menu";
import { FooterSection } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <MainSection />
      <FooterSection />
    </>
  );
}
