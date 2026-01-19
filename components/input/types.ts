/**
 * InputProps
 *
 * Extends native HTML input attributes to allow full flexibility
 * while adding optional label and error handling.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label displayed above the input.
   */
  label?: string;

  /**
   * Optional validation error message.
   */
  error?: string;
}
