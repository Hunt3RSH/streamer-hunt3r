import products from './products';

export default function MySetup() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          вся інформація про мої девайси і систему
        </h2>
        <h1 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Мій сетап
        </h1>
        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-lg p-4 shadow-md bg-white"
            >
              <img
                className="w-full h-48 object-contain rounded-md"
                src={product.img.src}
                alt={product.img.alt}
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <h4 className="mt-1 text-md font-semibold text-gray-900">
                {product.info}
              </h4>
              <ul className="mt-1 list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-400">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
