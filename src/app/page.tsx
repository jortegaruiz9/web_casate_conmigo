import Hero from "./components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Cásate Conmigo",
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
