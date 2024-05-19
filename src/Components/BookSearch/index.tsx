import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { twMerge } from "tailwind-merge";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Book } from "../../API/Models";
import { useNavigate } from "react-router-dom";


interface Props {
    className?: string;
    link: string;
    mutationFunction: (userSearchInput: string) => Promise<Book[]>;
}

const BookSearch = ({ className, link, mutationFunction }:Props ) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate  = useNavigate();

    const bookSearchMutation = useMutation<Book[]>({
        mutationFn: async () => mutationFunction(searchTerm),
        onSuccess: (books: Book[]) => {
            navigate(`${link}`, {
                state: { bookUserSearchResponse: books },
            });
        },
        onError: (error: Error) => {
            console.error(error);
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        bookSearchMutation.mutate();
    };


    return (
        <div className="w-full">
            <form className={twMerge("flex flex-row justify-center max-w-7xl mt-8 mx-auto", className)} onSubmit={handleSubmit}>
                <SearchSharpIcon className="text-indigo-500 bg-white rounded-l-2xl h-14" style={{ fontSize: "40px", height: "56px" }} />
                <input
                    className="shadow h-14 w-full pl-3"
                    type="text"
                    placeholder="What books would you like to find?"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-slate-400 rounded-r-2xl text-white font-bold w-20 hover:opacity-90">Go</button>
            </form>
        </div>
    );
}

export { BookSearch };
