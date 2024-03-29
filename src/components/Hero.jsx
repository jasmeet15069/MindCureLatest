import React from "react";
import mood from "../assets/mood.png";
import fire from "../assets/firebase.png";
import rec from "../assets/react.png";
import "../index.css";
function Hero() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="bg-white relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
            Track your emotions with <br className="lg:block hidden" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              MindCure
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                MindCure is a cross - platform for mental health and wellness application
                
              </p>
              
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src={rec}
                      alt="react logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className="hidden font-medium md:block dark:text-white">
                      React
                    </span>
                  </div>
                </a>
                <a className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src={fire}
                      alt="firebase logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className="hidden font-medium md:block dark:text-white">
                      Firebase
                    </span>
                  </div>
                </a>
              </div>

              <div className="dark:text-gray-300">
                ❤️
                <span>Made with Love in </span>
                <a className="font-semibold text-gray-700 dark:text-gray-200">
                  India
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0 lg:absolute -right-0 lg:w-6/12 lg:-top-20">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                ></div>
                <img
                  src={mood}
                  className="relative w-full scale-50"
                  alt="wath illustration"
                  loading="lazy"
                  width="512"
                  height="512"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block stroke-transparent stroke-0 ">
        <svg viewBox="0 0 1440 319" className="dark:fill-white fill-gray-900">
          <path
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
