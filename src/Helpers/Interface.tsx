interface ImagesContentProps {
    imagUrl: string;
    imgName: string;
}

export interface ContentLinkWithImagesProps {
    linkUrl: string;
    linkTitle: string;
    images: ImagesContentProps[];
}

export interface BooksData {
    title: string;
    price: number;
    rate: number;
    author: string;
}

export interface ClassNames {
    className?: string;
}
