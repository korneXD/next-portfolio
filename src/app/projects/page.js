"use client";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Portfolio | Projekteim";
  }, []);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center py-8">
      <Navbar />
      <div className="flex h-fit w-[90%] flex-col items-center justify-center py-12">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
