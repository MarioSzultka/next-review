"use client";
import { useEffect } from "react";
import Heading from "../components/Heading";

const HomePage = () => {
  useEffect(() => {
    console.log("pre-render");
  }, []);
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you</p>
    </>
  );
};

export default HomePage;
