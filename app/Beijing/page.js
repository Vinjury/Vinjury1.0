'use client'

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Page = () => {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    // Load the CSV file directly using the relative path (assuming it's in the same directory as your component).
    fetch('/北京.csv')
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            const rowsArray = [results.meta.fields]; // Use fields from metadata for table header
            const valuesArray = results.data;

            setParsedData(valuesArray);
            setTableRows(rowsArray[0]);
            setValues(valuesArray);
          },
        });
      });
  }, []);

  return (
    <div className="text content">
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
  );
};

export default Page;