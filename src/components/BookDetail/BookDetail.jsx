import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList,  addToStoredWishList } from '../Utility/Utility';

const BookDetail = () => {

    const {bookId} = useParams();
    const data = useLoaderData();
    console.log(data)

    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id);
    console.log(book)
    

    const {bookId: currentBookId,image} = book;

    // add localStorage Mark As Read
    const handelMarkAsRead = (id) =>{
        addToStoredReadList(id)
    }


    // add localStorage Mark As Read

    const handelAddToWishList = (id) =>{
        addToStoredWishList(id)

    }



    return (
        <div className='my-12'>
            <h1>book detail : {bookId}</h1>
            <img className='w-36' src={image} alt="" />
            <button onClick={()=> handelMarkAsRead(bookId)} className='btn btn-outline mr-4 my-4'>Mark As Read</button>
            <button onClick={()=> handelAddToWishList (bookId)} className='btn btn-accent'>WishList</button>
        </div>
    );
};

export default BookDetail;