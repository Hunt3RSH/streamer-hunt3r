import AboutImg from '../../components/img/About.jpg';
import { Helmet } from 'react-helmet-async';

export default function AboutMe() {
  const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  const canonical = `${base}/about`;
  return (
    <>
      <Helmet>
        <title>Про мене — Hunt3R | Стрімер і Розробник 🎮💻</title>
        <meta
          name="description"
          content="Дізнайтесь більше про Hunt3R — стрімера та розробника з України. Ігрові трансляції на Twitch, створення власних проєктів, розробка сайтів і ботів. Усе про діяльність та досвід Hunt3R."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="About — Hunt3R" />
        <meta
          property="og:description"
          content="Learn more about Hunt3R and the projects behind the stream."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${base}/hunter-cover.jpg`} />
      </Helmet>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                {/* <p className="text-base/7 font-semibold text-indigo-600">...</p> */}
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Про мене
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  Привіт! Я Hunt3R — ентузіаст геймінгу та стрімінгу. Люблю
                  створювати контент, спілкуватися з глядачами та ділитися
                  враженнями від улюблених ігор.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt="Hunt3R"
              src={AboutImg}
              className="w-[38rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <p>
                  У вільний час я займаюся програмуванням, експериментую з
                  технологіями та працюю над новими проєктами. Моя мета —
                  об'єднувати людей через спільні інтереси та позитивний
                  настрій. Крім того, я захоплююся дизайном, що допомагає мені
                  створювати унікальні рішення для своїх ідей.
                </p>
                <p className="mt-8">
                  Окрім ігор, я завжди відкритий до нових викликів. Моє
                  захоплення стрімінгом дозволяє мені бути ближчим до своєї
                  аудиторії, ділитися порадами, лайфхаками та цікавими моментами
                  з життя.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Для вас
                </h2>
                <p className="mt-6">
                  Дякую, що завітали на мій сайт! Сподіваюся, вам тут
                  сподобається, і ви знайдете щось цікаве для себе. Пам'ятайте:
                  грати — це не лише розвага, а й можливість навчитися нового та
                  розширити свій світогляд.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
