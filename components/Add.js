import { useRouter } from 'next/router';
import React, { useReducer, useState } from 'react';

function Add(props) {
    const router = useRouter()
    const [input, setInput] = useState({ name: "", imgURL: "", description: "" })
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(input);
        if (!input.name && !input.description && !input.imgURL) {
            return;
        } else {
            sendRequest();
        }

    }
    const sendRequest = () => {
        fetch('/api/books', {
            method: "POST",
            body: JSON.stringify({
                name: input.name,
                description: input.description,
                imgURL: input.imgURL
            }),
            headers: {
                'Content-Type': "application/json",
            }
        }).then(res => res.json())
            .then(data => router.push('/'))
            .catch(err => console.log(err))
    }
    const changeHandler = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));

    }
    return (
        <div className='p-5 flex justify-center'>
            <form onSubmit={submitHandler} className='border-gray-400 border-2 p-2 flex flex-col space-y-3 rounded-lg w-[70%]'>
                <label htmlFor='name'>Name</label>
                <input value={input.name} onChange={changeHandler} className='border-2 rounded-md p-1 border-gray-300' name="name" type="text"></input>
                <label htmlFor='description'>Description</label>
                <input value={input.description} onChange={changeHandler} className='border-2 rounded-md p-1 border-gray-300' name='description' type="text"></input>
                <label htmlFor='imgURL'>ImgURL</label>
                <input value={input.imgURL} name='imgURL' onChange={changeHandler} className='border-2 rounded-md p-1 border-gray-300' type="text"></input>
                <button type='submit' className='p-2 bg-slate-500' >Submit</button>
            </form>
        </div>
    );
}

export default Add;