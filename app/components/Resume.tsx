'use client';

import { Montserrat } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import {
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTypescript, SiRust } from 'react-icons/si';
import { SiMongodb } from "react-icons/si";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Resume() {
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

  const skillsWithIcons = [
    { name: 'React.js', Icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', Icon: FaNode, color: '#68A063' },
    { name: 'Rust', Icon: SiRust, color: '#CE422B' },
    { name: 'Python', Icon: FaPython, color: '#3776AB' },
    { name: 'PostgreSQL', Icon: FaDatabase, color: '#336791' },
    { name: 'AWS', Icon: FaAws, color: '#FF9900' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#13AA52' },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0px);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0px);
          }
        }

        @keyframes scaleInSkill {
          from {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }

        .section-title {
          animation: fadeInUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        .left-content {
          animation: fadeInLeft 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
          opacity: 0;
        }

        .middle-content {
          animation: fadeInUp 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
          opacity: 0;
        }

        .right-content {
          animation: fadeInRight 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
          opacity: 0;
        }

        .skill-item {
          animation: scaleInSkill 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .experience-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .experience-card:hover {
          transform: translateX(8px);
          background: rgba(59, 130, 246, 0.05);
          padding: 12px;
          border-radius: 8px;
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
        className="w-full min-h-screen bg-[#f3f3f3] px-6 md:px-12 lg:px-20 py-10 md:py-24 relative overflow-hidden"
      >
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/20 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

          {/* LEFT - EXPERIENCE */}
          <div className="left-content">
            <h2 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight`}>
              Work <span className="text-gray-600">Experiences</span>
            </h2>

            <div className="space-y-8">
              <div className="experience-card">
                <h3 className="text-blue-600 font-bold text-lg md:text-xl hover:text-blue-700 transition-colors duration-300">
                  Chasseur Cyber Solution Pvt Ltd
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium mt-1">Web Developer (Nov 2025 - Present)</p>
                <ul className="text-sm md:text-base text-gray-700 mt-3 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span>Building SEO-optimized full-stack web apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span>Working with React, Node.js & MySQL</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span>Performance & security optimization</span>
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <h3 className="text-blue-600 font-bold text-lg md:text-xl hover:text-blue-700 transition-colors duration-300">
                  Character XYZ
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium mt-1">Backend Engineer (May 2025 – Oct 2025)</p>
                <ul className="text-sm md:text-base text-gray-700 mt-3 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span>Built scalable backend systems using Rust</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span>Designed APIs & SDKs</span>
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <h3 className="text-blue-600 font-bold text-lg md:text-xl hover:text-blue-700 transition-colors duration-300">
                  Prodigy Technologies
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium mt-1">Web Developer Intern</p>
                <ul className="text-sm md:text-base text-gray-700 mt-3 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span>Improved performance by 25%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span>Reduced server response by 40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* MIDDLE - SUMMARY + EDUCATION */}
          <div className="middle-content">
            <h2 className={`${montserrat.className} text-blue-600 text-xl md:text-2xl font-bold mb-2 tracking-tight`}>
              Full Stack Developer
            </h2>

            <p className="text-sm md:text-base text-gray-700 mb-8 font-light leading-relaxed">
              Passionate full-stack developer with experience in building scalable web applications,
              APIs, and cloud-based solutions using modern technologies.
            </p>

            <h2 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight`}>
              Education
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  B.Tech Computer Science
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium mt-1">
                  KGiSL Institute of Technology (2025)
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Relevant Coursework
                </h3>
                <p className="text-sm md:text-base text-gray-700 font-light mt-1">
                  Software Engineering, Business Analytics, Web Development
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - INFO + SKILLS */}
          <div className="right-content">
            <h2 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight`}>
              Personal <span className="text-blue-600">Info</span>
            </h2>

            <div className="text-sm md:text-base text-gray-800 space-y-3 mb-10 font-light">
              <p><span className="font-bold text-gray-900">Name:</span> <span className="text-gray-700">Susith Kannan</span></p>
              <p><span className="font-bold text-gray-900">Email:</span> <span className="text-gray-700">susithkannan@gmail.com</span></p>
              <p><span className="font-bold text-gray-900">Phone:</span> <span className="text-gray-700">8248768465</span></p>
            </div>

            <h2 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight`}>
              Skills
            </h2>

            <div className="space-y-3">
              {skillsWithIcons.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-4 cursor-pointer transition-all duration-300 group"
                  style={{
                    animationDelay: `${0.3 + index * 0.08}s`,
                  }}
                >
                  <div className="flex-shrink-0 ">
                    <skill.Icon size={24} color={skill.color} />
                  </div>
                  <p className="text-sm md:text-base font-semibold text-gray-800 flex-1">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}