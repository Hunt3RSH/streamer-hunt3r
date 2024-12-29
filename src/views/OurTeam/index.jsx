const people = [
  {
    name: 'minis0ul',
    role: 'Альона грає в кс з 13 років',
    href: 'https://www.twitch.tv/minis0ul',
    imageUrl:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/96d6f2e5-ce34-4914-86e7-a9100b4b95cb-profile_image-70x70.png',
  },
  {
    name: 'kabulbik',
    role: 'Маленька смілива Курочка',
    href: 'https://www.twitch.tv/kabulbik',
    imageUrl:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/22e3b66e-73d0-4548-9ae6-3c16b62eb4f7-profile_image-70x70.png',
  },
  {
    name: 'MrClernis',
    role: 'Грає в ігри',
    href: 'https://www.twitch.tv/mrclernis',
    imageUrl:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/42acd97c-c564-4708-8de3-2bad36bf368f-profile_image-70x70.png',
  },
  {
    name: 'MrHEIS_ua',
    role: 'Стрімить в основному після роботи',
    href: 'https://www.twitch.tv/mrheis_ua',
    imageUrl:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/e6fd3751-5057-44c3-836f-74dc80308929-profile_image-300x300.png',
  },
  {
    name: 'gr1mcat',
    role: 'Починаючий 3D artist',
    href: 'https://www.twitch.tv/gr1mcat',
    imageUrl:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/d8d37e8e-c658-4bc8-a5f3-3c99f4905831-profile_image-300x300.png',
  },
  {
    name: 'nicotin_tm',
    role: 'No information given.',
    href: 'https://www.twitch.tv/nicotin_tm',
    imageUrl:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/1d1fef90-c2ce-4d00-87a4-6ca8c2f8c649-profile_image-300x300.png',
  },
  // More people...
];

export default function OurTeam() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:pb-96">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Мої колеги по цеху
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Ми – яскрава спільнота стрімерів, які поділяють пристрасть до
            творчості, розваг і взаємодії з аудиторією. Разом ми підтримуємо
            одне одного та створюємо незабутні враження для наших глядачів.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map(person => (
            <li key={person.name}>
              <a
                className="flex items-center gap-x-6"
                href={person.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
