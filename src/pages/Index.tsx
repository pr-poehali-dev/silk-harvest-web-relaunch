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
    <div className="min-h-screen bg-white">
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.85)), url('https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/945396b6-e2c7-4555-a925-9d2807a2822e.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            SILK HARVEST - FZCO
          </h1>
          <p className="text-2xl md:text-4xl mb-6 font-light">
            Your Reliable Partner in Integrated Agricultural Trade
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
            We supply high-quality agricultural products with a complete service built on transparency, reliability, and rigorous quality control.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary text-lg px-12 py-7 rounded-full font-bold transition-all hover:scale-105 glow-on-hover"
          >
            Become a Partner
          </Button>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary">
                Who We Are?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                SILK HARVEST - FZCO is an international trading company headquartered in the UAE. 
                We are committed to building long-term, trust-based partnerships through our comprehensive 
                approach to agricultural commodity trading.
              </p>
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" className="text-secondary" size={24} />
                  <span className="font-semibold">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" className="text-accent" size={24} />
                  <span className="font-semibold">Trusted Partner</span>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll flex justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/3d247b17-df10-4562-9b41-6f75a7a74efe.jpg" 
                alt="Global Trade Network" 
                className="rounded-3xl shadow-2xl max-w-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-primary via-slate-900 to-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-on-scroll order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/023cd46c-3f0c-4db2-9d18-2b5f1d6cae59.jpg" 
                alt="Premium Quality Products" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="animate-on-scroll text-white order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Our Focus is Always on Quality
              </h2>
              <p className="text-xl mb-12 opacity-90">
                Premium agricultural commodities sourced and delivered with excellence
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <Icon name="Sprout" className="text-secondary mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">Pulses</h3>
                  <p className="text-sm opacity-75">Chickpeas, Peas, Vetch, Lentils</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <Icon name="Wheat" className="text-accent mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">Grains</h3>
                  <p className="text-sm opacity-75">Millet, Sorghum, Oats, Corn</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <Icon name="Droplet" className="text-secondary mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">Oilseeds</h3>
                  <p className="text-sm opacity-75">Flax, Rapeseed, Mustard, Safflower</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <Icon name="Package" className="text-accent mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">Other Products</h3>
                  <p className="text-sm opacity-75">Coriander, Gluten, Buckwheat</p>
                </div>
              </div>
              
              <p className="text-lg font-semibold mt-8 text-accent">
                We are ready to discuss supplies of all product lines
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-secondary via-emerald-600 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              We See the Quality Through Your Eyes
            </h2>
            <p className="text-3xl font-light mb-4 italic opacity-90">
              We Don't Take Their Word For It — We Verify It.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 mt-16 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <Icon name="Video" size={64} className="text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Your Benefit</h3>
              <p className="text-2xl leading-relaxed opacity-95">
                Comprehensive photo and video reports for every shipment. 
                You see the product's condition before it ships.
              </p>
            </div>
            
            <div className="flex items-center justify-center mt-20 space-x-4 md:space-x-8 overflow-x-auto pb-4">
              <div className="flex items-center space-x-4 md:space-x-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[200px] border border-white/20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={32} className="text-accent" />
                  </div>
                  <div className="text-5xl font-bold mb-2">1</div>
                  <h4 className="font-semibold text-xl mb-2">Source Inspection</h4>
                  <p className="text-sm opacity-80">Direct verification at origin</p>
                </div>
                
                <Icon name="ArrowRight" size={32} className="text-accent hidden md:block" />
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[200px] border border-white/20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="PackageCheck" size={32} className="text-accent" />
                  </div>
                  <div className="text-5xl font-bold mb-2">2</div>
                  <h4 className="font-semibold text-xl mb-2">Pre-shipment Control</h4>
                  <p className="text-sm opacity-80">Quality check before loading</p>
                </div>
                
                <Icon name="ArrowRight" size={32} className="text-accent hidden md:block" />
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[200px] border border-white/20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Camera" size={32} className="text-accent" />
                  </div>
                  <div className="text-5xl font-bold mb-2">3</div>
                  <h4 className="font-semibold text-xl mb-2">Documentation</h4>
                  <p className="text-sm opacity-80">Complete visual evidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                Focus on Your Business
              </h2>
              <p className="text-2xl text-muted-foreground mb-12">
                Leave the Logistics to Us
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We manage the entire supply chain so you receive your goods in one simple order
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Search" className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Procurement and Inspection</h3>
                    <p className="text-muted-foreground">Expert sourcing with on-site quality verification</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="PackageCheck" className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Preparation & Packaging</h3>
                    <p className="text-muted-foreground">Professional handling and secure packaging</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Ship" className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Transport & Routes</h3>
                    <p className="text-muted-foreground">Optimized multimodal logistics solutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="DollarSign" className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Financial Security</h3>
                    <p className="text-muted-foreground">We assume all international payment risks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-primary to-slate-900 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-12 text-center">Door-to-Door Supply Chain</h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Factory" size={36} className="text-accent" />
                    </div>
                    <Icon name="ArrowRight" size={28} className="text-accent/50" />
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={36} className="text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Ship" size={36} className="text-accent" />
                    </div>
                    <Icon name="ArrowRight" size={28} className="text-accent/50" />
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Warehouse" size={36} className="text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mt-8">
                    <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="CheckCircle2" size={48} className="text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-primary via-slate-900 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why We Are Your Most Reliable Partner?
            </h2>
            <p className="text-4xl font-light mb-20 text-accent">
              No Surprises. Just Reliability.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-28 h-28 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="Eye" className="text-secondary" size={56} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">On-The-Ground Quality Control</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Our team personally inspects every batch. No middlemen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-28 h-28 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="Camera" className="text-secondary" size={56} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Complete Transparency</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Photo and video reports at all stages. You are informed 24/7.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-28 h-28 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon name="ShieldCheck" className="text-accent" size={56} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Comprehensive Risk Management</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We insure cargo and assume all currency risks. Your money and goods are secure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.92), rgba(17, 24, 39, 0.92)), url('https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/df6efea6-4407-4cde-bf37-016cf9d6aa8c.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center text-white animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Global Supply Footprint
            </h2>
            <p className="text-2xl mb-16 opacity-90">
              We ensure reliable delivery to key demand hubs
            </p>
            
            <div className="mb-16">
              <img 
                src="https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/df6efea6-4407-4cde-bf37-016cf9d6aa8c.jpg" 
                alt="Global Trade Routes" 
                className="rounded-3xl shadow-2xl mx-auto opacity-90"
              />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {['Pakistan', 'India', 'UAE', 'Saudi Arabia', 'Turkey', 'Egypt', 'Bangladesh', 'Israel'].map((country) => (
                <div 
                  key={country}
                  className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-xl p-6 text-center font-semibold text-lg hover:border-accent hover:bg-white/20 transition-all hover:scale-105"
                >
                  <Icon name="MapPin" className="inline-block mr-2 text-accent" size={24} />
                  {country}
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/20 backdrop-blur-sm rounded-3xl p-12 border border-secondary/30">
              <h3 className="text-3xl font-bold mb-6">Our Goal</h3>
              <p className="text-2xl leading-relaxed">
                To become your single and most reliable partner in agricultural trade
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-slate-900 via-primary to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let's Build Business Together!
            </h2>
            <p className="text-2xl mb-16 opacity-90">
              Ready to discuss your requirements? Contact us for a fully transparent proposal.
            </p>
            
            <Card className="bg-white/10 border-accent/30 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="space-y-8 text-left">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Building2" className="text-accent" size={32} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 mb-1">Company Name</p>
                      <p className="text-2xl font-semibold">SILK HARVEST - FZCO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-accent" size={32} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 mb-1">Email</p>
                      <p className="text-2xl font-semibold">info@silkharvest.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-accent" size={32} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 mb-1">Phone</p>
                      <p className="text-2xl font-semibold">+971 XX XXX XXXX</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full mt-12 bg-accent hover:bg-accent/90 text-primary text-xl font-bold py-8 rounded-full transition-all hover:scale-105 glow-on-hover"
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-3">SILK HARVEST - FZCO</p>
          <p className="text-lg opacity-70 mb-6">Your Reliable Partner in Agricultural Trade</p>
          <p className="text-sm opacity-50">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
