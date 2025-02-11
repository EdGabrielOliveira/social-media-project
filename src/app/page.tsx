import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 pt-4">
      <h1>Dev Buttons</h1>
      <div className="flex flex-col">
        <a href="landing">Landing PAGE</a>
        <a href="auth/admin">Feed PAGE</a>
        <a href="auth/login">Login PAGE</a>
        <a href="auth/register">Register PAGE</a>
      </div>
    </div>
  );
}
