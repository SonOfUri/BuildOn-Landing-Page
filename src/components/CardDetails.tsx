import { cardData } from '@/constants';
import React from 'react';

const CardDetails = () => {
 

    return (
    <div className='md:py-12 pt-8 pb-6 bg-black'>
      <div>
        <div className='flex flex-wrap justify-between items-end gap-4'>
          <h1 className='font-bold font-KyivType max-w-[660px] ss:text-[48px] text-[32px] ss:leading-[48px] leading-[32px]'>
            <span className='text-[#FF4D00]'>Simplify</span>Your Crypto Lending and Borrowing
          </h1>

          <div className='flex gap-4 text-sm items-center'>
            <img src='/logo.png' alt='App Logo' className='w-8 h-8' />
            <p className='text-[#C8C9D0] max-w-[300px]'>
              Effortless Crypto Lending and Borrowing Unlock DeFi Opportunities with Ease
            </p>
          </div>
        </div>

        <div className='rounded-3xl text-[#B44000] border-white border-[2px] my-6 w-fit py-2'>
          <a href='https://app.lendbit.finance/' className='px-4'>
            {"Deposit Collateral _>"}
          </a>
        </div>
      </div>

      {/* Card Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 sm:py-16 py-6'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-6 lg:px-8 rounded-xl shadow-lg`}
             style={{ backgroundColor: card.bg }}
          >
            <h2 className='font-light text-[24px] leading-6 text-[#F4F4F6]'>{card.title}</h2>
            <p className='mb-4 mt-6'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;


