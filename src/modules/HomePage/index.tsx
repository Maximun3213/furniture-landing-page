import Hero from "@/modules/HomePage/Hero";
import Interesting from "@/modules/HomePage/Interesting";
import Live from "@/modules/HomePage/Live";
import Solution from "@/modules/HomePage/Solution";
import React from "react";

function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <Solution />
      <Interesting />
      <Live />
    </>
  );
}

export default HomePage;
