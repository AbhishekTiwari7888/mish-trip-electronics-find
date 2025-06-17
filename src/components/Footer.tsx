
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-gradient border-t border-tech-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                MishTrip
              </h3>
            </div>
            <p className="text-gray-300">
              Your trusted partner for premium electronics. Quality products, competitive prices, exceptional service.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-tech-blue transition-colors">Home</a>
              <a href="#products" className="block text-gray-300 hover:text-tech-blue transition-colors">Products</a>
              <a href="#about" className="block text-gray-300 hover:text-tech-blue transition-colors">About</a>
              <a href="#contact" className="block text-gray-300 hover:text-tech-blue transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Premium Headsets</p>
              <p className="text-gray-300">Fast Chargers</p>
              <p className="text-gray-300">Data Cables</p>
              <p className="text-gray-300">Custom Solutions</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-tech-blue" />
                <span className="text-gray-300 text-sm">info@mishtrip.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-tech-blue" />
                <span className="text-gray-300 text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-tech-blue" />
                <span className="text-gray-300 text-sm">Ghaziabad, UP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-tech-blue/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 MishTrip Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Developed by Vineet Tripathi & Ravi Shankar Mishra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
