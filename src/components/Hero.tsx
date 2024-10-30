const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row sm:py-16 py-6">
      {/* Left section: Heading and text */}
      <div className="flex-1 flex flex-col justify-center xl:px-0 sm:pr-16 z-10">
        <h1 className="font-KyivType font-bold text-white ss:text-[65px] text-[42px] ss:leading-[72px] leading-[50px]">
          Your Defi Gateway
          <br className="xs:block hidden" />
          <span className="text-gradient">to peer-to-peer</span>
          <br className="sm:block hidden" />
          lending & borrowing
        </h1>

        <p className="font-normal text-[#898CA9] ss:text-base text-[15px] ss:leading-[24px] max-w-[510px] sm:mt-10 mt-7">
          Access funds or earn returns easily with our peer-to-peer platform. Lend or borrow securely, all in one place.
        </p>

        <div className="">
          <div className="flex items-center gap-2 sm:gap-8 font-medium text-xs ss:text-sm sm:mt-12 mt-8">
          <div className="text-[#C74A04] border-l-2 border-[#C74A04] pl-5">
            <p>
              Explore the world of possibilities
              <br className="xs:block hidden" />
              through access to flexible liquidity.
            </p>
          </div>
          <a
            href="https://app.lendbit.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C74A04] px-3 sm:px-6 xs:py-2 py-3 rounded-lg text-[15px] sm:text-[18px] sm:leading-[32px] font-semibold flex-shrink-0"
          >
            Open Dapp
          </a>
        </div>
        </div>
      </div>

      {/* Right section: Image */}
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative z-10">
        <img src="/gifs/banner2.gif" alt="Defi platform logo" className="w-full h-full relative z-[5]" />
      </div>
    </section>
  );
};

export default Hero;
