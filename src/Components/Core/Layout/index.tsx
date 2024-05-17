import { ReactNode } from "react";

import { InternalMenu } from "../InternalMenu";
import { NavBar } from "../NavBar";

interface Props {
    children: ReactNode;
}

const Layout  = ({ children }: Props) => {
    return (
        <div className="flex h-screen">
            <InternalMenu />
            <div className="flex flex-col w-full ml-20">
                <NavBar title="Radical" />
                <div className="mt-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export { Layout };
