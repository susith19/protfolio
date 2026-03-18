'use client';

import { Bebas_Neue, Montserrat, Great_Vibes } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import Resume from './Resume';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '600'] });
const vibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
            filter: blur(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0px);
          }
        }

        @keyframes rotateInBlur {
          from {
            opacity: 0;
            transform: scale(0.7) translateY(40px);
            filter: blur(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes glowHover {
          0%, 100% {
            filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0));
          }
          50% {
            filter: drop-shadow(0 15px 40px rgba(59, 130, 246, 0.25));
          }
        }

        .intro-animate {
          animation: fadeInUp 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
          will-change: transform, opacity, filter;
        }

        .fullstack-animate {
          animation: slideInLeft 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
          opacity: 0;
          will-change: transform, opacity, filter;
        }

        .developer-animate {
          animation: slideInLeft 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
          opacity: 0;
          will-change: transform, opacity, filter;
        }

        .about-text-animate {
          animation: fadeInUp 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s forwards;
          opacity: 0;
          will-change: transform, opacity, filter;
        }

        .developer-animate:hover {
          animation: glowHover 2s ease-in-out infinite !important;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full bg-[#f3f3f3] px-10 md:px-20 pt-20 relative overflow-hidden"
      >
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/20 rounded-full blur-3xl -z-10"></div>

        {/* TOP TEXT */}
        <p className={`intro-animate ${montserrat.className} text-gray-700 text-lg mb-8`}>
          My Name is <span className="text-blue-600 font-medium uppercase hover:text-blue-700 transition-colors duration-500">Susith</span> and I am a Developer
        </p>

        {/* MAIN TYPOGRAPHY */}
        <div className="relative">
          {/* GRAPHIC TEXT */}
          <h1
            className={`fullstack-animate ${bebas.className} 
            text-[13vw] leading-none text-gray-800 transition-all duration-700 hover:text-gray-900`}
          >
            Full-Stack
          </h1>

          {/* DESIGNER OVERLAY */}
          <h1
            className={`developer-animate ${vibes.className} 
            absolute top-[55%] left-[35%] 
            text-[10vw] 
            text-blue-600 
            rotate-[0deg]
            cursor-pointer
            transition-all duration-500
            hover:scale-110
            hover:drop-shadow-lg`}
          >
            Developer.
          </h1>
        </div>

        {/* ABOUT TEXT */}
        <div className="about-text-animate mt-2 max-w-2xl">
          <h3 className={`${montserrat.className} text-4xl mb-3 transition-colors duration-500 hover:text-gray-900`}>
            About <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Me</span>
          </h3>

          <p className={`${montserrat.className} text-xl text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-700`}>
            I am a full-stack developer with confidence in my abilities and the capacity to work effectively under tight
            deadlines. My passion lies in creating modern web applications and solving complex technical challenges. Each
            day, I strive to push the boundaries of my creativity and deliver outstanding results through clean code and
            innovative solutions.
          </p>
        </div>
      </section>
      
      <Resume />
    </>
  );
}