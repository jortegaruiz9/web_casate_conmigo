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
      <hr className="border-r border-gray-300 hidden sm:block" />
      <div className="flex place-content-center items-center overflow-hidden m-2">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 py-12 md:py-16">
          <ReviewCarousel />
        </div>
      </div>
    </main>
  );
}
