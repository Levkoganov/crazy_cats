import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTop5Cats } from "../../libs/api/fetchCats";
import { AppDispatch, RootState } from "../../redux/store";
import Search from "./Search";
import GridComponent from "../GridComponent";
import CardComponent from "../CardComponent";
import WrapperComponent from "../WrapperComponent";

const Home = () => {
  const { top5Cats } = useSelector((state: RootState) => state.cats);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      await dispatch(fetchTop5Cats());
    })();
  }, [dispatch]);

  return (
    <WrapperComponent>
      <Search />
      <GridComponent
        Comp={CardComponent}
        data={top5Cats}
        hasRank={true}
        gridSize={4}
      />
    </WrapperComponent>
  );
};

export default Home;
