import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font dark:bg-black">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#test"
        >
          <span className="ml-3 text-xl dark:text-white">InternetRadio.ge</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
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
        <button className="inline-flex items-center bg-gray-100 dark:bg-gray-600 dark:text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
