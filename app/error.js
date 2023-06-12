"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset} className="button-name">Intentar nuevamente</button>
    </div>
  );
};

export default Error;
