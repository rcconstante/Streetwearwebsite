import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User, ChevronDown, Menu } from 'lucide-react';
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
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const collectionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#new-arrivals"
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gray-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
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
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-gray-600 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Shop
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Collections Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleCollectionsEnter}
                onMouseLeave={handleCollectionsLeave}
              >
                <button
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-gray-600 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Collections
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <a
                href="#for-her"
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gray-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                For Her
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors ${
                isScrolled
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src={isScrolled ? "/CropCenter.png" : "/Logo.png"}
                  alt="STREETWEAR Logo" 
                  className="h-10 w-auto transition-all duration-300"
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
          className="fixed top-20 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100"
          onMouseEnter={handleShopEnter}
          onMouseLeave={handleShopLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-x-12 gap-y-4 justify-center">
              {shopCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-base text-gray-900 hover:text-gray-600 transition-colors font-medium"
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
          className="fixed top-20 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100"
          onMouseEnter={handleCollectionsEnter}
          onMouseLeave={handleCollectionsLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-x-12 gap-y-4 justify-center">
              {collectionsCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-base text-gray-900 hover:text-gray-600 transition-colors font-medium"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNavBar;
