'use client'
import React , { useState }from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { GeoPath, GeoProjection, geoCentroid } from 'd3-geo';
import {Marker} from 'react-simple-maps';
import mapdata from '@utils/mapdata';
import { useRouter } from 'next/navigation'
import { gsap } from "gsap";
import Papa from 'papaparse';

const Map = () => {

  const router = useRouter();
  const [selectedProvince, setSelectedProvince] = useState(null);

  const provinceCoordinates = {
    北京: [116.4074, 39.9042],
    天津: [117.2008, 39.0842],
    河北: [114.5300, 38.0371],
    山西: [112.5627, 37.8735],
    内蒙古: [111.7667, 40.8175],
    辽宁: [123.4291, 41.8357],
    吉林: [126.1923, 43.5341],
    黑龙江: [126.5350, 45.8086],
    上海: [121.4737, 31.2304],
    江苏: [119.7871, 33.0402],
    浙江: [120.1536, 29.2875],
    安徽: [117.2833, 31.8667],
    福建: [119.2965, 26.0745],
    江西: [115.8580, 28.6832],
    山东: [117.1582, 36.6758],
    河南: [113.4668, 33.8819],
    湖北: [114.3076, 30.5847],
    湖南: [112.9823, 28.1944],
    广东: [113.2806, 23.1252],
    广西: [108.3200, 23.5526],
    海南: [110.3312, 20.0311],
    重庆: [106.5516, 29.5630],
    四川: [104.0757, 30.6519],
    贵州: [106.7009, 26.7682],
    云南: [102.7103, 25.0454],
    西藏: [88.1655, 30.7235],
    陕西: [108.9480, 34.2632],
    甘肃: [103.8342, 36.0611],
    青海: [101.7787, 36.6232],
    宁夏: [106.1655, 38.3083],
    新疆: [87.6271, 43.7930],
    // Add more provinces and coordinates as needed
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
  const [showTable, setShowTable] = useState(false); // State for table visibility
  

  const handleSearch = (stateName) => {

        console.log(stateName)
        alert("數據顯示在地圖下方，請往下翻。")
        fetch(`/${stateName}.csv`)
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
  };


  return (
    <>
    <ComposableMap
      projection="geoMercator"
      style={{
        backgroundColor: 'transparent',
        width: '900px', // Set the desired width
        height: '900px', // Set the desired height
      }}
      projectionConfig={{
        scale: 747,
        center: [104, 36],
      }}
      fill="white"
      stroke="black"
      strokeWidth={0.7}
    >
      <Geographies geography={mapdata.data}>
        {(geographies) => (
          <>
            {geographies.geographies.map((geo) => {
              return <Geography key={geo.rsmKey} geography={geo} />;
            })}

            {geographies.geographies.map((geo) => {
              const stateName = geo.properties.NL_NAME_1;
              const coordinates = provinceCoordinates[stateName];

              return (
                <>
                  <Geography
                    onClick={() => handleSearch(stateName)}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      hover: {
                        fill: '#94a3b8',
                      },
                      default: {
                        // fill: provinceColors[stateName] || 'white',
                      },
                    }}
                  />
                  {coordinates && (
                    <Marker
                      key={stateName}
                      coordinates={coordinates}
                    >
                      {/* Custom marker content */}
                      <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                      </g>
                    </Marker>
                  )}
                </>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
    {showTable && parsedData.length > 0 && (
      <div>
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
};

export default Map;