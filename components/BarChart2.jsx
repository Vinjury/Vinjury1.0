'use client'
import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

function getIntroOfPage(label) {
  if (label === '白血病') {
    return '白血病';
  } if (label === '糖尿病') {
    return '糖尿病';
  } if (label === '神经系统') {
    return '神经系统疾病';
  } if (label === '心脑血管') {
    return '心脑血管疾病';
  } 
  if (label === '自身免疫') {
    return '自身免疫疾病';
  }
  if (label === '癌症') {
    return '癌症';
  } if (label === '呼吸系统') {
      return '呼吸系统疾病';
    }if (label === '其他') {
      return '其他';
    }
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : 病例数量${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
}

export default function BarChart2() {
  const data = [
    { category: '白血病', value: 1309 }, { category: '糖尿病', value: 878 }, { category: '神经系统', value: 263 }, { category: '自身免疫', value: 216 }, { category: '心脑血管', value: 17 }, { category: '癌症', value: 2 }, { category: '呼吸系统', value: 2 }, { category: '其他', value: 12 }
       ];
  return (
    <ComposedChart
      layout="vertical"
      width={300}
      height={700}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid strokeDasharray="1 1" stroke="black" />
      <XAxis type="number" stroke="black"/>
      <YAxis dataKey="category" type="category" scale="band" stroke="black"/>
      <Tooltip stroke="black" content={<CustomTooltip />}/>
      <Bar dataKey="value" barSize={30} fill="#ef4444" />
    </ComposedChart>
  );
}
