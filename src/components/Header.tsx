import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className="text-gray-600 body-font dark:bg-black">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#test"
        >
          <span className="ml-3 text-xl dark:text-white">InternetRadio.ge</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-200	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 dark:text-white" href="#test">
            First Link
          </a>
          <a className="mr-5 dark:text-white" href="#test">
            Second Link
          </a>
          <a className="mr-5 dark:text-white" href="#test">
            Third Link
          </a>
          <a className="mr-5 dark:text-white" href="#test">
            Fourth Link
          </a>
        </nav>
        <button
          onClick={() => setTheme(colorTheme)}
          className="inline-flex items-center bg-gray-200 font-bold dark:bg-gray-600 dark:text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
        >
          {colorTheme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;
