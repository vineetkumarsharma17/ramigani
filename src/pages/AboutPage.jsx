import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-20">
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
