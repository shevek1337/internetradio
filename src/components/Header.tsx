import React from "react";
import useDarkMode from "../hooks/useDarkMode";

// icons
import Moon from "../assets/icons/Moon";
import Sun from "../assets/icons/Sun";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className="dark:bg-black">
      <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#test"
        >
          <span className="text-xl dark:text-white font-black">
            InternetRadio.ge
          </span>
        </a>
        <nav className="md:mr-auto md:ml-8 md:pt-1 flex flex-wrap text-base space-x-4">
          <a
            className="dark:text-white hover:text-purple-700 dark:hover:text-purple-500 font-bold"
            href="#test"
          >
            Browse
          </a>
          <a
            className="dark:text-white hover:text-purple-700 dark:hover:text-purple-500 font-bold"
            href="#test"
          >
            Discover
          </a>
          <a
            className="dark:text-white hover:text-purple-700 dark:hover:text-purple-500 font-bold"
            href="#test"
          >
            Podcasts
          </a>
          <a
            className="dark:text-white hover:text-purple-700 dark:hover:text-purple-500 font-bold"
            href="#test"
          >
            Other
          </a>
        </nav>
        <button
          onClick={() => setTheme(colorTheme)}
          className="inline-flex items-center bg-gray-100 hover:bg-gray-200 font-bold dark:bg-gray-600 dark:text-white border-0 py-1 px-2 focus:outline-none rounded"
        >
          {colorTheme === "light" ? (
            <Sun width={20} height={20} />
          ) : (
            <Moon width={20} height={20} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
