import React from 'react'

function AdvertBanner() {
  return (
    <div className='my-14 lg:my-20 grid grid-cols-12 gap-5'>
        <img src='/images/advertBanner/advert-1.webp' className='col-span-12 lg:col-span-6 rounded-xl' alt='banner-slides-1'/>
        <img src='/images/advertBanner/advert-2.webp' className='col-span-12 lg:col-span-6 rounded-xl' alt='banner-slides-2'/>
    </div>
  )
}

export default AdvertBanner