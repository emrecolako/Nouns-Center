import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Timeline from "../components/Timeline/Timeline";
import Subheader from "../components/Subheader";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Button from "../components/common/Button";

const History = () => {
  return (
    <>
      <PageHeader>
        <Header title="History | Nouns Center" />
        <Title title="History" />

        <Subheader
          title="Moments &#38; Milestones"
          body="A timeline of Blitmaps major milestones and noteworthy moments that have happened. Feel free to suggest any missing events."
        />
        <Button
          text="What's missing?"
          link="https://forms.gle/8w4QgYnFMmUXZcocA"
        />
      </PageHeader>

      <PageContent>
        <Timeline />
      </PageContent>
    </>
  );
};

export default History;
