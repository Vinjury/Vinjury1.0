'use client'


import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Image from "next/image";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
  const [showTable, setShowTable] = useState(false); // State for table visibility

  const validProvinces = {
    北京: {
      chineseName: "北京",
      englishName: "Beijing",
    },
    天津: {
      chineseName: "天津",
      englishName: "Tianjin",
    },
    河北: {
      chineseName: "河北",
      englishName: "Hebei",
    },
    山西: {
      chineseName: "山西",
      englishName: "Shanxi",
    },
    内蒙古: {
      chineseName: "内蒙古",
      englishName: "Inner Mongolia",
    },
    辽宁: {
      chineseName: "辽宁",
      englishName: "Liaoning",
    },
    吉林: {
      chineseName: "吉林",
      englishName: "Jilin",
    },
    黑龙江: {
      chineseName: "黑龙江",
      englishName: "Heilongjiang",
    },
    上海: {
      chineseName: "上海",
      englishName: "Shanghai",
    },
    江苏: {
      chineseName: "江苏",
      englishName: "Jiangsu",
    },
    浙江: {
      chineseName: "浙江",
      englishName: "Zhejiang",
    },
    安徽: {
      chineseName: "安徽",
      englishName: "Anhui",
    },
    福建: {
      chineseName: "福建",
      englishName: "Fujian",
    },
    江西: {
      chineseName: "江西",
      englishName: "Jiangxi",
    },
    山东: {
      chineseName: "山东",
      englishName: "Shandong",
    },
    河南: {
      chineseName: "河南",
      englishName: "Henan",
    },
    湖北: {
      chineseName: "湖北",
      englishName: "Hubei",
    },
    湖南: {
      chineseName: "湖南",
      englishName: "Hunan",
    },
    广东: {
      chineseName: "广东",
      englishName: "Guangdong",
    },
    广西: {
      chineseName: "广西",
      englishName: "Guangxi",
    },
    海南: {
      chineseName: "海南",
      englishName: "Hainan",
    },
    重庆: {
      chineseName: "重庆",
      englishName: "Chongqing",
    },
    四川: {
      chineseName: "四川",
      englishName: "Sichuan",
    },
    贵州: {
      chineseName: "贵州",
      englishName: "Guizhou",
    },
    云南: {
      chineseName: "云南",
      englishName: "Yunnan",
    },
    西藏: {
      chineseName: "西藏",
      englishName: "Tibet",
    },
    陕西: {
      chineseName: "陕西",
      englishName: "Shaanxi",
    },
    甘肃: {
      chineseName: "甘肃",
      englishName: "Gansu",
    },
    青海: {
      chineseName: "青海",
      englishName: "Qinghai",
    },
    宁夏: {
      chineseName: "宁夏",
      englishName: "Ningxia",
    },
    新疆: {
      chineseName: "新疆",
      englishName: "Xinjiang",
    },
    香港: {
      chineseName: "香港",
      englishName: "Hong Kong",
    },
    澳门: {
      chineseName: "澳门",
      englishName: "Macao",
    },
    台湾: {
      chineseName: "台湾",
      englishName: "Taiwan",
    },
  };
  

  const handleSearch = () => {
    if (searchTerm) {
        const chineseName = validProvinces[searchTerm]?.chineseName;
        const englishName = validProvinces[searchTerm]?.englishName;
      if (englishName) {
        console.log(englishName)
        fetch(`/${chineseName}.csv`)
          .then((response) => response.text())
          .then((csvData) => {
            Papa.parse(csvData, {
              header: true,
              skipEmptyLines: true,
              complete: function (results) {
                const rowsArray = [results.meta.fields];
                const valuesArray = results.data;

                setParsedData(valuesArray);
                setTableRows(rowsArray[0]);
                setValues(valuesArray);
                setShowTable(true); // Show the table when data is available
              },
            });
          });
      } else {
        alert("The entered location is not a valid province in China");
      }
    } else {
      alert("Invalid input");
    }
  };

  return (
    <>
    <div className='relative'>
      <Image
        src='/logo2.png'
        alt='logo'
        width={140}
        height={200}
        className='absolute top-1/2 right-1/4 object-cover'
        
      />
      
      <div class='max-w-md mx-auto mt-[200px]'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-black overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleSearch}>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-64 outline-none text-sm text-gray-700 pr-2 px-4 "
        type="text"
        id="search"
        placeholder="请输入想查找省份的中文名称" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        /> 
        </div>
    </div>
</div>

      {showTable && parsedData.length > 0 && (
        
        <div className="w-[570px]">
                 <div class='max-w-md mx-auto mt-[170px]'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleSearch}>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-64 outline-none text-sm text-gray-700 pr-2 px-4"
        type="text"
        id="search"
        placeholder="请输入想查找省份的中文名称" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        /> 
    </div>
</div>

        {/* Table with borders between columns and rows */}
        <div className='mt-[50px]'>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            {tableRows ? (
              <tr>
                {tableRows.map((header, index) => {
                  return (
                    <th
                      key={index}
                      style={{
                        border: '1px solid black',
                        padding: '8px',
                        textAlign: 'left',
                      }}
                    >
                      {header}
                    </th>
                  );
                })}
              </tr>
            ) : null}
          </thead>
          <tbody className="text">
            {values.map((row, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    border: '1px solid black',
                    padding: '8px',
                    textAlign: 'left',
                    marginBottom: '10px', // Increase the margin bottom for spacing
                  }}
                >
                  {tableRows.map((header, i) => {
                    return (
                      <td
                        key={i}
                        style={{
                          border: '1px solid black',
                          padding: '8px',
                          textAlign: 'left',
                        }}
                      >
                        {row[header]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
      )}
    </>
  );
}

export default SearchBar;
