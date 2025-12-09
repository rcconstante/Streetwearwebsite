import { Star, Shield, Globe } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Star,
    title: 'Quality & Comfort',
    description: '5-star reviews',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Ethical Fashion',
    description: 'Proudly produced in the Philippines',
  },
  {
    id: 3,
    icon: Globe,
    title: 'Worldwide Delivery',
    description: 'See our shipping terms',
  },
];

const BrandFeatureBar = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 bg-white rounded-full shadow-sm">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandFeatureBar;
