import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";

export default function HomeCard({src,title,desc,label}) {
  const router = useRouter();
     const handleClick = () => {
    if (title === "BUY NOW") {
      router.push(`/Products/AllCategories?category=ALL`);
    } else if (title === "DONATE NOW") {
      router.push(`/Products/Donations`);
    } else if (title === "EXCHANGE NOW") {
      router.push(`/Products/AllCategories?filter=exchange`);
    }
  };
  return (
    <div>
        <div className='flex flex-col items-center' onClick={handleClick}>
            <div className='w-56 h-72 bg-white rounded-3xl shadow-md shadow-gray-400'>
              <Image src={src} alt='Buy Now' width={224} height={100}  className='rounded-t-3xl'/>
              <div className='py-2 px-4'>
                <h2 className='text-black text-base font-semibold mb-2'>{title}</h2>
                <p className='text-black text-xs'>{desc}</p>
              </div>
            </div>
            <button className='flex text-base font-semibold justify-start items-center bg-[#9C60F4] px-4 py-2 rounded-lg mt-4 mr-2'>
              {label}
              <Image src="/images/ArrowRight.png" alt='Arrow' width={15} height={15} className='ml-2'/>
            </button>
          </div>
    </div>
  )
}

