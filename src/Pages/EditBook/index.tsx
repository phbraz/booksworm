import { Layout } from "../../Components/Core/Layout";
import { BookResponse, UpdateBook } from "../../API/Models";
import { useLocation } from "react-router-dom";
import { Rating } from "@mui/material";
import { FormEvent, useState } from "react";
import { Banner } from "../../Components/Banner";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useMutation } from "@tanstack/react-query";
import { UpdateBookAndBookRateByUser } from "../../API/Calls.tsx";

const EditBook = () => {
    const location = useLocation();
    const bookToEdit: BookResponse = location.state?.bookToEdit ? location.state.bookToEdit : undefined;
    const [rate, setRate] = useState<number | null>(1);
    const [updatedPrice, setUpdatePrice] = useState<number>(0);

    const updateBookMutation = useMutation({
        mutationFn: async (updateBook: UpdateBook) => {
            return await UpdateBookAndBookRateByUser(updateBook)
        },
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updateBookData: UpdateBook = {
            bookId: bookToEdit.id,
            price: updatedPrice,
            rate: rate ?? 0,
        }
        
        updateBookMutation.mutate(updateBookData);
    }


    return <>
        <Layout>
            <Banner title={bookToEdit.title} contributor={bookToEdit.contributor} imgRef={bookToEdit.bookImage} />

            <form className="flex flex-col items-start justify-center max-w-6xl mt-2 mx-auto h-52 relative" onSubmit={handleSubmit}>
                <div className="flex flex-row mt-20">
                    <p className="font-bold mt-20 text-lg text-indigo-950 opacity-90">Edit</p>
                </div>

                <div className="flex flex-row mt-6">
                <div className="flex flex-row items-center justify-center text-white bg-slate-400 w-20 h-10">
                        Cost
                    </div>

                    <input onChange={(e) => setUpdatePrice(parseInt(e.target.value, 10 || 0))} className="w-24 font-bold pl-6" type="number" step="0.01"/>
                    <div className="flex flex-col items-start justify-center font-bold bg-white pr-8 h-10 w-60">GBP
                    </div>
                </div>

                <div className="flex flex-row mt-6 h-80">
                    <div className="flex flex-row items-center justify-center text-white bg-slate-400 w-20 h-10">
                        Rating
                    </div>

                    <div className="flex flex-row items-center justify-center text-white bg-white h-10 pr-52 pl-2">
                        <Rating
                            name="simple-controlled"
                            value={rate}
                            onChange={(_event, newValue) => {
                                setRate(newValue);
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-row items-center w-48 mt-10 mb-20 justify-center">
                    <button className="bg-blue-500 w-full shadow uppercase font-bold text-white rounded-3xl hover:opacity-90 py-4 ">
                        Update
                    </button>
                </div>
                <div>
                    <a href="/favourites"> <KeyboardBackspaceIcon /> Back To Favourites</a>
                </div>

            </form>
        </Layout>
    </>
}

export { EditBook }