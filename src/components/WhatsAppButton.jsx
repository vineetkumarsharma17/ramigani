import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block whitespace-nowrap bg-ink text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl">
        Chat on WhatsApp
      </div>

      {/* Pulse Outer Ring */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/50 animate-ping pointer-events-none opacity-75" />

      {/* Main Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=919912340255&text=I%27m+interested+in+your+Product.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contact Ramigani Tech Solutions on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
