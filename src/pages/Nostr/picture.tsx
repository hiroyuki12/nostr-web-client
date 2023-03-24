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
      since: 0,
      //limit: 450,
    },
  });

  const npub = "f40832e26b1d12f8a27717b606996baef68bc4b6b86c4a35ca827f6fbcbf511e";

  const { data: userData, isLoading } = useProfile({
    pubkey: npub.toString(),
  });
  console.log(isLoading);
  console.log(dateToUnix(now.current));
  //console.log({event.pubkey});

  const renderImageList = (list) => {
    const followList = events.tags;  // event[0].tags
    const followList2 = list.tags;  // list[0].tags
    const posts = events.map((event, index) => {
      //const tmp = event.tags[0][1];  //hex
      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              Following List:::::::::<br />
              {event.tags[0][1]}<br />
              {followList}<br />
              {followList2}<br />
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
