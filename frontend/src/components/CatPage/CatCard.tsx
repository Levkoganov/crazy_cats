import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { fetchLikeCat } from "../../libs/api/fetchCats";
import { AppDispatch } from "../../redux/store";
import { ICats } from "../../types/types";
import { useEffect, useState } from "react";

interface IProps {
  data: ICats;
}
function CatCard({ data }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [catSessionValue, setCatSessionValue] = useState<string | null>(
    sessionStorage.getItem(data._id)
  );

  useEffect(() => {
    const storedValue = sessionStorage.getItem(data._id);
    setCatSessionValue(storedValue);
  }, [data._id, catSessionValue]);

  const handleOnClickLike = async () => {
    await dispatch(fetchLikeCat(data._id));
    sessionStorage.setItem(data._id, data.name);
    setCatSessionValue(data.name);
  };

  return (
    <Card sx={{ border: "solid 1px" }}>
      <CardHeader
        style={{ color: "white" }}
        sx={{ bgcolor: "primary.main" }}
        title={`Name: ${data.name}`}
        subheaderTypographyProps={{ color: "white" }}
        subheader={`Location: ${data.location}`}
      />
      <CardMedia
        component="img"
        image={`/images/${data._id}.jpg`}
        alt="Paella dish"
        sx={{ maxHeight: "400px" }}
      />
      <CardContent sx={{ borderTop: "solid 1px" }}>
        <Typography variant="body2" color="text.primary">
          Age: {data.age} <br />
          Location: {data.location} <br />
          Favorite food: {data.favoriteFood} <br />
          Color: {data.color} <br />
          Height: {data.height} <br />
          Weight: {data.weight}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          disabled={catSessionValue === null ? false : true}
          variant="contained"
          onClick={handleOnClickLike}
          size="large"
          startIcon={<ThumbUpOffAltIcon />}
        >
          {data.likes}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CatCard;
