import React from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import { NotionRenderer } from "react-notion";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Button from "../components/common/Button";

const MiscNotionPage = "a2cc13c0ff154063a05f8ca963a22a00";

export async function getStaticProps() {
  let data = [];

  let error = "";

  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/page/${MiscNotionPage}`
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

const Misc = ({ docsData }) => {
  return docsData ? (
    <>
      <PageHeader>
        <Header title="Misc | Blit Center" />
        <Title title="Misc" />

        <Subheader
          title=""
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
export default Misc;
