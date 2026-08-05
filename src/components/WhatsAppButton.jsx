import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block whitespace-nowrap bg-ink text-paper text-[11px] font-medium uppercase tracking-widest px-3 py-1.5">
        Chat on WhatsApp
      </div>

      {/* Pulse ring */}
      <span className="absolute -inset-1 bg-brand-accent/40 animate-ping pointer-events-none opacity-60" />

      {/* Main button */}
      <a
        href="https://api.whatsapp.com/send/?phone=919912340255&text=I%27m+interested+in+your+Product.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-brand-accent hover:bg-ink text-white flex items-center justify-center shadow-lift transition-colors duration-300"
        aria-label="Contact Ramigani Tech Solutions on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
