"use client";

import Image from "next/image";
import { Caveat } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Great_Vibes, Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatGently {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes floatGentlyMobile {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Desktop Animations */
        @media (min-width: 768px) {
          .portfolio-outline {
            animation: fadeInDown 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
            opacity: 0;
          }

          .profile-image {
            animation: fadeInScale 2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
            opacity: 0;
          }

          .my-text {
            animation: slideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
            opacity: 0;
          }

          .susith-text {
            animation: fadeInUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards, floatGently 5s ease-in-out 2.5s infinite;
            opacity: 0;
          }

          .name-info {
            animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
            opacity: 0;
          }

          .animate-float {
            animation: floatGently 4s ease-in-out infinite;
          }
        }

        /* Mobile Animations */
        @media (max-width: 767px) {
          .portfolio-outline {
            animation: fadeInDown 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
            opacity: 0;
          }

        .profile-image {
            animation: fadeInScale 2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
            opacity: 0;
          }
          .my-text {
            animation: slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
            opacity: 0;
          }

          .susith-text {
            animation: fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards, floatGentlyMobile 5s ease-in-out 1.7s infinite;
            opacity: 0;
          }

          .name-info {
            animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
            opacity: 0;
          }

          .animate-float {
            animation: floatGentlyMobile 4s ease-in-out infinite;
          }
        }
      `}</style>

      <section className="relative w-full min-h-[75vh] md:h-screen bg-[#f3f3f3] overflow-hidden flex flex-col md:block">
        {/* DESKTOP: PORTFOLIO OUTLINE */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full">
          <h1
            className={`
            portfolio-outline
            absolute top-[50%] left-[50%]
            -translate-x-1/2 -translate-y-1/2
            text-[25vw] font-bold
            text-transparent
            leading-none tracking-tight z-0
            
            ${bebas.className}

            [webkit-text-stroke:1px_#888]
            [-webkit-text-stroke:2px_#999]

            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_90%)]
            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_75%)]
          `}
          >
            PORTFOLIO
          </h1>

          {/* WHITE FADE OVERLAY */}
          <div
            className="absolute bottom-0 left-0 w-full h-[35%] 
          bg-gradient-to-t 
          from-[#f3f3f3] 
          via-[#f3f3f3]/90 
          to-transparent 
          backdrop-blur-[2px]"
          ></div>
        </div>

        {/* MOBILE: PORTFOLIO TEXT */}
        <div className="block md:hidden absolute top-8 left-6 z-10 w-full max-w-xs">
          <h1
            className={`${bebas.className} portfolio-outline text-4xl font-bold text-gray-800 leading-none mb-2`}
          >
            PORTFOLIO
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        </div>

        {/* BACKGROUND SCRIPT NAME */}
        <h1
          className={`${caveat.className} 
          susith-text
          absolute md:bottom-[5%] md:left-[45%] bottom-[10%] left-[20%]
          -translate-x-1/2 md:-translate-x-1/2
          md:text-[25vw] text-[60px]
          text-gray-300/80 
          leading-none italic
          z-0 
          md:rotate-[-8deg] rotate-[-6deg]`}
        >
          Susith
        </h1>

        {/* MY TEXT - Desktop */}
        <div className="hidden md:block absolute top-[21%] left-[12%] rotate-[-12deg] z-20">
          <h2
            className={`${caveat.className} 
            my-text
            text-[90px] text-black 
            absolute top-0 left-0
            transition-all duration-700 hover:scale-110 cursor-default`}
          >
            My
          </h2>
        </div>

        {/* IMAGE - Desktop */}
        <div className="hidden md:block absolute bottom-0 right-[10%] z-10">
          <div className="relative">
            <Image
              src="/assets/profile.png"
              alt="profile"
              width={620}
              height={900}
              className="grayscale object-contain opacity-90 transition-all duration-1000 hover:opacity-100 hover:grayscale-0"
              priority
            />

            {/* SOFT FADE */}
            <div
              className="absolute bottom-0 left-0 w-full h-48 
              bg-gradient-to-t from-[#f3f3f3] via-[#f3f3f3]/80 to-transparent"
            ></div>
          </div>
        </div>

        {/* NAME TEXT - Desktop */}
        <div
          className={`${montserrat.className} name-info hidden md:block absolute right-[13%] top-[65%] z-20 text-right transition-all duration-700 hover:translate-x-2`}
        >
          <h3 className="text-lg text-gray-700 transition-colors duration-500">
            Full{" "}
            <span className="text-blue-500 transition-colors duration-500 hover:text-blue-600">
              Stack
            </span>
          </h3>
          <p className="text-gray-500 text-sm transition-colors duration-500">
            Developer
          </p>
        </div>

        {/* ========== MOBILE LAYOUT ========== */}
        <div className="md:hidden  flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-12 z-10 relative">
          {/* DESKTOP: PORTFOLIO OUTLINE */}
          <div className="absolute top-0 left-0 w-full h-full">
            <h1
              className={`
            portfolio-outline
            absolute top-[40%] left-[50%]
            -translate-x-1/2 -translate-y-1/2
            text-[30vw] font-bold
            text-transparent
            leading-none tracking-tight z-0
            
            ${bebas.className}

            [webkit-text-stroke:1px_#888]
            [-webkit-text-stroke:1px_#999]

            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_90%)]
            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_75%)]
          `}
            >
              PORTFOLIO
            </h1>

            {/* WHITE FADE OVERLAY */}
            <div
              className="absolute bottom-0 left-0 w-full h-[35%] 
          bg-gradient-to-t 
          from-[#f3f3f3] 
          via-[#f3f3f3]/90 
          to-transparent 
          backdrop-blur-[2px]"
            ></div>
          </div>

          {/* BACKGROUND SCRIPT NAME */}
          <h1
            className={`${caveat.className} 
          susith-text
          absolute md:bottom-[5%] md:left-[45%] top-[40%] left-[40%]
          -translate-x-1/2 md:-translate-x-1/2
          md:text-[25vw] text-[100px]
          text-gray-300/80 
          leading-none italic
          z-0 
          md:rotate-[-8deg] rotate-[-6deg]`}
          >
            Susith
          </h1>

          {/* MY TEXT - Desktop */}
          <div className="md:block absolute top-[28%] left-[4%] rotate-[-12deg] z-20">
            <h2
              className={`${caveat.className} 
            my-text
            text-[40px] text-black 
            absolute top-0 left-0
            transition-all duration-700 hover:scale-110 cursor-default`}
            >
              My
            </h2>
          </div>

          {/* IMAGE - Desktop */}
          <div className="md:block absolute top-0 top-[28%] right-[-10%] z-10">
            <div className="relative">
              <Image
                src="/assets/profile.png"
                alt="profile"
                width={350}
                height={10}
                className="grayscale object-contain opacity-90 
             [mask-image:linear-gradient(to_bottom,black_99%,transparent_100%)]"  
                priority
              />

              {/* SOFT FADE */}
              <div
                className="absolute bottom-0 left-0 w-full h-28 
              bg-gradient-to-t from-[#f3f3f3] via-[#f3f3f3]/80 to-transparent"
              ></div>
            </div>
          </div>

          {/* NAME TEXT - Desktop */}
          <div
            className={`${montserrat.className} name-info md:block absolute right-[5%] top-[45%] z-20 text-right transition-all duration-700 hover:translate-x-2`}
          >
            <h3 className="text-[10px] text-gray-700 transition-colors duration-500">
              Full{" "}
              <span className="text-blue-500 transition-colors duration-500 hover:text-blue-600">
                Stack
              </span>
            </h3>
            <p className="text-gray-500 text-[10px] transition-colors duration-500">
              Developer
            </p>
          </div>
        </div>

        {/* Mobile Gradient Fade */}
        <div className="md:hidden absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f3f3f3] via-[#f3f3f3]/80 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
}
