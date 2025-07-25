import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
