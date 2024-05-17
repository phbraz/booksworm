import { ReactElement } from "react";

//Our side menu buttons render.
interface Props {
    icon: ReactElement;
    active: boolean;
    onClick: () => void;
    routePath: string;
}

const SideMenuButton = ({ icon, active, onClick, routePath }: Props) => {
    return  (
        <button
            className={`flex items-center justify-center w-24 h-20 ${active 
                ? "bg-blue-600 rounded-r-2xl shadow-2xl translate-y-2.5 transition-all" : ""}`}
            onClick={onClick}
        >
            <a href={routePath}>
                {icon}

            </a>
        </button>
    );
}

export { SideMenuButton }
