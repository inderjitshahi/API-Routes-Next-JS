import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';

function BooksList(props) {
    const [data, setData] = useState();
    const sendRequest = () => {
        fetch("/api/books/")
        .then(res => res.json())
        .then(data => setData(data.message))
        .catch(err => console.log(err));
    }
    useEffect(() => {
        sendRequest();
    }, []);
    return (
        <div>
            <ul className='grid grid-cols-3 gap-3 p-5'>
                {data && data.map((item, index) => (
                    <BookItem
                        name={item.name}
                        id={item.id}
                        description={item.description}
                        imgURL={item.imgURL}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    );
}

export default BooksList;