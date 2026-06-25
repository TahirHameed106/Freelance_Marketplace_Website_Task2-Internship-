import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesDetails from '@/components/ServicesDetails';

export default async function ServicePage({ params }) {
  const { id } = await params;

  return <ServicesDetails serviceId={id} />;
}