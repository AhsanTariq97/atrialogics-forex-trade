import React from 'react'
import FavoritesSectionNav from '../molecules/FavoritesSectionNav'
import FavortiteTab from '../molecules/FavortiteTab'
import FavoriteSectionPrices from '../molecules/FavoriteSectionPrices'

const FavoritesSection = () => {
  return (
    <div className='border border-[#DDE1E4] bg-[#FFFFF4] rounded-lg min-w-[450px] max-w-max col-span-1'>
        <FavoritesSectionNav />
        <FavortiteTab />
        <FavoriteSectionPrices />
    </div>
  )
}

export default FavoritesSection