
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tech-dark/90 backdrop-blur-md border-b border-tech-blue/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              MishTrip
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-tech-blue transition-colors">Home</a>
            <a href="#products" className="text-white hover:text-tech-blue transition-colors">Products</a>
            <a href="#about" className="text-white hover:text-tech-blue transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-tech-blue transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white px-6 py-2 rounded-full transition-all duration-300">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-tech-blue/20">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-tech-blue transition-colors">Home</a>
              <a href="#products" className="text-white hover:text-tech-blue transition-colors">Products</a>
              <a href="#about" className="text-white hover:text-tech-blue transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-tech-blue transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-tech-blue to-tech-purple text-white w-full mt-4">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
