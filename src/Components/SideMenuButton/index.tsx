import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    active: boolean;
    onClick: () => void;
}

const SideMenuButton = ({ icon, active, onClick }: Props) => {
    return  (
        <button
            className={`flex items-center justify-center h-20 ${active 
                ? "bg-blue-600 rounded shadow-2xl translate-y-2.5 transition-all" : ""}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export { SideMenuButton }
