import { BookSearch } from "../../Components/BookSearch";
import { InternalMenu } from "../../Components/Core/InternalMenu";
import { NavBar } from "../../Components/Core/Navbar";

const HomePage = () => {
    return (
        <div className="flex h-screen">
            <InternalMenu />
            <div className="flex flex-col w-full ml-20">
                <NavBar title="Radical" />
                <div className="flex-grow flex justify-center p-4">
                    <BookSearch />
                </div>
            </div>
        </div>
    );
}

export { HomePage };
