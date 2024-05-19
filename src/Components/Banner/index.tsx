interface Props {
    title: string;
    contributor: string;
    imgRef: string;
}

const Banner = ({title, imgRef, contributor}:Props) => {
    return (
        <>
            <div
                className="flex flex-col items-center justify-center max-w-6xl mt-20 mx-auto h-52 relative">
                <img src={imgRef} alt={title}
                     className="w-full h-full object-cover opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-4xl font-bold text-white">{title}<span
                        className="pl-3 font-medium text-4xl">{contributor}</span></p>
                </div>
            </div>
        </>
    )
}

export { Banner }