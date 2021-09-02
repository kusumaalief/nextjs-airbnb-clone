import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/outline"
import { useState } from "react"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { Router, useRouter } from "next/dist/client/router";


export const Header = () => {

   const [searchInput, setSearchInput] = useState('')
   const [startDate,setStartDate] = useState(new Date());
   const [endDate,setEndDate] = useState(new Date());
   const [numberOfGuests,setNumberOfGuests] = useState(1);

   const router = useRouter();
   // console.log(router);

   const formatDate = (date) => {
      const day = new Date(date).toLocaleString('default',{day:'2-digit'});
      const month = new Date(date).toLocaleString('default',{month:'long'});
      const year = new Date(date).toLocaleString('default',{year:'numeric'});
      return `${day} ${month} ${year}`;
   }

   const search = () => {
      router.push({
         pathname : '/search',
         query : {
            location : searchInput,
            startDate : formatDate(startDate),
            endDate : formatDate(endDate),
            numberOfGuests
         }
      })
   }

   const handleChange = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
   }

   const selectionRange = {
      startDate : startDate ,
      endDate : endDate,
      key : 'selection'
   };

   return (
      <header id="header" className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-2 md:px-10 md:p-3 text-gray-700 bg-white transform transition duration-150">
         <div className="relative flex items-center md:h-10 h-7 my-auto">
            <Image
               onClick={() => router.push('/')}
               src="https://links.papareact.com/qd3"
               layout="fill"
               objectFit="contain"
               objectPosition="left"
               className="cursor-pointer"
            />
         </div>

         <div className="relative">
            <div className="flex flex-row content-between md:border-2 md:shadow-sm rounded-full py-2">
               <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} id="search-input" className="flex-grow bg-transparent outline-none ml-5 pl-2  text-sm placeholder-shown:text-gray-400 pt-1 sm:pt-0" type="text" name="search" placeholder="Start your search"/>
               <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white md:mx-2"/>
            </div>
         </div>

         <div id="right-side" className="flex items-center justify-end text-gray-700 space-x-4">
            <p className="hidden md:inline cursor-pointer">Become a host</p>
            <GlobeAltIcon className="invisible md:visible h-6 cursor-pointer"/>
            <div className="flex space-x-2 border-2 p-2 rounded-full">
               <MenuIcon className="h-6 cursor-pointer"/>
               <UserCircleIcon className="h-6 cursor-pointer"/>
            </div>
         </div>

         {searchInput&& (
            <div className="text-gray-700 flex flex-col col-span-3 md:mx-auto my-3 shadow-xl">
               <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#FD5B61"]}
                  onChange={handleChange}
               />
               <div className="flex items-center border-b pb-2 px-5">
                  <h2 className="font-semibold text-xl flex-grow">Number of Guests</h2>
                  <UsersIcon className="h-5"/>
                  <input min={1} value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} className="w-12 pl-2 ml-3 text-lg outline-none text-red-400" type="number"/>
               </div>
               <div className="flex py-3">
                  <button className="text-lg p-2 flex-grow" onClick={()=>setSearchInput('')}>Cancel</button>
                  <button className="text-lg p-2 text-red-400 flex-grow" onClick={search}>Search</button>
               </div>
            </div>
         )}
      </header>
   )
}
