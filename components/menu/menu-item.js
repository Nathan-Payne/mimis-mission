import React from 'react'

const MenuItem = ({ blok }) => {

    return (
        <div className='grid grid-rows-2 pb-6 w-full lg:w-3/4 2xl:4/5'>
            <div className='flex items-center justify-between mb-2 font-bold border-x-0 border-t-0 border-2 border-b-neutral-400'>
                <h4>
                    {blok.name}
                </h4>
                <div className='pl-6'>
                    {blok.price}
                </div>
            </div>
            <p>
                {blok.description}
            </p>
        </div>
    )
}

export default MenuItem
