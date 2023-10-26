import React from 'react';
import '@app/globals.css'


function DynamicTable({ data, headerText, contentAccessor }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">{headerText}</th>
          <th scope="col" className="px-6 py-3">病例數</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{item[contentAccessor]}</td>
            <td className="px-6 py-4">{item.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
