import { useNostr, dateToUnix } from "nostr-react";

import {
  type Event as NostrEvent,
  getEventHash,
  getPublicKey,
  nip19,
} from "nostr-tools";

interface NextButtonProps {
  onClick: () => void;
}

const NextButton = ({ onClick }: NextButtonProps) => {
  return <button className="btn btn-secondary" onClick={onClick}>Load Next Post!</button>;
};

export default NextButton;
