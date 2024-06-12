import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import GridComponent from "../GridComponent";
import CardComponent from "../CardComponent";
import WrapperComponent from "../WrapperComponent";

function ResultPage() {
  const { catsResult } = useSelector((state: RootState) => state.cats);

  return (
    <WrapperComponent>
      <div>
        <h1 style={{ textAlign: "center" }}>Search Results</h1>

        {catsResult.length > 0 ? (
          <GridComponent
            Comp={CardComponent}
            data={catsResult}
            hasRank={false}
            gridSize={4}
          />
        ) : (
          "cat not found..."
        )}
      </div>
    </WrapperComponent>
  );
}

export default ResultPage;
