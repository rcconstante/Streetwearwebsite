import { Package, Headphones, Truck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "Returns",
      subtitle: "14 DAY EASY RETURNS",
      link: null,
    },
    {
      icon: Headphones,
      title: "Customer Service",
      subtitle: "WE ARE AVAILABLE FROM MONDAY TO FRIDAY FOR ANY ENQUIRES",
      linkText: "CONTACT US HERE",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      subtitle: "ON ALL DOMESTIC AU ORDERS",
      link: null,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 md:w-14 md:h-14 text-gray-900" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-light tracking-widest uppercase">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {service.subtitle}
                  </p>
                  {service.linkText && (
                    <a 
                      href="#" 
                      className="inline-block text-xs md:text-sm font-semibold text-gray-900 hover:text-gray-600 underline underline-offset-4 transition-colors mt-2"
                    >
                      {service.linkText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
