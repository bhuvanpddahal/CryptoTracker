import Searchbar from "./Searchbar";
import Currencies from "./Currencies";

const SearchSection = () => {
    return (
        <section className="px-3 sm:px-5 py-10 lg:py-[60px]">
            <div className="max-w-7xl mx-auto space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[36px] sm:leading-[43.2px] lg:leading-[57.6px] xl:leading-[72px] font-bold tracking-[-1.2px] text-center text-zinc-800 dark:text-zinc-300">
                    Browse your 
                    <span className="bg-gradient-to-r from-red-500 to-secondary bg-clip-text text-transparent"> favorite </span>
                    currencies
                </h3>
                <Searchbar />
                <Currencies />
            </div>
        </section>
    )
};

export default SearchSection;