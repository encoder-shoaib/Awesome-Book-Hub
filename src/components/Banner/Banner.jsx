import React from "react";
import bannerImg from "../../assets/image/books.jpg"

const Banner = () => {
  return (
    <div className="my-6">
      <div className="hero min-h-[56.86vh] rounded-xl bg-violet-600 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl md:w-[900px] md:h-[350px]"
          />
          <div className="w-3/5 ">
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf </h1>
            <button className="btn bg-[#23be0a] mt-7 text-white p-4">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
