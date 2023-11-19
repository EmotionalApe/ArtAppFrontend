import React from 'react'
import Navbar from '../components/Navbar'
import Arts from '../components/Arts'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'

const HomePage = () => {
    return (
        <div>
            <Navbar />

            <div className='w-[90%] m-auto flex flex-col items-center'>
                <div className='flex flex-row items-center space-x-46'>
                    <div className='text-4xl font-extrabold italic'>
                        "Art is the lie that enables us to realize the truth."
                    </div>
                    <Showcase />
                </div>

                <div className='text-4xl font-bold mt-4 mb-4'>LATEST ART</div>
                <Arts />
            </div>

            <Footer />

        </div>
    )
}

export default HomePage