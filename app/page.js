import React from 'react'
import Image from 'next/image';
import Age from "@components/Table.jsx";
import Dose from "@components/DoseBox";
import BarChart from "@components/BarChart";
import BarChart2 from "@components/BarChart2"

import Link from 'next/link';


import Layout from './layout.js';

const page = () => {;


  return (

    <>
    <div className='w-full'>
    <div className='text-[#ef4444] text-[20px] font-medium leading-normal flex mt-[100px] lg:text-[27px] lg:font-medium lg:leading-normal lg:flex w-full lg:mt-[100px]'>截止2023年十月，有2,701例來自於中國大陸地區的疫苗接種不良反應的報告</div>
    <h2 className='text-[black] lg:text-[20px] lg:font-medium lg:leading-normal lg:flex w-full'>這些報告遍佈中國大陸各省份,各個年齡層。不良反應集中於與免疫系統相關的病症</h2>
    </div>

    {/* Desktop Navigation */}
    <div className='sm:flex hidden'>
      <div className="content w-full flex justify-center">
      <BarChart />
    </div>
    </div>

    <div className='sm:hidden flex relative'>
        <div className='flex'>
          <BarChart2 />
        </div>
        </div>


    <div className="w-full flex justify-center">
    <div className="my-3 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex sm:flex">
        <p className="sticky px-[10px] left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        其中，患有急性骨髓性白血病(AML)， 糖尿病酮症酸中毒(DKA)，急性淋巴性白血病(ALL)，1型糖尿病(T1D)，肌萎性脊髓缩侧索硬化症(ALS)的病人量是最多的。所以我們進行了更深入的數據分析，您可以點擊下面對應的按鈕以獲得更詳細的數據資訊。&nbsp;
        </p>
        </div>
        </div>





    
<div className='sm:flex hidden'><div class="grid grid-cols-5">
  <a href="/AML" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看更多關於患急性骨髓性白血病的數據</a>
  <a href="/DKA" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看有關患糖尿病酮症酸中毒的更多數據</a>
  <a href="/ALL" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看有關患急性淋巴性白血病的更多數據</a>
  <a href="/T1D" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看有關患1型糖尿病的更多數據</a>
  <a href="/ALS" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看更多關於患肌萎性脊髓缩侧索硬化症的數據</a>
</div>
</div>

<div className='sm:hidden flex relative'><div class="grid">
  <a href="/AML" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看更多關於患急性骨髓性白血病的數據</a>
  <a href="/DKA" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看有關患糖尿病酮症酸中毒的更多數據</a>
  <a href="/ALL" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看有關患急性淋巴性白血病的更多數據</a>
  <a href="/T1D" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看有關患1型糖尿病的更多數據</a>
  <a href="/ALS" class="col-span-1 bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 mx-3 my-3 rounded-lg shadow-md transition duration-300">點擊查看更多關於患肌萎性脊髓缩侧索硬化症的數據</a>
</div></div>


    <div className="box-list flex justify-center">
      <Dose />
    </div>

      {/* <div className=" bg-orange-900 w-full flex justify-center">
      <BarChart2 />
    </div> */}
     <div className="box-list flex justify-center ">
    <div className=" mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left ">
    <a
          href="/Statistics"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          搜尋具體病例{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          在中國大陸地圖上選擇您想要的數據
          </p>
        </a>
        
        <a
          href="/background"
          className=" group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          關於新冠治療與疫苗解毒最新信息{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          點擊了解關於新冠治療與疫苗解毒最新信息
          </p>
        </a>

        <a
          href="/About"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          關於我們{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          了解我們的願景和使命
          </p>
        </a>
      </div>
      </div>
    </>
  );
}

export default page
