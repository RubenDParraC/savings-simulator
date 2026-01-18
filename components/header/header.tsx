"use client";

import { useEffect, useState } from "react";

// external components
import { twMerge } from "tailwind-merge";

// components
import Link from "next/link";

// external components
import { MdClose, MdHome, MdMenu } from "react-icons/md";

// utils
import { buttonsList } from "./utils";

function Header() {
  const [open, setOpen] = useState<boolean>(false); // State to track the mobile menu open/close
  const [isVisible, setIsVisible] = useState<boolean>(true); // State to track header visibility
  const [lastScrollY, setLastScrollY] = useState<number>(0); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show the header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Dependency to rerun on scroll position change

  return (
    <div
      className={twMerge(
        "w-full h-20 px-10 lg:px-32 py-6 bg-zinc-800 transition-transform duration-300 rounded-b-xl top-0 left-0 z-50 fixed max-w-364 right-0",
        isVisible
          ? "transform translate-y-0 shadow-sm shadow-slate-500"
          : "transform -translate-y-full"
      )}
      style={{ position: "fixed", margin: "0 auto" }}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <Link href="/">
          <MdHome className="w-6 h-6 text-slate-500 hover:shadow-lg cursor-pointer hover:shadow-slate-700" />
        </Link>
        <div className="hidden lg:flex flex-row gap-5 items-center">
          {buttonsList.map((item, index) => (
            <Link
              key={`buttonlist-lg-${+index}`}
              href={item.href}
              className="text-slate-200 font-medium uppercase text-xs"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <MdMenu
          className="w-6 h-6 text-slate-200 hover:shadow-lg cursor-pointer block lg:hidden"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={twMerge(
          open ? "block" : "hidden",
          "lg:hidden w-screen h-screen bg-zinc-800 absolute top-0 left-0 bottom-0 right-0 p-10 z-50"
        )}
      >
        <div className="w-full flex flex-row justify-between items-center mb-10">
          <Link href="/">
            <MdHome
              className="w-6 h-6 text-slate-500 hover:shadow-lg cursor-pointer hover:shadow-slate-700"
              onClick={() => setOpen(!open)}
            />
          </Link>
          <div className="flex flex-row items-center gap-3">
            <MdClose
              className="w-6 h-6 text-slate-200 hover:shadow-lg cursor-pointer block lg:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {buttonsList.map((item, index) => (
            <Link
              key={`buttonlist-lg-${+index}`}
              href={item.href}
              className="text-slate-200 font-medium uppercase text-xs"
              onClick={() => setOpen(!open)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
