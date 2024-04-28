import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const HeroSection = () => {
    return (
        <section className="px-3 sm:px-5 py-3 sm:py-6">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center xl:gap-5">
                <div className="w-full space-y-4">
                    <p className="flex items-center justify-center lg:justify-start gap-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-300">
                        Smart Tracking Starts Here
                        <ArrowRightIcon className="h-4 w-4 stroke-2" />
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[36px] sm:leading-[43.2px] lg:leading-[57.6px] xl:leading-[72px] font-bold tracking-[-1.2px] text-center lg:text-left text-zinc-800 dark:text-zinc-300">
                        Buy Cheap, Sell with Profit using
                        <span className="bg-gradient-to-r from-primary via-red-400 to-secondary bg-clip-text text-transparent"> CryptoTracker</span>
                    </h2>
                </div>
                <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px] w-full">
                    <Image
                        src="/hero.png"
                        alt="track crypto currencies"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
};

export default HeroSection;

// #ff7f08