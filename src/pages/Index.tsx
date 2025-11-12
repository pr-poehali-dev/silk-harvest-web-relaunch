import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.75), rgba(26, 31, 44, 0.75)), url('https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/42df04e5-4082-4693-995a-0e562e08275b.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            SILK HARVEST - FZCO
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Your Reliable Partner in Integrated Agricultural Trade
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We supply high-quality agricultural products with a complete service built on transparency, reliability, and rigorous quality control.
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full font-semibold transition-transform hover:scale-105"
          >
            Become a Partner
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
              Who We Are?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              SILK HARVEST - FZCO is an international trading company headquartered in the UAE. 
              We are committed to building long-term, trust-based partnerships through our comprehensive 
              approach to agricultural commodity trading.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Our Focus is Always on Quality and a Wide Range of Products
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16">
            Premium agricultural commodities sourced and delivered with excellence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Sprout" className="text-secondary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-primary">Pulses</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Chickpeas</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Peas</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Vetch</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Lentils</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Wheat" className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-primary">Grains</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Millet</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Sorghum</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Oats</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Corn</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Droplet" className="text-secondary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-primary">Oilseeds</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Flax</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Rapeseed</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Mustard</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Safflower</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Package" className="text-accent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-primary">Other Products</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Coriander</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Gluten</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Buckwheat</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Other cereals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center mt-12 text-lg font-semibold text-primary">
            We are ready to discuss supplies of all product lines
          </p>
        </div>
      </section>

      <section 
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.95), rgba(16, 185, 129, 0.95)), url('https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/2db564f3-7bb3-401f-ba61-5f1d24c379aa.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We See the Quality Through Your Eyes
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-4 italic">
              We Don't Take Their Word For It — We Verify It.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <div className="flex items-center justify-center mb-6">
                <Icon name="Video" size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Benefit</h3>
              <p className="text-xl leading-relaxed">
                Comprehensive photo and video reports for every shipment. 
                You see the product's condition before it ships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">1</div>
                <h4 className="font-semibold text-lg mb-2">Source Inspection</h4>
                <p className="text-sm opacity-90">Direct verification at origin</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">2</div>
                <h4 className="font-semibold text-lg mb-2">Pre-shipment Control</h4>
                <p className="text-sm opacity-90">Quality check before loading</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">3</div>
                <h4 className="font-semibold text-lg mb-2">Documentation</h4>
                <p className="text-sm opacity-90">Complete visual evidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Focus on Your Business. Leave the Logistics to Us.
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            We manage the entire supply chain so you receive your goods in one simple order
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Search" className="text-secondary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Procurement and Inspection</h3>
                <p className="text-muted-foreground">Expert sourcing with on-site quality verification</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="PackageCheck" className="text-secondary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Preparation & Packaging</h3>
                <p className="text-muted-foreground">Professional handling and secure packaging</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Ship" className="text-secondary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Transport & Routes</h3>
                <p className="text-muted-foreground">Optimized multimodal logistics solutions</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="FileCheck" className="text-secondary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Customs Clearance</h3>
                <p className="text-muted-foreground">Seamless documentation and compliance</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Shield" className="text-secondary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Cargo Insurance</h3>
                <p className="text-muted-foreground">Full coverage for complete peace of mind</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="DollarSign" className="text-accent" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Financial Security</h3>
                <p className="text-muted-foreground">We assume all international payment risks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why We Are Your Most Reliable Partner?
          </h2>
          <p className="text-center text-3xl font-light mb-16 text-accent">
            No Surprises. Just Reliability.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CardContent className="pt-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Eye" className="text-secondary" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">On-The-Ground Quality Control</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our team personally inspects every batch. No middlemen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CardContent className="pt-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Camera" className="text-secondary" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Complete Transparency</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Photo and video reports at all stages. You are informed 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CardContent className="pt-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="ShieldCheck" className="text-accent" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Comprehensive Risk Management</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  We insure cargo and assume all currency risks. Your money and goods are secure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://cdn.poehali.dev/projects/1621d6d4-b766-46b6-9e39-cbaf29cf7b2a/files/f5b1a36c-2ab3-485b-96b2-5aef60200be5.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Our Global Supply Footprint
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            We ensure reliable delivery to key demand hubs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {['Pakistan', 'India', 'UAE', 'Saudi Arabia', 'Turkey', 'Egypt', 'Bangladesh', 'Israel'].map((country) => (
              <div 
                key={country}
                className="bg-white border-2 border-secondary/20 rounded-lg p-4 text-center font-semibold text-primary hover:border-secondary hover:shadow-lg transition-all"
              >
                <Icon name="MapPin" className="inline-block mr-2 text-secondary" size={20} />
                {country}
              </div>
            ))}
          </div>
          
          <div className="text-center bg-secondary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Goal</h3>
            <p className="text-xl text-muted-foreground">
              To become your single and most reliable partner in agricultural trade
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Business Together!
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Ready to discuss your requirements? Contact us for a fully transparent proposal.
            </p>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6 text-left">
                  <div className="flex items-center space-x-4">
                    <Icon name="Building2" className="text-accent" size={28} />
                    <div>
                      <p className="text-sm opacity-70">Company Name</p>
                      <p className="text-xl font-semibold">SILK HARVEST - FZCO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" className="text-accent" size={28} />
                    <div>
                      <p className="text-sm opacity-70">Email</p>
                      <p className="text-xl font-semibold">info@silkharvest.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" className="text-accent" size={28} />
                    <div>
                      <p className="text-sm opacity-70">Phone</p>
                      <p className="text-xl font-semibold">+971 XX XXX XXXX</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full mt-8 bg-accent hover:bg-accent/90 text-primary text-lg font-bold py-6 rounded-full transition-transform hover:scale-105"
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">SILK HARVEST - FZCO</p>
          <p className="opacity-70">Your Reliable Partner in Agricultural Trade</p>
          <p className="text-sm opacity-50 mt-4">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
