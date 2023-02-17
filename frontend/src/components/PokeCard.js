import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const PokeCard = (props) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {
        <CardMedia
          sx={{
            maxWidth: 150,
            alignSelf: "center",
          }}
          component="img"
          image={props.pkmn.sprite}
          alt={props.pkmn.name}
        />
      }
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.pkmn.name}
        </Typography>
        <Typography>ID: {props.pkmn.id}</Typography>
        <Typography>Altura: {props.pkmn.height}</Typography>
        <Typography gutterBottom>Peso: {props.pkmn.weight}</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          {props.pkmn.types.map((type, i) => (
            <Chip
              label={type["type"].name}
              key={i}
              sx={{
                backgroundColor: colors[type["type"].name],
                color: "white",
                marginRight: 1,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
export default PokeCard;
