
import { Headphones, Cable, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const products = [
    {
      icon: Headphones,
      title: "Premium Headsets",
      description: "High-quality audio equipment for gaming, music, and calls",
      features: ["Noise Cancellation", "Wireless Connectivity", "Long Battery Life", "Crystal Clear Audio"],
      price: "Starting from ₹1,999"
    },
    {
      icon: Zap,
      title: "Fast Chargers",
      description: "Quick charging solutions for all your devices",
      features: ["Fast Charging", "Multiple Device Support", "Safety Protection", "Compact Design"],
      price: "Starting from ₹599"
    },
    {
      icon: Cable,
      title: "Data Cables",
      description: "Reliable data transfer and charging cables",
      features: ["High-Speed Transfer", "Durable Build", "Universal Compatibility", "Various Lengths"],
      price: "Starting from ₹299"
    }
  ];

  return (
    <section id="products" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our premium collection of electronics designed for performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-tech-blue/20"
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-r from-tech-blue to-tech-purple p-4 rounded-full w-fit mb-4">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">{product.title}</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-tech-blue" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-tech-blue/20 pt-4">
                  <p className="text-tech-blue font-bold text-xl mb-4">{product.price}</p>
                  <Button className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
