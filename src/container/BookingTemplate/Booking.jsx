import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import movieApi from "../../api/movieApi";
import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Snackbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Ticket from "./Ticket";
import { formatLongDate, formatShortDate } from "../../Utils/formatDate";
import { useFormSelect } from "./useForm";
import Seat from "./Seat";
import Payment from "./Payment";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPayment } from "../../Utils/validate";
import { useForm } from "react-hook-form";
import Success from "./Success";
const steps = ["Chose your tickets", "Chose your seats", "Payment"];
const useStyles = makeStyles((theme) => ({
  step: {
    width: "100%",
    "& .MuiStepLabel-label": {
      color: "#fff",
    },
    "& .MuiStepLabel-label.Mui-active, & .MuiStepLabel-label.Mui-completed": {
      color: "#ff2c1f",
    },
    "& .MuiStepIcon-root": {
      color: "#ccc",
    },
    "& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed": {
      color: "#ff2c1f",
    },
  },
  cardContent: {
    backgroundColor: "#032055",
    color: "#fff",
  },
  form: {
    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ff2c1f",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
      backgroundColor: "#001232",
    },
    "& .MuiSelect-select": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "& .MuiTextField-root": {
      width: "100%",
    },
  },
}));
const Booking = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [showTimes, setShowTimes] = useState();
  const { selectedValues, handleSelectChange } = useFormSelect();
  const [errors, setErrors] = useState({});
  const [showTimeId, setShowTimeId] = useState(null);
  const [selectedSeats, setAllSelectedSeats] = useState([]);
  const [openToast, setOpenToast] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: errorsPayment },
  } = useForm({
    resolver: yupResolver(schemaPayment),
  });
  const validate = (selectedItem) => {
    const temp = { ...errors };
    for (let [key, value] of Object.entries(selectedItem)) {
      temp[key] = value ? "" : "This field is required";
    }
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = Object.assign({}, completed);
    delete newCompleted[activeStep - 1];
    setCompleted(newCompleted);
    setAllSelectedSeats([]);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  const nextStep = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    handleComplete();
  };

  const handleNext = () => {
    if (activeStep === 0 && validate(selectedValues)) {
      nextStep();
    } else if (activeStep === 1 && selectedSeats.length > 0) {
      nextStep();
    } else if (activeStep === 1 && selectedSeats.length === 0) {
      setOpenToast(true);
    } else if (activeStep === 2) {
      nextStep();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  useEffect(() => {
    if (location.state?.id) {
      const fetchShowTimes = async () => {
        const result = await movieApi.getShowTimes(location.state.id);
        setShowTimes(result);
      };
      fetchShowTimes();
    } else {
      alert("Please select a movie to see showtimes.");
      history.push("/movies");
    }
  }, [history, location]);

  return (
    <Box pt={10} className={classes.form} component="form" autoComplete="off">
      <Container maxWidth="lg">
        <Box className={classes.step}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Grid container py={4} spacing={4}>
            {!allStepsCompleted() && (
              <Grid item xs={12} sm={4} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image={showTimes?.hinhAnh}
                    alt={showTimes?.biDanh}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      textTransform={"uppercase"}
                      fontWeight={"600"}
                    >
                      {showTimes?.tenPhim}
                    </Typography>
                    <Typography gutterBottom component="div">
                      Release date:{" "}
                      {formatLongDate(showTimes?.ngayKhoiChieu).date}
                    </Typography>
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      Rating:
                      <Rating
                        size="small"
                        value={showTimes?.danhGia / 2}
                        precision={0.5}
                        readOnly
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {allStepsCompleted() ? (
              <Success />
            ) : (
              <Grid item xs={12} sm={8} md={9}>
                {activeStep === 0 && (
                  <Ticket
                    showTimes={showTimes?.heThongRapChieu}
                    selectedValues={selectedValues}
                    handleSelectChange={handleSelectChange}
                    errors={errors}
                    onShowTimeId={setShowTimeId}
                  />
                )}
                {activeStep === 1 && (
                  <Seat
                    id={showTimeId}
                    selectedSeats={selectedSeats}
                    onSelect={setAllSelectedSeats}
                  />
                )}
                {activeStep === 2 && (
                  <Payment errors={errorsPayment} register={register} />
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, color: "#fff" }}
                    variant="outlined"
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    variant="contained"
                    onClick={
                      activeStep === 2 ? handleSubmit(handleNext) : handleNext
                    }
                    sx={{ mr: 1 }}
                  >
                    {activeStep === totalSteps() - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="filled"
      >
        <Alert
          onClose={handleCloseToast}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please chose seat!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Booking;
