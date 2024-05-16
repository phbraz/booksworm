import { highlightLastFourCharactersWithColour } from "../../../Helpers/String.tsx";

interface Props {
    title: string;
}

const NavBar = ({ title }: Props) => {
    const titleColour = highlightLastFourCharactersWithColour(title, {colour: "red"});
    return (
        <div className="flex fixed top-0 right-0 h-20 flex-col items-start justify-center pl-8 bg-white text-3xl font-bold uppercase z-10 w-[calc(100%-5rem)]">
            {titleColour}
        </div>
    );
}

export { NavBar }
