import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [


  "wss://relay-jp.nostr.wirednet.jp",  //jp, Will
      "wss://nostr-relay.nokotaro.com",  //jp en, jack, aogi, awoi, syui, fiatjaf, karnage, nostr commits, kame3, verbiricha, Nostrchan2, news
      "wss://relay.damus.io",  //en jp, awoi, syui, Will, iefan, fiatjaf, karnage, news, niwaken, verbiricha
      "wss://yabu.me",  //en, jp, jack, awoi, takeshi, syui, yutaro, verbiricha, kimymt
      "wss://nostr.fediverse.jp",  //jp, awoi, syui, takeshi, snowden
      "wss://universe.nostrich.land?lang=ja",  //jp
      "wss://relay.nostr.band", //en jp, nachika, news, kaichiro, cpngirl

      //"wss://nostr.h3z.jp",  //en, jp + jack
      //"wss://nostr-paid.h3z.jp",  //jp, yutaro
      //"wss://nos.lol",  //en, jp,  news
      
      //"wss://nostr.wine",  //jp en, Vitor, fiatjaf, Terry
      //"wss://nostr.holybea.com",  //jp


  //"wss://nostrja-kari.heguro.com",  //jp
 
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
