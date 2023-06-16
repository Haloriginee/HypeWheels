"use client";

import SearchManufacturer from './SearchManufacturer';
import React, { useState } from "react";
import { manufacturers } from '@/constants';
import Image from "next/image";
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: {otherClasses:string}) => (
  <button
    type='submit'
    className={`-ml-3 z-10 ${otherClasses}`}
  >
    <Image
      src="/search.png"
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ({ setManufacturer, setModel }: any) => {

  const router = useRouter();

  const [searchManufacturer, setSearchManufacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(searchManufacturer === "" && searchModel === "")
      return;

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }

  const [searchModel, setSearchModel] = useState("");

  return (
    <form
      className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer} manufacturer={''} setManufacturer={function (manufacturer: string): void {
            throw new Error('Function not implemented.');
          } }        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <div className='searchbar__item'>
        <Image
          src="/vroom.png"
          alt="vroom"
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Civic'
          className='searchbar__input'
        />
        <SearchButton
          otherClasses="sm:hidden"
        />
      </div>
      <SearchButton
          otherClasses="max-sm:hidden"
        />
    </form>
  )
}

export default SearchBar
