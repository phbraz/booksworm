import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { BooksData } from "../../../Helpers/Interface.tsx";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { StarRating } from "../../../Helpers/Icons.tsx";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const TableContent = () => {
    const createTableRow = ({ title, rate, price, author }: BooksData): BooksData => {
        return {
            title: title,
            rate: rate,
            price: price,
            author: author,
        }
    }

    const rows = [
        createTableRow({price: 10, rate: 3, title: "book 1", author: "Author 1"}),
        createTableRow({price: 29, rate: 1, title: "book 2", author: "Author 2"}),
        createTableRow({price: 1, rate: 5, title: "book 3", author: "Author 3"}),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& > *': { borderBottom: 'unset' } }}
                        >
                            <TableCell component="th" scope="row">
                                <div className="flex items-center font-bold uppercase text-lg text-indigo-950 opacity-90">
                                    <AutoStoriesOutlinedIcon className="text-slate-400 mr-2.5"/>
                                    {row.title}
                                    <span className="pl-1 text-sm lowercase text-slate-400">by</span>
                                    <span className="text-sm capitalize text-slate-400"> {row.author}</span>
                                </div>
                            </TableCell>

                            <TableCell>
                                {StarRating(row.rate)}
                            </TableCell>

                            <TableCell>
                                <div className="flex items-center">
                                    <div className="price-container flex items-center justify-center w-14 font-bold uppercase text-indigo-950 opacity-90 text-lg">{row.price} GBP</div>
                                    <button onClick={() => {}}>
                                        <FavoriteBorderOutlinedIcon className="text-slate-400" />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export { TableContent }
