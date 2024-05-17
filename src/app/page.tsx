import Image from "next/image";
import { Hero, BestOptions, AboutUs, Testimonials } from "./components";
import { PropertiesContextProvider } from "./contexts/PropertiesContext";

export default function Home() {
  return (
    <PropertiesContextProvider>
      <main className=" flex h-full flex justify-center items-center flex-col">
        <Hero />
        <BestOptions />
        <AboutUs />
        <Testimonials />
      </main>
    </PropertiesContextProvider>
  );
}
