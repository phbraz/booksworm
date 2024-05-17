import { BookSearch } from "../../Components/BookSearch";
import { ContentLinkWithImages } from "../../Components/ContentLinkWithImages";
import { ContentLinkWithImagesProps } from "../../Helpers/Interface.tsx";
import { Layout } from "../../Components/Core/Layout";

const HomePage = () => {
    //we are creating an obj to hold the props to render the main page content and its images.
    //Then we are running a foreach (map in typescript) method and rendering each for the obj
    const bestSellerObj : ContentLinkWithImagesProps[] = [
        { linkTitle: "New York Times Best Seller", linkUrl: "#", images:
                [
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image1"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image2"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image3"  }
                ]
        },
        { linkTitle: "Favourites", linkUrl: "#", images:
                [
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image1"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image2"  },
                    { imagUrl: "https://via.placeholder.com/150", imgName: "image3"  }
                ]
        }
    ];

    return (
        <Layout>
            <BookSearch />
            {bestSellerObj.map(content => (
                <ContentLinkWithImages
                    linkTitle={content.linkTitle}
                    linkUrl={content.linkUrl}
                    images={content.images}
                />
            ))}

        </Layout>
    );
}

export { HomePage };
