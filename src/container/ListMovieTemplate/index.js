import React, { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  Stack,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

export default function ListMoviePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const history = useHistory();

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const params = {
      soTrang: page,
      soPhanTuTrenTrang: 8,
    };
    const fetchMovies = async () => {
      try {
        const result = await movieApi.getAllMovies(params);
        setMovies(result.items);
        setTotalPage(result.totalPages);
        history.push({
          search: queryString.stringify(params),
        });
      } catch (err) {
        alert(err.message);
      }
    };
    fetchMovies();
  }, [page, totalPage, history]);

  return (
    <Box pt="96px" pb={4} sx={{ backgroundColor: "#001232" }}>
      <Container>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {movies?.map((movie) => (
            <Grid
              key={movie.maPhim}
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Card
                variant="outlined"
                sx={{
                  flex: 1,
                  cursor: "pointer",
                  color: "#fff",
                  backgroundColor: "#001232",
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "#000",
                }}
                onClick={() => history.push(`/movies/${movie.maPhim}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={movie.hinhAnh}
                  alt={movie.tenPhim}
                />
                <CardContent>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      textAlign: "center",
                    }}
                  >
                    {movie.tenPhim}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} mt={2}>
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            sx={{
              margin: "0 auto",
              ".MuiPaginationItem-root": {
                color: "#fff",
              },
            }}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Container>
    </Box>
  );
}
