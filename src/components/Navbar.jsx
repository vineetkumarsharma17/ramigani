import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Send, ArrowRight } from 'lucide-react';
import Brand from './Brand';
import { services, categories } from '../data/services';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  const topLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  const isSolutionsActive = location.pathname.startsWith('/solutions');

  const linkClass = (active) =>
    `text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1 ${
      active ? 'bg-brand-navy text-white' : 'text-brand-ink hover:text-brand-blue hover:bg-brand-mist'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-brand-mistLine' : 'bg-white/85 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <Brand variant="light" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5">
            {topLinks.map((link) => (
              <Link key={link.name} to={link.path} className={linkClass(location.pathname === link.path)}>
                {link.name}
              </Link>
            ))}

            {/* Solutions mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <Link to="/solutions" className={linkClass(isSolutionsActive)}>
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''} ${isSolutionsActive ? 'text-white/70' : 'text-brand-muted'}`} />
              </Link>

              {/* Mega panel */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-[640px] rounded-3xl bg-navy-gradient border border-white/10 shadow-navy-glow overflow-hidden relative">
                  <div className="absolute inset-0 circuit-grid opacity-40 pointer-events-none" />
                  <div className="relative z-10 p-7 grid grid-cols-2 gap-x-6 gap-y-1">
                    {categories.map((cat) => (
                      <div key={cat}>
                        <h4 className="text-brand-sky text-[11px] font-bold uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                          {cat}
                        </h4>
                        <div className="space-y-1 mb-2">
                          {services.filter((s) => s.category === cat).map((s) => (
                            <Link
                              key={s.id}
                              to={`/solutions/${s.id}`}
                              className="block px-3 py-2.5 rounded-xl group hover:bg-white/10 transition-colors"
                            >
                              <span className="block text-sm font-bold text-white group-hover:text-brand-sky transition-colors">
                                {s.name}
                              </span>
                              <span className="block text-[11px] text-slate-300/80 leading-snug mt-0.5">
                                {s.short}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Footer row */}
                  <div className="relative z-10 border-t border-white/10 px-7 py-4 flex items-center justify-between bg-black/10">
                    <span className="text-xs text-slate-300">Explore our full range of engineering solutions.</span>
                    <Link to="/solutions" className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-brand-sky transition-colors">
                      View all solutions <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/careers" className={linkClass(location.pathname === '/careers')}>Careers</Link>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="px-5 py-2.5 rounded-full text-xs font-bold text-brand-ink hover:text-brand-blue transition-colors">
              Contact Us
            </Link>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-red-gradient shadow-red-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={onOpenQuoteModal} className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-red-gradient">
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-brand-mist text-brand-navy hover:text-brand-blue focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-x-0 top-[65px] bg-white backdrop-blur-xl border-b border-brand-mistLine transition-all duration-300 ease-in-out shadow-xl overflow-y-auto ${
        mobileMenuOpen ? 'max-h-[80vh] opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden py-0'
      }`}>
        <div className="px-6 space-y-1.5">
          {topLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold py-2.5 px-3 rounded-xl ${
                location.pathname === link.path ? 'bg-brand-navy text-white' : 'text-brand-ink hover:bg-brand-mist'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Solutions accordion */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              className={`w-full flex items-center justify-between text-base font-semibold py-2.5 px-3 rounded-xl ${
                isSolutionsActive ? 'bg-brand-navy text-white' : 'text-brand-ink hover:bg-brand-mist'
              }`}
              aria-expanded={mobileSolutionsOpen}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
              <div className="pl-3 pt-1 pb-1 space-y-1">
                {categories.map((cat) => (
                  <div key={cat} className="pt-1">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted px-3 py-1">{cat}</span>
                    {services.filter((s) => s.category === cat).map((s) => (
                      <Link
                        key={s.id}
                        to={`/solutions/${s.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-semibold py-2 px-3 rounded-lg text-brand-body hover:text-brand-blue hover:bg-brand-mist"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  to="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-bold py-2 px-3 text-brand-blue"
                >
                  View all solutions →
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold py-2.5 px-3 rounded-xl ${
              location.pathname === '/careers' ? 'bg-brand-navy text-white' : 'text-brand-ink hover:bg-brand-mist'
            }`}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold py-2.5 px-3 rounded-xl ${
              location.pathname === '/contact' ? 'bg-brand-navy text-white' : 'text-brand-ink hover:bg-brand-mist'
            }`}
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="w-full py-3 rounded-full font-bold text-sm text-white bg-red-gradient flex items-center justify-center gap-2 shadow-lg"
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
