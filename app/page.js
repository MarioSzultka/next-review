"use client";
import { useEffect } from "react";
import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "@/components/Images/Image";

const HomePage = () => {
  useEffect(() => {
    console.log("pre-render");
  }, []);
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you</p>
      <div className="mx-auto w-80 sm:w-full bg-amber-600 rounded-lg hover:shadow-2xl">
        <Link
          href="/reviews/hollow-knight"
          className="flex flex-col sm:flex-row sm:items-center"
        >
          <Image src={"/images/hollow-knight.jpg"} />
          <h3 className="text-md text-center font-orbitron font-semibold sm:grow">
            Hollow Knight
          </h3>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
