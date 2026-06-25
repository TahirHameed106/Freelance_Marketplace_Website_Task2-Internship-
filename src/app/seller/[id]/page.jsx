import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SellerProfile from '@/components/SellerProfile';

export default function SellerPage({ params }) {
  return <SellerProfile sellerId={params.id} />;
}