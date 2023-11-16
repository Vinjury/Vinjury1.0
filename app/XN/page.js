import React from 'react'

import Table from "@components/Table";

const page = () => {

    const formatted_data = [
        {'diagnosis': '脑出血', 'count': 6},
        {'diagnosis': '心肌炎', 'count': 2},
        {'diagnosis': '深静脉血栓', 'count': 2},
        {'diagnosis': '感染性心内膜炎', 'count': 1},
        {'diagnosis': '过敏性紫癜', 'count': 1},
        {'diagnosis': '冠心病', 'count': 1},
        {'diagnosis': '心脏病', 'count': 1},
        {'diagnosis': '心肌梗死', 'count': 1},
        {'diagnosis': '心悸', 'count': 1},
        {'diagnosis': '心血管疾病', 'count': 1}
        
    ]

  return (
    <>
    <div className='arti content'>
    <p>
    您在這個介面可以找到更多的關於不同种类心脑血管疾病的數據。
<br></br>
例如在患有心脑血管疾病的患者中，患有脑出血的患者的人数是6人。
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