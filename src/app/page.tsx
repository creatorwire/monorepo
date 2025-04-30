"use client";

import About from "@/components/Homepage/About";
import Agencies from "@/components/Homepage/Agencies";
import Brands from "@/components/Homepage/Brands";
import Creators from "@/components/Homepage/Creators";
import Hero from "@/components/Homepage/Hero";
import axios from "axios";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    const checkHealth = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/health`);
      } catch (error) {
        console.error("Health check error:", error);
      }
    };
    checkHealth();
  }, []);
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
