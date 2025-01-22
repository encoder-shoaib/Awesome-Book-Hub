import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = () => {

    const [books ,setBooks] = useState([]);

    useEffect(() =>{
        fetch('./booksData.json')
        .then (res =>res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Books</h1>
            {/* <h1>books length : {books.length}</h1> */}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 p-7 border rounded-md mt-8 mb-8 '>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;