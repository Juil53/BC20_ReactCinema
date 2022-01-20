import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#1f1f1f",
    color: "#ff2c1f",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //16:9
  },
  cardContent: {
    flewGrow: 1,
  },
  footer: {
    backgroundColor: "#1f1f1f",
    padding: "50px 0",
  },
}));

export { useStyles };
