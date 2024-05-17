import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    active: boolean;
    onClick: () => void;
}

const SideMenuButton = ({ icon, active, onClick }: Props) => {
    return  (
        <button
            className={`flex items-center justify-center w-24 h-20 ${active 
                ? "bg-blue-600 rounded-r-2xl shadow-2xl translate-y-2.5 transition-all" : ""}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export { SideMenuButton }
