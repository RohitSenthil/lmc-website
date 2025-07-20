import { BarChart3, DollarSign, Users, Scale, Phone, Eye, Clock, GraduationCap, Video, Shield, FileText, Lock, TrendingUp, Search, Ambulance, LineChart } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      number: 1,
      title: "Public Safety Dashboard",
      description: "A transparent, real-time tracking system showing where safety improvements are being made and how funds are distributed, ensuring equity across all neighborhoods.",
      image: "https://cdn.prod.website-files.com/6009dcb93fd7208338f02067/66be151807c4939f0e0ecbbe_vision-zero-dashboard-map.jpg",
      alt: "Digital dashboard showing urban infrastructure data",
      features: [
        { icon: BarChart3, text: "Real-time progress tracking" },
        { icon: DollarSign, text: "Transparent funding allocation" },
        { icon: Users, text: "Community accountability" },
        { icon: Scale, text: "Equitable distribution monitoring" }
      ],
      bgColor: "bg-safety-blue",
      borderColor: "border-safety-blue",
      iconColor: "text-progress-green"
    },
    {
      number: 2,
      title: "Emergency Blue Light Stations",
      description: "Highly visible emergency call stations installed near schools, parks, and MARTA stations, providing immediate access to 911 and deterring crime through increased visibility.",
      image: "https://cdn.prod.website-files.com/6668725505e5f93f8da359e3/679855cab62061dbcefdc812_Blue-light-towers-911Cellular-Emergency-Safety.jpg",
      alt: "Emergency blue light call station on university campus",
      features: [
        { icon: Phone, text: "One-button emergency access" },
        { icon: Eye, text: "High visibility deterrent" },
        { icon: Clock, text: "Faster emergency response" },
        { icon: GraduationCap, text: "Proven effectiveness on campuses" }
      ],
      bgColor: "bg-safety-blue",
      borderColor: "border-safety-blue",
      iconColor: "text-safety-blue"
    },
    {
      number: 3,
      title: "Live-Monitored Street Cameras",
      description: "Strategic placement of monitored security cameras with clear signage to deter crime and improve both actual and perceived safety in pedestrian zones.",
      image: "https://s4844.pcdn.co/wp-content/uploads/2015/03/Camera-e1547762627674-scaled.jpg",
      alt: "Modern security camera mounted on urban street pole",
      features: [
        { icon: Video, text: "Live monitoring capability" },
        { icon: Shield, text: "Up to 51% crime reduction" },
        { icon: FileText, text: "Clear safety signage" },
        { icon: Lock, text: "Privacy guideline compliance" }
      ],
      bgColor: "bg-safety-blue",
      borderColor: "border-atlanta-red",
      iconColor: "text-atlanta-red"
    }
  ];

  const benefits = [
    { icon: TrendingUp, text: "Faster Safety Upgrades" },
    { icon: Ambulance, text: "Fewer Pedestrian Deaths" },
    { icon: Users, text: "Friendlier Streets" }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Three-Point Action Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immediate, targeted interventions that can be implemented quickly to save lives 
            and make Atlanta's streets safer for everyone.
          </p>
        </div>

        {solutions.map((solution, index) => (
          <div key={solution.number} className="mb-20">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'} animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="flex items-center mb-6">
                  <div className={`${solution.bgColor} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 animate-scale-in hover-scale`}>
                    {solution.number}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  {solution.description}
                </p>
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center space-x-3"
                    >
                      <feature.icon className={`h-5 w-5 ${solution.iconColor}`} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'} animate-fade-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                <img 
                  src={solution.image}
                  alt={solution.alt}
                  className={`rounded-xl shadow-lg w-full hover-scale ${index === 0 ? 'h-48 sm:h-56 lg:h-80 object-contain' : 'h-auto'}`}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Benefits Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">Combined Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <benefit.icon className="h-12 w-12 mx-auto mb-3 text-white opacity-90" />
                <div className="font-semibold text-white">{benefit.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
