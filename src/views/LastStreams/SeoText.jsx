import { SEO_STREAMS_PRESENT, SEO_STREAMS_EMPTY } from './seoTextContent';

export default function SeoText({ hasStreams }) {
  const data = hasStreams ? SEO_STREAMS_PRESENT : SEO_STREAMS_EMPTY;

  const missing =
    !data || !data.h2 || !data.p1 || !data.h3 || !Array.isArray(data.list);

  if (missing) {
    return (
      <div className="rounded-md bg-yellow-50 p-4 text-yellow-800 text-sm">
        <p>
          TODO: Додайте власний SEO‑текст українською мовою зі структурою H2,
          p1, H3, p2, ul/li та мінімум 2000 символів без пробілів у файлі
          <code className="mx-1">src/views/LastStreams/seoTextContent.js</code>.
        </p>
        <p className="mt-2">Поточний стан: контент неповний або відсутній.</p>
      </div>
    );
  }

  return (
    <section
      aria-label="SEO опис категорії Стріми"
      className="prose prose-indigo max-w-none"
    >
      <p className="text-sm text-gray-500">
        {hasStreams
          ? 'Нижче доступні актуальні стріми та записи трансляцій.'
          : 'Наразі нові стріми відсутні. Стежте за оновленнями — незабаром тут з’являться трансляції.'}
      </p>
      <h2 className="mt-4 text-gray-400">{data.h2}</h2>
      <p className="text-gray-400">{data.p1}</p>
      <h3 className="mt-6 text-gray-400">{data.h3}</h3>
      <p className="text-gray-400">{data.p2}</p>
      {data.list?.length > 0 && (
        <ul className="list-disc space-y-2 pl-4 text-sm">
          {data.list.map((item, idx) => (
            <li key={idx} className="text-gray-400">
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
