import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [


  "wss://relay-jp.nostr.wirednet.jp",  //jp, Will
      "wss://yabu.me",  //en, jp, jack, awoi, takeshi, syui, yutaro, verbiricha
      "wss://nostr-relay.nokotaro.com",  //jp en, jack, awoi, syui, fiatjaf, karnage, nostr commits, kame3, verbiricha, Nostrchan2
      "wss://nostr.wine",  //jp en, Vitor, fiatjaf, Terry
      "wss://relay.nostr.band", //en jp, nachika, news, kaichiro
      "wss://relay.damus.io",  //en jp, awoi, syui, Will, iefan, fiatjaf, karnage, news, niwaken, verbiricha
      "wss://nostr.h3z.jp",  //en, jp + jack

    //"wss://nostr.holybea.com",   //jp, awoi, syui, chy, furoya
    //"wss://nostr.fediverse.jp",  //jp, awoi, syui, takeshi, snowden
      //"wss://nos.lol",  //jp en,  news

  //"wss://nostr-paid.h3z.jp",  //jp, yutaro
  //"wss://nostr.h3z.jp",  //en, jp + jack

  //"wss://nostr.holybea.com",  //jp
  //"wss://relay-jp.nostr.wirednet.jp",  //jp, rain
  //"wss://nostr-paid.h3z.jp",  //jp, yutaro
    //"wss://nostr-relay.nokotaro.com",  //jp en, nostr commits

  //"wss://nostrja-kari.heguro.com",  //jp
  //"wss://relay-jp.nostr.wirednet.jp",  //jp, ikuradon
  //"wss://nostr-paid.h3z.jp",  //jp, yutaro
  
  //"wss://nostr.fediverse.jp",  //jp
  
  //"wss://universe.nostrich.land?lang=ja",  //jp
 

  //1j  nostter
  //"wss://universe.nostrich.land?lang=ja",  //jp
  //"wss://relay.damus.io/",
  //"wss://relay-jp.nostr.wirednet.jp",  //jp

  //1j old
  /*"wss://nostrja-kari.heguro.com",  //jp
  "wss://nostr.fediverse.jp",  //jp
  "wss://nostr.wine",  //jp en, Vitor, fiatjaf
  "wss://relay-jp.nostr.wirednet.jp",  //jp
  "wss://relay.damus.io",  //en jp
  "wss://universe.nostrich.land?lang=ja",  //jp
  "wss://nostream.ocha.one",   //jp, ROBO358
  "wss://nostr-relay.nokotaro.com",  //jp en, aogi
  "wss://nostr.h3z.jp",  //jp + jack
  "wss://nostr.holybea.com",  //jp, syui, chy 
  */

  


  //"wss://yabu.me",  //en, jp

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
