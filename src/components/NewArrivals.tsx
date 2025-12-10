import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Leather Jacket',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 2,
    name: 'Embroidered Cap',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 3,
    name: 'Oversized Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 4,
    name: 'Graphic Tee',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 5,
    name: 'Bomber Jacket',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 6,
    name: 'Track Pants',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
];

const NewArrivals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = 
        direction === 'left' 
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="new-arrivals" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-2xl font-light tracking-widest mb-2 uppercase">New Arrivals</h2>
          <p className="text-gray-600 text-xs tracking-wide">
            Discover our latest collection of premium streetwear
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100 rounded-full w-12 h-12"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100 rounded-full w-12 h-12"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide px-12"
          >
            {allProducts.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-72 group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-4 right-4 bg-black text-white">
                        New Arrival
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-normal text-sm mb-2 group-hover:text-gray-600 transition-colors tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-base font-normal">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
