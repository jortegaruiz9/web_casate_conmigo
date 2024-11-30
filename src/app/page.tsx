import Hero from "./components/Hero";
import { Metadata } from "next";
import ReviewCarousel from "./components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Home - Cásate Conmigo",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex place-content-center items-center overflow-hidden m-2 py-12 sm:hidden">
        <div className="w-11/12">
          <ReviewCarousel />
        </div>
      </div>
    </main>
  );
}
