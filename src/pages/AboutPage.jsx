import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-16">
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
