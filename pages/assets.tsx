/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { v4 as uuidv4 } from "uuid";
import assets from "../api/assets.json";
import SubheaderBodyButton from "../components/SubheaderBodyButton";

const Assets = () => {
  return (
    <div>
      <Header title="Assets | Nouns Center" />
      <Title title="Assets" />

      <SubheaderBodyButton
        title="Resource Hub"
        body="Repository of trait assets, fonts, and other resources you may need to work with Nouns. If you're still looking for something that's not here click the button and let me know."
        btnLink="https://stage-addressform.netlify.app/form/4e60a8c7-bbc9-4955-98eb-a70380ca4163"
        btnText="What's missing?"
      />

      <div className="bg-white rounded-md">
        <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-8 ">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 "
          >
            {assets.map((asset) => (
              <li key={uuidv4()}>
                <div className="space-y-4">
                  <p className="text-nouns-bg-blue font-medium text-lg text-nouns tracking-wide">
                    {asset.title}
                  </p>
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg max-h-48 h-48"
                      src={`/assets/${asset.image}`}
                      alt={asset.image}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="leading-6 font-medium space-y-1 flex  justify-between items-start">
                      <a
                        type="button"
                        className="inline-flex sm:cursor-pointer items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        download={asset.download}
                        href={
                          asset.download ? `/assets/${asset.file}` : asset.file
                        }
                        target={asset.download ? "_self" : "_blank"}
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assets;
