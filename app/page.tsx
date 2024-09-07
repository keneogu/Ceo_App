import Features from "@/components/home/features";
import Footer from "@/components/footer";
import FrequentQuestions from "@/components/home/frequent-questions";
import HeroSection from "@/components/home/hero-section";
import Manage from "@/components/home/manage";
import Pricing from "@/components/home/pricing";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Features />
      <Pricing />
      <FrequentQuestions />
      <Manage />
    </main>
  );
}
