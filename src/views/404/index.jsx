import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={(process.env.PUBLIC_URL || '').replace(/\/$/, '') + '/404'} />
      </Helmet>
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Сторінку не знайдено
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Вибачте, ми не змогли знайти сторінку, яку ви шукаєте.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Повернутись на головну.
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
