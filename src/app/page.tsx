import Image from "next/image";
import { Hero, BestOptions, AboutUs } from "./components";

export default function Home() {
  return (
    <main className=" flex h-full flex justify-center items-center flex-col">
      <Hero />
      <BestOptions />
      <AboutUs />
    </main>
  );
}
