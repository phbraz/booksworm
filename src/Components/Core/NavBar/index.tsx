import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { highlightLastFourCharactersWithColour } from "../../../Helpers/String.tsx";
import { InternalMenu } from "../InternalMenu";

interface Props {
    title: string;
}

const NavBar = ({ title }: Props) => {
    const titleColour = highlightLastFourCharactersWithColour(title, {colour: "red"});
    return <>
        <div className="flex flex-row items-start">

            <AppBar
                color="default"
                elevation={0}

            >
                <Toolbar>
                    <Typography><Avatar alt="RadicalUSer">R</Avatar></Typography>
                    <Typography>{titleColour}</Typography>
                </Toolbar>
            </AppBar>
        </div>
        <InternalMenu />
    </>
}

export  { NavBar }
