import * as yup from "yup";
export const schemaPayment = yup.object().shape({
  firstName: yup.string().required("Please input your first name."),
  lastName: yup.string().required("Please input your last name."),
  expirationTime: yup
    .string()
    .required("Please input expiration time.")
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
      "Please input the expiration time in dd/mm/yyy format."
    ),
  cardId: yup
    .string()
    .required("Card ID is required.")
    .matches(/^[0-9]+$/, "Phone must be only digits.")
    .min(9, "Card ID must be exactly 9 digits.")
    .max(9, "Card ID must be exactly 9 digits."),
  code: yup
    .string()
    .required("Code is required.")
    .matches(/^[0-9]+$/, "Phone must be only digits.")
    .min(4, "Please input 4 digits.")
    .max(4, "Please input 4 digits."),
});
export const schemaUser = yup.object().shape({
  taiKhoan: yup.string(),
  matKhau: yup
    .string()
    .required("Please input password.")
    .min(6, "Password minimum 6 characters."),
  hoTen: yup.string().required("Please input  name."),
  soDt: yup
    .string()
    .required("Phone cannot be left blank")
    .matches(/^[0-9]+$/, "Phone must be only digits.")
    .min(10, "Please input 10 digits.")
    .max(10, "Please input 10 digits."),
  email: yup
    .string()
    .required("Email is required.")
    .matches(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
      "Email format invalid."
    ),
  maLoaiNguoiDung: yup.string().required("Email is required."),
});
