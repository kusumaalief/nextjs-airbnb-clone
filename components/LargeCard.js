import Image from "next/image"

const LargeCard = ({img,title,description,buttonText}) => {
   return (
      <section className="relative py-16 cursor-pointer">
         <div className="m-w-[300px] h-96 relative">
            <Image
               src={img}
               objectFit="cover"
               layout="fill"
               className="rounded-2xl"
            />
         </div>

         <div className="absolute top-32 left-12 font-semibold">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p className="py-2 mb-5">{description}</p>

            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 font-semibold shadow-md active:scale-90 transition duration-150 active:shadow-xl">{buttonText}</button>
         </div>
      </section>
   )
}

export default LargeCard
