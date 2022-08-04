/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { v4 as uuidv4 } from "uuid";
import traits from "../api/traits.json";

import Subheader from "../components/Subheader";
// import Link from "next/link";
import Link from "../components/Link";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Button from "../components/common/Button";

const Traits = () => {
  const originals = traits.originals;

  const assetsPage = (
    <Link leavesPage={false} text="assets page" url="/assets" />
  );

  return (
    <>
      <PageHeader>
        <Header title="Blitmaps | Blit Center" />
        <Title title="Blitmaps" />

        <Subheader
          title="100 Originals | 1600 Siblings"
          body={
            <p>
             Blitmap started as an art project where 17 artists made 100 original 32 x 32-pixel art pieces and minters could combine any of those two to create a sibling. The siblings were new pieces that combined the composition of the first and the colour palette of the second original. The name of the sibling becomes the combination of both originals. The collection was completed on July 2, 2021.
            </p>
          }
        />
        {/* <Button link="/assets/assets_png.zip" text="Download Blitmaps" download /> */}
      </PageHeader>

      <PageContent>
        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl mb-8">
          <h1 className="text-5xl text-nouns mb-6 text-center text-black">
            Originals
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {originals &&
              originals.map((originals) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                    
                  <a 
                    href={`https://www.blitmap.com/details?id=${originals.image}`} target="_blank"  rel="noreferrer">
                    
                    <img
                    src={`/traits/blitmaps/originals/${originals.image}.png`}
                    alt="original"
                  />
                  </a>
                  
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {originals.name} 
                    {/* by {originals.artist} */}
                    {/* link={`https://www.blitmap.com/details?id=${originals.image}`} */}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Traits;
