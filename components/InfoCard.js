import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

const InfoCard = ({img,location,description,price,star,total,title}) => {
   return (
      <div className="flex py-7 pr-4 border-b cursor-pointer hover:opacity-90 hover:shadow-lg transition duration-200 ease-out first:border-t">
         <div className="relative h-48 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image
               src = {img}
               layout = "fill"
               objectFit = "cover"
               className = "rounded-2xl"
            />
         </div>
         <div className="flex flex-grow flex-col pl-5">
            <div className="flex justify-between">
               <p>{location}</p>
               <HeartIcon className = "h-6 cursor-pointer"/>
            </div>

            <h4 className="text-xl font-semibold">{title}</h4>

            <div className="border-b w-10 pt-2 "/>

            <p className="pt-2 text-sm text-gray-400 flex-grow">{description}</p>

            <div className="flex justify-between items-end pt-5">
               <div>
                  <p><StarIcon className="h-5 text-red-400"/></p>
               </div>

               <div>
                  <h2 className="font-semibold text-xl">{price}</h2>
                  <p>{total}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InfoCard
