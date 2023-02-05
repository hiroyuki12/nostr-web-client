import { useNostr, dateToUnix } from "nostr-react";

import {
  type Event as NostrEvent,
  getEventHash,
  getPublicKey,
  signEvent,
  nip19,
} from "nostr-tools";

const PostButton = () => {
  const { publish } = useNostr();

  const onPost = async () => {
    const privKey = prompt("Paste your private key:");

    if (!privKey) {
      alert("no private key provided");
      return;
    }

    const message = prompt("Enter the message you want to send:");

    if (!message) {
      alert("no message provided");
      return;
    }

    const { data: nsec } = nip19.decode(privKey);

    const event: NostrEvent = {
      content: message,
      kind: 1,
      tags: [],
      created_at: dateToUnix(),
      pubkey: getPublicKey(nsec.toString()),
    };

    event.id = getEventHash(event);
    event.sig = signEvent(event, nsec.toString());

    publish(event);
  };

  return <button onClick={onPost}>Post a message!</button>;
};

export default PostButton;
