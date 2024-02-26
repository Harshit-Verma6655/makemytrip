/* eslint-disable react/prop-types */
import React from 'react'

function OfferCard({ obj }) {
    return (
        <div className='flex min-w-[370px] p-2 flex-col justify-between bg-white shadow-lg rounded-xl'>
            <div className='flex gap-4 mb-4 '>
                <div >
                    <img src={obj?.heroUrl} className='min-w-[140px] text-white text-bottom h-[130px]  bg-cover  rounded-2xl' />
                </div>
                <div>
                    <p className='text-xs text-gray-500'>
                        {obj?.lobDisplayText}
                    </p>
                    <h1 className='font-bold'>
                        BOOKING ARE OPEN NOW!
                    </h1>
                    <h2 className='text-xs text-gray-700'>
                        {obj?.pTx}
                    </h2>
                </div>

            </div>
            <div className='flex justify-between'>
                <span className='text-xs'>T&C Apply</span>
                <span className='font-bold text-blue-400'>BOOK NOW</span>
            </div>
        </div>
    )
}

export default OfferCard