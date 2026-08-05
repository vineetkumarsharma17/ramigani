import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  const socialLinks = [
    { name: 'X/Twitter', icon: Twitter, href: 'https://x.com/RamiganiTe99276' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61567290185769' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ramigani-tech-solutions-3176a9327/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ramiganitechsolutions/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCFgSevZ1lcbs_iimYaDuB-Q' },
  ];

  const inputCls =
    'w-full px-0 py-3 bg-transparent border-b border-brand-lineStrong text-ink text-sm placeholder-brand-muted focus:outline-none focus:border-ink transition-colors';

  return (
    <section id="contact" className="py-24 sm:py-28 relative overflow-hidden">
      <div className="container-x relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-brand-line pb-8 mb-14"
        >
          <span className="eyebrow"><MessageSquare className="w-3.5 h-3.5 text-brand-accent" /> Get in touch</span>
          <h2 className="mt-4 font-display font-normal text-4xl sm:text-6xl tracking-tight text-ink leading-[1.02]">
            Let's <span className="italic accent-underline">connect</span>
          </h2>
          <p className="mt-5 text-lg text-brand-body max-w-2xl">
            Have a project in mind or want to discuss technology solutions? Our team in Hyderabad is ready to help.
          </p>
        </motion.div>

        {/* Top Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div>
              <h3 className="font-display text-2xl text-ink mb-1">
                Ramigani Tech Solutions Pvt. Ltd.
              </h3>
              <p className="text-[11px] uppercase tracking-widest2 text-brand-accent font-semibold mb-8">
                Corporate Office & Development Hub
              </p>

              <div className="divide-y divide-brand-line border-y border-brand-line">
                <div className="flex items-start gap-4 py-4">
                  <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-1" />
                  <div className="text-sm text-brand-soft">
                    <span className="text-[10px] uppercase tracking-widest2 text-brand-muted block mb-1">Address</span>
                    <span className="leading-relaxed">
                      8-3-191/95, MIG-H, 3rd Floor, Laxmi Plaza, Vengalrao Nagar Circle, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4">
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0 mt-1" />
                  <div className="text-sm text-brand-soft">
                    <span className="text-[10px] uppercase tracking-widest2 text-brand-muted block mb-1">Email</span>
                    <a href="mailto:info@ramigani.com" className="hover:text-brand-accent transition-colors">
                      info@ramigani.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4">
                  <Phone className="w-4 h-4 text-brand-accent flex-shrink-0 mt-1" />
                  <div className="text-sm text-brand-soft">
                    <span className="text-[10px] uppercase tracking-widest2 text-brand-muted block mb-1">Phone</span>
                    <a href="tel:+919912340255" className="hover:text-brand-accent transition-colors">
                      +91 99123 40255
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=919912340255&text=I%27m+interested+in+your+Product.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-brand-accent hover:bg-ink text-white font-medium text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp (+91 99123 40255)</span>
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted mb-3">
                  <Clock className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Business Hours</span>
                </div>
                <div className="divide-y divide-brand-line border-t border-brand-line text-sm text-brand-soft">
                  <div className="flex justify-between py-2.5">
                    <span>Monday – Friday</span>
                    <span className="text-ink font-medium">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span>Saturday</span>
                    <span className="text-ink font-medium">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span>Sunday</span>
                    <span className="text-brand-muted font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 pt-6 border-t border-brand-line">
              <span className="text-[10px] uppercase font-semibold text-brand-muted tracking-widest2 block mb-4">
                Follow Ramigani Tech
              </span>
              <div className="flex items-center gap-1">
                {socialLinks.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-brand-line text-brand-soft hover:bg-ink hover:text-paper hover:border-ink flex items-center justify-center transition-colors"
                      aria-label={s.name}
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 border border-brand-line p-1.5 min-h-[420px] flex flex-col"
          >
            <iframe
              title="Ramigani Tech Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.651447058531!2d78.4380077!3d17.4419967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9176f71f2eb3%3A0xcdc6e4991b124dd9!2sRamigani%20Tech%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', filter: 'grayscale(1) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-brand-line pt-14 max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl sm:text-4xl text-ink">
              Send us a message
            </h3>
            <p className="text-sm text-brand-soft mt-2">
              Fill in your inquiry details below and our team will respond promptly.
            </p>
          </div>

          {submittedSuccess ? (
            <div className="border border-brand-line p-10 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto" />
              <h4 className="font-display text-2xl text-ink">Message sent successfully</h4>
              <p className="text-sm text-brand-soft max-w-md mx-auto">
                Your message has been sent successfully! We'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmittedSuccess(false)}
                className="mt-4 btn-ghost"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {errorMessage && (
                <div className="p-3 border border-brand-accent/40 bg-brand-accentSoft text-brand-accentDark text-xs text-center font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted mb-2">
                    Your name <span className="text-brand-accent">*</span>
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className={inputCls} />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted mb-2">
                    Email address <span className="text-brand-accent">*</span>
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted mb-2">
                    Phone number
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 99123 40255" className={inputCls} />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted mb-2">
                    Subject
                  </label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry / Consultation" className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted mb-2">
                  Message <span className="text-brand-accent">*</span>
                </label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your project goals, timelines, or technical requirements..." required className={inputCls} />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
}
