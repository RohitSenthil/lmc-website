import { useState } from "react";
import { Footprints, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 animate-slide-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Footprints className="h-8 w-8 text-atlanta-red" />
            <span className="text-xl font-bold text-gray-900">Safe Streets Atlanta</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-atlanta-red transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('crisis')}
              className="text-gray-700 hover:text-atlanta-red transition-colors"
            >
              The Crisis
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-atlanta-red transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-gray-700 hover:text-atlanta-red transition-colors"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-atlanta-red transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-gray-700 hover:text-atlanta-red transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('crisis')}
                className="block px-3 py-2 text-gray-700 hover:text-atlanta-red transition-colors w-full text-left"
              >
                The Crisis
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block px-3 py-2 text-gray-700 hover:text-atlanta-red transition-colors w-full text-left"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('timeline')}
                className="block px-3 py-2 text-gray-700 hover:text-atlanta-red transition-colors w-full text-left"
              >
                Timeline
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-atlanta-red transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
