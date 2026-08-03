import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Send } from 'lucide-react';
import Brand from './Brand';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Mobile App Development', path: '/services/app-development' },
        { name: 'Web App Development', path: '/services/web-development' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'AI/ML Solutions', path: '/services/ai-ml-solutions' },
      ]
    },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand wordmark (no image logo) */}
          <Brand variant="light" />

          {/* Desktop Nav Links matching screenshot active pill style */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setServicesDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1 ${
                      isActive 
                        ? 'bg-[#FFF0E6] text-[#FF5500]' 
                        : 'text-[#1E293B] hover:text-[#FF5500] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF5500] group-hover:rotate-180 transition-all duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className={`absolute top-full left-0 w-56 pt-2 transition-all duration-200 ${
                      servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-2">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#FF5500] hover:bg-[#FFF5F0] rounded-xl transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Orange CTA Button matching screenshot */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 hover:text-[#FF5500] transition-colors"
            >
              Contact Us
            </Link>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF6A00] hover:bg-[#FF5500] shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#FF6A00]"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-[#FF5500] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-slate-100 transition-all duration-300 ease-in-out shadow-xl ${
        mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden py-0'
      }`}>
        <div className="px-6 space-y-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-semibold py-2 px-3 rounded-xl ${
                  location.pathname === link.path ? 'bg-[#FFF0E6] text-[#FF5500]' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 px-3 text-slate-700"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-full font-bold text-sm text-white bg-[#FF6A00] flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Get a Quote Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
