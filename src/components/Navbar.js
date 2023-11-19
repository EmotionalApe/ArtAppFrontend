import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-black w-full h-20 text-white flex justify-evenly items-center">
            <div className='font-extrabold text-3xl'>
                ArtGallery
            </div>

            <div className='flex flex-row space-x-5'>
                <div><Link to="/">Home</Link></div>
                <div>About</div>
                <div>Contact</div>
                <div>Login</div>
            </div>

            <div>
                <Link to="/cart">
                    🛒 Cart
                </Link>
            </div>
        </div>
    )
}

export default Navbar