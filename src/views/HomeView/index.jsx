
import Rules from "views/Rules";
import MyLinks from "../MyLinks";
const HomeView = () => (
  <>
    <section className="relative isolate overflow-hidden bg-white px-6 py-28 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure>
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <h1>
              Ласкаво прошу на мій сайт
            </h1>
          </blockquote>
          <figcaption className="mt-3">
            <img
              alt=""
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/38c0b4a7-43fd-4f68-a7ed-b9b20e73ccf4-profile_image-70x70.png"
              className="mx-auto size-16 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Hunt3R</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Володимир Шамрай</div>
          </div>
          <div className="hidden sm:flex sm:justify-center">
            <div className="relative mt-3 rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Підтримайте стрімера{' '}
              <a href="https://send.monobank.ua/jar/8GgAujGTyF" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Посилання на донат <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          </figcaption>
        </figure>
      </div>
    </section>
    <MyLinks />
    <Rules />
</>

);

export default HomeView;