import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function ServicesPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-20">
      <Services onOpenQuoteModal={onOpenQuoteModal} />
      <Process />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
