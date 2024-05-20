import { Avatar } from "@mui/material";
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { ButtonName } from "../../../Helpers/String.tsx";
import { SideMenuButton } from "../../SideMenuButton";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserNameFromCookie, logout } from "../../../Helpers/User.tsx";


const InternalMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userName = getUserNameFromCookie();

    const buttons = [
        { name: ButtonName.Books, icon: <SignalCellularAltOutlinedIcon className="text-white" />, path: "/bestseller"},
        { name: ButtonName.Favourites, icon: <FavoriteBorderOutlinedIcon className="text-white" />, path: "/favourites" },
        { name: ButtonName.Settings, icon: <SettingsOutlinedIcon className="text-white" />, path: "/settings" },
        { name: ButtonName.Logout, icon: <LogoutIcon className="text-white" />, path: "/" },
    ];

    const handleButtonClick = (buttonName: ButtonName) => {
        switch (buttonName) {
            case ButtonName.Books:
                navigate("/bestseller");
                break;
            case ButtonName.Favourites:
                navigate("/favourites");
                break;
            case ButtonName.Settings:
                navigate("/settings");
                break;
            case ButtonName.Logout:
                navigate("/");
                logout();
                break;
            default:
                break;
        }
    };



    return (
        <div className="fixed left-0 top-0 bottom-0 w-20 bg-slate-400">
            <div className="flex items-center justify-center h-20 uppercase">
                <Avatar alt={userName}>{userName![0]}</Avatar>
            </div>
            <div className="flex flex-col items-center space-y-10 bg-indigo-950 opacity-90 min-h-screen pt-20">
                {buttons.map(button => (
                    <SideMenuButton
                        key={button.name}
                        icon={button.icon}
                        active={location.pathname === button.path}
                        onClick={() => handleButtonClick(button.name)}
                        routePath={button.path}
                    />
                ))}
            </div>
        </div>
    );
}

export { InternalMenu };
