import React from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import { NotionRenderer } from "react-notion";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Button from "../components/common/Button";

const introToBlitmapNotionPage = "c868403101944d49846e5a1e27b7a6bd";

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
        <Header title="Intro | Blit Center" />
        <Title title="Intro" />

        <Subheader
          title="What is Blitmap?"
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
