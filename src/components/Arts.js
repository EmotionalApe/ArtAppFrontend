import React from 'react'
import Art from './Art'

const Arts = () => {
    return (
        <div>
            <Art
                details={{
                    title: 'Mona Lisa',
                    artist: 'Leonardo Da Vinci',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
                    price: 5000,
                    rating: 4.5
                }} />
        </div>
    )
}

export default Arts