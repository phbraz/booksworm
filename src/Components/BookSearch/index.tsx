import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { twMerge } from "tailwind-merge";
import { ClassNames } from "../../Helpers/Interface.tsx";

//Tailwind merge for custom designs without affecting the default one.
//see example on BestSeller page.


const BookSearch = ({ className }: ClassNames) => {
    return (
        <div className="w-full">
            <form className={twMerge("flex flex-row justify-center max-w-7xl mt-8 mx-auto", className)}>
                <SearchSharpIcon className="text-indigo-500 bg-white rounded-l-2xl h-14" style={{ fontSize: "40px", height: "56px" }} />
                <input
                    className="shadow h-14 w-full pl-3"
                    type="text"
                    placeholder="What books would you like to find?"
                />
                <button className="bg-slate-400 rounded-r-2xl text-white font-bold w-20 hover:opacity-90">Go</button>
            </form>
        </div>
    );
}

export { BookSearch };
