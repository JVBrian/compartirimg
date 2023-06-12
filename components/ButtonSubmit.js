"use client";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const ButtonSubmit = ({ value }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="button-name upload">
      {pending ? "Cargando..." : value}
    </button>
  );
};

export default ButtonSubmit;
