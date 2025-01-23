import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, tags, category,totalPages ,rating} = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="border rounded-md p-6  bg-primary  ">
        <div className="card  bg-white shadow-xl">
          <figure className="p-8 rounded-2xl bg-fuchsia-50">
            <img src={image} className="h-[166px] rounded-md" alt="bookName" />
          </figure>

          <div className="flex gap-4 p-2 ">
            {tags.map((tag , index) => (
              <button className="btn btn-xs bg-green-100 text-[#39ab09] font-bold" key={index}>
                {tag}
              </button>
            ))}
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>By:{author}</p>
            <div className="flex justify-between">
              <h1>Total Pages = {totalPages}</h1>
              <h1>Rating ={rating}</h1>
            </div>
            <div className="border-t-2 border-dashed"></div>
            <div className="card-actions justify-between mt-2">
              <div className="badge badge-outline">{category}</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-300"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-200"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
