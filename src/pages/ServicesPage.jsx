import React from 'react';
import Services from '../components/Services';
import CTA from '../components/CTA';

export default function ServicesPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-20">
      <Services onOpenQuoteModal={onOpenQuoteModal} />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
