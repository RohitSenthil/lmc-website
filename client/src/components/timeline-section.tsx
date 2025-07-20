import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { useState, useEffect, useRef } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TimelineSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [chartVisible, setChartVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const chartObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartVisible(true);
          chartObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px 0px'
      }
    );

    if (chartRef.current) {
      chartObserver.observe(chartRef.current);
    }

    return () => chartObserver.disconnect();
  }, []);
  const phases = [
    {
      number: 1,
      title: "Planning & Design",
      duration: "Months 1-2",
      color: "bg-safety-blue",
      borderColor: "border-safety-blue",
      timelineColor: "#1e40af", // safety-blue hex
      timePercent: 16.67, // 2 months out of 12 total
      tasks: [
        "Finalize partnership with Atlanta City Council",
        "Identify high-traffic areas for blue-light installations", 
        "Develop Public Safety Dashboard framework",
        "Determine priority crime hotspots for street cameras"
      ],
      position: "left"
    },
    {
      number: 2,
      title: "Infrastructure Preparation",
      duration: "Months 3-4", 
      color: "bg-atlanta-red",
      borderColor: "border-atlanta-red",
      timelineColor: "#dc2626", // atlanta-red hex
      timePercent: 16.67, // 2 months out of 12 total
      tasks: [
        "Perform on-site assessments",
        "Gather infrastructure for installations",
        "Test beta version of dashboard",
        "Secure installation permits"
      ],
      position: "right"
    },
    {
      number: 3,
      title: "Installation & Deployment",
      duration: "Months 5-8",
      color: "bg-progress-green",
      borderColor: "border-progress-green",
      timelineColor: "#059669", // progress-green hex
      timePercent: 33.33, // 4 months out of 12 total
      tasks: [
        "Install emergency blue light stations",
        "Deploy live-monitored cameras", 
        "Launch Public Safety Dashboard",
        "Begin community outreach"
      ],
      position: "left"
    },
    {
      number: 4,
      title: "Monitoring & Evaluation",
      duration: "Months 9-12",
      color: "bg-atlanta-gold",
      borderColor: "border-atlanta-gold",
      timelineColor: "#f59e0b", // atlanta-gold hex (matching CSS variable)
      timePercent: 33.33, // 4 months out of 12 total
      tasks: [
        "Monitor safety improvements",
        "Collect usage and effectiveness data",
        "Prepare expansion recommendations",
        "Refine Public Safety Dashboard"
      ],
      position: "right"
    }
  ];

  const budgetItems = [
    { label: "Dashboard Development", amount: "$85,000", color: "#1e40af", percentage: "14.5%" },
    { label: "Blue Light Stations", amount: "$300,000", color: "#dc2626", percentage: "51.3%" },
    { label: "Camera Systems", amount: "$200,000", color: "#059669", percentage: "34.2%" }
  ];

  return (
    <section ref={sectionRef} id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Implementation Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured, phased approach to deliver immediate safety improvements 
            with measurable milestones and accountability.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line with proportional colored sections */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden lg:block overflow-hidden">
            {phases.map((phase, index) => {
              let topOffset = 0;
              for (let i = 0; i < index; i++) {
                topOffset += phases[i].timePercent;
              }
              
              return (
                <div
                  key={phase.number}
                  className="absolute w-full transition-all duration-1000 ease-out"
                  style={{
                    backgroundColor: phase.timelineColor,
                    height: `${phase.timePercent}%`,
                    top: `${topOffset}%`,
                    transform: 'scaleY(0)',
                    transformOrigin: 'top',
                    animation: isVisible ? `spreadDown 0.8s ease-out ${index * 0.8 + 0.8}s forwards` : 'none'
                  }}
                />
              );
            })}
          </div>

          {phases.map((phase, index) => (
            <div key={phase.number} className="relative flex items-center mb-12 lg:mb-16">
              {/* Desktop Layout */}
              <div className="hidden lg:flex w-full items-center">
                <div className={`w-1/2 ${phase.position === 'left' ? 'pr-8 text-right' : 'order-2 pl-8'}`}>
                  <div className={`bg-white rounded-xl shadow-lg p-6 ${phase.position === 'left' ? 'border-l-4' : 'border-r-4'} ${phase.borderColor} hover-lift relative`} 
                       style={{
                         opacity: 0,
                         transform: `translate(${phase.position === 'left' ? '100px' : '-100px'}, 0)`,
                         animation: isVisible ? `slideIn 0.8s ease-out ${index * 0.8 + 0.8}s forwards` : 'none'
                       }}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-gray-600 mb-3">{phase.duration}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="animate-fade-in-up" style={{animationDelay: `${index * 0.8 + taskIndex * 0.1 + 2.8}s`}}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm z-10" 
                     style={{
                       // Position bubble at the end of its timeline section
                       top: `${phases.slice(0, index + 1).reduce((sum, p) => sum + p.timePercent, 0)}%`,
                       transform: 'translate(-50%, -50%)'
                     }}>
                  <div 
                    className={`w-full h-full rounded-full flex items-center justify-center ${phase.color} animate-scale-in hover-scale`} 
                    style={{
                      animationDelay: isVisible ? `${index * 0.8 + 2.0}s` : 'none',
                      opacity: 0,
                      animation: isVisible ? `scaleIn 0.5s ease-out ${index * 0.8 + 1.1}s forwards, pulse 2s infinite ${index * 0.8 + 1.9}s` : 'none'
                    }}
                  >
                    {phase.number}
                  </div>
                </div>
                {phase.position === 'right' && <div className="w-1/2"></div>}
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden w-full">
                <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${phase.borderColor} hover-lift`} 
                     style={{
                       opacity: 0,
                       transform: 'translateX(80px)',
                       animation: isVisible ? `slideIn 0.8s ease-out ${index * 0.8 + 0.8}s forwards` : 'none'
                     }}>
                  <div className="flex items-center mb-4">
                    <div className={`w-8 h-8 rounded-full ${phase.color} text-white flex items-center justify-center text-sm font-bold mr-3 hover-scale`} 
                         style={{
                           opacity: 0,
                           animation: isVisible ? `scaleIn 0.5s ease-out ${index * 0.8 + 1.1}s forwards` : 'none'
                         }}>
                      {phase.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600">{phase.duration}</p>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{animationDelay: isVisible ? `${index * 0.8 + taskIndex * 0.1 + 2.8}s` : 'none'}}>• {task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Budget Summary */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center hover-lift" style={{
          opacity: chartVisible ? 1 : 0,
          transform: chartVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
        }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{
            opacity: chartVisible ? 1 : 0,
            transform: chartVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
          }}>Project Investment</h3>
          <div className="text-5xl font-bold text-safety-blue mb-2" style={{
            opacity: chartVisible ? 1 : 0,
            transform: chartVisible ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
          }}>$585,000</div>
          <p className="text-gray-600 mb-6" style={{
            opacity: chartVisible ? 1 : 0,
            transform: chartVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
          }}>Sourced from existing city infrastructure funds</p>
          
          {/* Animated Doughnut Chart */}
          <div ref={chartRef} className="mb-8" style={{opacity: chartVisible ? 1 : 0, transition: 'opacity 0.3s ease-out'}}>
            <div className="h-80 flex justify-center">
              <div className="w-80 h-80">
                <Doughnut 
                  key={chartVisible ? "animated-chart" : "static-chart"}
                  data={{
                    labels: ['Dashboard Development', 'Blue Light Stations', 'Camera Systems'],
                    datasets: [{
                      data: [85, 300, 200],
                      backgroundColor: ['#1e40af', '#dc2626', '#059669'],
                      borderWidth: 3,
                      borderColor: '#ffffff',
                      hoverOffset: 10
                    }]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    animation: chartVisible ? {
                      animateRotate: true,
                      animateScale: true,
                      duration: 1500,
                      delay: 200,
                      easing: 'easeOutCubic'
                    } : false,
                    plugins: {
                      legend: {
                        display: false
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => `${context.label}: $${context.parsed}K`
                        }
                      }
                    }
                  } as ChartOptions<'doughnut'>}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {budgetItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover-lift" style={{
                opacity: chartVisible ? 1 : 0,
                transform: chartVisible ? 'translateY(0)' : 'translateY(15px)',
                transition: `opacity 0.6s ease-out ${index * 0.1 + 0.7}s, transform 0.6s ease-out ${index * 0.1 + 0.7}s`
              }}>
                <div className="flex items-center space-x-2 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="font-semibold text-gray-900">{item.label}</div>
                </div>
                <div className="text-lg font-bold text-safety-blue">{item.amount}</div>
                <div className="text-gray-500">{item.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
