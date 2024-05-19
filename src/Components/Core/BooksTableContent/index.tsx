import {
    Paper, Rating,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { BookResponse } from "../../../API/Models";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useNavigate } from "react-router-dom";

interface Props {
    booksData?: BookResponse[];
    isFavouritePage?: boolean
    onClick?: (book: BookResponse) => void;
}

//using material ui mixed with tailwind
//parsing the bookData object, we can build the table in different pages

const BooksTableContent = ({ booksData, isFavouritePage, onClick }: Props) => {
    const navigate = useNavigate();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                    {booksData ? booksData
                        .map((book, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& > *': { borderBottom: 'unset' } }}
                        >
                            <TableCell component="th" scope="row">
                                <div className="flex items-center font-bold uppercase text-lg text-indigo-950 opacity-90">
                                    <AutoStoriesOutlinedIcon className="text-slate-400 mr-2.5"/>
                                    {book.title}
                                    <span className="pl-1 text-sm lowercase text-slate-400">{book.contributor}</span>
                                </div>
                            </TableCell>

                            <TableCell>
                                <Rating name="read-only" value={book.rate} readOnly />
                            </TableCell>
                            {isFavouritePage && (
                                <TableCell>
                                    <button className="pr-6 hover:opacity-90" onClick={() => {
                                        navigate(`/favourites/edit/${book.id}`, {
                                            state: { bookToEdit: book },
                                        });
                                    }}>
                                        Edit
                                    </button>
                                    <button className="hover:opacity-90" onClick={() => alert("not ready yet")}>Delete</button>
                                </TableCell>
                            )}
                            <TableCell>
                                <div className="flex flex-row">
                                    <div className="font-bold text-lg text-indigo-950 opacity-90">{book.price} GBP</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                {book.isFavourite
                                    ? <FavoriteOutlinedIcon style={{ color: '#94a3b8' }} />
                                    : (
                                        <button onClick={() => onClick!(book!)}>
                                            <FavoriteBorderOutlinedIcon className="text-slate-400"/>
                                        </button>
                                    )}
                            </TableCell>
                        </TableRow>
                        )) : (
                        <TableRow>
                            <TableCell>
                                Nothing to see here.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export { BooksTableContent }
