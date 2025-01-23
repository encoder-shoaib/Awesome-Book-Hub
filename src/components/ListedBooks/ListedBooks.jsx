import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/Utility";
import Book from "../Book/Book";
import { toast } from "react-toastify";

const ListedBooks = () => {


  const [readList, setReadList] = useState([]);
  const [sort ,setSort] = useState(' ');

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();

    const storedReadLstInit = storedReadList.map((id) => parseInt(id));

    // console.log(storedReadList , allBooks)

    const readBookList = allBooks.filter((book) =>
      storedReadLstInit.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort =(sortType) =>{
    setSort(sortType);

    if(sortType === "No Of Pages" ){
      const sortedReadList = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
      setReadList(sortedReadList)
      toast('Books are sort by Ratings')

    }

    if(sortType === "Ratings"){
      const sortByRatings = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sortByRatings)
      toast('Books are sort by No Of Pages')
    }
  }




  return (
    <div>
      <h2 className="text-3xl">Listed books</h2>

      <div className="flex justify-center items-center">
      <div className="dropdown my-5 ">
        <div tabIndex={0} role="button" className="btn m-1 bg-pink-600 text-white text-2xl">
          {
            sort ? `sort by : ${sort}` : 'sort by'
          }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a  onClick={() =>handleSort('Ratings')}>Ratings</a>
          </li>
          <li>
            <a  onClick={() =>handleSort('No Of Pages')}>No Of Pages</a>
          </li>
        </ul>
      </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wish List Books</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl">Read list : {readList.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
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
