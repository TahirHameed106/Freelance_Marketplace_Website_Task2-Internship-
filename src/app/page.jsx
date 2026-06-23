// src/app/page.jsx
// This is the homepage — it imports and assembles all sections in order.

import Navbar       from '@/components/Navbar';
import Hero         from '@/components/Hero';
import TrustedBy    from '@/components/TrustedBy';
import Categories   from '@/components/Categories';
import TopFreelancers from '@/components/TopFreelancers';
import HowItWorks   from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTA          from '@/components/CTA';
import Footer       from '@/components/Footer';

export const metadata = {
  title: 'SkillBridge — Hire Expert Freelancers',
  description: 'Find and hire verified freelancers for web development, design, marketing, AI, and more. Post your project free.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Categories />
        <TopFreelancers />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}