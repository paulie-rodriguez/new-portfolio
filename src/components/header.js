import { Link } from 'gatsby';
import React, { useState } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import "../css/style.css"
const Header = () => {
  const [isActive, toggleButton] = useState(false);

  return (
    <>
      <header className='bg-white shadow m-0'>
        <div className='flex flex-wrap md:flex-no-wrap items-center justify-between max-w-full mx-8 md:mx-16 py-6 md:py-6'>
          <div className='flex items-center'>
            <Link to='/' className=''>
              <p className='josefin leading-none font-bold text-xl text-white bg-red-500 rounded-full px-3 py-3 hover:shadow-md hover:bg-red-600'>
                PR
              </p>
            </Link>
          </div>
          <div className='block md:hidden flex rounded-none'>
            <HamburgerSqueeze
              className='z-20 p-0 straight'
              buttonStyle={{ padding: '0px' }}
              isActive={isActive}
              onClick={() => toggleButton(!isActive)}
              barColor={!isActive ? '#2D3748' : '#FFFFFF'}
            />
          </div>

          <ul className='hidden md:flex flex-col md:flex-row md:items-center md:justify-center text-base w-full md:w-auto mr-0'>
            {[
              { title: 'About me', route: '/about' },
              { title: 'Projects', route: '/#Projects' }
              // { title: 'Design', route: '/design' },
              // { title: 'Blog', route: '/blog' }
            ].map(navigationItem => (
              <li className='mt-3 md:mt-0 md:ml-6 hover:underline text-red-700 opensans' key={navigationItem.title}>
                <Link activeClassName='font-bold' to={navigationItem.route}>
                  <p className='block text-red-500 underline'>{navigationItem.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div
        className={`${isActive? `true` : `false`} fixed bg-gray-800 h-screen w-1/2 flex flex-col right-0 md:hidden lg:hidden z-10`}
        id='SideMenu'
      >
        <ul className='flex-col mt-16'>
          {[
            { title: 'About me', route: '/about' },
            { title: 'Projects', route: '/#Projects' }
            // { title: 'Design', route: '/design' },
            // { title: 'Blog', route: '/blog' }
          ].map(navigationItem => (
            <li
              className='mt-3 md:mt-0 md:ml-6'
              key={navigationItem.title + 'side'}
            >
              <Link
              activeClassName='font-bold'
                to={navigationItem.route}
                onClick={() => toggleButton(!isActive)}
              >
                <p className=' text-white block ml-4 text-2xl'>
                  {navigationItem.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
