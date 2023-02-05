import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import { nip19 } from "nostr-tools";

const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current), // all new events from now
      kinds: [1],
    },
  });

  const { data: npub } = nip19.decode(
    "npub1afn5vtgrygclqkpl573qcnukuyfzcnw3vg799pqw9fqtzx7dl8gseltyrs"
  );

  const { data: userData, isLoading } = useProfile({
    pubkey: npub.toString(),
  });
  console.log(isLoading);

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
              {event.pubkey} posted: {event.content}
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
