interface ImagesContentProps {
    imagUrl: string;
    imgName: string;
}

export interface ContentLinkWithImagesProps {
    linkUrl: string;
    linkTitle: string;
    images: ImagesContentProps[];
}
