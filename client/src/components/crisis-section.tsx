import { AlertTriangle, MapPin, Scale, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function AnimatedNumber({ target, prefix = "", suffix = "", delay = 0, trigger = false }: { 
  target: number; 
  prefix?: string;
  suffix?: string; 
  delay?: number;
  trigger?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    
    const timer = setTimeout(() => {
      setIsAnimating(true);
      const duration = 1500;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
          setIsAnimating(false);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [target, delay, trigger]);

  return (
    <span className={`transition-all duration-100 ${isAnimating ? 'animate-pulse' : ''}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function CrisisSection() {
  const [isVisible, setIsVisible] = useState(false);
  const statisticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px 0px'
      }
    );

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statistics = [
    {
      number: 1431,
      label: "Pedestrian Crashes",
      subtitle: "In a single year",
      color: "border-safety-red",
    },
    {
      number: 108,
      label: "Pedestrian Deaths",
      subtitle: "Lives lost unnecessarily",
      color: "border-safety-red",
    },
    {
      number: 660,
      prefix: "$",
      suffix: "M",
      label: "Unspent Funds",
      subtitle: "Vision Zero allocation",
      color: "border-atlanta-red",
    },
  ];

  const problems = [
    {
      icon: AlertTriangle,
      text: "Wide, busy streets with inadequate pedestrian protection create deadly conditions",
    },
    {
      icon: MapPin,
      text: "High-risk areas include Peachtree Street, Northside Drive, and MLK Jr. Drive",
    },
    {
      icon: Scale,
      text: "Safety improvements favor wealthy areas like Buckhead while underserved neighborhoods are left behind",
    },
    {
      icon: Clock,
      text: "Vision Zero progress is lagging while residents   immediate safety measures",
    },
  ];

  return (
    <section id="crisis" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Atlanta's Pedestrian Safety Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Despite efforts like Vision Zero, Atlanta remains one of the least
            walkable major cities in the US, resulting in devastating consequences for
            residents, especially those in underserved neighborhoods.
          </p>
        </div>

        {/* Statistics Grid */}
        <div ref={statisticsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 text-center border-t-4 ${stat.color} hover-lift`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`
              }}
            >
              <div className="text-4xl font-bold text-safety-red mb-2">
                <AnimatedNumber 
                  target={stat.number} 
                  prefix={stat.prefix}
                  suffix={stat.suffix} 
                  delay={index * 200 + 300}
                  trigger={isVisible}
                />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
              <div className="text-sm text-gray-500 mt-2">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Problem Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <img
              src="https://www.wjbf.com/wp-content/uploads/sites/47/2024/03/65f32c1870bec8.95890132.jpeg?w=1280"
              alt="Pedestrians crossing busy Atlanta street"
              className="rounded-xl shadow-lg w-full h-auto hover-scale"
            />
          </div>
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Reality of Our Streets
            </h3>
            <div className="space-y-4 text-gray-600">
              {problems.map((problem, index) => (
                <p 
                  key={index} 
                  className="flex items-start space-x-3 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1 + 0.2}s`}}
                >
                  <problem.icon className="h-5 w-5 text-safety-red mt-1 flex-shrink-0" />
                  <span>{problem.text}</span>
                </p>
              ))}
            </div>

            <blockquote className="mt-8 p-6 bg-gray-100 border-l-4 border-atlanta-red rounded-r-lg">
              <p className="italic text-gray-700 mb-2">
                "I was hit by a car as a pedestrian... I woke up lying in the
                middle of the street not knowing why I was there."
              </p>
              <cite className="text-sm text-gray-500">
                — Atlanta Resident, Vision Zero Action Plan
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
