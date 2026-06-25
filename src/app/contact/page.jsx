import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | SkillBridge",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-white">
              Contact SkillBridge
            </h1>

            <p className="text-slate-300 mt-5 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have questions,
              feedback, or business inquiries, our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}

        <section className="py-20 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

            {/* Left */}

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-slate-600">
                    support@skillbridge.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <p className="text-slate-600">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Office
                  </h3>

                  <p className="text-slate-600">
                    245 Market Street<br />
                    San Francisco, CA
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}

            <ContactForm />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}