import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

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
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={mediaContent.src}
        bgImageSrc={mediaContent.background}
        title={mediaContent.title}
        date={mediaContent.date}
        scrollToExpand={mediaContent.scrollToExpand}
        textBlend
      >
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight'>
            About This Collection
          </h2>
          <p className='text-lg mb-8 text-muted-foreground leading-relaxed'>
            Experience comfort in every moment with Season 3—where everyday life becomes
            effortlessly extraordinary. Our latest collection blends premium materials with
            contemporary design for pieces that move with you.
          </p>

          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <div>
              <h3 className='text-xl font-semibold mb-3 text-foreground'>Details</h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Dropped shoulder construction</li>
                <li>• Cropped design</li>
                <li>• Relaxed fit</li>
                <li>• Ribbed neckline</li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-3 text-foreground'>Specifications</h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• 100% premium cotton</li>
                <li>• 230 GSM weight</li>
                <li>• Pre-shrunk fabric</li>
                <li>• Machine washable</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-wrap gap-4'>
            <button className='px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity'>
              Shop Collection
            </button>
            <button className='px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors'>
              View Lookbook
            </button>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default Index;
