import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [


  "wss://relay-jp.nostr.wirednet.jp",   //jp 
      "wss://yabu.me",                  //en, jp, (wirednet,heguro,h3z,holybea,ocha,fediverce)
      "wss://nostr.wine",               //jp en, Vitor, Terry
      "wss://relay.mostr.pub",          // nachika
      "wss://nos.lol",                  //en, jp  Nelly

      //
  /*"wss://relay.damus.io",           //en, jp  Nelly
  "wss://eden.nostr.land",
  "wss://nostr.fmt.wiz.biz",
  "wss://nos.lol",                  //en, jp,
  "wss://relay.snort.social",*/
      /*"wss://relay.nostr.band",         //en, jp nachika
      "wss://nostr.holybea.com",        //jp
      "wss://nostr.fediverse.jp",       //jp 
      "wss://nostr-relay.nokotaro.com", //jp, en 
      "wss://nostr.h3z.jp",             //en, jp 
      "wss://nostr-paid.h3z.jp",*/        //jp,
      



  /*"wss://nostrja-kari.heguro.com",  //jp
  "wss://relay.nostrich.land",  //jp en
  "wss://relay.nostrica.com",   //en
  "wss://welcome.nostr.wine",   //en jp
  "wss://nostr.h3y6e.com",
  "wss://monad.jb55.com:8080",
  "wss://relay.mostr.pub",*/

];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
