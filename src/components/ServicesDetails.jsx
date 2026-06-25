// src/components/ServicesDetails.jsx

import { getServiceById } from "../data/sellers";

export default function ServicesDetails({ serviceId }) {
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <img
        src={service.banner}
        alt={service.title}
        className="w-full rounded-3xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {service.title}
      </h1>

      <p className="text-slate-600 mb-10 leading-relaxed">
        {service.description}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {service.packages.map((pkg, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold">
              {pkg.name}
            </h2>

            <h3 className="text-4xl font-bold text-emerald-600 my-4">
              ${pkg.price}
            </h3>

            <p>Delivery: {pkg.delivery} Days</p>
            <p>Revisions: {pkg.revisions}</p>

            <ul className="mt-4 space-y-2">
              {pkg.includes.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">
          Service Features
        </h2>

        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index}>
              ✔ {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Client Reviews
        </h2>

        <div className="space-y-5">
          {service.reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded-2xl p-5"
            >
              <h3 className="font-semibold">
                {review.name}
              </h3>

              <p>⭐ {review.rating}/5</p>

              <p className="text-slate-500">
                {review.date}
              </p>

              <p className="mt-2">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}