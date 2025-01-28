"use client";
import { useEffect } from "react";
import Navbar from "../components/navbar";

export default function Contact() {
  useEffect(() => {
    document.title = "Portfolio | Kontakt";
  }, []);
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Navbar />
      <h1 className="text-primary font-nohemiLight text-2xl">Kontakt</h1>
    </div>
  );
}
