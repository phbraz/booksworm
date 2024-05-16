import { ReactNode } from "react";

interface Props {
    colour?: "red" | "blue";
}

enum ButtonName {
    Books = "Books",
    Favourites = "Favourites",
    Settings = "Settings"
}


const highlightLastFourCharactersWithColour = (stringInput: string, { colour }: Props): ReactNode => {
    const restOfString = stringInput.substring(0, stringInput.length - 4);
    const lastThree = stringInput.substring(stringInput.length - 4);

    switch (colour) {
        case "red":
            return <p>{restOfString}<span className="text-red-900">{lastThree}</span></p>;
        case "blue":
            return <p>{restOfString}<span className="text-blue-800">{lastThree}</span></p>;
        default:
            return <p>{stringInput}</p>;
    }
};

export { highlightLastFourCharactersWithColour, ButtonName };
