import React from 'react'
import Table from "@components/Table";

const page = () => {

    const formatted_data = [
        {'diagnosis': '糖尿病酮症酸中毒', 'count': 534},
        {'diagnosis': '一型糖尿病', 'count': 326},
        {'diagnosis': '成人隱匿遲發性自體免疫糖尿病1.5型', 'count': 11},
        {'diagnosis': '二型糖尿病', 'count': 7}
    ]
    
    


  return (
    <>
    <div className='arti content'>
    <p>
    您在這個介面可以找到更多的關於不同种类糖尿病的數據。
<br></br>
例如在患有糖尿病的患者中，患有糖尿病酮症酸中毒的患者的人数是534人。
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