import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [

  //"wss://relay-jp.nostr.wirednet.jp",  //jp

  "wss://nostr.h3z.jp",  //jp + jack
  //"wss://nostr-paid.h3z.jp",  //jp

  //"wss://nostr.holybea.com",  //jp
  
  //"wss://nostr-relay.nokotaro.com",  //jp en



  //"wss://nostream.ocha.one",  //jp
  
  //"wss://nostrja-kari.heguro.com",  //jp

  //"wss://universe.nostrich.land?lang=ja",  //jp

  //"wss://relay.damus.io",  //en jp
  "wss://nostr.fediverse.jp",  //jp en, takeshi, nostr commits
  //"wss://universe.nostrich.land?lang=zh&lang=ja",  //jp cn
  //"wss://nostr.wine",  //jp en
  //"wss://nos.lol",  //jp en
  //"wss://nostr.fediverse.jp",  //jp en
  //"wss://relay.nostrich.land",  //jp en
  //"wss://relay.nostrica.com",  //en
  //"wss://welcome.nostr.wine",  //en jp
  //"wss://nostr.h3y6e.com",
  //"wss://monad.jb55.com:8080",
  //"wss://eden.nostr.land",

];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
