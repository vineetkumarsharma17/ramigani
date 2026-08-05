import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, ArrowRight, ArrowUpRight,
  Smartphone, Globe, Palette, CheckSquare, BrainCircuit, Search, Share2, Layers,
} from 'lucide-react';
import Brand from './Brand';
import { services, categories } from '../data/services';

const iconMap = {
  'app-development': Smartphone,
  'web-development': Globe,
  'ui-ux-design': Palette,
  'qa-testing': CheckSquare,
  'ai-ml-solutions': BrainCircuit,
  'seo-optimization': Search,
  'social-media': Share2,
};

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
    `text-sm font-bold px-4 py-2 rounded-full transition-colors duration-200 inline-flex items-center gap-1 ${
      active ? 'text-brand-purple bg-brand-tint' : 'text-ink/75 hover:text-brand-purple hover:bg-brand-tint/60'
    }`;

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-2.5' : 'py-4'
    }`}>
      <div className="container-x">
        <div className={`flex items-center justify-between rounded-3xl transition-all duration-300 ${
          isScrolled ? 'bg-white/85 backdrop-blur-xl border border-brand-line shadow-lift px-4 py-2.5' : 'px-1 py-1'
        }`}>
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
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-brand-purple' : 'text-brand-muted'}`} />
              </Link>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-[860px] card rounded-4xl overflow-hidden">
                  <div className="p-7 grid grid-cols-3 gap-x-6">
                    {categories.map((cat) => (
                      <div key={cat}>
                        <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-brand-purple/70 mb-2 pb-2 border-b border-brand-line">{cat}</h4>
                        <div className="space-y-0.5">
                          {services.filter((s) => s.category === cat).map((s) => {
                            const Icon = iconMap[s.id] || Layers;
                            return (
                              <Link key={s.id} to={`/solutions/${s.id}`} className="group flex items-start gap-3 px-3 py-2.5 rounded-2xl hover:bg-brand-tint transition-colors">
                                <span className="w-9 h-9 rounded-xl bg-indigo-gradient grid place-items-center flex-shrink-0 shadow-indigo group-hover:scale-110 transition-transform">
                                  <Icon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
                                </span>
                                <span className="flex-grow">
                                  <span className="block text-sm font-bold text-ink group-hover:text-brand-purple transition-colors">{s.name}</span>
                                  <span className="block text-[11px] text-brand-muted leading-snug mt-0.5">{s.short}</span>
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-brand-muted opacity-0 group-hover:opacity-100 group-hover:text-brand-purple transition-all mt-0.5 flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-7 py-4 bg-indigo-gradient">
                    <span className="text-xs text-white/85 font-medium">End-to-end engineering, from idea to launch.</span>
                    <Link to="/solutions" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white hover:gap-2.5 transition-all">
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
            <button onClick={onOpenQuoteModal} className="btn-primary">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={onOpenQuoteModal} className="px-4 py-2 rounded-full text-xs font-extrabold text-white bg-indigo-gradient shadow-indigo">Quote</button>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 rounded-2xl bg-white border border-brand-line text-ink"
              aria-label="Toggle menu" aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden container-x transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 max-h-[80vh] mt-2' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="card rounded-4xl p-4 space-y-1 overflow-y-auto">
          {topLinks.map((l) => (
            <Link key={l.name} to={l.path} onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-base font-bold ${location.pathname === l.path ? 'bg-brand-tint text-brand-purple' : 'text-ink hover:bg-brand-tint'}`}>
              {l.name}
            </Link>
          ))}
          <div>
            <button onClick={() => setMobileSolutionsOpen((v) => !v)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold ${isSolutionsActive ? 'bg-brand-tint text-brand-purple' : 'text-ink hover:bg-brand-tint'}`}
              aria-expanded={mobileSolutionsOpen}>
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-[560px]' : 'max-h-0'}`}>
              <div className="pl-2 py-1">
                {services.map((s) => (
                  <Link key={s.id} to={`/solutions/${s.id}`} onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-tint">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-2xl text-base font-bold ${location.pathname === '/careers' ? 'bg-brand-tint text-brand-purple' : 'text-ink hover:bg-brand-tint'}`}>Careers</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-2xl text-base font-bold ${location.pathname === '/contact' ? 'bg-brand-tint text-brand-purple' : 'text-ink hover:bg-brand-tint'}`}>Contact</Link>
          <button onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }} className="btn-primary w-full mt-2">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
