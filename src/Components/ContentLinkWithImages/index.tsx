import { ContentLinkWithImagesProps } from "../../Helpers/Interface.tsx";

const ContentLinkWithImages = ( { linkUrl, linkTitle, images}: ContentLinkWithImagesProps) => {

    return <>
        <div className="w-full">
            <div className="flex flex-row justify-start max-w-7xl mt-8 mx-auto">
                <a href={linkUrl} className="font-bold text-indigo-950 opacity-90 text-2xl hover:underline">{linkTitle}</a>
            </div>
        </div>

        <div className="w-full mt-8">
            <div className="flex flex-row justify-start max-w-7xl mx-auto">
                {images.map((image) => (
                    <div className="mr-4">
                        <img src={image.imgUrl} alt={image.imgUrl} className="w-96 h-52"/>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export { ContentLinkWithImages };
