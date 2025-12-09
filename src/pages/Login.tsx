import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const StaticNavBar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
              New Arrivals
            </Link>
            <Link to="/" className="text-sm font-medium tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <Link to="/" className="text-sm font-medium tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
              Collections
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-gray-900">
                STREETWEAR
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StaticNavBar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-gray-50 rounded-2xl p-12 shadow-sm">
          <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 bg-white border-gray-200 rounded-lg"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 bg-white border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="text-left">
              <a
                href="/forgot-password"
                className="text-sm text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                Forgot your password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all font-medium text-base rounded-lg"
            >
              LOGIN
            </Button>

            <div className="text-center">
              <Link
                to="/signup"
                className="text-sm text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
