"use client";

import SearchManufacturer from './SearchManufacturer';
import { useState } from "react";
import { manufacturers } from '@/constants';
import Image from "next/image";

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

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {

  }

  const [model, setModel] = useState("");

  return (
    <form
      className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
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
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Honda civic type r'
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
