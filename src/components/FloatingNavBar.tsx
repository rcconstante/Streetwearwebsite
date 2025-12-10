import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const shopCategories = [
  { name: 'Best Sellers', href: '#best-sellers' },
  { name: 'Hoodies', href: '#hoodies' },
  { name: 'Tees', href: '#tees' },
  { name: 'Knitwear', href: '#knitwear' },
  { name: 'Sweatpants', href: '#sweatpants' },
  { name: 'Shorts', href: '#shorts' },
  { name: 'Accessories', href: '#accessories' },
];

const collectionsCategories = [
  { name: 'Butter Yellow Drop', href: '#butter-yellow' },
  { name: 'Zip Up Classics', href: '#zip-up' },
  { name: 'Summer Volume 2', href: '#summer-vol2' },
  { name: 'Winter Essentials', href: '#winter' },
  { name: 'Street Classics', href: '#street' },
];

const FloatingNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showCollectionsDropdown, setShowCollectionsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const collectionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 100);
          
          const scrollDelta = currentScrollY - lastScrollY.current;
          setScrollRotation(prev => prev + scrollDelta * 0.5);
          lastScrollY.current = currentScrollY;
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleShopEnter = () => {
    if (shopTimeoutRef.current) {
      clearTimeout(shopTimeoutRef.current);
    }
    setShowShopDropdown(true);
  };

  const handleShopLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setShowShopDropdown(false);
    }, 300);
  };

  const handleCollectionsEnter = () => {
    if (collectionsTimeoutRef.current) {
      clearTimeout(collectionsTimeoutRef.current);
    }
    setShowCollectionsDropdown(true);
  };

  const handleCollectionsLeave = () => {
    collectionsTimeoutRef.current = setTimeout(() => {
      setShowCollectionsDropdown(false);
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#new-arrivals"
                className={`text-xs lg:text-sm font-normal tracking-wider transition-colors hover:text-gray-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                New Arrivals
              </a>
              
              {/* Shop Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleShopEnter}
                onMouseLeave={handleShopLeave}
              >
                <button
                  className={`text-xs lg:text-sm font-normal tracking-wider transition-colors hover:text-gray-500 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  Shop
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Collections Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleCollectionsEnter}
                onMouseLeave={handleCollectionsLeave}
              >
                <button
                  className={`text-xs lg:text-sm font-normal tracking-wider transition-colors hover:text-gray-500 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  Collections
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="flex items-center cursor-pointer group">
                <img 
                  src={isScrolled ? "/CropCenter.png" : "/Logo.png"}
                  alt="SNTCH.CO Logo" 
                  className="h-10 w-auto transition-all duration-300 will-change-transform"
                  style={{
                    transform: `rotate(${scrollRotation}deg)`,
                  }}
                />
              </a>
            </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              <Search className="h-5 w-5" />
            </Button>
            <a href="/login" className="hidden md:inline-block">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors ${
                  isScrolled
                    ? 'text-gray-900 hover:text-gray-600'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                <User className="h-5 w-5" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>

      {/* Dropdown Overlays */}
      {(showShopDropdown || showCollectionsDropdown) && (
        <div className="fixed inset-0 bg-black/20 z-40 top-20" />
      )}

      {/* Shop Dropdown - Full Width */}
      {showShopDropdown && (
        <div
          className="fixed top-20 left-0 right-0 z-40 bg-white shadow-sm border-t border-gray-200"
          onMouseEnter={handleShopEnter}
          onMouseLeave={handleShopLeave}
        >
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-start max-w-4xl">
              {shopCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Collections Dropdown - Full Width */}
      {showCollectionsDropdown && (
        <div
          className="fixed top-20 left-0 right-0 z-40 bg-white shadow-sm border-t border-gray-200"
          onMouseEnter={handleCollectionsEnter}
          onMouseLeave={handleCollectionsLeave}
        >
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-start max-w-4xl">
              {collectionsCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Menu Items */}
              <nav className="space-y-6">
                <a
                  href="#new-arrivals"
                  className="block text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  New Arrivals
                </a>

                {/* Shop Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Shop</h3>
                  <div className="pl-4 space-y-2">
                    {shopCategories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="block text-base text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Collections Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">Collections</h3>
                  <div className="pl-4 space-y-2">
                    {collectionsCategories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="block text-base text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Account */}
                <div className="pt-6 border-t border-gray-200">
                  <a
                    href="/login"
                    className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    Account
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNavBar;
