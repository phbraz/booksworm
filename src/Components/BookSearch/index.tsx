import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const BookSearch = () => {
    return (
        <div className="flex items-center justify-center w-full p-4">
            <form className="flex flex-row w-full max-w-lg">
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
