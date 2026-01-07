'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { LogosStrip } from '@/components/LogosStrip';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Pricing } from '@/components/Pricing';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const App = () => {
  return (
    <div className='font-sans text-gray-200 antialiased bg-[#050505] selection:bg-[#F59E0B]/30 selection:text-[#F59E0B]'>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');
        
        :root {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        /* Custom Scrollbar for Chrome/Safari/Webkit */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        .perspective-1000 {
           perspective: 1000px;
        }
      `}</style>

      <Navbar />
      <HeroSection />
      <LogosStrip />
      <FeaturesGrid />
      <ProductShowcase />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
