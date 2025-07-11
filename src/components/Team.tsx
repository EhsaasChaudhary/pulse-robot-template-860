import React, { useEffect, useRef } from "react";

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "Robotics & AI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Engineer",
      expertise: "Mechanical Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Aisha Patel",
      role: "AI Research Director",
      expertise: "Machine Learning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Hardware Architect",
      expertise: "Systems Integration",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-gray-50" ref={sectionRef}>
      <div className="section-container opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-3 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Our Team</span>
            </div>
            
            <h2 className="section-title mb-6">
              The Minds Behind Atlas
            </h2>
            
            <p className="section-subtitle">
              Meet the brilliant engineers, researchers, and visionaries who are 
              bringing the future of robotics to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-pulse-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Join our growing team of innovators and help shape the future of human-robot interaction.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-pulse-500 hover:bg-pulse-600 text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;