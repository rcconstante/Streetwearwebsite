import { useEffect } from 'react';
import FloatingNavBar from '@/components/FloatingNavBar';
import SimpleHero from '@/components/SimpleHero';
import NewArrivals from '@/components/NewArrivals';
import ServicesSection from '@/components/ServicesSection';
import GraphicsCollection from '@/components/GraphicsCollection';
import BlanksCollection from '@/components/BlanksCollection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-background overflow-x-hidden'>
      <FloatingNavBar />
      
      <SimpleHero />

      {/* New Sections */}
      <NewArrivals />
      <ServicesSection />
      <GraphicsCollection />
      <BlanksCollection />
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
