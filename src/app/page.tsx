import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import MainSection from "@/components/Main/Main";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <MainSection />
    </div>
  );
}
