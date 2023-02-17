import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'

function LandingPage() {
    return(
        <Container maxWidth="lg" component="main" sx={{ pt: 6, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Prueba Técnica Pasantía HP 2022-2023: PokeAPI
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Las vistas solicitadas se encuentran en el menú de navigación.
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          El <i>stack de tecnologías</i> utilizado para esta prueba es:
        </Typography>
        <Grid container mt={6} spacing={2} alignItems="center" justifyContent="center">
            <Grid item> 
                <Card sx={{ maxWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    image="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                    title="react"
                />
                </Card>
            </Grid>
            <Grid item>
            <Card sx={{ maxWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    image="https://v4.mui.com/static/logo.png"
                    title="MaterialUI"
                />
                </Card>
            </Grid>
            <Grid item>
            <Card sx={{ maxWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    image="https://framagit.org/uploads/-/system/project/avatar/28062/django.png"
                    title="django"
                />
                </Card>
            </Grid>
        </Grid>
      </Container>
    )
}

export default LandingPage;