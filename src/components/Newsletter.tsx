import { Button } from './ui/button';
import { Input } from './ui/input';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Join the Community
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to get special offers, free giveaways, and exclusive deals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-md border-gray-300"
            />
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 h-12 px-8 whitespace-nowrap"
            >
              Sign Up
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            By signing up, you agree to our Privacy Policy and Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
