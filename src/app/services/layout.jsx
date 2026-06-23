// src/app/services/layout.jsx
// Layout for the /services route.
// Wraps the page with Navbar and Footer so they appear on every services sub-page.

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Browse Services',
  description: 'Browse 14+ professional freelance services in web development, design, marketing, video editing, and more.',
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}