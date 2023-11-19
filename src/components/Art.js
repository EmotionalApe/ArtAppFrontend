import React from 'react'

const Art = ({ details }) => {

  return (
    <div className='flex flex-col w-72 justify-evenly m-2'>
      <div className={`w-[250px] h-[300px] bg-black rounded-[10px]`} style={{ backgroundImage: `url(${details.img})`, backgroundSize: 'cover' }}> </div>

      <div className='w-4/5 h-2/3 bg-white mb-3 rounded-[10px] p-3 flex flex-col justify-between'>
        <div className='font-bold'>{details.title}</div>
        <div className='text-[12px]'>by {details.artist}</div>

        <div className='flex flex-row space-x-5'>
          <div className=''>₹{details.price}</div>
          <div className=''>{details.rating}⭐</div>
        </div>
      </div>
    </div>
  )
}

export default Art