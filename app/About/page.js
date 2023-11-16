import React from 'react'

const page = () => {
  return (
    <>
    <div className='content lg:title'>
      <div className=' font-mono text-4xl font-weight: 900 font-bold'>
      我們的願景和使命</div>
      <br></br>
      <div className = 'notTitle'>
    疫苗傷害是真實的。數據讓我們接近真相。
    VINJURY 的願景是成為拾音器，讓疫苗受害者們微弱的聲音可以被世界聽到。
    </div>
    <br></br>
    <br></br>
    <div className = 'Thanks font-weight: 900'>
    致謝：這裏的疫苗傷害數據來自於中國大陸的一些受害者群體自發收集整理，只是所有疫苗傷害案例的冰山一角。他們中間有些人已經因病過世，許多人在傾家蕩產尋求治療期間艱難維權爭取鑒定和賠償，有的人甚至因維權被政府迫害和關押。希望我們的努力可以讓這些來之不易的信息被更多人看到，明白疫苗的危害和真相。
    </div>
    </div>
    <br></br>
    <br></br>
    <div className='sm:flex hidden'>
    <div className='flex justify-center '>
    <iframe className="image" src = "/呼吁建立新冠疫苗伤害保障救助机制倡议书.pdf" width = {1200} height = {900}/>
    </div>
    </div>

    <div className='content sm:hidden'>
        <div className=' mt-[70px] flex justify-center w-full'>
    <div className='arti flex justify-center w-[300px]'>
    <p>點擊下載呼吁建立新冠疫苗伤害保障救助机制倡议书</p>
    </div>
    </div>
    <a
          href="/呼吁建立新冠疫苗伤害保障救助机制倡议书.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          
          download
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          新冠疫苗伤害保障救助机制倡议书{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          點選下載该文件
          </p>
        </a>
        </div>

    </>
  )
}

export default page