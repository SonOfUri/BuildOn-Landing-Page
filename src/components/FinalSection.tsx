import Image from 'next/image';

const FinalSection: React.FC = () => {
    return (
        <div className="bg-black flex flex-col items-center text-center px-4 relative">
            {/* Text Content Section */}
            <div className="flex flex-col items-start max-w-5xl w-full m-auto text-left mt-6 ss:mt-12 mb-12 z-10">
                <div className=''>
                    <div className='max-w-[510px]'>
                        <div className="text-xs text-[#DEDFE3] uppercase tracking-wide mb-4 bg-[#22242F] py-3 px-4 rounded-3xl w-fit">
                            Security & Growth
                        </div>
                        <h2 className="text-[#F4F4F6] mb-8 z-10 max-w-[494px] font-KyivType font-extrabold ss:text-[30px] text-[26px] ss:leading-[48px] leading-[32px]">
                            Secure Your Assets and Expand Your Portfolio with Lendbit
                        </h2>
                        <p className="text-[#9C9EAB] ss:text-base text-[15px] ss:leading-[24px] mb-8 font-medium">
                            At Lendbit, we prioritize the security of your assets with advanced blockchain technology and smart contracts, ensuring all transactions are safe, transparent, and protected. Our platform offers flexible lending and borrowing options, empowering you to grow your crypto holdings and access liquidity with ease. Whether you're aiming to earn returns or seize new opportunities, Lendbit provides a secure and efficient way to maximize your digital assets."
                        </p>
                        <div className="">
                            <div className="flex items-center gap-2 sm:gap-8 font-medium text-xs ss:text-sm mt-8 z-10">
                                <a
                                    href="https://mainnet.lendbit.finance/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#C74A04] px-3 sm:px-6 xs:py-2 py-3 rounded-lg text-[15px] sm:text-[18px] sm:leading-[32px] font-semibold flex-shrink-0"
                                >
                                    Open Dapp
                                </a>

                                <div className="text-[#C74A04] border-l-2 border-[#C74A04] pl-5">
                                    <p>
                                        Lendbit offers security and tools
                                        <br className="xs:block hidden" />
                                        to reach your crypto goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orange Image (Top-Right Corner) */}
            <div className="hidden sm:block absolute top-24 right-0 w-64 h-64 md:w-96 md:h-96">
                <Image
                    src="/Semicircle.png"
                    alt="Orange Circular Image"
                    width={300}
                    height={300}
                    layout="responsive"
                />
            </div>

            {/* Yellow Image (Center-Bottom Placeholder) */}
            <div className='u-class-shadow mt-20 mb-8 md:mb-16 z-10'>
                <div className="w-full max-w-5xl">
                    <img
                        src="/Dashboard.png"
                        alt="Yellow Placeholder Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default FinalSection;
