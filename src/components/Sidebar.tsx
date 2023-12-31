import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

interface SidebarProps {
  onNavigate: (pageName: string) => void;
}

const navigation = [
  {
    name: 'Shipping',
    current: true,
    children: [
      { name: 'Cycle Time COA', href: '#', current: true },
      { name: 'Claim Shipping', href: '#', current: false },
      { name: 'Pending Invoice', href: '#', current: false },
      { name: 'Negative Feedback', href: '#', current: false },
      { name: 'Vetting Plus', href: '#', current: false },
      { name: 'PSA', href: '#', current: false },
    ],
  },
  {
    name: 'Shipyard',
    current: false,
    children: [{ name: 'Pembangunan SPBE PT BBK', href: '#', current: false }],
  },
  {
    name: 'Projects',
    current: false,
    children: [{ name: 'Invoice', href: '#', current: false }],
  },
  { name: 'Supply Chain', href: '#', current: false },
  { name: 'Fuel Retail', href: '#', current: false },
  { name: 'Gas', href: '#', current: false },
  { name: 'TST', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ onNavigate }: SidebarProps) {

  return (
    <div className="flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 h-screen">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-12 w-auto"
          src="./src/assets/logo-bpg.png"
          alt="Data Center Barokah Perkasa Group"
        />
      </div>
      <nav className="flex-1 flex flex-col gap-y-7">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-tertiary',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-darkFont'
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-gray-50' : 'hover:bg-tertiary',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-darkFont hover:bg-tertiary'
                            )}
                          >
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.name}
                                  onClick={() => onNavigate(subItem.name)}
                                  className={classNames(
                                    subItem.current ? 'bg-gray-50' : 'hover:bg-tertiary',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-darkFont hover:bg-tertiary'
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-darkFont hover:bg-gray-50"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Ilham Rifaldi</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}