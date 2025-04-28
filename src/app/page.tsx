import About from "@/components/Homepage/About";
import Agencies from "@/components/Homepage/Agencies";
import Brands from "@/components/Homepage/Brands";
import Creators from "@/components/Homepage/Creators";
import Hero from "@/components/Homepage/Hero";
import React from "react";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Creators />
      <Brands />
      <Agencies />
    </div>
  );
}

export default Home;
