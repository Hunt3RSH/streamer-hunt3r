import { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import logo from '../img/favicon.png';
import { getHunt3r } from 'utils/API/api';

const navigation = [
  { name: 'Головна', to: '/' },
  { name: 'Про мене', to: '/about' },
  { name: 'BOT команди', to: '/commands' },
  { name: 'Setup', to: '/setup' },
  { name: 'Ігри', to: '/game' },
  { name: 'Колеги', to: '/streamers' },
  { name: 'Стріми', to: '/laststream' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const userData = await getHunt3r('hunt3r_wtf');
        if (userData?.data?.length > 0) {
          setStatus(prev => ({
            ...prev,
            hunt3r_wtf: 'Онлайн',
          }));
        } else {
          setStatus(prev => ({
            ...prev,
            hunt3r_wtf: 'Оффлайн',
          }));
        }
      } catch (error) {
        console.error('Помилка при отриманні статусу стрімера:', error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="bg-slate-800">
      <header className=" px-6 inset-x-0 top-0 z-50 bg-slate-800 fixed">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between py-6 lg:py-0 max-w-7xl"
        >
          <div className="flex">
            <span className="sr-only">Hunt3R TTV</span>
            <a href="/streamer-hunt3r">
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex ml-12">
            {navigation.map(item => (
              <NavLink
                key={item.name}
                to={item.to}
                aria-current={item.current ? 'page' : undefined}
                className="block px-2 py-6 text-sm text-gray-200 data-[focus]:bg-gray-100 data-[focus]:outline-none font-semibold relative"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden justify-center flex-col items-center lg:flex ">
            <a
              href="https://www.twitch.tv/hunt3r_wtf"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium text-center rounded-full px-1 hidden hover:text-white lg:flex bottom-0 left-0 ${
                status['hunt3r_wtf'] === 'Онлайн'
                  ? 'text-white bg-red-600'
                  : status['hunt3r_wtf'] === 'Оффлайн'
                  ? 'text-zinc-100 bg-gray-500'
                  : 'text-white-500 bg-gray-500'
              }`}
            >
              {/* <VideoCameraIcon
                aria-hidden="true"
                className={`absolute size-9 top-0 ${
                  status['hunt3r_wtf'] === 'Онлайн'
                    ? 'text-white bg-red-600'
                    : status['hunt3r_wtf'] === 'Оффлайн'
                    ? 'text-red-700 bg-gray-500'
                    : 'text-white-500 bg-gray-500'
                }}`}
              /> */}
              {status['hunt3r_wtf'] || '...'}
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <DialogPanel
            className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(item => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
