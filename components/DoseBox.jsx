import React from 'react';
import '@app/globals.css'

const DiseaseTable = () => {
  const diseases = [
    '原发中枢神经系统弥漫大B淋巴瘤','中枢神经脱髓鞘脊髓炎', '免疫性血小板症', '二型糖尿病', '嗜血细胞综合症', '脑梗死', '视神经脊髓炎', '自身免疫性脑炎', '非霍奇金淋巴瘤', '吉兰-巴雷综合征脱髓鞘', '视神经脊髓炎谱系疾病', '心肌炎', '干燥症', '慢性骨髓性白血病', '多發性骨髓瘤', '多发性硬化', '伯基特淋巴瘤', '急性非淋巴细胞白血病', '肾炎', '深度髂静脉血栓', '癫痫','特发性间质肺炎肺纤维化', "败血性休克", "慢性肾病", "霍奇金氏淋巴瘤","幼年特發性關節炎","癌症","結締組織病","心悸","腎病綜合症",
    "心肌梗死","肺癌","關節炎", "類風濕關節炎", "變異性哮喘","多形性红斑","社区获得性肺炎","心臟病",
    "冠心病", "过敏性紫癜","急性蕁麻疹","心內膜炎","多形性膠質母細胞瘤","慢性淋巴性白血病"
  ];

  // Define the number of columns per row
  const columnsPerRow = 4;

  // Split the diseases into groups of 4
  const groupedDiseases = [];
  for (let i = 0; i < diseases.length; i += columnsPerRow) {
    groupedDiseases.push(diseases.slice(i, i + columnsPerRow));
  }

  return (
    <div className="box">
      <h2>下列疾病在此數據中出現少量(低於10例)</h2>
      <br></br>
      <table className="border-collapse border border-gray-400">
        <tbody>
          {groupedDiseases.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((disease, columnIndex) => (
                <td key={columnIndex} className="border border-gray-400 p-2">{disease}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiseaseTable;

