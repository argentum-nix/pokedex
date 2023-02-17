import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import NavBar from "./components/Navbar";
import LandingPage from "./views/LandingPage";
import FiftyPokemon from "./views/FiftyPokemon";
import FlyingFiltered from "./views/FlyingFiltered";
import GrassFiltered from "./views/GrassFiltered";
import PokemonByWeight from "./views/PokemonByWeight";
import InvertedPokemon from "./views/InvertedPokemon";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/list_fifty" element={<FiftyPokemon />} />
          <Route path="/flying" element={<FlyingFiltered />} />
          <Route path="/grass" element={<GrassFiltered />} />
          <Route path="/weight" element={<PokemonByWeight />} />
          <Route path="/inverted" element={<InvertedPokemon />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
