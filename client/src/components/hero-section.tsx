import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('https://atlantaregional.org/wp-content/uploads/atl-skyline-daytime-connector.jpg')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
          Make Atlanta
          <span className="text-atlanta-gold block opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Walkable & Safe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Every year, over 1,400 pedestrians are injured and 108 die on Atlanta's streets. 
          It's time for immediate action to protect our communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => scrollToSection('crisis')}
            className="bg-atlanta-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover-lift"
          >
            See the Crisis
          </button>
          <button 
            onClick={() => scrollToSection('solutions')}
            className="bg-white hover:bg-gray-100 text-safety-blue px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover-lift"
          >
            Our Solutions
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
