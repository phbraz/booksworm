import { BookSearch } from "../../Components/BookSearch";
import { ContentLinkWithImages } from "../../Components/ContentLinkWithImages";
import { ContentLinkWithImagesProps } from "../../Helpers/Interface.tsx";
import { Layout } from "../../Components/Core/Layout";
import { useQuery } from "@tanstack/react-query";
import { FetchAllBooks, FindBook, GetFavouriteBooks } from "../../API/Calls.tsx";
import { Book, FavouriteBooksByUser } from "../../API/Models";
import { CircularProgress } from "@mui/material";

const HomePage = () => {
    //we are creating an obj to hold the props to render the main page content and its images.
    //Then we are running a foreach (map in typescript) method and rendering each for the obj
    const { data: bestSellerData , isLoading: isBestSellerLoading } = useQuery<Book[]>({
        queryKey: ["GetAllBooks"],
        queryFn: FetchAllBooks,
    })

    const { data: favouriteData, isLoading: isFavouriteLoading} = useQuery<FavouriteBooksByUser[]>({
        queryKey: ["GetFavouriteBooksByUser"],
        queryFn: GetFavouriteBooks
    });


    const topThreeImgsBestSeller = bestSellerData ? bestSellerData.slice(0, 3).map(book => {
        return {
            imgUrl: book.bookImage, imgName: book.title
        }
    }): { imgUrl: "https://via.placeholder.com/150", imgName: "image1"  };

    const topThreeImgFavourites = favouriteData ? favouriteData.slice(0, 3).map(book => {
        return {
            imgUrl: book.bookImage, imgName: book.title
        }
    }): { imgUrl: "https://via.placeholder.com/150", imgName: "image1" }

    const homePageBooksRender : ContentLinkWithImagesProps[] = [
        { linkTitle: "New York Times Best Seller", linkUrl: "/bestseller", images: topThreeImgsBestSeller },
        { linkTitle: "Favourites", linkUrl: "/favourites", images: topThreeImgFavourites}
    ];

    if (isBestSellerLoading || isFavouriteLoading) {
        return <>
            <Layout>
                <BookSearch className="max-w-6xl" link="/bestseller" mutationFunction={FindBook} />
                <div className="flex flex-col items-center  justify-center max-w-6xl mt-36 mx-auto">
                    <CircularProgress/>
                </div>
            </Layout>
        </>

    }

    return (
        <Layout>
            <BookSearch className="max-w-6xl" link="/bestseller" mutationFunction={FindBook} />
            <div className="flex flex-col justify-center max-w-6xl mt-8 mx-auto">
                {homePageBooksRender.map(content => (
                    <ContentLinkWithImages
                        key={content.linkTitle}
                        linkTitle={content.linkTitle}
                        linkUrl={content.linkUrl}
                        images={content.images}
                    />
                ))}
            </div>
        </Layout>
    );
}

export { HomePage };
