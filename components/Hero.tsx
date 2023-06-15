"use client"; // make it client side

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Unlock Your Journey: Explore, Rent, and Go!
        </h1>

        <p className="hero__subtitle">
          Rev Up the Adventure: Hit the Road with Unmatched Freedom and Flexibility!
        </p>

        <CustomButton
          title="Explore"
          containerStyles="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill className="object-contain"
          />
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
