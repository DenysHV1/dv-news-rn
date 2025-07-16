import * as Yup from "yup";

export const filmSchema = Yup.object().shape({
  title: Yup.string().required("Film title is required").min(2, "Too short"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Too short"),
  posterUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Poster URL is required"),
  releaseDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .required("Release date is required"),
});
