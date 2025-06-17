
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-tech-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl animate-pulse-tech"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-pulse-tech" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-tech-gray/50 backdrop-blur-sm px-4 py-2 rounded-full border border-tech-blue/30 mb-8">
            <Zap className="w-4 h-4 text-tech-blue" />
            <span className="text-tech-blue font-medium">Premium Electronics Store</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              MishTrip
            </span>
            <span className="text-4xl md:text-5xl"> 🔌</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Looking for the perfect headset, charger, or data cable?
          </p>
          
          <p className="text-lg md:text-xl text-tech-blue mb-12 max-w-2xl mx-auto font-medium">
            I'm here to help you find the best electronics at the best prices!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
