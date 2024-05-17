import { ReactNode } from "react";

import { InternalMenu } from "../InternalMenu";
import { NavBar } from "../Navbar";

//instead of rendering it in every single page our layout can be used against different pages
//it renders side menu, navbar and we are parsing the children

interface Props {
    title?: string;
    children: ReactNode;
}

const Layout  = ({ children, title }: Props) => {
    return (
        <div className="flex h-screen">
            <InternalMenu />
            <div className="flex flex-col w-full ml-20">
                <NavBar title="Radical" />
                <div className="mt-8">
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
