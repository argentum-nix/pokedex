import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

function NavBar() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Link
          variant="h6"
          underline="none"
          color="text.primary"
          href="/"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Django-PokeAPI
        </Link>
        <nav>
          <Link
            underline="none"
            variant="button"
            href="/list_fifty"
            sx={{ my: 1, mx: 1.5 }}
          >
            50 pokémon
          </Link>
          <Link
            underline="none"
            variant="button"
            href="/weight"
            sx={{ my: 1, mx: 1.5 }}
          >
            Pokémon por peso
          </Link>
          <Link
            underline="none"
            variant="button"
            href="/grass"
            sx={{ my: 1, mx: 1.5 }}
          >
            Pokémon grass
          </Link>
          <Link
            underline="none"
            variant="button"
            href="/flying"
            sx={{ my: 1, mx: 1.5 }}
          >
            Pokémon flying
          </Link>
          <Link
            underline="none"
            variant="button"
            href="/inverted"
            sx={{ my: 1, mx: 1.5 }}
          >
            Invertidos
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
