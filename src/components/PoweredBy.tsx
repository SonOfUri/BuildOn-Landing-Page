import { poweredBy } from '@/constants';
import Image from 'next/image';
import React from 'react';

const PoweredBy = () => {
  return (
    <div className = 'flex flex-col items-center mt-6 ss:mt-12 mb-12 z-10 md:mb-16 bg-black'>
        <h3 className="text-xs text-[#DEDFE3] uppercase tracking-wide mb-4 sm:mb-6 bg-[#22242F] py-3 px-4 rounded-3xl w-fit">
            Powered By          
        </h3>  
      <div className= "flex gap-6 items-center w-full justify-center">
        {poweredBy.map((support, index) => (
          <div key={index}>
                <Image
                    src={support.img}
                    alt={support.name}
                    width={160}
                    height={100}
                    layout="responsive"
                    className="h-auto max-w-[160px]"
                />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoweredBy;

