import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-black w-full h-20 text-white flex justify-evenly items-center">
        <div className='font-extrabold text-3xl'>
            ArtGallery
        </div>
        
        <div className='flex flex-row space-x-5'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Login</div>
        </div>

        <div>
            Cart
        </div>
    </div>
  )
}

export default Navbar