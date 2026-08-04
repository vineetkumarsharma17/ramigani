import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowRight, Twitter, Facebook, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import Brand from './Brand';
import { services } from '../data/services';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (email) { setDone(true); setEmail(''); setTimeout(() => setDone(false), 5000); }
  };

  const socials = [
    { name: 'X/Twitter', icon: Twitter, href: 'https://x.com/RamiganiTe99276' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61567290185769' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ramigani-tech-solutions-3176a9327/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ramiganitechsolutions/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCFgSevZ1lcbs_iimYaDuB-Q' },
  ];

  return (
    <footer className="bg-white border-t border-brand-line pt-16 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-line">
          {/* Brand + contact */}
          <div className="lg:col-span-4 space-y-4">
            <Brand variant="light" />
            <p className="text-sm text-brand-body leading-relaxed max-w-sm">
              A software engineering studio building high-performance apps, web platforms, and AI products — from concept to scale.
            </p>
            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-2.5 text-sm text-brand-body">
                <MapPin className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                <span className="text-[13px] leading-relaxed">8-3-191/95, MIG-H, 3rd Floor, Laxmi Plaza, Vengalrao Nagar Circle, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038</span>
              </div>
              <a href="mailto:info@ramigani.com" className="flex items-center gap-2.5 text-[13px] text-brand-body hover:text-brand-indigo transition-colors">
                <Mail className="w-4 h-4 text-brand-indigo" /> info@ramigani.com
              </a>
              <a href="tel:+919912340255" className="flex items-center gap-2.5 text-[13px] text-brand-body hover:text-brand-indigo transition-colors">
                <Phone className="w-4 h-4 text-brand-indigo" /> +91 99123 40255
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-brand-body">
              <li><Link to="/" className="hover:text-brand-indigo transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-indigo transition-colors">About</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-indigo transition-colors">Solutions</Link></li>
              <li><Link to="/careers" className="hover:text-brand-indigo transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-indigo transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-brand-body">
              {services.map((s) => (
                <li key={s.id}><Link to={`/solutions/${s.id}`} className="hover:text-brand-indigo transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Stay in the loop</h4>
            <p className="text-sm text-brand-body mb-3">Occasional engineering insights. No spam.</p>
            {done ? (
              <div className="text-sm font-medium text-emerald-600">Thanks for subscribing! ✓</div>
            ) : (
              <form onSubmit={subscribe} className="flex items-center gap-2">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
                  className="flex-grow px-4 py-2.5 rounded-full bg-paper border border-brand-line text-sm text-ink placeholder-brand-muted focus:outline-none focus:border-brand-indigo" />
                <button type="submit" className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-indigo text-white grid place-items-center hover:bg-brand-indigoDark transition-colors" aria-label="Subscribe">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">© 2026 Ramigani Tech Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-paper border border-brand-line text-brand-muted grid place-items-center hover:bg-brand-indigo hover:text-white hover:border-brand-indigo transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-brand-tint text-brand-indigo grid place-items-center hover:bg-brand-indigo hover:text-white transition-all ml-1">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
