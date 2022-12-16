import React from 'react';
import Image from 'next/image';
function BookItem({name,description,id,imgURL}) {
    console.log("clalled");
    return (
       <li className='p-2 flex flex-col justify-center items-center  border-gray-200 border-2'>
            <div className='w-[10rem] h-[10rem] relative'>
                <Image
                    src={imgURL}
                    fill
                    alt='image'
                />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
       </li>
    );
}

export default BookItem;