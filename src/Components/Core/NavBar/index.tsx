import { highlightLastFourCharactersWithColour } from "../../../Helpers/String.tsx";

interface Props {
    title: string;
}

const NavBar = ({ title }: Props) => {
    const titleColour = highlightLastFourCharactersWithColour(title, { colour: "red" });
    return (
        <div className="flex items-center h-20 bg-white text-3xl font-bold uppercase px-4" >
            <a href="/">
                {titleColour}
            </a>
        </div>
    );
}

export { NavBar };
