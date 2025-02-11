import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 pt-4">
      <h1>Painel do Desenvolvedor</h1>
      <div className="flex flex-col gap-2">
        <Link href="/landing/" target="_blank" className="underline">
          Ir para Landing
        </Link>
        <Link href="/auth/admin/" target="_blank" className="underline">
          Ir para Feed
        </Link>
        <Link href="/auth/login/" target="_blank" className="underline">
          Ir para Login
        </Link>
        <Link href="/auth/register/" target="_blank" className="underline">
          Ir para Register
        </Link>
      </div>
    </div>
  );
}
