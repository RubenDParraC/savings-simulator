"use client";

import { useState } from "react";

// external components
import { Formik } from "formik";
import { twMerge } from "tailwind-merge";

// schema
import { CreateIntentionSchema } from "./schema";

// components
import { Input } from "@/components/input/input";

export default function OnboardingPage() {
  const [success, setSuccess] = useState(false);
  const recaptchaToken = "OK";

  const handleSend = () => {
    if (recaptchaToken !== "OK") return alert("Recaptcha inválido");
    setSuccess(true);
  };

  return (
    <div className="w-screen flex flex-col gap-8 p-10 md:px-24">
      <h1 className="text-xl font-bold mb-4 text-slate-700">
        Apertura de Cuenta
      </h1>

      {success ? (
        <p className="text-green-600">
          Solicitud exitosa. Código: {crypto.randomUUID()}
        </p>
      ) : (
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: "",
            document: "",
            email: "",
          }}
          validationSchema={CreateIntentionSchema}
          onSubmit={() => {
            handleSend();
          }}
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
              <Input
                value={values.name}
                placeholder="ej. Juan Rodriguez"
                type="text"
                label="Nombre *"
                error={touched.name && errors.name ? errors.name : ""}
                onBlur={() => setFieldTouched("name")}
                onChange={handleChange("name")}
              />
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
              <Input
                value={values.email}
                placeholder="ej. email@email.com"
                label="Correo electrónico *"
                type="email"
                error={touched.email && errors.email ? errors.email : ""}
                onBlur={() => setFieldTouched("email")}
                onChange={handleChange("email")}
              />
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
