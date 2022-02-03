import * as React from "react";
import Carousel from "./Carousel";
import NewSlider from "./News";
import {
  Typography,
  CssBaseline,
  Container,
  Button,
  Stack,
} from "@mui/material";
import { useStyles } from "../../../styles";
import Movies from "./Movies";
import ComingMovies from "./ComingMovies";

// const cardsSoon = [1, 2, 3, 4];

export default function HomePage() {
  const classes = useStyles();
  return (
    <div style={{ position: "relative" }}>
      <CssBaseline />
      <Carousel />
      <main>
        {/* Coming this Week */}
        <div>
          <Container maxWidth="xl">
            <Typography sx={{ color: "#fff", py: 3 }} gutterBottom variant="h4">
              Coming this Week
            </Typography>
            <hr className={classes.hr}/>
            <Stack sx={{ py: 1 }} spacing={6} direction="row">
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
        <Movies />

        {/* Coming Soon */}
        <div>
          <Container maxWidth="xl">
            <Typography variant="h4" sx={{ color: "#fff", py: 3 }} gutterBottom>
              Coming Soon
            </Typography>
            <hr className={classes.hr}/>
          </Container>
        </div>

        {/* Coming Movie */}
        <ComingMovies />

        {/* News */}
        <NewSlider />
      </main>
      
    </div>
  );
}
