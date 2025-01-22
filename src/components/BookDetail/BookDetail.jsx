import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams();
    const data = useLoaderData();
    console.log(data)

    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id);
    console.log(book)

    const {bookId: currentBookId,image} = book;
    return (
        <div className='my-12'>
            <h1>book detail : {bookId}</h1>
            <img className='w-36' src={image} alt="" />
            <button className='btn btn-outline mr-4 my-4'>Read</button>
            <button className='btn btn-accent'>WishList</button>
        </div>
    );
};

export default BookDetail;