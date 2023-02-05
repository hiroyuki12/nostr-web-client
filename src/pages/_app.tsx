import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [
  "wss://relay.damus.io",
  "wss://nostr-pub.wellorder.net",
  // "wss://relay.nostr.ch",
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
