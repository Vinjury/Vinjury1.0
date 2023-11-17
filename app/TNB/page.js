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