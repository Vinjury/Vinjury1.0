
'use client'

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Page = () => {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    // Load the CSV file directly using the relative path (assuming it's in the same directory as your component).
    fetch('/上海.csv')
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
    <>
    {/* <Nav id="nav-bar"/> */}
    {/* <body className = "homebody"> */}
    <div className="text content">
      {/* Table */}
      <table>
        <thead>
          {tableRows ? (
            <tr>
              {tableRows.map((header, index) => {
                return <th key={index}>{header}</th>;
              })}
            </tr>
          ) : null}
        </thead>
        <tbody className="text">
          {values.map((row, index) => {
            return (
              <tr key={index}>
                {tableRows.map((header, i) => {
                  return <td key={i}>{row[header]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    {/* </body> */}
    </>
  );
};

export default Page;