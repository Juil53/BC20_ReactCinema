import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: "#001232",
    width: "100%",
  },
  navbtn: {
    "&:hover": {
      color: "#ff2c1f",
    },
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    border: "1px solid #001232",
    
    "&:hover": {
      border: "1px solid #ff2c1f",
      borderRadius: "10px",
      boxShadow: "1px 8px 20px grey",
      transform: "translateY(-10px)",
    },
  },
  cardContainer: {
    height: "300px",
    overflow: "hidden",
  },

  cardMedia: {
    opacity: 0.8,
    cursor: "pointer",
    width: "100%",
    height: "450px",
    objectFit: "cover",
    objectPosition: "center top",
    borderRadius: "10px",
    backgroundColor: "#001232",
    transition: ".5s",
    overflow: "hidden",
    "&:hover": {
      opacity: 1,
    },
  },
  cardContent: {
    backgroundColor: "#032055",
    color: "white",
    flewGrow: 1,
    
  },
  footer: {
    backgroundColor: "#032055",
    textAlign: "center",
    paddingBottom: "30px",
    "&:hover": {
      color: "#ff2c1f",
    },
  },
  icon: {
    cursor: "pointer",
    "&:hover": {
      color: "#ff2c1f",
    },
  },
  hr: {
    marginTop: "1rem",
    marginBottom: "1rem",
    background: "white",
  },
}));

export { useStyles };
