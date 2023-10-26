'use client'

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Papa from 'papaparse';

// function SearchBar() {
//     const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState('');

//   const [parsedData, setParsedData] = useState([]);
//   const [tableRows, setTableRows] = useState([]);
//   const [values, setValues] = useState([]);

//   const validProvinces = {
//     北京: "Beijing",
//     天津: "Tianjin",
//     河北: "Hebei",
//     山西: "Shanxi",
//     内蒙古: "Inner Mongolia",
//     辽宁: "Liaoning",
//     吉林: "Jilin",
//     黑龙江: "Heilongjiang",
//     上海: "Shanghai",
//     江苏: "Jiangsu",
//     浙江: "Zhejiang",
//     安徽: "Anhui",
//     福建: "Fujian",
//     江西: "Jiangxi",
//     山东: "Shandong",
//     河南: "Henan",
//     湖北: "Hubei",
//     湖南: "Hunan",
//     广东: "Guangdong",
//     广西: "Guangxi",
//     海南: "Hainan",
//     重庆: "Chongqing",
//     四川: "Sichuan",
//     贵州: "Guizhou",
//     云南: "Yunnan",
//     西藏: "Tibet",
//     陕西: "Shaanxi",
//     甘肃: "Gansu",
//     青海: "Qinghai",
//     宁夏: "Ningxia",
//     新疆: "Xinjiang",
//     香港: "Hong Kong",
//     澳门: "Macao",
//     台湾: "Taiwan",
//   };
  
//   const handleSearch = () => {
//     if (searchTerm) {
//       const englishName = validProvinces[searchTerm];
//       if (englishName) {

//   useEffect(() => {
//     // Load the CSV file directly using the relative path (assuming it's in the same directory as your component).
//     fetch(`/${englishName}.csv`)
//       .then((response) => response.text())
//       .then((csvData) => {
//         Papa.parse(csvData, {
//           header: true,
//           skipEmptyLines: true,
//           complete: function (results) {
//             const rowsArray = [results.meta.fields]; // Use fields from metadata for table header
//             const valuesArray = results.data;

//             setParsedData(valuesArray);
//             setTableRows(rowsArray[0]);
//             setValues(valuesArray);
//           },
//         });
//       });
//   }, []);

//       } else {
//         alert("The entered location is not a valid province in China");
//       }
//     } else {
//       alert("Invalid input");
//     }
//   };  

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="请输入想查找省份的中文名称"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBar;


import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

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
    <div className="content flex justify-center">
      <input
        type="text"
        placeholder="请输入想查找省份的中文名称"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <br></br>

      {showTable && parsedData.length > 0 && (
        
        <div className="w-[570px] mt-[50px]">
            <input
        type="text"
        placeholder="请输入想查找省份的中文名称"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
        {/* Table with borders between columns and rows */}
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
      )}
    </>
  );
}

export default SearchBar;
