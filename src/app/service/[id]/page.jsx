import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetails from '@/components/ServicesDetails';

export default function ServicePage({ params }) {
  return <ServiceDetails serviceId={params.id} />;
}