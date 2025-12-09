import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const currentProducts = allProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="new-arrivals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">New Arrivals</h2>
          <p className="text-muted-foreground text-lg">
            Discover our latest collection of premium streetwear
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100 rounded-full w-12 h-12 -ml-6"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100 rounded-full w-12 h-12 -mr-6"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPage
                      ? 'bg-black w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
