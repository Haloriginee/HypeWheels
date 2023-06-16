import { CustomFilter, Hero, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Vroom Vault
          </h1>
          <p>
            Get behind the wheel of discovery and navigate through our car lineup to find your dream ride!
          </p>
        </div>
        <div className='home__filters'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter
              title='fuel'
            />
            <CustomFilter
              title='Year'
            />
          </div>
        </div>
      </div>

    </main>
  )
}
