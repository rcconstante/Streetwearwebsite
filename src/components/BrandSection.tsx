const BrandSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="text-center">
            <div className="mb-4">
              <img 
                src="/CropCenter.png"
                alt="SNTCH.CO Logo" 
                className="h-12 md:h-16 w-auto mx-auto"
              />
            </div>
            <div className="text-xs md:text-sm font-light tracking-[0.3em] uppercase mb-1">
              SNTCH.CO
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-blue-600 px-6 py-2">
            <p className="text-white text-xs md:text-sm font-light tracking-[0.2em] uppercase">
              Premium Streetwear & Lifestyle
            </p>
          </div>

          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/sntch.aus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:text-gray-900 transition-colors tracking-wide mt-2"
          >
            @sntch.aus
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
