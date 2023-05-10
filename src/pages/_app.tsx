import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [
  //"wss://relay.damus.io",  //eng

  "wss://relay-jp.nostr.wirednet.jp",  //jp

  //"wss://nostr.h3z.jp",  //jp
  //"wss://nostr-paid.h3z.jp",  //jp

  //"wss://nostr.holybea.com",  //jp

  //"wss://nostr.fediverse.jp",  //jp

  //"wss://universe.nostrich.land?lang=zh&lang=ja",  //eng
  //"wss://universe.nostrich.land?lang=ja",  //eng
  //"wss://nostr.wine",  //eng
  //"wss://nostr.h3y6e.com",

  //"wss://monad.jb55.com:8080",
  //"wss://eden.nostr.land",
  //"wss://nos.lol",  //eng
  //"wss://relay.nostrica.com",  //eng

  //"wss://nostr-relay.nokotaro.com",  //eng
  //"wss://nostr.fediverse.jp",
  //"wss://nostream.ocha.one",
  //"wss://nostrja-kari.heguro.com",  //eng
  //"wss://relay.nostrich.land",  //eng

];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
