'use client'
import React from 'react'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// import icon from '@public/gettr-1.svg';

const Nav = () => {

// export default Nav
const [toggleDropdown, setToggleDropdown] = useState(false);

return (
  <nav className='flex-between w-full mb-16 pt-3'>
    <Link href='/' className='flex gap-2 flex-center'>
      <Image
        src='/logo2.png'
        alt='logo'
        width={140}
        height={140}s
        className='object-contain'
      />
      {/* <p className='logo_text'>Vinjury</p> */}
    </Link>

    {/* Desktop Navigation */}
    <div className='sm:flex hidden'>
        <div className='flex gap-3 md:gap-5 p-3'>
        <Link href='/' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
         <p className='logo_text transition-colors group-hover:text-white'>首頁</p>
       </Link>

       <Link href='/background' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
         <p className='logo_text transition-colors group-hover:text-white'>治療新冠和疫苗解毒訊息</p>
       </Link>

       <Link href='/Statistics' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
         <p className='logo_text transition-colors group-hover:text-white'>搜尋詳細數據</p>
       </Link>

       <Link href='/About' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
         <p className='logo_text transition-colors group-hover:text-white'>願景</p>
       </Link>
       <Link href='https://gettr.com/user/vinjury' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
              <Image
                src='gettr1.svg'
                width={35}
                height={25}
                className='logo_text'
                alt='gettr'
              />
            </Link>
            <Link href='https://gettr.com/user/vinjury'  className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
              <Image
                src='x-logo.svg'
                width={30}
                height={37}
                className='logo_text'
                alt='gettr'
              />
            </Link>
        </div>
    </div>

    {/* Mobile Navigation */}
    <div className='sm:hidden flex relative'>
        <div className='flex'>
          <Image
            src={'menu.svg'}
            width={37}
            height={37}
            className='rounded-full'
            alt='profile'
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
            <div className='dropdown'>
              <Link
                href='/'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                首頁
              </Link>
              <Link
                href='/background'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                治療新冠和疫苗解毒訊息
              </Link>
              <Link
                href='/Statistics'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                搜尋詳細數據
              </Link>
              <Link
                href='/About'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                願景
              </Link>
            </div>
          )}
        </div>
    </div>
  </nav>
);
};

export default Nav;