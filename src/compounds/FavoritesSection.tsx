import React from 'react'
import FavoritesSectionNav from '../molecules/FavoritesSectionNav'
import FavoriteTab from '../molecules/FavoriteTab'
import FavoriteSectionPrices from '../molecules/FavoriteSectionPrices'

const FavoritesSection = () => {
  return (
    <div className='order-1 border border-[#DDE1E4] bg-[#FFFFF4] rounded-lg  max-w-max col-span-1 h-full mx-auto lg:mx-0'>
        <FavoritesSectionNav />
        <FavoriteTab />
        <FavoriteSectionPrices />
    </div>
  )
}

export default FavoritesSection