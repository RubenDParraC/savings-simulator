"use client";

import { useState } from "react";

// External libraries
import { Formik } from "formik";
import { twMerge } from "tailwind-merge";

// Validation schema
import { CreateIntentionSchema } from "./schema";

// UI components
import { Input } from "@/components/input/input";

/**
 * OnboardingPage
 *
 * This page represents the account opening (onboarding) flow.
 * It includes a form with validation, a simulated reCAPTCHA check,
 * and a success state with a generated request code (UUID).
 */
export default function OnboardingPage() {
  /**
   * Controls whether the form was successfully submitted.
   * Once true, the success message is displayed instead of the form.
   */
  const [success, setSuccess] = useState(false);

  /**
   * Simulated reCAPTCHA token.
   * In a real-world scenario, this value would come from a backend
   * or a third-party reCAPTCHA service.
   */
  const recaptchaToken = "OK";

  /**
   * Handles the final submission logic.
   * Validates the reCAPTCHA token and updates the success state.
   */
  const handleSend = () => {
    if (recaptchaToken !== "OK") {
      alert("Recaptcha inválido");
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="w-screen flex flex-col gap-8 p-10 md:px-24">
      <h1 className="text-xl font-bold mb-4 text-slate-700">
        Apertura de Cuenta
      </h1>

      {/**
       * Conditional rendering:
       * - If the form was successfully submitted, show a success message.
       * - Otherwise, render the onboarding form.
       */}
      {success ? (
        <p className="text-green-600">
          Solicitud exitosa. Código: {crypto.randomUUID()}
        </p>
      ) : (
        <Formik
          /**
           * Initial form values.
           * These match the fields required for the onboarding flow.
           */
          initialValues={{
            name: "",
            document: "",
            email: "",
          }}
          /**
           * Yup validation schema.
           * Handles required fields and email format validation.
           */
          validationSchema={CreateIntentionSchema}
          /**
           * Form submission handler.
           * The actual business logic is delegated to `handleSend`.
           */
          onSubmit={handleSend}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleSubmit,
            handleChange,
            setFieldTouched,
          }) => (
            <div className="flex flex-col gap-3">
              {/**
               * Name input field
               */}
              <Input
                value={values.name}
                placeholder="ej. Juan Rodriguez"
                type="text"
                label="Nombre *"
                error={touched.name && errors.name ? errors.name : ""}
                onBlur={() => setFieldTouched("name")}
                onChange={handleChange("name")}
              />

              {/**
               * Document input field
               * Restricted to numeric values and non-negative numbers.
               */}
              <Input
                value={values.document}
                placeholder="ej. 123456780"
                type="number"
                min={0}
                label="Documento *"
                error={
                  touched.document && errors.document ? errors.document : ""
                }
                onBlur={() => setFieldTouched("document")}
                onChange={handleChange("document")}
              />

              {/**
               * Email input field
               * Validated using Yup's email validator.
               */}
              <Input
                value={values.email}
                placeholder="ej. email@email.com"
                label="Correo electrónico *"
                type="email"
                error={touched.email && errors.email ? errors.email : ""}
                onBlur={() => setFieldTouched("email")}
                onChange={handleChange("email")}
              />

              {/**
               * Submit button
               * Disabled until the form is valid according to the schema.
               */}
              <button
                disabled={!isValid}
                onClick={() => handleSubmit()}
                className={twMerge(
                  !isValid && "opacity-50",
                  "bg-slate-700 hover:bg-slate-500 text-white py-2 rounded cursor-pointer",
                )}
              >
                Solicitar Apertura
              </button>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
}
