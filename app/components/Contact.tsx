'use client';

import { useState, useRef, useEffect } from 'react';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
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
            transform: translateY(0px);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.2;
          }
        }

        .section-title {
          animation: slideInLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        .background-text {
          animation: floatText 4s ease-in-out infinite;
        }

        .contact-form {
          animation: slideInRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
          opacity: 0;
        }

        .contact-info {
          animation: fadeInUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .info-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .info-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(59, 130, 246, 0.15);
        }

        .form-input {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .form-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
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
        className="relative w-full min-h-screen bg-[#f3f3f3] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden"
      >
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/20 rounded-full blur-3xl -z-10"></div>

        {/* HEADER */}
        <div className="relative text-center mb-16 md:mb-24">
          {/* BACKGROUND TEXT */}
          <h1
            className={`${bebas.className} background-text
            absolute left-1/2 -translate-x-1/2 top-0 
            text-[14vw] text-gray-400/50 
            pointer-events-none leading-none`}
          >
            CONTACT
          </h1>

          {/* MAIN TITLE */}
          <h2
            className={`${bebas.className} section-title
            text-5xl md:text-6xl lg:text-7xl text-gray-900 relative z-10
            font-bold tracking-tighter`}
          >
            GET IN <span className="text-blue-600">TOUCH</span>.
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {/* CONTACT INFO */}
          <div className="space-y-8">
            {/* Email */}
            <div
              className="contact-info info-card bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-300"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-lg text-blue-600">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg md:text-xl font-bold text-gray-900 mb-2`}>
                    Email
                  </h3>
                  <a href="mailto:susithkannan@gmail.com" className={`${montserrat.className} text-base text-gray-600 hover:text-blue-600 transition-colors duration-300`}>
                    susithkannan@gmail.com
                  </a>
                  <p className={`${montserrat.className} text-sm text-gray-500 mt-1`}>
                    I'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div
              className="contact-info info-card bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-300"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-lg text-green-600">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg md:text-xl font-bold text-gray-900 mb-2`}>
                    Phone
                  </h3>
                  <a href="tel:+918248768465" className={`${montserrat.className} text-base text-gray-600 hover:text-blue-600 transition-colors duration-300`}>
                    +91 8248768465
                  </a>
                  <p className={`${montserrat.className} text-sm text-gray-500 mt-1`}>
                    Available Monday to Friday
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className="contact-info info-card bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-300"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-4 rounded-lg text-purple-600">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg md:text-xl font-bold text-gray-900 mb-2`}>
                    Location
                  </h3>
                  <p className={`${montserrat.className} text-base text-gray-600`}>
                    Coimbatore, Tamil Nadu
                  </p>
                  <p className={`${montserrat.className} text-sm text-gray-500 mt-1`}>
                    India 🇮🇳
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div
            className="contact-form bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className={`${montserrat.className} block text-sm font-semibold text-gray-900 mb-2`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="form-input w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className={`${montserrat.className} block text-sm font-semibold text-gray-900 mb-2`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="form-input w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className={`${montserrat.className} block text-sm font-semibold text-gray-900 mb-2`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project Inquiry"
                  className="form-input w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className={`${montserrat.className} block text-sm font-semibold text-gray-900 mb-2`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="form-input w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className={`${montserrat.className} text-green-700 font-medium`}>
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className={`${montserrat.className} text-red-700 font-medium`}>
                    ✗ Error sending message. Please try again.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${montserrat.className} w-full inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FiArrowRight size={20} />
              </button>

              <p className={`${montserrat.className} text-xs text-gray-500 text-center`}>
                I typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>

        {/* FOOTER CTA SECTION */}
        <div className="mt-20 md:mt-32 relative">
          {/* Background floating text */}
          <h1
            className={`${bebas.className} background-text
            absolute left-1/6 -translate-x-1/2 top-0 
            text-[10vw] text-gray-400/80 
            pointer-events-none leading-none`}
          >
            THANK YOU
          </h1>
          <h1
            className={`${bebas.className} background-text
            absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
            text-[15vw] md:text-[18vw] text-gray-200/30 
            pointer-events-none leading-none whitespace-nowrap`}
          >
            Thank You
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10 justify-between">
            {/* Left - Thank You Text */}
            <div
              className="contact-info text-left"
              style={{ animationDelay: '1s' }}
            >
              <h2
                className={`${bebas.className}
                text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900
                leading-tight tracking-tighter`}
              >
                Thank you.
              </h2>
              <p className={`${montserrat.className} text-gray-600 text-lg md:text-xl leading-relaxed mt-6 font-light`}>
                For taking the time to explore my work. I'm excited to connect and discuss how we can collaborate on your next project.
              </p>
            </div>

            {/* Right - Contact Info */}
            <div
              className="contact-info space-y-8"
              style={{ animationDelay: '1.1s' }}
            >
              {/* Mail */}
              <div>
                <p className={`${montserrat.className} text-sm text-gray-500 font-medium uppercase tracking-widest mb-2`}>
                  Mail
                </p>
                <a
                  href="mailto:susithkannan@gmail.com"
                  className={`${montserrat.className} text-lg md:text-xl text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300 block`}
                >
                  susithkannan@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className={`${montserrat.className} text-sm text-gray-500 font-medium uppercase tracking-widest mb-2`}>
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/susithkannan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${montserrat.className} text-lg md:text-xl text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group`}
                >
                  Susith Kannan
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>

              {/* Bahance / Portfolio */}
              <div>
                <p className={`${montserrat.className} text-sm text-gray-500 font-medium uppercase tracking-widest mb-2`}>
                  Portfolio
                </p>
                <a
                  href="https://github.com/susith19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${montserrat.className} text-lg md:text-xl text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group`}
                >
                  GitHub - @susith19
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}