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
  if (label === 'DKA') {
    return '糖尿病酮症酸中毒';
  } if (label === 'ALL') {
    return '急性淋巴性白血病';
  } if (label === 'AML') {
    return '急性骨髓性白血病';
  } if (label === 'ALS') {
    return '肌萎缩性脊髓侧索硬化症';
  } if (label === 'T1D') {
    return '1型糖尿病';
  } if (label === 'AA') {
    return '重型再生障碍性贫血';
  }if (label === 'SLE') {
      return '狼疮性肾炎';
    }if (label === 'ATL') {
      return '成人T細胞淋巴性白血病';
    }if (label === 'MPAL') {
      return '混合表型急性白血病';
    }if (label === 'MDS') {
      return '骨髓增生异常综合征';
    }if (label === 'CGL') {
      return '慢性粒细胞白血病 ';
    }if (label === 'APL') {
      return '急性早幼粒细胞白血病';
    }if (label === 'DMD') {
      return '脱髓鞘脊髓炎';
    }if (label === 'LADA') {
      return 'LADA糖尿病(一型前期)';
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
    { category: 'AML', value: 627 }, { category: 'DKA', value: 534 }, { category: 'ALL', value: 422 }, { category: 'T1D', value: 326 }, { category: 'ALS', value: 227 }, { category: 'AA', value: 93 }, { category: 'SLE', value: 79 }, { category: 'ATL', value: 66 }, { category: 'MPAL', value: 61 }, { category: 'MDS', value: 37 }, { category: 'CGL', value: 31 }, { category: 'APL', value: 19 }, { category: 'DMD', value: 15 }, { category: 'LADA', value: 11 }
       ];
  return (
    <ComposedChart
      layout="vertical"
      width={400}
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
