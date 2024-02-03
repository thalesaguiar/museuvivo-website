import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/NavBar/NavBar";
import ImagesSlider from "@/components/ImagesSlider/ImagesSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <ImagesSlider />
    </div>
  );
}
