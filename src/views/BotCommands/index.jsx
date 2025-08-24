import { SparklesIcon } from '@heroicons/react/24/outline';
// import BotView from '../../components/3Dobj/BotView';

const features = [
  {
    name: '!інста',
    description: 'Отримай посилання на мій Instagram профіль.',
    icon: SparklesIcon,
  },
  {
    name: '!дс',
    description:
      'Запрошення до Discord-сервера. Приєднуйся, щоб спілкуватися з іншими учасниками!',
    icon: SparklesIcon,
  },
  {
    name: '!x',
    description: 'Лінк до мого профілю у X (Twitter).',
    icon: SparklesIcon,
  },
  {
    name: '!github',
    description: 'Подивись мій GitHub профіль, де є всі проєкти та коди.',
    icon: SparklesIcon,
  },
  {
    name: '!dpi',
    description:
      'Налаштування DPI мишки та рекомендації для зручності в іграх.',
    icon: SparklesIcon,
  },
  {
    name: '!стім',
    description: 'Посилання на мій профіль у Steam.',
    icon: SparklesIcon,
  },
  {
    name: '!трейд',
    description: 'Лінк для обміну в Steam. Обмінюйся предметами легко!',
    icon: SparklesIcon,
  },
  {
    name: '!ланки',
    description: 'Зібрані всі важливі посилання, щоб нічого не загубити.',
    icon: SparklesIcon,
  },
  {
    name: '!підтримка',
    description: 'Дізнайся, як можна підтримати канал',
    icon: SparklesIcon,
  },
];

const featuresFunny = [
  {
    name: '!sr',
    description: 'додати свою пісню',
    icon: SparklesIcon,
  },
  {
    name: '!розмір',
    description: 'дізнайся свій розмір',
    icon: SparklesIcon,
  },
  {
    name: '!любов',
    description:
      "Вкажіть ім'я іншого користувача! Наприклад: !любов @Streamer ",
    icon: SparklesIcon,
  },
  {
    name: '!хто',
    description: 'хто винен?',
    icon: SparklesIcon,
  },
  {
    name: '!напій',
    description: 'Кава чи чай?',
    icon: SparklesIcon,
  },
  {
    name: '!пиво',
    description: 'Холодне пиво 🍺',
    icon: SparklesIcon,
  },
  {
    name: '!розумник',
    description: 'Розумний генератор фраз',
    icon: SparklesIcon,
  },
  {
    name: '!addicted',
    description:
      'Тільки для справжніх геймерів! Визнач, наскільки ти "залежний" від ігор.',
    icon: SparklesIcon,
  },
];

export default function BotCommands() {
  return (
    <>
      {/* <BotView /> */}
      <div className="bg-white py-24 sm:py-32 bgImage">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Hunt3RsBOT
            </h2>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Загальні команди
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
              {features.map(feature => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto max-w-2xl mt-24 lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Для розваги
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
              {featuresFunny.map(feature => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
