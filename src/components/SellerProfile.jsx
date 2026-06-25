// src/components/SellerProfile.jsx

import Link from "next/link";
import { getSellerById } from "../data/sellers";

export default function SellerProfile({ sellerId }) {
  const seller = getSellerById(sellerId);

  if (!seller) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold">Seller Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-emerald-100"
          />

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              {seller.name}
            </h1>

            <p className="text-lg text-slate-600 mt-2">
              {seller.title}
            </p>

            <p className="mt-3">
              ⭐ {seller.rating} ({seller.totalReviews} Reviews)
            </p>

            <p className="mt-1">📍 {seller.location}</p>

            <p className="mt-1">⚡ Response Time: {seller.responseTime}</p>

            <button className="mt-5 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl">
              Contact Seller
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-slate-600 leading-relaxed">
            {seller.about}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {seller.skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-100 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>

          {seller.experience.map((exp, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-semibold text-lg">
                {exp.role}
              </h3>

              <p>{exp.company}</p>

              <p className="text-slate-500">
                {exp.period}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            Portfolio
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {seller.portfolio.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {seller.services?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Services
            </h2>

            <div className="flex flex-wrap gap-4">
              {seller.services.map((serviceId) => (
                <Link
                  key={serviceId}
                  href={`/service/${serviceId}`}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-xl"
                >
                  View Service #{serviceId}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}