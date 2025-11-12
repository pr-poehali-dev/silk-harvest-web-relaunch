import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <section className="relative min-h-screen flex items-center bg-dark-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                SILK HARVEST - FZCO
              </h1>
              <p className="text-3xl md:text-4xl mb-6 font-light text-gray-300">
                Your Reliable Partner in Integrated Agricultural Trade
              </p>
              <p className="text-xl mb-12 text-gray-400 leading-relaxed">
                We supply high-quality agricultural products with a complete service built on transparency, reliability, and rigorous quality control.
              </p>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-primary text-xl px-14 py-8 rounded-full font-bold transition-all hover:scale-105 glow-on-hover"
              >
                Become a Partner
              </Button>
            </div>
            <div className="animate-scale-in flex justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/2684baf7-e57c-4fbd-a59a-9a0eabc6f7c9.jpg" 
                alt="Global Trade Network" 
                className="rounded-3xl max-w-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-dark-primary to-[#0A0F24]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Who We Are?
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              SILK HARVEST - FZCO is an international trading company headquartered in the UAE. 
              We are committed to building long-term, trust-based partnerships through our comprehensive 
              approach to agricultural commodity trading.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0F24]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our Focus is Always on Quality
              </h2>
              <p className="text-2xl text-gray-300 mb-16">
                Premium agricultural commodities sourced and delivered with excellence
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary/30 flex items-center justify-center group-hover:border-secondary transition-all group-hover:scale-110">
                    <Icon name="Sprout" className="text-secondary" size={56} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pulses</h3>
                  <p className="text-sm text-gray-400">Chickpeas, Peas, Vetch, Lentils</p>
                </div>
                
                <div className="text-center group cursor-pointer">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-all group-hover:scale-110">
                    <Icon name="Wheat" className="text-gold" size={56} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Grains</h3>
                  <p className="text-sm text-gray-400">Millet, Sorghum, Oats, Corn</p>
                </div>
                
                <div className="text-center group cursor-pointer">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary/30 flex items-center justify-center group-hover:border-secondary transition-all group-hover:scale-110">
                    <Icon name="Droplet" className="text-secondary" size={56} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Oilseeds</h3>
                  <p className="text-sm text-gray-400">Flax, Rapeseed, Mustard</p>
                </div>
                
                <div className="text-center group cursor-pointer">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-all group-hover:scale-110">
                    <Icon name="Package" className="text-gold" size={56} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Other</h3>
                  <p className="text-sm text-gray-400">Coriander, Gluten, Buckwheat</p>
                </div>
              </div>
              
              <p className="text-xl font-semibold mt-12 text-gold text-center">
                We are ready to discuss supplies of all product lines
              </p>
            </div>
            
            <div className="animate-on-scroll flex justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/9a2aeeb9-ed6a-45cc-b7df-7e51d3efae06.jpg" 
                alt="Premium Quality Products" 
                className="rounded-3xl shadow-2xl max-w-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-secondary via-emerald-800 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              We See the Quality Through Your Eyes
            </h2>
            <p className="text-3xl font-light mb-4 italic opacity-95">
              We Don't Take Their Word For It — We Verify It.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mt-20 border-2 border-white/20">
              <div className="flex items-center justify-center mb-8">
                <Icon name="Video" size={72} className="text-gold" />
              </div>
              <h3 className="text-4xl font-bold mb-6">Your Benefit</h3>
              <p className="text-2xl leading-relaxed opacity-95 max-w-4xl mx-auto">
                Comprehensive photo and video reports for every shipment. 
                You see the product's condition before it ships.
              </p>
            </div>
            
            <div className="mt-24 bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold mb-16">Our Quality Control Process</h3>
              <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-4">
                <div className="flex items-center space-x-6">
                  <div className="text-center min-w-[180px]">
                    <div className="w-28 h-28 rounded-full bg-gold/20 border-4 border-gold flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={48} className="text-gold" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Inspection</h4>
                    <p className="text-sm opacity-80">Source verification</p>
                  </div>
                  
                  <Icon name="ArrowRight" size={40} className="text-gold" />
                  
                  <div className="text-center min-w-[180px]">
                    <div className="w-28 h-28 rounded-full bg-gold/20 border-4 border-gold flex items-center justify-center mx-auto mb-4">
                      <Icon name="TestTube" size={48} className="text-gold" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Testing</h4>
                    <p className="text-sm opacity-80">Quality analysis</p>
                  </div>
                  
                  <Icon name="ArrowRight" size={40} className="text-gold" />
                  
                  <div className="text-center min-w-[180px]">
                    <div className="w-28 h-28 rounded-full bg-gold/20 border-4 border-gold flex items-center justify-center mx-auto mb-4">
                      <Icon name="Settings" size={48} className="text-gold" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Processing</h4>
                    <p className="text-sm opacity-80">Preparation</p>
                  </div>
                  
                  <Icon name="ArrowRight" size={40} className="text-gold" />
                  
                  <div className="text-center min-w-[180px]">
                    <div className="w-28 h-28 rounded-full bg-gold/20 border-4 border-gold flex items-center justify-center mx-auto mb-4">
                      <Icon name="Camera" size={48} className="text-gold" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Reporting</h4>
                    <p className="text-sm opacity-80">Documentation</p>
                  </div>
                  
                  <Icon name="ArrowRight" size={40} className="text-gold" />
                  
                  <div className="text-center min-w-[180px]">
                    <div className="w-28 h-28 rounded-full bg-gold/20 border-4 border-gold flex items-center justify-center mx-auto mb-4">
                      <Icon name="ShieldCheck" size={48} className="text-gold" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Approval</h4>
                    <p className="text-sm opacity-80">Final clearance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-dark-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Focus on Your Business
              </h2>
              <p className="text-3xl text-gray-300 mb-6">
                Leave the Logistics to Us
              </p>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                We manage the entire supply chain so you receive your goods in one simple order
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center">
                    <Icon name="Search" className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Procurement and Inspection</h3>
                    <p className="text-gray-400 text-lg">Expert sourcing with on-site quality verification</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center">
                    <Icon name="PackageCheck" className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Preparation & Clearance</h3>
                    <p className="text-gray-400 text-lg">Professional handling and customs documentation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center">
                    <Icon name="Ship" className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Transport & Routes</h3>
                    <p className="text-gray-400 text-lg">Optimized multimodal logistics solutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center">
                    <Icon name="Shield" className="text-gold" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Full Insurance & Security</h3>
                    <p className="text-gray-400 text-lg">We assume all international payment and cargo risks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-[#1a2347] to-[#0d1326] rounded-3xl p-16 border-2 border-gold/30">
                <h3 className="text-3xl font-bold mb-16 text-center text-gold">Door-to-Door Supply Chain</h3>
                <div className="space-y-12">
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-24 rounded-full bg-gold/20 border-3 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon name="Factory" size={44} className="text-gold" />
                    </div>
                    <div className="flex-1 mx-6 border-t-2 border-dashed border-gold/50"></div>
                    <div className="w-24 h-24 rounded-full bg-gold/20 border-3 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={44} className="text-gold" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="border-l-2 border-dashed border-gold/50 h-16"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-24 rounded-full bg-gold/20 border-3 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon name="Ship" size={44} className="text-gold" />
                    </div>
                    <div className="flex-1 mx-6 border-t-2 border-dashed border-gold/50"></div>
                    <div className="w-24 h-24 rounded-full bg-gold/20 border-3 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon name="Warehouse" size={44} className="text-gold" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mt-12">
                    <div className="w-32 h-32 rounded-full bg-secondary/20 border-4 border-secondary flex items-center justify-center">
                      <Icon name="CheckCircle2" size={56} className="text-secondary" />
                    </div>
                  </div>
                  <p className="text-center text-2xl font-bold text-secondary">Delivered Successfully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0F24]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Why We Are Your Most Reliable Partner?
            </h2>
            <p className="text-4xl font-light mb-20 text-gold">
              No Surprises. Just Reliability.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-dark-primary border-2 border-white/20 hover:border-gold transition-all hover:scale-105 group">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 border-4 border-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Eye" className="text-secondary" size={64} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">On-The-Ground Quality Control</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our team personally inspects every batch. No middlemen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark-primary border-2 border-white/20 hover:border-gold transition-all hover:scale-105 group">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 border-4 border-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Camera" className="text-secondary" size={64} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Complete Transparency</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Photo and video reports at all stages. You are informed 24/7.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark-primary border-2 border-white/20 hover:border-gold transition-all hover:scale-105 group">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border-4 border-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="ShieldCheck" className="text-gold" size={64} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Comprehensive Risk Management</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We insure cargo and assume all currency risks. Your money and goods are secure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-dark-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Global Supply Footprint
            </h2>
            <p className="text-2xl text-gray-300 mb-20">
              We ensure reliable delivery to key demand hubs
            </p>
            
            <div className="mb-20 relative">
              <img 
                src="https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/df6efea6-4407-4cde-bf37-016cf9d6aa8c.jpg" 
                alt="Global Trade Routes" 
                className="rounded-3xl shadow-2xl mx-auto border-2 border-gold/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {['Pakistan', 'India', 'UAE', 'Saudi Arabia', 'Turkey', 'Egypt', 'Bangladesh', 'Israel'].map((country) => (
                <div 
                  key={country}
                  className="bg-dark-primary border-2 border-gold/30 rounded-xl p-6 text-center font-semibold text-xl hover:border-gold hover:bg-[#1a2347] transition-all hover:scale-105 cursor-pointer"
                >
                  <Icon name="MapPin" className="inline-block mr-2 text-gold" size={28} />
                  {country}
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm rounded-3xl p-12 border-2 border-secondary/30">
              <h3 className="text-4xl font-bold mb-6">Our Goal</h3>
              <p className="text-2xl leading-relaxed text-gray-300">
                To become your single and most reliable partner in agricultural trade
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let's Build Business Together!
            </h2>
            <p className="text-2xl text-gray-300 mb-16">
              Ready to discuss your requirements? Contact us for a fully transparent proposal.
            </p>
            
            <Card className="bg-dark-primary border-2 border-gold/40 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="space-y-8 text-left">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-gold/20 border-3 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon name="Building2" className="text-gold" size={36} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Company Name</p>
                      <p className="text-3xl font-semibold">SILK HARVEST - FZCO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-gold/20 border-3 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-gold" size={36} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="text-3xl font-semibold">info@silkharvest.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-gold/20 border-3 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-gold" size={36} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <p className="text-3xl font-semibold">+971 XX XXX XXXX</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full mt-12 bg-gold hover:bg-gold/90 text-primary text-2xl font-bold py-9 rounded-full transition-all hover:scale-105 glow-on-hover"
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black/90 py-12 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-3xl font-bold mb-3">SILK HARVEST - FZCO</p>
          <p className="text-xl text-gray-400 mb-6">Your Reliable Partner in Agricultural Trade</p>
          <p className="text-sm text-gray-500">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
