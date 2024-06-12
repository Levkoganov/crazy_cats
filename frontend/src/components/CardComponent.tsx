import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ICats } from "../types/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { fetchCatById } from "../libs/api/fetchCats";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

interface IProps {
  data: ICats;
  index: number | null;
}

function CardComponent({ data, index }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleOnClickInfo = async () => {
    await dispatch(fetchCatById(data._id));
    navigate(`/cat/${data._id}`);
  };

  return (
    <Card sx={{ border: "solid 1px" }}>
      <CardMedia
        component="img"
        image={`/images/${data._id}.jpg`}
        alt="Paella dish"
        sx={{ maxHeight: "160px" }}
      />

      <CardContent sx={{ borderTop: "solid 1px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {index !== null ? (
            <>
              Rank: {index + 1} <br /> Name: {data.name}
            </>
          ) : (
            `Name: ${data.name}`
          )}
        </Typography>

        <Typography variant="body1" color="info.main">
          Likes: {data.likes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          startIcon={<PermContactCalendarIcon />}
          size="small"
          onClick={handleOnClickInfo}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
