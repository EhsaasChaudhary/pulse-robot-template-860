import React, { useEffect, useRef } from "react";

const AITechnology = () => {
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

  return (
    <section id="ai-technology" className="py-12 sm:py-16 md:py-20 bg-gray-50" ref={sectionRef}>
      <div className="section-container opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-3 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>AI Technology</span>
            </div>
            
            <h2 className="section-title mb-6">
              Advanced AI at the Core
            </h2>
            
            <p className="section-subtitle">
              Atlas is powered by cutting-edge artificial intelligence that enables 
              true understanding and meaningful interaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pulse-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulse-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Neural Processing</h3>
                    <p className="text-gray-600">Advanced neural networks process sensory input in real-time, enabling rapid decision-making and adaptive responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pulse-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulse-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Understanding</h3>
                    <p className="text-gray-600">Sophisticated language models enable Atlas to understand context, emotion, and intent in human communication.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pulse-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulse-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
                    <p className="text-gray-600">Advanced visual processing allows Atlas to recognize objects, people, and environments with remarkable accuracy.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <img 
                  src="/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png" 
                  alt="AI Technology Visualization" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pulse-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pulse-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechnology;