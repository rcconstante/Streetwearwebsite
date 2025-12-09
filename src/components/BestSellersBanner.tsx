import { Button } from './ui/button';

const BestSellersBanner = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/8people.png'), url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          The Best Sellers
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Discover what everyone's loving this season
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
        >
          Shop Best Sellers
        </Button>
      </div>
    </section>
  );
};

export default BestSellersBanner;
