import Link from "next/link";

import { getSellerById } from "../data/sellers";

export default function SellerProfile() {
  const seller = getSellerById(sellerId);

  if (!seller) {
    return (
      <div className="container py-10">
        <h2>Seller Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="bg-white rounded-xl shadow-lg p-6">

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-40 h-40 rounded-full"
          />

          <div>
            <h1 className="text-3xl font-bold">{seller.name}</h1>

            <p className="text-gray-600 mt-2">
              {seller.title}
            </p>

            <p className="mt-2">
              ⭐ {seller.rating} ({seller.totalReviews} Reviews)
            </p>

            <p>📍 {seller.location}</p>

            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Contact Seller
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3">About</h2>
          <p>{seller.about}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {seller.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3">
            Experience
          </h2>

          {seller.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{exp.role}</h3>
              <p>{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Portfolio
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {seller.portfolio.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-3">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}