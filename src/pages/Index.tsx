import { useEffect } from 'react';
import FloatingNavBar from '@/components/FloatingNavBar';
import SimpleHero from '@/components/SimpleHero';
import NewArrivals from '@/components/NewArrivals';
import BestSellersBanner from '@/components/BestSellersBanner';
import BestSellersRow from '@/components/BestSellersRow';
import ThemeCollections from '@/components/ThemeCollections';
import BrandFeatureBar from '@/components/BrandFeatureBar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-background'>
      <FloatingNavBar />
      
      <SimpleHero />

      {/* New Sections */}
      <NewArrivals />
      <BestSellersBanner />
      <BestSellersRow />
      <ThemeCollections />
      <BrandFeatureBar />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
