import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { BooksData } from "../../../Helpers/Interface.tsx";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { StarRating } from "../../../Helpers/Icons.tsx";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface Props {
    booksData: BooksData[];
    isFavouritePage?: boolean
}

//using material ui mixed with tailwind
//parsing the bookData object, we can build the table in different pages

const BooksTableContent = ({ booksData, isFavouritePage }: Props) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                    {booksData.map((book, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& > *': { borderBottom: 'unset' } }}
                        >
                            <TableCell component="th" scope="row">
                                <div className="flex items-center font-bold uppercase text-lg text-indigo-950 opacity-90">
                                    <AutoStoriesOutlinedIcon className="text-slate-400 mr-2.5"/>
                                    {book.title}
                                    <span className="pl-1 text-sm lowercase text-slate-400">by</span>
                                    <span className="text-sm capitalize text-slate-400"> {book.author}</span>
                                </div>
                            </TableCell>

                            <TableCell>
                                {StarRating(book.rate)}
                            </TableCell>
                            {isFavouritePage && (
                                <TableCell>
                                    <button className="pr-6 hover:opacity-90" onClick={() => alert("not ready yet")}>Edit</button>
                                    <button className="hover:opacity-90" onClick={() => alert("not ready yet")}>Delete</button>
                                </TableCell>
                            )}
                            <TableCell>
                                <div className="flex flex-row">
                                    <div className="font-bold text-lg text-indigo-950 opacity-90">{book.price} GBP</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <button onClick={() => {
                                }}>
                                    <FavoriteBorderOutlinedIcon className="text-slate-400"/>
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export { BooksTableContent }
