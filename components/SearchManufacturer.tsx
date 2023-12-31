"use client";

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';
import { Transition, Combobox } from "@headlessui/react";
import Image from 'next/image';
import { useState, Fragment } from 'react';

const SearchManufacturer = ({ manufacturer, setManufacturer, selected, setSelected }: SearchManufacturerProps) => {

  const [query, setQuery] = useState("")

  const FilteredManufacturers = query === "" ?
    manufacturers :
    manufacturers.filter((item) => (
      item.toLowerCase()
      .replace(/\s+/g,"")
      .includes(query.toLowerCase()
      .replace(/\s+/g,"")
      )))

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={selected}
        onChange={setSelected}
      >
        <div className='relative w-full'>
          <Combobox.Button
            className="absolute top-[14px]"
          >
            <Image
              src="/car-logo.png"
              alt="logo"
              width={50}
              height={50}
              className="item-center"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder='Honda'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {
                FilteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${active ? 'bg-teal-500 text-white' : "text-gray-900" }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
