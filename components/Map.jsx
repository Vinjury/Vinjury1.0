'use client'
import React , { useState }from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { GeoPath, GeoProjection, geoCentroid } from 'd3-geo';
import {Marker} from 'react-simple-maps';
import mapdata from '@utils/mapdata';
import { useRouter } from 'next/navigation'
import { gsap } from "gsap";

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
  

  const handleLocationClick = (stateName) => {
    setSelectedProvince(stateName);

    console.log(stateName)

    if (stateName === '湖北') {
      router.push(`/Hubei`);
    } else if (stateName === '山东') {
      router.push(`/Shandong`);
    } else if (stateName === '江苏') {
      router.push(`/Jiangsu`);
    } else if (stateName === '安徽') {
      router.push(`/Anhui`);
    } else if (stateName === '内蒙古') {
      router.push(`/Neimenggu`);
    }
    else if (stateName === '黑龙江') {
      router.push(`/Heilongjiang`);
    }
    else if (stateName === '吉林') {
      router.push(`/Jilin`);
    }
    else if (stateName === '辽宁') {
      router.push(`/Liaoning`);
    }
    else if (stateName === '湖南') {
      router.push(`/Hunan`);
    }
    else if (stateName === '河北') {
      router.push(`/Hebei`);
    }
    else if (stateName === '河南') {
      router.push(`/Henan`);
    }
    else if (stateName === '浙江') {
      router.push(`/Zhejiang`);
    }
    else if (stateName === '宁夏') {
      router.push(`/Ningxia`);
    }
    else if (stateName === '新疆') {
      router.push(`/Xinjiang`);
    }
    else if (stateName === '西藏') {
      router.push(`/Xizang`);
    }
    else if (stateName === '江西') {
      router.push(`/Jiangxi`);
    }
    else if (stateName === '云南') {
      router.push(`/Yunnan`);
    }
    else if (stateName === '山西') {
      router.push(`/Shanxi1`);
    }
    else if (stateName === '广东') {
      router.push(`/Guangdong`);
    }
    else if (stateName === '广西') {
      router.push(`/Guangxi`);
    }
    else if (stateName === '海南') {
      router.push(`/Hainan`);
    }
    else if (stateName === '青海') {
      router.push(`/Qinghai`);
    }
    else if (stateName === '甘肃') {
      router.push(`/Gansu`);
    }
    else if (stateName === '陕西') {
      router.push(`/Shanxi2`);
    }
    else if (stateName === '北京') {
      router.push(`/Beijing`);
    }
    else if (stateName === '天津') {
      router.push(`/Tianjin`);
    }
    else if (stateName === '重庆') {
      router.push(`/Chongqing`);
    }
    else if (stateName === '上海') {
      router.push(`/Shanghai`);
    }
    else if (stateName === '福建') {
      router.push(`/Fujian`);
    }
    else if (stateName === '贵州') {
      router.push(`/Guizhou`);
    }
    else if (stateName === '四川') {
      router.push(`/Sichuan`);
    }
  };

  // Define a mapping of province names to colors
  // const provinceColors = {
  //   湖北: '#ffbaba',
  //   山东: '#ff7b7b',
  //   江苏: '#ff5252',
  //   安徽: '#a70000',
  //   // Add more provinces and colors as needed
  // };

  return (
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
                    onClick={() => handleLocationClick(stateName)}
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
                      onClick={() => handleLocationClick(stateName)}
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
                      {/* <text
                        textAnchor="middle"
                        y={-10} // Adjust the vertical position
                        style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
                      >
                        {stateName}
                      </text> */}
                    </Marker>
                  )}
                </>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;