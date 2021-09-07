import { Header } from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"

import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const search = ({searchResults}) => {
   
   const router = useRouter();
   const listLocation = [];

   const {location,startDate,endDate,numberOfGuests} = router.query;
   const rangeDate = `${startDate} - ${endDate}`;

   return (
      <div>
         <Header/>

         <main className="flex py-4 px-6">
            <section className="flex-grow">
               <p className="text-s">300+ Stays - <span className="font-semibold">{rangeDate}</span> - for <span className="font-semibold">{numberOfGuests}</span> guests</p>

               <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

               <div className="hidden md:inline-flex space-x-3">
                  <p className="button-tag">Canellation Flexibility</p>
                  <p  className="button-tag">Type of Place</p>
                  <p  className="button-tag">Price</p>
                  <p  className="button-tag">Rooms and Beds</p>
                  <p  className="button-tag">More Filters</p>
               </div>

               <div className="flex flex-col py-3">
                  {searchResults.map( ({img,location,description,price,star,total,title}) => (
                     <InfoCard
                        key = {img}
                        img = {img}
                        location = {location}
                        title = {title}
                        price = {price}
                        star = {star}
                        total = {total}
                        description = {description}
                     />
                  ))}
               </div>

            </section>
            <section className="hidden lg:inline-flex lg:min-w-[600px]">
               <Map searchResults={searchResults}/>
            </section>

         </main>



         <Footer/>

      </div>
   )
}

export default search

export async function getServerSideProps() {
   const searchResults = await fetch("https://links.papareact.com/isz").
      then((res) => res.json());

   return {
      props: {
         searchResults
      }
   }
}
