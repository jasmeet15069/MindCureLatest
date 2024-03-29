import React from "react";
import {
  ChartBarIcon,
  ChartPieIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  NewspaperIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
function Features() {
  return (
    <div
      data-aos="fade-up"
      id="Features"
      className=" dark:bg-white bg-gray-900"
    >
      <section className="py-12 dark:bg-white bg-gray-900 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight dark:text-gray-900  text-gray-400 sm:text-4xl xl:text-5xl font-pj">
              Make every day count
            </h2>
            <p className="mt-4 text-base leading-7 dark:text-gray-600  text-gray-400  sm:mt-8 font-pj">
              Track your mood, find your balance
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
              <ShieldCheckIcon
                className="mx-auto dark:text-gray-900  text-gray-400"
                width="46"
                height="46"
              />
              <h3 className="mt-12 text-xl font-bold dark:text-gray-900 text-gray-400 font-pj">
                Security
              </h3>
              
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <ChartBarIcon
                className="mx-auto dark:text-gray-900  text-gray-400"
                width="46"
                height="46"
              />
              <h3 className="mt-12 text-xl font-bold dark:text-gray-900 text-gray-400 font-pj">
                Analytics
              </h3>
             
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <GlobeAltIcon
                className="mx-auto dark:text-gray-900  text-gray-400"
                width="46"
                height="46"
              />
              <h3 className="mt-12 text-xl font-bold dark:text-gray-900 text-gray-400 font-pj">
                Accessibility
              </h3>
              
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
              <NewspaperIcon
                className="mx-auto dark:text-gray-900  text-gray-400"
                width="46"
                height="46"
              />
              <h3 className="mt-12 text-xl font-bold dark:text-gray-900 text-gray-400 font-pj">
                Journal
              </h3>
              
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <SquaresPlusIcon
                className="mx-auto dark:text-gray-900  text-gray-400"
                width="46"
                height="46"
              />
              <h3 className="mt-12 text-xl font-bold dark:text-gray-900 text-gray-400 font-pj">
                Open Source
              </h3>
             
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <ChartPieIcon
                className="mx-auto dark:text-gray-900  text-gray-400"
                width="46"
                height="46"
              />
              <h3 className="mt-12 text-xl font-bold dark:text-gray-900 text-gray-400 font-pj">
                Visualization
              </h3>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
