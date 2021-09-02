import Image from "next/image"

const Banner = () => {

   return (
      <div className="relative transform transition duration-200 ease-in-out">
         <img className="bg-cover object-cover h-[300px] w-[100%] md:h-[500px] lg:h-[550px] xl:h-[550px] 2xl:h-[1200px]"
            src="banner.jpg"/>
         <div className="absolute top-[45%] w-full text-center">
            <p className="text-base md:text-lg font-bold">Not sure where to go? Perfect.</p>
            <button className="text-purple-500 bg-white font-bold px-8 py-3 shadow-md rounded-full mt-4 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
         </div>
      </div>
   )
}

export default Banner
