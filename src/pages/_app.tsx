import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [

  "wss://relay-jp.nostr.wirednet.jp",   //jp 
      "wss://yabu.me",                  //jp, (wirednet,heguro,h3z,holybea,ocha,fediverce,c-stellar,kojira,wirednet,nokotaro) 
      "wss://nos.lol",                  // activitypub, en, jp  jack, Will, Nelly, 
//      "wss://relay.mostr.pub",          // nachika
//
//      "wss://relay.nostr.band",         //NIP-50 search, en, jp nachika
//      "wss://nostr.wine",               //jp en, Vitor, Terry
      
//  "wss://relay.damus.io",           //en, jp  Nelly
//      "wss://relayable.org",            //
//      

//   "wss://nostr.zbd.gg",

     "wss://r.kojira.io",
//     "wss://nostrbuzzs-relay.fly.dev/",
//     "wss://relayable.org",

//     "nostrja-kari-nip50.heguro.com",   // NIP-50
//      "wss://nrelay-jp.c-stellar.net",
//      "wss://nrelay.c-stellar.net",
      
/*  "wss://relay.damus.io",           //en, jp  Nelly
  "wss://nostr.fmt.wiz.biz",
  "wss://nos.lol",                  //en, jp,
  "wss://relay.snort.social",
      "wss://nostr.holybea.com",        //jp
      "wss://nostr.fediverse.jp",       //jp 
      "wss://nostr-relay.nokotaro.com", //jp, en 
      "wss://nostr.h3z.jp",             //en, jp 
      "wss://nostr-paid.h3z.jp",        //jp,
  "wss://eden.nostr.land",  // 2023/8/26 going away
*/      

//"wss://relay.nostr.moctane.com",



  /*"wss://relay.nostrich.land",  //jp en
  "wss://nostrja-kari.heguro.com",  //jp
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
