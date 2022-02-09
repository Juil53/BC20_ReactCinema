import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPayment } from "../../Utils/validate";
const payments = [
  {
    title: "MasterCard",
    imgUrl: "./images/mastercard.png",
  },
  {
    title: "Visa",
    imgUrl: "./images/visa.png",
  },
  {
    title: "PayPal",
    imgUrl: "./images/paypal.png",
  },
];
const Payment = () => {
  const [activeMethod, setActiveMethod] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPayment),
  });
  return (
    <Box>
      <Typography gutterBottom>Payment method</Typography>
      <Stack direction={"row"} spacing={2} mb={2}>
        {payments.map((item, i) => (
          <Button
            variant="outlined"
            key={i}
            sx={[
              activeMethod === i && {
                border: "1px solid red",
              },
            ]}
            onClick={() => setActiveMethod(i)}
          >
            <img
              src={item.imgUrl}
              alt={item.title}
              style={{ width: "100px" }}
            />
          </Button>
        ))}
      </Stack>
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            {...register("firstName")}
          />
          {errors.firstName && (
            <Typography variant="p">{errors.firstName.message}</Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            {...register("lastName")}
          />
          {errors.lastName && (
            <Typography variant="p">{errors.lastName.message}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Card Number"
            variant="outlined"
            {...register("cardId")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img
                    src={payments[activeMethod].imgUrl}
                    alt={payments[activeMethod].title}
                    style={{ width: "50px" }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {errors.cardId && (
            <Typography variant="p">{errors.cardId.message}</Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Expiration Date"
            variant="outlined"
            {...register("expirationTime")}
          />
          {errors.expirationTime && (
            <Typography variant="p">{errors.expirationTime.message}</Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="CVV"
            variant="outlined"
            {...register("code")}
          />
          {errors.code && (
            <Typography variant="p">{errors.lastName.code}</Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payment;
