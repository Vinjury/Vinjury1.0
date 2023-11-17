'use client'
import React, { useState } from 'react';
import Image from 'next/image'

const MyComponent = () => {
  return (
    <>
    <div className='mt-[100px]'>
        <div className='text-[40px] font-mono my-[20px] text-red-400'>以下建議僅為參考而非醫囑。 服藥請根據實際情況，並遵循醫囑。 Vinjury不負任何責任。</div>
    <Image
        src="/Treatment1.jpeg"
        alt="My Image"
        width={1000}
        height={900}
      />
      <Image
        src="/Treatment2.png"
        alt="My Image"
        width={1000}
        height={900}
      />
      <Image
        src="/Treatment3.jpeg"
        alt="My Image"
        width={1000}
        height={900}
      />
      <Image
        src="/Treatment4.png"
        alt="My Image"
        width={1000}
        height={900}
      />
      </div>

      <a
          href="https://gettr.com/post/p1yj0bzcf45"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mt-[100px]"
          target="_blank"
          rel="noopener noreferrer"
          
          download
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          您可以點擊此鏈接查看新冠病毒預防及治療建議方案11-2022(中文第3版)原始鏈接{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-[20px] opacity-50`}>
          此建議僅為參考而非醫囑。 服藥請根據實際情況，並遵循醫囑。
          </p>
        </a>

        <div className='text-[30px] font-mono mt-[100px] text-red-500'>買藥方法(僅推薦)。 Vinjury與此沒有任何利益關係。</div>

        <a
          href="https://my.indiamart.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          
          download
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          您可以點擊此連結進入這個網站尋找伊維菌素等藥物，此網站僅作為推薦。 Vinjury與此並無任何利益關係。{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-[20px] opacity-50`}>
          此建議僅為參考，部分藥物也可以在亞馬遜上購買。
          </p>
        </a>
    </>
  )
}

export default MyComponent
