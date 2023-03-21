import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import { nip19 } from "nostr-tools";

const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      //since: dateToUnix(now.current), // all new events from now
      since: 1679413822, // 1679413822 2023/03/22 0:50
      //since: 1679409822, //
      kinds: [1],
    },
  });

  const { data: npub } = nip19.decode(
    "npub1gdjc46gns2lw0harclpkpvf6tmyvygnrtu4j4tfaua0yhvsd4yrq38fkq3"
  );

  const { data: userData, isLoading } = useProfile({
    pubkey: npub.toString(),
  });
  console.log(isLoading);
  //console.log(dateToUnix(now.current));
  //console.log({event.pubkey});

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
        {userData ? (
          events.map((event) => (
            <p key={event.id}>
              posted: {event.content}  {event.created_at}
            </p>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Test;
