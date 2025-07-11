import React, { useEffect, useRef } from "react";

const Projects = () => {
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

  const projects = [
    {
      title: "Healthcare Assistant",
      description: "Atlas supports medical professionals with patient care, medication management, and routine monitoring tasks.",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      status: "Active Deployment"
    },
    {
      title: "Educational Companion",
      description: "Personalized learning experiences for students, providing tutoring and interactive educational content.",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      status: "Pilot Program"
    },
    {
      title: "Industrial Automation",
      description: "Enhancing manufacturing processes with precision, safety, and adaptive problem-solving capabilities.",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      status: "Research Phase"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white" ref={sectionRef}>
      <div className="section-container opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-3 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Projects & Missions</span>
            </div>
            
            <h2 className="section-title mb-6">
              Real-World Applications
            </h2>
            
            <p className="section-subtitle">
              Discover how Atlas is making a difference across various industries 
              and use cases, from healthcare to education and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gray-200 rounded-t-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs bg-pulse-100 text-pulse-600 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;