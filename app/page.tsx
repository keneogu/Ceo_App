import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import FrequentQuestions from "@/components/home/frequent-questions";
import HeroSection from "@/components/home/hero-section";
import Manage from "@/components/home/manage";
import Pricing from "@/components/home/pricing";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <Features />
      <Pricing />
      <FrequentQuestions />
      <Manage />
      <Footer />
    </main>
  );
}
