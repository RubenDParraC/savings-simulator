// external components
import * as Yup from "yup";

export const CreateIntentionSchema = Yup.object().shape({
  name: Yup.string().trim().required("El nombre es obligatorio."),
  document: Yup.string().trim().required("El documento es obligatorio."),
  email: Yup.string()
    .trim()
    .email("El correo electrónico no tiene un formato válido.")
    .required("El correo electrónico es obligatorio."),
});
