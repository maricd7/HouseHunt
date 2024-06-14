import { Hero, BestOptions, AboutUs, Testimonials } from "./components";
import { PropertiesContextProvider } from "./contexts/PropertiesContext";
import { ClientDataContextProvider } from "./contexts/ClientDataContext";

export default function Home() {
  return (
    <PropertiesContextProvider>
      <ClientDataContextProvider>
        <main className=" flex h-full flex justify-center items-center flex-col">
          <Hero />
          {/* <BestOptions />
          <AboutUs />
          <Testimonials /> */}
        </main>
      </ClientDataContextProvider>
    </PropertiesContextProvider>
  );
}
