import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    fuel: searchParams.fuel || "",
    year: searchParams.year || 2022,
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars)
                      || allCars.length < 1
                      || !allCars;

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
              options={fuels}
            />
            <CustomFilter
              title='Year'
              options={yearsOfProduction}
            />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car}/>
                ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              No results
            </h2>
            <p>
              {allCars?.message}
            </p>
          </div>
        )}

      </div>

    </main>
  )
}
