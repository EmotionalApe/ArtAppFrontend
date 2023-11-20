import React from 'react'
//import { useParams } from 'react-router';
import Navbar from '../components/Navbar';

const Artdata = () => {
    //const { id } = useParams();

    const data =
    {
        id: 1,
        title: 'Mona Lisa',
        artist: 'Leonardo Da Vinci',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
        price: 5000,
        description: `The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world".`,
        rating: 4.5
    }

    return (
        <div>
            <Navbar />

            <div className='m-12 flex flex-row w-[90%] justify-evenly'>
                <div className={`w-[500px] h-[500px] bg-black rounded-[10px] overflow-hidden`}>
                    <img src={data.img} alt="painting" className=' object-fill' />
                </div>

                <div className='bg-white mb-3 rounded-[10px] p-3 flex flex-col w-96 justify-evenly'>
                    <div className='font-bold text-4xl'>{data.title}</div>
                    <div className='text-1xl'>by {data.artist}</div>
                    <div className='text-2xl'>₹{data.price}</div>
                    <div className='text-lg'>{data.rating}⭐</div>

                    <div><hr className='border-black border-[2px]'/></div>
                    <div>{data.description}</div>
                    <div className='text-xl bg-black text-white p-2 rounded-lg w-32'> Add to Cart</div>
                </div>
            </div>
        </div>
    )
}

export default Artdata