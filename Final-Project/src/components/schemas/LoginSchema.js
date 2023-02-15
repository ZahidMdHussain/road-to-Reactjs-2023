import * as Yup from "yup";

export const LogInSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
});
