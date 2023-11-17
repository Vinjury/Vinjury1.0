'use client'
import React from 'react'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {

// export default Nav
const [toggleDropdown, setToggleDropdown] = useState(false);


const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

return (
  <nav className='flex-between lg:w-[115%] mb-16 pt-3 bg-stone-50 px-3 pb-3'>
    <Link href='/' className='flex gap-2 flex-center'>
      <Image
        src='/logo2.png'
        alt='logo'
        width={140}
        height={140}
        className='object-contain'
      />
    </Link>

    {/* Desktop Navigation */}
    <div className='sm:flex hidden'>
        <div className='flex gap-3 md:gap-5 p-3'>
        <Link href='/' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
         <p className='logo_text transition-colors group-hover:text-red-400'>首頁</p>
       </Link>

       <div className='block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'   onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
         <p className='logo_text transition-colors group-hover:text-red-400'>治療新冠和疫苗解毒訊息</p>
        {isDropdownVisible && (
            <a className='dropdownExtra'>
              <Link
                href='/background'
                className='dropdown_link'
              >
                疫苗解毒信息
              </Link>
              <Link
                href='/Treatment'
                className='dropdown_link'
              >
                新冠治療信息
              </Link>
            </a>
            
          )}
       </div>


       <Link href='/Statistics' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
         <p className='logo_text transition-colors group-hover:text-red-400'>搜尋詳細數據</p>
       </Link>

       <Link href='/About' className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
         <p className='logo_text transition-colors group-hover:text-red-400'>聯繫我们与愿景</p>
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
            <Link href='https://x.com/vInjuryProject'  className='"block mt-4 lg:inline-block lg:mt-0 to-black mr-4 group relative'>
              <Image
                src='/logo-black.png'
                width={30}
                height={37}
                className='logo_text'
                alt='gettr'
              />
            </Link>
        </div>
    </div>

    {/* Mobile Navigation */}
    <div className='sm:hidden flex relative text-left'>
        <div className='flex'>
          <div>
    <button onClick={() => setToggleDropdown(!toggleDropdown)} onMouseLeave={() => setToggleDropdown(!toggleDropdown)} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      菜单
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

          {toggleDropdown && (

<div class="absolute right-0 z-10 mt-[50px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
<div class="py-1" role="none">
  <Link href="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" onClick={() => setToggleDropdown(false)}>首頁</Link>
  <Link href="/background" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1" onClick={() => setToggleDropdown(false)}>疫苗解毒訊息</Link>
  <Link href="/Treatment" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => setToggleDropdown(false)}>治療新冠訊息</Link>
  <Link href="/Statistics" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => setToggleDropdown(false)}>搜尋詳細數據</Link>
  <Link href="/About" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => setToggleDropdown(false)}>聯繫我们与愿景</Link>
  <Link href="/Appeal" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => setToggleDropdown(false)}>呼吁建立新冠疫苗伤害保障救助机制倡议书</Link>
  <Link href="https://gettr.com/user/vinjury" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => setToggleDropdown(false)}>关注我们的Gettr账号</Link>
  <Link href="https://x.com/vInjuryProject" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => setToggleDropdown(false)}>关注我们的X账号</Link>
</div>
</div>
          )}
        </div>
    </div>
  </nav>
);
};

export default Nav;