import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

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

export { StarRating }
