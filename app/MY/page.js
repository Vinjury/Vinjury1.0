import React from 'react'

import Table from "@components/Table";

const page = () => {

    const formatted_data = [
        {'diagnosis': '再生障碍性贫血', 'count': 94},
        {'diagnosis': '系统性红斑狼疮', 'count': 79},
        {'diagnosis': '多发性硬化', 'count': 9},
        {'diagnosis': '视神经脊髓炎', 'count': 8},
        {'diagnosis': '自身免疫性脑炎', 'count': 6},
        {'diagnosis': '免疫性血小板减少症', 'count': 5},
        {'diagnosis': '格林巴利综合症', 'count': 3},
        {'diagnosis': '银屑病/牛皮癣', 'count': 2},
        {'diagnosis': '关节炎', 'count': 2},
        {'diagnosis': '間質性肺病/瀰漫性肺病', 'count': 2},
        {'diagnosis': '急性蕁麻疹', 'count': 1},
        {'diagnosis': '多形性红斑', 'count': 1},
        {'diagnosis': '成人斯蒂尔病', 'count': 1},
        {'diagnosis': '自身免疫性肝炎', 'count': 1},
        {'diagnosis': '幼年特發性關節炎', 'count': 1},
        {'diagnosis': '結締組織病', 'count': 1}
    ]
    

  return (
    <>
    <div className='arti content'>
    <p>
    您在這個介面可以找到更多的關於不同种类自身免疫疾病的數據。
<br></br>
例如在患有自身免疫疾病的患者中，患有再生障碍性贫血的患者的人数是94人。
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