import { Grid, GridSize } from "@mui/material";
import { ICats } from "../types/types";

interface IProps {
  Comp: React.ComponentType<{ data: ICats; index: number | null }>;
  data: ICats[];
  hasRank: boolean;
  gridSize: boolean | GridSize | undefined;
}

function GridComponent({ Comp, data, hasRank, gridSize }: IProps) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent={"center"}
    >
      {data.map((cats, index) => (
        <Grid item xs={12} md={gridSize} key={cats._id}>
          <Comp data={cats} index={hasRank ? index : null} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GridComponent;
