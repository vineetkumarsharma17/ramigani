import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send } from 'lucide-react';

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

  const fieldCls =
    'w-full px-0 py-2.5 bg-transparent border-b border-brand-lineStrong text-ink text-sm placeholder-brand-muted focus:outline-none focus:border-ink transition-colors';
  const labelCls = 'block text-[10px] uppercase tracking-widest2 font-semibold text-brand-muted mb-1.5';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-paper border border-brand-line p-6 sm:p-9 shadow-lift z-10 overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 text-brand-muted hover:text-ink transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 border border-brand-accent text-brand-accent flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-3xl text-ink">
                Quote request submitted
              </h3>
              <p className="text-sm text-brand-soft max-w-md mx-auto leading-relaxed">
                Your quote request has been successfully submitted. We'll send you a detailed proposal within 48 hours.
              </p>
              <div className="pt-4">
                <button onClick={handleClose} className="btn-primary">
                  Close window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-[10px] uppercase tracking-widest2 font-semibold text-brand-accent mb-3">
                Custom Solution Proposal
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-ink mb-2">
                Get a custom <span className="italic accent-underline">quote</span>
              </h3>
              <p className="text-sm text-brand-soft mb-7">
                Tell us about your project requirements and budget to receive a tailored technical proposal.
              </p>

              {errorMessage && (
                <div className="mb-5 p-3 border border-brand-accent/40 bg-brand-accentSoft text-brand-accentDark text-xs text-center font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className={labelCls}>Full Name <span className="text-brand-accent">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required className={fieldCls} />
                </div>

                {/* Email */}
                <div>
                  <label className={labelCls}>Email Address <span className="text-brand-accent">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@company.com" required className={fieldCls} />
                </div>

                {/* Country Code & Mobile Number */}
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <label className={labelCls}>Code</label>
                    <select name="countryCode" value={formData.countryCode} onChange={handleChange} className={fieldCls}>
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>{c.code}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-8">
                    <label className={labelCls}>Mobile Number <span className="text-brand-accent">*</span></label>
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="99123 40255" required className={fieldCls} />
                  </div>
                </div>

                {/* Budget & Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Estimated Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className={fieldCls}>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>Project Purpose</label>
                    <select name="purpose" value={formData.purpose} onChange={handleChange} className={fieldCls}>
                      {projectPurposes.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls}>Project Requirements / Notes</label>
                  <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Briefly describe target features, platform, or timeline..." className={fieldCls} />
                </div>

                <div className="pt-3">
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">
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
