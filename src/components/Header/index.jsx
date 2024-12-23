// import { NavLink } from 'react-router-dom';
// const Header = () => (
//     <header className="App-header">
//         <h1>Hunt3R_WTF TTV</h1>
//         <nav>
//         <ul className="nav-links">
//             <li>
//             <NavLink to="/">Головна</NavLink>
//             </li>
//             <li>
//             <NavLink to="/about">Про мене</NavLink>
//             </li>
//             <li>
//             <a className='InProgress' to="*" onClick={event => event.preventDefault()}>Бот "Команди"</a>
//             </li>
//         </ul>
//         </nav>
//     </header>
// );

// export default Header;

'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import logo from '../img/favicon.png'

const navigation = [
  { name: 'Головна', to: '/' },
  { name: 'Про мене', to: '/about' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="inset-x-0 top-0 z-50 bg-white">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hunt3R TTV</span>
              <img
                alt=""
                src={logo}
                className="h-8 w-auto"
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 pl-12">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.to} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Hunt3R TTV</span>
                <img
                  alt=""
                  src={logo}
                  className="h-8 w-auto"
                />
              </NavLink>
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
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
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
  )
}
