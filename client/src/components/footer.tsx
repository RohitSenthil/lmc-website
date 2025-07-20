import { Footprints } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: "The Crisis", sectionId: "crisis" },
    { label: "Our Solutions", sectionId: "solutions" },
    { label: "Timeline", sectionId: "timeline" },
    { label: "Contact", sectionId: "contact" }
  ];

  const resources = [
    { label: "Vision Zero Atlanta", href: "https://atldot.atlantaga.gov/programs/vision-zero" },
    { label: "Propel ATL Report", href: "http://www.letspropelatl.org/2025_crash_report_story_map" },
    { label: "City Council Contacts", href: "https://citycouncil.atlantaga.gov/other/council-contact-information" },
    { label: "Traffic Safety Data", href: "https://lawyers.law.com/article/pedestrian-accident-hotspots-in-atlanta-ga.html#:~:text=Midtown,city's%20most%20accident%2Dprone%20areas" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Footprints className="h-8 w-8 text-atlanta-red" />
              <span className="text-xl font-bold">Safe Streets Atlanta</span>
            </div>
            <p className="text-gray-400">
              A citizen-led initiative to make Atlanta's streets safer for pedestrians through immediate, 
              targeted safety improvements and transparent accountability.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-gray-400 hover:text-white transition-colors block text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  {resource.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Safe Streets Atlanta Initiative. Lives matter more than convenience.</p>
        </div>
      </div>
    </footer>
  );
}
