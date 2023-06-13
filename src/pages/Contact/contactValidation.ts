import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),
  agreeTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
