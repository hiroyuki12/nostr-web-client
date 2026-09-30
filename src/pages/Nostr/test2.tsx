import { useNostrEvents } from "nostr-react";

const Test2 = () => {
  const { events } = useNostrEvents({
    filter: { kinds: [1], limit: 20 },
  });

  return (
    <ul>
      {events.map((event: { id?: string; content: string }) => (
        <li key={event.id}>
          <p>{event.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Test2;
