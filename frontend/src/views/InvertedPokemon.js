import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InfiniteScroll from "../components/InfiniteScroll";

function InvertedPokemon() {
  return (
    <Container sx={{ py: 1 }} maxWidth="xl">
      <Typography component="h1" variant="h4" align="center" mb={10} mt={6}>
        Todos los pokémon, pero con sus nombres invertidos:
      </Typography>
      <InfiniteScroll
        endpoint="http://localhost:8000/api/inverted"
        pageLimit={9999}
        offset={25}
        limit={25}
      />
    </Container>
  );
}

export default InvertedPokemon;
