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
  <div className=" my-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left w-full flex justify-center">
        <div className="lg:margin-table w-full">
      <Table data={formatted_data} headerText="疾病种类" contentAccessor="diagnosis"/>
        </div>

    <br />
  </div>
</>

  )
}

export default page