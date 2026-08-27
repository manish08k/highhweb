import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { InteractiveDemo } from "@/components/sections/InteractiveDemo";
import { Runtime } from "@/components/sections/Runtime";
import { Process } from "@/components/sections/Process";
import { Stack } from "@/components/sections/Stack";
import { FAQ } from "@/components/sections/FAQ";
import BookCall from "@/components/booking/BookCall";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Capabilities />
        <InteractiveDemo />
        <Runtime />
        <Process />
        <Stack />
        <FAQ />
        <BookCall />
      </main>

      <Footer />
    </>
  );
}