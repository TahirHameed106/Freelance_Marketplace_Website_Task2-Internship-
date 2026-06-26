// src/app/service/[id]/page.jsx
// Route: /service/1  or  /service/4
// Server Component

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailsPage from '@/components/ServiceDetailsPage';
import { getServiceById, getSellerById } from '@/data/sellers';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} — SkillBridge`,
    description: service.description.slice(0, 150),
  };
}

export default async function ServicePage({ params }) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const seller = getSellerById(service.sellerId);

  return (
    <>
      <Navbar />
      <ServiceDetailsPage service={service} seller={seller} />
      <Footer />
    </>
  );
}