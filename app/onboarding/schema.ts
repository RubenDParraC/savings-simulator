// external components
import * as Yup from "yup";

export const CreateIntentionSchema = Yup.object().shape({
  name: Yup.string().required("Campo requerido."),
  document: Yup.string().required("Campo requerido."),
  email: Yup.string().required("Campo requerido."),
});
