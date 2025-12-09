import { TestimonialSlider } from './ui/testimonial-slider';

const TestimonialsSection = () => {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      quote: "The quality is incredible! These streetwear pieces are worth every penny. Best purchase I've made this year.",
      name: "Marcus Chen",
      role: "Melbourne",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      quote: "Fast shipping and amazing customer service. The graphics tees are fire! Highly recommend.",
      name: "Sarah Williams",
      role: "Sydney",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      quote: "Finally found a streetwear brand that delivers on both style and quality. The blanks are perfect for everyday wear.",
      name: "Jake Morrison",
      role: "Brisbane",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      quote: "Love the vintage-inspired graphics! Each piece feels unique and well-crafted. Will definitely order again.",
      name: "Emma Rodriguez",
      role: "Perth",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Join thousands of satisfied streetwear enthusiasts
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
