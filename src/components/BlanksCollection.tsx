import { Button } from './ui/button';

const BlanksCollection = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left - Text */}
        <div className="bg-white flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 order-2 md:order-1">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase">
              BLANKS<br />COLLECTION
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-wide">
              Premium essentials made for everyday wear. Our Blanks are designed with quality, comfort, and longevity in mind—perfect for daily use or building a timeless wardrobe.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-wide">
              Invest in well-crafted basics that elevate your look without compromising on durability or feel.
            </p>
            <div className="py-4">
              <p className="text-xs md:text-sm font-semibold text-gray-900 mb-1">
                Special Offer:
              </p>
              <p className="text-xs md:text-sm text-gray-700">
                Add 3 items to your cart and get <span className="font-bold">10% off</span>
              </p>
            </div>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-900 font-medium px-10 py-6 text-sm tracking-widest uppercase mt-8"
            >
              SHOP COLLECTION
            </Button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative bg-gray-100 flex items-center justify-center order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
            alt="Blanks Collection"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BlanksCollection;
