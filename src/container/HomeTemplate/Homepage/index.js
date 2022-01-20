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

const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const cardsSoon = [1, 2, 3, 4];

export default function HomePage() {
  const classes = useStyles();
  return (
    <div style={{position:'relative'}}>
      <Carousel />
      <CssBaseline />
      <main>
        {/* Coming this Week */}
        <div className={classes.container}>
          <Container maxWidth="xl">
            <Typography variant="h5" gutterBottom>
              Coming this Week
            </Typography>
            <hr />
            <Stack spacing={8} direction="row">
              <Button
                variant="contained"
                type="submit"
                style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
              >
                All Films
              </Button>
              <Button variant="contained" color="secondary">
                2D
              </Button>
              <Button variant="contained" color="warning">
                3D
              </Button>
              <Button variant="contained" color="warning">
                I-Max
              </Button>
            </Stack>
          </Container>
        </div>
        <div className={classes.container}>
          <Container maxWidth="xl" className={classes.cardGrid}>
            <Grid container spacing={4}>
              {cards.map((item) => (
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

        {/* Coming Soon */}
        <div className={classes.container}>
          <Container maxWidth="xl">
            <Typography variant="h5" gutterBottom>
              Coming Soon
            </Typography>
          </Container>
          <hr />
        </div>
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
