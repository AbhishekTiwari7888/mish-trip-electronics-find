
import { Users, MapPin, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const directors = [
    {
      name: "Vineet Tripathi",
      role: "Co-Director",
      expertise: "Electronics & Business Strategy"
    },
    {
      name: "Ravi Shankar Mishra",
      role: "Co-Director", 
      expertise: "Technology & Operations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-tech-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">MishTrip</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A premium electronics company committed to delivering the best technology solutions at competitive prices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="bg-card-gradient border border-tech-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-2 rounded-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To provide high-quality electronic accessories that enhance your digital lifestyle while maintaining affordability and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border border-tech-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-2 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To become the leading electronics retailer known for exceptional quality, customer service, and innovative technology solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-8 h-8 text-tech-blue mr-3" />
              Our Leadership Team
            </h3>
            
            {directors.map((director, index) => (
              <Card key={index} className="bg-card-gradient border border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{director.name}</h4>
                  <p className="text-tech-blue font-medium mb-2">{director.role}</p>
                  <p className="text-gray-300">{director.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-card-gradient border border-tech-blue/20">
          <CardHeader>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-2xl">Company Address</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">MishTrip Private Limited</strong><br />
              C-538 Tower-10, River Heights Society<br />
              Raj Nagar Extension, Ghaziabad<br />
              Uttar Pradesh, India
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
