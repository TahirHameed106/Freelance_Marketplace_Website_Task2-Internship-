"use client";

import { useState } from "react";

export default function ContactForm() {

  const [errors, setErrors] = useState({});

  function handleSubmit(e) {

    e.preventDefault();

    const form = e.target;

    const newErrors = {};

    if (!form.name.value.trim())
      newErrors.name = "Name is required";

    if (!form.email.value.trim())
      newErrors.email = "Email is required";

    else if (
      !/\S+@\S+\.\S+/.test(form.email.value)
    )
      newErrors.email = "Invalid Email";

    if (!form.subject.value.trim())
      newErrors.subject = "Subject is required";

    if (!form.message.value.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Message Sent Successfully");
      form.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-lg p-8 space-y-5"
    >

      <input
        name="name"
        placeholder="Full Name"
        className="w-full border rounded-xl p-4"
      />

      {errors.name && (
        <p className="text-red-500 text-sm">
          {errors.name}
        </p>
      )}

      <input
        name="email"
        placeholder="Email Address"
        className="w-full border rounded-xl p-4"
      />

      {errors.email && (
        <p className="text-red-500 text-sm">
          {errors.email}
        </p>
      )}

      <input
        name="subject"
        placeholder="Subject"
        className="w-full border rounded-xl p-4"
      />

      {errors.subject && (
        <p className="text-red-500 text-sm">
          {errors.subject}
        </p>
      )}

      <textarea
        rows={6}
        name="message"
        placeholder="Message"
        className="w-full border rounded-xl p-4"
      />

      {errors.message && (
        <p className="text-red-500 text-sm">
          {errors.message}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-semibold"
      >
        Send Message
      </button>

    </form>
  );
}