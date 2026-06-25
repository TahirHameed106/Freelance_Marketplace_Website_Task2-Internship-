// src/app/seller/[id]/page.jsx
// Route: /seller/alex-rivera  or  /seller/maya-patel
// This is a Server Component — no 'use client' needed here.

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SellerProfilePage from '@/components/SellerProfilePage';
import { getSellerById } from '@/data/sellers';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const seller = getSellerById(id);
  if (!seller) return { title: 'Seller Not Found' };
  return {
    title: `${seller.name} — SkillBridge`,
    description: seller.title,
  };
}

export default async function SellerPage({ params }) {
  const { id } = await params;
  const seller = getSellerById(id);
  if (!seller) notFound();

  return (
    <>
      <Navbar />
      <SellerProfilePage seller={seller} />
      <Footer />
    </>
  );
}