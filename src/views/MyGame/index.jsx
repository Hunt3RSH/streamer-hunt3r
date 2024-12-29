import img200 from './library2_600x900.png';

const callouts = [
  {
    name: 'Сталкер 2',
    description:
      'Дуже цікава та насичена гра! Раджу всім придбати й пройти її, адже вона подарувала мені безліч яскравих вражень.',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1643320/c58763f2dadbb8e78771267f509d4c7cec6690b2/library_600x900.jpg?t=1734969974',
    imageAlt: 'Сталкер 2',
    href: 'https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chornobyl/',
  },
  {
    name: 'Хеллдайверс 2',
    description: 'Просто фанова гра з друзями',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/553850/a88aa873bf9493a15c99ed340f4d670273c62bbc/library_600x900.jpg?t=1734382355',
    imageAlt: 'Хеллдайверс 2',
    href: 'https://store.steampowered.com/app/553850/HELLDIVERS_2/',
  },
  {
    name: 'Ферма симулятор 2025',
    description:
      'Чілова ігрулька яку я часто сподіваюсь стрімить разом із друзями тому цю гру ви точно не пропустите в мене на стрімі',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2300320/library_600x900.jpg?t=1734593651',
    imageAlt: 'Ферма симулятор 2025',
    href: 'https://store.steampowered.com/app/2300320/Farming_Simulator_25/',
  },
  {
    name: 'Файналс',
    description:
      'Ой, ну тут важко щось сказати з приводу цієї гри. Для мого ноутбука вона досить важка, тому стріми будуть, але не дуже часто. Думаю, потрібно купити нову відеокарту, щоб ноутбук не вимикався під час стрімів цієї гри.',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/2073850/bcea002b8757c7bf7aed894d32d7dcfb699989ed/library_600x900.jpg?t=1734012054',
    imageAlt: 'Файналс',
    href: 'https://store.steampowered.com/app/2073850/THE_FINALS/',
  },
  {
    name: 'Еншрауд',
    description:
      'Наразі ми займаємося проходженням цієї гри разом із Клернісом, Курочкою та Емрісом. Тож заходьте на стріми та слідкуйте за нами, спостерігаючи, як ми розвиваємося!',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1203620/library_600x900.jpg?t=1734454279',
    imageAlt: 'Еншрауд',
    href: 'https://store.steampowered.com/app/1203620/Enshrouded/',
  },
  {
    name: 'Форза Хорайзон 5',
    description:
      'Ну що, ця гра зайняла своє місце в моєму серці. Кинути її не можу, поки що. Досить часто виходять оновлення та додають нові тачки. Стрімлю раз або навіть два рази на тиждень, тож приєднуйтесь!',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/1551360/library_600x900.jpg?t=1730830713',
    imageAlt: 'Форза Хорайзон 5',
    href: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/',
  },
  {
    name: 'Ціва 6',
    description:
      'Цікава цивілка, ну короче, гра, де я не відстрілюю дупля. Якщо ви хочете пограти зі мною та моїми друзями, можете на моєму каналі купити цю можливість.',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/289070/library_600x900.jpg?t=1733332228',
    imageAlt: 'Ціва 6',
    href: 'https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/',
  },
  {
    name: 'КС2',
    description:
      'Що це, бляха, за гра?! Не факт, що я буду її ще стрімити, але в неї вже награно чимало годин.',
    imageSrc:
      'https://shared.fastly.steamstatic.com//store_item_assets/steam/apps/730/library_600x900.jpg?t=1729703045',
    imageAlt: 'КС2',
    href: 'https://store.steampowered.com/app/730/CounterStrike_2/',
  },
  {
    name: 'Понад 200+ ігор',
    description:
      'Якщо ти бажаєш побачити якусь гру з моєї бібліотеки Steam, можеш заглянути в неї і вибрати гру для стріму. Буду радий показати тобі щось новеньке або цікаве!',
    imageSrc: img200,
    imageAlt: 'Понад 300+ ігор',
    href: 'https://steamcommunity.com/id/Hunt3R_wise/games/?tab=all',
  },
];

export default function SteamGames() {
  return (
    <div className="bg-gray-100 mt-8 lg:mt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Ігри для стріму</h2>

          <div className="mt-6 space-y-12 sm:space-y-0 lg:grid sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-5  lg:gap-6 lg:space-y-0">
            {callouts.map(callout => (
              <div
                key={callout.name}
                className="group relative overflow-hidden game rounded-lg"
              >
                <a
                  href={callout.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-lg object-contain max-sm:h-80 1lg:aspect-auto sm:aspect-auto"
                  />
                  <div className="gameInfo">
                    <h3 className="mt-6 text-base font-semibold text-gray-950 lg:text-gray-200">
                      <span className="absolute inset-0" />
                      {callout.name}
                    </h3>
                    <p className="text-sm text-gray-800 lg:text-white">
                      {callout.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
