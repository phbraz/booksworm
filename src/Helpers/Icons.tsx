import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

//method to fill the start in our table component
const StarRating = (rate: number) => {
    return (
        <div>
            {[...Array(5)].map((_, index) => (
                index < rate ? <StarOutlinedIcon key={index} style={{ color: '#FFD700' }} />  :<StarOutlineIcon key={index} style={{ color: '#FFD700' }} />
            ))}
        </div>
    );
};

const SetFavourite = (isClicked: boolean) => {
    return (
        <div>
            { isClicked ? <FavoriteOutlinedIcon style={{ color: '#94a3b8' }} /> : <FavoriteBorderOutlinedIcon className="text-slate-400" />}
        </div>
    )
}

export { StarRating, SetFavourite }
