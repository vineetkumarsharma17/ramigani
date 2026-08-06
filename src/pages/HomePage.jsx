import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import TrustStrip from '../components/TrustStrip';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function HomePage({ onOpenQuoteModal }) {
  return (
    <div>
      <Hero onOpenQuoteModal={onOpenQuoteModal} />
      <Services onOpenQuoteModal={onOpenQuoteModal} />
      <Capabilities />
      <WhyChooseUs />
      <Process />
      <TrustStrip />
      <Testimonials />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
