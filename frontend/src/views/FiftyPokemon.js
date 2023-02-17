import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InfiniteScroll from "../components/InfiniteScroll";

function FiftyPokemon() {
  return (
    <Container sx={{ py: 1 }} maxWidth="xl">
      <Typography component="h1" variant="h4" align="center" mb={10} mt={6}>
        Primeros 50 pokémon:
      </Typography>
      <InfiniteScroll
        endpoint="http://localhost:8000/api/all"
        pageLimit={50}
        offset={25}
        limit={25}
      />
    </Container>
  );
}

export default FiftyPokemon;
