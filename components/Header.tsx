import React from "react";
import Head from "next/head";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>{title || "Blit Center"}</title>
      <link rel="icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta name="title" content="Blit Center" />
      <meta
        name="description"
        content="The knowledge center and resource hub for Blitmap. Learn about the project, the community and ways to get involved. A fork of nouns.center by @cdt maintained by @emrecolako"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blit.center/" />
      <meta property="og:title" content="Blit Center" />
      <meta
        property="og:description"
        content="The knowledge center and resource hub for Blitmap. Learn about the project, the community and ways to get involved. A fork of nouns.center by @cdt maintained by @emrecolako"
      />
      {/* <meta property="og:image" content="https://nouns.center/og-image.png" /> */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://blitmap.center/" />
      <meta property="twitter:title" content="Blit Center" />
      <meta
        property="twitter:description"
        content="The knowledge center and resource hub for Blitmap. Learn about the project, the community and ways to get involved. A fork of nouns.center by @cdt maintained by @emrecolako"
      />
      <meta
        property="twitter:image"
        content=""
      />
    </Head>
  );
};

export default Header;
