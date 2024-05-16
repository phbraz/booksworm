import { useState } from "react";
import { Avatar } from "@mui/material";
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ButtonName } from "../../../Helpers/String.tsx";
import { SideMenuButton } from "../../SideMenuButton";

const InternalMenu = () => {
    const [activeButton, setActiveButton] = useState<ButtonName | null>(null);

    const buttons = [
        { name: ButtonName.Books, icon: <SignalCellularAltOutlinedIcon className="text-white" /> },
        { name: ButtonName.Favourites, icon: <FavoriteBorderOutlinedIcon className="text-white" /> },
        { name: ButtonName.Settings, icon: <SettingsOutlinedIcon className="text-white" /> }
    ];

    const handleButtonClick = (buttonName: ButtonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            <div className="flex fixed left-0 top-0 h-20 items-center justify-center flex-col bg-slate-400 w-20 z-10">
                <div>
                    <Avatar alt="RadicalUser">PB</Avatar>
                </div>
            </div>
            <div className="flex fixed left-0 top-20 justify-center flex-col space-y-10 bg-indigo-950 opacity-90 min-h-screen w-20">
                {buttons.map(button => (
                    <SideMenuButton
                        key={button.name}
                        icon={button.icon}
                        active={activeButton === button.name}
                        onClick={() => handleButtonClick(button.name)}
                    />
                ))}
            </div>
        </>
    );
}

export { InternalMenu };
