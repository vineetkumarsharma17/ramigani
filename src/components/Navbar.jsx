import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import Brand from './Brand';
import { services, categories } from '../data/services';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  const topLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];
  const isSolutionsActive = location.pathname.startsWith('/solutions');

  const linkCls = (active) =>
    `text-[13px] font-medium tracking-wide px-3 py-2 transition-colors duration-200 inline-flex items-center gap-1 ${
      active ? 'text-ink' : 'text-brand-soft hover:text-ink'
    }`;

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-paper/90 backdrop-blur-md border-b border-brand-line' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container-x">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <Brand variant="light" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {topLinks.map((l) => (
              <Link key={l.name} to={l.path} className={linkCls(location.pathname === l.path)}>{l.name}</Link>
            ))}

            {/* Solutions mega-menu */}
            <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <Link to="/solutions" className={linkCls(isSolutionsActive)}>
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-ink' : 'text-brand-muted'}`} />
              </Link>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-[840px] bg-paper border border-brand-line shadow-paper">
                  <div className="grid grid-cols-3 divide-x divide-brand-line">
                    {categories.map((cat, ci) => (
                      <div key={cat} className="p-6">
                        <h4 className="flex items-baseline gap-2 text-[10px] font-semibold uppercase tracking-widest2 text-brand-muted mb-4">
                          <span className="accent font-display not-italic">{String(ci + 1).padStart(2, '0')}</span>
                          {cat}
                        </h4>
                        <div className="space-y-1">
                          {services.filter((s) => s.category === cat).map((s) => (
                            <Link key={s.id} to={`/solutions/${s.id}`} className="group flex items-start justify-between gap-3 py-2 border-b border-transparent hover:border-brand-line transition-colors">
                              <div>
                                <span className="block text-sm font-medium text-ink group-hover:text-brand-accent transition-colors">{s.name}</span>
                                <span className="block text-[11px] text-brand-muted leading-snug mt-0.5">{s.short}</span>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-brand-muted opacity-0 group-hover:opacity-100 group-hover:text-brand-accent transition-all mt-0.5 flex-shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-6 py-4 border-t border-brand-line bg-brand-panel">
                    <span className="text-xs text-brand-soft font-display italic">End-to-end engineering, from idea to launch.</span>
                    <Link to="/solutions" className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink hover:gap-2.5 transition-all">
                      View all <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/careers" className={linkCls(location.pathname === '/careers')}>Careers</Link>
            <Link to="/contact" className={linkCls(location.pathname === '/contact')}>Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <button onClick={onOpenQuoteModal} className="btn-primary py-3">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={onOpenQuoteModal} className="px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-paper bg-ink border border-ink">Quote</button>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 border border-brand-lineStrong text-ink"
              aria-label="Toggle menu" aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden container-x transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 max-h-[80vh] pb-4' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="bg-paper border border-brand-line divide-y divide-brand-line overflow-y-auto">
          {topLinks.map((l) => (
            <Link key={l.name} to={l.path} onClick={() => setMobileMenuOpen(false)}
              className={`block px-5 py-3.5 text-base font-medium ${location.pathname === l.path ? 'text-brand-accent' : 'text-ink'}`}>
              {l.name}
            </Link>
          ))}
          <div>
            <button onClick={() => setMobileSolutionsOpen((v) => !v)}
              className={`w-full flex items-center justify-between px-5 py-3.5 text-base font-medium ${isSolutionsActive ? 'text-brand-accent' : 'text-ink'}`}
              aria-expanded={mobileSolutionsOpen}>
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-[560px]' : 'max-h-0'}`}>
              <div className="bg-brand-panel">
                {services.map((s) => (
                  <Link key={s.id} to={`/solutions/${s.id}`} onClick={() => setMobileMenuOpen(false)}
                    className="block px-7 py-3 text-sm font-medium text-brand-soft hover:text-brand-accent border-t border-brand-line">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}
            className={`block px-5 py-3.5 text-base font-medium ${location.pathname === '/careers' ? 'text-brand-accent' : 'text-ink'}`}>Careers</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}
            className={`block px-5 py-3.5 text-base font-medium ${location.pathname === '/contact' ? 'text-brand-accent' : 'text-ink'}`}>Contact</Link>
          <div className="p-4">
            <button onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }} className="btn-primary w-full">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
