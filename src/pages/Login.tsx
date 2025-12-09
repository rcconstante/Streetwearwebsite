import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';
import FloatingNavBar from '@/components/FloatingNavBar';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FloatingNavBar />
      
      <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-20">
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
