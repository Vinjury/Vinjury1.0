import React from 'react'
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <> 
    
   <div className="content image-container flex justify-center">
    <div className='flex justify-center'>
   <div className="mt-[100px] lg:my-10 max-w-5xl w-full items-center justify-between font-mono text-sm disclaimer">
   
        <p className="px-[10px]  relative left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        在這個板塊，我們將提供一系列關於可能用於抑制疫苗副作用的解決方案。我們鄭重聲明：
          <br></br>
          1. 任何在這裡列出的藥物均與Vinjury沒有任何利益關係。
          <br></br>
          2. 是否使用這些藥物是各位的選擇，仁者見仁，智者見智。
          &nbsp;
          <br></br>
          3. 在服用任何藥物之前請諮詢您的醫師。
          <br></br>
          4. Vinjury不負任何責任。
        </p>
        </div>
        </div>

        <div className='flex justify-center'>
    <div className='arti flex justify-centerw-[700px]'>
    <p className = ''>
青蒿素是一種讓人體從疫苗不良反應中逐漸恢復的一種有效藥物<br></br>
下面兩幅圖詳細介紹了青蒿素的作用</p>
    </div>
    </div>

    <div className='flex justify-center'>
    <Image className="image" src = "/新用途1.jpeg" width = {1200} height = {900}/>
    </div>
    <div className='flex justify-center'>
    <Image className="image" src = "/新用途2.jpeg" width = {1200} height = {900}/>
    </div>

    <div className='flex justify-center'>
    <a   href="https://gettr.com/post/p24moy510c4"
  target="_blank"
  rel="noopener noreferrer"
  className="custom-button">
          點擊查看該材料原始鏈接
        </a>

        </div>
    <Image className="image" src = "/关于.jpeg" width = {1200} height = {900}/>
    </div>

    {/* <div className='iver'>
    <p>如果您想找到更全面的用藥指南<br></br>您可以點擊下面鏈接下載相關文檔</p>
    </div> */}

    <div className=' mt-[70px] flex justify-center w-full'>
    <div className='arti flex justify-center w-[400px]'>
    <p>如果您想找到更全面的用藥指南<br></br>您可以點擊下面鏈接下載相關文檔</p>
    </div>
    </div>
    <a
          href="/青蒿素衍生物解毒方案.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          
          download
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          青蒿素衍生物解毒方案{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          點選下載相關文件
          </p>
        </a>

    <div className=' mt-[70px] flex justify-center w-full'>
    <div className='arti flex justify-center w-[900px]'>
    <p>除青蒿素之外，伊維菌素也是一種可以幫助排除體內疫苗的藥物<br></br>我們已將COVID-19前線危重護理聯盟(FLCCC)的關於伊維菌素的鏈接公佈在下面，大家有需要可以訪問</p>
    </div>
    </div>

    <a
          href="https://covid19criticalcare.com/protocol/i-recover-post-vaccine-treatment/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          了解更多關於伊維菌素的信息{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          COVID-19前線危重護理聯盟
          </p>
        </a>

    </>
  )
}

export default page