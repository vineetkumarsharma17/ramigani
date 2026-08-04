import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function HomePage({ onOpenQuoteModal }) {
  return (
    <div>
      <Hero onOpenQuoteModal={onOpenQuoteModal} />
      <TrustStrip />
      <Services onOpenQuoteModal={onOpenQuoteModal} />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
