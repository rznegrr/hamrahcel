import React from 'react'

function AdvertBanner() {
  return (
    <div className='my-14 lg:my-20 grid grid-cols-12 gap-5 place-items-center'>
        <img src='/images/advertBanner/advert-banner1.png' className='col-span-12 lg:col-span-6 rounded-xl object-cover' alt='banner-slides-1'/>
        <img src='/images/advertBanner/advert-banner2.png' className='col-span-12 lg:col-span-6 rounded-xl object-cover' alt='banner-slides-2'/>
    </div>
  )
}

export default AdvertBanner