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
                <div>Login</div>
                <div>Sign Up</div>

            </div>

            <div>

                <Link to="/wishlist">
                    ❤️  Wishlist
                </Link>

                <Link to="/cart" className='ml-5'>
                    🛒 Cart
                </Link>

                <Link to="/account" className='ml-5'>
                    👤 My Account
                </Link>


            </div>
        </div>
    )
}

export default Navbar