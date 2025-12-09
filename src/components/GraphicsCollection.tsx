import { Button } from './ui/button';

const GraphicsCollection = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left - Image */}
        <div className="relative bg-gray-100 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop"
            alt="Graphics Collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="bg-white flex items-center justify-center px-8 md:px-16 lg:px-24 py-20">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase">
              GRAPHICS<br />COLLECTION
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-wide">
              Embrace the Timeless Elegance of Vintage-Inspired Graphic T-Shirts with a High-End Feel
            </p>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-900 font-medium px-10 py-6 text-sm tracking-widest uppercase mt-8"
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
