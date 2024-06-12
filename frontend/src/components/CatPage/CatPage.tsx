import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import GridComponent from "../GridComponent";
import WrapperComponent from "../WrapperComponent";
import CatCard from "./CatCard";

function CatPage() {
  const { cat } = useSelector((state: RootState) => state.cats);

  return (
    <WrapperComponent>
      <h1 style={{ textAlign: "center" }}>Cat Information</h1>
      <GridComponent Comp={CatCard} data={cat} hasRank={false} gridSize={6} />
    </WrapperComponent>
  );
}

export default CatPage;
