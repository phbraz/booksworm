import { ReactNode } from "react";

import { InternalMenu } from "../InternalMenu";
import { CoreNavBar } from "../CoreNavBar";
import { twMerge } from "tailwind-merge";


//instead of rendering it in every single page our layout can be used against different pages
//it renders side menu, navbar and we are parsing the children

interface Props {
    title?: string;
    children: ReactNode;
    className?: string;
}

const Layout  = ({ children, title, className }: Props) => {
    return (
        <div className="flex h-screen">
            <InternalMenu />
            <div className="flex flex-col w-full ml-20">
                <div className="fixed top-0 z-10 w-full">
                    <CoreNavBar title="Radical"/>
                </div>
                <div className={twMerge("mt-20", className)}>
                    {title !== undefined && (
                        <div className="flex flex-row max-w-5xl mx-auto text-2xl font-bold text-indigo-950 opacity-90">
                            {title}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}

export { Layout };
