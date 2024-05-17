import Image from "next/image";
import { Hero } from "./components";

export default function Home() {
  return (
    <main className="mx-32 flex h-full flex justify-center items-center flex-col">
      <Hero />
    </main>
  );
}
