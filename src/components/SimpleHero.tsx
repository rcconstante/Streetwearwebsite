import { useState, useEffect } from 'react';

const SimpleHero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to trigger fade animation on mount
    setIsLoading(false);
  }, []);

  return (
    <div
      className={`relative w-full h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundImage: "url('/HeroBackground.png')",
      }}
    >
      {/* Optional overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/0" />
    </div>
  );
};

export default SimpleHero;
