import React from 'react'
import Navbar from '../components/Navbar'
import OrderTable from '../components/OrderTable'

const Account = () => {
    const orders = [
        // Example orders
        {
            orderId: 1,
            artId: 101,
            orderDate: '02-11-2023',
            quantity: 2,
            totalPrice: 10000,
            shippingAddress: 'Pune, India',
        },
    ];
    return (
        <div>
            <Navbar />
            <div className="text-3xl m-12">
                Your Orders
                </div>
            <OrderTable orders={orders} />
            
        </div>
    )
}

export default Account