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
  const heads = traits.heads;
  const originals = traits.originals;
  const siblings = traits.siblings;
  const glasses = traits.glasses;
  const bodies = traits.bodies;
  const accessories = traits.accessories;

  const assetsPage = (
    <Link leavesPage={false} text="assets page" url="/assets" />
  );

  return (
    <>
      <PageHeader>
        <Header title="Blitnauts | Blitmap Center" />
        <Title title="Blitnauts" />

        <Subheader
          title="1699 Blitnauts for 1699 Blitmaps"
          body={
            <p>
             Blitnauts are the first expansion pack of the Blitmap universe, free to anyone holding a Blitmap at the time of launch. They are highly customizable avatar-vessels for the original Blitmaps whose story will evolve with the expansions of the Blitmap universe.
            </p>
          }
        />
        <Button link="/assets/assets_png.zip" text="Download Blitmaps" download />
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
                  <img
                    src={`/blitmaps/originals/${originals.image}.png`}
                    alt="original"
                    href={`https://www.blitmap.com/details?id=${originals.image}`}
                  />
                  
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {originals.name}
                    {/* link={`https://www.blitmap.com/details?id=${originals.image}`} */}
                  </p>
                </div>
              ))}
          </div>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {siblings &&
              siblings.map((siblings) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/blitmaps/siblings/${siblings.image}.png`}
                    alt="original"
                    href={`https://www.blitmap.com/details?id=${siblings.image}`}
                  />
                  
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {siblings.name}
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
