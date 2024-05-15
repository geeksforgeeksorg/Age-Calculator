import React from "react";
import svgImage from "./images/homepage-svg.svg"
import day from "./images/day.png"
import month from "./images/month.png"
import year from "./images/year.png"
import gregorian from "./images/Gregorian.png"
import moon from "./images/moon.png"
import mars from "./images/mars.png"
import { useState } from "react";
import * as moment from "moment"

let Header = () => {
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  let [popup, setPopup] = useState("");


  function totalDiff() {
    let _startDate = new Date(startDate);
    let _endDate = new Date(endDate);

    let timeDiff = Math.abs(_startDate.getTime() - _endDate.getTime())
    
    let years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    let months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    let days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    return { years, months, days }
  }

  function getEachDifferences() {
    let from = new Date(startDate);
    let to = new Date(endDate);
    let timeDiff = Math.abs(from.getTime() - to.getTime())
    let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    let fromYear = from.getFullYear();
    let fromMonth = from.getMonth();
    let fromDay = from.getDate();
    let toYear = to.getFullYear();
    let toMonth = to.getMonth();
    let toDay = to.getDate();

    let yearDiff = toYear - fromYear;
    let monthDiff = toMonth - fromMonth;
    let dayDiff = toDay - fromDay;

    if (dayDiff < 0) {
      const lastMonth = new Date(toYear, toMonth, 0);
      dayDiff = lastMonth.getDate() + dayDiff;
      monthDiff--;
    }
    return { yearDiff, monthDiff: yearDiff * 12 + monthDiff, daysDiff };
  }

  function timeOnMoon(daysOnEarth) {
    const daysPerEarthDay = 27.32;

    const daysOnMoon = daysOnEarth / daysPerEarthDay;

    const yearsOnMoon = Math.floor(daysOnMoon / 365);
    const remainingDays = daysOnMoon % 365;
    const monthsOnMoon = Math.floor(remainingDays / 30);

    return { yearsOnMoon, monthsOnMoon };
  }

  function timeOnMars(daysOnEarth) {
    const daysPerEarthDay = 1.03;

    const daysOnMars = daysOnEarth * daysPerEarthDay;

    const yearsOnMars = Math.floor(daysOnMars / 668);
    const remainingDays = daysOnMars % 668;
    const monthsOnMars = Math.floor(remainingDays / 55.5);

    return { yearsOnMars, monthsOnMars };
  }

  function getNextBirthday() {
    const birthdate = moment(startDate, "YYYY-MM-DD");

    const today = moment();
    const currentYear = today.year();

    const nextBirthday = birthdate.clone().year(currentYear);

    if (nextBirthday.isBefore(today)) {
      nextBirthday.year(currentYear + 1);
    }

    const daysUntilNextBirthday = nextBirthday.diff(today, 'days');

    return {
      nextBirthday: nextBirthday.format('MMMM Do YYYY'),
      daysUntilNextBirthday: daysUntilNextBirthday
    };
  }








  return (
    <section>
      <div id="myHeader" className="p-3 bg-[#211f39] flex flex-col md:flex-row pt-20 md:pt-0 min-h-screen">
        <div className="flex flex-col justify-center items-start px-4 md:px-12 md:w-1/2">
          <h1 className="mx-4 px-4 mb-0 text-4xl md:text-6xl text-white font-Russo">
            Age Calculator
          </h1>
          <form onSubmit={(e) => { e.preventDefault(); setPopup(true) }} className="flex flex-col items-start m-4 p-4 w-full">
            <label className="text-white font-Russo tracking-widest">From</label>
            <input
              type="date"
              name="text"
              required
              onChange={(e) => setStartDate(e.target.value)}
              className="inputAge my-4 w-full md:w-96"
            />
            <label className="text-white font-Russo tracking-widest">To</label>
            <input
              type="date"
              name="text"
              required
              onChange={(e) => setEndDate(e.target.value)}
              className="inputAge my-4 w-full md:w-96"
            />
            <button className="relative outline outline-2 outline-[#FEBF00] border border-2 rounded-xl my-4 border-black duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-full md:w-96 rounded-md bg-red-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-red-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300"></div>
              <p className="font-Russo tracking-widest text-2xl z-10">Calculate</p>
            </button>
          </form>
        </div>
        <div className="md:w-1/2 bg-contain bg-no-repeat bg-center h-96 md:h-auto"
          style={{ backgroundImage: `url(${svgImage})` }}

        ></div>
      </div>


      <div id="popup" className={` ${popup === true ? '' : 'hidden'} w-1/2 z-20  border-black border-4 p-4 fixed left-1/2 top-1/2 md:top-96 -translate-x-1/2 -translate-y-1/2 bg-[#0e0d22] rounded-3xl outline outline-2 outline-yellow-400 shadow shadow-md shadow-gray-400 delay-1000`}>
        <div onClick={() => setPopup(false)} className="p-2 absolute cursor-pointer right-5 text-white font-Russo text-2xl hover:text-gray-500">X</div>
        <h2 className="text-white text-left font-Russo tracking-wider text-lg">Result</h2>
        <div className="flex justify-center font-Russo tracking-wider mt-5">
          <p className="mx-6 text-gray-500"><span className="text-2xl text-white">{totalDiff().years}</span> <br /> Years </p>
          <p className="mx-6 text-gray-500"><span className="text-2xl text-white">{totalDiff().months}</span> <br /> Months</p>
          <p className="mx-6 text-gray-500"><span className="text-2xl text-white">{totalDiff().days}</span> <br /> Days</p>
        </div>

        <div className="container px-5 pb-12 pt-6  mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-12 h-12 bg-gray-100 object-cover bg-contain object-center flex-shrink-0 rounded-full mr-4" src={month} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{getEachDifferences().monthDiff}</h2>
                  <p className="text-gray-500">Total Months</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={day} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{getEachDifferences().daysDiff}</h2>
                  <p className="text-gray-500">Total Days</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={moon} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{`${timeOnMoon(getEachDifferences().daysDiff).yearsOnMoon} Year ${timeOnMoon(getEachDifferences().daysDiff).monthsOnMoon} Month`}</h2>
                  <p className="text-gray-500">Age on Moon</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={mars} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{`${timeOnMars(getEachDifferences().daysDiff).yearsOnMars} Year ${timeOnMars(getEachDifferences().daysDiff).monthsOnMars} Month`}</h2>
                  <p className="text-gray-500">Age on Mars</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={year} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{getNextBirthday().nextBirthday}</h2>
                  <p className="text-gray-500">Next Birthday</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={gregorian} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{getNextBirthday().daysUntilNextBirthday}</h2>
                  <p className="text-gray-500">Days in next Birthday</p>
                </div>
              </div>
            </div>


          </div>
        </div>


      </div>
    </section>

  )
}

export default Header;