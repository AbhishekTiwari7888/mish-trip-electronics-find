
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to find your perfect electronics? Contact us today for personalized recommendations and competitive prices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card-gradient border border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-3 rounded-full w-fit mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Email Us</h4>
                  <p className="text-gray-300">info@mishtrip.com</p>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-3 rounded-full w-fit mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-300">+91 XXXXX XXXXX</p>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-3 rounded-full w-fit mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Visit Us</h4>
                  <p className="text-gray-300 text-sm">Raj Nagar Extension, Ghaziabad</p>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-3 rounded-full w-fit mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                  <p className="text-gray-300 text-sm">Mon-Sat: 9AM-7PM</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-card-gradient border border-tech-blue/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-tech-gray border-tech-blue/30 text-white placeholder:text-gray-400 focus:border-tech-blue"
                />
                <Input 
                  placeholder="Your Email" 
                  type="email"
                  className="bg-tech-gray border-tech-blue/30 text-white placeholder:text-gray-400 focus:border-tech-blue"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-tech-gray border-tech-blue/30 text-white placeholder:text-gray-400 focus:border-tech-blue"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-tech-gray border-tech-blue/30 text-white placeholder:text-gray-400 focus:border-tech-blue resize-none"
              />
              <Button className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white py-3 text-lg font-semibold">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
