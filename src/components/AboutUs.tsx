import React, { useEffect, useRef } from "react";

const AboutUs = () => {
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
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white" ref={sectionRef}>
      <div className="section-container opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pulse-chip mx-auto mb-3 sm:mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>About Us</span>
          </div>
          
          <h2 className="section-title mb-6">
            Pioneering the Future of <br className="hidden sm:block" />Human-Robot Collaboration
          </h2>
          
          <p className="section-subtitle mb-8">
            We are a team of visionary engineers, researchers, and designers dedicated to creating 
            the next generation of intelligent humanoid robots. Our mission is to bridge the gap 
            between artificial intelligence and human intuition.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pulse-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing the boundaries of what's possible in robotics and AI</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pulse-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">Working alongside humans to enhance daily life and productivity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pulse-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">Building reliable, safe, and ethical AI companions for the future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;