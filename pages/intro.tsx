import React from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import { NotionRenderer } from "react-notion";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Button from "../components/common/Button";

const introToBlitmapNotionPage = "2df408b377b9416db217e39d53779fae";

export async function getStaticProps() {
  let data = [];

  let error = "";

  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/page/${introToBlitmapNotionPage}`
    );
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String("No data was found!");
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      docsData: data,
    },
  };
}

const Intro = ({ docsData }) => {
  return docsData ? (
    <>
      <PageHeader>
        <Header title="Intro | Blitmap Center" />
        <Title title="Intro" />

        <Subheader
          title="A Brief Introduction to Blitmap"
          body="Welcome to the Wiki for Blitmap, a community crafted sci-fantasy universe.."
        />
      </PageHeader>

      <PageContent>
        <div className="introNouns">
          <NotionRenderer blockMap={docsData} />
        </div>
      </PageContent>
    </>
  ) : (
    <></>
  );
};
export default Intro;
