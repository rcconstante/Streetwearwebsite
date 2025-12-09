import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import FloatingNavBar from '@/components/FloatingNavBar';
import NewArrivals from '@/components/NewArrivals';
import BestSellersBanner from '@/components/BestSellersBanner';
import BestSellersRow from '@/components/BestSellersRow';
import ThemeCollections from '@/components/ThemeCollections';
import BrandFeatureBar from '@/components/BrandFeatureBar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const mediaContent = {
  src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1280&auto=format&fit=crop',
  background: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1920&auto=format&fit=crop',
  title: 'New Collection',
  date: 'Season 3',
  scrollToExpand: 'Scroll to Explore',
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-background'>
      <FloatingNavBar />
      
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={mediaContent.src}
        bgImageSrc={mediaContent.background}
        title={mediaContent.title}
        date={mediaContent.date}
        scrollToExpand={mediaContent.scrollToExpand}
        textBlend
      />

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
