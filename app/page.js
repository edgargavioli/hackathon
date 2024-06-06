"use client"

import Link from "next/link";
import React from "react";

export default function Home() {
  const variavel = "TESTE"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/pages/authentication">Login</Link>
    </main>
  );
}
