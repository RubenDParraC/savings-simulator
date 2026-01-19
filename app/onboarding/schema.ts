// external components
import * as Yup from "yup";

/**
 * CreateIntentionSchema
 *
 * Validation schema for the onboarding (account opening) form.
 * This schema ensures that all required fields are present and
 * validates the email format using Yup's built-in validators.
 */
export const CreateIntentionSchema = Yup.object().shape({
  /**
   * User full name.
   * - Trims leading/trailing spaces
   * - Required field
   */
  name: Yup.string().trim().required("El nombre es obligatorio."),

  /**
   * User document number.
   * - Stored as string to preserve formatting and avoid numeric issues
   * - Trims leading/trailing spaces
   * - Required field
   */
  document: Yup.string().trim().required("El documento es obligatorio."),

  /**
   * User email address.
   * - Trims leading/trailing spaces
   * - Validates standard email format
   * - Required field
   */
  email: Yup.string()
    .trim()
    .email("El correo electrónico no tiene un formato válido.")
    .required("El correo electrónico es obligatorio."),
});
