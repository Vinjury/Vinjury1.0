import React from 'react'

import Table from "@components/Table";

const page = () => {

    const formatted_data = [
        {'diagnosis': '肺癌(TNM)', 'count': 1},
        {'diagnosis': '骨肉瘤', 'count': 1},
        {'diagnosis': '恶性肿瘤', 'count': 1},
        {'diagnosis': '猝死', 'count': 2},
        {'diagnosis': '社区获得性肺炎', 'count': 1},
        {'diagnosis': '變異性哮喘', 'count': 1},
        {'diagnosis': '脓毒血症', 'count': 2},
        {'diagnosis': '肾病综合征', 'count': 2},
        {'diagnosis': '结节', 'count': 1},
        {'diagnosis': '急性中毒性代谢性脑病', 'count': 1},
        {'diagnosis': '慢性肾脏病', 'count': 1},
        {'diagnosis': '肾炎', 'count': 1}
    ]
    

  return (
    <>
    <div className='arti content'>
    <p>
    您在這個介面可以找到更多的關於其他不同种类疾病的數據。
    <br></br>
包括癌症，呼吸系统疾病，猝死，和其他在此次数据中出现较少的疾病。
{/* <br></br>
第二個表格關於接種不同年齡層的患者對應的數量。
<br></br>
第二個表格關於接種不同性別的病人對應的數量。 */}
</p>
</div>
  <div className=" mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left w-full flex justify-center">
        <div className="lg:margin-table w-full">
      <Table data={formatted_data} headerText="疾病种类" contentAccessor="diagnosis"/>
        </div>

    <br />
  </div>
</>

  )
}

export default page