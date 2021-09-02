import Image from "next/image"

export const MediumCards = ({img,title}) => {
   return (
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
         <div className="relative w-80 h-80 flex-col">
            <Image
               src={img}
               layout="fill"
               objectFit="cover"
               className="rounded-xl"
            />
         </div>
         <h2 className="font-semibold text-2xl mt-3">{title}</h2>
      </div>
   )
}
