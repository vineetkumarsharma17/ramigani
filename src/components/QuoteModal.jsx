import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobileNumber: '',
    budget: '₹50,000–₹100,000',
    purpose: 'App Development',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const countryCodes = [
    { code: '+91', country: 'India (+91)' },
    { code: '+1', country: 'USA (+1)' },
    { code: '+44', country: 'UK (+44)' },
    { code: '+61', country: 'Australia (+61)' },
    { code: '+81', country: 'Japan (+81)' },
    { code: '+49', country: 'Germany (+49)' },
    { code: '+33', country: 'France (+33)' },
  ];

  const budgetRanges = [
    'Below ₹50,000',
    '₹50,000–₹100,000',
    '₹100,000–₹1,000,000',
    'Above ₹1,000,000'
  ];

  const projectPurposes = [
    'App Development',
    'Web Development',
    'Digital Marketing',
    'AI/ML Solutions',
    'UI/UX Design',
    'Other Technology Needs'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobileNumber) {
      setErrorMessage('Please fill in your Full Name, Email, and Mobile Number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">
                Quote Request Submitted!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your quote request has been successfully submitted. We'll send you a detailed proposal within 48 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full text-xs font-bold text-white bg-[#1E4F87] shadow-md hover:bg-[#1E4F87] transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              
              <div className="flex items-center gap-2 text-[#1E4F87] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Custom Solution Proposal</span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                Get a Custom <span className="text-[#1E4F87]">Quote</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Tell us about your project requirements and budget to receive a tailored technical proposal.
              </p>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs text-center font-bold">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Full Name <span className="text-[#1E4F87]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#1E4F87]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Email Address <span className="text-[#1E4F87]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#1E4F87]"
                  />
                </div>

                {/* Country Code & Mobile Number */}
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-4">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Code
                    </label>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#1E4F87]"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-8">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Mobile Number <span className="text-[#1E4F87]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="99123 40255"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#1E4F87]"
                    />
                  </div>
                </div>

                {/* Budget & Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#1E4F87]"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Project Purpose
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#1E4F87]"
                    >
                      {projectPurposes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe target features, platform, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#1E4F87]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full font-bold text-xs text-white bg-[#1E4F87] hover:bg-[#1E4F87] shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
