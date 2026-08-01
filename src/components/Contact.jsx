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

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Let's <span className="text-[#FF5500]">Connect</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Have a project in mind or want to discuss technology solutions? Our team in Hyderabad is ready to help.
          </p>
        </motion.div>

        {/* Top Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Left Column: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="lg:col-span-5 bg-white border border-slate-200 hover:border-orange-300 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
                Ramigani Tech Solutions Pvt. Ltd.
              </h3>
              <p className="text-xs text-[#FF5500] font-bold mb-6">
                Corporate Office & Development Hub
              </p>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#FFF0E6] text-[#FF5500] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Address:</span>
                    <span className="leading-relaxed">
                      8-3-191/95, MIG-H, 3rd Floor, Laxmi Plaza, Vengalrao Nagar Circle, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#FFF0E6] text-[#FF5500] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Email:</span>
                    <a href="mailto:info@ramigani.com" className="hover:text-[#FF5500] transition-colors font-medium">
                      info@ramigani.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#FFF0E6] text-[#FF5500] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Phone:</span>
                    <a href="tel:+919912340255" className="hover:text-[#FF5500] transition-colors font-medium">
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
                  className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp (+91 99123 40255)</span>
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-3">
                  <Clock className="w-4 h-4 text-[#FF5500]" />
                  <span>Business Hours</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <span className="text-slate-900 font-semibold">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-slate-900 font-semibold">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-red-500 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-3">
                Follow Ramigani Tech
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <motion.a
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#FF5500] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                      aria-label={s.name}
                    >
                      <IconComp className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="lg:col-span-7 bg-white border border-slate-200 hover:border-orange-300 p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all min-h-[400px] flex flex-col"
          >
            <iframe
              title="Ramigani Tech Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.651447058531!2d78.4380077!3d17.4419967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9176f71f2eb3%3A0xcdc6e4991b124dd9!2sRamigani%20Tech%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.25rem', minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-slate-200 hover:border-orange-300 p-8 sm:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Send Us a Message
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fill in your inquiry details below and our team will respond promptly.
            </p>
          </div>

          {submittedSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your message has been sent successfully! We'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmittedSuccess(false)}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs text-center font-bold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Your Name <span className="text-[#FF5500]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Email Address <span className="text-[#FF5500]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99123 40255"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Message <span className="text-[#FF5500]">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals, timelines, or technical requirements..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs text-white bg-[#FF6A00] hover:bg-[#FF5500] shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
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
