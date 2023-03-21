import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [
  //"wss://relay.damus.io",

  "wss://relay-jp.nostr.wirednet.jp",
  "wss://nostr.h3z.jp",
  "wss://nostr.fediverse.jp",
  "wss://nostr.holybea.com",
  "wss://universe.nostrich.land?lang=zh&lang=ja",
  "wss://universe.nostrich.land?lang=ja",
  "wss://nostr-paid.h3z.jp",
  "wss://nostr.wine",
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
