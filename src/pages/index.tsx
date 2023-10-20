import Head from "next/head";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ExpositionCarrousel from "@/components/ExpositionsCarrousel";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div>
      <Header />
      <ExpositionCarrousel />
      <MainSection />
    </div>
  );
}
