import React from 'react'
import Table from "@components/Table";

const page = () => {

    const formatted_data = [
        {'diagnosis': '运动神经元病/肌萎缩侧索硬化症/渐冻症', 'count': 228},
        {'diagnosis': '脱髓鞘病', 'count': 16},
        {'diagnosis': '急性播散性脑脊髓炎', 'count': 8},
        {'diagnosis': '脑梗', 'count': 7},
        {'diagnosis': '球麻痹（延髓麻痹）', 'count': 2},
        {'diagnosis': '癫痫', 'count': 2}
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