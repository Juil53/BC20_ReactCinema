import * as yup from "yup";
export const schemaPayment = yup.object().shape({
  firstName: yup.string().required("Please input your first name."),
  lastName: yup.string().required("Please input your last name."),
  expirationTime: yup
    .string()
    .required("Please input expiration time.")
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
      "Please input a valid expiration time."
    ),
  cardId: yup
    .number()
    .required("Card ID is required.")
    .min(9, "Card ID must be exactly 9 digits.")
    .max(9, "Card ID must be exactly 9 digits."),
  code: yup
    .number()
    .required("Code is required.")
    .min(4, "Please input 4 digits.")
    .max(4, "Please input 4 digits."),
});
