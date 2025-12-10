import { Button } from './ui/button';

const GraphicsCollection = () => {
  return (
    <section className="min-h-screen bg-white border-t border-gray-200">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left - Image */}
        <div className="relative bg-gray-100 flex items-center justify-center">
          <img
            src="/Black1standing.png"
            alt="Graphics Collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="bg-white flex items-center justify-center px-8 md:px-16 lg:px-24 py-20">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-xl md:text-2xl font-light tracking-[0.25em] uppercase">
              GRAPHICS<br />COLLECTION
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed tracking-wide">
              Embrace the Timeless Elegance of Vintage-Inspired Graphic T-Shirts with a High-End Feel
            </p>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-900 font-light px-8 py-5 text-xs tracking-[0.2em] uppercase mt-6"
            >
              SHOP COLLECTION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsCollection;
