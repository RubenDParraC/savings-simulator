# Simulador de Ahorro – Prueba Técnica Frontend

Este proyecto implementa un simulador de ahorro y un flujo de apertura de cuenta, desarrollado con Next.js (App Router), React, TypeScript y Tailwind CSS.
El objetivo es demostrar la construcción de una aplicación frontend moderna, clara y escalable, simulando escenarios reales de negocio sin depender de servicios externos.

## Tecnologías utilizadas

- Next.js 14+ (App Router)
- React
- TypeScript
- Tailwind CSS
- Formik + Yup (formularios y validaciones)
- ESLint / Prettier
- Intl API (formato de moneda)

## Navegación principal

- `/products` → Catálogo de productos financieros
- `/simulator` → Simulador de ahorro
- `/onboarding` → Apertura de cuenta

## Funcionalidades implementadas

1. **Catálogo de productos (`/products`)**

- Listado de productos financieros a partir de datos locales simulados.
- Filtro por nombre o tipo.
- Búsqueda en tiempo real con debounce para mejorar el rendimiento.
- Renderizado mediante componentes reutilizables (`ProductCard`).

  1. **Criterios cumplidos:**
     - Filtros dinámicos
     - UX fluida
     - Código desacoplado y tipado

2. **Simulador de ahorro (`/simulator`)**
   Permite calcular el ahorro estimado a partir de:

- Monto inicial
- Aporte mensual
- Número de meses
  1. **Lógica de cálculo del interés**
     El cálculo se basa en una fórmula simple con una tasa de interés anual fija del 5%, prorrateada según la duración del ahorro:
     ```
     totalContribution = initial + (monthly * months)
     interest = totalContribution * 0.05 * (months / 12)
     result = totalContribution + interest
     ```
  2. **Validaciones y experiencia de usuario**
     - Los inputs solo aceptan valores numéricos mayores o iguales a cero.
     - La validación se realiza al momento de calcular, centralizando la lógica.
     - Mensajes de error claros y amigables.
     - El resultado se muestra con formato de moneda COP usando `Intl.NumberFormat`.

3. **Onboarding / Apertura de cuenta (`/onboarding`)**
   Formulario que solicita:

- Nombre
- Documento
- Correo electrónico
- Campo oculto de reCAPTCHA simulado 1. **Validaciones**
  _ Validación de campos mediante **Formik + Yup**.
  _ El formulario solo puede enviarse si es válido.
  _ Validación del token de reCAPTCHA (valor esperado: **"OK"**). 2. **Flujo**
  _ Si el token de reCAPTCHA no es válido, se muestra un error visual.
  _ Si el formulario es válido, se muestra un mensaje de éxito.
  _ Se genera un código de solicitud simulado usando `crypto.randomUUID()`.
  Este flujo simula el comportamiento de una integración real con backend sin depender de servicios externos.

## Arquitectura y diseño

1. **Shell de la aplicación**
   El archivo `app/layout.tsx` actúa como aplicación contenedora (shell), siendo responsable de:

- Layout global
- Header y navegación
- Estilos compartidos
  Las secciones **onboarding**, **products** y **simulator** se comportan como dominios funcionales independientes dentro del mismo proyecto.

## Plus – Arquitectura de Micro-frontends (Propuesta)

Como mejora opcional, la aplicación podría evolucionar hacia una arquitectura de micro-frontends, separando cada dominio funcional en aplicaciones independientes:

- Onboarding
- Productos
- Simulador de ahorro

El layout principal actuaría como shell, integrando los micro-frontends mediante herramientas como Module Federation.
La comunicación entre ellos se realizaría a través de contratos de API compartidos y eventos globales, evitando acoplamientos directos y facilitando despliegues independientes.
Esta propuesta permite escalar la solución y distribuir el desarrollo entre múltiples equipos sin modificar la arquitectura actual.

## Instalación y ejecución

1. Instalar dependencias:
   `npm install`
2. Ejecutar en modo desarrollo:
   `npm run dev`
3. Abrir en el navegador:
   `http://localhost:3000`
