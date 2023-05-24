import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [


  "wss://relay-jp.nostr.wirednet.jp",  //jp, Will
  "wss://yabu.me",  //jp, chy, takeshi, syui, yutaro
    //"wss://nostr-relay.nokotaro.com",  //jp en, aogi, karnage, nostr commits
    //"wss://relay.damus.io",  //en jp, Will, iefan, karnage, news, niwaken

  //"wss://nostr.h3z.jp",  //jp + jack
  //"wss://nostr.fediverse.jp",  //jp, takeshi
  //"wss://nostr-paid.h3z.jp",  //jp, yutaro

  //"wss://nostr.holybea.com",  //jp
  //"wss://relay-jp.nostr.wirednet.jp",  //jp, rain
  //"wss://nostr-paid.h3z.jp",  //jp, yutaro
    //"wss://nostr-relay.nokotaro.com",  //jp en, nostr commits

  //"wss://nostrja-kari.heguro.com",  //jp
  //"wss://relay-jp.nostr.wirednet.jp",  //jp, ikuradon
  //"wss://nostr-paid.h3z.jp",  //jp, yutaro
  
  //"wss://nostr.fediverse.jp",  //jp
  
  //"wss://universe.nostrich.land?lang=ja",  //jp
 

  //1j
  /*"wss://nostrja-kari.heguro.com",  //jp
  "wss://nostr.fediverse.jp",  //jp
  "wss://nostr.wine",  //jp en
  "wss://relay-jp.nostr.wirednet.jp",  //jp
  "wss://relay.damus.io",  //en jp
  "wss://universe.nostrich.land?lang=ja",  //jp
  "wss://nostream.ocha.one",   //jp, ROBO358
  "wss://nostr-relay.nokotaro.com",  //jp en, aogi
  "wss://nostr.h3z.jp",  //jp + jack
  "wss://nostr.holybea.com",  //jp, syui, chy  */


  //"wss://yabu.me",  //jp
  


  //"wss://nostr.fediverse.jp",  //jp

  //"wss://relay.damus.io",  //en jp, Will
  //"wss://relay.nostr.band", //en jp
  //"wss://universe.nostrich.land?lang=zh&lang=ja",  //jp cn
  //"wss://nostr.wine",  //jp en
  //"wss://nos.lol",  //jp en
  //"wss://relay.nostrich.land",  //jp en
  //"wss://relay.nostrica.com",  //en
  //"wss://welcome.nostr.wine",  //en jp
  //"wss://nostr.h3y6e.com",
  //"wss://monad.jb55.com:8080",
  //"wss://eden.nostr.land",
  //"wss://relay.snort.social",

];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
