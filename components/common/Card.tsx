import React from 'react'
import Image from 'next/image'
import { PropertyProps } from '@/interfaces'

const Card: React.FC<PropertyProps> = ({ name, category, image, address, rating, offers, price }) => {
  return (
    <div className='mx-4 min-w-[454px] h-[506px] font-Quicksand'>
      <div className='relative w-full h-[305px]'>
        <Image src={image} fill className='rounded-[20px]' alt='Property Image' />
      </div>

      <div className='flex flex-col gap-y-4 mt-2'>
        <section className='flex items-center gap-x-4'>
          {category.map((text, index) => (
            <div key={index} className='bg-[#F9F9F9] h-8 px-3 flex justify-center
             items-center rounded-[31px]'>{text}</div>

          ))}
        </section>

        <section className='flex justify-between'>
          <div>
            <h5 className='text-[26px]'>{name}</h5>
            <h6 className='text-[20px] font-light'>
              {address?.city}, {address?.country}, {address?.state}
              </h6>
          </div>

          <div className='flex justify-center gap-x-2'>
            <div className='relative  w-6 h-6'>
              <Image src={"/assets/icons/star.svg"} fill alt='Rating Logo' />
            </div>
            {rating}
          </div>
        </section>

        <section className='flex justify-between'>
          <div className='flex gap-x-4 items-center justify-center px-4 h-11 rounded-[31px] border-2 border-colorborder'>

            <div className='flex justify-center gap-x-2'>
              <div className='relative  w-[23px] h-[23px]'>
                <Image src={"/assets/icons/bed.svg"} fill alt='Bed Logo' />
              </div>
              {offers?.bed}
            </div>

            <div className='flex justify-center gap-x-2'>
              <div className='relative  w-[23px] h-[23px]'>
                <Image src={"/assets/icons/bathtub.svg"} fill alt='Bathtube Logo' />
              </div>
              {offers?.shower}
            </div>

            <div className='flex justify-center gap-x-2'>
              <div className='relative  w-[23px] h-[23px]'>
                <Image src={"/assets/icons/people.svg"} fill alt='People Logo' />
              </div>
              {offers?.shower}
            </div>
          </div>

          <div>
            <span className='text-sm font-bold text-[26px]'>${price}</span>
            <span className='text-sm'>&nbsp;/n</span>
          </div>
        </section>

      </div>

    </div>
  )
}

export default Card