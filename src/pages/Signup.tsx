import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';
import FloatingNavBar from '@/components/FloatingNavBar';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up attempt with:', { firstName, lastName, email, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FloatingNavBar />
      
      <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-20">
        <div className="w-full max-w-md bg-gray-50 rounded-2xl p-12 shadow-sm">
          <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full h-12 px-4 bg-white border-gray-200 rounded-lg"
                required
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-12 px-4 bg-white border-gray-200 rounded-lg"
                required
              />
            </div>
            
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

            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-12 px-4 bg-white border-gray-200 rounded-lg"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all font-medium text-base rounded-lg"
            >
              CREATE ACCOUNT
            </Button>

            <div className="text-center">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <Link
                to="/login"
                className="text-sm text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
