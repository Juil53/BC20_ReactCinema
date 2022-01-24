import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: "#001232",
    width: "100%",
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
}));

export { useStyles };
