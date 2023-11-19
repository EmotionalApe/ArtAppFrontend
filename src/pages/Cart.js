import React from 'react'
import Navbar from '../components/Navbar'
import CartTable from '../components/CartTable'

const Cart = () => {

    const cartItems = [
        {
          id: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
          title: 'Mona Lisa',
          price: 5000,
          quantity: 2,
        },
        {
          id: 2,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jan_Vermeer_van_Delft_-_The_Glass_of_Wine_-_Google_Art_Project.jpg/1024px-Jan_Vermeer_van_Delft_-_The_Glass_of_Wine_-_Google_Art_Project.jpg',
          title: 'The Wine Glass',
          price: 4500,
          quantity: 1,
        },
      ];

    return (
        <div>
            <Navbar />

            <div>
                <div className='text-3xl'>Your Cart</div>
                <CartTable cartItems={cartItems}/>
            </div>
        </div>
    )
}

export default Cart