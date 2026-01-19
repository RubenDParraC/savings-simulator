/**
 * ValuesTypeHandleCreateIntention
 *
 * Defines the shape of the form values used in the onboarding
 * (account opening) process.
 *
 * This interface is shared between Formik and validation logic
 * to ensure strong typing and consistency across the form flow.
 */
export interface ValuesTypeHandleCreateIntention {
  /**
   * User full name.
   */
  name: string;

  /**
   * User document number.
   * Stored as a string to preserve formatting and avoid numeric precision issues.
   */
  document: string;

  /**
   * User email address.
   */
  email: string;
}
