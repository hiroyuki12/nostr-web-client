import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import { nip19 } from "nostr-tools";
import moment from 'moment';

const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      kinds: [3],
      authors: ["43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906"],
      //authors: '2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2',

      //authors: '12d2c9f0c9eb8f8792b8ef8b509121859dd90a3779f1af308fba60bcb1d9e107',
      //since: dateToUnix(now.current), // all new events from now
      //since: 1679413822, // 1679413822 2023/03/22 0:50
      //since: 1679479111,
      since: 0,
      limit: 2,
    },
  });

  const { data: npub } = nip19.decode(
    "npub1gdjc46gns2lw0harclpkpvf6tmyvygnrtu4j4tfaua0yhvsd4yrq38fkq3"
  );

  const { data: userData, isLoading } = useProfile({
    pubkey: npub.toString(),
  });
  console.log(isLoading);
  console.log(dateToUnix(now.current));
  //console.log({event.pubkey});

  const renderImageList = (list) => {
    const posts = events.map((event, index) => {
      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              Following List:::::::::<br />
              {event.tags[0][1]}<br />
              {event.tags[1][1]}<br />
            </div>
          </div>
        </li>
      );
    });
    return posts;
  }

  return (
    <>
      <div style={{ backgroundColor: "white", color: "black" }}>
        <div>
          <p>Name: {isLoading ? "Loading..." : userData?.name}</p>
          <p>Public key: {isLoading ? "Loading..." : userData?.npub}</p>
          <p>Picture URL: {isLoading ? "Loading..." : userData?.picture}</p>
        </div>
        <div>
          <PostButton />
        </div>
        <ul>{renderImageList(events)}</ul>
      </div>
    </>
  );
};

export default Test;
