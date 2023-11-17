import React from 'react'
import Table from "@components/Table";

const page = () => {

    const formatted_data = [
        {'diagnosis': '急性骨髓性白血病', 'count': 624},
        {'diagnosis': '急性淋巴性白血病', 'count': 415},
        {'diagnosis': '急性T淋巴母細胞淋巴瘤白血病', 'count': 66},
        {'diagnosis': '混合表型急性白血病', 'count': 61},
        {'diagnosis': '骨髓增生异常综合症', 'count': 37},
        {'diagnosis': '慢性粒细胞白血病', 'count': 31},
        {'diagnosis': '急性早幼粒细胞白血病', 'count': 20},
        {'diagnosis': '慢性骨髓性白血病', 'count': 10},
        {'diagnosis': '弥漫大B细胞淋巴瘤', 'count': 9},
        {'diagnosis': '多发性骨髓瘤', 'count': 9},
        {'diagnosis': '嗜血细胞综合症', 'count': 6},
        {'diagnosis': '伯基特淋巴瘤', 'count': 4},
        {'diagnosis': '非霍奇金氏淋巴瘤', 'count': 4},
        {'diagnosis': '霍奇金氏淋巴瘤', 'count': 3},
        {'diagnosis': '急性非淋巴细胞白血病', 'count': 2},
        {'diagnosis': '中枢神经系统淋巴瘤', 'count': 2},
        {'diagnosis': '多形性膠質母細胞瘤', 'count': 1},
        {'diagnosis': '慢性淋巴性白血病', 'count': 1},
        {'diagnosis': '母细胞性浆细胞样树突细胞肿瘤', 'count': 1},
        {'diagnosis': '滤泡性淋巴瘤', 'count': 1},
        {'diagnosis': '外周T 细胞淋巴瘤', 'count': 1},
        {'diagnosis': '套细胞淋巴瘤', 'count': 1}
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