import Image from 'next/image'
import React, {useState} from 'react'
import FavSectionNavCalender from '../atoms/FavSectionNavCalender'
import FavSectionNavCopyTrading from '../atoms/FavSectionNavCopyTrading'
import FavSectionNavTopMovers from '../atoms/FavSectionNavTopMovers'
import FavSectionNavNews from '../atoms/FavSectionNavNews'
import FavSectionNavSocialFeed from '../atoms/FavSectionNavSocialFeed'

const FavoritesSectionNav = () => {

  const [activeFavNavTab, setActiveFavNavTab ] = useState('')

  const onActiveFavNavClick = (e: any) => {
    setActiveFavNavTab(e.target.textContent)
  }

  console.log(activeFavNavTab)

  return (
    <div className='flex flex-col justify-between py-1 items-between'>
      <div className='flex items-center justify-between px-4 py-2'>
          <div className='flex items-center justify-between space-x-2'>
              <h5 className={`${activeFavNavTab === 'CALENDER' ? 'bg-[#EDF1F3] rounded' : ''} p-1 text-[10px] font-medium cursor-pointer`} onClick={onActiveFavNavClick}>CALENDER</h5>
              <h5 className={`${activeFavNavTab === 'COPY TRADING' ? 'bg-[#EDF1F3] rounded' : ''} p-1 text-[10px] font-medium cursor-pointer`} onClick={onActiveFavNavClick}>COPY TRADING</h5>
              <h5 className={`${activeFavNavTab === 'TOP MOVERS' ? 'bg-[#EDF1F3] rounded' : ''} p-1 text-[10px] font-medium cursor-pointer`} onClick={onActiveFavNavClick}>TOP MOVERS</h5>
              <h5 className={`${activeFavNavTab === 'NEWS' ? 'bg-[#EDF1F3] rounded' : ''} p-1 text-[10px] font-medium cursor-pointer`} onClick={onActiveFavNavClick}>NEWS</h5>
              <h5 className={`${activeFavNavTab === 'SOCIAL FEED' ? 'bg-[#EDF1F3] rounded' : ''} p-1 text-[10px] font-medium cursor-pointer`} onClick={onActiveFavNavClick}>SOCIAL FEED</h5>
          </div>
          <div className='flex items-center justify-between'>
              <Image src='/assets/icons/arrowup-7.svg' width={24} height={24} alt='' />
              <Image src='/assets/icons/arrowdown-7.svg' width={24} height={24} alt='' />
          </div>
      </div>
      {activeFavNavTab === 'CALENDER' && <FavSectionNavCalender />}
      {activeFavNavTab === 'COPY TRADING' && <FavSectionNavCopyTrading />}
      {activeFavNavTab === 'TOP MOVERS' && <FavSectionNavTopMovers />}
      {activeFavNavTab === 'NEWS' && <FavSectionNavNews />}
      {activeFavNavTab === 'SOCIAL FEED' && <FavSectionNavSocialFeed />}
    </div>
  )
}

export default FavoritesSectionNav