import Table from "@components/Table";


const page = () => {

    const vaccineData = [
        { vaccine: '安徽智飞', count: 5 },
        { vaccine: '北京科兴', count: 158 },
        { vaccine: '北京生物', count: 56 },
        { vaccine: '北京康希诺', count: 2 },
        { vaccine: '长春生物', count: 37 },
        { vaccine: '兰州生物', count: 18 },
        { vaccine: '成都生物', count: 19 },
        { vaccine: '大连科兴', count: 11 },
        { vaccine: '长春祈健', count: 1 },
        { vaccine: '武汉生物', count: 19 },
        { vaccine: '重庆生物', count: 19 },
      ];

      const AgeData = [
        { ageGroup: '0-20', count: 201 },
        { ageGroup: '21-40', count: 67 },
        { ageGroup: '41-60', count: 45 },
        { ageGroup: '60岁以上', count: 8 },
        { ageGroup: '未知', count: 101 },
        // Add more data as needed
      ];

      const sexData = [
        { sex: '男', count: 68 },
        { sex: '女', count: 38 },
        { sex: '未知', count: 316 },
      ]


  return (
    <>
    <div className='arti content'>
    <p>
    您在這個介面可以找到更多的關於急性淋巴性白血病的數據。
<br></br>
第一個表格關於接種不同疫苗生產商對應的病例數。例如接種北京科興疫苗後罹急性淋巴性白血病的人有229人。
<br></br>
第二個表格關於接種不同年齡層的患者對應的數量。
<br></br>
第二個表格關於接種不同性別的病人對應的數量。
</p>
</div>
  <div className=" mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="margin-table w-60">
      <Table data={vaccineData} headerText="疫苗生產商" contentAccessor="vaccine"/>
        </div>

        <div className="margin-table w-60">
      <Table data={AgeData} headerText="年齡" contentAccessor="ageGroup" />
        </div>

        <div className="margin-table w-60">
      <Table data={sexData} headerText="性別" contentAccessor="sex" />
        </div>

    <br />
  </div>
</>

  )
}

export default page