import Image from 'next/image';

const MarketSection: React.FC = () => {
    return (
        <div className="bg-black flex flex-col items-center text-center px-4 relative pt-16">
            {/* Market Label */}
            <div className="text-xs text-[#DEDFE3] uppercase tracking-wide mb-4 bg-[#22242F] py-3 px-4 rounded-3xl">
                Market
            </div>

            {/* Popular Heading */}
            <h2 className="text-[#F4F4F6] mb-8 z-10 max-w-[520px] font-KyivType font-bold ss:text-[48px] text-[32px] ss:leading-[48px] leading-[32px]">
                Most <span className="text-[#FF4D00]">popular</span> integrated assets
            </h2>

            {/* Visit Marketplace Button */}
            <button className="py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 mb-12 z-10">
                <a href='https://app.lendbit.finance/marketplace'
                    className='px-8'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" Visit Marketplace _>"}
               </a>
            </button>

            <div className="absolute top-0 md:top-6 right-0 w-32 h-32 sm:w-48 sm:h-48">
                <Image
                    src="/gifs/Switch2.gif"
                    alt="Second Image"
                    width={300}
                    height={128}
                    layout="responsive"
                />
            </div>

            <div className="absolute md:top-24 lgg:top-28 top-10 left-0 w-32 h-32 sm:w-48 md:w-[16rem] sm:h-48 z-10">
                <Image
                    src="/gifs/Assetselector2.gif"
                    alt="First Image"
                    width={300}
                    height={128}
                    layout="responsive"
                />
            </div>

            {/* Bottom Single Grid Image */}
            <div className="w-full max-w-[824px] sm:mt-12 mt-4 mb-8 z-10">
                <Image
                    src="/CryptoAssets.svg"
                    alt="Grid Image"
                    width={960}
                    height={256}
                    layout="responsive"
                />
            </div>

            <div className="absolute z-[1] w-36 sm:w-[400px] h-[40%] rounded-3xl second__gradient top-24 left-4" />
            <div className="absolute z-[0] w-24 sm:w-[200px] h-[20%] rounded-3xl first__gradient top-36 left-0" />
            <div className="absolute z-[0] w-10 sm:w-[400px] md:h-[300px] h-10 rounded-xl third__gradient top-36 left-0" />
            <div className="absolute w-full -bottom-9 h-[500px] black__gradient2 z-[0]" />
        </div>
    );
};

export default MarketSection;

