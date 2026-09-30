import { useNostr, dateToUnix } from "nostr-react";

import {
  finalizeEvent,
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

    const decodedKey = nip19.decode(privKey);
    if (decodedKey.type !== "nsec") {
      alert("invalid private key");
      return;
    }

    const event = finalizeEvent({
      content: message,
      kind: 1,
      tags: [],
      created_at: dateToUnix(),
    }, decodedKey.data);

    publish(event);
  };

  return <button className="btn" onClick={onPost}>Post a message!</button>;
};

export default PostButton;
