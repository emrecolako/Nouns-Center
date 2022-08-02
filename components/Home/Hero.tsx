/* eslint-disable @next/next/no-img-element */
import React from "react";
import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import NounishButton from "./NounishButton";
import Footer from "../Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const searchClient = algoliasearch(
  "PGIH0KF5F5",
  "faf1987de1d83c02e82fbf9bfd7ca5a9"
);


const action = () => {
  //on click action to pass to button
};

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden flex justify-around tracking-wider pt-10">
        <div className="relative pb-16 sm:pb-24 ">
          <main className="mx-auto sm:px-4 tracking-wider text-black ">
            <div className="text-center flex flex-col justify-between h-full xs:px-6 sm:px-0">
              <h1 className=" font-extrabold text-5xl md:text-6xl text-nouns tracking-wider flex gap-4 justify-center">
                Welcome to Blitmap Center
              </h1>

              <div className="mt-6 sm:mb-14" id="autocomplete"></div>

              <div className="mt-5 sm:mx-auto grid grid-cols-2 xs:gap-3 sm:gap-8 sm:justify-center md:mt-8 lg:grid-flow-col">
                <NounishButton
                  text="Introduction"
                  image="genesis.png"
                  buttonId={"one"}
                  buttonAction={action}
                  path="intro"
                  color="bg-[#]"
                />
                <NounishButton
                  text="Blitmaps"
                  image="BlitmapOG.png"
                  buttonId={"two"}
                  buttonAction={action}
                  path="blitmaps"
                  color="bg-[#028940]"
                />
                <NounishButton
                  text="Blitnauts"
                  image="Blitnauts.png"
                  buttonId={"three"}
                  buttonAction={action}
                  path="funding"
                  color="bg-[#A734A3]"
                />
                <NounishButton
                  text="Derivatives"
                  image="derivatives.png"
                  buttonId={"four"}
                  buttonAction={action}
                  path="projects"
                  color="bg-blue-base"
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hero;
