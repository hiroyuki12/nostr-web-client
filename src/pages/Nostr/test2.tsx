import { useSubscribe } from 'nostr-hooks';

const Test2 = () => {
  const { events, eose, invalidate } = useSubscribe({
    relays: ['wss://relay-jp.nostr.wirednet.jp'],
    filters: [{ kinds: [1], limit: 20, }],
  });

  if (!events && !eose) return <p>Loading...</p>;

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <p>{event.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Test2;
