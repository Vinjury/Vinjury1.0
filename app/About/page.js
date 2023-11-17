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
    <div className = 'notTitle'>
    如果您有需要，可以透過私訊我們的社群媒體帳號，Gettr和X，聯絡我們。 或寄郵件，信箱如下：vinjuryproject@gmail.com。
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

    </>
  )
}

export default page