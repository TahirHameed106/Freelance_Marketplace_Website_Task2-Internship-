// src/components/ServicesDetails.jsx

import Link from "next/link";
import { getServiceById, getSellerById } from "@/data/sellers";

export default function ServicesDetails({ serviceId }) {
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-red-500">
          Service Not Found
        </h1>
      </div>
    );
  }

  const seller = getSellerById(service.sellerId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Banner */}
      <img
        src={service.banner}
        alt={service.title}
        className="w-full h-112.5 object-cover rounded-3xl mb-8"
      />

      {/* Seller Card */}
      {seller && (
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10 flex items-center gap-5">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {seller.name}
            </h2>

            <p className="text-slate-500">
              {seller.title}
            </p>

            <Link
              href={`/seller/${seller.id}`}
              className="text-emerald-600 font-semibold"
            >
              View Seller Profile →
            </Link>
          </div>
        </div>
      )}

      {/* Title */}
      <h1 className="text-5xl font-bold mb-5">
        {service.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-slate-600 leading-relaxed mb-10 whitespace-pre-line">
        {service.description}
      </p>

      {/* Gallery */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="rounded-2xl shadow-md w-full h-64 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Pricing Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.packages.map((pkg, index) => (
            <div
              key={index}
              className="border rounded-3xl p-6 shadow-lg bg-white"
            >
              <h3 className="text-2xl font-bold">
                {pkg.name}
              </h3>

              <div className="text-5xl font-bold text-emerald-600 my-5">
                ${pkg.price}
              </div>

              <p className="mb-2">
                🚚 Delivery: {pkg.delivery} Days
              </p>

              <p className="mb-4">
                🔄 Revisions: {pkg.revisions}
              </p>

              <p className="text-slate-600 mb-4">
                {pkg.description}
              </p>

              <ul className="space-y-2">
                {pkg.includes.map((item, i) => (
                  <li key={i}>
                    ✔ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-5">
          Service Features
        </h2>

        <div className="grid md:grid-cols-2 gap-3">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-4 rounded-xl"
            >
              ✔ {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-5">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Rating Summary */}
      <div className="bg-emerald-50 rounded-3xl p-8 mb-10">
        <h2 className="text-5xl font-bold">
          ⭐ 4.9
        </h2>

        <p className="text-slate-600 mt-2">
          Based on {service.reviews.length} client reviews
        </p>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Client Reviews
        </h2>

        <div className="space-y-6">
          {service.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-md rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h3 className="font-bold">
                    {review.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {review.date}
                  </p>
                </div>
              </div>

              <p className="font-semibold mb-3">
                ⭐ {review.rating}/5
              </p>

              <p className="text-slate-600">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}