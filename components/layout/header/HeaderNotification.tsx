import React from 'react'
import Image from 'next/image';
import { HeaderNotificationText } from '../../../constants';
import { CaseMinimalistic } from '../../../constants';

const HeaderNotification = () => {
  return (
    <div className='flex justify-center font-Quicksand items-center text-[#EBEBEB] flex-row h-12 bg-colorPrimary w-full gap-x-8'>
      <div>
        <Image src={CaseMinimalistic} width={24} height={24} alt='Case logo' />
      </div>
      <p className='text-base'>{HeaderNotificationText}</p>

      <button className='bg-colorSecondary text-sm w-[86px] h-[30px] rounded-[50px]'> More Info</button>
    </div>
  )
}

export default HeaderNotification