import { BookSearch } from "../../Components/BookSearch";
import { ContentLinkWithImages } from "../../Components/ContentLinkWithImages";
import { ContentLinkWithImagesProps } from "../../Helpers/Interface.tsx";
import { Layout } from "../../Components/Core/Layout";

const HomePage = () => {
    //we are creating an obj to hold the props to render the main page content and its images.
    //Then we are running a foreach (map in typescript) method and rendering each for the obj
    const bestSellerObj : ContentLinkWithImagesProps[] = [
        { linkTitle: "New York Times Best Seller", linkUrl: "/bestseller", images:
                [
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image1"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image2"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image3"  }
                ]
        },
        { linkTitle: "Favourites", linkUrl: "/favourites", images:
                [
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image1"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image2"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image3"  }
                ]
        }
    ];

    return (
        <Layout>
            <BookSearch className="max-w-6xl" />
            <div className="flex flex-col justify-center max-w-6xl mt-8 mx-auto">
                {bestSellerObj.map(content => (
                    <ContentLinkWithImages
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
