import { getServiceById } from "../data/sellers";

export default function ServiceDetails() {

  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="container py-10">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-10">

      <img
        src={service.banner}
        alt={service.title}
        className="w-full rounded-xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {service.title}
      </h1>

      <p className="text-gray-600 mb-8">
        {service.description}
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {service.packages.map((pkg, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow"
          >
            <h2 className="text-xl font-bold">
              {pkg.name}
            </h2>

            <h3 className="text-3xl font-bold text-blue-600 my-3">
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

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Service Features
        </h2>

        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Client Reviews
        </h2>

        <div className="space-y-4">
          {service.reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded-lg p-4"
            >
              <h3 className="font-semibold">
                {review.name}
              </h3>

              <p>⭐ {review.rating}/5</p>

              <p className="text-gray-500">
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