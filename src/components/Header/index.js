"use client";
import Link from "next/link";
import Logo from "./Logo";

import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

// Dummy Icon Components
const MoonIcon = () => <span>🌙</span>;
const SunIcon = () => <span>☀️</span>;

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(null); // State to manage iframe URL

  const toggle = () => {
    setClick(!click);
  };

  const handleLinkClick = () => {
    setClick(false); // Hide the navbar when a link is clicked
  };

  // Function to handle Game link clicks
  const handleGameClick = (url) => {
    setIframeUrl(url); // Set iframe URL
    handleLinkClick(); // Close the mobile menu if open
  };

  return (
    <>
      {/* Header Component */}
      <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
        <Logo />
        <button
          className="inline-block sm:hidden z-50 fixed top-6 right-6"
          onClick={toggle}
          aria-label="Hamburger Menu"
          style={{ background: "transparent", border: "none" }}
        >
          <div className="w-8 h-6 cursor-pointer relative">
            <div
              className="absolute top-0 left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform duration-300"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            />
            <div
              className="absolute top-1/2 left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-opacity duration-300"
              style={{
                opacity: click ? 0 : 1,
                transform: "translateY(-50%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-transform duration-300"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`fixed inset-0 bg-light/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-transform ease duration-300 ${
            click ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link
            href="/"
            className="mr-2"
            onClick={() => {
              handleLinkClick();
              setIframeUrl(null);
            }}
          >
            Home
          </Link>

          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/thadam/")
            }
            className="mb-6 text-2xl"
          >
            Thadam
          </button>

          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/aadi/")
            }
            className="mb-6 text-2xl"
          >
            Aadi
          </button>
          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/oli/")
            }
            className="mb-6 text-2xl"
          >
            Oli
          </button>
          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/kumizhi/")
            }
            className="mb-6 text-2xl"
          >
            Kumizhi
          </button>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-10 h-10 ease flex items-center justify-center rounded-full p-2",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>

        {/* Desktop Navigation */}
        <nav
          className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden sm:flex
            fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
        >
          <Link
            href="/"
            className="mr-2"
            onClick={() => {
              handleLinkClick();
              setIframeUrl(null);
            }}
          >
            Home
          </Link>

          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/thadam/")
            }
            className="mx-2"
          >
            Thadam
          </button>
          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/aadi/")
            }
            className="mx-2"
          >
            Aadi
          </button>
          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/oli/")
            }
            className="mx-2"
          >
            Oli
          </button>
          <button
            onClick={() =>
              handleGameClick("https://karky.in/payilcourses/games/kumizhi/")
            }
            className="mx-2"
          >
            Kumizhi
          </button>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>
      </header>

      <main className="w-full h-screen mt-0 flex items-start justify-center">
        {iframeUrl ? (
          <iframe
            src={iframeUrl}
            className="w-full h-full" // Make the iframe take the full height
            title="External Game"
            frameBorder="0"
          />
        ) : (
          <div className="p-10 text-center">
            <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
              Welcome!
            </h1>
            <p className="text-2xl sm:text-3xl mt-4 font-medium text-gray-700 dark:text-white">
              Select a game to play.
            </p>
          </div>
        )}
      </main>
    </>
  );
};

export default Header;
