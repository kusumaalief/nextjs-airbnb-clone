import Image from "next/image"

const SmallCard = ({img,location,distance}) => {
   return (
      <div className="flex flex-row items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-200 ease-in-out">
         <div className="relative w-16 h-16">
            <Image
               src={img}
               layout="fill"
               objectFit="cover"
               className="rounded-lg"/>
         </div>
         <div>
            <h2 className="font-semibold">{location}</h2>
            <h2>{distance}</h2>
         </div>
      </div>
   )
}

export default SmallCard
