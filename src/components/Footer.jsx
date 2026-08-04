import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowUp
} from 'lucide-react';
import Brand from './Brand';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'X/Twitter', icon: Twitter, href: 'https://x.com/RamiganiTe99276' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61567290185769' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ramigani-tech-solutions-3176a9327/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ramiganitechsolutions/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCFgSevZ1lcbs_iimYaDuB-Q' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Brand variant="dark" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Building Tomorrow's Technology — From Concept to Cloud. Dedicated to delivering exceptional service and innovative solutions for enterprises worldwide.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1E4F87] flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-slate-300">
                  8-3-191/95, MIG-H, 3rd Floor, Laxmi Plaza, Vengalrao Nagar Circle, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1E4F87] flex-shrink-0" />
                <a href="mailto:info@ramigani.com" className="text-[11px] hover:text-[#1E4F87] transition-colors">
                  info@ramigani.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1E4F87] flex-shrink-0" />
                <a href="tel:+919912340255" className="text-[11px] hover:text-[#1E4F87] transition-colors">
                  +91 99123 40255
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-[#1E4F87] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1E4F87] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#1E4F87] transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#1E4F87] transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1E4F87] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Our Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/solutions/app-development" className="hover:text-[#1E4F87] transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/solutions/web-development" className="hover:text-[#1E4F87] transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/solutions/ui-ux-design" className="hover:text-[#1E4F87] transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/solutions/qa-testing" className="hover:text-[#1E4F87] transition-colors">Software Testing & QA</Link>
              </li>
              <li>
                <Link to="/solutions/ai-ml-solutions" className="hover:text-[#1E4F87] transition-colors">AI/ML Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Subscribe to Updates
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to delivering exceptional service and innovative solutions. Join our quarterly tech insights newsletter.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#1E4F87]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-[#1E4F87] hover:bg-[#1E4F87] shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Sign Up</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-xs text-slate-400 text-center sm:text-left">
            © 2026 Ramigani Tech Solutions Pvt. Ltd. All rights reserved.
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const IconComp = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-[#1E4F87] hover:border-[#1E4F87] transition-all flex items-center justify-center"
                  aria-label={s.name}
                >
                  <IconComp className="w-3.5 h-3.5" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#1E4F87]/20 text-[#1E4F87] hover:bg-[#1E4F87] hover:text-white transition-all flex items-center justify-center ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
