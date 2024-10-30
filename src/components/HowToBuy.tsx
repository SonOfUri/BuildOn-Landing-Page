import Image from 'next/image';

const HowToBuy: React.FC = () => {
    return (
        <div>
            <div className="max-w-[80%] mx-auto flex flex-col items-center md:flex-row md:justify-center pb-12">         
            <div className='flex items-center'>
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/wallet.png"
                        alt="Connect Wallet"
                        width={90}
                        height={120}
                    />
                    <div className='mb-6'>
                        <h3 className="text-2xl font-semibold">Connect Wallet</h3>
                        <p className=" md:mt-2 md:max-w-[260px]">
                        Easily connect your crypto wallet to get started with Lendbit.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block mb-36 -mx-16">
                    <Image src="/Chain1.svg" alt="Linking" width={210} height={11} />
                </div>
            </div>
            
            <div className='flex items-center'>
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/deposit.png"
                        alt="Connect Wallet"
                        width={90}
                        height={120}
                    />
                    <div className='mb-6'>
                        <h3 className="text-2xl font-semibold">Deposit Collateral</h3>
                        <p className=" md:mt-2 md:max-w-[260px]">
                        Secure your loan or prepare to lend by depositing supported crypto assets as collateral.
                        </p>
                    </div>
                </div>
                 <div className="hidden md:block mb-40 -mx-16">
                    <Image src="/Chain1.svg" alt="Linking" width={210} height={11} />
                </div>
            </div>
           
            <div className="flex flex-col items-center text-center">
                    <Image
                        src="/transact.png"
                        alt="Connect Wallet"
                        width={90}
                        height={120}
                    />
                    <div className='mb-6'>
                        <h3 className="text-2xl font-semibold">Lend or Borrow</h3>
                        <p className=" md:mt-2 md:max-w-[260px]">
                        Explore the marketplace to lend your assets and earn returns or borrow funds with flexible terms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default HowToBuy;
