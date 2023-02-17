import * as React from "react";
import PokeCard from "../components/PokeCard";
import Grid from "@mui/material/Grid";

const CardGrid = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mb={3}
      columns={{ xs: 1, md: 4, lg: 12 }}
    >
      {Object.keys(props.pkmn).map((item, i) => (
        <Grid item key={i} xs={12} sm={6} md={2}>
          <PokeCard pkmn={props.pkmn[item]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
