/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Script from "next/script";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0Q29XY193X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-6K115N5T7V');
          `}
      </Script>

      <Header title="Blit Center" />

      <Hero />
    </>
  );
}
