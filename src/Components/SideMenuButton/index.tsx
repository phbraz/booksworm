import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    active: boolean;
    onClick: () => void;
}

const SideMenuButton = ({ icon, active, onClick }: Props) => {
    return  (
        <button
            className={`flex pl-6 py-1.5 w-20 h-10 ${active ? "bg-blue-600 rounded shadow-2xl translate-y-2.5 transition-colors transition" : ""}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export { SideMenuButton }
