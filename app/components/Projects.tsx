"use client";

import Image from "next/image";
import { Bebas_Neue, Great_Vibes, Montserrat } from "next/font/google";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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
            transform: translateY(40px);
            filter: blur(10px);
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
            transform: translateX(-60px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0px);
          }
        }

        @keyframes floatText {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
            opacity: 0.2;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }

        .header-title {
          animation: slideInLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        .background-text {
          animation: floatText 4s ease-in-out infinite;
        }

        .project-image {
          animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .project-description {
          animation: fadeInUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards;
          opacity: 0;
        }

        .image-card {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .image-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        .image-card img {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .image-card:hover img {
          transform: scale(1.08);
        }

        .tech-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .tech-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(59, 130, 246, 0.15);
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
        className="max-w-7xl mx-auto px-6 md:px-10 py-10 overflow-hidden relative"
      >
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/20 rounded-full blur-3xl -z-10"></div>

        {/* HEADER */}
        <div className="relative text-center mb-16">
          {/* BACKGROUND SCRIPT */}
          <h1
            className={`${vibes.className} 
          absolute left-1/2 -translate-x-1/2 top-0 
          text-[14vw] text-gray-300/30 
          rotate-[-5deg] pointer-events-none`}
          >
            Projects
          </h1>

          {/* MAIN TITLE */}
          <h2
            className={`${bebas.className} 
          text-[6vw] text-gray-800 relative z-10`}
          >
            PROJECTS.
          </h2>
        </div>
        <div className="">
          {/* PROJECT GRID */}
          <div className="grid grid-cols-12 gap-4 mt-6 auto-rows-[minmax(260px,260px)]">
            {/* TOP LEFT */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/protfolio/1.png"
                  alt="project 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* TOP CENTER */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/protfolio/2.png"
                  alt="project 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TOP RIGHT */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/protfolio/3.png"
                  alt="project 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM LEFT */}
            <div
              className="project-image col-span-3"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/protfolio/4.png"
                  alt="project 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM CENTER */}
            <div
              className="project-image col-span-3"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/protfolio/5.png"
                  alt="project 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM RIGHT BIG */}
            <div
              className="project-image col-span-6"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/protfolio/6.png"
                  alt="project 6"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="project-description max-w-4xl mt-6 md:mt-20">
            <div className="mb-8">
              <h3
                className={`${montserrat.className} text-blue-600 font-bold text-2xl md:text-3xl mb-2 tracking-tight`}
              >
                Hiltek AI & Robotics College Portfolio
              </h3>
              <p
                className={`${montserrat.className} text-gray-500 text-sm md:text-base font-medium`}
              >
                Institution Website & Internship Application Platform
              </p>
            </div>

            <p
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-6`}
            >
              A comprehensive{" "}
              <span className="font-semibold text-gray-900">
                institutional website and internship platform
              </span>{" "}
              for Hiltek AI & Robotics Pvt Ltd. This project showcases the
              college's vision, services, and training programs while providing
              an integrated internship application system using Google Forms and
              AppScript automation for seamless student recruitment.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="tech-card bg-blue-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-blue-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Frontend
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  HTML & CSS
                </p>
              </div>
              <div className="tech-card bg-purple-50 rounded-lg p-4 border border-purple-200 hover:border-purple-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-purple-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Interactivity
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  JavaScript
                </p>
              </div>
              <div className="tech-card bg-green-50 rounded-lg p-4 border border-green-200 hover:border-green-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-green-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Backend
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Google AppScript
                </p>
              </div>
              <div className="tech-card bg-amber-50 rounded-lg p-4 border border-amber-200 hover:border-amber-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-amber-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Forms
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Google Forms
                </p>
              </div>
              <div className="tech-card bg-red-50 rounded-lg p-4 border border-red-200 hover:border-red-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-red-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Data
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Google Sheets
                </p>
              </div>
            </div>

            <ul
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-8 space-y-3`}
            >
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Responsive multi-page website with smooth navigation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Interactive internship application forms with Google Forms
                  integration
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Automated form submission with AppScript email notifications
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Gallery showcasing lab facilities and student experiences
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Dynamic testimonials and student success stories carousel
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Automatic data collection and analytics with Google Sheets
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://hiltekai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                Visit Live Website
                <FiArrowRight size={20} />
              </a>
              <button
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300`}
              >
                View Source Code
              </button>
            </div>
          </div>
        </div>
        <div className="pt-28">
          {/* PROJECT GRID */}
          <div className="grid grid-cols-12 gap-4 mt-6 auto-rows-[minmax(260px,260px)]">
            {/* TOP LEFT */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/inventory/1.png"
                  alt="project 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* TOP CENTER */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/inventory/2.png"
                  alt="project 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TOP RIGHT */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/inventory/3.png"
                  alt="project 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM LEFT */}
            <div
              className="project-image col-span-3"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/inventory/4.png"
                  alt="project 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM CENTER */}
            <div
              className="project-image col-span-3"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/inventory/5.png"
                  alt="project 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM RIGHT BIG */}
            <div
              className="project-image col-span-6"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/inventory/6.png"
                  alt="project 6"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="project-description max-w-4xl mt-6 md:mt-20">
            <div className="mb-8">
              <h3
                className={`${montserrat.className} text-blue-600 font-bold text-2xl md:text-3xl mb-2 tracking-tight`}
              >
                Inventory Management System
              </h3>
              <p
                className={`${montserrat.className} text-gray-500 text-sm md:text-base font-medium`}
              >
                Full-Stack E-Commerce & Inventory Solution
              </p>
            </div>

            <p
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-6`}
            >
              A comprehensive{" "}
              <span className="font-semibold text-gray-900">
                inventory management platform
              </span>{" "}
              built with modern web technologies. This full-stack application
              streamlines product management, order tracking, and inventory
              optimization with an intuitive user interface.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="tech-card bg-blue-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-blue-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Frontend
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Django template
                </p>
              </div>
              <div className="tech-card bg-purple-50 rounded-lg p-4 border border-purple-200 hover:border-purple-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-purple-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Backend
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Python Django
                </p>
              </div>
              <div className="tech-card bg-green-50 rounded-lg p-4 border border-green-200 hover:border-green-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-green-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Database
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Neon PostgreSQL
                </p>
              </div>
              <div className="tech-card bg-amber-50 rounded-lg p-4 border border-amber-200 hover:border-amber-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-amber-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Hosting
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Render
                </p>
              </div>
            </div>

            <ul
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-8 space-y-3`}
            >
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Real-time inventory tracking and management</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Seamless order processing and fulfillment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>User-friendly dashboard with analytics</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://hiltek-store.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                Visit Live Project
                <FiArrowRight size={20} />
              </a>
              <button
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300`}
              >
                View Code
              </button>
            </div>
          </div>
        </div>
        <div className="pt-28">
          {/* PROJECT GRID - MOBILE APP SCREENS */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 md:mb-20 flex-wrap">
            {/* APP SCREEN 1 */}
            <div
              className="project-image w-32 md:w-40"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="image-card relative w-full aspect-[9/19] rounded-3xl border-4 md:border-6 border-gray-900 overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/projects/flutter/1.png"
                  alt="app screen 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* APP SCREEN 2 */}
            <div
              className="project-image w-32 md:w-40"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="image-card relative w-full aspect-[9/19] rounded-3xl border-4 md:border-6 border-gray-900 overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/projects/flutter/2.png"
                  alt="app screen 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* APP SCREEN 3 */}
            <div
              className="project-image w-32 md:w-40"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="image-card relative w-full aspect-[9/19] rounded-3xl border-4 md:border-6 border-gray-900 overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/projects/flutter/3.png"
                  alt="app screen 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* APP SCREEN 4 */}
            <div
              className="project-image w-32 md:w-40"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="image-card relative w-full aspect-[9/19] rounded-3xl border-4 md:border-6 border-gray-900 overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/projects/flutter/4.png"
                  alt="app screen 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* APP SCREEN 5 */}
            <div
              className="project-image w-32 md:w-40"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="image-card relative w-full aspect-[9/19] rounded-3xl border-4 md:border-6 border-gray-900 overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/projects/flutter/5.png"
                  alt="app screen 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="project-description max-w-4xl mt-6 md:mt-20">
            <div className="mb-8">
              <h3
                className={`${montserrat.className} text-blue-600 font-bold text-2xl md:text-3xl mb-2 tracking-tight`}
              >
                Leaf Detection & Treatment System
              </h3>
              <p
                className={`${montserrat.className} text-gray-500 text-sm md:text-base font-medium`}
              >
                AI-Powered Mobile App with Multi-Language Support
              </p>
            </div>

            <p
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-6`}
            >
              An intelligent{" "}
              <span className="font-semibold text-gray-900">
                mobile application
              </span>{" "}
              designed to detect lead exposure and provide personalized
              treatment recommendations. This Flutter app leverages Google
              Gemini 2.5 Flash AI to analyze symptoms and medical conditions,
              delivering real-time health insights with support for both English
              and Tamil languages for wider accessibility.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="tech-card bg-blue-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-blue-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Framework
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Flutter
                </p>
              </div>
              <div className="tech-card bg-purple-50 rounded-lg p-4 border border-purple-200 hover:border-purple-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-purple-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Language
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Dart
                </p>
              </div>
              <div className="tech-card bg-green-50 rounded-lg p-4 border border-green-200 hover:border-green-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-green-600 font-bold uppercase tracking-wide mb-1`}
                >
                  AI Engine
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Gemini 2.5 Flash
                </p>
              </div>
              <div className="tech-card bg-amber-50 rounded-lg p-4 border border-amber-200 hover:border-amber-400">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-amber-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Languages
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  EN & Tamil
                </p>
              </div>
            </div>

            <ul
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-8 space-y-3`}
            >
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>AI-powered lead exposure detection and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Personalized treatment recommendations using Gemini AI
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Multi-language support - English and Tamil</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Responsive mobile UI with smooth animations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Real-time symptom tracking and health insights</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                View App Details
                <FiArrowRight size={20} />
              </button>
              <button
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300`}
              >
                View Code
              </button>
            </div>
          </div>
        </div>

        <div className="pt-28">
          {/* PROJECT GRID */}
          <div className="grid grid-cols-12 gap-4 mt-6 auto-rows-[minmax(260px,260px)]">
            {/* TOP LEFT */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/tournament/1.png"
                  alt="project 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* TOP CENTER */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/tournament/2.png"
                  alt="project 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TOP RIGHT */}
            <div
              className="project-image col-span-4"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/tournament/3.png"
                  alt="project 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM LEFT */}
            <div
              className="project-image col-span-3"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/tournament/4.png"
                  alt="project 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM CENTER */}
            <div
              className="project-image col-span-3"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/tournament/5.png"
                  alt="project 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM RIGHT BIG */}
            <div
              className="project-image col-span-6"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="image-card relative w-full h-full">
                <Image
                  src="/projects/tournament/6.png"
                  alt="project 6"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="project-description max-w-4xl mt-6 md:mt-20">
            <div className="mb-8">
              <h3
                className={`${montserrat.className} text-blue-600 font-bold text-2xl md:text-3xl mb-2 tracking-tight`}
              >
                KingPUBG Tournaments
              </h3>
              <p
                className={`${montserrat.className} text-gray-500 text-sm md:text-base font-medium`}
              >
                Competitive Battle Royale Tournament Platform
              </p>
            </div>

            <p
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-6`}
            >
              A premier{" "}
              <span className="font-semibold text-gray-900">
                esports tournament platform
              </span>{" "}
              for PUBG and BGMI competitive gaming across India and UAE. This
              full-stack Next.js application enables players to register,
              compete in multiple tournament modes, and win real monetary
              rewards. The platform features real-time tournament management,
              live leaderboards, and seamless payment integration for prize
              distribution.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="tech-card bg-blue-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400 transition-all duration-300">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-blue-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Frontend
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Next.js & React
                </p>
              </div>
              <div className="tech-card bg-purple-50 rounded-lg p-4 border border-purple-200 hover:border-purple-400 transition-all duration-300">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-purple-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Backend
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Next.js API Routes
                </p>
              </div>
              <div className="tech-card bg-green-50 rounded-lg p-4 border border-green-200 hover:border-green-400 transition-all duration-300">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-green-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Database
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Neon PostgreSQL
                </p>
              </div>
              <div className="tech-card bg-amber-50 rounded-lg p-4 border border-amber-200 hover:border-amber-400 transition-all duration-300">
                <p
                  className={`${montserrat.className} text-xs md:text-sm text-amber-600 font-bold uppercase tracking-wide mb-1`}
                >
                  Hosting
                </p>
                <p
                  className={`${montserrat.className} text-sm md:text-base text-gray-800 font-semibold`}
                >
                  Vercel
                </p>
              </div>
            </div>

            <ul
              className={`${montserrat.className} text-gray-700 text-base md:text-lg leading-relaxed font-light mb-8 space-y-3`}
            >
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Tournament registration and team management system</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Real-time live leaderboards and match scoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Multiple tournament modes - Solo, Duo, Squad, and TDM Arena
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>
                  Secure payment gateway integration for prize distribution
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>User authentication and profile management</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://kingpubgtournaments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                Visit Live Platform
                <FiArrowRight size={20} />
              </a>
              <button
                className={`${montserrat.className} inline-flex items-center justify-center gap-3 px-8 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300`}
              >
                View Code
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
