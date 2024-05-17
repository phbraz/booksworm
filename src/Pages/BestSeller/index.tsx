import { Layout } from "../../Components/Core/Layout";
import { BookSearch } from "../../Components/BookSearch";
import { BooksTableContent } from "../../Components/Core/BooksTableContent";
import { BooksData } from "../../Helpers/Interface.tsx";

const BestSeller = () => {

    //fetch from API
    const boooksData: BooksData[] = [
        {price: 10, rate: 5, title: "book1", author: "author 1"},
        {price: 15, rate: 3, title: "book2", author: "author 2"},
        {price: 5, rate: 2, title: "book3", author: "author 2"}
    ]

    return (
        <>
            <Layout
                title="New York Times BestSellers"
            >
                <BookSearch className="max-w-5xl" />
                <div className="flex flex-row justify-center max-w-5xl mt-8 mx-auto">
                    <BooksTableContent booksData={boooksData} />
                </div>
            </Layout>
        </>
    )

}

export { BestSeller }
