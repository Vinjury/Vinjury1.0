'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useRouter } from 'next/navigation'

function getIntroOfPage(label) {
  
    if (label === '白血病') {
      return '白血病';
    } if (label === '糖尿病') {
      return '糖尿病';
    } if (label === '神经系统疾病') {
      return '神经系统疾病';
    } if (label === '自身免疫疾病') {
      return '自身免疫疾病';
    } if (label === '心脑血管疾病') {
      return '心脑血管疾病';
    }if (label === '癌症') {
      return '癌症';
    } if (label === '呼吸系统疾病') {
        return '呼吸系统疾病';
      }if (label === '其他') {
        return '其他疾病是除以上疾病外病例数较少的一部分疾病种类';
      }
  }
  
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : 病例数量${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          {/* <p className="desc">Anything you want can be displayed here.</p> */}
        </div>
      );
    }
  
    return null;
  }

const BarChartComponent = () => {
  const router = useRouter();

  const data = [

    { category: '白血病', value: 1309 }, { category: '糖尿病', value: 878 }, { category: '神经系统疾病', value: 263 }, { category: '自身免疫疾病', value: 216 }, { category: '心脑血管疾病', value: 17 }, { category: '癌症', value: 2 }, { category: '呼吸系统疾病', value: 2 }, { category: '其他', value: 12 }
  ];

  return (
    <div className='text-center'>
      <h2 className='chartTitle text-center'>疾病种类与其病例数柱状图</h2>
      <ResponsiveContainer width={1000} height={400}>
        <BarChart data={data} scale="point" barSize={40}>
          <CartesianGrid strokeDasharray="4 4" stroke="black"/>
          <XAxis dataKey="category" stroke="black"/>
          <YAxis stroke="black"/>
          <Tooltip stroke="black" content={<CustomTooltip />}/>
          <Bar dataKey="value" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
