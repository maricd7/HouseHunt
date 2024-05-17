import Image from "next/image";
import { Hero, BestOptions, AboutUs, Testimonials } from "./components";

export default function Home() {
  return (
    <main className=" flex h-full flex justify-center items-center flex-col">
      <Hero />
      <BestOptions />
      <AboutUs />
      <Testimonials />
    </main>
  );
}
