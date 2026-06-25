'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newErrors = {};

    if (!form.name.value)
      newErrors.name = 'Name is required';

    if (!form.email.value)
      newErrors.email = 'Email is required';

    if (
      form.email.value &&
      !/\S+@\S+\.\S+/.test(form.email.value)
    ) {
      newErrors.email = 'Invalid email';
    }

    if (!form.subject.value)
      newErrors.subject = 'Subject is required';

    if (!form.message.value)
      newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Message Sent Successfully');
      form.reset();
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500">{errors.name}</p>

          <input
            name="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500">{errors.email}</p>

          <input
            name="subject"
            placeholder="Subject"
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500">{errors.subject}</p>

          <textarea
            rows="6"
            name="message"
            placeholder="Message"
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-red-500">{errors.message}</p>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}