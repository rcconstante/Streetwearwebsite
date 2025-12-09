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
  soldOut?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Essential Hoodie',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Classic Sneakers',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    soldOut: true,
  },
  {
    id: 3,
    name: 'Denim Jacket',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Cargo Pants',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Bucket Hat',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop',
  },
];

const BestSellersRow = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Top Picks</h2>
          <p className="text-muted-foreground text-lg">
            Our most-loved items flying off the shelves
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
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-72 group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.soldOut && (
                      <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                        Sold Out
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold">${product.price}</p>
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

export default BestSellersRow;
