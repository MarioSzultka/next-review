"use client";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    console.log("pre-render");
  }, []);
  return (
    <>
      <h1>Indie Gamer</h1>
      <p>Only the best indie games, reviewed for you</p>
    </>
  );
};

export default HomePage;
