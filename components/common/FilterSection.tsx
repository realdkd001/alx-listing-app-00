import React from 'react'
import Pill from './Pill'
import { FILTERS } from '@/constants'
import Dropdown from './Dropdown'
import SortBy from './SortBy'


const  FilterSection = () => {
  return (
    <div className='flex justify-between items-center'>
    <div className='flex gap-x-4'>
        {
            FILTERS.map((f, index) => (
                <Pill key={index} filter={f}/>
            ))
        }

        <Dropdown />
    </div>

    <div className='flex flex-row-reverse gap-x-4'>
        <SortBy />
    </div>

    </div>
  )
}




export default FilterSection