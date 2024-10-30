"use client"

import React, { useRef } from 'react';
import SquareCard from './SquareCard';
import { cards } from '@/constants';

const SquareCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); 
    }
  };

  return (
    <div className='sm:pb-16 py-6 relative'>
      <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide" ref={scrollRef}>
        <div className="flex space-x-4 px-0">
          {cards.map((card, index) => (
            <SquareCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              CSS={card.CSS}
            />
          ))}
        </div>
      </div>
      <div className='md:max-w-[94%] m-auto'>
        <div className='px-6 flex justify-center items-center relative z-20'> {/* Increased z-index */}
          <div className='xl:max-w-[1440px] w-full'>
            <div className='flex gap-8 items-center mt-6 md:mt-12 text-xl ml-24'>
              <p className='text-[#333647] border-[2px] cursor-pointer border-[#333647] rounded-full px-4 py-2 z-20' onClick={scrollLeft}>{"<"}</p> {/* z-index added */}
              <p className='border-[2px] border-[#333647] rounded-full px-4 py-2 cursor-pointer z-20' onClick={scrollRight}>{">"}</p> {/* z-index added */}
            </div>
          </div>
        </div>
        {/* Gradient with lower z-index */}
        <div className="absolute w-full bottom-0 h-80 black__gradient2 z-10" />
      </div>
    </div>
  );
}

export default SquareCards;
