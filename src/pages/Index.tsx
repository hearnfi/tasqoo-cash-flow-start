
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AsSeenOnSection from "@/components/AsSeenOnSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EarningsSection from "@/components/EarningsSection";
import PartnersSection from "@/components/PartnersSection";
import PaymentSection from "@/components/PaymentSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AsSeenOnSection />
      <FeaturesSection />
      <HowItWorksSection />
      <EarningsSection />
      <PartnersSection />
      <PaymentSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
