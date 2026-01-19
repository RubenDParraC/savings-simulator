"use client";

import { useEffect, useState } from "react";

// External utilities
import { twMerge } from "tailwind-merge";

// Next.js components
import Link from "next/link";

// Icons
import { MdClose, MdHome, MdMenu } from "react-icons/md";

// Navigation config
import { buttonsList } from "./utils";

/**
 * Header
 *
 * Global navigation component.
 * Provides access to the main application pages and
 * includes responsive behavior for mobile devices.
 *
 * Features:
 * - Fixed header with hide/show behavior on scroll
 * - Desktop navigation menu
 * - Mobile menu with toggle
 */
function Header() {
  /**
   * Controls the mobile menu open/close state.
   */
  const [open, setOpen] = useState<boolean>(false);

  /**
   * Controls header visibility based on scroll direction.
   */
  const [isVisible, setIsVisible] = useState<boolean>(true);

  /**
   * Stores the last scroll position to detect scroll direction.
   */
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  /**
   * Handles header visibility on scroll.
   * - Hides the header when scrolling down
   * - Shows the header when scrolling up
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    /**
     * Cleanup scroll listener on unmount.
     */
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={twMerge(
        /**
         * Fixed header styles.
         * Includes smooth transition when hiding/showing on scroll.
         */
        "w-full h-20 px-10 lg:px-32 py-6 bg-zinc-800 transition-transform duration-300 rounded-b-xl top-0 left-0 z-50 fixed max-w-364 right-0",
        isVisible
          ? "translate-y-0 shadow-sm shadow-slate-500"
          : "-translate-y-full",
      )}
      style={{ position: "fixed", margin: "0 auto" }}
    >
      <div className="w-full flex flex-row justify-between items-center">
        {/**
         * Home navigation icon
         */}
        <Link href="/">
          <MdHome className="w-6 h-6 text-slate-500 hover:shadow-lg cursor-pointer hover:shadow-slate-700" />
        </Link>

        {/**
         * Desktop navigation menu
         */}
        <div className="hidden lg:flex flex-row gap-5 items-center">
          {buttonsList.map((item, index) => (
            <Link
              key={`buttonlist-lg-${index}`}
              href={item.href}
              className="text-slate-200 font-medium uppercase text-xs"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/**
         * Mobile menu toggle button
         */}
        <MdMenu
          className="w-6 h-6 text-slate-200 hover:shadow-lg cursor-pointer block lg:hidden"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/**
       * Mobile navigation menu
       * Rendered as a full-screen overlay.
       */}
      <div
        className={twMerge(
          open ? "block" : "hidden",
          "lg:hidden w-screen h-screen bg-zinc-800 absolute top-0 left-0 bottom-0 right-0 p-10 z-50",
        )}
      >
        <div className="w-full flex flex-row justify-between items-center mb-10">
          <Link href="/">
            <MdHome
              className="w-6 h-6 text-slate-500 hover:shadow-lg cursor-pointer hover:shadow-slate-700"
              onClick={() => setOpen(false)}
            />
          </Link>

          <MdClose
            className="w-6 h-6 text-slate-200 hover:shadow-lg cursor-pointer block lg:hidden"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-5">
          {buttonsList.map((item, index) => (
            <Link
              key={`buttonlist-mobile-${index}`}
              href={item.href}
              className="text-slate-200 font-medium uppercase text-xs"
              onClick={() => setOpen(false)}
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
