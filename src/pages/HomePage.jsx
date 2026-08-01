import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';

export default function HomePage({ onOpenQuoteModal }) {
  return (
    <div>
      <Hero onOpenQuoteModal={onOpenQuoteModal} />
      <Services onOpenQuoteModal={onOpenQuoteModal} />
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
