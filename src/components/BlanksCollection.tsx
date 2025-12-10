import { Button } from './ui/button';

const BlanksCollection = () => {
  return (
    <section className="min-h-screen bg-white border-t border-gray-200">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left - Text */}
        <div className="bg-white flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 order-2 md:order-1">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-xl md:text-2xl font-light tracking-[0.25em] uppercase">
              BLANKS<br />COLLECTION
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed tracking-wide">
              Premium essentials made for everyday wear. Our Blanks are designed with quality, comfort, and longevity in mind—perfect for daily use or building a timeless wardrobe.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed tracking-wide">
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
              className="bg-black text-white hover:bg-gray-900 font-light px-8 py-5 text-xs tracking-[0.2em] uppercase mt-6"
            >
              SHOP COLLECTION
            </Button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative bg-gray-100 flex items-center justify-center order-1 md:order-2">
          <img
            src="/White1standing.png"
            alt="Blanks Collection"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BlanksCollection;
