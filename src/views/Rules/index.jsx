const product = {
  name:
    'Правила Каналу',
  highlights: [
    'Не ображай нікого в чаті',
    'Мова чату українська та місцями англійська',
    'Не запитуй "як тобі гра?" --- відповідь на всі такі запитання: "Ніяк"',
    'Май голову на плечах і розумій, що якщо ти мене ображаєш, то довго ти тут не просидиш',
    'Якщо я не прошу поради, то давати мені їх не потрібно- це моє проходження',
    
  ],
  details:
    'Не забувай “Стався до людей так, як ти хотів би, щоб ставились до тебе!”',
}

export default function Rules() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
                      
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Загальні</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Додатково для вас</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
