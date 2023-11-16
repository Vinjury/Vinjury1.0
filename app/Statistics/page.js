import Image from 'next/image'
import Map from '@components/Map';
import SearchBar from '@components/SearchBar';
import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className='sm:flex hidden'>
    <div className="mapContainerWrapper">
    <SearchBar />
    <Map /> 
    </div>
    </div>

    <div className='content sm:hidden flex relative'>
        <div className='flex'>
          <SearchBar />
        </div>
        </div>
    </>
  );
}