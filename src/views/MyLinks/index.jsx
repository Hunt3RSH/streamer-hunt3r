export default function MyLinks() {
  return (
    <div className="relative lg:-top-16 bg-white py-8 sm:py-16 lg:py-24 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Мої посилання
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="ButtonStyled col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:border-purple-600">
            <a
              className="flex items-center justify-center w-full h-full text-lg/8 font-semibold text-gray-900 hover:text-purple-600"
              href="https://twitch.tv/hunt3r_wtf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitch
            </a>
          </div>
          <div className="ButtonStyled col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:border-blue-700">
            <a
              className="flex items-center justify-center w-full h-full text-lg/8 font-semibold text-gray-900 hover:text-blue-700"
              href="https://discord.gg/CSMdbPCHXf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
          <div className="ButtonStyled col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:border-slate-500">
            <a
              className="flex items-center justify-center w-full h-full text-lg/8 font-semibold text-gray-900 hover:text-slate-500"
              href="https://github.com/Hunt3RSH"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="ButtonStyled col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:border-slate-500">
            <a
              className="flex items-center justify-center w-full h-full text-lg/8 font-semibold text-gray-900 hover:text-slate-500"
              href="https://x.com/Hunt3R__DEV"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
          <div className="ButtonStyled col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:border-red-600">
            <a
              className="flex items-center justify-center w-full h-full text-lg/8 font-semibold text-gray-900 hover:text-red-600"
              href="https://www.youtube.com/@Hunt3RRR_UA"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
