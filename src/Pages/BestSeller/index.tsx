import { Layout } from "../../Components/Core/Layout";
import { BookSearch } from "../../Components/BookSearch";
import { TableContent } from "../../Components/Core/TableContent";

const BestSeller = () => {
    return (
        <>
            <Layout>
                <BookSearch className="max-w-5xl" />
                <div className="flex flex-row justify-center max-w-5xl mt-8 mx-auto">
                    <TableContent />
                </div>
            </Layout>
        </>
    )

}

export { BestSeller }
