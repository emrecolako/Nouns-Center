/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";
import Title from "../components/Title";
import talentFromJSON from "../api/artists.json";
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa";
import { getRandomNounPic } from "../utils";
import Subheader from "../components/Subheader";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Button from "../components/common/Button";
import { fetchTalentFormData, TALENT_FORM_ID } from "../utils/talent-form-data-fetching";

export const getServerSideProps = async (context) => {
  let talentDataFromAPI = [];
  try {
	talentDataFromAPI = await fetchTalentFormData();
  } catch(e) {
    console.log(e);
  }

  return {
      props: {talentFromServer: talentDataFromAPI}
  };
}

const Talent = (props) => {
  const {talentFromServer} = props;

  const talent = talentFromJSON;
  // const talent = talentFromJSON.concat(talentFromServer);
  return (
    <>
      <PageHeader>
        <Header title="Artists | Blit Center" />
        <Title title="Artists" />

        <Subheader body="Seventeen artists contributed artwork for the hundred original Blitmaps. " />
      </PageHeader>

      <PageContent>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {talent.map((person, idx) => (
            <li
              key={person.bio}
              className="col-span-1  bg-white rounded-lg shadow-md divide-y divide-gray-200 flex flex-col justify-between"
            >
              <div className="w-full flex items-center justify-between p-6 space-x-6 ">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium text-nouns tracking-wider">
                      {person.name !== "" ? person.name : "-"}
                    </h3>

                    
                  </div>

                  <p className="mt-1 text-gray-500 text-sm 	justify-content: center;">{person.bio}</p>
                </div>
              </div>

              {(person.twitter || person.discord) && (
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200 bg-gray-100 rounded-b-lg	">
                    {person.twitter !== "" && (
                      <div className="w-0 flex-1 flex cursor-pointer hover:bg-gray-100 transition duration-150 rounded-bl-lg ">
                        <a
                          href={`https://twitter.com/${person.twitter}`}
                          target="_blank"
                          rel="noreferrer"
                          className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500 truncate px-2"
                        >
                          <TwitterIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3 truncate">
                            @{person.twitter}
                          </span>
                        </a>
                      </div>
                    )}

                    {person.discord !== "" && person.discordId !== "" && (
                      <div className="-ml-px w-0 flex-1 flex cursor-pointer hover:bg-gray-100 transition duration-150 rounded-br-lg ">
                        <a
                          href={` https://discord.com/users/${person.discordId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500 truncate px-2"
                        >
                          <DiscordIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3 lowercase truncate">
                            {person.discord}
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </PageContent>
    </>
  );
};

export default Talent;
