import Rules from 'views/Rules';
import MyLinks from '../MyLinks';
import ShapeBlend from 'components/3Dobj/ShapeBlend';

const HomeView = () => (
  <>
    <div className="relative isolate px-6 pt-14 lg:px-0 bg-white overflow-hidden">
      <ShapeBlend />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 pointer-events-none">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            МОНАПідримка.{' '}
            <a
              href="https://send.monobank.ua/jar/8GgAujGTyF"
              className="font-semibold text-indigo-600 pointer-events-auto"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Підтримка стрімера <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl no-pointer">
            Володимир <span className="text-blue-500">Hunt3R</span> Шамрай
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 no-pointer">
            Приєднуйся до трансляцій, де завжди цікаво та весело!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://www.twitch.tv/hunt3r_wtf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md pointer-events-auto bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Приєднатися до стріму
            </a>
            <a
              href="https://www.twitch.tv/hunt3r_wtf/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm/6 pointer-events-auto font-semibold text-gray-900 hover:text-indigo-500"
            >
              Підписатися на канал <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <MyLinks />
    <Rules />
  </>
);

export default HomeView;
