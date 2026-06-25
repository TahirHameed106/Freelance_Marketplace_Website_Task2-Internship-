import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8">
          About SkillBridge
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Company Introduction
            </h2>

            <p className="text-gray-600">
              SkillBridge is a freelance marketplace connecting
              businesses with talented professionals around the world.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">
              Mission
            </h2>

            <p className="text-gray-600">
              Our mission is to make hiring freelancers easy,
              secure, and accessible for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">
              Vision
            </h2>

            <p className="text-gray-600">
              To become the most trusted freelance marketplace.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}