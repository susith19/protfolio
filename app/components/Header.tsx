'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import { FiMenu, FiX } from 'react-icons/fi';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    
    // For hash links like /#about
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove '#'
      return pathname === '/' && hashActive === hash;
    }
    
    return pathname === href;
  };

  const [hashActive, setHashActive] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setHashActive(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial hash on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLink {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInMenu {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .header-animate {
          animation: slideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
        }

        .nav-link-animate {
          animation: fadeInLink 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .mobile-menu-animate {
          animation: slideInMenu 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .nav-underline {
          position: relative;
          overflow: hidden;
        }

        .nav-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-underline:hover::after {
          width: 100%;
        }

        .nav-underline.active::after {
          width: 100%;
          background: linear-gradient(90deg, #000, #333);
        }

        .header-scrolled {
          background: rgba(243, 243, 243, 0.95) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header
        className={`header-animate fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'header-scrolled border-b border-gray-200' : 'backdrop-blur-md bg-[#f3f3f3]/80 border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className={`${montserrat.className} text-2xl md:text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors duration-300`}
          >
            SU<span className="text-blue-600">SITH</span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-animate nav-underline text-lg font-medium transition-all duration-300 ${
                  isActive(item.href) ? 'active text-black' : 'text-gray-600 hover:text-black'
                }`}
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>


          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-gray-900" />
            ) : (
              <FiMenu size={24} className="text-gray-900" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mobile-menu-animate border-t border-gray-200 bg-[#f3f3f3]">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link-animate text-base font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  style={{
                    animationDelay: `${0.1 + index * 0.08}s`,
                  }}
                >
                  {item.label}
                </Link>
              ))}

          
            </div>
          </div>
        )}
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}