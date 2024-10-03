import React, { useState } from "react";
import TrendingCard from "../components/TrendingCard";

import JoinComp from "../components/JoinComp";
import { FAQComp } from "../components/FAQComp";
import { TrendingSlider } from "../components/TrendingSlider";
import netflixBackground from "../assets/netflix_background.png";
import { backgroundLayout } from "../components/layouts/backgroundLayout";
import TrendingCardSlider from "../components/TrendingCardSlider";

export const trendingMovies = [
  {
    number: 1,
    graphicLink:
      "https://image.tmdb.org/t/p/original/u4FUEJfI8TjT9g6m0Hp9BOyK6XS.jpg",
  },
  {
    number: 2,
    graphicLink:
      "https://image.tmdb.org/t/p/original/kG5GAbAPeAr8FgLoTsj17vXg6ah.jpg",
  },
  {
    number: 3,
    graphicLink:
      "https://image.tmdb.org/t/p/original/xDevExMQ1gUCs74vqaVqU3DQ9fl.jpg",
  },
  {
    number: 4,
    graphicLink:
      "https://image.tmdb.org/t/p/original/pXcWS0Zb2OMDqpybiS3FZJVyP7C.jpg",
  },
  {
    number: 5,
    graphicLink:
      "https://image.tmdb.org/t/p/original/zqKmF2sHJC8RTzUCcbWcxtpjn9V.jpg",
  },
  {
    number: 6,
    graphicLink:
      "https://image.tmdb.org/t/p/original/r4BweFFbjiZCQtHqRsNPdgdzZq5.jpg",
  },
  {
    number: 7,
    graphicLink:
      "https://image.tmdb.org/t/p/original/o9ilgVRlPt5nd9sDAgNSq6zYyy4.jpg",
  },
  {
    number: 8,
    graphicLink:
      "https://image.tmdb.org/t/p/original/3Q2tlBbSJxL7I9oUU7abWnL8nAs.jpg",
  },
  {
    number: 9,
    graphicLink:
      "https://image.tmdb.org/t/p/original/bA7XKYFmr8uuM6Yw6yHhJks9bRR.jpg",
  },
  {
    number: 10,
    graphicLink:
      "https://image.tmdb.org/t/p/original/j7fMYs4qiVqaPz9dBCT9ddG8yuV.jpg",
  },
];

