import { highlightLastFourCharactersWithColour } from "../../../Helpers/String.tsx";

interface Props {
    title: string;
}

const CoreNavBar = ({ title }: Props) => {
    const titleColour = highlightLastFourCharactersWithColour(title, { colour: "red" });
    return (
        <div className="flex fixed w-full items-center h-20 bg-white text-3xl font-bold uppercase px-4" >
            <a href="/">
                {titleColour}
            </a>
        </div>
    );
}

export { CoreNavBar };
