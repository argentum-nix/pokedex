import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InfiniteScroll from "../components/InfiniteScroll";

function GrassFiltered() {
  return (
    <Container sx={{ py: 1 }} maxWidth="xl">
      <Typography component="h1" variant="h4" align="center" mb={10} mt={6}>
        Todos los pokémon con por lo menos un tipo igual a "grass":
      </Typography>
      <InfiniteScroll
        endpoint="http://localhost:8000/api/grass"
        pageLimit={9999}
        offset={25}
        limit={25}
      />
    </Container>
  );
}

export default GrassFiltered;
