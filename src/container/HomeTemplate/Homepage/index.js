import * as React from "react";
import Carousel from "./Carousel";
import NewSlider from "./News";
import Footer from "../_component/Footer";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Container,
  Button,
  Stack,
} from "@mui/material";
import { useStyles } from "../../../styles";
import Movies from "./Movies";


const cardsSoon = [1, 2, 3, 4];

export default function HomePage() {
  const classes = useStyles();
  return (
    
    <div style={{position:'relative'}}>
      <CssBaseline />
      <Carousel />
      <main>
        {/* Coming this Week */}
        <div>
          <Container maxWidth="xl">
            <Typography sx={{color:"#fff",py:3}} gutterBottom variant="h4">
              Coming this Week
            </Typography>
            <hr />
            <Stack sx={{py:1}} spacing={6} direction="row">
              <Button
                variant="contained"
                type="submit"
                style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
              >
                All Films
              </Button>
              <Button variant="contained" color="inherit">
                2D
              </Button>
              <Button variant="contained" color="inherit">
                3D
              </Button>
              <Button variant="contained" color="inherit">
                I-Max
              </Button>
            </Stack>
          </Container>
        </div>

        {/* MovieList */}
        <Movies/>

        {/* Coming Soon */}
        <div className={classes.container}>
          <Container maxWidth="xl">
            <Typography variant="h4" sx={{color:"#fff",py:3}} gutterBottom>
              Coming Soon
            </Typography>
            <hr />
          </Container>

        </div>

        {/* Coming Movie */}
        <div className={classes.container}>
          <Container maxWidth="xl" className={classes.cardGrid}>
            <Grid container spacing={4}>
              {cardsSoon.map((item) => (
                <Grid item key={item} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading!
                      </Typography>
                      <Typography>Describe Anything</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Book Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        {/* News */}
        <NewSlider/>
      </main>
      <Footer />
    </div>
  );
}
