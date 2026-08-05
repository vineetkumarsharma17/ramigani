import React from 'react';
import Careers from '../components/Careers';
import CTA from '../components/CTA';

export default function CareersPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-28">
      <Careers onOpenQuoteModal={onOpenQuoteModal} />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
