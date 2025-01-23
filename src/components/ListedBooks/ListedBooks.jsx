import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/Utility";
import Book from "../Book/Book";

const ListedBooks = () => {

    const [readList ,setReadList] = useState([])

    const  allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();

        const storedReadLstInit = storedReadList.map(id => parseInt(id));

        // console.log(storedReadList , allBooks)

        const readBookList = allBooks.filter(book =>storedReadLstInit.includes(book.bookId))

        setReadList(readBookList)
    },[])
  return (
    <div>
      <h2 className="text-3xl">Listed books</h2>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wish List Books</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl">Read list : {readList.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
            {
                readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
