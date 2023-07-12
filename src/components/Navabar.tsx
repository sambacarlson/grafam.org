import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navabar = () => {
  const [toggles, setToggles] = useState<{
    dropdown: boolean;
    about: boolean;
    resources: boolean;
  }>({ dropdown: false, about: false, resources: false });
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div className="flex items-center w-[24%] sm:w-[12%] lg:w-[8%] xl:w-28">
          <Image
            src="/grafam_logo.jpg"
            alt="grafam logo"
            width={500}
            height={500}
            className="drop-shadow-light dark:drop-shadow-dark object-contain"
          />
        </div>
        <button
          onClick={() =>
            setToggles((prevState) => ({
              ...prevState,
              about: false,
              resources: false,
              dropdown: !prevState.dropdown,
            }))
          }
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`${
            !toggles.dropdown && "hidden"
          } items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {/* 
            ============== ABOUT =================
            */}

            <li>
              <button
                onClick={() =>
                  setToggles((prevState) => ({
                    ...prevState,
                    about: !prevState.about,
                  }))
                }
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="z-10 flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                About{" "}
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`${
                  !toggles.about && "hidden"
                } z-10 font-normal bg-gray-50 w-full dark:bg-gray-700 shadow bg-opacity-80 dark:bg-opacity-80 md:absolute md:w-[20vw] md:max-w-[300px]`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400 md:dark:text-gray-300"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/about/beliefs"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Beliefs and Values
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about/constitution"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Constitution
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/branches"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Branches
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/leadership"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Leadership
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                onClick={() =>
                  setToggles((prevState) => ({
                    ...prevState,
                    about: false,
                    resources: !prevState.resources,
                  }))
                }
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Resources{" "}
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <Link
                href="/partnership"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Partnership
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ======== CONTENTS OF RESOURCES ========== */}
      <div
        id="mega-menu-full-dropdown"
        className={` ${!toggles.resources && "hidden"} mt-1 border-gray-200 shadow-sm border-y dark:border-y-0 dark:border-gray-600 `}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-800 dark:text-white gap-3 sm:grid-cols-2 md:px-6">
          <ul className="space-y-3">
            <li>
              <Link
                href="/resources/values"
                className="block p-3 md:p-5 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Beliefs and Values</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  What Does it mean to be a Grafamite? What are our values.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/resources/constitution"
                className="block p-3 md:p-5 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Constitution</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  How do we operate as a mission? How do we do what we do?
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/resources/branches"
                className="block p-3 md:p-5 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">GRAFAM worldwide</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Our branches contry-wide and worldwide
                </span>
              </Link>
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <Link
                href="resources/leadership"
                className="block p-3 md:p-5 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Pastors & Leaders</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  GAFAM pastors and leaders
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="resources/eagletv"
                className="block p-3 md:p-5 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Eagle tv</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Our cable and satelite television
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="resources/discipleship"
                className="block p-3 md:p-5 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Discipleship program</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  How we strive at fulfilling the great commission
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
