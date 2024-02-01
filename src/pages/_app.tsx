import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NostrProvider } from "nostr-react";

const relayUrls = [

  "wss://relay-jp.nostr.wirednet.jp",   //jp 
  "wss://yabu.me",                  //jp, (wirednet,heguro,h3z,holybea,ocha,fediverce,c-stellar,kojira,nokotaro) 
  "wss://nos.lol",                  // activitypub, en, jp  jack, Will, Nelly, 
  "wss://relay.mostr.pub",          // nachika, karnage, misskey.io, unnerv.jp, 
  "wss://relay.snort.social", 

//  "wss://cagliostr.compile-error.net",  // C++
//  "wss://nostr.compile-error.net",      // Go

//  "wss://bostr.nokotaro.com",

 
//  "wss://r.kojira.io",
//  "wss://relay.nostr.wirednet.jp", 
//  "wss://riray.nostr1.com",
//  "wss://ren.nostr1.com",
//  "wss://nostr.fediverse.jp",       //jp 
//  "wss://nostrja-kari.heguro.com",  //jp
//  "wss://nostr.holybea.com",        //jp
  "wss://nostr-relay.nokotaro.com", //jp, en 
//  "wss://nrelay.c-stellar.net",
//  "wss://nrelay-jp.c-stellar.net",

//  "wss://relay.nostr.moctane.com",
//  "wss://relay-jp.nostr.moctane.com",
//  "wss://nostream.ocha.one",

//  "wss://relay.damus.io",           //en, jp  Nelly
//  "wss://nostr.wine",               //jp en, Vitor, Terry
//  "wss://purplepag.es",             // kind0
//  "wss://relayable.org",            //

//  "wss://relay.nostr.band",         //NIP-50 search, kind0, en, jp nachika
      
//  "nostrja-kari-nip50.heguro.com",   // NIP-50
      
//  "wss://bostr/nokotaro.work",

// twitch
 "wss://irc-ws.chat.twitch.tv/",
 "wss://pubsub-edge.twitch.tv/v1 ",

/* 
   "wss://nostr.fmt.wiz.biz",
   "wss://relay-jp.shino3.net/",
   "wss://nostr.h3z.jp",             //en, jp 
   "wss://nostr-paid.h3z.jp",        //jp,
   "wss://eden.nostr.land",  // 2023/8/26 going away
   "wss://relay.nostrich.land",  //jp en
   "wss://relay.nostrica.com",   //en
   "wss://welcome.nostr.wine",   //en jp
   "wss://nostr.h3y6e.com",
   "wss://monad.jb55.com:8080",
   "wss://relay.mostr.pub",
   "wss://nostrbuzzs-relay.fly.dev/",
   "wss://nostr.zbd.gg",
   "wss://relay.nostrplebs.com/",
*/      

//  "wss://relay.shitforce.one",     // mostr
//  "wss://nostr-us.coifundit.com",  // mostr

];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
