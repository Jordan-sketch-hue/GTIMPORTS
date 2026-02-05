import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/components/home/Hero';
import WhatWeImport from '@/components/home/WhatWeImport';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedImports from '@/components/home/FeaturedImports';
import WholesalePromo from '@/components/home/WholesalePromo';
import WhyGTImports from '@/components/home/WhyGTImports';
import InstagramFeed from '@/components/home/InstagramFeed';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gt-black">
      <Navbar />
      <Hero />
      <WhatWeImport />
      <HowItWorks />
      <FeaturedImports />
      <WholesalePromo />
      <WhyGTImports />
      <InstagramFeed />
      <CTASection />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}
