//couple of interfaces to help with our app
interface ImagesContentProps {
    imgUrl: string;
    imgName: string;
}

export interface ContentLinkWithImagesProps {
    linkUrl: string;
    linkTitle: string;
    images: ImagesContentProps[];
}

export interface ClassNames {
    className?: string;
}
