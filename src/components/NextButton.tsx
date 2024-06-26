import { useNostr, dateToUnix } from "nostr-react";

import {
  type Event as NostrEvent,
  getEventHash,
  getPublicKey,
  signEvent,
  nip19,
} from "nostr-tools";

const NextButton = () => {
  const { publish } = useNostr();

  const onPost = async () => {
    alert("Next Button Pushed");
    return;
  };

  return <button onClick={onPost}>Load Next Post!</button>;
};

export default NextButton;
