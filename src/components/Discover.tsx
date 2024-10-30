const Discover = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row sm:py-16 py-6">
       <div className="flex w-full items-start sm:items-end justify-between relative flex-col sm:flex-row gap-4 sm:gap-0">
            <h1 className="font-KyivType font-bold text-white ss:text-[48px] text-[32px] ss:leading-[48px] leading-[32px] max-w-[1060px] z-10">
                Discover real-time lending and borrowing opportunities at your fingertips.
            </h1>

            <a 
                href="https://app.lendbit.finance/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                  className="border border-white rounded-3xl px-4 py-2 flex-shrink-0 z-10"
            >
                {`Marketplace _>`}
            </a>
            <div className="absolute z-[1] w-[955.72px] sm:h-[100%] h-1/2 rounded-[90%] top-10 right-0 first__gradient" />
            <div className="absolute z-[1] w-[517.14px] sm:h-[60%] h-[40%] rounded-3xl second__gradient top-24 left-12" />
            <div className="absolute z-[0] w-[621.96px] sm:h-[60%] h-[20%] rounded-3xl first__gradient top-36 left-2" />
            <div className="absolute z-[0] w-[632.45px] md:h-[300px] h-10 rounded-xl third__gradient -top-20 -right-24" />
        </div>


      
        {/* Optional gradient backgrounds */}
        
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
    </section>
  );
};

export default Discover;
