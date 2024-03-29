import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="dark:bg-gray-900 bg-white  sticky top-[100vh]">
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
        <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MindCure
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://mshivam019.vercel.app/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mshivam019/mood-swinger/blob/main/Privacy%20Policy.md"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mshivam019/mood-swinger/blob/main/LICENSE"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="mailto:mshivam019@gmail.com"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://github.com/mshivam019/mood-swinger"
              className="hover:underline"
            >
              MindCure™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