function HomePage() {
  const [mNumber, setMNumber] = useState(0);

  const NavLink = ({ text, link }) => {
    return (
      <>
        <p className="text-sm underline my-4"> {text} </p>
      </>
    );
  };

  const CaptureEmail = () => {
    return (
      <div className="flex flex-col items-center">
        <p>
          Ready to Watch ? Enter your email to start or restart your membership
        </p>
        <div className="flex gap-3 justify-start items-start my-2">
          <input
            type=""
            className=" border-[1.5px] border-white text-gray-600 font-bold bg-gray-900/25 rounded-sm border-opacity-100 opacity-50 h-14 w-96 px-5"
            placeholder="Email address"
          />
          <button className=" h-14 bg-red-600 rounded-md w-52">
            Get Started
          </button>
        </div>
      </div>
    );
  };

  const LangSelect = () => {
    return (
      <>
        <div>
          <select
            name=""
            id=""
            className="border-[1px] shadow-sm  border-white px-2 h-7 w-32 text-white bg-gray-900 rounded-sm "
          >
            <option value="English">
              <span className="font-bold">English</span>
            </option>
            <option value="Hindi"> Hindi </option>
          </select>
        </div>
      </>
    );
  };

  const handleTrendingSlider = () => {
    if (mNumber < 9) {
      setMNumber(mNumber + 1);
    } else {
      setMNumber(0);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black -z-10">
        <div
          style={{
            backgroundImage: `url(${netflixBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "0",
          }}
        >
          <div
            style={{
              backgroundColor: "#00000094",
              position: "absolute",
              zIndex: 0,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              height: "108%",
            }}
          ></div>
          <nav className="flex justify-between relative ">
            <div className="ml-9">
              <h1 className="text-red-700 text-4xl font-bold ">NETFLIX</h1>
            </div>
            <div className="mr-9 mt-2 flex gap-4">
              <select
                name=""
                id=""
                className="border-[1px] shadow-sm  border-white px-2 h-7 w-32 text-white bg-gray-900 rounded-sm "
              >
                <option value="English">
                  <span className="font-bold">English</span>
                </option>
                <option value="Hindi"> Hindi </option>
              </select>

              <button className="bg-red-700 pb-1 h-7 w-20 text-white px-4  rounded-sm">
                <span className="font-bold">SignIn</span>
              </button>
            </div>
          </nav>

          <section className="justify-center  flex h-screen items-center relative">
            <div className=" text-white flex flex-col gap-5   ">
              <div className="flex flex-col gap-3 items-center">
                <h1 className="text-5xl font-extrabold">Unlimited Movies,</h1>
                <h1 className="text-5xl font-extrabold">TV Shows and More </h1>
                <p className="text-xl font-extrabold">
                  Starts at Rs.149. Cancel at any time
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p>
                  Ready to Watch ? Enter your email to start or restart your
                  membership
                </p>
                <div className="flex gap-3 justify-start items-start my-2">
                  <input
                    type=""
                    className=" border-[1.5px] border-white text-gray-600 font-bold bg-gray-900/25 rounded-sm border-opacity-100 opacity-50 h-14 w-96 px-5"
                    placeholder="Email address"
                  />
                  <button className=" h-14 bg-red-600 rounded-md w-52">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* BackgroundLayout  */}

        <section className="text-white bg-black p  mb-5">
          <h1 className="text-2xl my-2 pl-32">Trending Now </h1>
          <div className="shadow-lg backdrop-blur-sm pl-32">
            {/* <TrendingSlider trendingMovies={trendingMovies} /> */}
            {<TrendingCardSlider trendingMovies={trendingMovies} />}
          </div>
        </section>
        <section className="text-white my-10 ">
          <h1 className="text-2xl my-2 pl-36 mb-5"> More reasons to join </h1>
          <div className="flex justify-center gap-7">
            <JoinComp />
            <JoinComp />
            <JoinComp />
            <JoinComp />
          </div>
        </section>

        <section className="text-white bg-black my-10 pl-20">
          <div className=" px-16">
            <h1 className="text-2xl my-2 mb-5">Frequently Asked Questions</h1>
            <div className="flex flex-col gap-2">
              <FAQComp />
              <FAQComp />
              <FAQComp />
              <FAQComp />
            </div>
          </div>
        </section>

        <div className=""></div>

        <footer className=" bg-black  h-fit bg-black pt-10 pb-20 text-white flex flex-col  ">
          <div className="">
            <CaptureEmail />
          </div>
          <div className=" text-gray-400 pl-36 my-10">
            <p>Questions? Call 000-800-919-1694</p>
          </div>
          {/* This is a div for holding nav links  */}

          <div className="pl-36 bg-black text-gray-400 flex gap-52 justify-start ">
            <div className=" ">
              <NavLink text={"FAQ"} link={"#"} />
              <NavLink text={"Investor Relations"} link={"#"} />
              <NavLink text={"Privacy"} link={"#"} />
              <NavLink text={"Speed Test"} link={"#"} />
            </div>

            <div className="">
              <NavLink text={"Help Center"} link={"#"} />
              <NavLink text={"Jobs"} link={"#"} />
              <NavLink text={"Cookie Preferences"} link={"#"} />
              <NavLink text={"Legal Notices"} link={"#"} />
            </div>

            <div className="">
              <NavLink text={"Account"} link={"#"} />
              <NavLink text={"Ways to Watch"} link={"#"} />
              <NavLink text={"Corporate Information"} link={"#"} />
              <NavLink text={"Only on Netflix"} link={"#"} />
            </div>

            <div className="">
              <NavLink text={"Media Centre"} link={"#"} />
              <NavLink text={"Terms of Use"} link={"#"} />
              <NavLink text={"Contact Us"} link={"#"} />
            </div>
          </div>

          {/* Addtional two components  */}
          <div className="pl-36 flex flex-col mt-16 gap-10">
            <LangSelect />
            <p text-gray-400>Netflix India </p>
          </div>
        </footer>
      </div>
      |
    </>
  );
}

export default HomePage;
