"use client";
import { useState } from "react";

import { usePathname } from "next/navigation";

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(!clicked);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <button
      className="px-3 py-2 border rounded-md bg-sky-700 hover:bg-sky-300
      hover:text-neutral-200 flex gap-2 items-center"
      onClick={handleClick}
    >
      {clicked ? "Copied" : "ShareLink"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-amber-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    </button>
  );
};

export default ShareLinkButton;
