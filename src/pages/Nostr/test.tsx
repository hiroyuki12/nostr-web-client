import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import NextButton from "@/components/NextButton";
import { nip19 } from "nostr-tools";
import moment from 'moment';
import parse from 'html-react-parser';
import Pictures from './Pictures';


const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  let untilValue = dateToUnix(now.current);  //all new events from now
  untilValue = 1706720463;  //paging

  let noteCount = 0;

//  untilValue = 1704284862;  // moster cannot open
//  untilValue = 1704158604;  // cashu sats snort
//  untilValue = 1704037251;  // lightning invoice 1 sat pay snort
//  untilValue = 1703564079;  // googleusercontent.com/ img fix
//  untilValue = 1703568307;  // img threads NG
//  untilvalue = 1702648801;  // 9735 content empty ng
//  untilvalue = 1700648893;  // bookmark
//  untilvalue = 1700654092;  // long-form content
//  untilValue = 1700351963;  // NG link
//  untilValue = 1700358511;  // NG insta link
//  untilValue = 1700282586;  // kind 10005 channel list?
//  untilValue = 1699350541;  // Nostrasia Day 1 Summary Nosli
//  untilValue = 1698731466;  // Invalid byte sequence NG
//  untilValue = 1698636018;  // kind 6666
//  untilValue = 1698415786;  // Zap Add Avatar
//  untilValue = 1698228483;  // link NG
//  untilValue = 1697641710;  // :bow:  FreeFrom
//  untilValue = 1697598212;  // Zap
//  untilValue = 1697536841;  // NG
//  untilValue = 1697471297;  // kind:4550
//  untilValue = 1697385059;  // channel message nostter
//  untilValue = 1697448782;  // kind:9735
//  untilValue = 1697295574;  // repost NG. id nip19.neventEncode(event: EventPointer) fix
//  untilValue = 1697289857;  // will nos.lol
//  untilValue = 1697223369;  // jack nos.lol
//  untilValue = 1697282603;  // fiatjaf yabu.me
//  untilValue = 1697247223;  // reply image NG
//  untilValue = 1697247497;  // tag relay
//  untilValue = 1697112060;  // #r NG
//  untilValue = 1696632885;  // Metadata
//  untilValue = 1696502429;  // jpg NG
//  untilValue = 1696412926;  // LIVE
//  untilValue = 1696316415;  // nevent1
//  untilValue = 1696105738;  // quote_nevent njump fix
//  untilValue = 1696119569;  // njump.me nevent fix
//  untilValue = 1696110614;  // url # NG
//  untilValue = 1695999820;  // Apple Music OGP
//  untilValue = 1695438407;  // to link NG fix
//  untilValue = 1695370850;  // tiktok
//  untilValue = 1695066723;  // kind:10001 pin channel
//  untilValue = 1694945195;  // repost 1694945166
//  untilValue = 1694683832;  // generic repost, Nostrasia Hackathon
//  untilValue = 1694687538;  // zap request
//  untilValue = 1694359339;  // search kind:30040
//  untilValue = 1694326407;  // kind:10030
//  untilValue = 1694194192;  // kind:30025 LongForm
//  untilValue = 1694055016;  // \n\n NG
//  untilValue = 1694003737;  // nostr:naddr1 zap.stream
//  untilValue = 1693796212;  // #e(reply NG fix
//  untilValue = 1693566199;  // generic repost channel message
//  untilValue = 1693300143;  // channel creation
//  untilValue = 1692922942;  // nak install
//  untilValue = 1692694772;  // nostr:note1 (quote)
//  untilValue = 1692649004;  // mp4
//  untilValue = 1691662709;  // repost mov NG
//  untilValue = 1691665815;  // tag:h nowplaying
//  untilValue = 1691507297;  // repost NG
//  untilValue = 1691417549;  // kind:9735 zap memo
//  untilValue = 1690983115;  //live chat message kind:1311 Karnage
//  untilValue = 1690354019;  //(quote)
//  untilValue = 1690284540;  // \t
//  untilValue = 1690114119;  //youtube
//  untilValue = 1690041940;  //To 5
//  untilValue = 1689862993;  //https Add fix max width 580
//  untilValue = 1689652872;  //NIP-36
//  untilValue = 1689374075;  //NIP-98 Firebase Auth
//  untilValue = 1689334972;  //ff14
//  untilValue = 1689335282;  //NIP-50 search nostr.band
//  untilValue = 1689254202;  //repost
//  untilValue = 1689245113;  //nostr:naddr1 nostter fix
//  untilValue = 1688944930;  //threads ogp
//  untilValue = 1688605603;  //neventt1 (quote) fix
//  untilValue = 1688460571;  //youtube channel
//  untilValue = 1688395711;  //youtube playlist
//  untilValue = 1688390047;  //youtube
//  untilValue = 1688382329;  //youtube
//  untilValue = 1688303413;  //https:// search engine
//  untilValue = 1688289075;  //1,300 active authors 2023/7/2
//  untilValue = 1688253140;  //iframe 3
//  untilValue = 1688261108;  //zap
//  untilValue = 1688115603;  //nostr:profile1
//  untilValue = 1688127866;  //nostr:nprofile1
//  untilValue = 1688084234;  //live_chat kind:1311 will
//  untilValue = 1675550855;  //https://
//  untilValue = 1692963542;  // spotify album
//  untilValue = 1692963976;  // spotify playlist
//  untilValue = 1687906810;  //https:// spotify playlist
//  untilValue = 1687865289;  //emoji
//  untilValue = 1686896097;  //https://  same url
//  untilValue = 1687689358;  //https://
//  untilValue = 1687655585;  //yabumi relay
//  untilValue = 1687588227;  //#nowplaying
//  untilValue = 1687579812;  //#illust fix
//  untilValue = 1687575908;  //tag fix
//  untilValue = 1687194994;  //reply 8
//  untilValue = 1687333253;  //nostr:naddr1 habla fix relay kind:30022
//  untilValue = 1686983200;  //naddr1 habla emoji kind:30030 fix
//  untilValue = 1686985618;  //about nevent relay
//  untilValue = 1686933213;  //quote(nostr:note1) fix
//  untilValue = 1686949316;  //2 cards fix
//  untilValue = 1686918544;  //nhk news card
//  untilValue = 1686918929;  //hatenablog, nicovideo, card
//  untilValue = 1686839510;  //nicovideo iframe
//  untilValue = 1686929129;  //twitter iframe
//  untilValue = 1686241976;  //emoji 13 fix, <img>
//  untilValue = 1685703268;  //emoji fix
//  untilValue = 1686199783;  //emoji, tate, <style> fix,
//  untilValue = 1686238459;  //#[0] fix, <a href>
//  untilValue = 1675779342;  //#[5] fix
//  untilValue = 1686034150;  //https: 5 // fix
//  untilValue = 1686034209;  //about reverce
//  untilValue = 1686135829;  //U+202E (RTL)
//  untilValue = 1686051720;  //reverce
//  untilValue = 1686052701;  //before 1 hour fix


//  untilValue = 1672000000; // 2022/12/26-1970/1/1
//  untilValue = 1675000000; // 2023/1/29 22- 2023/1/11 4, 
//  untilValue = 1675200000; // 2023/2/1 6-  2023/1/12 20, +200,000
//  untilValue = 1675300000; // 2023/2/2 10- 2023/2/1 10, +100,000
//  untilValue = 1675400000; // 2023/2/3 13- 2023/2/2 19, +100,000 
//  untilValue = 1675500000; // 2023/2/4 15- 2023/2/7,    +100,000
//  untilValue = 1675600000; // 2023/2/5 21- 2023/2/5 18  +100,000
//  untilValue = 1675650000; // 2023/2/6 11- 2023/2/4 18,  +50,000
//  untilValue = 1675591669; // 2023/2/6 11- 2023/2/4 18,  +50,000
//  untilValue = 1675695000; // 2023/2/6 23- 2023/2/6 23 , +45,000 nosaray
//  untilValue = 1675700000; // 2023/2/7 1-  2023/2/7 0,    +5,000
//  untilValue = 1675780000; // 2023/2/7 20- 2023/2/7 20 , +60,000
//  untilValue = 1675780000; 
//  untilValue = 1675790000; // 2023/2/8 2- 2023/2/8 1,   +10,000 nosaray
//  untilValue = 1675800000; // 2023/2/9-    2023/2/9,    +10,000
//  untilValue = 1675900000; // 2023/2/9  8 -2023/2/9,    +100,000
//  untilValue = 1676000000; // 2023/2/10 12-2023/2/10,   +100,000
//  untilValue = 1676100000; // 2023/2/11-   2023/2/11,   +100,000
//  untilValue = 1676200000; // 2023/2/12-   2023/2/12,   +200,000 nosaray
//  untilValue = 1676300000; // 2023/2/13 23-2023/2/13 23 +100,000
//  untilValue = 1676350000; // 2023/2/14 13-2023/2/14 12, +50,000
//  untilValue = 1676400000; // 2023/2/15 3- 2023/2/15 1,  +50,000
      //untilValue = 1676470000; // 2023/2/15 23-2023/2/15 20, +10,000
//      untilValue = 1676480000; // 2023/2/16 1- 2023/2/15 22, +10,000
//      untilValue = 1676550000; // 2023/2/16 21-2023/2/16 15, +20,000
//      untilValue = 1676580000; // 2023/2/17 5- 2023/2/16 21, +30,000
//      untilValue = 1676640000; // 2023/2/17 22-2023/2/17 19, +10,000
//      untilValue = 1676650000; // 2023/2/18 1- 2023/2/17 21, +10,000
//      untilValue = 1676750000; // 2023/2/19 4- 2023/2/17 23,+100,000
      //untilValue = 1676840000; // 2023/2/20 5- 2023/2/18 0,  +90,000
      //untilValue = 1676920000; // 2023/2/21 4- 2023/2/18 5,  +80,000
      //untilValue = 1676990000; // 2023/2/21 23-2023/2/21 20, +10,000 nosaray
      //untilValue = 1677030000; // 2023/2/22-10 2023/2/21 23, +40,000
      //untilValue = 1677070000; // 2023/2/22 21-2023/2/22 18  +10,000
      //untilValue = 1677080000; // 2023/2/23 0- 2023/2/22 22  +10,000
      //untilValue = 1677150000; // 2023/2/23 19-2023/2/22 12  +20,000
      //untilValue = 1677170000; // 2023/2/24 1- 2023/2/23 17  +20,000
      //untilValue = 1677230000; // 2023/2/24 18-2023/2/24 14  +10,000
      //untilValue = 1677270000; // 2023/2/25 5- 2023/2/24 18  +40,000
      //untilValue = 1677320000; // 2023/2/25 19-2023/2/25 14, +20,000
      //untilValue = 1677360000; // 2023/2/26 6- 2023/2/25 18, +40,000
      //untilValue = 1677420000; // 2023/2/26 22-2023/2/26 20  +20,000
      //untilValue = 1677440000; // 2023/2/27 4- 2023/2/26 23  +20,000
      //untilValue = 1677500000; // 2023/2/27 21-2023/2/27 19  +10,000
      //untilValue = 1677520000; // 2023/2/28 2- 2023/2/27 23  +20,000
      //untilValue = 1677590000; // 2023/2/28 22-2023/2/28 15  +10,000 nosaray
//      untilValue = 1677600000; // 2023/3/1 0-  2023/2/28 22, +10,000

      //until 1677700000, // 2023/3/2 4-  2023/3/2 1,  +100,000, limit 100
      //until 1677800000, // 2023/3/3 8-  2023/3/3 3,  +100,000 * 25
      //until 1677900000, // 2023/3/4 12- 2023/3/4 8,  +100,000
//      untilValue = 1678000000; // 2023/3/5 16- 2023/3/5 13, +100,000
      //until 1678100000, // 2023/3/6 19- 2023/3/6 18, +100,000
      //until 1678200000, // 2023/3/7 23- 2023/3/7 19, +100,000
      //until 1678300000, // 2023/3/9 3-  2023/3/8 15, +100,000
      //until 1678400000, // 2023/3/10 7- 2023/3/10 2, +100,000
      //until 1678500000, // 2023/3/11 10-2023/3/11 8, +100,000
      //until 1678600000, // 2023/3/12 14-2023/3/12 12,+100,000
      //until 1678700000, // 2023/3/13 18-2023/3/13 16,+100,000
      //until 1678800000, // 2023/3/14 22-2023/3/14 21,+100,000
      //until 1678860000, // 2023/3/15 14-2023/3/15 10,+100,000,broccoli
      //until 1678900000, // 2023/3/16 2- 2023/3/15 20,+100,000
      //until 1679000000, // 2023/3/17 5- 2023/3/17 1, +100,000
      //until 1679100000, // 2023/3/18 9- 2023/3/18 4, +100,000
      //until 1679200000, // 2023/3/19 13-2023/3/19 11,+100,000
      //until 1679300000, // 2023/3/20 17-2023/3/20 14,+100,000
      //until 1679400000, // 2023/3/21 20-2023/3/21 18,+100,000
      //until 1679500000, // 2023/3/23 0- 2023/3/22 21,+100,000
      //until 1679600000, // 2023/3/24 4- 2023/3/24 1, +100,000
      //until 1679700000, // 2023/3/25 8- 2023/3/25 1, +100,000
      //until 1679800000, // 2023/3/26 12-2023/3/25 12,+100,000
      //until 1679900000, // 2023/3/27 15-2023/3/27 14,+100,000
      //until 1680000000, // 2023/3/28 19-2023/3/28 17,+100,000 *26
      //until 1680050000, // 2023/3/29 9- 2023/3/29 6,  +50,000 *11
      //until 1680100000, // 2023/3/29 23-2023/3/29 22, +50,000 *13
      //until 1680150000, // 2023/3/30 13-2023/3/30 11, +50,000 *12
      //until 1680180000, // 2023/3/30 21-2023/3/30 20, +10,000 *2
      //until 1680190000, // 2023/3/31 0- 2023/3/30 23, +10,000 *2
      //until 1680270000, // 2023/3/31 22- 2023/3/31 20,  +10,000 *

      //until 1680300000, // 2023/4/1 6- 2023/4/1 2,  +30,000
      //until 1680360000, // 2023/4/1 23- 2023/4/1 21,  +10,000 *
      //until 1680370000, // 2023/4/1 - 2023/4/1 ,  +10,000 *
      
      //until: 1684667029, // 2023/5/21 20:03 - 

//  untilValue = 1675720000; // 2023/2/-     2023/2/,     +20,000

  const sinceValue = untilValue - 1800;  //about 30 minutes 
//  sinceValue = untilValue - 500;  //about 15 minutes 
//  sinceValue = untilValue - 7200;  //about 120 minutes 

  const { events } = useNostrEvents({
    filter: {
      until: untilValue,  //paging
//      authors: ['32b44d8ffb7c1995e708bb7ffb6c49d46576971de246ab6a53a5de64a4589c24'],  // misskey
//      authors: ['77b83da207aa98f3fcaf293c8d3b7beb15e812e937d79104670e4ef43f6ae0e4'],  // unnerv.jp

      //authors: ['2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2','43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906','fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b'], // maya,Segment,shino3

//      authors: ['91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877'],
      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,6969,9734,9735,10000,10001,10002,10003,10005,30000,30001,30003,30008,30009,30023,30311,30315,31922,31989,31990],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,4550,6969,9734,9735,10000,10001,10002,10003,10005,],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,4550,6969,9734,9735,10000,10001,10002,10003,10005,13194,23194,23195],
//      kinds: [30000,30001,30003,30008,30009,30023,30311,30315,31922,31989,31990],
//      kinds: [0],      // 0:Metadata
//      kinds: [1],      // 1:Short Text Note
      kinds: [1,6],      // 1:Short Text Note
//      kinds: [3],      // 3:Contacts (follow)
//      kinds: [4],      // 4:Encryped Direct Message(DM)
//      kinds: [5],      // 5:Event Deletion
//      kinds: [6],      // 6:Repost
//      kinds: [7],      // 7:Reaction
//      kinds: [8],      // 8:Badge Award
//      kinds: [16],     // 16:Generic Repost
//      kinds: [40],     // 40:Channel Creation
//      kinds: [41],     // 41:Channel Metadata
//      kinds: [42],     // 42:Channel Message
//      kinds: [44],     // 44:Channel Mute User
//      kinds: [1063],   // 1063:File Metadata
//      kinds: [1311],   // 1311:Live Chat Message
//      kinds: [1984],   // 1984:Reporting spam
//      kinds: [9734],   // 9734:Zap Request
//      kinds: [9735],   // 9735:Zap
//      kinds: [10000],  // 10000:Mute List
//      kinds: [10001],  // 10001:Pin List
//      kinds: [10002],  // 10002:Realy List Metadata(
//      kinds: [10003],  // 10003:Bookmark list
//      kinds: [10005],  // 10005:Public chats list
//      kinds: [10030],  // 
//      kinds: [30000],  // 30000:Categorized People List(mute)
//      kinds: [30001],  // 30001:Generic lists(Categorized Bookmark List) (hex79)
//      kinds: [30003],  // 30003:Bookmark sets
//      kinds: [30008],  // 30008:Profile Badges
//      kinds: [30009],  // 30009:Badge definition event
//      kinds: [30023],  // 30023:Long-form Content
//      kinds: [30025],  // 
//      kinds: [30078],  // 30078:Application-specific Data(key-value storage)
//      kinds: [30311],  // 30311:Live Event
//      kinds: [30315],  // 30315:User Statuses
//      kinds: [31922],  // 31922:calender
//      kinds: [31989],  // 31989:Handler recommendation
//      kinds: [31990],  // 31990:Handler information
//      since: sinceValue,
      //since: dateToUnix(now.current), // all new events from now
      //since: 1679403822, // 1679413822 2023/03/22 0:50
//      limit: 1000,
      limit: 100,
//      limit: 100,
      //"#t": ["nostter"],
      //"#t": ["foodstr"],
      //"#t": ["illust"],
      //"#t": ["ロクヨウ画像"],
      //"#t": ["nosli"],
      //"#t": ["cluster"],
      //"#t": ["Amethyst"],
      //"#t": ["名言画像"],
      //"#t": ["makeitquote"],
      //search: "NIP-50",
      //search: "nip50",
      //search: "NIP",
      //search: "heguro",
    },
  });

  /*const { data: npub } = nip19.decode(
    "npub1gdjc46gns2lw0harclpkpvf6tmyvygnrtu4j4tfaua0yhvsd4yrq38fkq3"  // maya
  );*/

  /*const { data: userData, isLoading } = useProfile({
    //pubkey: npub.toString(),
    pubkey: "c909252de5546401e9717846a27d3aec0beef9bd8360bcd7cf5480252dd6776d",
  });*/

  /*const Profile = (npub) => {
    const { data: userData, isLoading } = useProfile({
      //pubkey: npub.toString(),
      //pubkey: "afb18dfa9cdbc569bfe32a50570fa852344325ca8d521dddaee33a0913281dd1",
      pubkey: npub,
    });
    console.log(isLoading);
    
    return (
      <>
        <p>Name: {userData?.name}</p>
        <p>Picture: {userData?.picture}</p>
        <p><img src={userData?.picture} width="60" /></p>
      </>
    )
  }*/
//  {Profile("bbbe1c012adb049f3c4829bc956d47addd49bb95d94e3dae8c314a5a7b1d90f2")} 

/*enum NostrKind {
  metadata = 0,
  text = 1,
  contacts = 3,
  dm = 4,
  delete = 5,
  boost = 6,
  like = 7,
  channel_create = 40,
  channel_meta = 41,
  chat = 42,
  list = 30000,
}*/

  // following list
  const { events: events2 } = useNostrEvents({
    filter: {
      kinds: [3],  // 3:following list
      //kinds: [NostrKind.contacts],  // 3:following list
      //authors: ["43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906"],  // maya
//      authors: ["0c9b1e9fef76c88b63f86645dc33bb7777f0259ec41e674b61f4fc553f6db0e0"],  // shion 1,100 followees
      authors: ["91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877"],  // 1j
//      authors: ["5610a26cefa76ec4bcf777aa0778681da960336ffe217a3dd4d3b3feeb9e03cc"],  // iris
//      authors: ["087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e"],  // jp user bot
      
//      limit: 2000,
    },
  });

  const onLoadNext = async () => {
    untilValue = 1688863000;
    alert("Next");
    //return;
  }

  var followList = "";

  const renderImageList2 = (list) => {
    const posts = list.map((event, index) => {
      for(let i=0; i<event.tags.length; i++) {
        /*if(event.tags[i] === undefined) {
	  break;
	}*/
        followList = followList + event.tags[i][1] + ",";
      }
      return (
        <div>
        </div>
      );
    });
    return posts;
  }

  var follow = "";
  var minCreateDate = 9999999999;
  const renderImageList = (list) => {
    const posts = list.map((note, index) => {

      follow = "";
      if(!followList.includes(note.pubkey)) {
// following filter
	follow = " [follow]";
	// not follow user
        return;
      }
      else {
          // follow user
//        return;
      }

      if(note.kind === 7
        || note.kind === 30078  //Application-specific Data
      ) {  // 7:reaction
        return;
      }

      if(note.content.includes('#markostr') || note.content.includes('#targoyleTweetGen')) {  
        return;
      }

      // japanese filter
      if(!note.content.match(/^(?=.*[\u3041-\u3096]).*$/) && 
        //note.pubkey != '' &&
        //jack, will, fiatfaf
        note.pubkey != '82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2' &&
        note.pubkey != '3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d' &&
        note.pubkey != '32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245' 
      ||note.pubkey == '3e1691aa75beb6aff2887e677b10f89a5ab9f71e7e3c54800eb6ab96d3afd9a7')  {
// hiragara filter
	//follow = "[[en]]";
	// not japanese
//        return;
      }

      if(note.pubkey === '1f617e368ce633acef348a2f755dd0a459e56e394766699524ae5d0ee66e9caa')
      {
        return;
      }

      noteCount = noteCount + 1;

      if(minCreateDate > note.created_at) {
        minCreateDate = note.created_at;
      }

      const dateTime = new Date(note.created_at * 1000);
      const createdDate = dateTime.toLocaleDateString('ja-JP');
      const createdTime = createdDate + ' ' + dateTime.toLocaleTimeString('ja-JP');

      const npub = nip19.npubEncode(note.pubkey)
      //const nostrnpub = "https://nostr.com/" + npub
      const nostrnpub = "https://yabu.me/" + npub
      //const userUrl = "https://snort.social/p/" + npub 
      //const userUrl = "https://yabu.me/" + npub 
      //const userUrl = "https://nostter.app/" + npub 
      //const userUrl = "https://freefromjp.github.io/FreeFromWeb/#/profile/" + npub 
      //const userUrl = "https://astraea.mousedev.page/profile/" + npub 
      const userUrl = "https://nostrudel.ninja/#/u/" + npub 

      let imageURL2 = getImageURL(note.pubkey);  // avator

      //const noteUrl = "https://snort.social/e/" + note.id
      //const noteUrl = "https://iris.to/#/post/" + note.id
      //let noteUrl = "https://nostter.app/" + nip19.noteEncode(note.id)
      let noteUrl = "https://nostter.app/" + nip19.neventEncode({id:note.id})
      for(let h=0; h<note.tags.length; h++)  {
        // 6.repost, 4550.Post Approval by moderators
        /*if(note.kind == 6 || note.kind == 4550) {
          if(note.tags[h][0] == "e") {
	    // repost nevent nostter
	    if(note.tags[h][1].includes(":")) {
	      return
	    }
            noteUrl = "https://nostter.app/" + nip19.neventEncode({id:note.tags[h][1]})
	  }
	}*/
        // 42.Channel Message
        if(note.kind == 42) {
          if(note.tags[h][0] == "e") {
	    if(note.tags[h][1].includes(":")) {
	      return
	    }
            noteUrl = "https://nostter.app/channels/" 
	      + nip19.neventEncode({id:note.tags[h][1]})
	  }
	}
      }
      const noteIdShort = note.id.substring(0,2)
      //const checkerUrl = 'https://koteitan.github.io/staged/nostr-post-checker/?eid=' + nip19.noteEncode(note.id) + '&kind=' + note.kind + '&relay=wss://relay-jp.nostr.wirednet.jp/;wss://yabu.me/;wss://nos.lol;wss://relay.mostr.pub/;wss://nostr-relay.nokotaro.com/;wss://nostr.fediverse.jp/;wss://relay.damus.io/;'
      const checkerUrl = 'https://koteitan.github.io/nostr-post-checker/?hideform&eid=' + nip19.noteEncode(note.id) + '&kind=' + note.kind + '&relay=wss://relay-jp.nostr.wirednet.jp/;wss://yabu.me/;wss://nos.lol;wss://relay.mostr.pub/;wss://nostr-relay.nokotaro.com/;wss://nostr.fediverse.jp/;wss://relay.damus.io/;wss://relay-jp.nostr.moctane.com/;wss://nrelay-jp.c-stellar.net;'

      const freefromUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/" + note.id
      const snortUrl = "https://snort.social/e/" + nip19.noteEncode(note.id)
      const noStrudelUrl = "https://nostrudel.ninja/#/n/" + nip19.noteEncode(note.id)

      /*let imageURL = Pictures.pictures.map((picture, index) => {
        if(note.pubkey === picture.npub) {
          return picture.pic;
        }
      });*/

      let reply = "";
      let replyToHex1 = nip19.npubEncode(note.pubkey)
      let replyToHex2 = nip19.npubEncode(note.pubkey)
      let replyToHex3 = nip19.npubEncode(note.pubkey)
      let replyToHex4 = nip19.npubEncode(note.pubkey)
      let replyToHex5 = nip19.npubEncode(note.pubkey)
      let replyToImageURL1 = getImageURL(note.pubkey);
      let replyToImageURL2 = getImageURL(note.pubkey);
      let replyToImageURL3 = getImageURL(note.pubkey);
      let replyToImageURL4 = getImageURL(note.pubkey);
      let replyToImageURL5 = getImageURL(note.pubkey);
      //let replyToUserBaseUrl = "https://nostter.app/" 
      //let replyToUserBaseUrl = "https://yabu.me/" 
      //const replyToUserBaseUrl = "https://freefromjp.github.io/FreeFromWeb/#/profile/" 
      //const replyToUserBaseUrl = "https://astraea.mousedev.page/profile/" 
      const replyToUserBaseUrl = "https://nostrudel.ninja/#/u/" 
      let replyToUrl1 = replyToUserBaseUrl + npub 
      let replyToUrl2 = replyToUrl1
      let replyToUrl3 = replyToUrl1
      let replyToUrl4 = replyToUrl1
      let replyToUrl5 = replyToUrl1
      let replyToImageSize1 = "0"
      let replyToImageSize2 = "0"
      let replyToImageSize3 = "0"
      let replyToImageSize4 = "0"
      let replyToImageSize5 = "0"
      let motoHex = replyToHex1
      let repHex = "";

      let channelUrl = "";
      let client = "";
      let title = "";
      let proxy = "";
      let proxyUrl = "";
      let eventLinkUrl1 = "";
      let eventLinkUrlText1 = "";  // #e 1
      let event1Id = "";
      //let eventLinkUrl2 = "";
      let eventLinkUrlText2 = "";  // #e 2
      let event2Id = "";
      //let eventLinkUrl3 = "";
      let eventLinkUrlText3 = "";  // #e 3
      //let eventLinkUrl4 = "";
      let eventLinkUrlText4 = "";  // #e 4
      //let eventLinkUrl5 = "";
      let eventLinkUrlText5 = "";  // #e 5
      //let eventLinkUrl6 = "";
      let eventLinkUrlText6 = "";  // #e 6
      let eventCount = 0;
      let streaming = "";
      let streamingUrl = "";

      for(let h=0; h<note.tags.length; h++)  {
        if(note.tags[h][0] === "p") {  // mention
          reply = "To]";
	  if(!note.tags[h][1].includes("npub")) {  // not hex
	    //if(motoHex != nip19.npubEncode(note.tags[h][1])) {  // not self
	    if(replyToImageSize1 === "0") {
              if(note.kind === 6) {  // 6.repost
                replyToImageSize1 = "60"
	      }
	      else {
                replyToImageSize1 = "40"
              }
              replyToImageURL1 = getImageURL(note.tags[h][1]);  // to user id
	      repHex = note.tags[h][1];
	      replyToHex1 = nip19.npubEncode(note.tags[h][1]);
	      replyToUrl1 = replyToUserBaseUrl + replyToHex1
	    }
	    else if(replyToImageSize2 === "0") {
	      replyToHex2 = nip19.npubEncode(note.tags[h][1]);
	      if(replyToHex2 != replyToHex1) {
                if(note.kind === 6) {
                  replyToImageSize2 = "60"
	        }
	        else {
                  replyToImageSize2 = "40"
		}
                replyToImageURL2 = getImageURL(note.tags[h][1]);  // to user id
	        replyToUrl2 = replyToUserBaseUrl + replyToHex2
	      }
	    }
	    else if(replyToImageSize3 === "0") {
	      replyToHex3 = nip19.npubEncode(note.tags[h][1]);
	      if(replyToHex3 != replyToHex2 && replyToHex3 != replyToHex1) {
                if(note.kind === 6) {
                  replyToImageSize3 = "60"
	        }
	        else {
                  replyToImageSize3 = "40"
		}
                replyToImageURL3 = getImageURL(note.tags[h][1]);  // to user id
	        replyToUrl3 = replyToUserBaseUrl + replyToHex3
	      }
	    }
	    else if(replyToImageSize4 === "0") {
                if(note.kind === 6) {
                  replyToImageSize4 = "60"
	        }
	        else {
                  replyToImageSize4 = "40"
		}
	      replyToHex4 = nip19.npubEncode(note.tags[h][1]);
	      if(replyToHex4 != replyToHex2 && replyToHex4 != replyToHex1) {
                replyToImageURL4 = getImageURL(note.tags[h][1]);  // to user id
	        replyToUrl4 = replyToUserBaseUrl + replyToHex4
	      }
	    }
	    else if(replyToImageSize5 === "0") {
	      replyToHex5 = nip19.npubEncode(note.tags[h][1]);
	      if(replyToHex5 != replyToHex2 && replyToHex5 != replyToHex1) {
                if(note.kind === 6) {
                  replyToImageSize5 = "60"
	        }
	        else {
                  replyToImageSize5 = "40"
		}
                replyToImageURL5 = getImageURL(note.tags[h][1]);  // to user id
	        replyToUrl5 = replyToUserBaseUrl + replyToHex5
	      }
	    }
	    //}
	  }
          for(let i=0; i<note.tags.length; i++) { 
            //if(note.tags[i][0] === "e" && note.tags[h][1] != note.pubkey) {  // re
            if(note.tags[i][0] === "e") {  // re
              reply = "Re]";
            }
          }
        }
	else if(note.tags[h][0] === "e") {  // NIP-10 kind1
	  eventCount = eventCount + 1;
	  if(reply === "" || reply === "#e]") {
	    //reply = "Re]";
	    //if(note.kind != 5 && note.kind != 30001) {  // 5:Event Deletion, 30001:Bookmark
	    if(note.kind === 1) {  // 1:note
	      reply = "#e]";
	    }
	    //reply = "";
	  }

	  let marker = "";
	  if(note.tags[h][3] != undefined) {
	    marker = note.tags[h][3] + " "
	  }

          //if(channelUrl == "" || note.tags[h][3] === "root") {
          if(channelUrl == "") {
            //channelUrl = "https://garnet.nostrian.net/channels/" + note.tags[h][1]
            //channelUrl = "https://coracle.social/chat/" + note.tags[h][1]
            //channelUrl = "https://unyu-house.vercel.app/"
            //channelUrl = "https://unyu-house.vercel.app/channels/" + note.tags[h][1] 
	    // ### nip19.neventEncode Error: hexToBytes: received invalid unpadded hex79 (kind:30001)
	    if(note.tags[h][1].includes(":")) {  // tag:e
	      return
	    }
            channelUrl = "https://unyu-house.vercel.app/channels/" + nip19.neventEncode({id:note.tags[h][1] })
	  }
	  //const eventLinkUrl = "https://iris.to/post/" + note.tags[h][1]
	  //const eventLinkUrl = "https://coracle.social/" + nip19.noteEncode(note.tags[h][1])
	  //const eventLinkUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/" + nip19.noteEncode(note.tags[h][1])
	  //const eventLinkUrl = "https://snort.social/e/" + note.tags[h][1]
	  //const eventLinkUrl = "https://nostrudel.ninja/#/n/" + note.tags[h][1]
	  // ### nip19.noteEncode Error: hexToBytes: received invalid unpadded hex79 (kind:30001)
	  if(note.tags[h][1].includes(":")) {  // tag:e
	    return
	  }
	  //const eventLinkUrl = "https://snort.social/" + nip19.noteEncode(note.tags[h][1])
	  //const eventLinkUrl = "https://nostrudel.ninja/#/n/" + nip19.noteEncode(note.tags[h][1])
	  const eventLinkUrl = "https://nostter.app/" + nip19.noteEncode(note.tags[h][1])
	  //note.content = note.content + "##" + note.tags[h][1]  //debug

	  if(eventLinkUrlText1 === "") {
	    if(marker === "" && note.kind === 1) {  // 1:text
	      //marker = "root ";
	      //marker = "reply ";
	    }
	    event1Id = note.tags[h][1].substring(0,2);
            eventLinkUrlText1  = "__#e(" + marker + event1Id + ")";  // event id
	    //eventLinkUrl1 = eventLinkUrl
	  }
	  else if(eventLinkUrlText2 === "") {
	    if(marker === "" && note.kind === 1) {  // 1:text
	      //marker = "reply ";
              //eventLinkUrlText1  = "__#e(root " + event1Id + ")";
              eventLinkUrlText1  = "__#e(" + event1Id + ")";
	    }
	    event2Id = note.tags[h][1].substring(0,2);
            eventLinkUrlText2  = "__#e(" + marker + event2Id + ")";
	    //eventLinkUrl2 = eventLinkUrl
	  }
	  else if(eventLinkUrlText3 === "") {
            eventLinkUrlText3  = "__#e(" + marker + note.tags[h][1].substring(0,2) + ")";
	    //eventLinkUrl3 = eventLinkUrl
	    if(marker === "reply ") {
              eventLinkUrlText2  = "__#e(" + event2Id + ")";
            }
	  }
	  else if(eventLinkUrlText4 === "") {
            eventLinkUrlText4  = "__#e(" + marker + note.tags[h][1].substring(0,2) + ")";
	    //eventLinkUrl4 = eventLinkUrl
	    if(marker === "reply ") {
              eventLinkUrlText2  = "__#e(" + event2Id + ")";
            }
	  }
	  else if(eventLinkUrlText5 === "") {
            eventLinkUrlText5  = "__#e(" + marker + note.tags[h][1].substring(0,2) + ")";
	    //eventLinkUrl5 = eventLinkUrl
	    if(marker === "reply ") {
              eventLinkUrlText2  = "__#e(" + event2Id + ")";
            }
	  }
	  else if(eventLinkUrlText6 === "") {
          //  eventLinkUrlText6  = "__#e(" + marker + note.tags[h][1].substring(0,2) + ")";
	    //eventLinkUrl6 = eventLinkUrl
	    if(marker === "reply ") {
              eventLinkUrlText2  = "__#e(" + event2Id + ")";
              eventLinkUrlText6  = "__#e(" + marker + note.tags[h][1].substring(0,2) + ") ";
	      eventLinkUrlText6 += String(eventCount) + "replies";
            }
	  }
        }
	else if(note.tags[h][0] === "a") {  // live chat message. kind:1311
//	  channelUrl = "https://zap.stream";
	  channelUrl = "https://zap.stream/naddr1qq9rzd3c8qcrwvejxqusygpjuxp8vd29p6ancknaztql3eajk52y8xkppfn7au7elkw9c68zg5psgqqqwensgqahaf";
	}
	else if(note.tags[h][0] === "client") {  // client gossip 
	  client = "-" + note.tags[h][1] + "-"
	}
	else if(note.tags[h][0] === "title") {  // title 
	  title = "[" + note.tags[h][1] + "]__"
	}
	else if(note.tags[h][0] === "proxy") { 
	  //proxy = "__" + note.tags[h][2] + "__"  // activitypub
    /*
	  if(note.tags[h][1].includes("misskey.io")) {
	    proxy = "__misskey.io__"
	    proxyUrl = note.tags[h][1]
	  }
	  else if(note.tags[h][1].includes("misskey.nokotaro.com")) {
	    proxy = "__misskey.nokotaro.com__"
	    proxyUrl = note.tags[h][1]
	  }
	  else if(note.tags[h][1].includes("p1.a9z.dev")) {
	    proxy = "__p1.a9z.dev__"
	    proxyUrl = note.tags[h][1]
	  }
	  else if(note.tags[h][1].includes("unnerv.jp")) {
	    proxy = "__unnerv.jp__"
	    proxyUrl = note.tags[h][1]
	  }
	  else if(note.tags[h][1].includes("mstdn.jp")) {
	    proxy = "__mstdn.jp__"
	    proxyUrl = note.tags[h][1]
	  }
	  else if(note.tags[h][1].includes("fedibird.com")) {
	    proxy = "__fedibird.com__"
	    proxyUrl = note.tags[h][1]
	  }*/
	  //else {
      let host = note.tags[h][1].match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
	    proxy = "__" + host + "__"
	    proxyUrl = note.tags[h][1]
	  //}
	}
	else if(note.tags[h][0] === "streaming") {  //  streaming
	  streaming = "-streaming"
	  streamingUrl = note.tags[h][1]
	}
	else if(note.tags[h][0] === "ends") {  // ends 
	  title = title + "ends"
	}
      }
//
      let content = note.content;
//      content = title + content

      for(let i=0; i<10; i++) {
        content = content.replace('<','&lt;');  // <
      }

      let channel = ""

      if(note.kind === 42) {  // 42.channel message
        channel = "[42 Channel Message]";   // channelUrl
      }
      if(note.kind === 1311) {  // 1311.live chat
        channel = "[1311 Live Chat]";   // channelUrl
      }

      // 6.repost, 16.Generic Repost, 4550.Post Approval by moderators
      if(note.kind === 6 || note.kind === 16 || note.kind === 4550) {  
        reply = "Repost]";
	if(note.kind === 16) {
	  reply = "Generic Repost]"
	}
	else if(note.kind === 4550) {
	  reply = "To]"
	}

        if(content === "") {
	  content = "[empty]";
	}
	else {
        let tmp
	tmp = content.split('","');  // ","
	if(content.includes("pubkey")) {
	  tmp = content.split('",');  // ",
	}
        for(let i=0; i<tmp.length; i++) {
	  if(tmp[i].includes('"content"')) {
//	    tmp = tmp[i].split(',');  // ,
	    tmp = tmp[i].split('],');  // ],  fix ,
	    for(let j=0; j<tmp.length; j++) {
	      if(tmp[j].includes('"content"')) {
	        content = tmp[j];
	      }
	    }
	    
            for(let j=0; j<10; j++) {
	      content = content.replace("\\/\\/","//");
	      content = content.replace("\\\"","\""); // \" -> "
	    }
            for(let j=0; j<20; j++) {
	      content = content.replace("\\/","/");  // \/ -> /
	      content = content.replace("\\r","");   // \\r -> \r
	      content = content.replace("\\n","\n");   // \\n -> \n
	    }
	    
	    content = content.replace('"kind":1,','');
            content = content.replace('"content":"','');
            content = content.replace('"created_at":','');
	    content = content.replace("{","");
	    content = content.replace("{","");
	    content = content.replace("\"}","");
	  }
	}
	for(let i=0; i<note.tags.length; i++) {
	  if(content === "") {
	    if(note.tags[i][0] === "e") {
	      //content = note.tags[i][1] + "," + content;  // to eventId
	    }
	  }
	}
	}  // else
      }

      let inlineImage1Height = "0";
      let inlineImage2Height = "0";
      let inlineImage3Height = "0";
      let inlineImage4Height = "0";
      let inlineImage5Height = "0";
      let image1Url = "";
      let image2Url = "";
      let image3Url = "";
      let image4Url = "";
      let image5Url = "";
      //RegExp
      //let words = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|[a-z0-9]*)/g);

      if(content.includes("https:") || content.includes("http:")) {
        let tmp = content;
        for(let i=0; i<10; i++) {
          tmp = tmp.replace('\\/','/');
          content = content.replace('\\/','/');
	  
	}
        for(let i=0; i<10; i++) {
          tmp = tmp.replace('\\n',' ');
          tmp = tmp.replace('、',' ');
          tmp = tmp.replace('\'',' ');
          tmp = tmp.replace('）',' ');
          tmp = tmp.replace('く',' ');
          tmp = tmp.replace('ぃ',' ');
	  tmp = tmp.replace('\\',' ');
	  tmp = tmp.replace('"',' ');
          tmp = tmp.replace(':https://',' https://');
          tmp = tmp.replace('https://',' https://');
          tmp = tmp.replace('https://',' https://');
        }
        for(let i=0; i<20; i++) {
          tmp = tmp.replace('\n',' ');
        }
        let tmp2 = tmp.split(' ');
//        let tmp2 = tmp.split('"');

        let imageCount = 0;
        for(let i=0; i<tmp2.length; i++) {
          if((tmp2[i].includes(".jpg")  ||
             tmp2[i].includes(".jpeg") || 
             tmp2[i].includes(".png")  || 
             tmp2[i].includes(".gif")  || 
             tmp2[i].includes(".svg")  || 
             tmp2[i].includes(".ico")  || 
             tmp2[i].includes(".bmp")  || 
             tmp2[i].includes(".webp") ||
             tmp2[i].includes(".mp4") ||
             tmp2[i].includes(".mov") ||
             tmp2[i].includes("/img/") ||
             tmp2[i].includes("/images?") ||
             tmp2[i].includes("?set=set4") ||
             tmp2[i].includes("pbs.twimg.com/") ||
             tmp2[i].includes("robohash.org/") ||
             tmp2[i].includes("pbs.twimg.com/") ||
             tmp2[i].includes("/profile/avatar/") ||
             tmp2[i].includes("/imgproxy.snort.social/") ||
             tmp2[i].includes("/0.gravatar.com/avatar/") ||
             tmp2[i].includes("/www.gravatar.com/avatar/") ||
             tmp2[i].includes("googleusercontent.com/") ||
             tmp2[i].includes("grafana.gsn.im/"))
	     && tmp2[i].includes("http")
	     && !tmp2[i].includes("gifu.jp/")
//	     && !tmp2[i].includes("minio.compile-error.net/")
	     )  {
	     //content = content + '[' + tmp2[i] + '],'
	    if(imageCount===0) {
              inlineImage1Height = "250";
	      image1Url = tmp2[i];
	    }
	    else if(imageCount===1) {
              inlineImage2Height = "250";
	      image2Url = tmp2[i];
	    }
	    else if(imageCount===2) {
              inlineImage3Height = "250";
	      image3Url = tmp2[i];
	    }
	    else if(imageCount===3) {
              inlineImage4Height = "250";
	      image4Url = tmp2[i];
	    }
	    else if(imageCount===4) {
              inlineImage5Height = "250";
	      image5Url = tmp2[i];
	    }
	    imageCount = imageCount + 1;
            //content = content.replace(tmp2[i],'');
          }
        }
      }


      let linkUrl1 = "";
      let linkUrlText1 = "";  // #r 1
      let linkUrl2 = "";
      let linkUrlText2 = "";  // #r 2
      let linkUrl3 = "";
      let linkUrlText3 = "";  // #r 3
      let linkUrl4 = "";
      let linkUrlText4 = "";  // #r 4
      let linkUrl5 = "";
      let linkUrlText5 = "";  // #r 5

      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "r") {
	  if(note.tags[i][1].includes("http")) {
	    if(linkUrl1 === "") {
	      linkUrl1 = note.tags[i][1];
	      linkUrlText1 = "__#r";
              if(!note.tags[i][1].includes("youtu")) {
	        content = content.replace(linkUrl1,"[@1]");
	      }
	    }
	    else if(linkUrl2 === "") {
	      linkUrl2 = note.tags[i][1];
	      linkUrlText2 = "__#r";
              if(!note.tags[i][1].includes("youtu")) {
	        content = content.replace(linkUrl2,"[@2]");
	      }
	    }
	    else if(linkUrl3 === "") {
	      linkUrl3 = note.tags[i][1];
	      linkUrlText3 = "__#r";
              if(!note.tags[i][1].includes("youtu")) {
	        content = content.replace(linkUrl2,"[@3]");
	      }
	    }
	    else if(linkUrl4 === "") {
	      linkUrl4 = note.tags[i][1];
	      linkUrlText4 = "__#r";
	    }
	    else if(linkUrl5 === "") {
	      linkUrl5 = note.tags[i][1];
	      linkUrlText5 = "__#r";
	    }
	  }
        }
      }
      for(let i=0; i<note.tags.length; i++) {
        let tmpWord = "";
	let tmpIframe = "";
	let tmpUrl = "";
	if(i === 0) {
	  tmpWord = "[@1]";
	  tmpUrl = linkUrl1;
	}
	else if(i === 1) {
	  tmpWord = "[@2]";
	  tmpUrl = linkUrl2;
	}
	else if(i === 2) {
	  tmpWord = "[@3]";
	  tmpUrl = linkUrl3;
	}

        if(tmpUrl != "") {
	  /*if(tmpUrl.includes("youtube.com") || tmpUrl.includes("/youtu.be/")) {
	  }*/
	  if(tmpUrl.includes("open.spotify.com")) {
	    const id = tmpUrl.replace("https://open.spotify.com/track/", ""); 
	    tmpIframe = '<iframe src="https://open.spotify.com/embed/track/' + id + '" width="560" height="232" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'
	  }
	  else if(tmpUrl.includes("twitter.com") || tmpUrl.includes("x.com")) {
	    //content = content.replace(tmp2[i], "");
	    const id = tmpUrl.replace("x.com","twitter.com"); 
	    tmpIframe = '<iframe border=0 frameborder=0 height=387 width=563 src="https://twitframe.com/show?url=' + id + '"></iframe>'
	  }
	  else if(!tmpUrl.includes("googleusercontent.com/")){
            tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
	  }
	  // text link
	  if(!tmpUrl.includes("nostr.cooking") && !tmpUrl.includes("codepen.io")) {
	    // remove image link OGP
	    if(!tmpUrl.includes(".mov") 
	      && !tmpUrl.includes(".jpeg")  
	      && !tmpUrl.includes(".jpg") 
	      && !tmpUrl.includes(".mp4") 
	      && !tmpUrl.includes(".png") 
	      && !tmpUrl.includes(".gif") 
	      && !tmpUrl.includes(".webp")) {
	      content = content.replace(tmpWord, tmpIframe);
	    }
	    else {
	      content = content.replace(tmpWord, "");
	    }
	  }
	  else {
	    content = content.replace(tmpWord, tmpUrl);
	  }
	}
      }



      /*for(let i=0; i<50; i++) {
        content = content.replace('<a','&lt;a');  
      }*/

      let tagUrl = "";  // #t

      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "t") {
	  let tag = note.tags[i][1];
	  if(tag === "nowplaying" && !content.includes("nowplaying")) { tag = "NowPlaying"; }
	  if(tag === "nostrasia" && !content.includes("nostrasia")) { tag = "Nostrasia"; }
	  if(tag === "nostr" && !content.includes("nostr")) { tag = "Nostr"; }
	  if(tag === "bitcoin" && !content.includes("bitcoin")) { tag = "Bitcoin"; }
//	  tagUrl = "https://snort.social/t/" + tag;
	  tagUrl = "https://nostrudel.ninja/#/t/" + tag;

	  if(!content.includes("/#" + tag)) {
	    content = content.replace('#' + tag, '<a href="' + tagUrl + '" target="_blank">#' + tag + '</a>');
	  }
        }
      }

      // #[0], #[1] (#p)
      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "p") {
          const npub = nip19.npubEncode(note.tags[i][1])
	  //const toLinkUrl =  "https://nostter.app/" + npub
	  const toLinkUrl =  "https://freefromjp.github.io/FreeFromWeb/#/profile/" + npub
	  content = content.replace('#[' + i + ']', '<a href="' + toLinkUrl + '" target="_blank">#[' + i + ']</a>');
          if(npub === "npub19xm6kcedxef3232d222gj0sxql8vs2tutyg0fq4z6875zfs3d8ascl440n") {
            content = content.replace('#[' + i + ']',"@もちもち");
          }
	  else if(npub === "npub1823chanrkmyrfgz2v4pwmu22s8fjy0s9ps7vnd68n7xgd8zr9neqlc2e5r") {
            content = content.replace('#[' + i + ']',"@やぶみちゃん");
	  }
	  else if(npub === "npub19we2h0793y4hhk500r2ndqkez0xf53rtghs3j20sjdwclh7tgz7s36kl6t") {
            content = content.replace('#[' + i + ']',"@うにゅう");
	  }
	  else if(npub === "npub1y0d0eezhwaskpjhc7rvk6vkkwepu9mj42qt5pqjamzjr97amh2yszkevjg") {
            content = content.replace('#[' + i + ']',"@Yodogawa-Janken");
	  }
        }
	else {
	  //const eventLinkUrl = "https://nostter.app/search?q=" + note.tags[i][1]
	  //const eventLinkUrl = "https://snort.social/e/" + note.tags[i][1]
	  //const eventLinkUrl = "https://nostter.app/" + nip19.noteEncode(note.tags[i][1])
	  const eventLinkUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/" + note.tags[i][1]
	  //const aa = note.tags[i][1]
	  content = content.replace('#[' + i + ']', '<a href="' + eventLinkUrl + '" target="_blank">(quote#)</a>');
  	}
      }

      // (to), (quote)  nostr:npub1, nostr:note1, nostr:nevent1
      let quoteLinkUrl = "";
      let quoteLinkText = "";
      let quoteLinkUrl2	 = "";
      let quoteLinkText2 = "";
      let quoteLinkUrl3	 = "";
      let quoteLinkText3 = "";
      let wordsNostr = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|nostr:(?:nprofile|nrelay|nevent|naddr|nsec|npub|note)[a-z0-9]*)/g);
      // nostr:note1, nostr:naddr1, nostr:nevent1
      if(content != undefined &&
        (content.includes("nostr:note1") || 
         content.includes("nostr:naddr1") || 
         content.includes("nostr:nevent1") || 
         content.includes("nostr:nprofile1") || 
         content.includes("nostr:npub1"))
	) {
	for(let i=0; i<wordsNostr.length; i++) {
	  if(wordsNostr[i].includes("nostr:npub1") && wordsNostr[i].length > 11) {
	    //const toLinkUrl = 'https://nostter.app/' + wordsNostr[i].replace('nostr:','');
            //const toLinkUrl = "https://nostter.app/" + wordsNostr[i].replace('nostr:',''); 
            const toLinkUrl = "https://snort.social/p/" + wordsNostr[i].replace('nostr:',''); 
	    content = content.replace(wordsNostr[i], '<a href="' + toLinkUrl + '" target="_blank">(to)</a>');
	    if(wordsNostr[i].replace('nostr:','') === 'npub1823chanrkmyrfgz2v4pwmu22s8fjy0s9ps7vnd68n7xgd8zr9neqlc2e5r') {
	      content = content.replace('(to)','@やぶみちゃん');
	    }
	    else if(wordsNostr[i].replace('nostr:','') === 'npub1y0d0eezhwaskpjhc7rvk6vkkwepu9mj42qt5pqjamzjr97amh2yszkevjg') {
	      content = content.replace('(to)','@Yodogawa-Janken');
	    }
	    else if(wordsNostr[i].replace('nostr:','') === 'npub1ttqyyl8stz9wtj0sn25qp6vah0jdcxwpdtaaxg4efsqkczz7rsxshjpp3x') {
	      content = content.replace('(to)','@mahjong');
	    }
	   
	    else if(wordsNostr[i].replace('nostr:','') === 'npub1f6rvmwc76arl7sxx2vparlzx8cg2ajc3xpymqh7yx97znccue2hs5mkavc') {
	      content = content.replace('(to)','@ぬるぽ・ｶﾞｯ');  //@nullpoga
	    }
            else if(wordsNostr[i].replace('nostr:','') === 'npub19xm6kcedxef3232d222gj0sxql8vs2tutyg0fq4z6875zfs3d8ascl440n') {
              content = content.replace('(to)',"@もちもち");
            }
            else if(wordsNostr[i].replace('nostr:','') === 'npub19we2h0793y4hhk500r2ndqkez0xf53rtghs3j20sjdwclh7tgz7s36kl6t') {
              content = content.replace('(to)',"@うにゅう");
            }
            else if(wordsNostr[i].replace('nostr:','') === 'npub17dxnfw2vrhgtk4fgqdmpuqxv05u9raau3w0shay7msmr0dzs4m7s6ng4yl') {
              content = content.replace('(to)',"@ログボちゃん(休止中)");
            }
            else if(wordsNostr[i].replace('nostr:','') === 'npub1pp79ruvjd7xned8lgh6n4rhz4pg3els3x5n6kr58l8zcyysp5c0qrkan2p') {
              content = content.replace('(to)',"@日本人ユーザー (bot))");
            }
	  }
	  else if(wordsNostr[i].includes("nostr:note1") || 
	          wordsNostr[i].includes("nostr:nevent1")) {  
            //let quoteBaseUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/"
            let quoteBaseUrl = "https://snort.social/e/"
	    if(quoteLinkText === "") {
	      //quoteLinkUrl = "https://snort.social/e/" + wordsNostr[i].replace("nostr:",'') 
	      //quoteLinkUrl = "https://iris.to/post/" + wordsNostr[i].replace("nostr:",'') 
	      //quoteLinkUrl = "https://coracle.social/" + wordsNostr[i].replace("nostr:",'') 
	      //quoteLinkUrl = "https://nostr.com/" + wordsNostr[i].replace("nostr:",'') 
	      //quoteLinkUrl = "https://primal.net/thread/" + wordsNostr[i].replace("nostr:",'') 
	      //quoteLinkUrl = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')
	      quoteLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
              quoteLinkText = "";
	      if(content.includes("nevent1")) {
                //quoteLinkText = quoteLinkText + wordsNostr[i];
                //quoteLinkText = "(quote_nevent1)";
	        //let quoteNeventLinkUrl = "https://njump.me/" + wordsNostr[i].replace("nostr:",'')
	        //let quoteNeventLinkUrl = "https://snort.social/e/" + wordsNostr[i].replace("nostr:",'')
	        let quoteNeventLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
  	        content = content.replace(wordsNostr[i],'<a href="' + quoteNeventLinkUrl + '" target="_blank">(quote_nevent)</a>');
	      }
	      else {
  	        content = content.replace(wordsNostr[i],'<a href="' + quoteLinkUrl + '" target="_blank">(quote_note)</a>');
	      }
	    }
	    else if(quoteLinkText2 === "") {
	      quoteLinkUrl2 = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')
  	      content = content.replace(wordsNostr[i],'<a href="' + quoteLinkUrl2 + '" target="_blank">(quote)</a>');
              quoteLinkText2 = "";
	      if(content.includes("nostr:nevent1")) {
                //quoteLinkText2 = quoteLinkText2 + wordsNostr[i];
	      }
	    }
	    else if(quoteLinkText3 === "") {
	      quoteLinkUrl3 = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')
  	      content = content.replace(wordsNostr[i],'<a href="' + quoteLinkUrl3 + '" target="_blank">(quote)</a>');
              quoteLinkText3 = "";
	      if(content.includes("nostr:nevent1")) {
                //quoteLinkText3 = quoteLinkText3 + wordsNostr[i];
	      }
	    }
	  }
	  else if(wordsNostr[i].includes("nostr:naddr1")) {
	    //content = content.replace(wordsNostr[i],'');
	    quoteLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
	    //quoteLinkUrl = "https://snort.social/e/" + wordsNostr[i].replace("nostr:",'') 
	    quoteLinkUrl = "https://habla.news/a/" + wordsNostr[i].replace("nostr:",'')   // kind:30022
	    //quoteLinkUrl = "https://emojis-iota.vercel.app/a/" + wordsNostr[i].replace("nostr:",'')  //kind:30030
            //quoteLinkText = "__(nostr:naddr1)";
	    //content = content + '[kind:' + note.kind + ']'
  	    content = content.replace(wordsNostr[i],'<a href="' + quoteLinkUrl + '" target="_blank">(nostr:naddr1)</a>');
	  }
	  else if(wordsNostr[i].includes("nostr:nprofile1")) {
	    quoteLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
  	    content = content.replace(wordsNostr[i],'<a href="' + quoteLinkUrl + '" target="_blank">(nostr:nprofile1)</a>');
	  }
	}
      }


      // nevent1
      if(content.includes("\nnevent1")) {
        let wordsNostr = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|(?:nprofile|nrelay|nevent|naddr|nsec|npub|note)[a-z0-9]*)/g);
	for(let i=0; i<wordsNostr.length; i++) {
	  if(wordsNostr[i].includes("nevent1")) {
	  //content = wordsNostr[1]
            let quoteBaseUrl = "https://snort.social/e/"
	    quoteLinkUrl = quoteBaseUrl + wordsNostr[i]
  	    content = content.replace(wordsNostr[i],'<a href="' + quoteLinkUrl + '" target="_blank">(nevent1)</a>');
	  }
	}
      }


      let quoteId1 = "";
      let quoteUrl1 = ""
      let quoteIdText1 = "";  // #q 1

      for(let i=0; i<note.tags.length; i++) {
	//quoteUrl1 = "https://snort.social/e/" + quoteId1;
	//quoteUrl1 = "https://nostr.com/" + quoteId1;
	//quoteUrl1 = "https://iris.to/post/" + quoteId1;
        //let quoteBaseUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/"
        let quoteBaseUrl = "https://nostter.app/"
        if(note.tags[i][0] === "q") {
	  if(quoteId1 === "") {
	    quoteId1 = note.tags[i][1];  // event id
	    quoteUrl1 = quoteBaseUrl + nip19.noteEncode(quoteId1);
	    quoteIdText1 = "__#q(" + note.tags[i][1].substring(0,2) + ")";
	  }
        }
      }


      // Add <a href>
      let iframe = "";
      let iframe2 = "";
      let httpLinkUrl1 = "";
      let httpLinkUrlText1 = "";  // # https://
      if(content.includes("https://") || content.includes("youtu.be")) {
        let tmp = content;
        for(let i=0; i<10; i++) {
          tmp = tmp.replace('\\n',' ');
          tmp = tmp.replace('、',' ');
          tmp = tmp.replace('\'',' ');
          tmp = tmp.replace('　',' ');
          tmp = tmp.replace('？',' ');
          tmp = tmp.replace('（今こうなる…）',' ');
          tmp = tmp.replace('！',' ');
        }
        for(let i=0; i<10; i++) {
          tmp = tmp.replace('\n',' ');
        }
	//tmp = tmp.replace("https://", " https://");
        let tmp2 = tmp.split(' ');
	let iframeCount = 0;
        for(let i=0; i<tmp2.length; i++) {
	  if(!tmp2[i].includes("\"https://") && tmp2[i].includes("https://")) {  // not <a href="https://>
	    if(tmp2[i] == "https://") {
	      tmp2[i] = "";
            }
	    if(tmp2[i].includes("youtube.com") || tmp2[i].includes("youtu.be/")) {
	      let id = tmp2[i].replace("https://www.youtube.com/watch?v=", "");
	      id = id.replace("https://", "");
	      id = id.replace("m.youtube.com/", "");
	      id = id.replace("www.youtube.com/", "");
	      id = id.replace("youtube.com/", "");
	      id = id.replace("youtu.be/", "");
	      id = id.replace("music.youtube.com/", "");
	      id = id.replace("shorts/", "");
	      id = id.replace("live/", "");
	      id = id.replace("watch?v=", "");
	      id = id.replace("?feature=", "");
	      id = id.replace("&feature=", "");
	      id = id.replace("&ab_channel=", "");
	      id = id.replace("TimHenson", "");
	      id = id.replace("&pp=ygUSU2hpbmljaGkgb3Nhd2EgbGRr", "");
	      id = id.replace("TheSaltLakeTribune", "");
	      id = id.replace("sharec", "");
	      id = id.replace("share", "");
	      id = id.replace("youtu.be", "");
	      id = id.replace("よさげ", "");
	      id = id.replace("&t=30", "");
	      id = id.replace("&t=30s", "");
	      content = content.replace(tmp2[i], "");
//	      content = content + '[[[[' + id + ']]]]';
	      httpLinkUrl1 = tmp2[i];
	      httpLinkUrlText1 = '__YouTube';
	      iframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
	    }
	    else if(tmp2[i].includes("open.spotify.com")) {
	      content = content.replace(tmp2[i], "");
	      const id = tmp2[i].replace("https://open.spotify.com/track/", ""); 
	      iframe = '<iframe src="https://open.spotify.com/embed/track/' + id + '" width="560" height="232" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'
	    }
	    else if(tmp2[i].includes("twitter.com") && !tmp2[i].includes("robots")) {
	      content = content.replace(tmp2[i], "");
	      const id = tmp2[i]; 
	      iframe = '<iframe border=0 frameborder=0 height=387 width=563 src="https://twitframe.com/show?url=' + id + '"></iframe>'
	      httpLinkUrl1 = tmp2[i];
	      httpLinkUrlText1 = '__twitter';
	    }
	    //("hatenablog.com")("nicovideo.jp")("nico.ms")("www3.nhk.or.jp")
	    else {
	      iframeCount++;
	      const url = tmp2[i];
	      // text link
	      if(  !tmp2[i].includes("codepen.io")
	        && !tmp2[i].includes("ctoa-") 
	        && !tmp2[i].includes("nostr.cooking") 
		&& !tmp2[i].includes('https://nostr.build/profilepic.php' )
		//&& tmp2[i] != 'https://nostr.build/profilepic.php' 
		&& tmp2[i].length != 0) {
		// remove image link
	        if(  tmp2[i].includes(".mp4") 
		  || tmp2[i].includes("?set=set4") 
		  || tmp2[i].includes(".png") 
		  || tmp2[i].includes(".mov") 
		  || tmp2[i].includes(".jpeg") 
		  || tmp2[i].includes(".jpg") 
		  || tmp2[i].includes("@jpeg")  // threads img
		  || tmp2[i].includes(".webp")) {
	          content = content.replace(tmp2[i], "");
		}
		// OGP
		else {
	          const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + url + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
	          content = content.replace(tmp2[i], tmpIframe);
		  httpLinkUrl1 = tmp2[i];
		  httpLinkUrlText1 = '__https';
		}
	      }
	      else {
	        //content = content.replace(tmp2[i], "");
	        content = content.replace(tmp2[i], '<a href=' + tmp2[i] + ' target="_blank">' + tmp2[i] + '</a>');
	      }
	    }
	  }
        }
      }

      let contentWarning = "";
      let contentWarningText = "";

      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "content-warning") {  // NIP-36
	  contentWarning = "[!!content-warning!!]";
	  contentWarningText = note.tags[i][1];
        }
      }
      
      /*for(let i=0; i<10; i++) {
        content = content.replace('<img','&lt;img'); 
      }*/

      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "emoji") {
            const emojiURL = note.tags[i][2];
	    for(let j=0; j<10; j++) {
              content = content.replace(":" + note.tags[i][1] + ":",'<img src=' + emojiURL + ' height=40 title="[' + note.tags[i][1] + ']" />');
	    }
        }
      }
      for(let j=0; j<10; j++) {
        content = content.replace(":bow:","🙇");
      }

      /*for(let i=0; i<10; i++) {
//        content = content.replace('<','&lt;');  // <

        content = content.replace('<m','&lt;m'); 
        content = content.replace('</m','&lt;/m'); 
        //content = content.replace('<i','&lt;i'); 
        content = content.replace('<I','&lt;I'); 
        content = content.replace('<S','&lt;S');  
        content = content.replace('<f','&lt;f'); 
        content = content.replace('</f','&lt;/f'); 
        content = content.replace('<s','&lt;s');   // <script>, <style>
        content = content.replace('</s','&lt;/s');  
        content = content.replace('<b','&lt;b');   
        content = content.replace('</b','&lt;/b');  
        content = content.replace('<h','&lt;h');   // <h1> 
        content = content.replace('</h','&lt;/h');  
        content = content.replace('<t','&lt;t');   
        content = content.replace('</t','&lt;/t');  
        content = content.replace('<i>','&lt;i>'); 
        content = content.replace('</i>','&lt;/i>'); 
        content = content.replace('<T','&lt;T'); 
        content = content.replace('<Equal','&lt;Equal'); 
        content = content.replace('<infer','&lt;infer'); 
        content = content.replace('<Hello','&lt;Hello'); 
        //content = content.replace('<a','&lt;a');  
      }*/

      for(let i=0; i<30; i++) {
        //content = content.replace('\\n','<br />');  // repost content
        content = content.replace('\\t','&#009;');  // tab
      }
      for(let i=0; i<30; i++) { // nya
        content = content.replace('\n','<br />');
      }

      let status = "";
      let mute = "";
      let bookmark = "";
      let bookmarkUrl= "";
      if(note.kind === 30315) {  // 30315:User Statuses
        status = "[30315 status]"
	if(note.tags[0][1] != undefined && note.tags[0][1].includes("music")) {
          status = "[30315 status music]"
	  content = '<a href="' + "https://open.spotify.com/search/" + content + '" target="_blank">' + content + '</a>'
	}
      }
      else if(note.kind === 0) {  // 0:Metadata
        status = "[0 Metadata]_"
      }
      else if(note.kind === 3) {  // 3:Contacts
        let followCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  followCount++
	}
        status = "[3 Contacts / follow, save relay (snort/damus/coracle/NostrFlu " + followCount + "]_"
	if(content != "") {
	  content = 'relay list...'
	}
	else {
	  content = '[empty]'
	}
      }
      else if(note.kind === 4) {  // 4:Encrypted Direct Message
        status = "[4 DM]_"
	content = ' Direct Message. This message is not for you.'
      }
      else if(note.kind === 5) {  // 5:Event Deletion
        status = "[5 Delete]"
      }
      else if(note.kind === 8) {  // 8:Badge Award
        status = "[8 Badge Award]"
	content = note.tags[0][1].split(":")[2]
      }
      else if(note.kind === 40) {  // 40:Channel Creation
        status = "[40 Channel Creation]_"
      }
      else if(note.kind === 41) {  // 41:Channel Metadata
        status = "[41 Channel Metadata]_"
      }
      else if(note.kind === 1063) {  // 1063:File Metadata
        status = "[1063 File Metadata]_"
      }
      else if(note.kind === 1984) {  // 1984:Reporting
        status = "[Reporting " + note.tags[0][2] + "]_"
	for(let x=0; x<note.tags.length; x++) {
	  if(note.tags[x][0] == "report") {
            status = "[Reporting " + note.tags[x][1] + "]_"
	  }
	}
      }
      else if(note.kind === 4550) {  // 4550:
        status = "[Post Approval by moderators]_"
      }
      else if(note.kind === 9734) {  // 9734:Zap Request
        status = "[Zap Request]_"
      }
      else if(note.kind === 9735) {
        status = "[9735 Zap]_"
	for(let x=0; x<note.tags.length; x++) {
	  if(note.tags[x][0] === "description") {
	    //content = content + note.tags[x][1].substring(11,75)
            //imageURL2 = getImageURL(note.tags[x][1].substring(11,75));  // avator from
	  }
	}
      }
      else if(note.kind === 10000) {  // 10000:Mute List, snort
        let muteCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  muteCount++
	}
        status = "[10000 Mute list(snort), mute word (nostter) " + muteCount + "]_"
        if(content === "") {
	  content = "[empty]"
	}
	else {
	  //content = "m+BHkF89jh..."
	  content = content.substring(0,8) + "..."
	}
      }
      else if(note.kind === 10001) {  // 10001:Pin List, nostter
        let pinCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  pinCount++
	}
        status = "[10001 pin list (snort) " + pinCount + "]_"
      }
      else if(note.kind === 10002) {  // 10002:Relay List Metadata, nostter
        let relayCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  relayCount++
	}
        status = "[10002 Relay List Metadata / save relay by nostter/coracle/snort " + relayCount + "]_"
        if(content === "") {
	  content = "[empty]";
	}
      }
      else if(note.kind === 10003) {  // 10003:
        let bookmarkCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  bookmarkCount++
	}
	//if(note.tags[0][1] != undefined) {
          status = "[10003 Bookmark list " + bookmarkCount + "]_" 
	  if(content === "") {
	    content = "[empty]"
	  }
	  else {
	    content = "rgOCelOjTo..."
	  }
	//}
	//content = ""
      }
      else if(note.kind === 10005) {  // 10005:
        let listCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  listCount++
	}
        status = "[10005 Public chats List " + listCount + "]_"
      }
      else if(note.kind === 24133) {  // 24133:Nostr Connect
        status = "[24133 Nostr Connect]_"
      }
      else if(note.kind === 30000) {  // 30000:Categorized People List
        status = "[30000 Follow sets_"
        //if(note.tags[0][1] != undefined && note.tags[0][1] === "mute") {
          let muteCount = 0
	  for(let x=0; x<note.tags.length; x++) {
	    muteCount++
	  }
          status = "[30000 Mute list (nostter/damus/snort) " + muteCount + "]_"
	  if(content === "") {
	    content = "[empty]"
	  }
	  else {
	    content = "NeT1Xn3AXhQAi~"
	  }
	//}
	/*else {
	  status = "[Categorized People List]_"
	  content = note.tags[0][1]  // notifications/lastOpened
	  return
	}*/
      }
      else if(note.kind === 30001) {  // 30001:Categorized Bookmark List
        let bookmarkCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  bookmarkCount++
	}
	//if(note.tags[0][1] != undefined) {
          status = "[30001 Generic lists(Bookmark) / " + note.tags[0][1] + " " + bookmarkCount + "]" 
	  if(content === "") {
	    content = "[empty]"
	  }
	  else {
	    content = "rgOCelOjTo..."
	  }
	//}
	//content = ""
      }
      else if(note.kind === 30002) {  // 30002:(snort tag follow)
        status = "[30002 tag follow(snort)]_"
	let tags = ""
	for(let x=0; x<note.tags.length; x++) {
	  if(note.tags[x][0] === "t") {
	    tags = tags + "#" + note.tags[x][1] + ", " 
	  }
	}
	content = tags 
      }
      else if(note.kind === 30003) {  // 30003:
        let bookmarkCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  bookmarkCount++
	}
	//if(note.tags[0][1] != undefined) {
          status = "[30003 Bookmark sets / " + note.tags[0][1] + " " + bookmarkCount + "]" 
	//}
	if(content === "") {
	  content = "[empty]"
	}
	else {
	  content = content.substring(0,8) + "..."
	}
      }
      else if(note.kind === 30008) {  // 30008:Profile Badges
        if(note.tags.length > 1 && note.tags[1].length > 0)
	{
          let badgeCount = 0
	  for(let x=0; x<note.tags.length; x++) {
	    badgeCount++
  	}
          status = "[30008 Profile Badges " + badgeCount + "] " 
	  content = note.tags[note.tags.length-2][1].split(":")[2]
	}
      }
      else if(note.kind === 30009) {  // 30009:Badge Definition event
          status = "[30009 Badge Definition] " + note.tags[1][1] + " , " + note.tags[2][1] 
	  if(note.tags[3][1] != "") {
	    content = "<img src=" + note.tags[3][1] + " height=150>"
	  }
	  else {
	    content = "[empty]"
	  }
      }
      else if(note.kind === 30078) {  // 30078:Application-specific Data
        status = "[30078_Application-specific Data]_"
	//content = note.tags[0][1] 
	//return
	for(let x=0; x<note.tags.length; x++) {
	  if(note.tags[x][1] === "nostter-reaction-emoji") {
	    status = status + "[" + note.tags[x][0] + " nostter-reaction-emoji]_"
	  }
	  else if(npub == "npub150qnaaxfan8auqdajvn292cgk2khm3tl8dmakamj878z44a6yntqk7uktv" ||
	          note.tags[x][1] == "" || 
	          note.tags[x][1] == "ostr-engine/Nip28/rooms_joined/v1" || 
	          note.tags[x][1] == "read-mark-map" || 
	          note.tags[x][1] == "OtherConfig" || 
	          note.tags[x][1] == "nostr-engine/User/settings/v1" || 
	          note.tags[x][1] == "plebstr" || 
	          note.tags[x][1] == "nostr-engine/Nip04/last_checked/v1" || 
	          note.tags[x][1] == "RelayConfig" || 
	          note.tags[x][1] == "nostr-engine/Nip28/last_checked/v1" || 
	          note.tags[x][1] == "ff_chats") {
	    return
	  }
	  else if(note.tags[x][0] === "d") {
	    status = status + "[d" + " " + note.tags[x][1] + "]_"
	    content = "" 
	  }
	}
      }
      else if(note.kind === 30311) {  // 30311:Live Event
        status = "[Live Event]_"
//	content = content + "[empty]_"
      }
      else if(note.kind === 30023) {  // 30023:Long-form Content
        let noteCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  noteCount++
	}
	if(note.tags[0][1].includes("nosli")) {
          status = "[Nosli "  + noteCount + "]_"
	}
        else {
	  status = "[30023 Long-form Content]_"
	}
      }
      else if(note.kind === 31989) {  // 31989:Handler recommendation
        let tagCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  tagCount++
	}
        status = "[31989 Handler recommendation " + tagCount + "]_"
	if(note.tags[0][0] === "d") {
	  status = status + "[d" + " " + note.tags[0][1] + "]_"
	  content = "" 
	}
//	content = content + "[empty]_"
      }
      else if(note.kind === 31990) {  // 31990:Handler information
        let tagCount = 0
	for(let x=0; x<note.tags.length; x++) {
	  tagCount++
	}
        status = "[31990 Handler information " + tagCount + "]_"
//	content = content + "[empty]_"
      }
      
      bookmark = "-bookmark"
      //bookmarkUrl = "https://nostr-bookmark-viewer3.vercel.app/p/" + nprofile
      bookmarkUrl = "https://nostr-bookmark-viewer3.vercel.app/p/" + npub

      let nozokimado = "-nozoki"
      //let nozokimadoUrl = "https://relay-jp.nostr.wirednet.jp/index.html?" + npub
      let nozokimadoUrl = "https://relay-jp.nostr.wirednet.jp/index.html?" + nip19.noteEncode(note.id)
      
      const note1 = nip19.noteEncode(note.id);

      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              <a href={userUrl} target="_blank"><img src={imageURL2} width="60" height="60" /></a>
                <a href={channelUrl} target="_blank">{channel}</a>
	        {contentWarning}{contentWarningText}{contentWarning}
                {status}{title}{reply} <a href={replyToUrl1} target="_blank"><img src={replyToImageURL1} width={replyToImageSize1} height={replyToImageSize1} /></a>
		<a href={replyToUrl2} target="_blank"><img src={replyToImageURL2} width={replyToImageSize2} height={replyToImageSize2} /></a>
		<a href={replyToUrl3} target="_blank"><img src={replyToImageURL3} width={replyToImageSize3} height={replyToImageSize3} /></a>
		<a href={replyToUrl4} target="_blank"><img src={replyToImageURL4} width={replyToImageSize4} height={replyToImageSize4} /></a>
		<a href={replyToUrl5} target="_blank"><img src={replyToImageURL5} width={replyToImageSize5} height={replyToImageSize5} /></a>
                {parse(content)}
	        {follow}
		{parse(iframe)}
		{parse(iframe2)}
		<a href={quoteLinkUrl} target="_blank">{quoteLinkText}</a>
		<a href={quoteLinkUrl2} target="_blank">{quoteLinkText2}</a>
		{eventLinkUrlText1}
		{eventLinkUrlText2}
		{eventLinkUrlText3}
		{eventLinkUrlText4}
		{eventLinkUrlText5}
		{eventLinkUrlText6}
		<a href={linkUrl1} target="_blank">{linkUrlText1}</a>
		<a href={linkUrl2} target="_blank">{linkUrlText2}</a>
		<a href={linkUrl3} target="_blank">{linkUrlText3}</a>
		<a href={linkUrl4} target="_blank">{linkUrlText4}</a>
		<a href={linkUrl5} target="_blank">{linkUrlText5}</a>
		<a href={quoteUrl1} target="_blank">{quoteIdText1}</a>
		<a href={httpLinkUrl1} target="_blank">{httpLinkUrlText1}</a><br />
                <a href={image1Url} target="_blank"><img src={image1Url} height={inlineImage1Height} /></a>
                <a href={image2Url} target="_blank"><img src={image2Url} height={inlineImage2Height} /></a>
                <a href={image3Url} target="_blank"><img src={image3Url} height={inlineImage3Height} /></a>
                <a href={image4Url} target="_blank"><img src={image4Url} height={inlineImage4Height} /></a>
                <a href={image5Url} target="_blank"><img src={image5Url} height={inlineImage5Height} /></a>
                <font color="orange" size="2">{moment(createdTime).fromNow()}</font>
                -<a href={noteUrl} target="_blank">{createdTime}</a>-{note.created_at}-
                ({noteIdShort}){client}
		<a href={proxyUrl} target="_blank">{proxy}</a><br />
		<a href={freefromUrl} target="_blank">-FreeFrom</a>
		<a href={snortUrl} target="_blank">-Snort</a>
		<a href={noStrudelUrl} target="_blank">-noStrudel</a>
		<a href={checkerUrl} target="_blank">-checker</a>
		<a href={bookmarkUrl} target="_blank">{bookmark}</a>
		<a href={nozokimadoUrl} target="_blank">{nozokimado}</a>
		<a href={streamingUrl} target="_blank">{streaming}</a>
            </div>
          </div>
        </li>
      );
    });
    return posts;
  }

  const getImageURL2 = (pubkey) => {
    return 'https://i.gyazo.com/3e33d8e30a6db0868ad7a5beee61d5d2.webp';
  }

  const getImageURL = (pubkey) => {
      let npub = nip19.npubEncode(pubkey)
      let image =''
      if (pubkey === '43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906') {
        // maya
        image = 'https://i.gyazo.com/3e33d8e30a6db0868ad7a5beee61d5d2.webp'
//	image = 'https://i.gyazo.com/6f4959939afeb35e64ead00af7a74bb7.jpg'
      } // @@ 
      else if (npub === '') {
        image = ''
      } 
      else if (npub === 'npub1ap4h3mkal5se8ukxp8pgg8gwf2c9uwjxxc33vqnh07y4ph07lm7qwqlvsr') {
        image = 'https://s3.7mi.site/nana-miss/d22155c1-01f7-4164-87e1-f531f7d8a1e8.png'
      } 
      else if (npub === 'npub1ezaqlegz6fzeydkn5cwm82ejf0zw8rw6s2zn5gmwf663nhm539asageeet') {
        image = 'https://image.nostr.build/913935d9ef319e762a8c18208777e52ce8566d5c3801a4feb8d1a6274dd71140.jpg'
      } 
      else if (npub === 'npub1uqpvezl04655qrdk5cth9apa83czjzzzl0rhevs6cuq2vyvtz75szq29xh') {
        image = 'https://files.syo.bar/0495b142513dc896a80d483fdc464cc7573f3bf2d1acb2dad08dffee9f369c1e.webp'
      } 
      else if (npub === 'npub1nxeszl8l367k0sdfg7evnp9y386wcdwarst9p59908cra8zw8j3qxtwwze') {
        image = 'https://media.misskeyusercontent.com/io/webpublic-3089c87e-5524-4522-9190-4b4f7297c73f.png'
      } 
      else if (npub === '') {
        image = ''
      } 
      else if (npub === '') {
        image = ''
      } 
      else if (npub === '') {
        image = ''
      } 
      else if (npub === '') {
        image = ''
      } 
      else if (npub === 'npub1762knx5ffzv5sqgayjr4mwt6tvyjn4rvuyc4w43yy726p95mxhes05g3cs') {
        image = 'https://nostrcheck.me/media/public/f0f991922b28b7170e52119df3d1b4667ec622a35c6b465eea406d45b07a9552.webp'
      } 
      else if (npub === 'npub1w2l7k0j8tnd4zjfgr3tm5spefehsjcyytp4xhgq4lecs3263ndgs6lx5jx') {
        image = 'https://image.nostr.build/6fee887243a57945734ba2f30a24b22402275368ed61eb258cdd01d2a354e4c2.jpg'
      } 
      else if (npub === 'npub1z9phepse5ttqrv4fj2ypr8cjx22av0hq2ywve5uny62je2rsr69sx0r7xf') {
        image = 'https://media.sushi.ski/files/71ac51fe-11a0-4bd0-a200-8f2fee1ff214.png'
      } 
      else if (npub === 'npub1lz9578rqe4m605d4wprqg0c0nqaqls0ppd9hjqc8rk80jjykqdqsvmmarq') {
        image = 'https://github.com/totegamma.png'
      } 
      else if (npub === 'npub1h580h07f9nhxnx9k4mdpttukngr4nhzf0ze67a2uqkyq3mjchq8qn6v5c7') {
        image = 'https://s3.gammalab.net/profile/tote-icon.png'
      } 
      else if (npub === 'npub1twfjrupekm2tlf90hl46s9k8leyxcqez39849lszd6w7687rdf8s2tsz2f') {
        image = 'https://image.nostr.build/56224389c367626d8c270235df01f44e809e406bc058f66cd2265a4a8bc0506c.jpg'
      } 
      else if (npub === 'npub17y44k3jspquss4mnfmwfmza7tlmcy7xklx9spa49n5d8ax2t8dtqugvw6l') {
        image = 'https://www.gravatar.com/avatar/19606b92a428ca0fed7fe5291bcfd865'
      } 
      else if (npub === 'npub1udm7adxx3xf9p2nl25ka8h0a0juuhzlhur8jzc5lqx4n5wklfq7qthu9tc') {
        image = 'https://showhyuga.pages.dev/nostricon/cake1.png'
      } 
      else if (npub === 'npub1tuj3pgzpn75dw0cscnx69e9cz8ge439gjfpuna3xt3r2p4uk8ywsftkq06') {
        image = 'https://icon.nokotaro.com/kanako_sweetches_512.png'
      } 
      else if (npub === 'npub1et5n58h9zkd43vm3q8qj6yuk62pr2ewcqugyt73qht34telrqpms7vj5c7') {
        image = 'https://media-momo.mame.moe/momo.mame.moe/accounts/avatars/000/000/001/original/d662e166380be6f7.png'
      } 
      else if (npub === 'npub18zn5jful49k6mrdc7y4t2x70c5dtfdt0gxtndfrgasx8qcukj4as2shuyl') {
        image = 'https://void.cat/d/7RyeGkDADqgBWNF3s4FbSk'
      } 
      else if (npub === 'npub1gzw92wwjpq30gclquc5hugta2afpp8xmmn4uy838ysr47unpqfzsnf52uv') {
        image = 'https://nostrcheck.me/media/public/d1eea5b6bdaf971bd10d1a934f7aebc5153626c6f478def599d38996a94a7749.webp'
      } 
      else if (npub === 'npub1sk0x00vvc4s46ljs7y9qfvu2u3fzufy3au4kca73jkxssckm6sdsu9ku2a') {
        image = 'https://nostrcheck.me/media/public/455c67a1a1eca95d2f639c62614c5b7fcc1eccb5abc0c4a093e28b29c5a329c3.webp'
      } 
      else if (npub === 'npub163z478qn84nynwrfqcgs6g3mdpqcqkdzupjy06m4nmknctthswws7rn8uz') {
        image = 'https://pbs.twimg.com/profile_images/1194739470/071224-073842_400x400.jpg'
      } 
      else if (npub === 'npub1c0pw59sdy4euuy7ghaxtkm73ug6gm8puhjw3fy4wtes6caxt8zasufn4de') {
        image = 'https://image.nostr.build/1321af63df9978855ff60c160753812be8a51c173cb30ed184cb3b8f85485e54.jpg'
      } 
      else if (npub === 'npub12tnzjs3varzdp2r87y3wernk0cav2fcs75e2m3tyakhrj0cjpyyqfn4f7c') {
        image = 'https://image.nostr.build/19baef70054283a3cef51fb3a7b35597ec24764f4ca888daf081d5fb47b2f2ef.gif'
      } 
      else if (npub === 'npub1yg6m89jp5t3w64e8n2nyd8vezt3gc8c05jylleht9v0x30zlx8fqqsydgh') {
        image = 'https://www.gravatar.com/avatar/19606b92a428ca0fed7fe5291bcfd865'
      } 
      else if (npub === 'npub10denkun2slqlr53mjahfrx92f24nphmpy4zgkxjygmpw3h23hunsrj806q') {
        image = 'https://image.nostr.build/8d9def9a4a4db745dbe7d6a7e639a437781892627c4d667b20b0402a057bf30f.jpg'
      } 
      else if (npub === 'npub1ml7nllp64d3fxx5vkz8s52jg3kn5wq7s35w7lyux3t3s7kk700ss548cua') {
        image = 'https://nostrcheck.me/media/public/281a460c96e63a7d7665c27d18a8828d9c2fee9b8b0c79e3aedd0970446e0293.webp'
      } 
      else if (npub === 'npub1l2zcm58lwd3mz3rt964t8e3fhyr2z5w89vzn0m2u6rh7ugq9x2tsu7eek0') {
        image = 'https://nostrcheck.me/media/public/d1ddbaef5b3f6da91ec218e7417f324a96ff00d53621df2aeb0de6337efa8f67.webp'
      } 
      else if (npub === 'npub1xtscya34g58tk0z605fvr788k263gsu6cy9x0mhnm87echrgufzsevkk5s') {
        image = 'https://cdn.jb55.com/img/red-me.jpg'
      } 
      else if (npub === 'npub163qhxuj7sf4hagnzrayrfypfh5cld2lshcqzqsqpqc53fy6m87sqlrvjv9') {
        image = 'https://void.cat/d/NSL2Uya8ZPcyzW5bxsrdFB.webp'
      } 
      else if (npub === 'npub166lrvl8jdztjv0p209ahujxjg2xr9pcvnr3clvcm4vcp7rcyc6eqzy7zj8') {
        image = 'https://nostrcheck.me/media/public/7ce423acf591595f642f46b4333c609275fa3918e745ea2d5af07f567a0eaf0d.webp'
      } 
      else if (npub === 'npub1g5vqgf8jfewl2rfc020mlawq9r7grkc5adzvzamv6harmmwvymvq5czrmf') {
        image = 'https://pbs.twimg.com/profile_images/1541807671019352064/tfk6aKlu_400x400.jpg'
      } 
      else if (npub === 'npub19563pyg6xpt96cxu28xhchzmhr55532kse4sdr5kdt5v6p6nxhrskhyqny') {
        image = 'https://nostrcheck.me/media/public/4f386c250b7e9675a01b25c21426f619fcff6aec98d0d16e359838b5c24eefe2.webp'
      } 
      else if (npub === 'npub1q7qyk7rvdga5qzmmyrvmlj29qd0n45snmfuhkrzsj4rk0sm4c4psvqwt9c') {
        image = 'https://avatars.githubusercontent.com/u/2363?v=4'
      } 
      else if (npub === 'npub15rjycufudtr6wvm0mlgwvsctrxsfpxlc5y8r8hs6qjm5ggn4c3tsppna6n') {
        image = 'https://cuconoki.net/public/icon.jpg'
      } 
      else if (npub === 'npub19lpfgx9yrgv820jkatre2w5v9laap3c33gudd736usdeaz7wdv9qu5camf') {
        image = 'https://pbs.twimg.com/profile_images/1101891498/0625019sakana_400x400.jpg'
      } 
      else if (npub === 'npub1ztfvnuxfaw8c0y4ca794pyfpskwajz3h08c67vy0hfstevweuyrsw0e4ve') {
        image = 'https://kunigaku.github.io/public/news_icon.png'
      } 
      else if (npub === 'npub15rycjjk60qzaf22ptfyyadnt7uhcmnkwcs2t8er7y3r9wwjt6z9ssywcn8') {
        image = 'https://nostr.build/i/p/5a1b683c8226df5c47228c60a991a744159704ffbac3410c972a6a24c6603f01.jpg'
      } 
      else if (npub === 'npub1e3wcsda3cjymxvp8rn8jnkkvwa38sg4dgc9mxjmel63cj2nnym0s49g5rn') {
        image = 'https://image.nostr.build/b87d86d1d12163a092e5e5bf0f81f7d213ba4b800bb05749625ce4db9f2308b5.jpg'
      } 
      else if (npub === 'npub1namazu7um9xvgfpax6yrk9tl3segxpgac67jx7cuttzqp7usem9sqavlhz') {
        image = 'https://void.cat/d/SUGwzKgvoyY87HhTNstPYY.webp'
      } 
      else if (npub === 'npub1jw4e8qh6vmyq0n2tkupv7wlfu5h59luk98dcfedf03anh5ek5jkq936u57') {
        image = 'https://heguro.com/public/nostr/heguro-icon-20230206.jpg'
      } 
      else if (npub === 'npub133vj8ycevdle0cq8mtgddq0xtn34kxkwxvak983dx0u5vhqnycyqj6tcza') {
        image = 'https://penpenpng.github.io/static/icon-powa.webp'
      } 
      else if (npub === 'npub1ssv4gjrsqmw8fm2hje3av4kafvx23w7me2mfmgks6dm5ktamzsjqajuvfd') {
        image = 'https://void.cat/d/Q4MCnRoXPouXPyLPDseKJ8.webp'
      } 
      else if (npub === 'npub1th4he3tn87gahsdu0stadv2hey93tpkvpk2lnm04k6tes7lddqtsh4mnln') {
        image = 'https://media.mastodon.chotto.moe/accounts/avatars/000/000/001/original/dd1d249b25e5ae9a.jpg'
      } 
      else if (npub === 'npub1e8ayygy4aactcd33d4vasdlp2fjwj7ehs9aqkwg9j7kattn9nr0q9u7kmr') {
        image = 'https://image.nostr.build/64a682074a96d0c1eea1daba9e6a2dc71bb37f3f158634844d6780116adfa213.jpg'
      } 
      else if (npub === 'npub1hjaa9j22we9cfn6qep7mmkh2usysv9hgzq6sqd3re9w8dd0qcdxq9txvxw') {
        image = 'https://media.honi.club/files/webpublic-329c93dc-1373-453d-9075-7cfce28e2b3d.png'
      } 
      else if (npub === 'npub1ju9ytvpyg8undhdfwpjlctuju5nnpju5hmd5d53sq547gckw4xpscyjz9f') {
        image = 'https://www.monesynth.io/_next/image?url=%2Ficons%2Fhal.webp&w=1920&q=75'
      } 
      else if (npub === 'npub1v3n0q0ell57z2vrqq55a2y5rsyhr3yfuj8pvun77p8p5phm8eldq2vpdyp') {
        image = 'https://nostrcheck.me/media/public/c1a499f87c5e6f72973020400c437dd42d57ded59333ef5365aaaa5cfa31f6a7.webp'
      } 
      else if (npub === 'npub19ulz38wlkm5xvhqehj9lan447csgu9a8a62k6ztp26ugtc9cp9hq5dsr5k') {
        image = 'https://pbs.twimg.com/profile_images/1709537408222646272/mF533kDv.jpg'
      } 
      else if (npub === 'npub1s02jksmr6tgmcksf3hnmue7pyzlm0sxwarh7lk8tdeprw2hjg6ysp7fxtw') {
        image = 'https://nostrcheck.me/media/snowcait/f5d75b50763570ba8f001f2f86c0bcccdcb025b48e1ab091353735fa49d1f76b.webp'
      } 
      else if (npub === 'npub1k0jrarx8um0lyw3nmysn50539ky4k8p7gfgzgrsvn8d7lccx3d0s38dczd') {
        image = 'https://kojira.io/kojira.webp'
      } 
      else if (npub === 'npub13cmlnzle8vfulw04ka2c2890v3g6smad8zgtm5peh0pla7st0wgslc7muk') {
        image = 'https://nostrcheck.me/media/public/d8f8c30c2bd8ee64abe2d7be2b78d8c1e96ddf6d70bc61bca535618abba1642c.webp'
      } 
      else if (npub === 'npub14dkz8wag0e8kwgx6sp2w3nrq0lk7qju432n69p9qhsvxnq8jkmys49ssqh') {
        image = 'https://image.nostr.build/9ae13caa5940587376fb8f63546a894c62ffbd73333e4b66f0e65e29afdb6c0d.jpg'
      } 
      else if (npub === 'npub1dl4x52a5xeppqyt8gm7j8gvn3sfzysggrmdjw58v346mf6m0emdssmqekp') {
        image = 'https://image.nostr.build/c6f8ae15642befb82bcd33aae624d2f4b0ff768c1709d325381003abf77cf4d3.jpg'
      } 
      else if (npub === 'npub18hdtmhl0xl67yp256cavq0fswrvh6ajcj4w2jan8yvh527mlklds6e9403') {
        image = 'https://nostrcheck.me/media/public/135a9f103d6423dd8ecfbced09f62bbd746164e74301ba24a095b13daecd3bab.webp'
      } 
      else if (npub === 'npub1ugfyg6e2a7hlfjpje2v72266ufmt0hcp6qu4g6ndh4sk06rzsyusc74dpn') {
        image = 'https://nostrcheck.me/media/public/c5b7327f17d7d8669f1baeaa7369972f39fbcd0700af20c68973138beb92309e.webp'
      } 
      else if (npub === 'npub12uuzj6elk7xkpqkac26xwau936y0pguzm3cu9da2xas88unjkcps4d7u9p') {
        image = 'https://image.nostr.build/7b559e58e485d149366e644e736133a3e251ca87004667c13ced90567b6c269a.jpg'
      } 
      else if (npub === 'npub1hu02hkdrw6ymyaxugmu7lrmytyefrhpsngj9at0zdh4rq0g83q6s7x9tmq') {
        image = 'https://pbs.twimg.com/profile_images/1707037997605212160/-PaUm3_p_400x400.jpg'
      } 
      else if (npub === 'npub1ye5ptcxfyyxl5vjvdjar2ua3f0hynkjzpx552mu5snj3qmx5pzjscpknpr') {
        image = 'https://nostr.build/i/p/nostr.build_d8a82acc6ac86b2e167ab2dbfb3a2eafb01979801ad68ec827d7693a6e76b316.png'
      } 
      else if (npub === 'npub10smgemvaepx992lq9wa79fmxjzt0ttvly9v3nk9p9y840duem7jsu07534') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_7050170562175398971703863158.webp'
      } 
      else if (npub === 'npub1ykuyd0qgnfd9rqtvlmf5xe0ufjuyf0nxv8fhwsr0u2yggxn45twqk49ska') {
        image = 'https://nostrcheck.me/media/public/1dcd911e7b7ff89a96d567be9d06dd90d5acbe19fa2ae2e3a176ff0400ca9b22.webp'
      } 
      else if (npub === 'npub1m8zvlc72hztas98we756jpskca0cvwe7gulwyq606ca53jjx75lqvr865y') {
        image = 'https://image.nostr.build/c0d2779998e61af66687541723c3f1d3150b34b1e7f7d8968b0f542ce6a4be14.jpg'
      } 
      else if (npub === 'npub1yh8efhc3dd3fugnapkpz4dtsdwhnjfsery7mjg9h7uxnlnfztjvsyrkp2m') {
        image = 'https://pbs.twimg.com/profile_images/1601886120140476417/A3KPa71b_400x400.jpg'
      } 
      else if (npub === 'npub1tn9c6gkjv8y76k7s5nsmmu5mgy7pp4pmc8eau9pvxv8wlgsxrdmqgc66ke') {
        image = 'https://image.nostr.build/53d97479ad847e8dee4998907f888af4a0ecea882d297ea70aebfc61cecafffa.jpg'
      } 
      else if (npub === 'npub1cmrfel9eplcsd6y33wpqkcnj059qrvp33flt4nxq4wlw0awqvr6qd8228e') {
        image = 'https://image.nostr.build/348c70635f3ebd9007c6c189576ecc693a932cbc3e681ab402770a60c7491fec.jpg'
      } 
      else if (npub === 'npub1hxdz5pw4uqfxsls6f4ezpqhsxwxq903z3xwszk8zhkl08nem2g0qwec49n') {
        image = 'https://nostrcheck.me/media/public/24856f7ef32e1892bda6d8178527142a1346d06323e8f46e20db3a8b45957b83.webp'
      } 
      else if (npub === 'npub1r4cflnluywtf92r6ug4ldjv6zrc6yud943gc0t0j5cmkx405nkjscl9fmt') {
        image = 'https://nostr.kojira.net/will_neighbor.jpg'
      } 
      else if (npub === 'npub1wt5dv4y46evudluddxxuumwpkkp2fhuzltcs9cjxj9phgvaffvsqllye95') {
        image = 'https://kojira.io/brrcm.webp'
      } 
      else if (npub === 'npub10qts94q2q75ya5798jyrl5gzqy8xrwtfzk02kf22cm4qmt0qf4cqyzhv24') {
        image = 'https://s3.arkjp.net/misskey/5810edfe-777b-47e1-b1c4-ce35a1e89d57.jpeg'
      } 
      else if (npub === 'npub1takur0epyq0ttpv8x7xef6g5y7vqfvy5rvj78cqsxntkymrpfy7qzpls6g') {
        image = 'https://image.nostr.build/5253a3e5f25619bbc9a93066597c192741a5c1e49c52450bb90601e473eaa1e9.jpg'
      } 
      else if (npub === 'npub1zaxudwsms6y8eneynuf4ktvhpltmfaufqyve5xxx46k6ng482qfqmg376j') {
        image = 'https://nostrcheck.me/media/public/11d8e8b5ece07870ff4f901be73a505e99bd6c38351e53ca5cb36c5ebc92dacd.webp'
      } 
      else if (npub === 'npub1fttawyzx7v674kn0la99ggwf53q6vuufq6nw4qj9krwttyh73nyqlmhpsa') {
        image = 'https://image.nostr.build/58233dd47d4b799b5d1b1f8dea2e19bdc6b4840c8759fd695df587eb0b220439.jpg'
      } 
      else if (npub === 'npub1cuqeaw5kygdtrlr0errsgrlypmxcxzzawv59y33vctukxk3yg7wqs4966e') {
        image = 'https://nostr.build/i/251c4db0b7bcf394a256e0161fa689d8b54c060feb052b5bb73fca4dcabb4644.jpg'
      } 
      else if (npub === 'npub1j2az4qzc0809xutq8lejaax4ywlqynquh7nf3ajeuak0w97l9ltssyx55c') {
        image = 'https://image.nostr.build/5d376587f0273058fe23204f5b8a3c17c2c11376e8ca1d664680439b82f7ca6c.jpg'
      } 
      else if (npub === 'npub1tnw8g7sagu0mhmu4d9khw6antggltdt36d3yr90770ewmcdvqpqqr8rrgg') {
        image = 'https://image.nostr.build/53835a76c421ab6ee445364cb05f8d3cd4925528c12f7f0f1574f0801643e5b2.jpg'
      } 
      else if (npub === 'npub1nk4g3unwu3zk05td55hahu5py56h2wt23cls2uz5ugpukvsrj09qqaxav3') {
        image = 'https://nostr.build/i/fbea7c8a0aa61216740d5748c83d7655c0cf8570a9de6091f2bbe395fbe043bb.jpg'
      } 
      else if (npub === 'npub15vl9fr0aegfd8azp59gypae72vjq666n5xdx8jflvl40uggmzzmqcg859t') {
        image = 'https://image.nostr.build/53763ea0261283766c8b8d275d4674f8385bc0961a15cb1ff11ab7fcb23197a5.jpg'
      } 
      else if (npub === 'npub1fphjyv4gv7n06xzhfjkjcpghje8ptghd8cm22dx65cjfjuc6kndqe8jk4k') {
        image = 'https://image.nostr.build/ad80f0474486205e50db59de0efd55c19608d9ba291825c9129d0a7ddc2552ff.jpg'
      } 
      else if (npub === 'npub1qs9dsslqqn9d3rfs5ljhnma0dzrnzcesmwvvragjgchwu95jqqus9mcxwh') {
        image = 'https://rinokurata.com/damus/S__56262660.jpg'
      } 
      else if (npub === 'npub10zeurmg22wc89l8m3npw9cyu45cun0lvs6w3ep69cdpa25pna65s0994qz') {
        image = 'https://i.nostr.build/E0JJ.webp'
      } 
      else if (npub === 'npub1x3azxuysp5vmfer4vgs4jn5tmfcx4ew8sh0qnev7gczljxsr7jwqa3g4el') {
        image = 'https://image.nostr.build/30df7e4bc9e7b2b8a79f2c72bc45db596b952ccf1da5388e5bce04119a195c6b.jpg'
      } 
      else if (npub === 'npub1ea3ww4qkdvt3q47wdyxf0d44643pnm7qm9hcavydt0qgeqgvr3rq8as9uj') {
        image = 'https://image.nostr.build/377d8f0a4aa88b0997e9e66977d837600ecb7c29785882a4bc89749f49899f07.jpg'
      } 
      else if (npub === 'npub1t7s68hjxv3q8sm7clu8cex34e3e4wu6ygpd6y5gphxphf88y8jsqv6r3uw') {
        image = 'https://image.nostr.build/9892accef067428cff74772e691535c58b7ff5f0c048c6ce7d4ef07a0e0b6e45.jpg'
      } 
      else if (npub === 'npub1nml73gurf6e97rjsxyg739mue24wjutfqtsh3u8wg7262ga79k7sv59fh0') {
        image = 'https://nostrcheck.me/media/public/899196cf0a22892cfc9ae10c90b9a548b94db8c8ec8abd4c2a0a8b9984d9ea68.webp'
      } 
      else if (npub === 'npub1w9z4cvccxf0p9lvwrcvs4xq7g0765mnhwevyu5lx9vy6h59c5rys3m2dlm') {
        image = 'https://image.nostr.build/2e25952eaea7b082c4f179c89e06dbbd4e90f6e78acec11e3140d4059bc9ded7.jpg'
      } 
      else if (npub === 'npub15ttxzgfcf2yr0xc0zcggdty5v58n388jgnryl5xjpykzex9mwcfsfpuj93') {
        image = 'https://kouhouyoukai.github.io/images/shadow-cat-icon-800.svg'
      } 
      else if (npub === 'npub17fqvnsj3ps7x856jttg3a5fswaqaphl7eh4nuhxhmgfrjmqvp2rqrcuyff') {
        image = 'https://image.nostr.build/5361bf7421c2c51c42ee39277f3837d9f612086c6c6ddf9b4837b6a2fe3af4cd.jpg'
      } 
      else if (npub === 'npub19mgjqqla88h0yvhfxqp9xnve578g2f39f79zujw40e20lxyw72ns3j7x3v') {
        image = 'https://image.nostr.build/827d8ae877427842768f4e8e2f3825b94365ea9470131d66e4248089fd289e2e.png'
      } 
      else if (npub === 'npub1kscpkjnfj7x9fd435rv27ts0fw32gp3uswt3ehy7uexvm7u57pws367hv0') {
        image = 'https://media.nijimiss.app/null/09fb9f22-a557-4fee-adec-b4e161015164.png'
      } 
      else if (npub === 'npub1jgswa4xlp6xkknvg3z6vdk3rgc5rld7wn3yjd0p0gyupj4qx6g3q507u02') {
        image = 'https://s3.arkjp.net/misskey/webpublic-bc69f1a8-5232-400f-9a16-b7b8e6b9273e.png'
      } 
      else if (npub === 'npub1qu5d7xl45ym80qfnn6ktqvxqrrq0zrwv5m628pp3jmclwffnus8qaxj8um') {
        image = 'https://s3.arkjp.net/misskey/062ff2c5-35e5-4749-8e2a-e7f54cf9ac4d.jpg'
      } 
      else if (npub === 'npub1m0lushlwhq0ug0sfnea0hvatmt6rxfs94pnp7zc0t9tv5hd2vncsz7874j') {
        image = 'https://oransns.com/system/accounts/avatars/000/000/036/original/fe79c91ec09346ee.jpg'
      } 
      else if (npub === 'npub10az0l5et89644edj9sxynnk653xkddfl6v8yvw3rtym8yy9pw3ys8n07x8') {
        image = 'https://nostrcheck.me/media/public/70ae58f5b4c56107e92f97f9638379eb7eb573f8dfef2b81751ebd349fc49b21.webp'
      } 
      else if (npub === 'npub1zjr4tens4kekawa998l5dw0ntq9ynxfgyjwa0xn5nv59x3gvzplsfqql0n') {
        image = 'https://image.nostr.build/9aa335e2113746ea34f6d8f1a0a1cd118fcc28f42e48d38958975d64206c7b96.jpg'
      } 
      else if (npub === 'npub1dzmp94s4zhcv6ryx2pq9e4rufjmrs2syphal6a4fjy8eaf7cm6aslza7fz') {
        image = 'https://pbs.twimg.com/profile_images/378800000504742189/03e132f51bc3166a7c304516b58131a3_400x400.jpeg'
      } 
      else if (npub === 'npub1ktzp8kerd3v6uavul6dx2rkv5pg04vrkpta4p0fcxvmcdtjgdr4q09gga9') {
        image = 'https://nostr.build/i/78215173491a7ffe6103029d7ed7b41add4e43b93cabe01d1854143b8f29dee1.jpg'
      } 
      else if (npub === 'npub1pqehy4x5s85sza8rpdtvg2vsn6355a62rp9ys25yhr84p4pd32eqr0wvxx') {
        image = 'https://nostrcheck.me/media/public/1c96cfcfe06d070af1887bdaf4d17e45236e2a6898740b9d45a9949532223d1d.webp'
      } 
      else if (npub === 'npub15f9l48hjadg5ah4f2vlxc37lzkkh2gehy9zujn9ul4lnpjh0ck7qfgrq75') {
        image = 'https://nostr.build/i/aa649e4839f308a48818d8b461f06674cf3c6fd4fd111fb05088bf1d1e55aa49.jpg'
      } 
      else if (npub === 'npub15sln9x8434l57pamd4qderxe7nmjj5up75x08guwrqnnhwje354s2u32sj') {
        image = 'https://image.nostr.build/218202c9871175ec91701e74f7a73a87d8164d9f16ba19a3dd59620f38e27cca.png'
      } 
      else if (npub === 'npub1tmaru4mzc6p6zfsreg40p9rsajj9aqg5w9j7fx4awy48kktqcgaqx279qe') {
        image = 'https://toshimaru0123.net/icon_home.png'
      } 
      else if (npub === 'npub1ctevs08z8xyttzqny8car439pcyr4vsf76cy89k5exyhvn6q8laq6966yv') {
        image = 'https://i.postimg.cc/1XmPGW4b/E90-E4-D78-D74-D-4-BA4-8-CAE-42866761-C45-A.jpg'
      } 
      else if (npub === 'npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc') {
        image = 'https://pubimgs.c-stellar.net/leaf_xmas.webp'
      } 
      else if (npub === 'npub1xs5vncmwc58zun3u649qrcnj2tx507mq4cccgs9kfhzdeetglajqcr30xd') {
        image = 'https://void.cat/d/6LxFFrLwSAZo5gHErDB6aW.webp'
      } 
      else if (npub === 'npub137c5pd8gmhhe0njtsgwjgunc5xjr2vmzvglkgqs5sjeh972gqqxqjak37w') {
	image = 'https://i.nostrpix.com/fishcake/p/profile.png'
        image = 'https://i.nostrpix.com/fishcake/p/profile-xmas.png'
      } 
      else if (npub === 'npub18wgg5ry64mc5wx8l993n2z0dthhmh0tnpkjd93a99cd7us6mg93q9r8n6j') {
        image = ''
      } 
      else if (npub === 'npub1mpdtc8pzn9q4y7n9l7dqr6zvnn344n8ve66ue68n027az3pvs2ws9w6qx9') {
        image = 'https://cdn.nostr.build/i/5e5a228f8cc3218673701adf3e368150e81149e46c253a049bbddace4cdb138d.jpg'
      } 
      else if (npub === 'npub1cq827zsq6q0j783yk2mefv62le4r3drhnye5p4jj5m8e2mvat8jsyesnvh') {
        image = 'https://cdn.discordapp.com/attachments/742671079318880257/1185549190177239050/a68faa8f-efc6-496a-afcb-97faef36e1a8.png?ex=659003b9&is=657d8eb9&hm=e4e631d7f8d3c88aba20bef6cdc7f3e8a53e262c1d14d7dc86aa5996735d9001&'
	image = ''
      } 
      else if (npub === 'npub1yqyygfqun6l7t3mrxerqnrenqvmjl6f4n2d9vgva32w6ywjea5jqhffpuh') {
        image = 'https://image.nostr.build/18c3d732428d108f48ac46beb7a95ea839c5a9d17c5aba60154bf6ff0cafa00f.jpg'
      } 
      else if (npub === 'npub1s7y2n2l262kp463qs0ygf9wqjt7fjqg0cpgvrj6vpfh9f79egz3snngw3z') {
        image = 'https://nostr.build/i/e606328b7948004861f3d9b5b765a98e8964700d1b7f7204a4d331e5101beace.jpg'
      } 
      else if (npub === 'npub1srtr60ty7pnvjg60la832mjutk86z3vmhvuc02cncme7sutnz4mqxrlt58') {
        image = 'https://pubimgs.c-stellar.net/ritrin1_s.webp'
      } 
      else if (npub === 'npub1jdulk82j8kxwvrca9v3tkajarrll8zhz9cwx7w470wkm2te2l9wq6z06vz') {
        image = 'https://image.nostr.build/242b8282773bc4172cd6ed0d6f107475e1ba7fc296e6b2568121dc06ccbe6dcd.jpg'
      } 
      else if (npub === 'npub10wnn0nngrs7zpq00yttm35aqrt9hv45nvjphjt60lkzg0m2ee3qq7wm3yu') {
        image = 'https://image.nostr.build/8d46ece4c77ef3d3f2c630d65adfb657963a9219300f5665d131532b92693281.png'
      } 
      else if (npub === 'npub1jac0kj928psa6wf7hpt7ws8jmah33c826sa668fsce09cxvzqznqprc8yd') {
        image = 'https://image.nostr.build/f35823ae55a0d2a70039c8628f2985737775986cf8c24db971efc6bf8359cbc2.jpg'
      } 
      else if (npub === 'npub1sujk7xhm5q4u5g2p4tg6dr45vlncy40ne4x07zyu74qqn9wqltwqellvmp') {
        image = ''
      } 
      else if (npub === 'npub1z3v2rkksqrtp7n78fujex06llgk3lwj7pc3t3tmzd84x35j3e7mqsacpnr') {
        image = 'https://void.cat/d/73ZwTnAFPKF5PEpFDQw2yZ.webp'
      } 
      else if (npub === '') {
        image = ''
      } 
      else if (npub === 'npub1clmf25mymlm3mlrr3lj6umgaurch3jcgsvakr258svjdcl0tvfasvkzkyc') {
        image = 'https://image.nostr.build/52f37948739666c87c9ee77c24c5bacf8151fae8a48eb12d093c6d81473b4d60.png'
      } 
      else if (npub === 'npub182r0ws7xc7v2yq2t69gr8k6tfkrt7tqrfytqavl5m27n7yul6mus4vdj05') {
        image = 'https://image.nostr.build/2c314bcee693d8a905e61bb9921079508adf67475c4f8c2ad32c9581e8903aa0.png'
      } 
      else if (npub === 'npub1vszh239q84lc6fr9sqyvmkfg9my29tunkf6ysuley556anz6me9sr0w8gc') {
        image = 'https://nostrcheck.me/media/public/71d5e3041cc1b6bfd7053dba8f747ebb6000cce07f9a7966d5ffc0f49ec8af43.webp'
      } 
      else if (npub === 'npub1lcu8ts0fe2h05p2ft48pyr8wgkdzs7juzwq935z95q4teyhujtcs8sp00g') {
        image = 'https://nostrcheck.me/media/public/7320436f462738c4e00682c301d8e5e2c51550926257e9de1b9032f86604e9bf.webp'
      } 
      else if (npub === 'npub15threpkztu32y0st67u27xrrr2v5hrt848a60djh48dkx4sv33rssf7rxu') {
        image = 'https://image.nostr.build/f87e3716f58dba1d365c9e635acc0420aac74ff6fa5bc8cfab42a7a21910962b.jpg'
      } 
      else if (npub === 'npub156va3gdfcz3v0ckykaft5xtc2yrf79l5qarn65t7w0z6c8w2mp7qw9c4kq') {
        image = 'https://s3.arkjp.net/misskey/04574a60-9672-46ea-a710-4131e0133f17.png'
      } 
      else if (npub === 'npub1fzud9283ljrcfcpfrxsefnya9ayc54445249j3mdmu2dwmh9xmxqqwejyn') {
        image = 'https://nostrcheck.me/media/public/45a02504a321a92a920d3863475e15c5ca2388a7ecbff167be52fb1f273c727d.webp'
      } 
      else if (npub === 'npub1fz65nf68h0kyg895u9vvwzwc0paynvdv64nu7cg7700g845k6juqzg59wk') {
        image = 'https://2.sumi.space/avatar.gif'
      } 
      else if (npub === 'npub1ntq989r8h36hjk6d9kuxupwss8jyhdz3tc4sjfxxcvxp48hplzmqcy3twf') {
        image = 'https://cdn.bsky.app/img/avatar/plain/did:plc:cpxx2uveaepjaavox4y6lm6q/bafkreid2ikx2dz5bgjsdeq6bzgsjpjksfw6biq7zowxbzjz5idv4izeb74@jpeg'
      } 
      else if (npub === 'npub17qr74gy9y5z04nwhd58v96l5udkya9v3npu84zv7t32s0hx2a5csyr78fh') {
        image = 'https://nostr.build/i/c9391e4e6e1e768e62cf4bf8576cccf979480031f40e891c1529895f0b3f2fb9.jpg'
      } 
      else if (npub === 'npub1dwfj2pw3m428udsrm2xkrpqmgyhxnn82ask3wpgemlcvc8h2xhhs4mawdy') {
        image = 'https://pbs.twimg.com/profile_images/1620011149805879296/T8nc4TkA_400x400.jpg'
      } 
      else if (npub === 'npub1valq4c7sf5khjn66v0taakd42tpau6h2dppprhq83p3mnqwk9prqdl0zcx') {
        image = 'https://nostr.build/i/4d0f27394a87768b2c2535a29347ba46cfc0533f23be96e913fa1959e22026cb.jpg'
      } 
      else if (npub === 'npub126yus8txwxt9d30l7py5y6m2hfg63gnxhtn392myjccjsqd6agnsv00gpm') {
        image = 'https://www.iplatform.org/files/data/profile_korodroid.png'
      } 
      else if (npub === 'npub1dyqasukhw28hx33j8sjzzchj2ehmcu67puvsm9r66vj5qhq5ucgqh96qz5') {
        image = 'https://image.nostr.build/e8a25dbad19163fb67e1971d597874c10c483b650876ee5e2c02a7905a095ee1.jpg'
      } 
      else if (npub === 'npub1wkausy2sgvrnp4c2s7zv30hwqml4snlrwr9deczj06980pjqkqvscefeg9') {
        image = 'https://nostr.build/i/13bcc307a2acdbe6300db6cb99b62e0992023ee56dac604c151ecf08d4995752.jpg'
      } 
      else if (npub === 'npub1ksz2kxa43e5aqsd00qqkzulaleudgzlac42u99xqk87dxu3nhtmsdqctcx') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/160/720/original/6483013ad0118b6d.jpg'
      } 
      else if (npub === 'npub1fdqyx5udmcv83yz49zytxrqqdev00lksp5v2h3eupjnjp639wzsqwy0y4d') {
        image = 'https://void.cat/d/Qeno3q3stZFJ5qJM6xadDu.webp'
      } 
      else if (npub === 'npub1qh3kyju2d60dyqz9axyvduqkn833mu8cwaafmq0g6n26n8ft566scmqe8n') {
        image = 'https://image.nostr.build/5b0d97ce1bda0e894ccc36cd0f233f92608721255ca3e637bbdfdfed8190cb2e.jpg'
      } 
      else if (npub === 'npub1uchj055pfgj3w8zxd5khvy4drgrxmvfk9d8zt8d4cpm0ne4jrjms30u6q9') {
        image = 'https://www.uchijo.com/icon.jpg'
      } 
      else if (npub === 'npub18rj2gle8unwgsd63gn639nhre4kpltdrtzwkede4k9mqdaqn6jgs5ekqcd') {
        image = 'https://tukinami.github.io/favicon.svg'
      } 
      else if (npub === 'npub12562t7ucqpjcm73nr9lkkrmdrkwmh9680sz7snz975qu8t6tvxgqaxlehh') {
        image = 'https://lh3.googleusercontent.com/pw/AMWts8CpTqFYtZVHx7rvrn3RrmjvDEkOlaKR7Al-agrR9fQlLBxUvAtWLtrH4M8GaOzalsirY9cUy-lv7c9pWyNKNIgAzbgS421JVlwviK4PTDCSoTETcwmnmDoLqjQSx3dnZvaVrLyCgPaOybml46k6XtMhrg'
      } 
      else if (npub === 'npub1n6l8p9swvw6qsp5ft5gvt4yef9uprgxaewn26mkdcx2mcpxff3tsuszvgu') {
        image = 'https://image.nostr.build/7d5d18555d62ebe075a14ca25e17e3e7c7023f04a41ba2dfa29feba1bd3d4722.jpg'
      } 
      else if (npub === 'npub1jhwf4lasurcst4jyaj9cugv7nlaxud04twatrpmwswjptkmqw3mqc0zdse') {
        image = 'https://nostr.build/i/p/nostr.build_998a1a5c794cf42603e6fd5c9a7a30a5f19b6a80e3246693acf1631bfd4474e2.png'
      } 
      else if (npub === 'npub1rm8ysrurstlcaf4v9g7mxdu9tvc08kg4hsagdm0c0aav05s50r7sdjqd6h') {
        image = ''
      } 
      else if (npub === 'npub1uppfkelag8szx027wm35yxtvl75an99qt65g6w3tta34gk5k06xqk6txt7') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_6561238173496372431699702077.webp'
      } 
      else if (npub === 'npub1pqgpggj5s76e7us6edq2vuwsdv94wfcx3qqk0kny6w7rgssvt6zqlq80md') {
        image = ''
      } 
      else if (npub === 'npub1uppfkelag8szx027wm35yxtvl75an99qt65g6w3tta34gk5k06xqk6txt7') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_6561238173496372431699702077.webp'
      } 
      else if (npub === 'npub1m78s5eqv8l7snc5nnxdvlgue6pt5epgplndtem99quhwyptas7jss2qx53') {
        image = 'https://i.nostr.build/KYWl.jpg'
	image = 'https://i.nostr.build/9qRE.jpg'
      } 
      else if (npub === 'npub1ca2xqej87v7hq97fjthtg32vvjlmpyu20ulaqdhnud5rnrkqlx3q4vaq3f') {
        image = ''
      } 
      else if (npub === 'npub1wnwwcv0a8wx0m9stck34ajlwhzuua68ts8mw3kjvspn42dcfyjxs4n95l8') {
        image = ''
      } 
      else if (npub === 'npub1afgejt3kpvkxa3vlgamxwqzfdl3fsfypsdt9fq0sm7vxmwsd6n5qluz5lk') {
        image = ''
      } 
      else if (npub === 'npub1yndrj79av9pxk4yemrj6ss4y68vsv7gvpfhuy3ca58s79yl6wlrsrxd0e9') {
        image = ''
      } 
      else if (npub === 'npub17a50460j8y99yglsqzjzfh4exq4f8q0r82ackzzv4pz0dyd3rnwsxc9tp2') {
        image = 'https://nostrcheck.me/media/public/d93484460b8e6d6c8b92b22ad041b22abf23eb8954145bf4c17569c2ea887758.webp'
      } 
      else if (npub === 'npub19rfhux6gjsmu0rtyendlrazvyr3lqy7m506vy4emy4vehf3s3s3qhhje7x') {
        image = 'https://nostrcheck.me/media/snowcait_test/efcf2dafc8386647d004bb46df8d2bd9598635f418eb591a2cdc0a4dc0a8a340.webp'
      } 
      else if (npub === 'npub1u4sfdmw8trsqpnt2cclm36tvvv09kvvx596z5zu9x3qr0za8mvps3cl56y') {
        image = 'https://ul.h3z.jp/hHjZ9WA9.webp'
      } 
      else if (npub === 'npub1tvqc82mv8cezhax5r34n4muc2c4pgjz8kaye2smj032nngg52clq0rkrq4') {
        image = 'https://nostr.build/i/p/nostr.build_0e69671aba33808290112d47f133b7169d28e84bdd7dfdb88a517672d4c66ac2.gif'
      } 
      else if (npub === 'npub1yr7g5t2jdhygx7frl9k44qjtflm0glr5auu3vf6y6cayle6pvmdqkkkqk4') {
        image = 'https://nostr.build/i/nostr.build_605c4c2a01c1a2f036584daf915045f2364e425e52ce199af9e0896b83b95b3c.jpg'
      } 
      else if (npub === 'npub142hcyec2zkn526fnpruy63hzhf28tqrzn2qxhqcgn6e5sjrerwhsgp4lf7') {
        image = 'https://image.nostr.build/a6935651d3a55a82c4c8fda874a7fc43ceba83655e70247d9ffa5f0119e0982c.png'
      } 
      else if (npub === 'npub1upv4xeydzu0ahflm853vw68sax7hfqjd64zskwl4eq42qccqs0yq2ayw07') {
        image = 'https://drive.misskey.nokotaro.com/files/b8d5d593-2894-4550-82f5-e05d25f42177.png'
      } 
      else if (npub === 'npub18p9ksnc3tgqp64gej3qsp6qly45e6zr8dfk25hjrhlqr8qzx4t8qc7547a') {
        image = 'https://ocean-alliance.org/oceanalliance_circle_logo.png'
      } 
      else if (npub === 'npub16nhjj9nfga7jqwvzkyskpg4f2f9h7knalepx8atzqz85rwcm09rsflu0rh') {
        image = ''
      } 
      else if (npub === 'npub1tqwfm20g9pxzd70f8w8cnphsl8u28ydl0kkqpmhnk3pc2spuz5us9j2jhh') {
        image = 'https://i.postimg.cc/nVGyVMHR/reflectacles-privacy-eyewear-phantom-monitoring-public-space.jpg'
      } 
      else if (npub === 'npub19x0h8jm3mnwzhv4tpq62zta05er0qlyge73m0pwsp7h666khkd9qev2ree') {
        image = 'https://pbs.twimg.com/profile_images/1362913610415005696/cfMHMSqh_400x400.jpg'
      } 
      else if (npub === 'npub1uwp0f94sxgexn3pd747csqchqfhxaypkj9r397qmlw8vx8yt4e7qdeu73w') {
        image = 'https://nostrcheck.me/media/public/b4f0374681400904381c3d0dc3b1fb93055c92b57133cf5e935c09bf30c6c7ed.webp'
      } 
      else if (npub === 'npub1evz2dan8p8rw9gc2csaz6dhgj2na77xxwhxsynlku60du2lul94qakqkgh') {
        image = 'https://i.nostrimg.com/8e88c705202de204f6c29e444d211c479934f2f14af42093bcaab8bdb6a79db9/file.jpg'
      } 
      else if (npub === 'npub17plqkxhsv66g8quxxc9p5t9mxazzn20m426exqnl8lxnh5a4cdns7jezx0') {
        image = 'https://image.nostr.build/9b02b3ea87195faff955ad3b32d133c9e8f24dee61e01a5df85e35f8981afac8.jpg'
      } 
      else if (npub === 'npub1satgtcftm6420gs8mrf9c075x2527vrmsru22gn8w76skz4zlprqdezplw') {
        image = 'https://void.cat/d/32atZtT1JDoXsrnUntiyd2.webp'
      } 
      else if (npub === 'npub1m0sxqk5uwvtjhtt4yw3j0v3k6402fd35aq8832gp8kmer78atvkq9vgcru') {
        image = 'https://pfp.nostr.build/19ae3f573c6c8a4da03aac652db44e7865b16435c57c2444f24cc5547b9ab371.jpg'
      } 
      else if (npub === 'npub1p2vxafm57hvvy7jung99ht6t6850r8aj237ayrmc2ckgr634q7dsd263nw') {
        image = 'https://pbs.twimg.com/profile_images/1241920358740946945/BIyzKcej.jpg'
      } 
      else if (npub === 'npub14g6n8244kl5ppmp56982326mx2ttg8gs2s94rgljqh0y8tv6tnnqhq3dlu') {
        image = 'https://nostr.build/i/75bbc5aae5230638324d240db7f05508e646756f229c9f057787e0864ff06f07.jpg'
      } 
      else if (npub === 'npub1wu64zkgq9wt98mavhp9e4f8c2cjr42drdyrj4ns0zmtfq2hqu82sk2zt99') {
        image = 'https://image.nostr.build/4a88827e3dcf62a4b3fdec612ca2ef5c2f88b5d8147175542741d8d4d576f164.jpg'
      } 
      else if (npub === 'npub1wv4j0wu4tmtvz0xazrpdypezs6fujtxyq0jwawdu0zd5ly6453zskl2sa0') {
        image = 'https://kojira.io/labomi.webp'
      } 
      else if (npub === 'npub1rnrnclxznfkqqu8nnpt0mwp4hj0xe005mnwjqlafaluv7n2kn80sy53aq2') {
        image = 'https://nikolat.github.io/avatar/rinrin.png'
      } 
      else if (npub === 'npub1chunacswmcejn8ge95vzl22a2g6pd4nfchygslnt9gj9dshqcvqq5amrlj') {
        image = 'https://nikolat.github.io/avatar/chunchun.png'
      } 
      else if (npub === 'npub1l4049g5rvjx2rapxlsj2m7v5tvqdkvv0xz2hjlsdydrhczhctvhqyaralq') {
        image = 'https://piks.sovbit.com/public/uploads/medium/8c/5a/0114067f55f7d52fe312adcc6663.webp'
      } 
      else if (npub === 'npub1uxlhp5fudrfchgc7j7zkar0v9vwlwls2pk3ennkrd2qydt9ytshscsmgqv') {
        image = 'https://image.nostr.build/c1fd21f259a4a55130ba6782a92dd5b0168a5528d9b791caed263046939ca10b.jpg'
      } 
      else if (npub === 'npub1wysazhsuwvh7cddlcl8qpq4395ul774wzelupcndlwzt37yaeyvqrzu6gn') {
        image = 'https://void.cat/d/QWN4zpfcjUQhcvhAcHrQ4B.webp'
      } 
      else if (npub === 'npub17mj5mskzdzfkn2ad6d7jac0ej8qrhahl4jnps03z99ue3trxetjs3d384p') {
        image = 'https://pbs.twimg.com/profile_images/1172565293698125824/Sh6V2-ve_400x400.jpg'
      } 
      else if (npub === 'npub1sytget3suf7s5gkx9fnt4upw0a45n3zkd7emrpddnpvzl558umys5apyau') {
        image = 'https://void.cat/d/K6vpZfhXpG1HicqoQ7z5Vm.webp'
      } 
      else if (npub === 'npub1cpzpxu5w86mkvvjncl6g4gm723u6vhqv34lj7dxtszsq9ed0nrqqqqsfvr') {
        image = 'https://pbs.twimg.com/profile_images/1179379994239361025/-rSns1ax_400x400.jpg'
      } 
      else if (npub === 'npub1txum90npvsupzu347gm02gvlnznmw3f9444p5vegt7647mnegjnqd5fehn') {
        image = 'https://image.nostr.build/76949072d65fe85ccb2a18cc9644e830c15bab3448411a85ac2d7f7bd94846d4.jpg'
      } 
      else if (npub === 'npub1nnumvzrexs63usytjuwn6ntcy3gr4jqm3ek5tcqsuf2yqk2dkjrsrdxqrl') {
        image = 'https://kojira.io/kojiranyan.png'
      } 
      else if (npub === 'npub1dxg440ltnu9pppjc94a03pwvgvaxvadfphn9ejz4qkcukts8sy3s8lgr73') {
        image = 'https://image.nostr.build/86ad7b473f912303b5307c7620d3b7324d9a90464abd75fb4951d4844f797c1a.jpg'
	image = 'https://profilepics.nostur.com/profilepic_v1/bc140ef69a7aebd23de181587880826599e2e9d97950d8ccb837e9a0eadf7d65/profilepic.jpg?1700259570'
      } 
      else if (npub === 'npub1e4gscs30mhrypr42ux8xnc7smlvvygjxks3ev8um84wz6ljkytvqalcy0f') {
        image = 'https://kojira.io/tuna.webp'
      } 
      else if (npub === 'npub1uykrdeaxwqfltjzy6fygsk9gecfag9n3a3kkvsynma9czzr0ffaqaf9v0g') {
        image = 'https://image.nostr.build/49732a1fa084822c09d772a9d95790bffca354ed9d9786e9549d5c2d83f0df81.jpg'
      } 
      else if (npub === 'npub14fpew4p8466ye9uc7cu8qm7hulkzslpqvh08s2x2a64njd4e20hqm3nvff') {
        image = 'https://image.nostr.build/8786ce431e041284aaefe46e907d00a85e6450f221430cac4980c0e39adaeb71.jpg'
      } 
      else if (npub === 'npub1rg6m2nhhw5402n9vhmklpu6fuvs0pghw2q2z3qcnfslwxxreeecsvhlxfh') {
        image = 'https://nostrcheck.me/media/kunigaku/56b123b841bb148c9a067dd9ee6f631b75a254d8ae789d7f1e78b9db05a66580.webp'
      } 
      else if (npub === 'npub1curnt7jtq8mhl9fcswnwvuvc9ccm6lvsdv4kzydx75v92kldrvdqh7sq09') {
        image = 'https://i.current.fyi/help/Screenshot+2023-05-10+at+10.18.33+PM.png'
      } 
      else if (npub === 'npub1u35rk4sj7ctcpp8z9hmt7s5jv4nknesh7dtk5d5lp3fxn279dyfsx709vj') {
        image = 'https://cdn.nostr.build/i/a4a1e654bd55de58bf07677a63d94818ef932b5d6bc7eac08d8408b2bddafb83.jpg'
      } 
      else if (npub === 'npub1yvcpmszjpk42wq9ukhehdhkd2jtvu32lrzukssv0kx7v3rf2pnvqfmey9v') {
        image = 'https://pbs.twimg.com/profile_images/1492374017034297344/EFf7S6t4_400x400.jpg'
      } 
      else if (npub === 'npub1f0zm8waa6l7yyre8nlx40ew75f89r0kyqphnzve505vnjkgkz72sehr8rq') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/578/753/original/e400ef15981ea8cc.jpg'
      } 
      else if (npub === 'npub1zt8s2qpktqdu4par9c9970mats7n6us83s29yzuxmw8u9thsjtyqgtfspy') {
        image = 'https://pbs.twimg.com/profile_images/1592174020522577920/s0-TFjHp_400x400.jpg'
      } 
      else if (npub === 'npub1a7n2h5y3gt90y00mwrknhx74fyzzjqw25ehkscje58x9tfyhqd5snyvfnu') {
        image = 'https://cutclout.com/images/about/elidy-profile-pic.png'
      } 
      else if (npub === 'npub1hcp9cc59ks7z0t8ujwpfxh723yhtqels4ntq4ttdpa53vz5nuwaqs3h70p') {
        image = 'https://image.nostr.build/92ba5e1742cbdda55471cc3e610de556ad89f5d9aec0cafec08704d0038df0bd.jpg'
      } 
      else if (npub === 'npub155c00a6mvtuxquc83lgdsgcz2zxfyulvs3k3janw7s2p06uzqezqw6dfkh') {
        image = 'https://nostr.build/i/nostr.build_d4fa58cf9f36714c3249efcc3572d9a658497b7165e930582aad364a7f254820.jpeg'
      } 
      else if (npub === 'npub13sajvl5ak6cpz4ycesl0e5v869r5sey5pt50l9mcy6uas0fqtpmscth4np') {
        image = 'https://kwintendebacker.com/images/foto.jpg'
      } 
      else if (npub === 'npub185h9z5yxn8uc7retm0n6gkm88358lejzparxms5kmy9epr236k2qcswrdp') {
        image = 'https://media.mastodon.bitcoin.ninja/accounts/avatars/109/298/428/329/361/355/original/597491e22ffd0081.png'
      } 
      else if (npub === 'npub1mymntclrwsca9z7exxeh43vl32udaezxgnlhwvtvjm7y8n8aff5ss3r5lk') {
        image = 'https://image.nostr.build/c02b67890c3e40d2a70b86d7b83bbb68b920cbc559bc334215bdef5de43be92f.jpg'
      } 
      else if (npub === 'npub1d43cqptd4a85mc75s5zeltu79ge7vdmw5tjq3xe7wc5ytzj0tauq2re6p5') {
        image = 'https://image.nostr.build/531ba8b15b0c18f483ecc64d3f672162a24517f74a66786c7f2963750818d822.jpg'
      } 
      else if (npub === 'npub15w7wp9wdp6p53vy5eysph5xryu82ltmc7am9zl6pqyexmt6ukllst6ddy2') {
        image = 'https://i.nostrimg.com/c700a8adac1d6a81c66b6aeea10ce730c7aa0f48f17b267e4a4f7f166c95742e/file.jpeg'
      } 
      else if (npub === 'npub1hy7r6evx9e9l6xz7phnysm3fcfz6vkmswvsyduhcetyuy07uvxkqws4rrx') {
        image = 'https://void.cat/d/VcjqkupB32h3UDj2YCSyC5.webp'
      } 
      else if (npub === 'npub1cyla8qgt9gv8y6ydv8s2prt89h8afc0sr2kaz64ryjmlpdrzxm4qwlh53q') {
        image = 'https://github.com/kdnolan/kdnolan.github.io/blob/master/avatars/lasereyes.jpeg?raw=true'
      } 
      else if (npub === 'npub1q3ar9v6a55mjjelgl3fpgsq3gwwtt65dhdjqu82kuausmwg6hauq8mekza') {
        image = 'https://nostr.build/i/e06a5fcfacb1aa6203e7c7392ade12667bd4c2744a16584fd4f206bf187148e2.jpg'
      } 
      else if (npub === 'npub16mwf24pwrzut0tkz79rppa2uxddta0k8du7mnevvy4rxr5ze8gxq4w2myx') {
        image = 'https://void.cat/d/BjgwgSJ2pVT8QRdETNT1m7.webp'
      } 
      else if (npub === 'npub1arkn0xxxll4llgy9qxkrncn3vc4l69s0dz8ef3zadykcwe7ax3dqrrh43w') {
        image = 'https://image.nostr.build/4709f089162a7d3ea6a5c604fc4b4541b233ca4a52f7731ec75b810924f80c5e.jpg'
      } 
      else if (npub === 'npub1z34a5nkxjv5rq5p7unuw3d3xh4an54uyyv4cys96zhyvhlu6qlxs4qnh9r') {
        image = 'https://nolim1t.co/shadowy-super-coder.png'
      } 
      else if (npub === 'npub172v6ulfpl5yghp9u643szjze7n0vc2r5ksvfxgaw7zmahv53dyvss3jhsm') {
        image = 'https://image.nostr.build/fb4abd9ccfb45281cd9cf6dc5367dbe5455447f8cf0a0b13d65ad9f6f8662211.jpg'
      } 
      else if (npub === 'npub19mun7qwdyjf7qs3456u8kyxncjn5u2n7klpu4utgy68k4aenzj6synjnft') {
        image = 'https://nostr.build/i/nostr.build_18d8e640c3a8adf2158016425c94a79b6dbe149e552449613890b6224d70efa8.jpeg'
      } 
      else if (npub === 'npub1nmr6w7qk0ta36vxysv77jv3d5rqghfc6d8sez8240rf3gja4vsmsd2yha8') {
        image = 'https://user-images.githubusercontent.com/17043377/210444663-ca73049a-ba01-40d9-86e8-204d450eaec4.jpg'
      } 
      else if (npub === 'npub1ktt8phjnkfmfrsxrgqpztdjuxk3x6psf80xyray0l3c7pyrln49qhkyhz0') {
        image = 'https://oxtr.dev/assets/profilepic-animated-small.gif'
      } 
      else if (npub === 'npub13sx6fp3pxq5rl70x0kyfmunyzaa9pzt5utltjm0p8xqyafndv95q3saapa') {
        image = 'https://astral.ninja/aura/monlovesmango.svg'
      } 
      else if (npub === 'npub16rsaeu8d63hhahlnwkmx6w645f7tjuu3n9q8q6wcfny4e93xkess3yqq66') {
        image = 'https://i.nostrimg.com/bf4b0d4561299e171d3ffd4fff588863b137617df7dcf7d3e01dfee858f3315e/file.jpg'
      } 
      else if (npub === 'npub1j3n89ef365gucp479yrj0cdnewswmhm27kmwe6tgg7vu7eptzjnste73us') {
        image = 'https://nostrcheck.me/media/public/0a2c3774b988489fb77ce8d226f501c9b1f0dfd1be700f7e92f934cee27bb84d.webp'
      } 
      else if (npub === 'npub1lhe30pu544d6nwf5r5xqsw50y8d97cmghsvcn8htrvm532j2kusqlmad5l') {
        image = 'https://i.nostrimg.com/c07345e7a37cfa8ff146d992aa3684d0735add24edf1f5f81e7518bb2f44d76e/file.jpg'
      } 
      else if (npub === 'npub1katana3n8vawxc0xxqhdzw5gzlswu57nz5gw4dn9wnx4lqxr2pcqtesvmu') {
        image = 'https://nostrcheck.me/media/public/e613c28d39cf4a6c4841124ba46e01003b897fc5fe323bdec27498ac19c82e7f.webp'
      } 
      else if (npub === 'npub1ptck8euwvgmwtc8f524cartxqgz0ckuwufrs6679gmewxt5u387secfjy9') {
        image = 'https://cdn.nostr.build/i/1404bb11e19f2e3b46a49374e52019229fe3b2f41f77c661527dd50231093d6c.jpg'
      } 
      else if (npub === 'npub1cqwkqf2jrzqe0wrljf3mxef89z5th29zdxkslkz9s4evpjexeqxqva2kea') {
        image = 'https://image.nostr.build/8ab2a62c5a35ebfa065e337d396386b40982f985581295ebed3bd33f6db2783c.jpg'
      } 
      else if (npub === 'npub1zp8y57vg3g74urqfkyxs7u4ufht85wlrs95cdls602jutjahe69sgsxsnf') {
        image = 'https://nostrcheck.me/media/public/13978c2b10779e0e8463db6b6d55d0081ab0c1eb0b4e7f326117553e15ea5f4e.webp'
      } 
      else if (npub === 'npub1djk4g4psjp9cf2qsr3tc8djsg0ce4c5a9kssw6u0c0ny3ynndups0z2mfj') {
        image = 'http://cdn.jb55.com/img/minebot.jpg'
      } 
      else if (npub === 'npub1434u9urykyrplpxf5kmry75fmngrugy9h92lr6e0uztld64q7wdsm37v2c') {
        image = 'https://img.atis.dev/avatar.png'
      } 
      else if (npub === 'npub1yw66p8fqnl3qfq3pszt5caauhhdu6mutc0jwe0endynsg6f3mfmqesjvxg') {
        image = 'https://image.nostr.build/fd661fe1d9cb86aa18a3fca6001f14e4e44f37adc912cb0a6a952d0891960c5b.jpg'
      } 
      else if (npub === 'npub175ydvjhtxxavq53j0pquclw4njwn0svzzq4qfzjrjzv23wupdk4seh25c3') {
        image = 'https://nostr.build/i/nostr.build_942df604c06584f569500d9717dc82f595ba4ea089d2c3d6f5a805c93e1a3c77.jpeg'
      } 
      else if (npub === 'npub178em4nummr6fkj4mgpgjcm4hrfx3vhmzj67u8fuls38q46h2clmsxff447') {
        image = 'https://image.nostr.build/7e969739ba63d487600d74345abed75005dc397f97a38a93d6c3ea0c2ae130dd.png'
      } 
      else if (npub === 'npub1wxtrek8grj8rswyssp2acp75g60vwafcg3xcm9l9u7u89qjz3weq7qflrr') {
        image = 'https://image.nostr.build/439d59665467378bafaf2c0f89bc6fbe8313e3d10ed6ecc5c0944a93fabfc2f3.png'
      } 
      else if (npub === 'npub12pnpy6uy0ap96jhv5psprhhzs8j6kjhdgxh8fe4rw45wfsmwy8uqn20uvh') {
        image = 'https://image.nostr.build/c450bfac284d18351487c3849f2cdde472eec81c7195c60c3c8fd9b6db6547d3.jpg'
      } 
      else if (npub === 'npub1adqltym8h7vzgvkmqvwzx6mn49rl3j57qp8rspegmpuy9d5tvy3q2adqqz') {
        image = 'https://image.nostr.build/7d7cf42991e8aa4d7dd451e9867ca972716a572ed15ccb20bb854e097638f0b2.png'
      } 
      else if (npub === 'npub1qj8vk9xavpu5ylgwy58v8np6yr4jhd0new9encly6wuzglpg43uqyks7e6') {
        image = 'https://nostr.build/i/72dcc0770039b9c8056ca619c832fe802005d665fa1143abd802b0aa9e479b75.jpg'
      } 
      else if (npub === 'npub12gyrpse550melzx2ey69srfxlyd8svkxkg0mjcjkjr4zakqm2cnqwa3jj5') {
        image = 'https://nostr.build/i/nostr.build_e3eb9194c60c1c8715a9eeb256d3cbd3d00657515da4d66b608c5f3c0ba859b9.jpg'
      } 
      else if (npub === 'npub1sctag667a7np6p6ety2up94pnwwxhd2ep8n8afr2gtr47cwd4ewsvdmmjm') {
        image = 'https://cdn.nostr.build/i/270de92fa4e5118a28352720b7f26c360aa2dbfdb1c12517f3e3117a2f9de47a.png'
      } 
      else if (npub === 'npub1h882a66p0zj5n69s2u8nfzev4f97lzfnlcej84z78p6uqxge5tpqlupz20') {
        image = 'https://pbs.twimg.com/profile_images/1601453529293529088/lLNR3plf.jpg'
      } 
      else if (npub === 'npub18p8ma5h4kslcp905lw99e00rl2x6j2qphpzrnvnrd4ufva4mxn7ssj6v3c') {
        image = 'https://image.nostr.build/abe1865d5c3ec096c3d45e62ca1c5bc4909fd67155f9236d09baf0d8314088b1.jpg'
      } 
      else if (npub === 'npub12zr4grhvlh8wx0wt83cu9jaudlqwwwy5g5rh6g6jkywu8jltxseskh97nm') {
        image = 'https://i.nostrimg.com/dfd3f34c78d309905cf954ed504389f8ab7eaaddbd1c1fdd7158e25c39573cb0/file.jpg'
      } 
      else if (npub === 'npub1hq4ljuwvcaz8t004jvkjgk8vnge88pq45rzfaep6m7u2clmenm4q2u8peg') {
        image = 'https://nostr.build/i/84055a0d4065e1bb15811268d4d9ec98a0ae9e33f7b6056abd1c5ddcfc0b7135.jpg'
      } 
      else if (npub === 'npub1j5wug436qf7vxafgty9hhpvy6hxgk8nmy8g9dcwrykklnmrp6a3smcvps9') {
        image = 'https://cdn.nostr.build/i/f301c4b62229b5906d63eab4c8b4efebdcc81872089c06994dcd358490724911.jpg'
      } 
      else if (npub === 'npub1nfnycjt2tkw6mm7dd5stanhxf9dax6lde9xkk9ap0h87qptxs24qxf4ufs') {
        image = 'https://i.nostrimg.com/4b9c0d3edd400a88737c94996c25ba6f1edc9790e589cee652eee0bfa2feb9fb/file.png'
        //image = 'https://i.nostrimg.com/d32ad4414105c05e1550478a154601934546eb6b798f6f6fdda0d23f034f1883/file.png'
	//image = 'https://i.nostrimg.com/d054511468e29a106ae1835a5ba7d52cb305fcba92fd6d896b992925de3e0f9a/file.png'
	image = 'https://i.nostrimg.com/d32ad4414105c05e1550478a154601934546eb6b798f6f6fdda0d23f034f1883/file.png'
      } 
      else if (npub === 'npub1qdkl4et0xhz3u32722g8q0ejx0pz0f6stxtaug55ncgymy3nrwwsqr2rde') {
        image = 'https://nostr.build/i/nostr.build_3aaaaa1b1a8758df34041136ea04eb7ad77621b7a98fffb90ab04a36dc535d70.jpg'
      } 
      else if (npub === 'npub1rhnnazml5hefl4zz855apf9yaxegz8thuzwf4dvdtcf0nx7xlsyq7jlxe3') {
        image = 'https://i.nostrimg.com/ea4b7fd4a318b3b8779332bdd6c4e5926525b4c16b3bc67ee0ce112a5a48ac43/file.jpg'
      } 
      else if (npub === 'npub1ees322t2ppy339xssa8vqknrfl96j99792chhvxq0u835jc4rxustae8d8') {
        image = 'https://file.misskey.design/post/fd777132-c0ee-46b3-af08-693d0aef678d.png'
      } 
      else if (npub === 'npub1m8xtewufstu6s7fn25m2nn8l8nnw6tfaz8kuqnar9t0swujw0wcq6ur8a8') {
        image = 'https://image.nostr.build/0fce3a0d831dd949be93701f3f5e0a2772f7b5b2ffa9b9699f9f8eb85d5cbded.png'
      } 
      else if (npub === 'npub1tv7cz7a5spkc2dua2f37g5k5w85kr5d9agp8yjkmcpzu5tsda6vsjyyus4') {
        image = 'https://image.nostr.build/77ce62bb092bc1af5e5519fb606427654a70fc9d88d2b2f058d96fff59359a79.jpg'
      } 
      else if (npub === 'npub1y9xpx3azu5vqgw3g5g77tlex0w3r546ncwwd7s28q3a8e3804nnqyx93s5') {
        image = ''
      } 
      else if (npub === 'npub1r0rs5q2gk0e3dk3nlc7gnu378ec6cnlenqp8a3cjhyzu6f8k5sgs4sq9ac') {
        image = 'https://nostr.build/i/p/nostr.build_4fb6accf6b24cdb58be127d9a509c3acd3e859bbe24b5c194b82bf30bc1e511a.jpg'
      } 
      else if (npub === 'npub19fz2f8vpzpnnchs8xrql0sv6p2xwpfv3ktyzgfwk8ugqn5nwpfhsamduqq') {
        image = 'https://ja.gravatar.com/userimage/36206190/d4282acc7c10065dbae4337cd9eea7d4.jpeg?size=256'
      } 
      else if (npub === 'npub1getal6ykt05fsz5nqu4uld09nfj3y3qxmv8crys4aeut53unfvlqr80nfm') {
        image = 'https://m.primal.net/HIPZ.png'
      } 
      else if (npub === 'npub1vd9ar8jusldjze24eq2tlz8xdt8pwkq99ydxh6gtzkkrkgj8m2dsndwen9') {
        //image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1568747937513222144/VneRfcSu_400x400.jpg'
        image = 'https://image.nostr.build/f57843f2b031c5399372400a98ca42f78e8247814b9741f75786ce6548460106.jpg'
	image = 'https://nostr.wirednet.jp/avaters/20230206_125054.jpg'
      } 
      else if (npub === 'npub158h6j5yee9876xmwz88drlw8jzwxeja83sh4trn4kdll27uq2ypqam303e') {
        image = 'https://image.nostr.build/c6b816e1ff2803f2463946f1bf689f4401c1a3c88dfc041d61cf11cd81edbd79.jpg'
      } 
      else if (npub === 'npub1hgats28c2ulvfz7eyzrdq2dy6dx9cln999vxhank4lm69fexujds27tthe') {
        image = 'https://pfp.nostr.build/5b914411d754c144382c7757ea48d6e9b92d68a9101f4f8d17c70006e7dc9a88.jpg'
      } 
      else if (npub === 'npub1wgawvr2uy0rtjua4hzc25yuyu8sedfvqujqtklknljljz749w53se6xncu') {
        image = 'https://nostr.build/i/d19c1ae0cb4f84cdb4c993da9bad044af5700356524a0aa0ee6445056974b9dd.png'
      } 
      else if (npub === 'npub1hzyrfyqfxg6ly79rtcpy6fgp2eps8s7pq2cwma3285gn3w2e30wqy03ka2') {
        image = 'https://nostr.build/i/7af5fc1bcfe122589e340081b2909066aac1c4fb9f2128a43d5046e433092481.jpg'
      } 
      else if (npub === 'npub1hq4ljuwvcaz8t004jvkjgk8vnge88pq45rzfaep6m7u2clmenm4q2u8peg') {
        image = ''
      } 
      else if (npub === 'npub1tuqsl6l8xzly95vv80um7wsnt7gxy8w9wgt4khp4wyv4xwhfw44slm93e9') {
        image = 'https://cdn.nostr.build/i/cbbf30d005524e7bb29e9b5e515dae68b1891825a1f2f49812a8de4ea2c0ccef.png'
      } 
      else if (npub === 'npub1u3rz86hzjejkh54mg04u20sxe62ps3nhtqy987n6yqv6sx52uhjsnkn4se') {
        image = 'https://nostr.build/i/025f55da95fcf7324586235e52fd6a3e85bdbf199718f4b1e2726a73ba846c10.jpg'
      } 
      else if (npub === 'npub1d52qe5fdn3ee6fheumpr33n5spxez4f6lq49ykmc287m2dh3caeqk07787') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_3025919611501907821698408056.webp'
      } 
      else if (npub === 'npub1rymd3ejr3c077adcnsydx9uugmt3umwy66a7xwtqz3memxjws0ks29mg8t') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_4852796685475312101698407312.webp'
      } 
      else if (npub === 'npub1adz6swzfzya68t4v4mfsg36u7glrhway7tjn4sqw3kyghqxekhqqzdgn6z') {
        image = 'https://i.nostrimg.com/aaa4339a65a55804ca0b7dbd1bb42524cbc8cb13eddd5c00d06ab3dcf70e84cc/file.jpg'
      } 
      else if (npub === 'npub19lr6k5gfnl69t70zytn4xhx38gzzvxulugkn95hsh5u2rst0yggsaw6dwy') {
        image = 'https://nostr.build/i/d7d320045b178b85c0ff24e8507f495d613f8f5cb6d997878ca7ba528e370dbc.jpg'
      } 
      else if (npub === 'npub19q7kmcafn4x8pyj0chz20sgja3642g5mvzru09se0wdw87a8msys249h0x') {
        image = 'https://image.nostr.build/43daa8a26aa96f9141def2665dacfc9e9e23a01f789530ca1155191d2e99c5e7.jpg'
      } 
      else if (npub === 'npub1n0stur7q092gyverzc2wfc00e8egkrdnnqq3alhv7p072u89m5es5mk6h0') {
        image = 'https://nostur.com/Nostur/profile.jpg'
      } 
      else if (npub === 'npub1ddhpnnj84ytuhcf6vlhtgpf6nvcpu78vny2p8e64f9fs3rkk95ashxgr8s') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1614562193147842563/mfd80R_H.jpg'
	image = 'https://nostr.build/i/3806b00b13ab9e1d1f0bfa2251b5bf819e47975972f8d3604a0df49e7dd26ded.jpg'
//	image = 'https://image.nostr.build/60b815bf3035327eea27dd43826c57b4b123d257b73b6b73e0292cc73213f0e0.gif'
        image = 'https://image.nostr.build/2f6f14975176bd46b565175e677072cb1d9655e3bfb0ab2d195c2db9872fbed4.jpg'
	image = 'https://image.nostr.build/eed8fb5ff6ae2ff2a52a13b6d43e8a058c088a807792f541c6d2fbeb6607cd72.jpg'
      } 
      else if (npub === 'npub1tjg450n2g6tr9jmjqnmkrqcvcxepk404thy0z4pd7ruefrnnxx4skamcfz') {
        image = 'https://nostr.build/i/45e074e6d95e6c766a1580f8f37fdd3a624a563219c6c431378eca17128811c2.jpg'
      } 
      else if (npub === 'npub13sdalr4c02s26sk94ecdskfpcf98kt84vfu9p8n57x9xgnrgq59s6ww73n') {
        image = 'https://kojira.io/rabbit.jpg'
      } 
      else if (npub === 'npub1a0vdlqx5unsds8q9gclrcj4kkgd9vuqwa6dqweh30c5ksgljqe3st7ldwh') {
        image = 'https://nostrcheck.me/media/public/404e6e260e8defc1f79096c89e8a6212e10993a2e9836b136336d9ac92cf4ea0.webp'
      } 
      else if (npub === 'npub18mz5sq799y2e4czterq706wm6lwjgsh3wtsmnd0v736n9tqpqlfs452gy7') {
        image = 'https://pbs.twimg.com/profile_images/1709824288919068672/pXb0gJ_x.png'
      } 
      else if (npub === 'npub127knhcmatjn5tj8azvptwan9rxhzpu9a5nmu0tjag4f7c6ae2lcqq0azpa') {
        image = 'https://image.nostr.build/1d60312eab99090ebafd98fb405bb35bda646d35b2feb3cd93ed5cd3c53cc237.jpg'
      } 
      else if (npub === 'npub1z4gsy2zcylj7hartjxusgmknqyve2ehsxqth8988wn3s5uyhp50q3zq86a') {
        image = 'https://image.nostr.build/73501210a6a2e1af6e0d5106d7c2808c4316e1d079d16bb3ffb484e50ac6a827.jpg'
      } 
      else if (npub === 'npub1y3gdwpxzqcz6udqz8ujrekv23x4svlsk0czxuzky5ejlsz8vzhcqpechsk') {
        image = 'https://nostr.build/i/0e7f0b7f07ab028e166a3bca72b2d493fb0b35ec1ac0cadfec3d33dbbeb81f88.jpg'
      } 
      else if (npub === 'npub1e4c93rsk9atgn982ulau77w7xfcmcpnafzej39qmf2lqqpe3zspqxvvpmc') {
        image = 'https://nostr.build/i/nostr.build_c02cff2344abe6a0279f4a7edf6c92112a9373887258dd3c1ed6cc0a1b9b4abc.jpg'
      } 
      else if (npub === 'npub1504jj42t6flu5l6n7e389e9mt8gxduhnzuyv7dq4gr95w20mmpqscx0cg0') {
        image = ''
      } 
      else if (npub === 'npub1z9zw0jkvkuwvjan9add3q3susphyzmtfz2xqtj8jcmh86yppy2xqkek4d9') {
        image = 'https://nostrcheck.me/media/public/332ba9ca305d8a4cfd7cd6f8bf2e1628e0a0c7e21fa7e8f303f57d35059ae37c.webp'
      } 
      else if (npub === 'npub17069lhtwe279umwker069lcp33aqdgew70tn5q8cu2avml3sxpsqcu8hgu') {
        image = 'https://i.imgur.com/m5zAiXX.jpeg'
      } 
      else if (npub === 'npub1funq0ywh32faz0sf7xt97japu8uk687tsysj8gndj4ehe825sq4s70gs0p') {
        image = 'https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/f494848b-9baa-4262-a948-301df5b9c500/public'
      } 
      else if (npub === 'npub1qd6zcgzukmydscp3eyauf2dn6xzgfsevsetrls8zrzgs5t0e4fws7re0mj') {
        image = 'https://image.nostr.build/9bc561b224e7f9256536a39bb0945dcc75f1dc8e220a04dbcdaffe0f71bc6f54.jpg'
      } 
      else if (npub === 'npub1ezw0xm0w52rd4yfdg9zlw9qvwdy46alzelklkefptrd203m37tuq4djmeg') {
        image = 'https://pfp.nostr.build/0069c41ba1061ef3fef7527f42f8c7c721cd8f9c575278f97a7e10a8c167e4d4.jpg'
      } 
      else if (npub === 'npub1u9wn35fm446vkdrmrg8yx5xhqdcmn5mnfnc3p3uujyvh88gg39lsv9ea2l') {
        image = 'https://yanom.netlify.app/mycat.png'
      } 
      else if (npub === 'npub1xzpf0hpm0tklta7snfsjm3dsxg6gausqslu2s47gtqmx7uyfxtqsvfaqmg') {
        image = 'https://image.nostr.build/eaf5ff5f1d90be383145f1fd8cfc24c2cb6f240df1e9e0e36f68c3ad57e8353c.jpg'
      } 
      else if (npub === 'npub1fk957xtltkjpgyynrffhx2zwt4wyfmva5g0a8wl55lcrtewksswqtq2lda') {
        image = 'https://cdn.nostr.build/i/883f63ea1b635fb0ea1a9d66df842e3817ee747c57419fe762cb0d3cbb813125.png'
      } 
      else if (npub === 'npub1spdcmpq0rly7cfufvu8ukz2mwe24074sg5u556s2axjq6c5w4vrqcupx0r') {
        image = 'https://us-southeast-1.linodeobjects.com/dufflepud/uploads/ff93d430-11bf-4fa4-b145-1f3e72c71372.jpg'
      } 
      else if (npub === 'npub1gq6ee54n39ky9lx79x6cf85uu5ftqvxu8g3kq6uzfec0fndj5jfqnk9s7p') {
        image = 'https://monacharat-img.komikikaku.com/A5583104072565642044.png'
      } 
      else if (npub === 'npub1ynetf06094vu2p0pd8c88w8qd9hwjgc8usrc3jnt4ut365kwdlhs3xdkv3') {
        image = 'https://nostr.build/i/f2953b3ba96998ab0fb2fb14418a1be56826ecbf18e31c3970af3bc49db5cdc7.jpg'
	image = 'https://nostr.build/i/f2953b3ba96998ab0fb2fb14418a1be56826ecbf18e31c3970af3bc49db5cdc7.jpg'
      } 
      else if (npub === 'npub1yk7zf4rm8nmsuka0g9lkgppml4ctv4tuz9gzg0c7sgxsvxjsl7ksztvsm0') {
        image = 'https://nostr.build/i/nostr.build_6f2b1f8b144609df74e9c3f101ff3d402fe01b0dad34f3e051de614ef9bcb652.jpg'
      } 
      else if (npub === 'npub150wk05w90kw3lzeu09fp7cmd66zkft9tmgk5memkcs3pm7m7yjhq47krwd') {
        image = 'https://kojira.io/blueskychan.jpg'
      } 
      else if (npub === 'npub1r25zsj7hcpjqd0yur2ss4t3r0l9h6wavzp6na9vnnjhr87wttp2qmx0zct') {
        image = 'https://showhyuga.pages.dev/nostricon/shockericon.jpg'
      } 
      else if (npub === 'npub1m0ctane5sdszuwnnx3ff2nf3x2xeya8c8u87jy82p805nddsh5ssc66ndf') {
        image = 'https://moctane.com/data/moctane.png'
	image = 'https://media.connpass.com/thumbs/2e/44/2e444398a319b3307b47445226d176d2.png'
      } 
      else if (npub === 'npub1y3gdwpxzqcz6udqz8ujrekv23x4svlsk0czxuzky5ejlsz8vzhcqpechsk') {
        image = ''
      } 
      else if (npub === 'npub1k6usplmpjuu887twmym9x2j9j4hk42fmwh6g33lxfgwwn5lh2v2synfrvz') {
        image = 'https://pbs.twimg.com/profile_images/1207320642078396416/ieHwAyoM_400x400.jpg'
      } 
      else if (npub === 'npub1wm270ct267htlw8c0fe9g5twe4tmyfp7ykdyg7fkz6urrngezzvqw33jrh') {
        image = 'https://image.nostr.build/3ab018e481945ab22efb14b6d9b0ba1180ac159e7b9d3586fd37a72a4a31d4ef.jpg'
      } 
      else if (npub === 'npub178rw9gfadwstj4jpj5ccqw09zvh4vtrgznkwp88nsmufyu67qnyqzv8kqp') {
        image = 'https://th.bing.com/th?id=OIP.f5s00zuDtyecXd9VAwe5fwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
      } 
      else if (npub === 'npub1t8wgz9hma5u6gfagvc0wewsdas28k9e4ck0dy37gd9m244qfdeqq5ncqhd') {
        image = 'https://void.cat/d/m3T4WmcMEFZUF9Fxn95AJ.webp'
      } 
      else if (npub === 'npub1jx5wwlghmj3w45dxlthaj82tetvcch7c3q52kev57esltx6zxvmslc6l2v') {
        image = 'https://i.nostrimg.com/ee456922aa610b406992cae8f18c1c8b7852d2d5266e449528b711d0502152af/file.jpg'
      } 
      else if (npub === 'npub18ukszjp29n8846qekqlccf4v252hat28seef9a3d2ur20zm49q3qdtnycl') {
        image = 'https://image.nostr.build/f3007dc0eac8a525d25b6855cfb82c93cf1b8e7f947d4f2515e7a3ae125e36bc.jpg'
      } 
      else if (npub === 'npub1yme6rcmfanhna3tffsd6atxz43xjng95wcfuuwleppjn0e44hvns2t2444') {
        image = 'https://files.mastodon-japan.net/accounts/avatars/111/163/102/308/902/646/original/ee2154b05dd978d2.jpg'
      } 
      else if (npub === 'npub1gpf2z0d58k3huudr3ykfnw3qws9p9alj666ffa96966w67ukw2gqckll3v') {
        image = 'https://ovo.wxw.moe/accounts/avatars/110/158/794/214/513/168/original/df18a4f70323aa29.jpg'
      } 
      else if (npub === 'npub1ez3rgswp9ufpqv34g5e4gwlkqcyslvpxd3u0g4sgdqlrr0cgp6ssklc2r0') {
        image = 'https://image.nostr.build/4e1009f70224974c033e0662fa10ee95e4112d80ffba558a6faa37e3a9d2d782.png'
      } 
      else if (npub === 'npub1sxrs75asx0q7tyandhtdnd5gj3447qevldle9y63rlq5w2d776nqqgffxa') {
        image = 'https://nostr.build/i/4a8c217e21ce73c6b32293d18f5e058429c2c29826310ce4a907f4d18a3cff0f.jpg'
      } 
      else if (npub === 'npub1y9zf6sn2naxflyz43j9ju7e80946k9mfh8t3fjw69rewpm6q94xsarmvkt') {
        image = 'https://nostrcheck.me/media/public/5e3025e7fee67d27a655369fb569cbeddbfb9335275ec6b7d6cc9e110ce1849a.webp'
      } 
      else if (npub === 'npub1335f2r0e7xqyqjvk7g2zkdf38dhvh4g7xn6eecfza5ttwkvnlshs8ntw8n') {
        image = 'https://i.gyazo.com/c98bad340933f37d5559d379ec0fffe7.png'
      } 
      else if (npub === 'npub17n53d53ql9seuxap52r6uckkvvf9nk0pg2v6ecpj7z9nnh8fwh2sl3j6ds') {
        image = 'https://nostr.build/i/nostr.build_03eeedfcd38e3e54b8cbde5d02227e7a6d81c4d9a33227d31eed4519fe313a29.jpg'
      } 
      else if (npub === 'npub1h5uawzp7dqkz228j3l2m8x9lh3flm8n3asfwd6vr5chf8lu3ajgs4lgx3s') {
        image = 'https://image.nostr.build/6059dcebbf56109d4d5fb8b745f62f163ca91b26d82f9db665e2f7b1e5148332.png'
      } 
      else if (npub === 'npub13ljnkd633c7maxatymv3y2fqq8vt3qk7j3tt0vytv90eztwgha9qmfcfhw') {
        image = 'https://void.cat/d/25WZPEiojrhWvQFfGr9k5M.webp'
      } 
      else if (npub === 'npub1s5ngsu82ef2rtjyv6hlstkhdgua4xs88c8mkxwmx2d2tf22f790q6c7yxr') {
        image = 'https://void.cat/d/LqhcwvPk8c3sJYTzZXoJtU.webp'
      } 
      else if (npub === 'npub18xy0r9lh5h7n22ldfkr9prhtvsanlcmhhyz350uqwfjydy5spufsh5znac') {
        image = 'https://best-friends.media/accounts/avatars/000/019/339/original/c97edb19ed9f8da5.png'
      } 
      else if (npub === 'npub139amxazfa5luagvcufs2gpnnx2gdc2ld6kjag3axs3evfyd65uus2mh097') {
        image = 'http://circle-ay.info/TwitterIcon_800x800.png'
      } 
      else if (npub === 'npub1zzmsgm27sghy2wg9wlgm877g430w9a29dl54zcznznrxhk4cshtsj9cnz4') {
        image = 'https://image.nostr.build/d8f98c2fb59edfeaebbd57d782dc7fc4638695c598f86839c15607fc3c711135.jpg'
      } 
      else if (npub === 'npub1z0c5d90mqmyvqta9gp4he8rcg4qamnarfcrkye7k98nqv0eyh4usdkj2dj') {
        image = 'https://image.nostr.build/a7844c22359e7d64a5cb0456e1c8e90a3ebc142ed3210728e933218c13e4754f.jpg'
      } 
      else if (npub === 'npub16ll6padfy2qr4x2d09qp7u5t9s2zfgwkg2dh2dr5k0rq8s3ma0hshhyhgw') {
        image = 'https://cdn.nostr.build/i/af04334e12d8b98f2c90fb33f3be8852792dd8e4d4acf96b53725113d66154d9.jpg'
      } 
      else if (npub === 'npub1zpn2qhg5wnn7zvafwgy2tjch02wqre9cru83gdc26k055zj826qsrhqlt5') {
        image = 'https://pub-58b4279cc09745c39d1bdb08f520d9d1.r2.dev/mosaic_250_avif.jpg'
      } 
      else if (npub === 'npub1s93w93h4faz4jxfc3r7hp433qkcngn96mv8q8d7rcr2tjnpeplcsxzq8rl') {
        image = 'https://media.misskeyusercontent.com/io/webpublic-08e45a9f-8c98-4697-9111-4915881edb29.webp'
      } 
      else if (npub === 'npub1mxv9lg7run07ptq9w50l6w74cp8c072zjaeusuzh7a6jt8ufk0nq2uxamw') {
        image = 'https://image.nostr.build/e62db7f39cd8586b0fdddd8241567f7cd2ec07573d669e2145113b5cbb0912ce.jpg'
      } 
      else if (npub === 'npub12j9vgaugnvvt700kxzg4n2e5ctkwgvv4npjjcd2k0a3y8gfkaf8s3jq62y') {
        image = 'https://void.cat/d/QbTgbSHjDtzFJNsZQg1b73.webp'
      } 
      else if (npub === 'npub19q2zuuklgwpq2nl0c276r6h5rsjhdq608hy5ylq37qfec5y4kj5s5v5d0u') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_1703790422175470981688388743.webp'
	image = 'https://image.nostr.build/5f8863ac4a838c37c08bc84b2f6ebcd004c4441e3d77bf6f22cfddcb8af77c5b.jpg'
      } 
      else if (npub === 'npub1ncvpth7qzqjj59c837gq2vmthsz874gad4akg4zs227wmhkt3g4q0aqa6p') {
        image = 'https://image.nostr.build/a60fd29a813c13e8bedfc0b341155d9ad928ad66f13e1da596326c953305db2c.jpg'
	image = 'https://image.nostr.build/509a216e1c482906f6670bd60021b5b763f5006c68919b5568d8cb313d5f5f6f.jpg'
      } 
      else if (npub === 'npub1u3qf4xhxz8k8yp5ff6t764jgu3mtzhcpvqg6csquw0ezqvwrveusemhhqw') {
        image = 'https://image.nostr.build/1e570d4465496dd9ff259c193b7890ddbb10ab0fae2fcd3a3087fef4410c69ec.jpg'
      } 
      else if (npub === 'npub147a6wanzyqskrmx55s0e3qhkpay82f6arzgpa3xuunrsjl7gptcsxs8dzk') {
        image = 'https://image.nostr.build/1578f5e456b85af1e98efb932061e5e71bbc6a124bd01f1e4a0219f1a8f81892.jpg'
      } 
      else if (npub === 'npub1zyzy7apfqpcdsnz0pttazmgfagqqqxmyt0x6v26umjn5jy4792wqlxhqxm') {
        image = 'https://image.nostr.build/7c3bbb754e02a7c13127df88c0b10a475d5f1c57287de0b5a0d0c8eebf653fb3.jpg'
      } 
      else if (npub === 'npub16477vrdvula4dgwap3j0n3rqmwnyu0w9gpq3g5c33rf3a026le0sg24zx4') {
        image = 'https://pbs.twimg.com/profile_images/1362969994569555973/mQYhNF2-_400x400.jpg'
      } 
      else if (npub === 'npub1vs23ex5l3v9666w2lwt84nz7a2p377323jlmhfjm978zrzpjgz8qhayflh') {
        image = 'https://nostrcheck.me/media/public/c743876542b09f266457837f2d79d94956a449d4871f3849cd70c1671ff0295c.webp'
      } 
      else if (npub === 'npub1f2kqdhjg6uqzm9dpkzw9fnut6zqwfl7ymzhj7kkarnz22lfwjntsr2cjwm') {
        image = 'https://image.nostr.build/d0144f7907c92478dd0e904529e8d09e0a5a7f5fda86aa5183a7fff261cbcb22.jpg'
      } 
      else if (npub === 'npub1gsl4k2hnz66dg6f9xm7j9ztmkjkcyptx6zrxj9wqhfqqcua8ssasw04u56') {
        image = 'https://image.nostr.build/0d15cf128abd0a0770b0ef4c3921dc2e616542d84eff531372906c83dadb559a.jpg'
      } 
      else if (npub === 'npub1aw8cqgmywsnezzlf79q5rv8v7kjccmyt85k7tkcku2gjza2fz76qg8yf36') {
        image = 'https://image.nostr.build/7557b7862cfd0bba33f009dd6a18b24218158552330fbac12ba173fe213eca4e.jpg'
      } 
      else if (npub === 'npub1qet5r70ujwwahgpxr7sjcghfv7c4tunr6wk964kfhep9n20cykaq2vkq4e') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/097/993/original/d9024ec8fb105f21.png'
      } 
      else if (npub === 'npub1zz42gjxxxnmn9fegg3af9mkd06zdk0f3f79fmuftaftrdts6yahs42tx7m') {
        image = 'https://image.nostr.build/8ab4596f54b76ffd4597ecfad1d308e8486becb5eb92da9442c3dcc69983d458.jpg'
      } 
      else if (npub === 'npub1xav4phdpyh6nmavpf0thw3s9syugcjgpl3gt8p4qykte3uw7shasz62n5k') {
        image = 'https://image.nostr.build/c0b8f68cccc416d9c5d918089ba36ac4bb72a3355e8166ad1599234a6880b6f6.jpg'
      } 
      else if (npub === 'npub1tzfhjkqrdnk7j4djtwfftqupgzazm6kt35vnnmv35sd7y4z7dx2qzhkje9') {
        image = 'https://pbs.twimg.com/profile_images/1684180526624821250/KYn7m0nr_400x400.jpg'
      } 
      else if (npub === 'npub1r0vdvgzw55q55t4xhe05xj28n5xt3s0n7jwdrdlm0p972xzmp2wq36390z') {
        image = 'https://pbs.twimg.com/profile_images/1198535120396808192/sDzOF2sc_400x400.png'
      } 
      else if (npub === 'npub1f27hlrx0vmwfgqjhl8kcd6fdfsv9ztrlu39xpaclt40uz670ergq20a2t5') {
        image = 'https://nostrcheck.me/media/public/aff86d1bc1611b2f8620fd4ee860d4e2c24ed443177e6a2c8f3a6bebf36d7428.webp'
      } 
      else if (npub === 'npub1shmp30fttjm45x55hyp8tf9hyucjwzzwdgqakuwd94uzh68fn3rsuje362') {
        image = 'https://bae.st/media/a365fcca6237f1925199bb42ec02e2c5b1ef9533c5fea9e9a008685b1b98d86c.png?name=SpookyBot_avi.png'
      } 
      else if (npub === 'npub1e8x35z77zdqv53km0d7atjvd9s0tncs6eqm30ymkh3vp9v0r420qcx2fwy') {
        image = 'https://image.nostr.build/35dda9b1dca89da70041e835c7800d1a2b2c1c0df4a7f4b94bd5c5f6553cb551.jpg'
      } 
      else if (npub === 'npub1a6e3kzl8xy8assa0jakr9454wpacq3cg5l5npu3tczrqxzazrlys6sfwes') {
        image = 'https://image.nostr.build/40ca03eac5953e264dcb51db18b842bad01f763187fe90a7da4d888e57d47f3d.jpg'
      } 
      else if (npub === 'npub1ght0kah3jpv4sy0xjhqlzp3erxy3ljchz0fc5c4dmx7kfl3jwjxsmt2g3d') {
        image = 'https://image.nostr.build/fd0f9467761e9ad2c9150c1a04e7849b26616f41e0e8061f5efa9556cdfcd877.jpg'
      } 
      else if (npub === 'npub18t2s3z0m63x0kvjqanmmw5y0s9896pclk9zrk5jg9nmmzvqkv7vqxs45cs') {
        image = 'https://nostr.build/i/nostr.build_a8bf6513f7862da282ff81aeff479e108604e29d67cf9bb9fd8ef14a10377c76.jpg'
      } 
      else if (npub === 'npub139xjvp4argegqsa20e3u9mxmm7njsvvmn6xg9tqwazz4ht9yym7st0f8ez') {
        image = 'https://nostr.build/i/69109b7ef9845c006a38d943cd099f5876027f2f4a3f5ebd3e7a48608e5c54aa.jpg'
	image = 'https://image.nostr.build/bfb41dfc71bf6cdc531fa74d372a0f8f8b08d75cc9d73d5a77fd012ae203010c.jpg'
        image = 'https://image.nostr.build/2ea499df3598936ed07dc3286194edd554cf6f2b9a8c99fdb0eeaf5cdf1c89f5.jpg'
      } 
      else if (npub === 'npub19t6fx7vnalp5x0rng3xrnpuuukwatlacuglhqfk3atv9qkeu23es7nycx9') {
        image = 'https://image.nostr.build/4ef52f385d9bc85e7dfc5882e6fa695bce12f64f4aa72cc1536dd2211e44d403.jpg'
      } 
      else if (npub === 'npub13uc3jsqsjn7l0mc7zu6ke890hspqgzyxfl82s07ltkl2sdn53q0q6kj48r') {
        image = 'https://image.nostr.build/90af47b04d530224d2cbc33e9ebf0b92a143bdd2c459968868d0bfe1a8bc93ac.jpg'
      } 
      else if (npub === 'npub1t9wy66teyy8pszhawnz6cu9rd3f4344mpmyfr9fn4zk2x8fwpjps52frzk') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_2686401472732926641695396727.webp'
      } 
      else if (npub === 'npub12h6gnqwcmms7ya464fg6jzlju4h00l77qds30k8ed82jceuddexqnhahq9') {
        image = 'https://image.nostr.build/3b530dae3b943114def2e3acc229ebd5c526b7a075594a01a1f37e8db4ba3d24.jpg'
      } 
      else if (npub === 'npub1jp8gar0sujvrw69mg7addzrtmgupdvhuyvccgecru64a7fftvwdqtjslre') {
        image = 'https://pfp.nostr.build/882933ad596bf8e40c26b4c6d9901c88a54572563029a9b9cf02cd344c143189.jpg'
      } 
      else if (npub === 'npub1jczntzerp94kff0hlwx0e3l0xu92dzealr7xj5zzgl4npfumz5zqlp8p0g') {
        image = 'https://nftoasis.io/saunaland/img/saunaland_img.jpg'
      } 
      else if (npub === 'npub1y3d8gnmetz6mquqc4ej4hd7cf4zyrdp72fff0hsg97xhff0cdj8s72taqn') {
        image = 'https://nostrcheck.me/media/public/28441a448caa58886b885e0f20e2cebdbb5c66701fbbb1f320f5cdb8db9ab209.webp'
      } 
      else if (npub === 'npub18qvuqy2hd20g8gyvfg3vxqra0h63xkhnhpgqlma0d6avd5v0662q8twuf5') {
        image = 'https://nostr.build/i/nostr.build_fe2c6155c8608f1faeb370ecd66b1f283ac2540d81c629c9a36c3f5ad5f1866c.png'
      } 
      else if (npub === 'npub1gk36gm0a5mdt5rv9xnsf2f994mu8swr45x0ww5d7qc0ezkyp6r2s2re5qs') {
        image = 'https://image.nostr.build/2fc812fabed2819baef818a9cd8741888fb0959452dd21ae22ce469c942e7231.jpg'
      } 
      else if (npub === 'npub1ex8aej88mfctkcp8lkanqfvrqe82hmfcm0a7xencwusput5nnttsvtgpyc') {
        image = 'https://image.nostr.build/4054796e714f5280044a35191a38b9e89c311ba2cd0a028ba42c0656c5f235cc.jpg'
      } 
      else if (npub === 'npub1pjvcwasj9ydasx9nmkf09pftsg640vm5fs7tzprssew8544yj2ds6e0h42') {
        image = 'https://pjv.me/pjv1.png'
      } 
      else if (npub === 'npub1hp2na2fancmjfca6ss8rn63nzc3pktcd7nkxmx4ke6azt7kqawssj8cu23') {
        image = 'https://image.nostr.build/43b49dd50084e085ca62c6d08a830b1a2cc03926b28af9af6f027fda89dc1af6.jpg'
      } 
      else if (npub === 'npub1a5m6plhmcvr6vs6uxj05daujea8hu9fazayzv9lee0x3t9p6vspq7m4vp4') {
        image = 'https://image.nostr.build/889e256228a3141c0437ca464a5186e32a37e82f6eb41a3b6e082ab77e979aa8.jpg'
      } 
      else if (npub === 'npub1rufdth8rha9uvg80qk79e6rq39hpws8vfs6nvpcqt9zl7y4pmxgq7tsjj3') {
        image = ''
      } 
      else if (npub === 'npub1m4xkk6tlt3wqdhvvltr90xf5pvxd8vntapghd8udlwd4ywenawjq003ffg') {
        image = 'https://wos.hostdon.ne.jp/m297/accounts/avatars/111/086/731/036/509/821/original/b423af5943cb862d.webp'
      } 
      else if (npub === 'npub100q7h5j8p0c7a2527s2m8ewxhgka6se8qexfppgzswruc6ldsfmsqce5xa') {
        image = 'https://image.nostr.build/315d1b50482a33ed5b9c9ad61f18649bb29bae72c74952a01f4bc07812f654fe.jpg'
      } 
      else if (npub === 'npub1trx6nd93wafj2tjqeuxa79xn2n5ctvq55pxu5srgjn5v9qjlwx5q9j8pg6') {
        image = 'https://i.nostrimg.com/8b4134c5f65a64d54d392a28aa5924be0b0c55488e7367e571f896082a869152/file.jpg'
      } 
      else if (npub === 'npub1wx7tgh2rqc2dw4j0hfjhg474la7c009vtp0nkhh578d3qeq0rvwsuyr0nw') {
        image = 'https://image.nostr.build/aceb465c7a9f4db5922f9a3b8a2e380eb8f1af779a41d5d58c9036cd7e80ca59.jpg'
      } 
      else if (npub === 'npub1d7q26usgnmesjc9s7we4cvv039gy2xht9j2g0mlqr8jgshgescrqcu4n8u') {
        image = 'https://pbs.twimg.com/profile_images/1570660340240875520/UCgg95CR_400x400.jpg'
      } 
      else if (npub === 'npub1xacszdsz6q9yv7gcrwugrc8fzxdkm7nl35jm2u5v80ctkhh46tlsu8aenk') {
        image = 'https://image.nostr.build/918bce0f50e31e66aa5546a8edff29ca52c413ed28099ac8b8cca93d911e2eb0.jpg'
      } 
      else if (npub === 'npub1hzhwglrhcq3hwnfpntjah9xm66e8t5x69c0pcuqdpuc9vm8w2lyqpx8udc') {
        image = 'https://robohash.org/npub1hzhwglrhcq3hwnfpntjah9xm66e8t5x69c0pcuqdpuc9vm8w2lyqpx8udc?set=set4'
      } 
      else if (npub === 'npub1wfd37edmgz0zq85gvjqp3vyyup2a5nt6p8nsuw9m2y5zcguwlezszj9qqh') {
        image = 'https://void.cat/d/7jiiyz3zjPu8MY5XPAk6Y2.webp'
      } 
      else if (npub === 'npub1rnzdz0yqy744tctdh9mtfpsdx42gpdwvf5pc7re6umu4dk94wx8sjq0wfg') {
        image = 'https://pfp.nostr.build/fd0c9cf4f0b869b40b02783cf2e65402fa81937e40b37c2396784fd79f07e167.png'
      } 
      else if (npub === 'npub1z7k4pffj7250eaydd3ya0v07mmzecylcq9cw5af68zu39q0k4u3qj6xre4') {
        image = 'https://void.cat/d/XWffUQatK3jZTniiGYJUbD.webp'
      } 
      else if (npub === 'npub17qqekpej52c6wqmqlw84mkmlgp2ylz6xkryj3ccqk5vld4f7clys047uwf') {
        image = 'https://nostr.build/i/93cd86ecfce2b125d3972dba08ead576af543f2531fb8fc025d175d0f9248fe1.jpg'
      } 
      else if (npub === 'npub1a4xt09x60ssnwsz7supcszsx4ju2t06gkhhfw76h3z6u8zd8e6vs8prdgk') {
        image = 'https://image.nostr.build/4533e0480f17763fb5ee85f05d7a187f18e8023baced868838a87a857d5fc426.jpg'
      } 
      else if (npub === 'npub1gs0lczssedg0c9r66c5v7x5jkn5nwfza0l222f3jvek36cm8v7ds4yr5c2') {
        image = 'https://nostr.build/i/nostr.build_acaac90108786a66a979562cae69d7ed4f5dbf22f4744de0943d1031605aa6b7.jpg'
      } 
      else if (npub === 'npub1hknw6wqv9jtd8gc5paha6ng2dstfd4n0fxl04t8z4lrmpcr52xnqu0pll8') {
        image = 'https://image.nostr.build/c05379eb9a0ce0b14cf0827c505f721b3672c13a668e7e9be8f0642eb4aed58a.jpg'
      } 
      else if (npub === 'npub1q9s9hngm5ttdeyvh5asf344cch5eel7udj4sqvj7keanv2p5tvdqgsj3cc') {
        image = 'https://image.nostr.build/54de942633f74140fa6143956f958f592d557e433b60570c393334fa0d6b3bf9.jpg'
	image = 'https://image.nostr.build/16d025d2489b25d544b60bc08b2cc025752e4f9c8cbba998fd1c9a13a4a25ce4.jpg'
      } 
      else if (npub === 'npub1zrhuszhdmt57ag842s6u9tm26yfp642ddn2dd3znec67dejdestsggrkq5') {
        image = 'https://nostr.build/i/e163883c19d56067ada60b12fbbe1611b64398973af0b10371742b152549d06d.jpg'
      } 
      else if (npub === 'npub1w6g59r0eeu8svsyk53p86lp2emly3dh2rphaew8zrjxn7gstl0es8zlftc') {
        image = 'https://i0.wp.com/nagahama88-b.shop/wp-content/uploads/2022/09/C_200807_88_logo_ol_350_CMYK-scaled-e1663128083320.jpg?w=787'
      } 
      else if (npub === 'npub160sqe0y28udv7jlasqvr7hpzvtvr9s0zhp986qxraudf4prcgvkqwwt39x') {
        image = 'https://cdn.nostr.build/i/e11ea8aa2744e3a3dfdc0cf76eb722d39a353ee7e3f217053f69148967ddb719.jpg'
      } 
      else if (npub === 'npub156nt05a2wszhzcwy4ukyyu2frpshxtsjq6d2jgrspzt6hj0zn5zq2puzk3') {
        image = 'https://pfp.nostr.build/208617fefa4422f5e98105771217b1bced1a9a9c93be36446cc2fe8b83ffab10.jpg'
      } 
      else if (npub === 'npub1xh3has87stm7mx4339zf0q07xx2ssv7yrvanj72tfshu2wfa7ggqxp6fj8') {
        image = 'https://image.nostr.build/1fd1f7df8e7260ddcb900a56a9eb00307c37b3535c15a1bfa9758ce97d694104.jpg'
      } 
      else if (npub === 'npub1w8eql247lm2ycdha0je6uf2846w7wvvfw5r798lsk703w622gy7qtd0rjm') {
        image = 'https://image.nostr.build/7e393f46594486d8b50f3553302c0570ea6dc0f5fb1fc5161d48d2063f05cc17.jpg'
      } 
      else if (npub === 'npub18m4nmc2wchzgcmzvnluqjzxyrpshp64mwje2vuz60kulny3v6c0qtgcl2x') {
        image = 'https://nostr.build/i/p/nostr.build_07ce22b2dbb8ace6d6f87ee5e3625823965f737254cfa37f7e4a82a717aa9bbf.jpg'
      } 
      else if (npub === 'npub108yl9s9q3q2cyxgfmup08w7xptt948lyc5vjcegxh4dqmcswdwnqy84das') {
        image = 'https://i.nostrimg.com/921e6128bbb1c72762767ff9c6f693985cd014ccfaf9af4141a3c9a356402a4b/file.jpg'
      } 
      else if (npub === 'npub18e2zsjvqs5mtvexsfl2ycc3l3jhctekn9xtqxvrt8r0ykeuu8dgsttezf3') {
        image = 'https://void.cat/d/YLaLuVVSPmqRMD4vVFc91X.webp'
      } 
      else if (npub === 'npub1cgmz0duause9f7l338cwqt5k086w89h2vptjzu5hywct0v6fftcqazj6vy') {
        image = 'https://i.imgur.com/MaceU96.png'
      } 
      else if (npub === 'npub1xatyljf6wkgccegzsehwlkyqv9tpe5xe6hxe2dhefqh6mekurtwqt2uuae') {
        image = 'https://yoshiki.kato.name/shared/img/yoshiki_600x600.png'
      } 
      else if (npub === 'npub1p2psats79rypr8lpnl9t5qdekfp700x660qsgw284xvq4s09lqrqqk3m82') {
        image = 'https://pbs.twimg.com/profile_images/1524391291475406850/ULKOymid_400x400.jpg'
      } 
      else if (npub === 'npub198pqyzfmdmrp0hs52qnzayv7peh73t5eu5eusvhv7wadr5lkusmqhvkw87') {
        image = 'https://image.nostr.build/042ac3faaca20d0c2a6b3c9fa882000cf911aa118e9a6a449d353a4e2e7da531.jpg'
      } 
      else if (npub === 'npub1dwqu0sflksh3a743202c6rj2jfd6cdjpj7guvmwgg4e8esdlwt2sqec9pq') {
        image = 'https://cdn.nostr.build/i/p/61e4bee361fec34f7ffd296a9380c16f3744411d63761965884ff07e4d942d71.jpg'
      } 
      else if (npub === 'npub1el7htyt98s7myfcddy38rc4atf533yjufrvywzxq9nr2xkqzj4eskwsv5g') {
        image = 'https://image.nostr.build/ce72f5122b087e4c0ce4c2892fce8f014f2e9db59022f73ac1fceca30a8bbd70.jpg'
      } 
      else if (npub === 'nprofile1qqstr72vgw705nhh30eyl9ujz60av64xgnln0evgwd83kskl9uceqjq6e9qtw') {
        image = 'https://i.postimg.cc/x8B073vs/360-F-572971935-Dz-Glb-YAHz-RHXQLFzjezbv-Ka-Jme-Hf1f-B7.jpg'
      } 
      else if (npub === 'npub1wf4pufsucer5va8g9p0rj5dnhvfeh6d8w0g6eayaep5dhps6rsgs43dgh9') {
        image = 'https://nostr.build/i/nostr.build_1732d9a6cd9614c6c4ac3b8f0ee4a8242e9da448e2aacb82e7681d9d0bc36568.jpg'
      } 
      else if (npub === 'npub1hcwcj72tlyk7thtyc8nq763vwrq5p2avnyeyrrlwxrzuvdl7j3usj4h9rq') {
        image = 'https://void.cat/d/LjNxweFpq6P6rgn2SmiPvT.webp'
      } 
      else if (npub === 'npub1e9vcz6204fft6jxvyf0edd3a54t8n9znz007h94mmwlkqlqeulzqfjj93f') {
        image = 'https://nostr.build/i/p/nostr.build_528c8201b8c21e1ba4822e6a4a1bf4e381c6f984eb2aadc517f4bea5e00415de.png'
      } 
      else if (npub === 'npub14mcddvsjsflnhgw7vxykz0ndfqj0rq04v7cjq5nnc95ftld0pv3shcfrlx') {
        image = 'https://pbs.twimg.com/profile_images/1524287442307723265/_59ITDbJ_400x400.jpg'
      } 
      else if (npub === 'npub1mayqdaq0sd5f4uexa6aky3agr982vhqs3rw7qwm6yr9h5zetdg4q4shl50') {
        image = 'https://www.boltcard.org/img/profile_400x400.jpg'
      } 
      else if (npub === 'npub1kmwdmhuxvafg05dyap3qmy42jpwztrv9p0uvey3a8803ahlwtmnsnhxqk9') {
        image = 'https://void.cat/d/6keaRZZHz7emqDJ1bF5Ucd.webp'
      } 
      else if (npub === 'npub19uy0u0ferx98qqltm0zlnyx0yuexz0kkm2qdym6rkm6mvu5cadgs6uffq5') {
        image = 'https://image.nostr.build/457e3c18395b8774213364864fb8308005b7e5d709bbc8529e0b832126d89fea.jpg'
      } 
      else if (npub === 'npub1ymxzx5v2va4n0vg42pvzlsm8zhw24t0mq8nh95ffs0axm02365pqxtwy3j') {
        image = 'https://image.nostr.build/324664bc70596b58e506edaf16c2eea0f8733385a3c3b94dbb53bd50494949de.jpg'
      } 
      else if (npub === 'npub1hvcfd5eg4t5tu9v0zlx425jg4yhk0tqhsmutalprcrxdnlu0jqgsv3qag9') {
        image = 'https://image.nostr.build/09c0a4b09d12703d90735e5e5ab57504d1bab7e03bcd1993c40e7095ec132413.jpg'
      } 
      else if (npub === 'npub1epn2p2r8jqxj2rqx33ncxdnwyjwgt5vs22r6le4nwj7ykry84hssdrezft') {
        image = 'https://void.cat/d/QVWQfGzNuucfcgSvbBGpoH.webp'
      } 
      else if (npub === 'npub1afax0uhu9lczgkca47wmhp854xd06wwft999ddqkun7d7zszm36sqw5hct') {
        image = 'https://void.cat/d/Sub5tdvgXDbsS5F7sWT6KQ.webp'
      } 
      else if (npub === 'npub1j8f588s627gtldwr6mt6kkce7pc4787mtsawm5tddwf5tfuftnzqlpn4d4') {
        image = 'https://image.nostr.build/a1865855e2fe315c0f61a41d2f785ac9ee4e4da40bb4d15bae9b396bc709cffb.jpg'
      } 
      else if (npub === 'npub1zp5l9g8tzzdgzpwrgexqyndhyrx0qk8mq0dcnw8ykqx0nnjxwe6sld206q') {
        image = 'https://nostr.build/i/956ef5438b5da23fd0d53cbe575a6e9303a86692ccf39c378178c5eab8ade29f.jpg'
      } 
      else if (npub === 'npub1cj5ykww7s2k0468z0rwggkf92679qgdcedu5jn86rtarsv05ee7q0gjj9s') {
        image = 'https://nostr.build/i/8c45cdeaca7af18eca41e63337f04a204b798616d8f53b4f0da8bd6fdadd2be7.jpg'
	image = 'https://nostr.build/i/8c45cdeaca7af18eca41e63337f04a204b798616d8f53b4f0da8bd6fdadd2be7.jpg'
      } 
      else if (npub === 'npub1smy6967kc552nyntpamfazv8vtpppsvu0739xu8senpfm2qr9t7q2f5p6x') {
        image = 'https://image.nostr.build/7dbea25f0de4c42888b295b49c5b2a619253200c51c22e3815c34d7f2767728c.jpg'
      } 
      else if (npub === 'npub1lp2s7ek845haxkds2y4r5hdurmpyw6zyhf49nchsl6h2cqz3d5qs6kame3') {
        image = 'https://i.imgur.com/JGBbE72.jpg'
      } 
      else if (npub === 'npub16xznny2gk7nqdg0d2wwfrvmwxwh6x523u8003tg4ddq94szth0nswe7rsr') {
        image = 'https://file.misskey.design/post/8c81a5a4-35cc-4b7f-8986-50090c9fba51.png'
      } 
      else if (npub === 'npub1cg8jv2759y85tsw0677v836qzhufw4zr45tva2devmfrdlvc8ydsjwpn02') {
        image = 'https://s3.arkjp.net/misskey/b9f008c8-cd65-4610-a3e5-0cdcb9afc0f4.jpg'
      } 
      else if (npub === 'npub1ljypdr068fk0fh92tfvwzklej4rhw8ej2seh9hhveva488gq7zms8s2xpu') {
        image = 'https://media.discordapp.net/attachments/693923727984820234/1097140781585797242/20230416_214316_11.jpg'
      } 
      else if (npub === 'npub1ttkaekhqjmhk2lcq3tdywspyzjf2vqr6258upmgvtwq6ek7dfxdscwgmw3') {
        image = 'https://s3.fedibird.com/accounts/avatars/111/228/191/894/242/252/original/11272539b0df9013.png'
      } 
      else if (npub === 'npub168ln85twmu2um4xrer2wv3ld80rzucadfg7ur0l4t5e0j2wesqpswx5ae8') {
        image = 'https://4.bp.blogspot.com/-2HGFveBBt1Y/WkR92oLErgI/AAAAAAABJVg/h6O11ZNXvigH0HgGwDEeN8inaC9FKRfQwCLcBGAs/s800/money_kasoutsuuka_b.png'
      } 
      else if (npub === 'npub1nm4had2qc7x8xj6stdhpk5jhm7denqytvmvnhxxtggt72eznr9kqcrltls') {
        image = 'https://image.nostr.build/92597cfd27e5bd14208ac044501cad7fad361892c8f09c7d27230d09f20285b1.jpg'
      } 
      else if (npub === 'npub1fpnx8zytrl8txw8wcsj2jta0a5y7mpnwlj4w8efvps0y8w79e54sj5qhh2') {
        image = 'https://media.misskeyusercontent.com/io/e748489e-3967-4c08-b799-5c1be1ef3da5.png'
      } 
      else if (npub === 'npub17s28ft6mzqrx9dja683h3tsfcm0lc4nyhjghu4e4qewlhhhwwhts8vce2n') {
        image = 'https://media.misskeyusercontent.com/io/webpublic-2365a91b-93bc-426c-8197-af1ab8938c8c.png'
      } 
      else if (npub === 'npub1txckvarwd8ztjy3l84n4any0k4m8pw8yukgn2em7sr52g9lm3alqj58rcg') {
        image = 'https://social-cdn.vivaldi.net/system/accounts/avatars/109/348/506/893/620/318/original/fe9f45b9d88db936.png'
      } 
      else if (npub === 'npub1vl5kls55u0v9qe6sv5ypknx8krm4zday6gxzrd3se84ng88mztmqn9gr3e') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/313/898/019/877/115/original/60c0277169d5f6ea.png'
      } 
      else if (pubkey === 'b33ab1f5cbca4659785b9bf7cb9106b5129efbf1a720f02da9e522f9acc8fe33') {
        image = 'https://nostrcheck.me/media/public/db704f89184becdcc6ad8ef10402e0dda227172051e5641f57231f0ee8fa9152.webp'
      } 
      else if (pubkey === 'c2b2006172dfe76e4c5160b6686d60eb228e0c21a84ab83c505eac3224eb149a') {
        image = 'https://robohash.org/npub1c2eqqctjmlnkunz3vzmxsmtqav3gurpp4p9ts0zst6kryf8tzjdq5stmrs?set=set4'
      } 
      else if (pubkey === '15b9f4a92b2f4b24b59621acdc1c996facbd37f1b5606045bbd1663ce87eef10') {
        image = 'https://cdn.nostr.build/i/8793e6a1011b8ea48e5ea10ab4fd9a97f18a43fa377d2a15b0e35505e7ab6ff8.jpg'
      } 
      else if (pubkey === '32f2ac16fd46ed576db22c47ea3904e26f56687a72369fe6885b5a76fcd3915e') {
        image = 'https://robohash.org/npub1xte2c9hagmk4wmdj93r75wgyufh4v6r6wgmfle5gtdd8dlxnj90qtsplw7?set=set4'
      } 
      else if (pubkey === '40be6c7785ca0902f029f5813ba7fb7aadd4991a3207cea92877870a3a14f980') {
        image = 'https://s3.arkjp.net/misskey/9b4999f9-2eea-4125-9507-48fd7e7d4c32.png'
      } 
      else if (npub === 'npub195mmvxv6fglpz3pldfm4zmam9l5nh0as3yykq59jdk3plr7asghq6jqzhe') {
        image = 'https://file.misskey.design/post/54762070-70e2-4e5c-aa42-5ddd1c6cdc59.png'
      } 
      else if (npub === 'npub1gudx4luwa5thmv5mtftdgxg4qgj850yls35mqyryhsxj4xh7v5wsvuehf0') {
        image = 'https://image.nostr.build/d836dbc0c3efbb6d8e1d662c7ab4d1f3dac1d2edea965fa0b138ab0279a0edcf.jpg'
      } 
      else if (npub === 'npub1vfutm42cjzqmajflvry2u0rjqfglr537rjynj7q2tncqmg3dup6s5zxu87') {
        image = 'https://file.misskey.design/post/569a3b1d-4088-41c6-89d5-3f586ad48ae6.png'
      } 
      else if (npub === 'npub16ctx4q9rgpm23vyr4yud2nhd086gvdf542gtn3x5nq2u5h66t37s789m6d') {
        image = 'https://nostrcheck.me/media/npub16ct7s789m6d/avatar.webp?76'
      } 
      else if (npub === 'npub1gtejc00zpt0c0mmce5kwe8x5dcz23m5cu0zs9lnl9fk8afrkunwsld63ck') {
        image = 'https://media.misskeyusercontent.com/io/49881d05-e2ec-407e-98fd-5dc8d812d4b1.png'
      } 
      else if (npub === 'npub1uky4aymg30w0vqhz769htv8kjd32fzq5lndahk30uwy0xrde0wkq87g6sn') {
        image = 'https://nostr.build/i/nostr.build_3ff7d0185a0824642d4cfd9eb77df4a5f648fbab37e41057ffcb451b78dfa5bc.jpeg'
      } 
      else if (npub === 'npub1ns7am84rm6vh3zwplcz4ykkjqyt5jq8pzjac2lxjg0ptpqnr6mhswgsg2y') {
        image = 'https://nostr.build/i/e89035f7fe8f1325e2a27ee011621cba6799433d113b52c7d1ec621628b44467.jpg'
      } 
      else if (pubkey === '24f2b4bf4f2d59c505e169f073b8e0696ee92307e40788ca6baf171d52ce6fef') {
        image = 'https://nostr.build/i/f2953b3ba96998ab0fb2fb14418a1be56826ecbf18e31c3970af3bc49db5cdc7.jpg'
      } 
      else if (pubkey === 'd83c6828113f4f4573a30ec278aef3cf8ae8b270d9b4e1cf5e4a936bab9c2b0e') {
        image = 'https://storage.social.camph.net/drive/webpublic-0cb26cad-f7c5-43a6-aaa3-32a5a2d8d1cd.webp'
      } 
      else if (pubkey === '7d4e04503ab26615dd5f29ec08b52943cbe5f17bacc3012b26220caa232ab14c') {
        image = 'https://void.cat/d/BouBC1J4Gt13vpowA4SHtP.webp'
      } 
      else if (pubkey === '1f2787b72797d6be8d32a0bb993c19e698765fd5aeb66c3e788570693c045d87') {
        image = 'https://i.floppy.media/122a98f7ec54b655e96b41c5cdfca971.png'
      } 
      else if (pubkey === '620fa6800af4ceb8d7be27dcf6df50c15402a050b383b501d5fae83346de17ab') {
        image = 'https://image.nostr.build/8d6edcb7535eaa21d2400a5de6ebee2667cba85825904163f2098ece27cadddf.png'
      } 
      else if (pubkey === 'e1e3fa7adcffde794232108bf21392f9bf2496d73cde611534f2dcc1be872d25') {
        image = 'https://1.bp.blogspot.com/-FYWRJSiVIgI/UQuSUjfog0I/AAAAAAAALvE/-ZlEQ4pAnZk/s1600/shoes_32.png'
      } 
      else if (pubkey === '98bd8a4ff20760b72fa25dfd98ef3c162c253a126f1cf5cf85f76b9dcc9a1a9e') {
        image = 'https://image.nostr.build/75ca4cf30f285d5acca87730011fe26f1fc4fcf562a5454a8c7945d1c409f321.jpg'
      } 
      else if (pubkey === '8d28f681506b81876c1f0599738e31f72a8bc40cddfd1855134b7a84e900a387') {
        image = 'https://cdn.nostr.build/i/c09c0bab1f88c9e6fc9a3848f5d97acbaacf1ee1b880c2c71d7db96123f13e08.jpg'
      } 
      else if (pubkey === 'dbf0becf3483602e3a733452954d31328d9274f83f0fe910ea09df49b5b0bd21') {
        image = 'https://moctane.com/data/moctane.png'
      } 
      else if (pubkey === '5f468793f907165a97d145407e824c5f6ee82ab9884d070229ac67eff17e29c0') {
        image = 'https://cdn.targoyle.jp/img/230928_icon_q10.webp'
      } 
      else if (pubkey === '89e14be49ed0073da83b678279cd29ba5ad86cf000b6a3d1a4c3dc4aa4fdd02c') {
        image = 'https://nostrcheck.me/media/quentin/avatar.webp?v=555'
      } 
      else if (pubkey === '134743ca8ad0203b3657c20a6869e64f160ce48ae6388dc1f5ca67f346019ee7') {
        image = 'https://nostrcheck.me/media/public/avatar.webp'
      } 
      else if (pubkey === '857aacd9bc6e8f8639a4905cbbc25f64289e6b8bb3e0be6ae6ec15f238858631') {
        image = 'https://tgkzmdd.help/nostrimg/profile/caz0617_silhouette_600x600.jpg'
      } 
      else if (pubkey === '458f02ba60e31025208fa48dd13682a91c7da1d04bc9e318340880774be7dc50') {
        image = 'https://image.nostr.build/30a7edf903a0405cd9cb738b199e3369db7ebe306fd2a1e7808f7b22bd60a579.jpg'
      } 
      else if (pubkey === '8c284466bf370c2ed9c7911bf368d984877075fd1b67988f58a74c41e38568ac') {
        image = 'https://image.nostr.build/cde7cbb76c21385e93450dadec223d8934284dacb315dc5231a5351d779f0b2a.png'
      } 
      else if (pubkey === '107aad26f58d19e0f4ee43d8dc86ad7056c35508633b7538ee1f148a38b83e68') {
        image = 'https://lh3.googleusercontent.com/a/AGNmyxZ-R2s8alq6n1PwuRVRVonlfuXdx58dYioSgNVM5A=s96-c'
      } 
      else if (pubkey === '16d16239698f995dafbe5874c5f5ff9c8bd0eda9e0b948dae881b0b291e45f4c') {
        image = 'https://cdn.nostr.build/i/4702b0b42cca496e5b12fe9dd87d57a4e94bb4da5271b26042e151bf5e59c05d.jpg'
      } 
      else if (pubkey === 'b29156a299493256dc25b36d22a1e1795bb1ddc5c5f6b42f2d22fd9837d6fe75') {
        image = 'https://www.city.urasoe.lg.jp/sites/urasoe-envmap/kansatsu/images/k-usukawa.jpg'
      } 
      else if (pubkey === '4ce9af0070072fb6ec635d58546afd55d292c843dba7c420faa4242a5bd4549b') {
        image = 'https://image.nostr.build/37999bf68d3feacefdad834e93c620492606fc441c5964fffbf366ffa953f060.jpg'
      } 
      else if (pubkey === 'f4d639086f6b3452e6631b256b99b59afac27a9fed588a57fa337b6beb2a5d40') {
        image = 'https://media.misskeyusercontent.com/io/49b3be7f-1db4-499b-82e7-420c5b30c7bb.webp'
      } 
      else if (pubkey === '3d025e0194a572d13309c4a3d8fa04ffe204f607a5d64b82ee9e38bed5d29925') {
        image = 'https://storage.googleapis.com/oekakiskey/drive/webpublic-d4ed5991-544a-4734-b98c-ef6285d25f07.png'
      } 
      else if (pubkey === 'cd70588e162f568994eae7fbcf79de3271bc067d48b328941b4abe0007311402') {
        image = 'https://nostr.build/i/nostr.build_c02cff2344abe6a0279f4a7edf6c92112a9373887258dd3c1ed6cc0a1b9b4abc.jpg'
      } 
      else if (pubkey === '809d679f28536555804989264310cfe044a7e2208ad794e0ee5ffb62ace0cd45') {
        image = 'https://image.nostr.build/d9a37a39aa540208b95b9a800bedeb5d0b4794dd5032b4126da4fcf695ce8aaa.jpg'
      } 
      else if (pubkey === '58d3d7e0a7940dfc38d9671e399d13e6b823f3b424dbac2b715ca9a435acf733') {
        image = 'https://file.misskey.design/post/webpublic-d7b6a7b7-007b-4da8-9a32-4a036d8d3b73.png'
      } 
      else if (pubkey === '8244e7b3f91550611e3798d021330e5292348ee36b2841935eb1419cbddec8dd') {
        image = 'https://image.nostr.build/985351d838ee041a086ac06c403dbded65c5a6e19410d2ccb3126955a6e07b1d.jpg'
      } 
      else if (pubkey === '75d1103b38fdc24ff70cce6ba8617a1c976d58d361a3b32577c0db16c942c67a') {
        image = 'https://media.misskeyusercontent.com/io/ba03bcbc-2a7c-4b95-9607-3d64be51ac69.png'
      } 
      else if (pubkey === 'a64dca76d60cef3b65ff7072655c271dac6dad55c71e6724575a52021c772af1') {
        image = 'https://i.imgur.com/JUn4wxX.jpg'
      } 
      else if (pubkey === '5d7cab86675940c3f98906fb8e20c5076dddec08e3e6fa5458260709c9852421') {
        image = 'https://img.pawoo.net/accounts/avatars/000/137/006/original/da5db2dd9f1ce644.png'
      } 
      else if (pubkey === 'ca509133f53efb59fea65877dddabdaa01716836874e55689ad36aa3f3128f2e') {
        image = 'https://files.mastodon.social/accounts/avatars/108/192/867/039/682/392/original/0435fcbf14bf44c1.jpg'
      } 
      else if (pubkey === 'fc6dec96280c63e92f02f69767e08ceb66f5760f09cd729307620214956b5b9a') {
        image = 'https://piclike.net/wp-content/uploads/2022/06/buta.png'
      } 
      else if (pubkey === '81933c52322ad56e04ac911e6a4f672d41f12e21d297c2961d382e7e49414f9a') {
        image = 'https://s3-media.hostdon.ne.jp/m157/accounts/avatars/109/345/634/488/863/914/original/07db9ab54a7ebd51.png'
      } 
      else if (pubkey === 'f57e5eead054ad4c7f4d77bb7f00f31f3048e9beae2c5f1e1e3a1bf0ba3f55bd') {
        image = 'https://image.nostr.build/3ed044fbab79f47f254288fccb267ea58567ba55b9f612b2bed3ea471167e502.jpg'
      } 
      else if (pubkey === 'b5dfec765e1537f5b597fd112f67f9284f476e9dd6d8431a41d088093ae15360') {
        image = 'https://image.nostr.build/92103bf68df35a2a8d10ffff3719b8d868009687b7034d9d3095d1f5ac669150.jpg'
      } 
      else if (pubkey === '73603c219bb6cec5c05ceb87967a6721f552fda9c3e2ce6835fae3a0bc5b529e') {
        image = 'https://s3-ap-northeast-1.amazonaws.com/qnmd-media/accounts/avatars/000/000/001/original/8bd78531f6783326.jpg'
      } 
      else if (pubkey === 'bb99f4a32833d99963c86a2cfeb07726124f99652065637155cec28362339149') {
        image = 'https://image.nostr.build/598bfced7c82094563971725696b833f3863de37b48b6345a58aac4f73855afe.jpg'
      } 
      else if (pubkey === '35987703de8d40e12257d25ff599b5db780436e65e6babd88cb1b70b33767275') {
        image = 'https://file.misskey.design/post/5555accb-ccc7-4c02-91ea-527c57c23fcd.jpg'
      } 
      else if (pubkey === '527337d5d58ad3ba966bb0ed46cd9a83ccaf1f03525631da06042e7e93e9525e') {
        image = 'https://void.cat/d/FLyYQSvPMc1fSMXsj6Ccp6.webp'
      } 
      else if (pubkey === '3a1737927e888d9654996a45bc78d145ead38c252d03d60e9732d75c5fe45f68') {
        image = 'https://storage.googleapis.com/oekakiskey/drive/webpublic-beb418ec-953a-4e71-bf2f-cb893618155a.png'
      } 
      else if (pubkey === 'bc3fd13a18c925c593199e40f454ec48af55dc9dafc95a8ffe009be2e5051980') {
        image = 'https://sss.misskey.gg/sss/gg/7ee24d23-950f-4f01-b70b-72ef992a59ff.webp'
      } 
      else if (pubkey === 'db8bb06a2031261ee54199e932ac874d17d5ac2616fec78aa4f978ceaeae5a6c') {
        image = 'https://pbs.twimg.com/profile_images/1566083450477883392/ozfrpHEt_400x400.jpg'
      } 
      else if (pubkey === 'c2a3a79c5b3eed5b8947adeb7830a613b2aeb0633f79a2cc1865197bf8ff27b5') {
        image = 'https://media.misskeyusercontent.com/io/webpublic-12f65764-2467-470a-bc22-c1d48666c25f.png'
      } 
      else if (pubkey === 'c98b6b4267dc313218645c12c0d82532ddb6b45757ecf4e09b648c013e3dd1e6') {
        image = 'https://minio.zuiho.moe/accounts/avatars/000/000/836/original/1f556ddd442ed9bc.jpeg'
      } 
      else if (pubkey === 'ddaa2ad83e43af702efde56dd81a05af069f9728d089ad9fabecc0b6d0cfb473') {
        image = 'https://s3.fedibird.com/accounts/avatars/110/598/931/989/389/042/original/30c3052a1950e5a6.jpeg'
      } 
      else if (pubkey === '8436b5a31447ee71bc81cae3450dab8c630855128a34dc0e8499b0f1b01db187') {
        image = 'https://cdn.zebedee.io/uploads/c8dd5b17-a727-47c9-b4f3-9c84a807d212_0ee432b6-9de9-4c54-8849-06754500b67f.jpeg'
      } 
      else if (pubkey === '2ad0fc169c6910ba1064a435bc5526d5b34b400cda7cde5c637d9ef04f36cdc0') {
        image = 'https://cdn.nostr.build/i/3dae2fad99b04128a2a2c5c2bfaf3e11f5d3c0e9c5cd6ea043c661f676a12260.jpg'
      } 
      else if (pubkey === '081b66c7f7849592216379df979674d4f43dbe9e3836ae37e50b120e2d0fb6bd') {
        image = 'https://robohash.org/npub1pqdkd3lhsj2eygtr080e09n56n6rm0578qm2udl9pvfqutg0k67s74wnrw?size=300x300'
      } 
      else if (pubkey === '55420ffdbfc84821412905b8ff7de90552ecb76e21d3604fa24edce8afce171d') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/733/162/411/553/243/original/dab0a884dd108b37.png'
      } 
      else if (pubkey === '5d1eef7dca1d0fbec3980b155dd86ae4c440da6c966494291f06943106d0c219') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/370/624/254/480/154/original/4d90c3fce734e4ca.jpg'
      } 
      else if (pubkey === 'd6e3d54434a68ac33b8dc0e9fcab234f89bc4d93a2efc551eafd99bf0376e0f4') {
        image = 'https://cdn.nostr.build/i/d417a32080834de3587f344696d09b77172b8558bcb7ad0d0ce97c425849de86.jpg'
      } 
      else if (pubkey === 'c9eafd6f3847002cb9326c16e9ccf626fbfcdeb54c0a343bdabea62bc22fdd99') {
        image = 'https://cdn.nostr.build/i/642aaaab3dd43d6379ef2d5c72a1e37674c9cd80daf8916077238c478d72747d.jpg'
      } 
      else if (pubkey === 'a353408d8a13b1d451ab9f0b9df8be6d4e817e723de517a64c61bb9081020ec8') {
        image = 'https://cdn.nostr.build/i/14717d348affe2c1870ab012ecfefa6a5c481f72e85927068d1e8274c265b842.jpg'
      } 
      else if (pubkey === 'cb7d6867f107c2883d260c40e709fe04bcf260ae4477517f882cb16ca1869696') {
        image = 'https://files.ostatus.taiyolab.com/accounts/avatars/109/292/246/093/315/248/original/81a22abe74032009.jpg'
      } 
      else if (pubkey === '6990a6ef0a29f0d62a03ec3c8415b3405fead3beac1bff9175b7ced9467c36df') {
        image = 'https://media.maniakey.com/media/f926c9fc-8f76-44ea-9327-6275f5d0d50e.png'
      } 
      else if (pubkey === '4ae14d0b92572d8550ee81fd84c235784caef6ff828e639883c3e319415cb6ad') {
        image = 'https://cdn.zebedee.io/uploads/2dd3f2ca-2651-463b-844a-b4243ed8f179_7a0908fe-38fd-4fea-b863-582e1c48fb53.jpeg'
      } 
      else if (pubkey === 'e86c527cba74123f72bc589508c11b3668cda85a7167d05618c7f25e5ed87939') {
        image = 'https://cdn.nostr.build/i/c8bbad2a9175dc0687831fc57670357e0e4ccd8c629e53e9adc92e47931c7d79.jpg'
      } 
      else if (pubkey === '94cc1dcede887fee8c75c570816e1076a249ccd8fd739db5a6c8ae3375582612') {
        image = 'https://photodn.net/system/accounts/avatars/000/007/722/original/4baf5bc356d7724d.jpg'
      } 
      else if (pubkey === '1f435571c0b526ba377d07d9629c40488662e1d1d4a4185b4ef1b6898b283fff') {
        image = 'https://cdn.zebedee.io/uploads/680a597e-9554-4215-a951-38bd5db03552_7291531C-0B97-4245-98DC-BD1000B97B9D.jpg'
      } 
      else if (pubkey === 'dedd5b3ebcbe02b6dad7950e8c9babd44109fdbf4420be408f82701279321be1') {
        image = 'https://file.misskey.design/post/2e6c76e7-f46b-4b90-9d7e-b428fbd75450.png'
      } 
      else if (pubkey === '55b06b2dfcf8ab1584181c58deae91f20c807e858ae8048d931b9b7705d7e0fa') {
        image = 'https://media.minazukey.uk/data/webpublic-231993e8-6080-49cf-8535-b13cd5dc9ff2.webp'
      } 
      else if (pubkey === 'e372c3a3ad123decf07f8742f7a4147f5db9ced5c81546090e69618c53e1c0fe') {
        image = 'https://media.misskeyusercontent.com/io/fd8a038c-25c2-46f2-8514-d5c7494a665e.png'
      } 
      else if (pubkey === '1839a10b6d534c253713ec8c248baeb1b42aa92a981a741fcd7979bec0a392e9') {
        image = 'https://files.mastodon-japan.net/accounts/avatars/110/650/100/443/507/244/original/82bcaaddc52d8dbb.png'
      } 
      else if (pubkey === '42912eaa1609506a6347de157bcf767732114908a8ffae4c79fd36dcd4c5f997') {
        image = 'https://s3.arkjp.net/misskey/31527780-325d-4299-8495-860c278ca4e6.png'
      } 
      else if (pubkey === 'a16cd2ce710c7790dd1e84ec0ad1aa830fd2e163118c1081f2c0fec9eee98bde') {
        image = 'https://file.misskey.design/post/4a9da4d3-5340-4955-af62-38dbff5083a0.png'
      } 
      else if (pubkey === '18f7ee1c2b60f78e6bdeeb80012d5e1c9618b3e1d8103cc7cec696df7909f2e5') {
        image = 'https://nostr.build/i/5fab606131108ac99fa86e26775f07adeb5992e02730503f7b2258b1ad994e19.jpg'
      } 
      else if (pubkey === '0ac9931e241fd1c1f6d04f45a7b8589158aec511f90cab9dfc6dcd358ec001eb') {
        image = 'https://submarin.online/files/webpublic-6cad35b7-b148-4e66-b650-198fd6ea249f'
      } 
      else if (pubkey === '59a8c963ebbd5a81511dad27869a9547354fcac337a6af0f5f81fb8748f14b9a') {
        image = 'https://file.misskey.design/post/5f06ea5c-3a6f-428e-b50a-e20c77b1529d.png'
      } 
      else if (pubkey === '9935d3ad4d33a2fdeb8fd3b725296734fb5578506cdb546d1b1ec952db14c1b0') {
        image = 'https://s3.arkjp.net/misskey/b0d55bc2-c9ae-403c-9aa5-7a3c9c162388.png'
      } 
      else if (pubkey === '6efe5b2d24041c9ebb5f31f44e99f7ef22910fe4077f3459a7b7a543b84287e7') {
        image = 'https://s3.fedibird.com/accounts/avatars/000/153/850/original/43c598b7dc7bff56.png'
      } 
      else if (pubkey === 'c1cab2874eb4ea804d6ae69a2444550299e5c5fbbd151dfd1683e0921b078aa2') {
        image = 'https://cdn.nostr.build/i/05b2709b5cca5b103a36d8a9ee318e73fad8e1ed3a1081425147446bb3ec1565.png'
      } 
      else if (pubkey === '19a379d15fd329be24019ec845d60b771e4a6bd8bc5ca49bebdca99ead9a4ef3') {
        image = 'https://cdn.nostr.build/i/d5f0f5273cf117e3797c6c58ef45d88383d1703a4d52e6cca1dcf656e5777900.jpg'
      } 
      else if (pubkey === 'f4389066e6edc80877748844382242cc140519df2f9decb34159fabfc27569b7') {
        image = 'https://cdn.nostr.build/i/0bdcd229ad216a974779fe6afe80839d2f1f67c98b1b9c875a3d2c65c5468852.jpg'
      } 
      else if (pubkey === 'da92ec0dcd2afb18650c6cbb1f90e680ef7ba1c57e108e7b00fb6b2449243866') {
        image = 'https://cdn.nostr.build/i/9f2f15689dfe6dc4e02001868e94c3ce0574fcdc7e1a72ad74554e69c218a383.jpg'
      } 
      else if (pubkey === 'dabdbf04ddd834446e8da4cd13b97042623d550d4ece077fe1f83800b7215f5f') {
        image = 'https://cdn.nostr.build/i/c32519adf6bbcd5732df863d23752de3bfc912e54b75bd204dec58230efe7a8b.jpg'
      } 
      else if (pubkey === 'fdb789242b61d3a5eebb6e42862dbed482cb12ca9e332d5fc308fa5e996c4cd2') {
        image = 'https://satoshi.news/favicon.png'
      } 
      else if (pubkey === '6be180c5e760deadf81bc46356d4fc33cd1e9b925276053c020a4b4a23af33a4') {
        image = 'https://cdn.nostr.build/i/649192dcd39d54f4d55f73b0362f7a0b6ff374c7074d57fc265e297ec75f2806.jpg'
      } 
      else if (pubkey === '7c09b0e2b5975953442ab9783809a7b3a7da98a184538f54e9dc36ead83fc220') {
        image = 'https://yakihonne.s3.ap-east-1.amazonaws.com/7c09b0e2b5975953442ab9783809a7b3a7da98a184538f54e9dc36ead83fc220/files/1693274777150-YAKIHONNES3.png'
      } 
      else if (pubkey === '6b1cad754ae53dcd8a349b7985971f4588b0fda1d5ee4f67bb906b116b02d3d4') {
        image = 'https://yakihonne.s3.ap-east-1.amazonaws.com/6b1cad754ae53dcd8a349b7985971f4588b0fda1d5ee4f67bb906b116b02d3d4/files/1693274447505-YAKIHONNES3.png'
      } 
      else if (pubkey === 'e7f57bdb9d05622309b48ed01d73dbec1deab688dc35f8d71f3b81d07d63394f') {
        image = 'https://cdn.nostr.build/i/8d286436fe1ad25bac7209712216eafdd8184bd5caa14b909728c1fa16fce8ad.jpg'
      } 
      else if (pubkey === '02467b27c88aed37f9369280a220c26736efe59add332f3023722004ef577d8a') {
        image = 'https://i.imgur.com/1npa8Ku.png'
      } 
      else if (pubkey === 'f72db03978e54753ed827503105d5f84088b41fd0f0a0fc3aa85d6187ffceeb7') {
        image = 'https://nostr.build/i/d2a961940ffd41b3ae0dd95cbee8f76f2d6f429e48e7d1aa2ae13116b18d7bb0.jpg'
      } 
      else if (pubkey === '4a82bd5f227e9c61f189862486cdcf1837775f1cb6d4dc50a4a9ff145b6173ce') {
        image = 'https://void.cat/d/GtE4nWsk3fTLp7T59FtgtS.webp'
      } 
      else if (pubkey === '7a7aa33827438c019c031aebf2c258bbc3db094b26b28385d1b58a0e22f0f314') {
        image = 'https://cdn.zebedee.io/uploads/245851df-52c5-4239-915b-d8edf55efdc3_ead3112b-785e-4122-baaa-b3f8f2a2cb3b.jpeg'
      } 
      else if (pubkey === '7daa45d7107e4e5e9eccf3bd536e29808b55e8c0cbfbe7a4f100668f6dfd954f') {
        image = 'https://cdn.nostr.build/i/95e55d13cb558d4a6fc553e7c0042ac8bc806ace36cc10d8d3cb970f78c499de.jpg'
      } 
      else if (pubkey === '4ff3fa6ed4a4c225e75d0a98c03474ad49ce88aad018bfe2890ad2411227a66c') {
        image = 'https://file.misskey.design/post/webpublic-a1f2f853-e771-4564-b874-9cc7aff42b93.png'
      } 
      else if (pubkey === 'f6b87828a3e32ad827d9ea6b43c27284c2e3fe9e154f7ceb4d24b5bff09f89eb') {
        image = 'https://s3.arkjp.net/misskey/05524843-822e-4453-a213-32ce7d3fc807.png'
      } 
      else if (pubkey === 'd70443903e58607ba5868071f1c0c779b13edf1bfdc8b85681ccc963cad6f522') {
        image = 'https://s3.arkjp.net/misskey/af92c0eb-c400-4efe-8cf3-ebd0351386a3.png'
      } 
      else if (pubkey === 'aabb25563f52e698287b540e81d961ae2a575314ed6dacdcd5d51cffc7ba47c6') {
        image = 'https://media.sushi.ski/files/webpublic-58bb0d7c-e433-4b87-85b9-b252aff13dcd.png'
      } 
      else if (pubkey === '23b29ef1354991438b4c5011b9a8a1fe5e28a293e1c8b976ccc858216adfa5ed') {
        image = 'https://s3.bskstorage.com/sakura/backspacekey/56dad931-e65f-493b-8ec9-6265caefb82f.webp'
      } 
      else if (pubkey === 'ebad21b502fc6b555bd94a1b4c278c4286cc9c3a183ef4154650db5a0539350c') {
        image = 'https://i.nya.coffee/accounts/avatars/106/804/691/471/152/602/original/a78e83daf435573e.jpg'
      } 
      else if (pubkey === '79071fa7c5ab57cda01cbb270412e8335a954b88005c6bb55c3586c668d1a9d7') {
        image = 'https://file.misskey.design/post/4f5f2cfa-be1c-40ba-bd06-7073dc5fabf6.png'
      } 
      else if (pubkey === 'bfa68b60559b3a11daed0cfaaccd1aa4eb2ac43c8b59a8e2f6f14ba44d97b0c9') {
        image = 'https://storage.googleapis.com/sh1cdn/icon.png'
      } 
      else if (pubkey === 'b9125f519d31a9096fcbbe24f03d227141ed8b830d0ab6ac221aecc5c31484a0') {
        image = 'https://cdn.nostr.build/i/4691a63fc46e4b4217413e52006bc1d95687eb6d4a4cfa8f0ab38ff88b5b6b40.webp'
      } 
      else if (pubkey === '14dd8d94e4f37072d34a9a544c9480323593f24b20bca6fd1496699607cfcc13') {
        image = 'https://img.pawoo.net/accounts/avatars/000/055/501/original/c23b861e23cd78d2.png'
      } 
      else if (pubkey === '0cc3d3e7e6f115c4af27a274f541afaefcbfdcb9fe4730b682825a5ac889d431') {
        image = 'https://files.mastodon-japan.net/accounts/avatars/110/218/642/847/271/364/original/6475ee32d13b23a7.jpg'
      } 
      else if (pubkey === '0da086f31ba266ecd45b95ab79261ae22cd61adb58ee857ae44a066ca37127bc') {
        image = 'https://cdn.nostr.build/i/25e98902bdf060d981414a63295e3c93caaf61b5b5eef32d5a606c95246c6d6d.jpg'
      } 
      else if (pubkey === '697ed956ec6ea1f433edb3d3736b5bc40f6adb8ad38a5d8d452bd9c95832560a') {
        image = 'https://nostr.build/i/25185d3d47860dbc5f41ae5ecfb7a25e642608314a5564d5830bf34d1db90258.jpg'
      } 
      else if (pubkey === '7f3029851e1aa33461a87b34c9d3a7b0ba82d1cd287cc61543f763e018984ece') {
        image = 'https://file.misskey.design/post/webpublic-1fffe734-a38a-4bae-acbd-1d5ff6d67556.webp'
      } 
      else if (pubkey === 'e95698da15ad2d813ef12f91f789b59e6b39fd3c12c8f9fc1f98833eeac62650') {
        image = 'https://social-cdn.vivaldi.net/system/accounts/avatars/110/186/329/813/065/410/original/4b7dd6b78b8333bc.png'
      } 
      else if (pubkey === 'd8d55626752262fb4a17590347139b2c2d29bca7aa440d07f9c14302f15994da') {
        image = 'https://cdn.nostr.build/i/31222f6fbdf9eff52758a95cc229a920a9d7091fae336c49857a4c69b08c6b36.jpg'
      } 
      else if (pubkey === 'abf985b08dc8549db1faa7fe146cd8c20703097e01d4be7a543410b6fce6dfdb') {
        image = 'https://cdn.nostr.build/i/f4f2b3693468e68f6fc2178381615d70794d0a5ec7aaea616f1f497eebf71c9b.jpg'
      } 
      else if (pubkey === '9ca57f24676947b7d717b10663e48dd741bca23f40e71d00e629b80dc9d37e2f') {
        image = 'https://void.cat/d/9Q2JRVnMD9ff9Vew7QCQkE.webp'
      } 
      else if (pubkey === '2020b7f55006cdb4f972b3943e7043d45d576fa735c0c83c246950858622ef29') {
        image = 'https://cdn.nostr.build/i/4853c46ed6db6480a55c7a98f03818258530c98827fb0da00c6132e89c7cc1c7.jpg'
      } 
      else if (pubkey === '4039df038890f83d936f8bc0c998809fcebcc0a3a7a6b091e32f3e8db5b9b1c7') {
        image = 'https://cdn.nostr.build/i/248946ed7d12ea2be114101ad5ef1273abf11b98f11e176d816afa7b9f6b12af.jpg'
      } 
      else if (pubkey === '805d2a171d3579236d92bec1724c78eae1551753eac6a818c413496323fc0918') {
        image = 'https://us-southeast-1.linodeobjects.com/dufflepud/uploads/52977737-acd1-4ec3-b241-8685baeb64dc.jpg'
      } 
      else if (pubkey === '9e6db7b6481ca3c4ba82ab6a48871e2fbd95ac658b4f7dd7fae19ae9336d8293') {
        image = 'https://cdn.nostr.build/i/ebc3920463c93bea7ef4570484c9b7dcc0de49e13e50218291fbc18b5777ffaa.jpg'
      } 
      else if (pubkey === 'baf11a37812dbdc2049d925ce50083d16de3f1a464191593509e311b49dfdf33') {
        image = 'https://cdn.nostr.build/i/919ed020f752808c4feae99c333acdb0bb280f55993d9e2bbab8fc118ab1b464.jpg'
      } 
      else if (pubkey === 'b55f50e0fe05ca2cf1f54c5bd637d851a6cf113357fa95d226769fde40ab294b') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/920/193/069/486/469/original/dbf5d82dfe8107ad.png'
      } 
      else if (pubkey === 'f80f6204403cbba65e3e24973236f80b2310cec4f16160f0b8b48d6641cd7f4c') {
        image = 'https://cdn.nostr.build/i/b82b4937b91ba547ce21b38c87e4b561001d7f0a62248c1f8b0ec420886d8072.jpg'
      } 
      else if (pubkey === '50b5ba07998cb67506139e0f4234a620f9b1f6e890ed75d7a9932653104f1930') {
        image = 'https://s3.metaskey.net/files/40555607-4830-40d4-93e2-e4ea909020d4.png'
      } 
      else if (pubkey === '58289164a81d5d817b8d3580722e4c5401f03ba74936501ee79951ef1189a93b') {
        image = 'https://cdn.nostr.build/i/9d66546d67a6a80ad61e23188c633f230334dee62967f95521ec984ebb4ce3eb.jpg'
      } 
      else if (pubkey === '44b00385d5a507a8e181c893660066c6e666af0f0e4c860f26aa1fade10cb435') {
        image = 'https://nostr.build/i/6ebee426a9b2cdc73f3f4fbc1638a82708bd78fc82fa30f418df8ef5c443e050.jpg'
      } 
      else if (pubkey === '2b0e1b5a4162a4482e8dc912cef6edf4c45a9afceab09213b7b8a7841d09a8e4') {
        image = 'https://pbs.twimg.com/profile_images/1107234399634898944/MQLkqXhw_400x400.png'
      } 
      else if (pubkey === '7c31ecec3ee2dc9e080bb658afdc1839ed619d099debbe17b549c1c6f87c175c') {
        image = 'https://social.mikutter.hachune.net/system/accounts/avatars/000/013/511/original/fe293a6aacab597f.jpg'
      } 
      else if (pubkey === '6e6ae466bcb5685f18cc1289b1a063beaa17de4204a537e7510966fcdf59233f') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/816/889/original/8c55dd84b9595a81.jpg'
      } 
      else if (pubkey === '13e033a79ed39e58a37c3795ddd3b8d93eada2c0a303790e4e366e26b343fb96') {
        image = 'https://i.gyazo.com/2720e65d811434d5681bfa2bcbb4b8e1.jpg'
      } 
      else if (pubkey === 'c67698b1236a63e2e4b59c88e32347689586b1a48fa3bd593a4087420c7601cc') {
        image = 'https://media.mstdn.jp/accounts/avatars/109/795/200/663/945/361/original/7b55f63014377bb5.gif'
      } 
      else if (pubkey === '9bd48699d2666fc113fdb219017deb85ec4262bcb985753cbe1c4060b8ea478c') {
        image = 'https://s3.arkjp.net/misskey/2a9fbe09-a1d9-4617-af56-9e27e857e401.png'
      } 
      else if (pubkey === '5b407259615b5ed78fbcadc1db5dd26d5b6033f68af89a04ca31a477364f5519') {
        image = 'https://media.songbird.cloud/accounts/avatars/110/479/872/468/812/381/original/5364c5ad9930939d.jpg'
      } 
      else if (pubkey === '47093feec6b196b95b2261cc7ee9ca66dfa98322046bd96d0c3657bbc4aa9c6b') {
        image = 'https://media.nijimiss.app/null/webpublic-6a784579-5ceb-4ef5-81e8-5ed56fe3c902.webp'
      } 
      else if (pubkey === '089ba22e47bc9417b75b6d93f4a97ecf43838617f39691ce3605311c79bcf396') {
        image = 'https://media.misskeyusercontent.com/io/3a6f48c0-61a9-4761-b5c4-dad3ae411d8d.png'
      } 
      else if (pubkey === 'f328b3a2ef3446c2b9afaf0551b763469f43666b708925406471e7305e176124') {
        image = 'https://img.pawoo.net/accounts/avatars/001/309/373/original/14c08a0e1fe5a716.jpg'
      } 
      else if (pubkey === '38e470752e13f637f9f60ad2e920e3ddfa166e53d9aa584d22a884ca94e57168') {
        image = 'https://sss.misskey.gg/sss/gg/19dcc65f-6a5d-40b5-beee-343956d186c5.webp'
      } 
      else if (pubkey === 'ee49752d166566b16ac4ca42ae82ab8fc12cdafd40ce7eacb29b766acfb6f794') {
        image = 'https://media.misskeyusercontent.com/io/a840c4f8-aee6-49af-a205-ea08a485f83b.jpg'
      } 
      else if (pubkey === 'fa98ec33098cf4df45af63a12b086d949ff021a36da17c60da7bae9ca36471ef') {
        image = 'https://i.nostrimg.com/a38c05a20829f1af99b21645a7ba4c1dc1892d6b6a0b58030d8939d6e11ab079/file.jpg'
      } 
      else if (pubkey === '44a550b499576d4a38385b6621c1b653c6a8391e4295abc7e98deeba0cc3d345') {
        image = 'https://rss-mstdn.studiofreesia.com/file/accounts/avatars/110/868/874/073/303/216/original/300ff2f665b4e805.png'
      } 
      else if (pubkey === 'ce4446d03e99590cc48ca58ecbbf476f161927cd28b96d7459466f420581579e') {
        image = 'https://carloshmbtn.github.io/images/avatar.png'
      } 
      else if (pubkey === 'a309992f115e424db1cae9584ec152f55023a9bed6f59435366830e2cb04515a') {
        image = 'https://cdn.nostr.build/i/2948fd8555937d6c31ff4ff6975ee3db71cdb48c339624ece6cbccaeff179e39.jpg'
      } 
      else if (pubkey === '2b7d73db9921fbac8874db63fbee6891e34c93c9c77f7660fb9866d582687503') {
        image = 'https://nostr.build/i/nostr.build_332e0c860aea9514fd04b47a447490c614ebdc48e3e7509f8777454418e3291c.jpeg'
      } 
      else if (pubkey === '486172f9815bfefe48dad8aeb3334bd31f4b3e58f391700d51c7c0339e3128be') {
        image = 'https://media.shrimpia.network/mk-shrimpia/files/c3d7b85a-7aad-42fb-9f7e-119a95834b9e.png'
      } 
      else if (pubkey === 'd0a1c8495ef9ceedb164ff3043a338e735a2fa1e942fe1c75dee030780d9a68c') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/001/861/original/afcba4b771d32d7e.jpg'
      } 
      else if (pubkey === '66225e75c6030d2f770faf5f53895f41bebe96929e5e2fc28813275b6acb5e19') {
        image = 'https://image.nostr.build/4883261ecb4c8847c418b15be39f2bfce51e124fedc325f04c25f3821215a396.jpg'
      } 
      else if (pubkey === '31bea2615ae59c7227da4cae242571fd752d5c61a683a95e307d7bae623d3a45') {
        image = 'https://image.nostr.build/0f85cb3f35ede75e8a58ca681bb5d45a8e653587c8ccd96134fc4f8f1dc6f2e8.jpg'
      } 
      else if (pubkey === '0e39506491ab68b88c057c9ce7d65f0934661a1c57f57f168884a7b06840e6c4') {
        image = 'https://image.nostr.build/4036868f8fb0c86c8c6994daf8bc67c95ee640a187448f0011ab8b0520224c69.jpg'
      } 
      else if (pubkey === 'bc207c46098b36db035453781fa7872a77708605dc5f3ae0f9f293bba3ee75f2') {
        image = 'https://nostr.build/i/nostr.build_20ccb417f89c757737929654508ff0e20d0e51f5dc01ba58c1d72f79e83a574b.jpg'
      } 
      else if (pubkey === '878eef83027374a9bab3c1a1505af02dd6426c4c3f330b06f0aadc3126d04bbc') {
        image = 'https://image.nostr.build/3c0ee995380f7781c6dc4086f15213dae833adf91b46428784e6515b0bbff854.jpg'
      } 
      else if (pubkey === '8865750008bec8b0ba02ad75c58677dd9c6dbfb59ec7191382fa8e5160c5c9cb') {
        image = 'https://cdn.nostr.build/i/3b859f57a70b3c6e2f187f5db3c34fe86176dedec6588edc14f8a0cafbfcb841.jpg'
      } 
      else if (pubkey === 'cca4729bd4a9247d9e8a4b350352e0513e87645031b62b2c1a17b892d8ff0513') {
        image = 'https://kids-image.0px.io/kids-image.0px.io/file/b22ede1d-8356-4e44-9132-e389b230ab39.png'
      } 
      else if (pubkey === '6c33c32469c0b843dac9798b2fd21214520d34f3fee3bf934b94b661644bd694') {
        image = 'https://image.nostr.build/012f7b424e3819e95857836aa6da9024fd5f8b22031754318656fb7db984d51a.jpg'
      } 
      else if (pubkey === 'ce41ccc467d2b3d735538036f251ad1d8885c4cd62b55620c007e50d1cadb39d') {
        image = 'https://s3.isk01.sakurastorage.jp/backspacekey/misskey/a7079322-8c9d-449d-a7ac-2882f443c760.png'
      } 
      else if (pubkey === '9ff8d05acefd61f720e7caa75323a4ea356e293ae18b04bc684f42af801d829f') {
        image = 'https://cdn.nostr.build/i/788b8baa371cde951d178e1f7ee393f8082911003927847d785cd36effa5c705.jpg'
      } 
      else if (pubkey === '95826345a5279672487b1c975c06fdc7a216075c03b816f7d2a007b0c0311dfd') {
        image = 'https://image.nostr.build/ed3f11ed0ab97fc99d030a570794072b68d3b556b4a94a27531f7a17debce834.jpg'
      } 
      else if (pubkey === 'b17bfc98f2b71eaf90f82773377e34defe31b0e4197cc8d4762181bc1edc7658') {
        image = 'https://image.nostr.build/346caa5b0d06ff979aad4fbc9773d2ea1a677e0be073c63939490faaafe8cb3d.jpg'
      } 
      else if (pubkey === '5b9321f039b6d4bfa4afbfeba816c7fe486c0322894f52fe026e9ded1fc36a4f') {
        image = 'https://cdn.nostr.build/i/38514ff061624f661a54875cd18221859493e6caf2cfcfdcda35e029a00af9d3.jpg'
      } 
      else if (pubkey === 'eca04a9112a35e21877b4f8b43c3340f14084417ac995e9ddef6659209405454') {
        image = 'https://media.handon.club/accounts/avatars/000/000/001/original/5a9499233e906258.jpg'
      } 
      else if (pubkey === '77911886971fe579fe3e4f90d9dc7e91fcd74850dc2853681fff17654b218091') {
        image = 'https://robohash.org/77911886971fe579fe3e4f90d9dc7e91fcd74850dc2853681fff17654b218091?size=300x300'
      } 
      else if (pubkey === 'e1f33a026697601b24a8bc6011f8cd83b817a0e82fd12b41c6993ed045687054') {
        image = 'https://i.seadn.io/gae/BAeuvdSNwbg4yDudn6DyLGUstbgqcfcdX3NEi9-eawuICzKckMlJemoeJgNOo6Bi0n8e-8CrZP60NRKojedBOJ_Lp2RafulCe7xQ?w=500&auto=format'
      } 
      else if (pubkey === '195db35cf21bb242b61c60d9d076cf5cbdffdfa2bd844ef69c18fbb4bf41cc20') {
        image = 'https://media.nijimiss.app/null/webpublic-d01b3129-030d-48e9-ad95-ccb02ff9e8fe.png'
      } 
      else if (pubkey === 'e94c30ac74a226a28099a47b81cf301c5e8bf79982ec1540bc7ccd2209482b87') {
        image = 'https://media.misskeyusercontent.com/io/1ec98702-84a0-4355-a5d3-029cdc577b91.webp'
      } 
      else if (pubkey === 'fcdb20efe3af6682d0e0a2a35c7b493e470e14987fbb0f69e5b386a8307fb419') {
        image = 'https://media.misskeyusercontent.com/io/31d1ee00-40bb-43a1-ac91-2ee84206a8e8.webp'
      } 
      else if (pubkey === 'd0efbbec2e54774a8094e17cb7ad454d887ab833a731861a8ee6c157e058a757') {
        image = 'https://media.misskeyusercontent.com/io/webpublic-4f776ab2-e620-4042-b5db-26f2f6a9eff5.webp'
      } 
      else if (pubkey === 'c0faee02a7753452628bc967abb6ec3712ec9a294928a22f6708240ee2c4363f') {
        image = 'https://pbs.twimg.com/profile_images/1437646027662626819/6t6bfgXi.jpg'
      } 
      else if (pubkey === 'd3bdc7aa55f360bbac9360edf335fb07bc06ce5704b1c8113fa3a117c86701e1') {
        image = 'https://void.cat/d/LQbQKXRcXZNf6K2pRFYyb1.webp'
      } 
      else if (pubkey === '8bbd407875cacbe4129854dfa10c60313ca31fedd6fc8399864515de94582d53') {
        image = 'https://image.nostr.build/9817fb9160b2707b407387350530406dc55d39c5269e9752f68c05ad1c108d80.jpg'
      } 
      else if (pubkey === '9fef8aee4b6ebe4440c5cb9dc04c0b7f89b608bd0160daadcb5fe4622a390cd0') {
        image = 'https://conoha.cuconoki.net/cucotto.jpg'
      } 
      else if (pubkey === '902d5ef4cc759af28764127f7a8eca9ebfc3c2df517a0046284a92879bcd4989') {
        image = 'https://cdn.nostr.build/i/ab91c02b5ce82f0fe9839dce920848f5616c891da784adb0bd311ec159500070.jpg'
      } 
      else if (pubkey === 'b72fb8a3d67456a435ce55a4c5069100b445d761a6477f810d1502e03356403c') {
        image = 'https://pbs.twimg.com/profile_images/1475092829798277121/c63BCHIE_normal.jpg'
      } 
      else if (pubkey === 'ece52f8cc7eea940a136f4d96134f23d6f1169a6985320e6d6a98f44d2e08e2f') {
        image = 'https://nostr.build/i/30f45876f4dfcde91899980666c5e2e83ed63c132f39de1134886298228eb1f5.jpg'
      } 
      else if (pubkey === '39f85d995a8b3534b037295c09a637941294ad921ea9f03d7ac2d5186bc4b666') {
        image = 'https://cdn.nostr.build/i/24441682460a126a120ae8e6c09799905551144f026ef3f71e88fce37b776c63.jpg'
      } 
      else if (pubkey === '5e1c3b6ff87c16300694cb12d9bacc7698045e212b5b564d438715505299f8bc') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_4875040461492972211692123526.webp'
      } 
      else if (pubkey === 'd91f33300ebd00bd983ded3afd628b2fbda2d90bf16410b3dc0f5550d7800598') {
        image = 'https://cdn.nostr.build/i/10d07b8c8d13ba97c5b7be02c837636fe13b67d50a7b2054d5ad3c0d9d951251.jpg'
      } 
      else if (pubkey === '5949a32b92a0ebf0611a1d7dac35eb3027bc96d32b06618c15bc914e1692ef75') {
        image = 'https://pbs.twimg.com/profile_images/618607921501310977/m7E8wzNV_400x400.png'
      } 
      else if (pubkey === 'b7f319a227077ad69b8c3d9a5d8cf0d33489bea45ff8066183339a47302f4ef0') {
        image = 'https://nostr.build/i/nostr.build_a678bb4db051863c00e14844220f6509d119ada4a5eb45f5ad2d6c7d8420dc4d.jpg'
      } 
      else if (pubkey === '447eda6cddc80a4d5d5f71d686bffc33f1b0467b124c61fb41a29f90f22bc9ea') {
        image = 'https://petit-plaisir.info/Nostr/icon/IMG_1282.JPG'
      } 
      else if (pubkey === '4e653e9ac7940a207ff86df8aec62d0f2051bca086d982bbcd609344cfe015ac') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/007/980/original/D1U2CQ4OPAJV.png'
      } 
      else if (pubkey === 'b83636b41fae77a8e2e983d463e0c7d77e36c205dd6c6cb032139c8c2e54a17a') {
        image = 'https://s.gravatar.com/avatar/c5b4d57a23b991d41ac0a89926ab4f8a?s=80'
      } 
      else if (pubkey === 'b883b3f46e35605978212946468482c49c3fc4020b40ad6df851314c6092e33f') {
        image = 'https://nostr.build/i/p/nostr.build_d16b7be9b7fb9bf4a3d8ce40766dedc9fd1ac81c307a2ec964bbf911ceeea45b.jpeg'
      } 
      else if (pubkey === '1c29a4dda7865a1006650bdfb2f480a328388ce113d6e45490af9ba0e06e5e55') {
        image = 'https://i.seadn.io/gae/VcJlWnsDy_SxmzXg5BOm_LqmwJW_W4R2rBktY58Tw5az3g5t3q-4XivtceHrPaK1an25CoLGi1nf7UIqwJXFcsyZIpEocVo4snCUMDY?auto=format&w=1920'
      } 
      else if (pubkey === '48343f32410f8c05dd3dddb0c0e888a58313d2a26bf4ff8fb74250a5af3bbe57') {
        image = 'https://nostr.build/i/nostr.build_70baabbba948c12b677fb3651a576a399d3d996055d0f8c2dfd66e616bbf4d16.jpeg'
      } 
      else if (pubkey === 'a82c090da99392379473d6085022a388ee437832126823f943290a9100a46341') {
        image = 'https://nostr.build/i/nostr.build_17b85ef9368c4fa4e56a0c09ef17bac3a9a2379c28f8d28bc5e2aa6141ed1a1f.jpeg'
      } 
      else if (pubkey === '0437def2c5de7c24074734fd9f3e1fb1fc17f5daff5f8f7df4265b959634bf4a') {
        image = 'http://www.textlife.net/mizukiroad/IMG_1258.JPG'
      } 
      else if (pubkey === 'c1bcb7993e80502fb3c4c9dba1b07b49632e7f2af8c8961977f29363d229f893') {
        image = 'https://lh3.googleusercontent.com/ZTQlgOwQgt2m9vfe9dw6XONyC9fVVdDXN58mdlrD0UasUugYqgWww6BnJe4UuTswXgYRQ4Ok5moDqYr5QlwLgDf9N3tPBZr8gsOfIVs'
      } 
      else if (pubkey === '583213248b262da46b309a70c723a5f48158cf89d7d0a8338c037fcfd251b2ac') {
        image = 'https://pbs.twimg.com/profile_images/1577580533244387328/o3ioaN-L_400x400.jpg'
      } 
      else if (pubkey === '8cef27301cfc72af9dbcc5730e3e18d16929ea7fdb8054c03a36858a43180d3c') {
        image = 'https://pbs.twimg.com/profile_images/1591074878014521344/hpPOoh9A_400x400.jpg'
      } 
      else if (pubkey === 'b7f25158271e7011fc168b3991af87578fc0d47926b263be70ab2343ddadcc36') {
        image = 'https://i.seadn.io/gae/4Re320jfpMx8rJD5RQtzhaWG9gi_cJQPc370Oz6R1bDIxLzvjh5YQld6aokIif87QaRcApm0q-4Z6HZZW43hOdis0iubRko-0f5luA?auto=format&w=1000'
      } 
      else if (pubkey === 'e378977e9cedde39a076a385d32a879f927b46d4a48a831b0015ec0a2ef7e5ee') {
        image = 'https://pbs.twimg.com/profile_images/1578604125847097344/-HmnTAja.jpg'
      } 
      else if (pubkey === '3521c09faa4f8c28d0a31aabc78664e20fdf32f91cc4942e31084f0e2901ca08') {
        image = 'https://s3.arkjp.net/misskey/38247312-5cd5-40c5-9dd7-9537c31a3378.png'
      } 
      else if (pubkey === '4541a11c5ab8617e64555dcc3d31860412e86eb12abfb9a6f51f4e16b9dba08e') {
        image = 'https://212.maho.app/accounts/avatars/000/000/002/original/5d954552bcfde30d.gif'
      } 
      else if (pubkey === 'b8440245ae880bf3fe78439d0eca8bcdb515fd0e90db4129ec1c63538d250035') {
        image = 'https://sss.misskey.gg/sss/gg/webpublic-4f17a71d-429e-4186-bf11-d10431c7055f.webp'
      } 
      else if (pubkey === 'd57b2570241c371cb6e3e82a9232941c127a8333dd667fcbfe86fe0c73481790') {
        image = 'https://sss.misskey.gg/sss/gg/ec0b4aa6-d76c-4e19-b25e-f61e855a6b71.webp'
      } 
      else if (pubkey === 'a1fb842d670e498737cff1b279579a64a67a3b668db0da3c048e801eaa0def24') {
        image = 'https://media.nijimiss.app/null/webpublic-a97c5e7b-e706-44d7-8f44-7cd4c9bc6368.png'
      } 
      else if (pubkey === 'b8f7bfa8d2e9fae8183d8d3ce13d12cb05e3743ab653b8114cca8f4d4c2e78ba') {
        image = 'https://media.misskeyusercontent.com/io/47e66103-9262-434a-9105-26e0f256a088.png'
      } 
      else if (pubkey === '14062b9a30b840ee56b8c3f543c3bb432142625307bee61ac727ea7b7578257b') {
        image = 'https://s3.arkjp.net/misskey/062f0ed0-9e51-4d0f-9495-9d99519aa558.png'
      } 
      else if (pubkey === 'b0b104912a869129788cdbc83b0483c0d764b899795295a81bd3aca12c288c84') {
        image = 'https://sss.misskey.gg/sss/gg/webpublic-532e092a-ca63-44df-9d71-1c9b36c572a1.webp'
      } 
      else if (pubkey === 'a8da46165e111c8c6912a321c56bc2f6bd7dce0677bbf0600ac6993cb2c6a52c') {
        image = 'https://gyazo.com/832562b53c7722c3d7a3ddea15b1c03e.png'
      } 
      else if (pubkey === 'c5d9cc12e7296d74e991e2843cc0eefc83d0d5bae8bca18bd1ddf7cad503327e') {
        image = 'https://pbs.twimg.com/profile_images/926944891107553280/Nht1IoUT_400x400.jpg'
      } 
      else if (pubkey === '8c5ff828f59bc6df82e19c57de83fff795b6131b46eec56a71ed0e805ccb2af2') {
        image = 'https://nostr.build/i/nostr.build_03d050ad6cc6e083000cf4073d7546b2a06b877434ee3375f3c843bbc0ac1972.png'
      } 
      else if (pubkey === '3e3a58f0dc800533cc3764820b77fbccff3355a57923c873b2538e486b843266') {
        image = 'https://void.cat/d/Dc3Lf8oDphcZSNUfwXAHku.webp'
      } 
      else if (pubkey === 'b79f017a887116745127e6249924b940ff3710b45e14ce9d9529785dc7659ce1') {
        image = 'https://tamiweb.net/bonkura.jpg'
      } 
      else if (pubkey === 'd1c1a00a1c6232a3ca34a64e657ca99fcba58b01236c334dfdbcddface1b63bf') {
        image = 'https://pbs.twimg.com/profile_images/1600775542042943489/RjI4N7kQ_400x400.jpg'
      } 
      else if (pubkey === '111c60608f753b85eb14d3fe49e75135f8ea1c6680efeacabf2c1bddf9b464a2') {
        image = 'https://dq10u.com/image/icon.jpg'
      } 
      else if (pubkey === 'cf3a32df889ec2058ad5d3f89dbd251d4b224dcd54e720bbdb44cb6d9b088637') {
        image = 'https://void.cat/d/wDVdZBckqMm9hdTYi5o1B.webp'
      } 
      else if (pubkey === '11063ce9a1fd48c0086f433ceeb4e3880b3fb0c9580d7dd726dbd701f41c5867') {
        image = 'https://susumuota.github.io/images/tw_prof.png'
      } 
      else if (pubkey === 'd2cfb3b9e5e7256e1ffce3b62453076bcb802799979f2597ef5ca46e393259df') {
        image = 'https://0.gravatar.com/avatar/afc8687d0f839a61d3fafa9b38adb885'
      } 
      else if (pubkey === 'e344a1fe0448942daeeaa509149a9be256ee28795b8847e6003a2b77cb37c3fa') {
        image = 'https://pbs.twimg.com/profile_images/1625170321144954880/ANRwhNcg_400x400.jpg'
      } 
      else if (pubkey === 'f56b00379ffcef0fe7bbb273efce50d14e89d080447392deed248f12b9147bfa') {
        image = 'https://i.imgur.com/JtWb4Cq.png'
      } 
      else if (pubkey === '8807f73f73701d9aaeb03882c15a9b58888c6152b1937bcac1ef07f9575c942a') {
        image = 'https://pbs.twimg.com/profile_images/1598676676913033217/CbvCWMDs_400x400.jpg'
      } 
      else if (pubkey === 'd91a495e47a8f6064849bdaf5621cdf20dee35f3c83c9b1134b0659871826642') {
        image = 'https://yt3.ggpht.com/a/AATXAJxaKKgVCqPT5zYUhr4EdYfKa0Nal0LfMeoBXQ=s900-c-k-c0xffffffff-no-rj-mo'
      } 
      else if (pubkey === '8714a5336fa28fad79a141e3beb3340d08b100921078661c9f7cc973648e1bad') {
        image = 'https://nostr.build/i/nostr.build_1a7a966297b60e2c32d03d5abafb01519748000153a6664f017c4d3efee657c4.png'
      } 
      else if (pubkey === 'eebc7542bdc4beb1e621a3258b9b431530f943fc773459b43cc580f58e85218c') {
        image = 'https://pbs.twimg.com/media/Fo62okuaUAEj7ku?format=jpg&name=medium'
      } 
      else if (pubkey === 'eee33b392112fff080342600eeebb27418c63582384f1a64846111ed970c3166') {
        image = 'https://pbs.twimg.com/profile_images/1129703804520214528/j2OBW-VA_200x200.jpg'
      } 
      else if (pubkey === 'd3f9fa3dec7cb471bf4ea6898f049b42fe77291b7f23038dc8c66dee42485ab3') {
        image = 'https://avatars.githubusercontent.com/u/1259266?v=4'
      } 
      else if (pubkey === 'e3b9961de5377d987d310ec3baaf807272723a3792e47c3b7652828f9946b526') {
        image = 'http://takasefuhito.net/src/avater.png'
      } 
      else if (pubkey === 'dbd0e7449d5e7aaf096de5cdc75129a27c77e580285ffa8e505084196330373f') {
        image = 'https://pbs.twimg.com/profile_images/928781486777499649/_I_BEM_t_400x400.jpg'
      } 
      else if (pubkey === 'bb67202f8dd652d80e4258b6b51b6d3d254baa5041b0d67a07f601efe19ef173') {
        image = 'https://nostr.build/i/nostr.build_6227a03f8f928a88a2eac3987a5f551cbd6a21abb67c2376eadbcbceff20af61.jpeg'
      } 
      else if (pubkey === '7f36f0c1d71b1a0d19fde504a05146192a91f66c414980162a1250617fd1db56') {
        image = 'https://pics.prcm.jp/5e6679fecc080/67553970/jpeg/67553970.jpeg'
      } 
      else if (pubkey === '01be1603babb1b59386ca66943feb6d1d9e85814c7b08bc73205098b73e7a9df') {
        image = 'https://s3.arkjp.net/misskey/33bae95d-5bf1-4664-8690-cedae18a45c6.png'
      } 
      else if (pubkey === 'ea2a4267e16547c52f1c7b3be65f87f04fd9868de1989762c12fcd466a9e3c44') {
        image = 'https://nostr.build/i/p/nostr.build_83967ecab7fbb4dc35fe4f20a51600f2b9905371f9e03eb51bcfabe29f56682a.png'
      } 
      else if (pubkey === '50dd7ef8fc38217ff2b73b6fb2ab6965588b2d16a1fc7b067095eaddd1d2f3fc') {
        image = 'https://pbs.twimg.com/profile_images/940251907196567554/ofIkmVnV_400x400.jpg'
      } 
      else if (pubkey === '7ff274def56595ec4b145db902527c9e2ba4d49a11cc06c9088983726c549855') {
        image = 'https://avatars.githubusercontent.com/u/2178847?v=4'
      } 
      else if (pubkey === '53c6d689ede704330b76a741024e10dd17793c5ab2fefab973f6943a240dd109') {
        image = 'https://pbs.twimg.com/profile_images/378800000510057295/2dde73ef602f7d4c12aea96947efa408_200x200.png'
      } 
      else if (pubkey === '42280ba9894986f45f2483603aed35550c6ad12c993bead6a7baf560ceb13bbf') {
        image = 'https://void.cat/d/LD2f1ipa6mooCQ7B5MAiiN.webp'
      } 
      else if (pubkey === '527b67fe18e49b6f96690016e8ce1b1d70f13eedc2e42fc1a1bb67ed0da556c3') {
        image = 'https://pbs.twimg.com/profile_images/531675219140685825/JPRlVqSm_400x400.jpeg'
      } 
      else if (pubkey === '04c8329c2469f046fc0cc10e59ae37f2f0e751525bdf0d691f4e4a5cf8299287') {
        image = 'https://nostr.build/i/p/nostr.build_a5e5aee4d7022daf644c678b396fff5e7f5ab4ecde0dde2dc72a229a62e866d0.jpeg'
      } 
      else if (pubkey === '3d2ebbd741c634fec425ababde63dc1a4387a2fa97f7eea94f3ea7227f19b119') {
        image = 'https://void.cat/d/GD1V3EXUCK8HRve1BAqzWw.webp'
      } 
      else if (pubkey === '8ebf24a6d1a0bb69f7bce5863fec286ff3a0ebafdff0e89e2ed219d83f219238') {
        image = 'https://void.cat/d/P1UtWNWZSUo5pYrrGfgDiR.webp'
      } 
      else if (pubkey === '126103bfddc8df256b6e0abfd7f3797c80dcc4ea88f7c2f87dd4104220b4d65f') {
        image = 'https://pbs.twimg.com/profile_images/1629360712974999554/Ua0sKfhz.jpg'
      } 
      else if (pubkey === 'd8ae8810be4a362425b3000dcfc659c55fcec89db39e30b1fbb7de4c1af2f2c6') {
        image = 'https://www.mobile-com.net/wp-content/uploads/2023/02/U49Jk6bb_400x400.jpg'
      } 
      else if (pubkey === '2af2b6ff36ba5b401b8d36972f9974d8a47dae42da82efb62dc7b237adc521a6') {
        image = 'https://pbs.twimg.com/profile_images/780458809038811136/mWTiGfsm_400x400.jpg'
      } 
      else if (pubkey === '100cf2110741e1f850ae6da495414eef002ee04d32bca67518e843d0c6efb533') {
        image = 'https://pbs.twimg.com/profile_images/1525740217797574657/auqtsCAy_400x400.png'
      } 
      else if (pubkey === 'a73a25f1f5394c74f307b49b3505b5ab3d1ef829e5e91934c48c212b7244a7ff') {
        image = 'https://i.seadn.io/gae/Cc80QtEWh23840GjTAA5i9JhkVfPzJ4PvogutpTgee4j60xwUBmzWbeWO1sI_4c7c-FgHgM92uK5Y2vyGVw2lSKSnZwu9QhGn8lxIA?auto=format&w=1000'
      } 
      else if (pubkey === 'c8b6d63c7bbd72e3dfa7f4fe1cd5362955bebd8f044b16688f65904342463e4c') {
        image = 'https://i.seadn.io/gcs/files/8174d269becabc78621c020b4cefb793.gif?auto=format&w=1000'
      } 
      else if (pubkey === 'dd8656e4b3a3848f1c43140f6fd99029e7d9dbf2f0d0f59d4db8d9e853fa8689') {
        image = 'http://www.mayonnaise.jp/img/mayo.jpeg'
      } 
      else if (pubkey === 'c6ca80847914bcc3c728707b1f77659468421b71a1a1f099d25a71aa74e7641a') {
        image = 'https://kechako.dev/image/profile/icon.png'
      } 
      else if (pubkey === 'e121a996cf83877325f3cb3f351e5159d58ead194f4aca0c8fd9bfa893d6e369') {
        image = 'https://void.cat/d/W2SkCBoX3AvmAVD6K17JPx.webp'
      } 
      else if (pubkey === 'fe7f6bc6f7338b76bbf80db402ade65953e20b2f23e66e898204b63cc42539a3') {
        image = 'https://cdn.nostr.build/i/p/67d94f416326bf241847739dd20c2eafb4751da28e3a38e24207d1ba66978c83.png'
      } 
      else if (pubkey === 'd4a2f2a06ac25d8cd496ca7e04260bd645a2705ce0d5a30c245ab9fb4def3159') {
        image = 'https://cdn.nostr.build/i/bb80b5245782fe339ba06484101887e0437c5890a394f5dd6ceac94384beefd4.jpg'
      } 
      else if (pubkey === 'dfb20ab8851501400a0890d51dd690e42b1cb0ff40da96c4c889f13a8bb49237') {
        image = 'https://void.cat/d/5PuQg3uSGi1wG3pDNSeoZZ.webp'
      } 
      else if (pubkey === '87c312b1e9cb9a245db62201091d1319166f830960980793d89cf1404d645dcf') {
        image = 'https://cdn.zebedee.io/uploads/a7b92c92-f780-40b7-9946-d9d10679a343_3CEA1897-7D04-429E-8733-1BC93243AF7E.png'
      } 
      else if (pubkey === '9fd1529f75020e620f7443369dd48323f98b6b85a5ef3ad70a5c5f131ac8d6e5') {
        image = 'https://lh3.googleusercontent.com/Jd8vzL3-Mg9rRPfhuRr1bV8hQ_rRhP4z3OfjSZllcT5jk9HGwJCm43GlgnVd1RGktaqJ346nySt3WMncre1MH1hrhtYZ4CAnFm7BbymCCIAi'
      } 
      else if (pubkey === 'a9135276130203614862b9210ba3e93ab279d82719613a5c40e566aad6d1eb17') {
        image = 'https://cdn.nostr.build/i/6a0acfe39cba333132f2d38dc8b94f0f5404351cb3d1d6deef60323af16bb807.jpg'
      } 
      else if (pubkey === '2188aa64fb0ebc5e2313d0bc95e8e80246b946b446c90c0df4512466dacc83fd') {
        image = 'https://pbs.twimg.com/profile_images/598830285459853313/wxz1uqEl_400x400.png'
      } 
      else if (pubkey === 'a1c1984994512025327f52c7b6d3a1434a37fbb7a318380cab4832f8daacbb52') {
        image = 'https://nostr.build/i/p/nostr.build_e0ac869a3dc075cdb739c28262da4226793d906cb0d588fb00f2dad02f75a8a8.gif'
      } 
      else if (pubkey === '4e32dbe4ef021fd6b22947c5e510fa5b4ea43284ec01f4dec1af551ab00e76e1') {
        image = 'https://image.nostr.build/4bfc13373696c760ae1c7c4825971838c986083522abb61654ad6373ca9a5727.jpg'
      } 
      else if (pubkey === 'b0909f64623144fdfb1b3ffe719bdcf1ecac99e51c94a05e0763e2c02685f82d') {
        image = 'https://cdn.zebedee.io/uploads/95c255cb-6359-4e0b-9f21-625bddb725e5_ohachiged4484375.png'
      } 
      else if (pubkey === 'f5f9119374247b9d9c5c31f12907519b5733d6f51af6750530fa1b54baa53de2') {
        image = 'https://cdn.zebedee.io/uploads/90dc570c-4531-4e25-a368-16e660e9778a_3D0F10CB-4913-4B95-B13D-3503A338397F.jpg'
      } 
      else if (pubkey === '87256f1afba02bca2141aad1a68eb467e78255f3cd4cff089cf5400995c0fadc') {
        image = 'https://media.hostdon.ne.jp/hostdon-m34/accounts/avatars/000/016/821/original/50cf95f303a2d1b0.png'
      } 
      else if (pubkey === 'df8f0a640c3ffd09e293999acfa399d0574c8501fcdabceca5072ee2057d87a5') {
        image = 'https://cdn.nostr.build/p/L0X9.png'
	image = 'https://i.nostr.build/6jgz.jpg'
	image = 'https://nostrcheck.me/media/likemike/avatar.webp?5'
      } 
      else if (pubkey === '0a1cbc1392761924b2c2d100c7b99136a03de0c23b276f3c9493ece1669b8fb8') {
      } 
      else if (pubkey === 'b77f64db5428af783d7681a44010f31e1fd745a7c63e41455335fb86129746f2') {
        image = 'https://image.nostr.build/7c9677801bc4d5f2d3f718343a62eefc765687a89cffaed6bd07f97066c5be24.jpg'
      } 
      else if (pubkey === '0726c94c7c2b60aac7660dedbb51f5a53ccf5e7c858c7adca6501f82a899288e') {
        image = 'https://cdn.zebedee.io/uploads/0fa5036b-79ec-46f7-8292-7de73804ecf7_2c9aa66e-7903-4428-b1b8-ec046c1b49d6.jpeg'
      } 
      else if (pubkey === 'fb7d9edb022881ac80da6369832f67e300f06d8524a2a55d1aa88aed51b481ba') {
        image = 'https://cdn.nostr.build/i/6933b115492468a726ad512ad091ce582c8abe655409dc22ed4d997f7d184518.png'
      } 
      else if (pubkey === '40c77ab35089711fa1080cd90a5a4abb8621665d3972264a1ca5233a0c2a054b') {
        image = 'https://void.cat/d/LcANyNWhWsQ1LZaESfuihn.webp'
      } 
      else if (pubkey === '96ac4d04bc403e679f009cf0ea68ec1b744d8cfc6f62e73865d8d82135536a0d') {
        image = 'https://void.cat/d/T8EvUcNK7V6Xu1RAC67qaJ.webp'
      } 
      else if (pubkey === '3515c444be4f8c94620969693b79a75f902951429c8b9a1ccfdc8a1a9488ece6') {
        image = 'https://void.cat/d/EZHVvWLvDQ1niwdsaB4yMG.webp'
      } 
      else if (pubkey === '68a9614039c02bce6881be3d6276714eb79a64f84244a45bd8f66bf9988999d6') {
        image = 'https://cdn.nostr.build/i/707158c3472ddf0d7b196ebda42ebe438618cd0889db54ed860ae848642bfe89.jpg'
      } 
      else if (pubkey === 'c4da3be8e10fa86128530885d18e455900cccff39d7a24c4a6ac12b0284f62b3') {
        image = 'https://pbs.twimg.com/profile_images/1527569256212144128/KjCARmKa_400x400.jpg'
      } 
      else if (pubkey === '4fc232dd5fa7e68859166cb8f8fabf3b84fde93ac957d44d37a848fb756d5590') {
        image = 'https://cdn.nostr.build/i/c95023993e5fce039a81e01256e1e88e753465ebf5d844d090432fed6678f009.jpg'
      } 
      else if (pubkey === 'f83cd1975419ab02fe80747f8c9b2baa0a60b8b120cf1bab7cb4488ed59dbad7') {
        image = 'https://cdn.nostr.build/i/8c696c3cec31f4b2167e9ad765faf0ad7422951571e92b49d42d11ccdaf6f9f8.jpg'
      } 
      else if (pubkey === '8cf596ce1976bc6b7ae88675e78bc7a9414b9e1ca0d046997fafc111d306ae70') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTA0LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTA0LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey === 'e04fc40dcdc783b2782aef62d294d1eae32d2929ad4d9765d7834913a8810151') {
        image = 'https://pomf2.lain.la/f/g4apsqb3.jpg'
      } 
      else if (pubkey === '82a467f04859c11cd644d692adfee508391243582def23534e46cc8122e3f9ed') {
        image = 'https://cdn.nostr.build/i/ffce36183e1b0c82fed7ac8babc1a4a08d73aae65f1d92eadf84ebdb394569b1.jpg'
      } 
      else if (pubkey === 'e859a7cbde1006f823ee819aa308752d9e1123a1842a98ae2297a1031f5fdf94') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/cccbb293f1af2fdb0603055f056162c868cf0aa95da22c8e9b55a926505f9fb7.jpg'
      } 
      else if (pubkey === '41d516e4907a461254f0789960c104dd8265723130c55e0b19e56e5e2bb49c9c') {
        image = 'http://nostr.build/i/2199f8eba49404feac5e081b7d3db8f3e9f79365616cd63c76125ba2e474c3d6.png'
      } 
      else if (pubkey === '2c3cefee58b9bc3f169b30d6bb83ac6f9995889873bca15d3cf5438dc81d73e6') {
        image = 'https://cdn.nostr.build/i/8fc43eb236cb2fdf8417fae7724c30e2c35d0e9aff917741999a0ac0a4dd48cf.jpg'
      } 
      else if (pubkey === '1e5b4ae1fa1fc87190d075e305da10775be571281157ce5cb696cac6b3a64818') {
        image = 'https://void.cat/d/NDrSDe4QMx9jh6bD9LJwcK'
      } 
      else if (pubkey === '5534a5fb9800658dfa33197f6b0f6d1d9dbb97477c05e84c45f501c3af4b6190') {
        image = 'https://lh3.googleusercontent.com/pw/AMWts8CpTqFYtZVHx7rvrn3RrmjvDEkOlaKR7Al-agrR9fQlLBxUvAtWLtrH4M8GaOzalsirY9cUy-lv7c9pWyNKNIgAzbgS421JVlwviK4PTDCSoTETcwmnmDoLqjQSx3dnZvaVrLyCgPaOybml46k6XtMhrg'
      } 
      else if (pubkey === '0086ebfedc592fb248540bc67a455eb8e3113d490d315c828177925176a9468f') {
        image = 'https://showhyuga.pages.dev/nostricon/hyutestr2.jpg'
      } 
      else if (pubkey === '4b82077db95f1bcb1501be8d26c1a12d6f8ca1e902ad244eddf699e48a6b2f9e') {
        image = 'https://cdn.nostr.build/i/07271816e0a21e0e00725bea306f1a7f3b5a1b7d1444f06bf44f22b70d3bb641.jpg'
      } 
      else if (pubkey === '7dadca72662e7a008698e5b3cf85483e62f8d39ab43d5f056f59a0799998dffc') {
        image = 'https://cdn.nostr.build/i/b75ab933e2930fd5469607087f6e3310903efde26978e266749db9dde51b6da1.jpg'
      } 
      else if (pubkey === '5ba43622e34d4f7da57b693b5bfad71d475935633047e2efc40f76ccb5b06a59') {
        image = 'https://cdn.nostr.build/i/e62b422460f569e9004b5f5357d0c411bbf0e80e5a510549e50fca085a18e345.jpg'
      } 
      else if (pubkey === '723ae60d5c23c6b973b5b8b0aa1384e1e196a580e480bb7ed3fcbf217aa57523') {
        image = 'https://nostr.build/i/d19c1ae0cb4f84cdb4c993da9bad044af5700356524a0aa0ee6445056974b9dd.png'
      } 
      else if (pubkey === 'b707d6be7d469bd59bfea3da46586772e678e1aa788eb344f64a9e118129850f') {
        image = 'https://i.floppy.media/3e84ad0b3e47959efb7f135758468902.png'
      }  
      //else if (pubkey === '91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877') {
      else if (npub === 'npub1j808lskfdnqrx493djsl8z7nwzyqexatpnjdywkldnqghk7dhpms7vfslt') {
        image = 'https://cdn.nostr.build/i/760a758fe20287a1b4dc2ee40a757fd58200e751ae47fb819b60d29d8614cd54.png'
	image = 'https://robohash.org/npub1j808lskfdnqrx493djsl8z7nwzyqexatpnjdywkldnqghk7dhpms7vfslt?set=set4'
      } 
      else if (pubkey === '548ce7c9f49011f0046fa8f1a22ed1dbe568778bb6d9a4cbcacdf0ccdcc74666') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/nostr.build_008fc7e6a180c44124c2c1d7e70ae34ab08b87c1e26b2155cb3bfbd73b62346d.jpg'
      } 
      else if (pubkey === '180a6d42c7d64f8c3958d9d10dd5a4117eaaacea8e7f980781e9a53136cf5693') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/b15efbca5d14f3221a91bd680530276445bbcb7756eb6f86c8c97b6d7a8b50a7.gif'
      } 
      else if (pubkey === 'bd60934e084aa21bbb9e4f195e0e6123b9cc21061735ed77ea356131acada4dd') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/59d3e7276e5d4d4b8b722e49b9c4cf772485617516dd667a7cbfe202da957a9e.jpg'
      } 
      else if (pubkey === '1a4c6e98dac3f8ee6fad1aded47e542767792f8318941be1d7177ccf501d06e0') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/e4035ca61d348d3a808ef1a695e75700a02eddabbe5c6f3d07ff3d84759346e8.jpg'
      } 
      else if (pubkey === '508f28656b8db436153d5239de5034abc0351b8c90ac33e6b156d1fea64b2960') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/p/89255b2c8c7901f3850b8543e21720ec1c70b717616a07672f8506f61a4399a3.gif'
      } 
      else if (pubkey === '022947f785b836141335b246b9788b3d1b3d3d64a5ecfbe37e0d960d235b1711') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/p/94Qv.jpg'
      } 
      else if (pubkey === '9a43f07b5204478ee6d82753aacd28b4bfeaa3a3013e9da3ce440d80b32f2d07') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://void.cat/d/5ikCjBgz5vPosjLU49bQ8G.webp'
      } 
      else if (pubkey === '8f44c56131b362668b0e01be8c71b24786598bb68fb909cfd78fabfb058dd0f0') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/7df94d9e137bd8d10baa805ddc4a852ef6c6e12d369f63d93975f4fa2bdf6c7f.jpg'
      } 
      else if (pubkey === '834034a984a0c1a95de65e0c514a612c7c1a6e4cfb6edbe90c0a139f608aa9a6') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/nostr.build_e5137ace4fbe792169533464c6b32631335301e674b18fa31291321eb009c78d.jpg'
      } 
      else if (pubkey === '4796eb254645a3b0db24e77dd7bae72eadfe18fc4c24f2bc6c4e658c4fec4ed4') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/dd3aa468a41dc62e17867c3396c73b3e5571f3e6e1934863a1be1be33f8f86fa.png'
      } 
      else if (pubkey === '2bac48c4c4c8290f0dc7930a3b97026db2ea0ec7e0582b2577caefec1e0b7328') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/04d124e10fc54c28e39564ff7b1d05e428a3775cc25376554b4d272506618f33.jpg'
      } 
      else if (pubkey === 'ccec23ef54ebcfd3bcbf71c4e28d8c32087addda00710197e72275a04828648e') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/9b5860e61582d63a15af6dbe1958b366a75f97344a9f63bb1b56d9016feab570.png'
      } 
      else if (pubkey === 'cd0c30bf2e327c8d04433314596cdda5330246eb3df5093ce995ed10e6c2f29a') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/ffce36183e1b0c82fed7ac8babc1a4a08d73aae65f1d92eadf84ebdb394569b1.jpg'
      } 
      else if (pubkey === 'fed5c0c3c8fe8f51629a0b39951acdf040fd40f53a327ae79ee69991176ba058') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/p/nostr.build_64b2d5dd4ab4a8d8c156be0f47484584d856f12630ba44a0e34876ce2775e04d.jpg'
      } 
      else if (pubkey === '588b9199e1a56264f98a50dcde1a7798909f8856c54636b3de97e79fc96f0da5') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/nostr.build_7ca1090d761fdc45d2f8c52ac5c721f5d1c862e43b3f109c98ac4e8007f14df8.jpg'
      } 
      else if (pubkey === '36bd2bc05fa5c70c0eb158cf5c23e47722077c591e9b49ac8e8f644d81ad7012') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/nostr.build_a4ac587683b833c7695cb8de49b054562a3c9733c15c836b5852f8b49116b926.jpg'
      } 
      else if (pubkey === '0d0b083e3dd393389e725fe42ba58c6f484e57fd708ff7e07d4dc1d3e0d257a4') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/nostr.build_8e6549c218cbbf9d6d8d4c7cd67d39bda01971889b0749dfa1668af1ec2832c6.jpg'
      } 
      else if (pubkey === '278e6a55a7f88fc015164daa4c5aa44275c4494370e6afc7ed61dfc1a1f5f506') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://void.cat/d/G8ZYegAgiuskEcDbqPFXU1.webp'
      } 
      else if (pubkey === '7cebf422b8e17b0cefb1d5819fb0fb5cf79ba52e8b64202f3bb62192ff3019d4') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://i.ibb.co/TK02Ytx/7-EF569-CC-1-BB3-4-F09-92-FD-E0-AAEB0-A3-D79.png'
      } 
      else if (pubkey === 'dbe792290238ea118b2c77f57dc07a8ecb8b609185bffedbf5d833b9e3540b93') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://pbs.twimg.com/profile_images/1471571444442320897/DE8l8vQ3_400x400.jpg'
      } 
      else if (pubkey === 'ad36dd51993d7fa327c9858529ec9be9c41b9ee6d79760b3ee75c0b28251857b') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://i.postimg.cc/YCfDJQZk/photo-2023-03-24-21-18-34.jpg'
      } 
      else if (pubkey === 'b6d9f5340650024ff04c3e5a3a19a3654797cd65057bed90a2801fdfe5d167a1') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/27a536f1756afcf27bf0c14c671cdb9196b00c2aa26756ec3e703f1d1ff8a419.jpg'
      } 
      else if (pubkey === 'd162a032301522b2a5bfdaa7e8630ba76f92a4856430b8e80d7bb0e36cb5412d') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdni.bestporn.pics/460/7/484/75181034/75181034_001_2afd.jpg'
      } 
      else if (pubkey === 'a7e8f6ed28694051e24af6892ac505745d44204adf1bdbf1b31a84aa04cfd240') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/cb34d35789f2d13d34016e9c649e2b307802cbc76c7e3d1d12c5dbd8ef2273b8.jpg'
      } 
      else if (pubkey === '54b2d4f2f653923f408389d6a4d29aa2ad7e104549ce3d452bdbe4a671a60160') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/bcefcd7d20fa20aab3b656eaba292c2e61d3ca9f42602a248f792ba025fcb267.jpg'
      } 
      else if (pubkey === '8e432ad14d3955d0863b975778f0c8817ef88c9f119d626da1a3face584bda73') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/4e825b538008fb9aeeb1ed9fc68b148a2eb4390eabca3733aabf6ece1eaeb8d3.jpg'
      } 
      else if (pubkey === '5111a0936c7d0fa7c2499fa876ed82c22f93e18578069a4fa261cb42bc2ddc63') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://images.ecency.com/DQmTEJGmGPyD3RZFthLj6sfELfJfBxBPctxh5oqMPbLSGeo/i2ivcgpj_400x400.jpg'
      } 
      else if (pubkey === '792af24ad73f5ea9f34261e4ab7e21e5fecd6ce8620acfa4a198c1e83cc93aa4') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://markdown.isab.run/avatar/刘宇航.jpg?utm_source=nostr-70b0f2c20b79c66be6aba24a65006b53'
      } 
      else if (pubkey === 'c1a6940f84cb4d32564837d9ae055b036545c8e5f61cdd24f29786876436df8a') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/6933b115492468a726ad512ad091ce582c8abe655409dc22ed4d997f7d184518.png'
      } 
      else if (pubkey === '5d9af2b0d7668fe6a32c0d1fc86ec3fd9a0e60f3c641a0721cda4b142124583a') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.nostr.build/i/p/0cab288b8fdccd66430723062119d93e25de96c8f79e3d4ab7e6e404ea0d56db.png'
      } 
      else if (pubkey === 'd4fa523cdf08c8061bbf3e4320648eda40a72f327733d07b8ef7967714a08dfb') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/4a55f9f396ad7774c23ef0deb4f9c1e0ddb5854d6e581b5219e9aaf89d862d5e.jpg'
      } 
      else if (pubkey === '4e72d83524f4f24acb05691dfbe1a74ba115b9ddfd09d6771401468d21c79007') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.zebedee.io/an/m/zbd.png'
      } 
      else if (pubkey === 'cf473ebe9736ba689c718de3d5ef38909bca57db3c38e3f9de7f5dadfc88ed6f') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://cdn.zebedee.io/zbdgg/social/zbd-pfp-default.png'
      } 
      else if (pubkey === '669ebbcccf409ee0467a33660ae88fd17e5379e646e41d7c236ff4963f3c36b6') {
        image = 'http://nostr.build/i/f9f6e4173c2a913c916d950576f15ef5c965a90f4301d88720a40b18438577bb.jpg'
      } 
      else if (pubkey === '82fa3b0cba33a45409c2ddf879d7667b3332222f6df936b143c5a6178f50d0f5') {
        image = 'https://cdn.nostr.build/i/271964c571e262461996352e33a0a46e52b0a04474acb65c57c716604ff7f3a5.jpg'
      } 
      else if (pubkey === 'e810fafa1e89cdf80cced8e013938e87e21b699b24c8570537be92aec4b12c18') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/nostr.build_daed838cb5abe911f59db2af8a0ffb1970a1c6770ec01d90686d806e4403e72a.jpeg'
      } 
      else if (pubkey === '006cbe3ae850f504df1b24139f6262fcc95f597e135239aea8d4b488c0db7de8') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/79c7dcf13f6fa573e4052457b96c919aea20d6ae2b74c33514d179dfc9346d43.jpg'
      } 
      else if (pubkey === 'fa70d85226067a9a8623ad0e1fced1ad0bd31d65afb73f9739bb75804a25ef41') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/c95023993e5fce039a81e01256e1e88e753465ebf5d844d090432fed6678f009.jpg'
      } 
      else if (pubkey === 'fd6f1cb5161279c5befc8f76fb5339c2c4c24b42f2d3998c988324f2e4230086') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/hotweather-sixteen_nine.jpg'
      } 
      else if (pubkey === '6c8bfb24c5b310b40fed955f1bad28706aa60922e2e9f33b47036ae38d21003d') {
        image = 'https://imgproxy.iris.to/insecure/rs:fill:256:256/plain/https://nostr.build/i/bb80b5245782fe339ba06484101887e0437c5890a394f5dd6ceac94384beefd4.jpg'
      } 
      else if (pubkey === 'ce88af9782fdaca0508b8f42c948976c4b5055d90220d653e141a3cbec736979') {
        image = 'https://nostr.build/i/nostr.build_09678c74a7742be2f05dbf835d0fff7f48019b4e55b928da974ff4b0a6b921ba.gif'
      } 
      else if (pubkey === '1b47520dc55fa548b0a8c5e69c0f5ccf74a28fb8937bb8270737a6b2abb1f904') {
        image = 'https://pbs.twimg.com/profile_images/1566810775477682176/trXcI-xI_400x400.jpg'
      } 
      else if (pubkey === '0e7a6a23fce4bfbe06c5fc9215e834da7beef26de17e1f14be89895643bb0e15') {
        image = 'https://pbs.twimg.com/profile_images/1675625283150544896/KL-qqKdL.jpg'
      } 
      else if (pubkey === 'a4fbd90064a67e0d32c9f317677b7fec9cb25beed5399971d9b19300cc35aa56') {
        image = 'https://s3.amazonaws.com/zundan-mastodon/accounts/avatars/000/000/001/original/527fd226e51be531.gif'
      } 
      else if (pubkey === 'f70464e6b6c7858e50b4cf35c3b4fb45856f63487ebda0445d6e10357fff60e3') {
        image = 'https://mastodon.cardina1.red/media/accounts/avatars/000/000/001/original/9acb311c49372bc4.jpg'
      } 
      else if (pubkey === '1878293d7f60575141a6b3c297e204ab7a7b3bc963275eef13c5c5ca1f83fecc') {
        image = 'https://pbs.twimg.com/profile_images/1591957828612268033/rPpMosqE.jpg'
      } 
      else if (pubkey === '416194141dee05d741125a281fc245b3b0ad0d1f236a3713feb36e49f41b5aa3') {
        image = 'https://cdn.nostr.build/i/6f6d48e48c6676176cf157ba9cfc0995f0ebe9d15620d0c86358aaeeb6c228a9.jpg'
      } 
      else if (pubkey === 'b08b038a420cc4e2e1fd2790c7e7950f277091d2e8ca85acf9c94adc61630248') {
        image = 'http://nostr.build/i/e9272fee7f464c695acf42e8bf29164a60f00364a31a44fb7cb8a42cf178dd6c.jpg'
      } 
      else if (pubkey === '597b42de56a9e0c19ee2d0cde5797dd58d48ce8dd25c732b4c873af11161f9fd') {
        image = 'https://jonleger.com/me_nostr.gif'
      } 
      else if (pubkey === '95da1a5a5448add1217404088d74b54d1704ee359343c02b42a963737b43d609') {
        image = 'https://pbs.twimg.com/profile_images/740369705572044800/DBtg_lZa_400x400.jpg'
      } 
      else if (pubkey === '3a42d3f4f226573f6e6e0158f7837ec8fbf44f8bd636bdf1783eee59e36d8fcb') {
        image = 'https://avatars.githubusercontent.com/u/674425?v=4'
      } 
      else if (pubkey === '416c7f49c5acc6b28e80f6afb38075c8ad11503d34aaab63527cf0758d179785') {
        image = 'https://cdn.nostr.build/i/db1879feb37b55829a82fd853672caa5b2244a09f915d88b0aa6617da43ab0a4.jpg'
	image = 'https://cdn.nostr.build/i/0b53cd76f9ee73ed7236443551bdd65d8c3366ae2ce6511d2628b0ee67c1b3d3.jpg'
      } 
      else if (pubkey === '200844241c9ebfe5c7633646098f3303372fe9359a9a56219d8a9da23a59ed24') {
        image = 'https://cdn.nostr.build/i/37a266ffcde217ec3a7193b8908272088b2f1c044567a4edbd56c68e9be58562.jpg'
	image = 'https://cdn.nostr.build/i/79f3c5f4f973ecef9d51568099b0967f5ffa179124839880bf2797cb46b807d2.jpg'
      } 
      else if (pubkey === '511fa8d73ca8513f6fd44751dbccf7c06b6912280f8c4f1c3f0a6bcf4b7e7f2e') {
        image = 'https://void.cat/d/SKULqy13Q2F4RRnZ28Pnob.webp'
      } 
      else if (pubkey === '6a33a481c8e3ce1943bdf1dec4554d1253712d4de269cfc3d319875a34c07b3e') {
        image = 'https://void.cat/d/UqdCQcYRPHffqss6C2VwbA'
      } 
      else if (pubkey === '5f4c8340556c9496480aed8a76cdbb0ad6040a62aca9b7629355097a9719ab58') {
        image = 'https://pbs.twimg.com/profile_images/1654694508674846722/ER0z_gLG.jpg'
      } 
      else if (pubkey === '0b8602b5b18052fa55f51c2bf29d74eeb4451d34331684db7af8065bdb3ebef8') {
        image = 'https://cdn.nostr.build/i/4f84943b804e858e7ffc7f75b875901961876fb4c268f8a317a6a8a410ebf46b.jpg'
      } 
      else if (pubkey === '99883475c9a304a5d1a3a942f31d87b06a8afc5da90885ac4ba647302942d69e') {
        image = 'https://img.pawoo.net/accounts/avatars/000/325/064/original/7de7dbdd749c1c9a.png'
      } 
      else if (pubkey === 'a3c13ef4c9eccfde01bd9326a2ab08b2ad7dc57f3b77db77723f8e2ad7ba24d6') {
        image = 'https://i.gyazo.com/5d38eb6b55fbacfa81f836eb191b1a76.jpg'
      } 
      else if (pubkey === 'c504b7ef52784b8442a08a84029180a5b213b5f7aeed387908588d3e4b829d15') {
        image = 'https://void.cat/d/QkUHCjVwreaUtoNLrrEKYd.webp'
      } 
      else if (pubkey === '4d8b4f197f5da41410931a5373284e5d5c44ed9da21fd3bbf4a7f035e5d6841c') {
        image = 'https://cdn.nostr.build/i/3e304f1249b93b8ffcf15f0768b2df568879a39639ed96cc17f4c701311e2bf0.jpg'
      } 
      else if (pubkey === '0b7e5ddc90f05d09bb49066bb676bab329583c85733717f53b15e72aad85bf67') {
        image = 'https://hokkori.net/img/g1_nakashizu.png'
      } 
      else if (pubkey === 'e4464d2536dd77836ff14bd6f8937fe7cb7830a6f974558985566f73eb46d199') {
        image = 'https://cdn.nostr.build/i/d67082a340d1911c474592a2b82172e10efa02830f08329eb73b545c175de015.jpg'
      } 
      else if (pubkey === 'cd144b876eaa395c2650c2ab024d23bebcb7fa7c39f60bdf19d29c331fc8c317') {
        image = 'https://oshiro.hirunohi.com/files/webpublic-7376fd2a-d538-418e-9a06-b431ffdd073d'
      } 
      else if (pubkey === 'f1f3bacf9bd8f49b4abb40512c6eb71a4d165f6296bdc3a79f844e0aeaeac7f7') {
        image = 'https://nostr.build/i/dd438642eb0be4ddabe903372793dce71460559c748ea7ad8d19f12ece2e3b94.jpg'
      } 
      else if (pubkey === 'f987fb90696fcb09358629aeebf5156ea05a405101c4f2d9020bf02f47ea4a49') {
        image = 'https://cdn.nostr.build/i/eb1542b2df17def121e2b72863e86f1d46ffc3530877d4b43d76060a1d068d85.png'
	image = 'https://nostr.build/i/3cda7981c89b37ca8c4ac218f010f92568fa9701558cf693fc97ba479943ff25.jpg'
      } 
      else if (pubkey === 'f7fcd6812010cc6278b987de54086bf3ee039a8c4f91489702a80bd66043fbe7') {
        image = 'https://nostr.build/i/c6ead3c93fb451282e7ea6d398d33415eca2bc70761129ed9cfdb3f03ced2285.jpg'
      } 
      else if (pubkey === '2b9515a5afeff5caecc9187bb8515e27e39cab06ef4a8b8ca9cb267b40a073fc') {
        image = 'https://files.mastodon-japan.net/accounts/avatars/109/312/934/646/805/590/original/bdc5d764e5bef2cf.png'
	image = 'https://files.mastodon-japan.net/accounts/avatars/109/312/934/646/805/590/original/c88c1308622d0333.png'
      } 
      else if (pubkey === '0d5d10c063f93d9991a91815093c209228c969c2d85f44775d31c34509374969') {
        image = 'https://calc.aloneroid.one/files/5d592802-2b63-4c63-9982-8b3600b683c1'
      } 
      else if (pubkey === '') {
        image = ''
      } 
      else if (pubkey === 'e75d59b2cc1f5243a5a21402f827b8f7ae37d85c6da32d9d074c40662366efaf') {
        image = 'http://nostr.build/i/be2c53eadc66bcb7f8de4d5c5597d5b74c29c0ba82d9a40f576c92164e541343.png'
      } 
      else if (pubkey === 'd947f9664226bd61d2791e57b9eda7ed6a863558f0ca5b633a57d665abf1c11f') {
        image = 'https://nostr.build/i/60e5c935667d3c5487edecfdd1f6b24edf98a48a55555623c8aaa0db8f7436f6.jpg'
      } 
      else if (pubkey === 'dca9de86ff0831fc8f54aa049c10cf541cabec71d8ae31c400b44dfd065397fb') {
        image = 'https://media.yukimochi.jp/accounts/avatars/000/000/001/original/9b9952f777057100.png'
      } 
      else if (pubkey === 'de66fe2c15ea00e2c9a66e0996704bcc960ca5f2ccb0238f1103c6c577951edd') {
        image = 'https://nostr.build/i/832e17b4a302c3b503afdb74e2ee7bb5cd055aa7d1575b1ec884b8ec24ef669f.jpg'
      } 
      else if (pubkey === 'd391de9bf616d575d677aba41453d00c810403385356def3cf64d6639b5af038') {
        image = 'https://cdn.nostr.build/i/0fabb0c8e823be7be3fd1d359192dc38edad9eb77a188cbeaf7290b84be969d9.png'
      } 
      else if (pubkey === '70537f28a038fd9e6538684a30c3b4ad1527bdc517a19b0a118cb4f8dc12f439') {
        image = 'https://cdn.nostr.build/i/760a758fe20287a1b4dc2ee40a757fd58200e751ae47fb819b60d29d8614cd54.png'
      } 
      else if (pubkey === '18c3434bf332fcbede0be65df140f1bf9ad1bbf6c923242b5b4ac798c276a35b') {
        image = 'https://void.cat/d/YTuiuNGmei1zPeSK3jFnQK.webp'
      } 
      else if (pubkey === 'add81ef7313696db24aa10818ae2c3dc98099f8779f9658956719f371d4add87') {
        image = 'https://s3.arkjp.net/misskey/webpublic-a3a74cc4-9f82-4045-adce-50353fa2cad8.png'
      } 
      else if (pubkey === 'ae78d3e0ebf5add63067e27832d6d84c725dd6fb297892186b25988d042d2795') {
        image = 'https://img.motcha.tech/accounts/avatars/000/000/003/original/e33e1b7ebfaf2d70.jpeg'
      } 
      else if (pubkey === '63d58d9cd91916893d4cb90398ea2734683824bb969d3760fc00c84a6c4fb395') {
        image = 'https://img.pawoo.net/accounts/avatars/000/300/590/original/e048e0e97281090f.png'
      } 
      else if (pubkey === '412f8bfaf950e6b2cc0d47778ff7b5df2035308f5fbacdb9224a35e235bb2a9b') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/714/332/208/703/254/original/e909a2760f8004a1.png'
      } 
      else if (pubkey === '8bf66e6b2e91effa0f522e9633366706c799273c1b0fdf734a2dff2fa5167135') {
        image = 'https://s3-us-west-2.amazonaws.com/tootblue/accounts/avatars/109/529/281/733/729/191/original/1a5070abac446de9.webp'
      } 
      else if (pubkey === '0123a6adda1d2a502107e1de2231dc1c9962191b8ae01b7883a285a229138b95') {
        image = 'https://ordinals.com/content/9629d2133363ccb0998ffb329b6680f2069f04ec76ec7d278c2d553e69c6c721i0'
      } 
      else if (pubkey === 'fefd26604beef19051498431d5aa529965ac877d06f51a37860ba73dab46efd7') {
        image = 'https://gamingjp.org/system/accounts/avatars/000/001/234/original/36e8abe4d3a70918.png'
      } 
      else if (pubkey === '1066a05d1474e7e133a97208a5cb177a9c01e4b81f0f14370ad59f4a0a475681') {
        image = 'https://ul.h3z.jp/TpDhjCkc.jpg'
      } 
      else if (pubkey === '74e255aad5369419a88fbb8f1ed140756763570d7bb2e04786919ca2b5d13268') {
        image = 'https://cdn.nostr.build/i/c2d83c243a76ae1419e3a8d630b7358dc3a86e6b56b8287e9430e5dd2eca5220.jpg'
      } 
      else if (pubkey === '15bbc653ed89f32d98f5c22bd45347d927e1f812c917deb280ac641442b96004') {
        image = 'https://cdn.nostr.build/i/b2979a1c19aef5336f236426295ed515ddc62773baa1665ca83de40783a11207.jpg'
      } 
      else if (pubkey === 'acb67649d92174ca22631164fc2a1cb9dcf0443980918ee57a85b2e7a4145c58') {
        image = 'https://misskey.omhnc.net/files/webpublic-f8a1079e-2fed-4489-86f7-3b211bc0d480'
      } 
      else if (pubkey === '2f7386ccbe114006a787c881c605bfe84686e960f628e31da956c1c5970e4cd0') {
        image = 'https://pbs.twimg.com/profile_images/1515834950255202304/SE7Gszmf.jpg'
      } 
      else if (pubkey === '04a38b778c7cdfeeee80fbd15aa1b491a3922b9726fb81fde25b4b0201c9b051') {
        image = 'https://qnighy.github.io/profile300.jpg'
      } 
      else if (pubkey === '3d116f519779525e05553865906e911c48c5f795c70ea6c54b3c0c6454043270') {
        image = 'https://nostr.build/i/412c11eb5d908ebda53e21970be38a66dbbd43489c1ba0ca4a47fd3ca1b230db.jpg'
      } 
      else if (pubkey === '4ef17b0fdcc72e3deba816df75c1b6df3ac2a3ac91788b313117677a943a35a2') {
        image = 'https://up.famichiki.com/i/005052_1_11690068244.png'
	image = 'https://famichiki.com/i/005052_1_11690068244.png'
      } 
      else if (pubkey === '706ab83fc88a6d54edc3734732020879077aa2fc97a6403fca56f957c0d79b6a') {
        image = 'https://void.cat/d/J8oiAH2gQJRtNDypBcbHpD.webp'
      } 
      else if (pubkey === 'e6bc41c7edc7d8cbf8df36e9959e07030bdcfc7a7eac7916e77d9763ec497f46') {
        image = 'https://pbs.twimg.com/profile_images/1400493720454123520/uFFdW-H__400x400.jpg'
      } 
      else if (pubkey === '7abd4b03d1de2d3c3f7a9dae63d482b8f7280fd1a8d0e6c9d76fa89d76993e8f') {
        image = 'https://nostr.build/i/bf196d18fc755fd09c8a35272ff9f6dc0377b18fcda33fc5de2f31b1180b3cdb.jpg'
      } 
      else if (pubkey === 'c966d11166cbdff5eb462447d75a13cc4f0d6eb2e5f73783769c95cb272d75fe') {
        image = 'https://pbs.twimg.com/profile_images/1139435263736733697/0fswG-cl_400x400.jpg'
      } 
      else if (pubkey === '7d06af242d772e76a59ff6b1b93eae1888b7772e8945be9cfd0be53a9c6dbb7b') {
        image = 'https://nostr.build/i/396a3b905844ea4e655f404dbc471b28b62cfd8d7ec2795a7695af5b89c428d4.jpg'
      } 
      else if (pubkey === 'f543835ab14596683bdf701dc43e636e42aef1d33463748a2c4dfc1744b9d08e') {
        image = 'https://cdn.nostr.build/i/a70340bea1d6d747dcea881e1882beb0a17fde617b6bb6fe8e373f7f6aaf55e3.jpg'
      } 
      else if (pubkey === 'd8e9f3bc28d31faef808f3085b3c8fd40a727b481f82bea93defb4f33a2f14ae') {
        image = 'https://s3.arkjp.net/misskey/b102f233-7700-41bd-b685-d3e3abe7c89a.png'
      } 
      else if (pubkey === '000000dd7a2e54c77a521237a516eefb1d41df39047a9c64882d05bc84c9d666') {
        image = 'https://em-content.zobj.net/thumbs/120/twitter/348/water-wave_1f30a.png'
      } 
      else if (pubkey === 'd8af0c334c038cd014d7e3808e9cde15a48e064d748aab9302e8dd63b37b9f70') {
        image = 'https://cdn.nostr.build/i/2c485954ad482a4a60d40726f9e9d9cbada570d15e3db25baa776414c9781cd4.png'
      } 
      else if (pubkey === 'b8883490093235f278a35e024d2501564303c3c102b0edf62a3d1138b9598bdc') {
        image = 'https://nostr.build/i/7af5fc1bcfe122589e340081b2909066aac1c4fb9f2128a43d5046e433092481.jpg'
      } 
      else if (pubkey === 'd3e00cbc8a3f1acf4bfd80183f5c2262d832c1e2b84a7d00c3ef1a9a8478432c') {
        image = 'https://cdn.nostr.build/i/e11ea8aa2744e3a3dfdc0cf76eb722d39a353ee7e3f217053f69148967ddb719.jpg'
      } 
      else if (pubkey === '3123b393cf535d89d574203c2f7c1cae2efb03872f6b2578b78393df58b74d3e') {
        image = 'https://nostr.build/i/388f37a9dccd821f48f7644b9a510c38b2df4f8d3994a9d9204e8cc4f2a29e3c.jpg'
      } 
      else if (pubkey === '5f468793f9a7bd70827cdad5c5677e3e5997fa53d0920aaac4e302ac0d48e8e7') {
        image = 'https://cdn.targoyle.jp/img/targoyle.jpg'
      } 
      else if (pubkey === '3a64f47897f8de453273dc4f6ec28c23ffdf402421a70532247b0d9ca1f0746b') {
        image = 'https://cdn.nostr.build/i/7116b5d778565cc9984f8bcbca6c8325121249b95b5fc33731fcbbc740c1d4e0.jpg'
      } 
      else if (pubkey === 'b822190a2a2384000c39d36859a434cfaaaf596287c51bb7dc516882c8c997a4') {
        image = 'https://nostr.build/i/nostr.build_ec59dfc464a28e03d7a437f500e62ade44909797d394d2961e513e28b476470f.jpg'
      } 
      else if (pubkey === 'a2c3063ca29c8707907c24d3f34bd3f8995cd87643d1e707c6a5ec0453e2225a') {
        image = 'https://s3.arkjp.net/misskey/webpublic-b2dc591e-58b6-4df7-b7c9-1cba199f6619.png'
      } 
      else if (pubkey === 'a3a283d2d3f15a870c6419106e8e674a0fcf84d15db557f41409bbb85355f115') {
        image = 'https://nostr.build/i/486027233647057b1e15a719a954f6ed1472cd3af9d39d911eb1ec99299a29e8.jpg'
      } 
      else if (pubkey === '52163ba58faea3504089debf1dfbafd7df502fba26536e3b22761da15419a4d8') {
        image = 'https://i.nostrimg.com/43da2c96ebb786741da0ae3964abbbf70ae5a0d2e97f22cdf6da177706fe4f5f/file.png'
      } 
      else if (pubkey === '57abbc4683686a035986d10d81f62abd23d76acd27229f52aec9d7b8efab961f') {
        image = 'https://pbs.twimg.com/profile_images/1353298673933799425/gLMl43fA_400x400.jpg'
      } 
      else if (pubkey === '4c0a005781ab6f5f7e3a11016deea4ad9281b2bb80eb47d730309aa7d7f713d6') {
        image = 'https://cdn.nostr.build/i/38bb503aed1fddc859e10959e5e3d1750ed4ab5d29719d2d5eb29441e39ae87f.png'
      } 
      else if (pubkey === '9ab9730c372a5040c78a31806bf04f612cb3b5c7cdd8ea73b987de2aed9d587b') {
        image = 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f50e.svg'
      } 
      else if (pubkey === 'cc20dc312a6d9f3c5cb7a97796c95bc96259b86a75f96611adfe285b66b7c894') {
        image = 'https://storage.syobon.net/files/webpublic-f7c3293e-4fdc-49cb-bb0e-45165a6f8047.webp'
      } 
      else if (pubkey === '82b30d30444170e6a8c819e8406e362a3695454a4617894ce2706f3840c6c003') {
        image = 'https://nostr.build/i/c4467f9ea2a5b9654ff42ae7a6d8de0547df13909483e4d95d38430c4925a89d.png'
	image = 'https://cdn.nostr.build/i/f264302a7ea8072a997f1abf5fe27b6cf755825fa1abae22e2c4d8cbcc65bc58.png'
	image = 'https://cdn.nostr.build/i/65ee830af86c9caf571c0a47b4a41b7d6e41abc7e7eb26959228d865ebc48b53.jpg'
      } 
      else if (pubkey === 'e642ce7f99aa5df3d5596264f7f25689a2c33a7d435648618ff272353e7245f0') {
        image = 'https://kojira.io/twitter.png'
      } 
      else if (pubkey === 'f35203e4590915d50ddfaef040445c6cd2999c22490626e0495fccf5b51c19c3') {
        image = 'https://nostr.build/i/nostr.build_1413e5f491825de6d74cd9302631cff4595236c64a76519885a0e6869d7b4a0b.jpeg'
      } 
      else if (pubkey === 'a91875536bf0ecc6455fd165c4628379bb99d829f457711c568e89c32932a608') {
        image = 'https://ason.as/images/asonas.png'
      } 
      else if (pubkey === 'bf7aeacb0afd45653d05f0f7bee7c743cfced76798b90febeae2c7234ba6c11f') {
        image = 'https://nostr.build/i/c06783e0f4be7c1d65d8aa24173673c75dd5266dd179f715af01ea492796228b.jpg'
      } 
      else if (pubkey === '77b83da207aa98f3fcaf293c8d3b7beb15e812e937d79104670e4ef43f6ae0e4') {
        image = 'https://media.unnerv.jp/accounts/avatars/000/000/001/original/d53dd7b3255a6f46.png'
      } 
      else if (pubkey === 'aef07432f992df3f27ae0e6661be0c69246700520eaccfedc77ff32b1401813f') {
        image = 'https://nostr.build/i/d6d5dbf5606898ee61a166a7d519e19b92f4ccaadf0f45d1e11148048731b6e2.jpg'
      } 
      else if (pubkey === '0a2f19dc1a185792c3b0376f1d7f9971295e8932966c397935a5dddd1451a25a') {
        image = 'https://asaitoshiya.com/images/avatar.jpg'
      } 
      else if (pubkey === '85c7d87239db446536592e4f9762f705cf896faf602d1ee6a1320b716527fa36') {
        image = 'https://shirasu.blue/image/icon3.jpg'
      } 
      else if (pubkey === '7590ca6ca5bf1fb20cafb23eaf783e890ec0adcd77596db29007d5ff73b5c253') {
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyY0DR-iZ6sOB-Q8f2CsW-8oJF2XGO5L51w&usqp=CAU'
      } 
      else if (pubkey === 'd80ec9007e49bf8fb8717284331a94d5df52cbbe07a3e82c79177d2941120286') {
        image = 'https://s.gravatar.com/avatar/672ee2598bea695496f11022a9a9c4c8'
      } 
      else if (pubkey === '8232962f38fdaf63e11d1a932afed31bde00787ce89d00f0b840a08cdcab3860') {
        image = 'https://nostr.build/i/d3ab90aef3dbe354636dcf4a5395cdcc5bf6d3cb3040b1b309c1689c03ca67d9.jpg'
      } 
      else if (pubkey === 'd089450fdfdd8ac572276b19f70f82573af4a24ee651d31ae6341efb3bfc903f') {
        image = 'https://files-p1.a9z.dev/p1/70a4b357-7896-4b58-af89-2a5e25ddf7ea.png'
      } 
      else if (pubkey === '94720543c8597d795957f0581452a3c7b6ca8967a5581f9e0a77be1e5e578945') {
        image = 'https://nostr.build/i/4879ef3dc95b72757be60769ef77aca4d0ba7ac498f67a6671836a3a5f90805f.jpg'
      } 
      else if (pubkey === '5fa7f3f13789a0ca94636b9257771ab9181175ff7627794c1fdd5c2f2090955b') {
        image = 'https://nostr.build/i/nostr.build_a8e309be0e6812d6103330bd2160840afade34cf3bbea4e93229604f2722517d.jpg'
      } 
      else if (pubkey === '9c964f04725d4b6973588ee52f999b7de44da690503e9c12404532fb1ec95863') {
        image = 'https://nostrcheck.me/media/public/nostrcheck.me_2154277332672007861688496813.webp'
      } 
      else if (pubkey === '494e1f5495c0c70c0ef0064f2d524e25f62f28cba617f26d52f67e0dc48fa1fc') {
        image = 'https://nostr.build/i/9721b82ecdd6b9867ba111b61c94bc3ae06570aa38b20cef834dcc48cca4ddcd.jpg'
      } 
      else if (pubkey === '37d3aceb49744657d8a58b2752d4cc25dfb030a270b66dace53445f0dd6f15a4') {
        image = 'http://nostr.build/i/df6676bee3ef54004c222a6d41497ac0d7c5ea85cf1381b5c97cf43600f77c11.jpg'
      } 
      else if (pubkey === '29bbd9db6a5d0c18f38e356fdab3f85843b474c555e77dac15b161bfcbf2b9ed') {
        image = 'https://i.nostrimg.com/8fb50caf4f55926f51ee65981c62eccc1c41f27784ebbfec935843375b87f269/file.jpeg'
      } 
      else if (pubkey === 'b52e0dd9a69f766f153d704f25ff9e41830fdbe8e5ce7d419192f72a1e626d89') {
        image = 'https://void.cat/d/6HWCfHXCnsUHkYcj2Ca4QR.webp'
      } 
      else if (pubkey === '6e29b00f3f75e9166f8718f19d1684865e0f77ebd23f38030405b4b356d1dbec') {
        image = 'https://pbs.twimg.com/profile_images/1552038499079323648/bVVJnE1n_400x400.jpg'
      } 
      else if (pubkey === '3a1c66a52624e8a04fc31ec58cf7637d706b34d4c8a5e6844a1c3417f1772e33') {
        image = 'https://media.minazukey.uk/data/e284d548-b191-4e3a-ac2d-71dad91b5dd0.gif'
	image = 'https://media.minazukey.uk/data/bfefece2-2864-43ba-bd82-711b8afee954.jpg'
      } 
      else if (pubkey === 'bd69d603165ff7f9bd478c8095087b8218f955dd8730580cfa64252492d647cd') {
        image = 'https://nostr.build/i/1ccfa0c28d0eb405b319e180655ee0297d4baaab3b8900aaefdc645a6c4e6a28.jpg'
      } 
      else if (pubkey === 'dfa7e1ee521e509da69f4961a8e7b94c47d5403db8c11c2dfb2e56c94eff2177') {
        image = 'http://zxz.html.xdomain.jp/images/nostr01.png'
      } 
      else if (pubkey === '93d09b3f2d36d212eef758f3e80313f98cf32a9bde0dc984fb1b4f6a37c1868d') {
        image = 'https://ipfs.io/ipfs/QmZF9jMdNj2dwZJP2WdbeU4AVfc7K1ZhY9wbC14e3BDZi4/01130.png'
      } 
      else if (pubkey === '42112b74ebce69cfcf891edc5a508963f4d1478a22027a319f6cfd03f7efeda3') {
        image = 'https://windows-podcast.com/kizawa-doya.jpg'
      } 
      else if (pubkey === '788fb457c3b76ed3fe3fb34efed1493c32213519d2f973bf231a24cf9af5aec8') {
        image = 'https://pbs.twimg.com/media/FoLMQxPaAAIb8UD?format=jpg&name=large'
      } 
      else if (pubkey === 'a8dee4980c2486b6f4919473f8edee5693c55fe8fd4dd784a12ef3566d3aefa7') {
        image = 'https://nostr.build/i/f72c8e2f39fd7072b6b984fcd9e98c687177e20a0d5841b4e5d8d57a1678fbb0.jpg'
	image = 'https://cdn.discordapp.com/attachments/682526024231419919/1127553186031484938/image0.jpg'
      } 
      else if (pubkey === '7c1aaae536ca1bede8ec3c0691445ac5737019aa60d27e851a9a02764cf83387') {
        image = 'https://abyss.fun/system/accounts/avatars/000/000/001/original/764504dfb39bc011.png'
      } 
      else if (pubkey === '7e30df96a172b2dbbcc3849e94aaf215fcf3b5d17f3db380ac877b131f6d8bd8') {
        image = 'https://void.cat/d/PgoLntr5ufWRXhY6xjRvFE.webp'
      } 
      else if (pubkey === '97818065f7fca788fcbbaaeed8647665b3b39f70e152f16d0386e18b2b06bc6c') {
        image = 'https://s3.fedibird.com/accounts/avatars/000/137/713/original/6cd6e4cb0ec28fd9.png'
      } 
      else if (pubkey === '2f99cadc6c618dab3650490d1a71354ba5eb7f2530a1b2006a60f14d085ee0b9'
      || pubkey === ''
      || pubkey === ''
      || pubkey === '428e4cd19875eb3a2e72748dbe658c98baf7b96bb1831f9d04de12ceb6061e33'
      || pubkey === '428e4cd19875eb3a2e72748dbe658c98baf7b96bb1831f9d04de12ceb6061e33'
      || pubkey === 'b3c73d1ba046c0c033f822dd14cc4517727e66e3e1fe0c7583e766da6106fc18'
      || pubkey === 'a476fdf9aa27efcf3a73d4613dcf2919b4eb49659fd82b09f2af669f9a6341ff'
      || pubkey === '743a076cfadfb3f827613362e8172828801b6573c9eb31063639734cb7b2d879'
      || pubkey === 'e1367008a2b8ae244cd24b6b4c828c7c52011250518b6eab9af9bd0d9499858b'
      || pubkey === '63a821be93e2df2ff6bf94f7dfd66a70cf4fc4c7be3146520c7c5cc414aba96a'
      || pubkey === 'ad197be15e24f2d6e045a6285b59fe26a8ed426087874318d846727d694fb2f5'
      || pubkey === 'c67be16fbee010dc4f4ce125fa355d727fc16c0536c5b126b3f666cbf896c1aa'
      || pubkey === '3c2cce74ef9aa10e7bcb83542f22536fa762193405858be6a226f0e3ccabc6d0'
      || pubkey === '51bc2d9506830cc54c62485197ac29f0c27472b3578f1f6de23dfde5b0dddc92'
      || pubkey === '6350a67786e163a6d305d6505897fbb5d03dc460559f8abb997db85ed0bead40'
      || pubkey === 'bdc9d37035a7b5d7c284ca3a02ad5a2152ef77331b423fbbb37f34e2be62f019'
      || pubkey === '75688de4c09c266af7912e0ced1032123bccd86b389b1bfa17dcd590c07b9115'
      || pubkey === '2fca316a7a258c3b304b00c2d3addd9f7517d047cce90058bdb85b2f588789c6'
      || pubkey === '3c9bed4412c8682f4ace6e02020a09ac68d1fa3328d9a490c7cf0ef975b48a60'
      || pubkey === 'cbd5e706de414c76aaec710166e821badd61bb79bac548eca72fcd7915458450'
      || pubkey === 'f0e285465dcab0936bfa1a65954ec399aab910daf367425e77730e28ae799f76'
      || pubkey === 'a105daf1be1f832969035c5bdaf31822fe803cd22ba8c36a43d2d69a553e4161'
      || pubkey === '0cde69a2c0a6ae2f99c9f33543b544e3c34d80ce6c313905371c80a971eb4e56'
      || pubkey === 'd6f4bc9e7a6c45f7aae7b08f24a778f0c0fc667a6470843c3cbf11affd75aaea'
      || pubkey === '4c9be83422e577afe5b697e15a3814f0eb14ef275f37c6db4d5f73f6f08977e5'
      || pubkey === 'c15de48cf896a0f0b9f340adbf121411cc0b298caec5c0317269a54ee78fb36c'
      || pubkey === '19ecf83f9f33e88c4e21cf1b5de5b55b314d3c427e7e638ab98203d20b59bfe5'
      || pubkey === '2826c6dda0cb5b72cfe20acb6afdddb48a6d83d57df1ea1bc8459b2ba7564887'
      || pubkey === '8356b514fb5fcc139ed236c3211871eb110c1d03effb3dcd961052819bfd7cad'
      || pubkey === '1bdab038c79ce5fad6c2937a8ce720805de00288faa7d0a9df906bc1f7bffbc7'
      || pubkey === 'd1bf5ca6326a5473df940488056e1e45f946f11eff65227e7900604a8e2b896e'
      || pubkey === '76b7f6b9f7931454cc4ff4d141ec47c6118a2ab81a3fe65f8700484bf851273b'
      || pubkey === 'fa83e2afc5057f0e91379ab1a7bfb95daf03fee3d38d4a37e2b7fd7883208b5b'
      || pubkey === '16c2ed48f38b2baa8a155a393fb9122e52241eb706292952fd539e599578e666'
      || pubkey === 'e391d40a3ee8882107f389995db3c3808bb5cdaca5e4ca907e822e81f03b5c0e'
      || pubkey === 'c2966c63a212de44f9ce2230beb5e5862461af159f7f517f43971cd3cd2776ba'
      || pubkey === '0146d1f1c54a9d0fb9a87e358edf3887dba8db2f2be351cf1f6bb9c752bd41de') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTg3LDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTg3LDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey === '97abe73da3bc3cf53e2124a29c504bf8c00076428baad6bb7515db5457bdd89f') {
        image = 'https://64.media.tumblr.com/28a6f442bf2b681149ceadef6f8e5d87/aa1eee94d8e9af44-1b/s96x96u_c1/d4be8aa5e4ce55b3ab835d100bb1802e65111395.pnj'
      } 
      else if (pubkey === '4d9b5710fa47f1a779c73be6198643d560e88502e9d8d505596217ce014a89e1') {
        image = 'https://pbs.twimg.com/profile_images/648809035769102337/uCRXV1Rb_400x400.jpg'
      } 
      else if (pubkey === '35528a2c756bbeccb262b6699db18eded0f021ec5dd9c7eed7fc54604cc54d2f') {
        image = 'https://i.postimg.cc/9FgQtYX0/80687-B2-B-C280-4-E33-B15-B-E0-A428-B518-F9.jpg'
      } 
      else if (pubkey === 'bca3beda28b31a1328bd805a7b87cead45b9d4c7e3806b58460fb4c77dc59f9c') {
        image = 'https://lh3.googleusercontent.com/Ky8cFffuLQU8_416VKGG0JgWxX4_PRNKuFyg5MAwzDSHvwncNJkF8H6G77AY0AunpJ83GTMbhnsMX-yoNUcISVtIlyrR0gdR9Vfjka8oaUw8XYC_kYuM4rhPgvkDs1cTJ_seHRVm27K-I4Sy5CjSKdWU9Sn2NX7GDspXvbdbV7Pmcx8cX8BYFzZGOGlimOwOBuRP0vbxZw1UP1w8VoTKDwY4Cu04o5YZeHNJc_EJIMcR6VIhIcT3ayaAX2M11rxLo8sRiQ4XYqyta9ECayOEBx3Gtk0Bsvmo3gWoqWzRIZN7vFhPnDa8Ttc1TVDcdI6N4zKguU7va-PMW3tnjiZuHaCjeFAMyBmA5qU-QcYqQxpCzI8CErEya8e4Li911g6WhHvleNHxvViW2BYscAkGo83bipMdLjCwE5t-1ZwNqPfq24OvP1sTqr58H86yFT3y9uc0E8GBk2ywhWAldAd7MyTMIHlpCRgFz_NloNFAreCyyL3S7tiBNeRTXb2mZh73W_np4IaLuNEKDmEUqdMVRrtWU2shNxSH3jKOy-Yen7nWUni1R9TiY8TAIxCYbLJlATl6-zkE5Rl7_MK9vhMNmlrqDqdjUXLw0nZIGgvpWoDbiwn1VO74fj7Prw7lIp-1HFxVBIMeqoxsD5eQirsTp4MihGHxV8hFphMIaKG74IAYVAwA_AVtk-shj_NIMfxiNfqZKGCJjYk96Z6xyuR0KAyN-QYdmKKYbCaEOfnmh884cVc5OMbOniJa7DyMiTbVxkTsnLy-1JaBo7gBy5JlErj3JisPht50lYqUxVLh5oowyU_-__Y45j7S9ue7eO1aErxC7bfYA_rqoZ_zpzcU0_NmUpGMv_kks5hiQTKvDYwXQkAxn2D9zDf_OSal7t_2Fh4KsqKpkTkJb6pZfow5TOyQHGuC3LO0uOPFXs2s5_aSFM62qw=w1047-h1046-no?authuser=0'
      } 
      else if (pubkey === '79a3b931c29d3f4bfa046b6a27d6e46932974b862d38b810d7d148bb999246dd') {
        image = 'https://pbs.twimg.com/profile_images/1453354169633370112/ZKXhCIVE_200x200.jpg'
      } 
      else if (pubkey === '49b8ef3695569590d7960e2744c80e1b375fb95112b4e635d99380b6ce779610') {
        image = 'https://dedede.club/de.png'
      } 
      else if (pubkey === '607ce78f713733ef1f13b752465936e59f4d6e8502cfdee52ac9b9a9dcc77b77') {
        image = 'https://data.cryptoninjapartners.com/images/10223.png'
      } 
      else if (pubkey === '9e3bac6175c6742bee9b35f890489bd17526fc83d5fc207b4907dd40bd139939') {
        image = 'https://ja.gravatar.com/userimage/46646215/61a906cf54de0aebf0f374c8f46af2bc?size=512'
      } 
      else if (pubkey === '4f0c7bc17227d99fcc4c38e438287fc34ad9d1664e5153f7c6dabe2dfd3d9432') {
        image = 'https://pbs.twimg.com/profile_images/1558137309236568064/VtotSzza_400x400.jpg'
      } 
      else if (pubkey === 'c215f113fc945accfdc7e55ce1bfb5f2b8845ce64b17d1b72d12a0bffdcfd982') {
        image = 'https://nostr.build/i/p/nostr.build_6093d83adfcb61ea995d9b3ce0a33dcca4f72789a2e188348c33e8fec3f407cc.jpeg'
      } 
      else if (pubkey === '9ccc69a691dffaae4beae38faab80b92c080519163c982d5efabd9dca136c7cb') {
        image = 'https://pbs.twimg.com/media/FoRDgsiagAAsn_f.jpg'
      } 
      else if (pubkey === '45a4e790542c29ec56c8c95fc7a7bdf66b4b2d0f51d4a01d563eda5361bee512') {
        image = 'https://objects-misskey.mewl.me/files/d7b149ef-054d-4541-ad19-b2be3ffd623a.png'
      } 
      else if (pubkey === '1ee7a625b1b3742655e416950e515b7d26af38d4d48a4883a4ab6ff8cead3e6f') {
        image = 'https://synthwave.jp/p.png'
      } 
      else if (pubkey === 'd9d3850f269d4c980b5f7a95e6b233747ab130d893b1155faf5a75bc8b2889f8') {
        image = 'https://www.shutterstock.com/ja/blog/wp-content/uploads/sites/6/2018/05/Ari-Weinkle-0.jpg?resize=760,798'
      } 
      else if (pubkey === '5f979dc0c65fdaa9315d6ae6383cc310dba390af62a6fdfcb2a16038a8e4ffb4') {
        image = 'https://s.gravatar.com/avatar/679801489bf87e6ece1ff4686121084d?s=80'
      } 
      else if (pubkey === 'ccb8e6a2cd1eb63081327037f7ce718d87f0b1601dcd45b8ed71c9af87d2cda0') {
        image = 'https://i.seadn.io/gcs/files/5fb78e500e90564c07e60c6fcc24f426.png?auto=format&w=1000'
      } 
      else if (pubkey === '70bfc44390a543595213573822b51753bf1c4c0b330f6dca46fbb1632dc4b284') {
        image = 'https://pbs.twimg.com/profile_images/1087681742352179200/ewAVQdL2.jpg'
      } 
      else if (pubkey === '2ad7cd0a24ff5f3c89423d6a6c00f5e968883f819ee36a50edd1a66903c55ba8') {
        image = 'https://pbs.twimg.com/profile_images/1622158109228806145/ZheboXYm_400x400.jpg'
      } 
      else if (pubkey === 'eb6cb9a1bcab855c17bfcfdfc6dd1d3b7ffd1a5635a006d35b216019e096914e') {
        image = 'https://pbs.twimg.com/profile_images/1604628357676601345/s0i0upR9_400x400.jpg'
      } 
      else if (pubkey === 'ddf91f097b876bbb1dccf89c5df37d84c6592f860822e2500c1b4dddd19a5959') {
        image = 'https://i.postimg.cc/rws2pB6x/F88-D276-F-71-A3-4-D73-8-A08-4-EFA73-F6-CA67.jpg'
      } 
      else if (pubkey === 'dc01146a4f803f9df5b34348e99bf0d28e09981238d3dff86b4e385c1730de23') {
        image = 'https://atccre.com/wp-content/uploads/2018/12/C-yp5xYU0AA4rO_.jpg'
      } 
      else if (pubkey === 'a483e032fe0b9489e3164a3adbc94c2d9cc66add9a228b863b812456b9636b6a') {
        image = 'https://komagabito.com/wp-content/uploads/2023/02/61FA7AFD-A6D9-47E0-9D58-F855EB797AD0.png'
      } 
      else if (pubkey === '8cb0b845bbffacc8ba6368442851266e74958069b05ed57e47cf6d99c5fc279b') {
        image = 'https://pbs.twimg.com/profile_images/1619598497715732480/k61fkhsd_400x400.jpg'
      } 
      else if (pubkey === '468b64396b27e43162e8a2b133a8e68c504ecb6cb57d590aa39ccd366f28d9e1') {
        image = 'https://pbs.twimg.com/profile_images/1614831661015011328/wbQfPy8j_400x400.jpg'
      } 
      else if (pubkey === '9899c1977aa11a1528d7afd452f9f14d2dca9af2e191422c17b2953fe65dc428') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/67885b9b1152c9b36c9f0dca18098aae.jpg'
      } 
      else if (pubkey === '4084b79e92f24978ac5107f4c78f468036bbcb538322a37de49b4adbce62fbe5') {
        image = 'https://pbs.twimg.com/profile_images/1574042069210800130/zZtiTscQ_400x400.jpg'
      } 
      else if (pubkey === '2506307d5dd8bbface18dfd7ad5d0bdf68abe21dfdd93b5b70d4422145cb0b98') {
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMSZQEPduNxeALD4cOp_-Yld--fFCyhO2RQ&usqp=CAU'
      } 
      else if (pubkey === '20a009f5575dc33c690c210873070cce7f4484e7fe9ba6dbc44ab1d988c2e81b') {
        image = 'https://tknk.info/3peta.jpg'
      } 
      else if (pubkey === 'e156159c67fe4aaa08dcfbdb5814c7c1aee0ff109c42086549c586ed23386427') {
        image = 'https://i.seadn.io/gcs/files/d7e07702e6a01bfedbd0197a9cde2a88.gif?auto=format&w=1000'
      } 
      else if (pubkey === 'a0476fe869d3b382f335547caa4f370b5a03d2c12352cde4b3bd2d9b5f7fbdeb') {
        image = 'https://i.postimg.cc/Gt6F2SPg/5-BEB30-DE-E366-46-D2-AE6-C-79575-D404-EB4.gif'
      } 
      else if (pubkey === 'fd7df7166883b4a30d307ab754902eff61a8507c52d6e08b736607a9252d0e78') {
        image = 'https://m.gmsy.in/images/accounts/avatars/000/000/001/original/457cf3036a06507c.jpg'
      } 
      else if (pubkey === '012526b2fc002e48c51fadd60208559bac76ae343ef8369bb17e2818112060ef') {
        image = 'https://pbs.twimg.com/profile_images/1355118453636558848/HqGDYfWq_400x400.jpg'
      } 
      else if (pubkey === '538b59b1a4cd7c3caa25ba3a203b3ba99993fb78b4a4728e8f74104b411bb278') {
        image = 'https://64.media.tumblr.com/tumblr_m772pu8lod1qa025ro1_640.jpg'
      } 
      else if (pubkey === 'b057ca7709ed25312cdd27df7306ebc73c80f41b16d25473aed416a44ee262c8') {
        image = 'https://pbs.twimg.com/profile_images/1402477457907666948/iCwg0ZlW_400x400.jpg'
      } 
      else if (pubkey === 'd533733e020b33bfa623c753feb79d7ccfe31bb796c5cc9ef952dcfed29898db') {
        image = 'https://nostr.build/i/nostr.build_82930c6df1bcd932cd0b0538c0e374eb12f6d408e30850d271baddea7c821e7c.jpg'
      } 
      else if (pubkey === '1f479a581574cd0b457b8d5e0884b50dd98f67f1f0fd9b91368557cfdb7f01b6') {
        image = 'https://pbs.twimg.com/profile_images/1607384092353654784/ejlhsEb6_400x400.jpg'
      } 
      else if (pubkey === 'f6fbf14b905af8435894a0885d1a048f05f6d7fb08ddd9f515c8671f8c240a6a') {
        image = 'https://pbs.twimg.com/profile_images/1449767815074889735/UOepMSI8_400x400.jpg'
      } 
      else if (pubkey === '09dfebda7886a8dad7c449db10c672d6b61e44100f22eb01aea58765ace56b37') {
        image = 'https://i.seadn.io/gcs/files/72a45be3e61ad1f80b8eb09dfa8d0b40.png?auto=format&w=1000'
      } 
      else if (pubkey === '778d3579340c2e436435dc1ca520444db98061cb9eea4dd83fb17ac8d1b2ab14') {
        image = 'https://www.gravatar.com/avatar/cd641fdf6c258c3144f44364bdbf4b90?s=240'
      } 
      else if (pubkey === '9c81769ae415a07c777134a1c49773f9494a9ff4d175c6ad9245e750e2b42240') {
        image = 'https://pbs.twimg.com/profile_images/2013956013/icon_400x400.png'
      } 
      else if (pubkey === '08273656349e7b088ad2d87276bdc0aa7777c4f45d16ce8b9cce145b764abef8') {
        image = 'https://pbs.twimg.com/profile_images/1552464444197769216/TKpxqrB1_400x400.jpg'
      } 
      else if (pubkey === 'adc569e7c69da18a87904df0deca700e452a2f116534cf8f5cfdb5ae4b015278') {
        image = 'https://wslash.com/blogger3_big.gif'
      } 
      else if (pubkey === '4186f9f1627c79e1a01c4700a85955988885b00f3f69befc9cae432e9ae2ee4e') {
        image = 'https://nostr.build/i/p/nostr.build_22a0133a1b9cb79affaa33cf8f5acfcb4da15158eeb5038a506c300cb391d991.png'
      } 
      else if (pubkey === '2baefefa1e5eed1a85fc3039ed484d52f420d97839c2578fdbcf5c1431f6f8bf') {
        image = 'https://i.seadn.io/gae/eFyurz9dPZ_2NICGBtJFCeb85GmFzV04QD_js-mf1wGb4U0-0m3uD2ecObtsU7TxxsQ2YGjcDoK-xnY9ECBeMGCjXZPXB32sp0DS?auto=format&w=750'
      } 
      else if (pubkey === 'd3b361f5be7393aebe02eaef42b80348992e5603cabf0b663a8d0635e4b79603') {
        image = 'https://pbs.twimg.com/profile_images/3266547381/2ee01f4883bbd2fb54f6e04c63566a1f_400x400.jpeg'
      } 
      else if (pubkey === '81d38469313088cce52b8a860711c21e7408860286bb3834a4d74fab717cde2e') {
        image = 'https://uploads-ssl.webflow.com/63c880de767a987f902e30db/63c8df133c5665165b699ba3_Commander%20Ludwig%20Von%20Nostr.png'
      } 
      else if (pubkey === '962f7e18d8b1953f956cb490f93eba9dc6cd6356d9d2a172dcb2dfaebc6fbf12') {
        image = 'https://www.sara-mac.com/wp-content/uploads/2022/03/th_DSC_8596_LR6.jpg'
      } 
      else if (pubkey === 'e4b0ed5dc8c0a63a9fb98f13e9088e659a7cbe5c5dd2a816f20f009ccc9e6b87') {
        image = 'https://nostr.build/i/nostr.build_38015315719c17befb4b95fe63709638edb068821aa57b73741cd994b972f695.jpeg'
      } 
      else if (pubkey === '7db48c7318deaddd57e7d796898b4aaf591f592dcea16dbc47f8c31ea724345c') {
        image = 'https://pbs.twimg.com/profile_images/1640189236132610048/2IiLiRtd_400x400.jpg'
      } 
      else if (pubkey === '56474a966770569b589f8a49c1dbd02bdf313fc7ff6bd2a1dd26f67fcfdede2b') {
        image = 'https://i.gyazo.com/fb35e845c13d911ffa217eabefdb0f23.png'
      } 
      else if (pubkey === '00245e49a92c3421a11350196c7582fc81aed4867677a74d75a76d5e2c3481fe') {
        image = 'https://pbs.twimg.com/profile_images/1609575773282729985/SQa5WYzw_400x400.jpg'
      } 
      else if (pubkey === 'b82bf971ccc74475bdf5932d2458ec9a32738415a0c49ee43adfb8ac7f799eea') {
        image = 'https://nostr.build/i/84055a0d4065e1bb15811268d4d9ec98a0ae9e33f7b6056abd1c5ddcfc0b7135.jpg'
      } 
      else if (pubkey === 'c8912fd18818507ecb2bb0a6ff1f13731aa9623c14cb23c0b0da6e2879de1781') {
        image = 'https://pbs.twimg.com/profile_images/1616814428212834304/qSud7QXv_400x400.jpg'
      } 
      else if (pubkey === '46b2e27e1bdf6337ab5c70362375ea031e4494b2cdd98b9a5f61a9010ba20a45') {
        image = 'https://pbs.twimg.com/profile_images/556450376866476032/3uMz_BXw_400x400.jpeg'
      } 
      else if (pubkey === '193a58abd9789e94f13f0704130f9d6ddc89d0b1af7cbed6e41eae8603c224f3') {
        image = 'https://pbs.twimg.com/profile_images/378800000557791204/b4f83a45aa2fd0fe522a5302a7382ddc_400x400.jpeg'
      } 
      else if (pubkey === '0f42f85d10c8eed80a2401a3d2663b9635181e8c7b2a80518da248c511e7327f') {
        image = 'https://media.mstdn.jp/media_attachments/files/109/815/386/351/500/624/original/615005e46ab1e31f.png'
      } 
      else if (pubkey === '2bae2aab6f3fb73dfd45a414611903553184469c9e4df29860afff9529761b06') {
        image = 'https://pbs.twimg.com/profile_images/969217088580497409/-1HTcn9A_400x400.jpg'
      } 
      else if (pubkey === '97bca61148345ad349a8be839c465bf1d71d89ead5c02f162d3ba04d6259aa48') {
        image = 'https://coasa.github.io/resource/sns_icon.jpg'
      } 
      else if (pubkey === 'cc85dde8f8c35c4bbcd0fa4cc72c79f2f327cadc310feef0f4c6786881bc2c08') {
        image = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT8X8KIQbfmPVooTMSbT5HeWBoYV7COOq5bBsJYySrLKv0aXNNrhJKIgWq39q7j2kxu8Jk-HVs6drSIEXQ7PRbiwPZ1z9WeZvVQKIgKhfaOvjgiS-wCLfQ2DmHkRKqwRU8Uek7-EiHqUQbR0X15Lh7JguTISundobGAMX7v0qpu1GN8e5gXPRr2jho/s320/Do5HwBKUUAA24np%20(2).jpg'
      } 
      else if (pubkey === 'ccaff0a153b163fe4f55047957f644006ce50d91a3d4f42ac17c496ac1ec1e99') {
        image = 'https://korinvr.com/images/damus/ProfilePicture.png'
      } 
      else if (pubkey === 'd1dfbcb456e8c5ee142b2cf79d9d83b6cd49efa5822fc4f1afcdf2db6689518f') {
        image = 'https://nostr.build/i/db2101743503c510cdf34de79a57fb7602b5a13851a6358f21bfd92123b20173.jpg'
      } 
      else if (pubkey === 'b61289472dc4c7448330b39f2df60cf1238e841c2eab0d66b8e3205e9f9ad756') {
        image = 'https://www.keitwo.net/images/nostr_400x400.jpg'
      } 
      else if (pubkey === 'b300f5c406c974f0b817ba939be1f9c110d571141c6036bd41e7a201ad149451') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/a3313f0fc93cc9ff536aa41ffc52a740.gif'
      } 
      else if (pubkey === 'd2c52f54503ad0cfc1f4ce6e9bb9f7c925e191f0b58ec861290af2814970a67f') {
        image = 'https://void.cat/d/Xjo5j67LiXLPcfDvAUhT9w.webp'
      } 
      else if (pubkey === '854d69c654b4fddb06af706fa421d869f7db480ed029e64594462924b49f586c') {
        image = 'https://i.postimg.cc/rsCrM2G2/FF9-D456-B-386-E-4-AA9-9-DC0-593808-FE2659.gif'
      } 
      else if (pubkey === '6ed5f93e577df6930e4d157170227e5bea8829aaf171be87f99f442d7a300270') {
        image = 'http://simple-palm.com/yamada01_bbs.gif'
      } 
      else if (pubkey === 'e6b196d48e0ae9a988d0352fe8e5725b48d67b931847ed4563bb6948e43f507e') {
        image = 'https://pbs.twimg.com/profile_images/995131310032044032/6EeiS9xK_400x400.jpg'
      } 
      else if (pubkey === '0eed010de74d2440a7a32e747f7e3a7d34702f4a054c8a83081853ec9167546b') {
        image = 'https://nostr.build/i/p/nostr.build_81ec405888901dab83a01c56fb8307a285e0c33bff21534ffd6cc9f180f3a595.jpeg'
      } 
      else if (pubkey === 'ef648009b38166a84bf7446ec010acceec607e3386f6ae14122187b64ba1fecd') {
        image = 'https://1.gravatar.com/avatar/87197c886a3c07ded95dc7e7e67b2c58'
      } 
      else if (pubkey === 'b62488bdb38d065c20dcfbcd4970ceacdb2470732f78798333aeed9fe96fe6d7') {
        image = 'https://pbs.twimg.com/profile_images/1371074918977302531/aFNz74DE_200x200.jpg'
      } 
      else if (pubkey === 'e84d24df7e7f12f52663e09fbb94fb64e4cff5c3fa8bfc4995bab7398292434d') {
        image = 'https://pbs.twimg.com/profile_images/1512065176618823684/Kcp8cjj1.jpg'
      } 
      else if (pubkey === '3cca5c6644706ce940c6e8c80c8bef2a3c8dd08ac5c2fd4d7466240fe6715b22') {
        image = 'https://pbs.twimg.com/profile_images/944562922616864768/XCzgWrjD_400x400.jpg'
      } 
      else if (pubkey === 'c4412d37c9632e8c3e50ff4fc11092bc7a75a69005fba434df87be306deab2a8') {
        image = 'https://i.seadn.io/gae/uNkgN50tu-0yNDeaBRbW0-x3EcVnm7TpZ5j4fBz9ykcDT9CLOfNOKAG1SVP9bH0WaoTdTMYUZi6aMpB8DqvLXjwlcYF2SSw20u6S?auto=format&w=1000'
      } 
      else if (pubkey === '731d5848e96a9dbe107dd95e357072161dcfc08eaf39f64b038a2e61df125c63') {
        image = 'https://i.seadn.io/gae/kzaDtBTMMq-k5H-MmqsbZgKXB3QLLqaxWNCWeYDFEcMNwCK7tHOokvyQJUzMTqyfScCuKrLsWZEHLdb0Rh4ANKir27-I-F9ISPiQ7OY?auto=format&w=1000'
      } 
      else if (pubkey === '7258fc41fa942d956314c132176edafce8e9c2ebb201e909beddcab68204183d') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/002/273/original/29a53ddc7efdbd4f.png'
      } 
      else if (pubkey === 'd49e7af4c7e2676d477d4b384d945ba7b2496bb81628b483d5f8e90c9bb98433') {
        image = 'https://nostr.build/i/nostr.build_aec42fbfbbf4448ed80858fee3de826cddb8ea4c9045a3287fa896cf78ad4b60.jpeg'
      } 
      else if (pubkey === '50a356c769cee3291087bd5735e0eb1d85e433fa775bc2a315aa9552bac3e4e6') {
        image = 'https://nostr.build/i/nostr.build_1bd3f47b212f7c979701a0613a8909845ac3b988fc54ddb030f708dbce23624b.jpeg'
      } 
      else if (pubkey === '0b0a18e5bcd801ed6487f62b29bc6777a52d9122360d441e3c68b1f1d0c55672') {
        image = 'http://yuzyk.sakura.ne.jp/taneyuji/wp-content/uploads/2023/02/IMG-7557.jpg'
      } 
      else if (pubkey === '0a177ac462c0f76a68daea46bd660d43a36cf063d3073f64d815a57a3b1ec5e9') {
        image = 'https://i.seadn.io/gcs/files/9655bc638348cdc4f3ab03f179f347fd.jpg?auto=format&w=1000'
      } 
      else if (pubkey === '68b7cc052e8b53d54f842b5e5449370b73be224a9bc9d2813fc2a27b629a21ae') {
        image = 'https://pbs.twimg.com/profile_images/416020595348750341/JhbNg_Bw_400x400.jpeg'
      } 
      else if (pubkey === '2d4f92faf2c9837bd18d8643d6527c442ce2dad76f957c7fc5cbbb9d9460ab38') {
        image = 'https://pbs.twimg.com/profile_images/1603696551557074944/CHzBQuBd_400x400.jpg'
      } 
      else if (pubkey === '92f57409a249b7e40b1f3f146a00bf10adf7f1593e81584510b75145dba1934d') {
        image = 'https://i.seadn.io/gcs/files/d4574aceecb59c45175794c36d8f6641.gif?auto=format&w=640'
      } 
      else if (pubkey === 'c403a1554ad6434ee5457c094ec38d189629ac9b8ec7dedabd0d49f22706ee99') {
        image = 'https://pbs.twimg.com/profile_images/661511319972020224/nfbrIzrA_200x200.jpg'
      } 
      else if (pubkey === '8d5a54462288898e945bae5d1ce39510a6e6f8e45edfd5057e3c6556f68b12cc') {
        image = 'https://i.postimg.cc/yNnbvLh3/day388-osakana.gif'
      } 
      else if (pubkey === 'ca558506f413fbfb2aa441938b3411301f571d5c6ac89bb460f66daa1f0ebd88') {
        image = 'https://pbs.twimg.com/profile_images/1538858332609343493/rAI84sK__400x400.jpg'
      } 
      else if (pubkey === '015788b9582ad1912d6b1b6c10f2f4919543d17cbc2f42f1feb3b7440fe9041a') {
        image = 'https://i.seadn.io/gae/McQkAk806I-lzieaOWqv8HtedNp6l3FBeXYVtKizhsYhnlF-a7Y0KaamKoZCsZdnq6c7-zrAaTAy98fWmxLDf0xJNZypOwYAtkC36g'
      } 
      else if (pubkey === '85c07566801e426ec7780704be8ec940c726891c49ccee2b89561464d87253fb') {
        image = 'https://pbs.twimg.com/profile_images/1591958095596593156/lou0RgGc.jpg'
      } 
      else if (pubkey === 'bc4bab4db5114f1de918347a90d1720ee04909b3925c6c30363a04ca81a30b74') {
        image = 'https://pbs.twimg.com/profile_images/421673248/DSC_1002_400x400.JPG'
      } 
      else if (pubkey === 'df71f7e52e7e775ae949e9c6bc56583749070b7bd279d26ec76dd24b08fcf892') {
        image = 'https://jp.kumi-log.com/nostr/face.jpeg'
      } 
      else if (pubkey === '8f52e311f7884de816a80cc1dfb1e6d5865fdc10027ca56d7518889c2c51d204') {
        image = 'https://www.baconjapan.com/wp-content/uploads/2022/09/bacon.png'
      } 
      else if (pubkey === '0bc3abc8e345a76510b2317343c91792132db7105f24b55e2cf3f97e29616736') {
        image = 'https://pbs.twimg.com/profile_images/1565956746954539008/mvKBLeEF_400x400.jpg'
      } 
      else if (pubkey === 'eed4b305b7860bae8e9817dd74bb695518965755099cfa718993b4a42d92de36') {
        image = 'https://pbs.twimg.com/profile_images/1317146822/IMG_0019_400x400.jpg'
      } 
      else if (pubkey === '103aaa1e2cc9c0f71be0bcc78a4b1d91822a815052bc126b957e2f558ab8ab35') {
        image = 'https://void.cat/d/AEFqYtsSnYGJVD3TkbrieU.webp'
      } 
      else if (pubkey === '10774c933ef47f9ccc38394a23d13309ae153b8824e3b380bc6fa67274d470f1') {
        image = 'https://i.postimg.cc/7L9f6k5H/5-E8-E9-E88-33-A5-4649-8-A6-E-110-C9-EA73-BD4.jpg'
      } 
      else if (pubkey === '455b046963c61244f33161021b7b1005b30d64ddb9a384fda96c08c53ee4def0') {
        image = 'https://profile.img.mixi.jp/photo/member/66/24/16624_2530387335.jpg'
      } 
      else if (pubkey === '04d7c67649b974c839dc5fe2bcf0efee4b31616804036d1e80ef553de0ae6574') {
        image = 'https://pbs.twimg.com/profile_images/1570024585814503428/zl5AnmsL_400x400.jpg'
      } 
      else if (pubkey === '3d6af555354838c25759ad53a423eca2de0260a48bc8c35561350e50a3fea410') {
        image = 'https://pbs.twimg.com/media/Fnw2mJ8aEAAV4eE?format=jpg&name=large'
      } 
      else if (pubkey === 'af4e9c2cb4a4a91379a3dae45e4814822850da456b9e63b7caaff7ffd3b695a3') {
        image = 'https://i.seadn.io/gae/6lNaHKDuUBAj06IKOa0XtznkestKjoqjKEZwPV77EQt7ZWdNdVKFY9FHltySGkQ4RNOJ3d8IqVwSmZarwXWb4smQAXoLsntiRuj7?auto=format&w=384'
      } 
      else if (pubkey === '3118c904c8416257e7d891c24372c480b4b0ec282d4958e3610f169cd54c9f72') {
        image = 'https://pbs.twimg.com/profile_images/875532903140139012/d6ZVpCbw_400x400.jpg'
      } 
      else if (pubkey === '3ffb0393e54e892df8f2dd0f6f108dbe4833c998410f9c56b0e85c96f5c3b58a') {
        image = 'https://nostr.build/i/p/nostr.build_d4240fc3bd0c96c407cd08712a9d3799afd53dd0a5a49cba4e7b94dc7f5b218b.jpeg'
      } 
      else if (pubkey === '66a2fcf2ef49f17cf934519ff5e960110d17b3f4ed65ae1c5d3fb736e0c28705') {
        image = 'https://i.seadn.io/gae/Hm0dWKm6_NX5FiyC67LVxCJ65Vv1Qsfcb4ELKei1cNmiHqkxsX37LQMZhxbUQ_544rAcGCVqqXulT_ksk6piHTUeSS14pZ4-G9Sx74Y?auto=format&w=384'
      } 
      else if (pubkey === '200cb575240c6c143be36095b286b083442759ba2dd95b5cef9bf057c726d535') {
        image = 'https://i.seadn.io/gae/uJQusL1YZaxWzcNjiDObm_S3-C4xzv63MXnKzaqy6gfUZn-iiGGZF5DmVM640EGDBQhPPI2Lz4q69jFgRYZ6AjhOrgyU2j1dFzVRiag?auto=format&w=1000'
      } 
      else if (pubkey === '3a6a019e5f6987ff77be9bf119072d6e6085fcb67d9f451def47ac9ef07c8579') {
        image = 'https://pbs.twimg.com/profile_images/1286239675582095362/iqLI6kJB_400x400.jpg'
      } 
      else if (pubkey === '35f2a90db2e4936fa9dffd911781708354a74a7ac9c228acbe504f7e5d3c2a30') {
        image = 'https://pbs.twimg.com/profile_images/1591957907041566722/kT32mgkI.jpg'
      } 
      else if (pubkey === 'fe865ade7b3699def8d4c88a40c2c9a52cedb41c3596693133374a0aa629ec2d') {
        image = 'https://i.seadn.io/gae/xQdrk_QEvJLVpBKXXQT4WlW9fF7KQbqf_vOcUrsjLxLuUlfsRaMIluX3BgcxHwEunmDwuomXQTb1KGoZy0HYAfplJyQP1wjVNgtumg?auto=format&w=1000'
      } 
      else if (pubkey === 'd9b1af9e7a6a1acbcaf540f70b54072dc263e2e126894f4381744360b76a3740') {
        image = 'https://cdn-ak.f.st-hatena.com/images/fotolife/d/dacho_rider/20230208/20230208092926.gif'
      } 
      else if (pubkey === 'aaf4b371f893ce06e107f59bcec0fa5c4cad8e9f03a3eeb178654a4c27bc1b8b') {
        image = 'https://pbs.twimg.com/profile_images/1428948873/IMG_5073_400x400.jpg'
      } 
      else if (pubkey === '2dff5832d51ea762e055780b51171066d13ae34d8fc11471c57ba168f0a848ab') {
        image = 'https://nostr.build/i/p/nostr.build_5990a0782d9578ec69eb5f0477f3e868bed98c533fb33329da03c94ecaf989df.png'
      } 
      else if (pubkey === 'ddd67c955926deb8a84a6f4d4ef282701e56a187f079748db05087766d349891') {
        image = 'https://i.seadn.io/gcs/files/88fe1052538b443e4c1d8eecc8953cdd.jpg?auto=format&w=1000'
      } 
      else if (pubkey === 'bf182f2a6e99335487373021ed235a587933ab5186a459fe29462c50821bbaec') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/56f01c86f3bb63e62ba47b71d28f328e.png'
      } 
      else if (pubkey === '3e4ab889aa950b7eeaeacd5f1544674329a831f5fccd82b92638dcba3f931f27') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/ec10ab93b4c0117244654f0344ea1890.gif'
      } 
      else if (pubkey === '8fc8e107b871b3febcb8f95e092aba8a6505f1650b176a2dec5f0a8844a4d5db') {
        image = 'https://www.gravatar.com/avatar/e4e01fb8b7105e61e3876224139503ab?s=400'
      } 
      else if (pubkey === '585d24421ec202c5f3e3251966a9078f2651fb2fc1a341db2ce3f959120cb8a5') {
        image = 'https://pbs.twimg.com/profile_images/1610593065261228037/GLWdRbjh_400x400.jpg'
      } 
      else if (pubkey === 'd6a713066c782499275d6bed4ea42d253b3c456eda95e01694e5e5ccda3377f7') {
        image = 'https://hocuspocus96315.info/img/p_ico_001.jpg'
      } 
      else if (pubkey === '2e1133b131bd6818b248c68768cc8f345b8e478ee42a237c53742fed419c9b92') {
        image = 'https://pbs.twimg.com/profile_images/1589902821112967168/-zsLNe7G_400x400.jpg'
      } 
      else if (pubkey === '834c0b53c8b33e0ad50fc4524e11f0506ac64fed2be7629e69512c9d2da74369') {
        image = 'https://cdn.discordapp.com/avatars/329458340700880906/51723cf6f1a635dac4b5c89660dafc39.webp?size=240'
      } 
      else if (pubkey === 'cd9947da020a5c8b567fc3e9024ffd1d8154d145019843296c6fe21f6d159a64') {
        image = 'https://pbs.twimg.com/profile_images/793003059446022145/giajBZy2_400x400.jpg'
      } 
      else if (pubkey === '591ae16f38dd23dbb11ff699dd10c9c6431c639efeb9b15e261c0a6343bc1eea') {
        image = 'https://nft.aopanda.ainy-llc.com/site/app/images/7217.gif'
      } 
      else if (pubkey === '1918c241f4ed71c7d98f67318c5fa7f23b11fd352a49963d5d0224b204c35730') {
        image = 'https://mstdn.guru/system/accounts/avatars/000/090/309/original/94ed15208eccb366.jpg'
      } 
      else if (pubkey === '58bec9e31dbba34658d7dfe46cb177262de4e4b74b8cf93b3268bb3d9d893206') {
        image = 'https://toot.iwh12.jp/system/accounts/avatars/109/580/700/739/219/734/original/2c6708da281c55f5.jpg'
      } 
      else if (pubkey === 'bd3eebab10ef0f522476d0bb8acaf261562de3a8bcea3496ef4783269dc05f48') {
        image = 'https://pbs.twimg.com/profile_images/1036087737898622976/D8B97aK2_400x400.jpg'
      } 
      else if (pubkey === 'b8fc80e8a00f89927f0d30552747f07b628b19b08147cd742a68ff4e4f4d12b9') {
        image = 'https://pbs.twimg.com/profile_images/1572835980239052800/4GZ3HJDU_400x400.png'
      } 
      else if (pubkey === 'ad346d8bfdd4f667c534a790194a4db07740bf971895e782d2dd24672018d27c') {
        image = 'https://nft.aopanda.ainy-llc.com/site/app_lock/images/6491.gif'
      } 
      else if (pubkey === '72db9609230195ab5790d3b6cb8072e51d111a2bb28c1a678ba17d3837e253ac') {
        image = 'https://pbs.twimg.com/profile_images/1446049605263577090/Q9ryJT3x_400x400.jpg'
      } 
      else if (pubkey === '9dc4bc39579d2f9f3a60ef916861237acafbbf2bd5f67dfbcf9d708879bdb65c') {
        image = 'https://sekoiine.com/wp-content/uploads/2022/11/harapei-icon-1.webp'
      } 
      else if (pubkey === 'a755fc793408cecce269ba455c3fde2a8e503884f9bc94d9a28f7fa4c2cba450') {
        image = 'https://i.seadn.io/gae/_HXhTV5LVUKravrXpP-BKIvYoNz9ACQeEJpvr01lSw58LfwJ7NxLPqL_AVLoJZlu4czS4fditENaozT8dPUPZ5wGellFxINsmanWD0U?auto=format&w=1000'
      } 
      else if (pubkey === '4212c497aa859fdde88d3e22b177a239ea2058dc1b093f5ae30c1d1280e11c03') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/6c3d6a874d89f1cbfe6a10815da6ea61.png'
      } 
      else if (pubkey === '60171956daffa619fe0643aca63ce7c70facc8dd197f712edc7e0824ee9582d8') {
        image = 'https://pbs.twimg.com/profile_images/1356949647370014722/8XIPuQCU_400x400.jpg'
      } 
      else if (pubkey === 'eaff921a242d4cb8c1e53a255a3cfb05cb845243ed9abfe4f6b6a5fec743c15b') {
        image = 'https://i.seadn.io/gae/efEMN3Ra7OA4ievQvoKJU8BgpG3bqvctQjSaf0mcIMLukCI_aW41njo0N--Xqgy6a0vOArmVCLkItF1u9oqrqK-2B2xc9jSIRpA-?w=500&auto=format'
      } 
      else if (pubkey === 'c4b5375acd52c75aadc355e41c9b268d9ebadd9ab774ebfa29ead689620515c2') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/341/142/original/45061c1611ceda3c.png'
      } 
      else if (pubkey === 'fbe1de3aec58cb71fcd59497ef18ec0e56404a3133c8700bef67daa64ab6ecd5') {
        image = 'https://ja.gravatar.com/userimage/11322208/956890abc5b39ee34b7a2b182c5e1a4a.jpg'
      } 
      else if (pubkey === '636758247f2d7627140b063fa51e1b438ab6780b76e549ae79c3bc1af0c499cb') {
        image = 'https://i.seadn.io/gcs/files/dbf94e0fda884d71d623dd1823e0c144.png?auto=format&w=1000'
      } 
      else if (pubkey === 'c027ebaa43e9a57ed266e7b16f1fe5ba2ce9d5aa0b7e781182fa8b9fd1e06019') {
        image = 'https://www.gravatar.com/avatar/b740b4b6ebd411a24c3ea0dfac44f04b?s=256'
      } 
      else if (pubkey === '82306d16fe8c540a8315ef84a8b8ab6a9207580a6d5dc4b70b58c301ec912da7') {
        image = 'https://storage.googleapis.com/kazu-public/funwarioisii/icon.jpg'
      } 
      else if (pubkey === '9ca6c386e25af7c630f6b3b4cfd202f1dd8cce6330d7962da5f94980ec65adb1') {
        image = 'https://pbs.twimg.com/profile_images/1591271993592029184/VhyH2zdS_400x400.jpg'
      } 
      else if (pubkey === '38d49c4ea381d48656713aea2cac9123a467367c12ab08ca73f4deb9ac4359dd') {
        image = 'https://void.cat/d/Q1gkjpKDM4PbskhcLVw6p.webp'
      } 
      else if (pubkey === 'dbbf8baf2a7953373a9719c0251569bfc8a5b602724d301ea1a5baea87e963a7') {
        image = 'https://i.postimg.cc/c12vKzRq/577205-AF-F161-46-B5-9-A1-A-71-C0185-BF1-E2.jpg'
      } 
      else if (pubkey === 'f77c4cb7b19af3ce1abf5184346b981dadf3ef2020ad4e026fa579fcecdda2c7') {
        image = 'https://proposal.ducr.u-tokyo.ac.jp/data/public/researcher/00/00608/608/face.jpg'
      } 
      else if (pubkey === '32d249fec6569f7f024e8e774a536247c4fd05215c95a518004078ad4c1b2e9a') {
        image = 'https://pbs.twimg.com/profile_images/1591485801485172738/2-Cq_CJc_400x400.jpg'
      } 
      else if (pubkey === 'd187f8063f285eabd09b10f08a378e032956839331b75383d60aabdcd4138889') {
        image = 'https://i.seadn.io/gcs/files/8129527b482a8a32148c6a11fd709ae7.gif?auto=format&w=750'
      } 
      else if (pubkey === '57c9eafefefbb02581963ab392ac509545d5b04f02ba1a8d0325adffd2917d4b') {
        image = 'https://pbs.twimg.com/profile_images/1313157015/fuuri_2011spring_400x400.gif'
      } 
      else if (pubkey === 'b0d8dc9197a8aff7ba0e95951e71365bbbc1891e23e74c4eab6f79f5a80c182f') {
        image = 'https://i.seadn.io/gcs/files/2280b44dcf1fe7f19112f59974a91370.gif'
      } 
      else if (pubkey === '8af9ee11fa672490f4d1e558fa006000a728529801f39d9e1d616954057ae452') {
        image = 'https://lh3.googleusercontent.com/jnQuBzhRsE3Mw0BJggNxO7D5HwQk1gci60Hki4EGDQq5gQMPWAPziEssC_L9xjKmY0eeXJk70xJQer4brdu67851E95viQ1AHQW_'
      } 
      else if (pubkey === '36ff011770ecef8530721a967bc3e8778e08e646b6c110e47a5d6ec9ce78f3b0') {
        image = 'https://pbs.twimg.com/profile_images/879403741425811456/tkDTrqNa_400x400.jpg'
      } 
      else if (pubkey === '2eb1ce60a56b1cec05b0efa7fc0fb8e95f6d464d13fd41b1b84ae395bab102de') {
        image = 'https://avatars.githubusercontent.com/u/8683947'
      } 
      else if (pubkey === '37b8e54768bbbe8bf4ab36fa2bd774763814c7d725831d459800909555a86990') {
        image = 'https://i0.wp.com/ayano.me/wp-content/uploads/2020/09/ZF31cnAX_400x400.jpg?resize=400%2C400&ssl=1'
      } 
      else if (pubkey === 'af3dca0fdf65d84d978e746789c546bd28aee00cab8d4ca89f1904a21309354c') {
        image = 'https://openseauserdata.com/files/5cf4f433adc829b73225f401f24d8385.svg'
      } 
      else if (pubkey === 'f89230010e3361ba2bc8e62541050baa00e3685f2da8a9413998a2220891b422') {
        image = 'https://pbs.twimg.com/media/FoUhiW-aAAA0Kxe?format=jpg&name=small'
      } 
      else if (pubkey === '2e4a5828cb97f4746f0e0f3aa51887e7c54dd0a7fc140788d38ee5f71f64cbe9') {
        image = 'https://pbs.twimg.com/media/FoImK5UaMAAji6V?format=jpg&name=small'
      } 
      else if (pubkey === 'a3e5f8d020a57fd8f149467745dc457baa5144dbc07c43db122653fb0eb31b86') {
        image = 'https://pbs.twimg.com/profile_images/644771749385519104/fyNMDHrz_400x400.png'
      } 
      else if (pubkey === '2d5691cc8c98409d65dbf131425818401349ac329e7bc0f1ec6bf2713f4d8cd4') {
        image = 'https://unshift.co.jp/assets/img/icon.png'
      } 
      else if (pubkey === '2d18ffffe8d9efb159db11bace929ecf4fcbc33005271293c0454224dd28d014') {
        image = 'https://pbs.twimg.com/profile_images/1561379368894889984/WNqlH_T9_400x400.jpg'
      } 
      else if (pubkey === '89ae3849bdf0fca0de2b750775dafffa932ac329fb6e19d17325030c4e4f7ed6') {
        image = 'https://pbs.twimg.com/media/FoWGtOIacAA4kXK.jpg'
      } 
      else if (pubkey === '79619c951896e3c6115eb53df315713f009a16248f401f26f513b993b1911675') {
        image = 'https://pbs.twimg.com/profile_images/1456197046797758465/S_BVtgUZ_400x400.jpg'
      } 
      else if (pubkey === '9ab4fe8632714df76d4c06f041a2d8e6328f861ad6abd3645956791db7a0dd86') {
        image = 'https://pbs.twimg.com/profile_images/1118666246575157248/Yh1gCEf0_400x400.jpg'
      } 
      else if (pubkey === 'caa7674ad1ff123ebace8ac547728e619bdd90ec0bf10d152cfff6489a903847') {
        image = 'https://github.com/Iwancof/about-me/raw/main/profile.jpg'
      } 
      else if (pubkey === 'f48392d6466d8bd312821ea8417683f2eece056cced1ee73d6a62cec427e3668') {
        image = 'https://pbs.twimg.com/profile_images/1573603449325092865/5YxjSDK9_400x400.jpg'
      } 
      else if (pubkey === 'd817194e36738db3a07dab0cce8c3f6ff0a3c5fd4e2acb0d4ce6a66f05ffe367') {
        image = 'https://cdn.discordapp.com/attachments/1007207278497251341/1072359513933488138/E1087BC1-EAE2-4C8D-B0C4-A3693298F004.gif'
      } 
      else if (pubkey === '1b1569983b202a7687ed5ba834238741cabbac4a5bc0239fdc71b8ef9f9d92d9') {
        image = 'https://pbs.twimg.com/profile_images/1610431319884042240/cq-hlYs__400x400.jpg'
      } 
      else if (pubkey === '10b72175a26f4a00a761425fa76a19c0c4808f87eb987a58e0fa57e8a577d5c1') {
        image = 'https://avatars.githubusercontent.com/u/6108088?v=4'
      } 
      else if (pubkey === 'eba15a2bbe175cd2bf0b198cb0fc011eff37811aa78ac681695b9d66bb9ed387') {
        image = 'https://pbs.twimg.com/profile_images/1578261738570805248/waIY5oDD_400x400.jpg'
      } 
      else if (pubkey === '80ddbf0e0e527d23b30ba3458d388215e576de0afbc87609c06fc001ef0f5741') {
        image = 'https://nostr.build/i/p/nostr.build_9135dd986df0b9b218f550f2071caf2627b62d70f883f7fe98ba046199c79d8d.jpeg'
      } 
      else if (pubkey === '521be9bad19d58e3e9f8a1c2876110c991df117465b2045b114b03d9e1fd854b') {
        image = 'https://pbs.twimg.com/profile_images/1527622417379901452/K89DiPd7_400x400.jpg'
      } 
      else if (pubkey === '2f49c5d40d6c76702c95ed3e7a8c35a7b1f9a6fae451afa38404c25a33202893') {
        image = 'https://pbs.twimg.com/profile_images/1618988242682138624/FGNCLxbV_400x400.jpg'
      } 
      else if (pubkey === '2d2528349b869b977f8ea33b0665fbec6217c2accd93e800e1f3b1748ea8ecf4') {
        image = 'https://ul.h3z.jp/2KdpTI1H.png'
      } 
      else if (pubkey === 'fffef6d5478fca2aae4a71fbafdfac1524136c70d290640685f3df9c3493ce6b') {
        image = 'http://icon-mjiyn2y5ytzjn.s3-website-us-west-2.amazonaws.com/sisimimi/icon.jpg'
      } 
      else if (pubkey === 'f3848f68939ababf265ac26189c1eefe6f57c4fd7dec6a9868ee66d5a60f5c3c') {
        image = 'https://pbs.twimg.com/profile_images/1467324249425989633/BnUpwc7l_400x400.jpg'
      } 
      else if (pubkey === 'a53a5b9bebe874e4e03ba238fe87f7d7a75b46ecb721cf5367a9698c90d13dcd') {
        image = 'https://tsumuri.moe/src/icon.jpg'
      } 
      else if (pubkey === '6873eace26942790b6ce96ad1bf11197b25d417c41f2fee70b10e79a5c393280') {
        image = 'https://i.postimg.cc/wj7ChCYz/6358-FCCF-169-B-490-F-A909-4-FA2-BF9195-DE.jpg'
      } 
      else if (pubkey === '49ee81a183c6dbfd3e13fbd6d604aab5edd88f7d560acd76102f8e12046fca0e') {
        image = 'https://i.postimg.cc/T15pzh4F/BAF3448-E-B478-49-E8-A792-022-B8-DD92-DA7.jpg'
      } 
      else if (pubkey === '098222f493ebbd4834b42afa9f54f7f027cd7b8b7fbaef3622bd6a059fccdd3f') {
        image = 'https://void.cat/d/NbBusvLf3X5yZHD7MEspQc.webp'
      } 
      else if (pubkey === 'a0afb1b483c6be402dc4a27b986543d86eaf6e1c190725bf5aeda6921df2e662') {
        image = 'https://metadata.ctdao.io/hwp/4328.png'
      } 
      else if (pubkey === '51fc127d3e43bf1c7022987bd9a5d480e75bbab471b88d84933ba802b2416cb9') {
        image = 'https://void.cat/d/4J4PYMaPUzWPp9MHGCZ2bC.webp'
      } 
      else if (pubkey === 'c95a5ee43cdf3b09b6b10d503161abc865542071f569016cfe454b2f44ef5605') {
        image = 'https://mizumanju-justice.com/wp-content/uploads/2023/01/df6d03d6b168fa6b60322ca7ae72505e.gif'
      } 
      else if (pubkey === '39da210f623dc67ff102202999a4cecf3339f6e5190413559d69466a3f4f2b8c') {
        image = 'https://i.seadn.io/gae/4-7eGu9ReQYqjPYUT5MsU8OS-Pw5UxY-fVinCEBumaI9mEHqNdWe4t7RPcWUFVCFC6bl3McfxYttm7RntOF58DLJBLuGj1uJ7-gwxg?auto=format&w=1000'
      } 
      else if (pubkey === 'b52e3ff51f3d481e028260002f68272ab998b92e3eae9deb9177b52a2acca9a5') {
        image = 'https://modul.jp/wp-content/uploads/2023/02/32547795_10209566902489033_3463235042199732224_n.jpg'
      } 
      else if (pubkey === 'ccf6687a4e3451f00da050727e06624c2a328fa6d70e6794e43aa1d8e9abae5f') {
        image = 'https://void.cat/d/Bo2h91fj3gWYajLGesEeDC.webp'
      } 
      else if (pubkey === '10662075428fb16b7affc67d1d47654cf76483467b7999cd341fee5e319cc78a') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/28c29f74d50bde175f043bce22df00e1.gif'
      } 
      else if (pubkey === 'da9a62f6e0c6fdd5ce31c161a5266e65cab84a907f196f35186838a7c8907dd0') {
        image = 'https://siroato.net/wp-content/uploads/2023/02/tamon.png'
      } 
      else if (pubkey === 'a6a24cf9cc2d0429eea239a95be331f3b3dd321691104ad8716900b0aad588f8') {
        image = 'https://www.gravatar.com/avatar/72e4a8bf47620de5381ff20f3deda977?s=268&d=https%3A%2F%2Frubykaigi.org%2F2020%2Fimages%2Fspeakers%2Fdummy-avatar.png'
      } 
      else if (pubkey === 'ed85b7c03f13921ef063ae670b8dbb35c43d8826b970ef2c29fe90c00f45b409') {
        image = 'https://void.cat/d/SUrVitnFpGy15Miz8u1Fuk.webp'
      } 
      else if (pubkey === '65b583b9192a441097ce5355e43b40b18866a0f9e0e794aef94a003e3114d17c') {
        image = 'https://www.yuyushiki.net/core_sys/images/main/cont/special/ys_ico/ys_22.png'
      } 
      else if (pubkey === '969e2d060cc676decf3d20fa51b2d52536b7f4973e91733da6cf444e275f9cea') {
        image = 'https://nostr.build/i/7e784d7d8f508e13df9a94143fa3800fbd43d9be2e2525a61574b7ded256bfb3.jpg'
      } 
      else if (pubkey === '91c9a5e1a9744114c6fe2d61ae4de82629eaaa0fb52f48288093c7e7e036f832') {
        image = 'https://void.cat/d/Ae6U7J2i7CQSH6ndz15w3c'
      } 
      else if (pubkey === '075f098cf74e184ec8f69626d6513ec69e1597227a6efcb576d01f913f4073ee') {
        image = 'https://nostr.build/i/856065821768130d2582645756854614272e50f1aaacb0fde0cf28303ee2d9b3.jpg'
      } 
      else if (pubkey === 'fcc308ccbc1f7be6dc39828d64343b613cbbf0d1e9a13ed4ea33d595b9b7de66') {
        image = 'https://nostr.build/i/e7dac912a52af429c22f8e6fe6db51375e90be35f1f26af7e21b4078c6050e05.jpg'
      } 
      else if (pubkey === '539115f2843aecf7a647597c4723016dd6ecf7daba5d7a5b933ee1694e6b116c') {
        image = 'https://nostr.build/i/4d1d629e86a880faaed5fb39e046416436a4c43d77c61db4db9c0a4e5e084b5d.jpg'
      } 
      else if (pubkey === 'a7be05dccd43bf541b27e05ed9970a29842300661902a8b987bbe881944bda83') {
        image = 'https://ja.gravatar.com/userimage/14185626/d66c1bd7fc5c9249549a7d08909d27cd.png'
      } 
      else if (pubkey === '4d97a867d269574ab510760a4d54c350763bd96de9bd1f50e4c32537a68df9be') {
        image = 'https://pbs.twimg.com/profile_images/1662659818266701831/WiWsB4BR_400x400.jpg'
      } 
      else if (pubkey === '421e0091d559dcdda7081797934949ec60f45a5721c1c2efd01c11873b50b556') {
        image = 'https://nostr.build/i/febcf11de85630dd771fa8de4a33b95c8e3a8bf81e5f4c47181535db4efb7ba2.jpg'
      } 
      else if (pubkey === 'd90e5e8667c0f2d38fc120938a063d351b74c28e792a698f16688487e2a4382b') {
        image = 'https://ca.slack-edge.com/T03NEJJ9U-U0J52E8R4-e18968fba787-72'
      } 
      else if (pubkey === '33d4dcea70a957b48576670fd24a4395a479eaeb211ffd2e152f9fd4d27603d9') {
        image = 'https://i.seadn.io/gcs/files/b7a4952c9358df3066caf9aa58af8119.gif?auto=format&w=1000'
      } 
      else if (pubkey === 'ef92e8e1b313a0d560cf66fc6a34922aa476fb2a90dceaeac4f24ef3814faa42') {
        image = 'https://nostr.build/i/ea7be5eef0c25fbb4f700485c7621b2cc9794f8ae2ff838df19ce7cb4af38999.jpg'
      } 
      else if (pubkey === '2e9109b44a57b0003d26e58a0cbb282e8732fa4d64a5cd495ae2bf6408213ec0') {
        image = 'https://nostr.build/i/867bd82d4e5f04904bc08f13b422f90d6018e6ff17a35bbfd7583bbdd7b61091.jpg'
      } 
      else if (pubkey === '27176eafd0be7f7cd63df9e84a238ab7f26343d11e87eea284f32092568f223e') {
        image = 'https://avatars.githubusercontent.com/u/8683947'
      } 
      else if (pubkey === 'efc37e97fa4fad679e464b7a6184009b7cc7605aceb0c5f56b464d2b986a60f0') {
        image = 'https://jingles.dev/images/profile.jpg'
      } 
      else if (pubkey === 'b6e8240f3e4d1861ea484c5467d286fda2893872a42bdcb72490b4819fea239f') {
        image = 'https://pbs.twimg.com/profile_images/1326849590872567808/0empdBpG_400x400.jpg'
      } 
      else if (pubkey === 'a94608ff4618527b575768ea5dbdbbe7d7b64ed7e1280ea2a481581f5dd911c1') {
        image = 'https://nostr.build/i/e7d9166200cc89cb5191a776492484b1a0b53854a4c521ae391f66c17778bc61.jpg'
      } 
      else if (pubkey === '38e77b3f2a7242d312c2165ff092ef34d03388e017f66b28024dc815f63c3ef0') {
        image = 'https://nostr.build/i/0a32eaf3d07548737bbaa76d09eea45e3c55dc7b62bd4e9c3afc710d704b5400.jpg'
      } 
      else if (pubkey === '1307c26d7ad3ffb4b3a1890bf9f8c399beebb40b12434dacb4ea489f8885f5a8') {
        image = 'https://void.cat/d/hwDFfCUeVwgML1tFjsYfm.webp'
      } 
      else if (pubkey === '463150e6f4f0d9d214d3864779b04803be60b7aa0b608f19171d525f588c9e43') {
        image = 'https://nostr.build/i/bc951d85707b940b79d846a299ed65522cb9567b32468f0509474569f5052ecc.jpg'
      } 
      else if (pubkey === '81168cae30e27d0a22c62a66baf02e7f6b49c4566fb3b185ad98582fd287e6c9') {
        image = 'https://nostr.build/i/nostr.build_8f387c9d0eacd433e97485cc05f227adfb934747504a5d1d26fbaf4af85bd648.png'
      } 
      else if (pubkey === '9fec72d579baaa772af9e71e638b529215721ace6e0f8320725ecbf9f77f85b1') {
        image = 'https://nostr.build/i/nostr.build_d909d85ae4acefd5cb735f27db87c0b2e57314e89e0b07522bff4299a7ca4816.jpg'
      } 
      else if (pubkey === '5ebf8d4dc1c7571137c345f378f019987ef85874cc8e50c3066349373f4d7f89') {
        image = 'https://s3.arkjp.net/misskey/webpublic-8093235c-bc71-4fd3-961c-6ca71c4152b8.png'
      } 
      else if (pubkey === '586892a56108cadefd5bbe1ad2569b7638af99f3b5e82f573430af0068139814') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/815/930/896/696/818/original/twicon_mh2.png'
	image = 'https://s3.fedibird.com/accounts/avatars/109/815/930/896/696/818/original/dce240b7f6cf2e29.png'
      } 
      else if (pubkey === '11d029866a7e89aa4c097c1ffd1ed777897b4f79dc4090e96587f5ce5da13a1b') {
        image = 'https://nostr.build/i/1eaf7092652e1f27ac619f3ba3d77d7e3ce1a7cc5e7eedd06263087161e022e1.jpg'
      } 
      else if (pubkey === '920fbf78e88302530a179352b892e4b3dc16845c8b15ab439157bda5f570819d') {
        image = 'https://nostr.build/i/f94a344c2b9cdf99bf177db1209eeb327134930cfe2036f97ce4da32799890a4.jpg'
      } 
      else if (pubkey === '45fb8130942fc36f7e918360c2a439fec9417228437d38077a41de158db144ba') {
        image = 'https://nostr.build/i/5cd13d66847d228817473e4abaca2211360f406999941423b05a6011fb91592b.jpg'
      } 
      else if (pubkey === 'f06686bea8bd85b9e47fe6cd6b368282c9d8293fe810a2a69cce7731a55281e8') {
        image = 'https://void.cat/d/P6Mt5HQMufMJbzDoeTYzsj.webp'
      } 
      else if (pubkey === 'daadb8ca40d15893ab40ae9fb0824c348194ff6ace61406d74907abf3482fdfc') {
        image = 'https://nostr.build/i/9e1c92761ef6c246855bdff89fbe0a95db244797f11fbb297ab60e32c6929747.jpg'
      } 
      else if (pubkey === 'af465c152e03d03b92994ebee1180b3b1d17affb6fce1dfb7b46360fadd8ccd5') {
        image = 'https://nostr.build/i/e7690b908cb4422802f111013ac8a85c78d184705a3bd67774b6e2e9a570740d.jpg'
      } 
      else if (pubkey === '601b857466dbcdf2508a88700ef602b11cf9bab76c561fc5d2e3f8b72d5d71af') {
        image = 'https://nostr.build/i/9989d21489d5e1eb4819c8a209dde8a3e443dc883fd52e82b37522d5b3db2ccc.jpg'
      } 
      else if (pubkey === 'c44f734a5f7ecd947260f4c6feee4394c448d1899ff6bde64407bf7f6eb363f3') {
        image = 'https://nostr.build/i/a1bbf76bab5e996cadb719a8ea0fab355d368b38391d7329730127a65942c223.jpg'
      } 
      else if (pubkey === '3517d174d75c4589a7ae1952838610e7ef04b54d9611e584590f6bc39d7d7804') {
        image = 'https://nostr.build/i/e343ffbd2a5d3bf763b8e7f6865db15413dbfab99e51d8bad7f83c5fb975a7ca.jpg'
      } 
      else if (pubkey === '057fbf4486c07e7aebf02795ab762761ccd07c8c6cba25ae6a4e9ea62d17f4ef') {
        image = 'https://nostr.build/i/a8745307aee87ade523618cec697f2ca5d80942e21a69e987513af27a83291dc.jpg'
      } 
      else if (pubkey === '7e8e19bf9059280daff3bc0a49604abfca581ed5834d26b498f46825a5ab05c4') {
        image = 'https://nostr.build/i/c61a5c284950ccdd8013611f275ae1cd05a75501cf73a729e4ff08ffe0ed5246.jpg'
      } 
      else if (pubkey === '1dc7d3882625b0a6c118c6d3f472e8464ea293551675a491ffb30752b17a2729') {
        image = 'https://nostr.build/i/f4bf62a2eaf7a96de9f36aaaef19ef5d635a543befb9d367ed9ccb4a74ba5764.jpg'
      } 
      else if (pubkey === '7416659a204fa5c538b277cc18bef6ba4a62a73d3f228c3870b145a2df67d235') {
        image = 'https://s3.arkjp.net/misskey/aa8be5d8-15ec-42b7-8dc2-52320086c0df.jpg'
      } 
      else if (pubkey === '666cdbb0b6adf387517066095224dabe1ab0f6a7ec78ca9b21cd8dee5971e9a9') {
        image = 'https://imgs.nere9.help/accounts/avatars/000/009/002/original/fabbb74481cf83ac.jpg'
      } 
      else if (pubkey === '5e84cd68bfd7cc05683d1a0c065cd4c2ba692e58ec97b3ee94e1f2371f6ecba0') {
        image = 'https://best-friends.media/accounts/avatars/000/001/865/original/f52e3b22029bdf6e.jpeg'
      } 
      else if (pubkey === '4cf4c4299919a8f8755f9bdad24c285f5fb9e4e1436acb9aa6e5832f37e3158a') {
        image = 'https://nostr.build/i/c6e2dc6f248f84632377531867bcc8b32bac975075c569b5cbfdf955ecf6b8d8.jpg'
      } 
      else if (pubkey === 'f44867e7cec92ed9a6aed68ef81f07e8e4d199751b5afb9a4ea9c23f97309205') {
        image = 'https://social-cdn.vivaldi.net/system/accounts/avatars/109/353/016/220/284/249/original/a16d3d721eaae0b7.gif'
      } 
      else if (pubkey === '8b4f0b2d877afc35688c2fc53a4c60df563eff62e6310051543b0af9b0dfd2e7') {
        image = 'https://cdn-ak.f.st-hatena.com/images/fotolife/f/fudsuki/20230702/20230702093743.jpg'
      } 
      else if (pubkey === 'e4408b7809e562530adaa4d0f1168b17ef9b2b9b87842d71ea4ce55c245a08a9') {
        image = 'https://file.ddoskey.com//f1a92ce4-73c8-4043-9a87-85012f789937.PNG'
      } 
      else if (pubkey === '4433b2d4f3fe9059c663178b522ca431a264089015dbf5d451e04e5a7ef7958a') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/733/535/original/b3e2ff3ea786cfff.jpg'
      } 
      else if (pubkey === 'bad4b7880f9c071017f708cca0e81e3cd708c8d3869387c8127bfcffbbcb9e84') {
        image = 'https://nostr.build/i/a75bfe3c6b10e729fd1565fb3cc6431002d2658e19f5fb88be413c9dbb5aa2ff.jpg'
      } 
      else if (pubkey === 'a4a587199a05e83d8d06ac138c28272b0d5cd910dd8e5250154a5522ca540da5') {
        image = 'https://simkey.net/files/webpublic-87b2ecdb-d7ec-4430-97f6-306b5f3e172f'
      } 
      else if (pubkey === 'a3c272dd40b3578db79b04a0387417e2afa75578b8febb917b9faa803ca4b64a') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/155/200/original/2e948193ee954e55428290ad6ecada7f.png'
      } 
      else if (pubkey === '5f983eb8bdc38be5ef0730a67aaeed29672e395f57b054709d4f4c9cd4d01a38') {
        image = 'https://nostr.build/i/9689b007439afc7ed60613b55edb3d6ed694cbb5e78338a70e4189260d10880e.jpg'
      } 
      else if (pubkey === '5342783b69bc75cfc443d9ff28b55a0d85d9ba3b8bd312f39a21bc213c4f01db') {
        image = 'https://nostr.build/i/0b1edb9e6022a83ae896b3107434cd0ccd25e7c065b881fa23205e39562c51e8.jpg'
      } 
      else if (pubkey === '1b6fd371d83c0f8944ff8fc65c8f2296fa63d89143d7dacae01c9fa68b172d35') {
        image = 'https://imgs.nere9.help/accounts/avatars/000/071/477/original/7dd73943b118880c.png'
      } 
      else if (pubkey === 'b0e70f73770fc095ae7a28cf8502f5ed0cf845193c74fa75ee82f525e5169db2') {
        image = 'https://media.mstdn.beer/accounts/avatars/000/122/840/original/c23ab4f7decbff6f.jpeg'
      } 
      else if (pubkey === 'ca8c27a719ba037d9341a7c93e357d33c7c954655f79cc09ea97bf5e08b47c87') {
        image = 'https://nostr.build/i/503c2d31459972b3aa78556a7bea2d35b42c64f6facf58804f2d61d60812f43c.jpg'
      } 
      else if (pubkey === '5d89ffe3a9f31f63c1b835ab43d5a1a271898eded37fbfe3d1c20e0794998b59') {
        image = 'https://nostr.build/i/54cc0ba2535c2288fc4b5026396934369cbcb63761e11ea3a7acbadb6950ff29.jpg'
      } 
      else if (pubkey === '5bab615f042d568110dacb25393ab7d2436bc05f3dca8cce5f06787d2ac4109f') {
        image = 'https://nostr.build/i/7cbd4e554ed9e93c201608544b17726945aeee5274903a15271ed05a786e1107.jpg'
	image = 'https://cdn.nostr.build/i/bfc10cf24fd9768bad2c5eb3b569d4f38f5193da38f151d5642c7d6125b10547.jpg'
      } 
      else if (pubkey === 'a6b1f4f0f23055628692e3b437ecc772c8fbfb2aa54c3c564f4e31a6148f8026') {
        image = 'https://nostr.build/i/4863ba0481b9de6fa6352aabe3b669b4a049bcfa4b9d6bcbd3067dcc877aaa09.jpg'
      } 
      else if (pubkey === '0c4848e18c180a7ead8e869c9826a911a35b0c30399e9b5fb46f691d10e8e8e5') {
        image = 'https://pbs.twimg.com/profile_images/1667818810924216325/q6Yf1G8l.jpg'
      } 
      else if (pubkey === 'd2b6b012485ec6dbfc7d844446d2608120d25dc54e432555582c78ce9bb65dc4') {
        image = 'https://void.cat/d/4PQvxf7hH5tJ836KQb4zjk.webp'
      } 
      else if (pubkey === '929b1d9e6a6038e8f20edb157707ed394aa1f274f977c5a60c85bde172470af0') {
        image = 'https://media.sushi.ski/files/aff01069-1813-411a-a58d-6f8ac857bf3c.png'
      } 
      else if (pubkey === 'cac8cee81e6e93442c8d5f9501959a17d840d0dcd788c284e0baa3c594466455') {
        image = 'https://nostr.build/i/517bbdd9b789947863d3bd26fc5bdd71ce387a470c9354d279e04013c6704b04.jpg'
      } 
      else if (pubkey === '606ece5c13117a5c2e2cccd0412b7782162f36cd541662353bb4b3c58d099ece') {
        image = 'https://s3.fedibird.com/accounts/avatars/000/000/001/original/1678680516511_bde1301a48414a9880da10a682913e0826f3f6696c8edf0e75b898dd2ded5378.png'
      } 
      else if (pubkey === '88d3bcc6988bd1b3565c99a29ef3b64bf1b06e0b42159e2682204d786ceba443') {
        image = 'https://abyss.fun/system/accounts/avatars/000/000/526/original/9f201cf6b938f8955f98103048411acc.gif'
      } 
      else if (pubkey === '272cb7f685fb37d255f37458282c6e0a30d93e0e629b9751a00a1ea2ac84ef84') {
        image = 'https://pbs.twimg.com/profile_images/1393527559606865931/mCcYvr07_400x400.jpg'
      } 
      else if (pubkey === 'b8e72ea412bcd0d2ecd165f9c791111f73280792b608c3732d9ef4805475c14e') {
        image = 'https://media.songbird.cloud/accounts/avatars/109/377/823/750/977/901/original/5a0c1e1b194f2508.jpeg'
      } 
      else if (pubkey === 'ce2022ec89f0c766af936dcd52489f0aada622a753a9684b8ceb6ed860a08119') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/410/113/741/554/675/original/5cc40a7f20936fd0.jpg'
      } 
      else if (pubkey === '86b2be90463236ed215aefe4e72d15475796e4e5a218d0a92e3a0136fc572cc3') {
        image = 'https://nostr.build/i/231318baec1f6ac299cdc18dac0baa9c3e1b4993e1fd300bc9c8f965f653277c.jpg'
      } 
      else if (pubkey === '6004f31973f1fa1cab7e4a026aa317fb197e298cb53f0106fffe0e2696bcf1bd') {
        image = 'https://void.cat/d/5MWw2UCt5Eb6XdS5hZXhoS.webp'
      } 
      else if (pubkey === 'e29906ad5fc1d8fedfc7776f98d140b5bb955a8e81a29e514bc4616ebb09db2a') {
        image = 'https://nostr.build/i/f1f7ef9c537d799a9c5954ead8d9eeb1a43fc7583a79526f29dbf0339e4e1891.jpg'
      } 
      else if (pubkey === '39c529d4aeaf88c15575eb5280f83e35123cf92bf7f1a6cef0963ad47508140f') {
        image = 'https://s3.sda1.net/misskey/contents/0e4d2901-af7d-4b6e-b32e-a5776ec9b37c.png'
      } 
      else if (pubkey === '2f1ab5e9f93c4cb8bc2979dd2cfa01e33cc5620e4a2500bc83f36c0928f47b72') {
        image = 'https://nostr.build/i/0bc36f7204a9029c49fca890446e2605ed6260f51a60176ab8592c9dc8af7a91.jpg'
      } 
      else if (pubkey === '9c66433895e5ffe09dee7b98039bca31297a173766aae45548db7f1df35aadae') {
        image = 'https://media.sushi.ski/files/webpublic-21c88666-f5a0-4794-8fd7-63aaaa53c088.png'
      } 
      else if (pubkey === 'b3c22333d4b4a9af4067f610992fd6793c56d21ab88cdae72bc28fd47834f03c') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTg3LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTg3LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey === '77596faf0cda3aa23e4fb8800ead37603cc489495a2afccd3b3fb86dacad0086') {
        image = 'https://nostr.build/i/f7eeb7b8470772e874f35cd4ae440eacef080528afc29659ecd871f18f731e07.jpg'
      } 
      else if (pubkey === '463923cc110afa6eef9822e103978ee63b96d42388865fba51e3b21a8246f73f') {
        image = 'https://nostr.build/i/c508c7a9ba6d49a179dc7e90ec50bc25c0dbbcbd47444c8c93b815a3a10e9d52.jpg'
      } 
      else if (pubkey === 'adba06343134f3a46c204da8774fb871d8e206304967308ffc98e86d82f9502f') {
        image = 'https://nostr.build/i/6bec7810593f0eb816a807f790b3eb4e92cdd118e59bb38566eadbc43d5df480.jpg'
      } 
      else if (pubkey === '120ec3aaa6ee06090a721a0b09d56ea3b1e3d28858126e219a76904049a45cbf') {
        image = 'https://nostr.build/i/f73a9f59dd07367bb5cf5f77d02375406a66cee5b3e11354e1fed1623390187b.jpg'
      } 
      else if (pubkey === '1ce32e918bbd7108b0bd50dc992f2195a13f19f13007eae0ee6a1b01214c60c8') {
        image = 'https://nostr.build/i/62d73dea277a601cf3648e80b30220c37a57f3302fa2a9e9411ef5cf4a0b0948.jpg'
      } 
      else if (pubkey === 'effc115b885717795202163c58ccc53c7a17f8a6ea1127129ff82b0aa117a37b') {
        image = 'https://nostr.build/i/77c3e24127d0869272555e4474a807927798908849d1daadd19818a6d20e5823.jpg'
      } 
      else if (pubkey === 'b865e0d8ba1fd69fe7334d1c020656e1137e4aaf33ddabf43f2d32a60b07e3d4') {
        image = 'https://nostr.build/i/515c192d72b3b52cf7b44c2187c9e3fecb11eb4ab463f008e584dcfbdbda6eb3.jpg'
      } 
      else if (pubkey === '4c592040c39b3c8d27bc252ddb6137aa57bc32d1035456e4fcac401c293a2a0f') {
        image = 'https://i.imgur.com/h7Q4BkQ.jpg'
      } 
      else if (pubkey === 'f65d2c1d53a8047ad1585ceaade52cbf1b9ab9f5b2a6f76d4d46a99fd89b6824') {
        image = 'https://nostr.build/i/0a06f6526daf7a21900f0ae350cbf849b60869912733736a5bde5b432b37966b.jpg'
      } 
      else if (pubkey === '4320138a4fe3ae364f6d3545bcfe797f2d9290e7d911321a9bc675e0dd24131e') {
        image = 'https://omae.dev/img/IMG_3558.jpeg'
	image = 'https://omae.dev/img/profile_icon.avif'
	image = 'https://omae.dev/img/profile_icon_1KiB.avif'
      } 
      else if (pubkey === 'f536e69adfe7102bcc5e34fead49da7230c48dc981c9d47a7e937d4e35d944a6') {
        image = 'https://nostr.build/i/e9d673f421ce7614745c7784c9974974e92952bfd63b0eeebe5e2f1c914c3619.jpg'
      } 
      else if (pubkey === 'd2af357db420748df3dad79ac9412cc62886dc8abcdb64df7a20ce7cf8a7c13f') {
        image = 'https://nostr.build/i/73ddbd4ba332bc412a783e2e36ecbb67c76647841597ca9fb4902b48806e0272.jpg'
      } 
      else if (pubkey === '5d37ea282fef2312e9edf83a660a5e6e8aaf9ccacf4c46458863f65e0a6c4473') {
        image = 'https://nostr.build/i/fff3c84afcc3dfd3e79bc0d09b5e302f60718ea7e3c4c54b989ab67d767c29f4.jpg'
      } 
      else if (pubkey === 'cc0fadc4fe67206ceb529054f7e4169c7f8340dc6e50a451e213c923510862cf') {
        image = 'https://yt3.googleusercontent.com/ytc/AGIKgqPovgxMgds7gJJu8r7iii1vmaX4_yjfsM5Y-IQA=s176-c-k-c0x00ffffff-no-rj'
      } 
      else if (pubkey === '9a664c496a5d9dadefcd6d20becee6495bd36bedc94d6b17a17dcfe0056682aa') {
        image = 'https://nostr.build/i/66fb269b327e7f348956a540695c3e73263ab419e22d90a68ce1ff44aee7c17e.jpg'
	image = 'https://i.nostrimg.com/2055f414c27d71b659745615f4c45bfa9d171c176f8fdf9305fae12fb8309766/file.jpeg'
	image = 'https://i.nostrimg.com/ea6c7b9b9b1252f3c7e46c1e4c185a5d258c6954446b19c9cf6d76d39363fe67/file.jpeg'
	image = 'https://i.nostrimg.com/4b9c0d3edd400a88737c94996c25ba6f1edc9790e589cee652eee0bfa2feb9fb/file.png'
      } 
      else if (pubkey === '88d2a67e50005e76f4154cd43706a334b81da8eeb825853e1489f4ff6127f4a8') {
        image = 'https://nostr.build/i/8d5cc69d06cdf3738a037777f8c1a3373540bd14b8138f841e52a3e437630f4a.jpg'
      } 
      else if (pubkey === 'd507d82d084748fba3b3a6ab5b265c2666a95a86ce45d5c59e0091bc89225e93') {
        image = 'https://qiita-image-store.s3.amazonaws.com/0/15553/profile-images/1485574097'
      } 
      else if (pubkey === 'bc2c7c0e44408dbb64ab1046b4e0da5a81dba368c8df38c9f729c57907eb4424') {
        image = 'https://nostr.build/i/73be2888d9f3d3a749dfefbe0955cc6e75da6020be2eee1013d7846693ddc831.jpg'
      } 
      else if (pubkey === 'f0e59458d5da4fc6705d8a15be3795a414e95ba4ba90de45f09017de4afe015e') {
        image = 'https://nostr.build/i/5293872209822f14da581d958c490a73159a84f9e72072c389f8bc331bc788ed.jpg'
      } 
      else if (pubkey === '171dcda47bbfab8db977f5d8569a02da9c4f2b27cc13d633611a9a0fdd35597a') {
        image = 'https://nostr.build/i/c63e2d70b24a7abfc517bdaed6b4adea552cc86f6edc6f7f59240af6537e7d19.jpg'
      } 
      else if (pubkey === 'b580b697594badda8cd7ba237e0bea1320be7c50b67a562517bf26f01d2052b2') {
        image = 'https://nostr.build/i/653cd06ebacd4b124a2293e44673f218b9cab4198334b2a4f21b640b9cd8bca9.jpg'
      } 
      else if (pubkey === '398fef9ef58e210f9f1669774bce664d2803048d294b23fcc601f0ea46993f76') {
        image = 'https://en.gravatar.com/userimage/236968123/a65276bfe6ab2729aa04c67a5a8fa6ff.png'
      } 
      else if (pubkey === '146b0269d824530917615e2464be40cbdb95dcb0fe48ec70b2678e67056d965c') {
        image = 'https://pbs.twimg.com/profile_images/1401568749375823873/yjzGHYzO_400x400.jpg'
      } 
      else if (pubkey === 'a4461e174090c8596f4af17da0e441667f5d615035aeafb3af5c6363b31ce0e8') {
        image = 'https://nostr.build/i/4bfdac8051e9640cfd0c13c0f53de7cd689ce063f92945f62580e3c16f1d4ed9.jpg'
      } 
      else if (pubkey === 'f7423d55be5ed2cfaeb345fe20dcd14925eb5b892a831d4d473cd467d43f05f5') {
        image = 'https://nostr.build/i/0ed400672436779a231e7b334364d5a52f5d2f5e14afe4d1d6cca1372e85651c.jpg'
      } 
      else if (pubkey === 'f9e058835f69ca2dbe6c32715aac6f2ea1b921b41ddbd908c5517720af5d30cd') {
        image = 'https://nostr.build/i/c3e8d14e41070f6c6f95b08272fbcd284fc84ad49ba438d1360db7bfae1d1e59.jpg'
      } 
      else if (pubkey === '839cc8164221a254e2c20ba0640fb1776da62804128a322633b1c1a8a6e6c77c') {
        image = 'https://nostr.build/i/9b0a803d05acac0b66107648609b107ec6b8babcab12ebd56c18d475cf44f270.jpg'
      } 
      else if (pubkey === '15e92125638eaec8f0eb197da39a2690d636ad99fd4fae6701ecf89b41948cbd') {
        image = 'https://nostr.build/i/8cfd3756383418972af1d3bb928854b17b8df58229635c47777e1a1796a498fc.jpg'
      } 
      else if (pubkey === '94cc9c38cf3633f44195e5411d3c08d26515f8111e2736a81bcc8e2bd310b057') {
        image = 'https://nostr.build/i/0c341302e3bcf330e207d5b6937f4b5299a4d3428d3dd4d907dfb39352a5adf8.jpg'
      } 
      else if (pubkey === '847be3f20291a4e60011ad7b77f6e845251f189becd2412dee3e0397fd9e5e1a') {
        image = 'https://i.imgur.com/HxSEZDw.jpg'
      } 
      else if (pubkey === 'ffd8cc536f62675baf30bd9f6e5b4ea58183118d4f1d1c6d037fb529226f49ad') {
        image = 'https://nostr.build/i/52c67e48693ec7af9f13f18ab09546df69a1f6757ff97646b5dfd63ba168f90e.jpg'
      } 
      else if (pubkey === '1d0e81994d8d23bc4d2688b5a404c2c9913681e0959c97868ba60d4437b70628') {
        image = 'https://nostr.build/i/df50d453ae0459e31da2af3d094c88b93d38105cf7f3f09496b6eb1da6f7dc89.jpg'
      } 
      else if (pubkey === '3d08d40b59c28f76c85dc7d1287d0395a07dbe8ba4b055f3f6d7ebfa01d71e02') {
        image = 'https://nostr.build/i/676a92bf8e37a3c4f9838ebfe7c423fed9da21ccbfcc91db60bf9f729bc3856c.jpg'
      } 
      else if (pubkey === '4c4b5f453922417ac45a93d95b3f426e003232cb3782bb88662f2c03dad6b50e') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDE3MiwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDE3MiwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey === '89cc82b8fe6f2e26900fc5abf0962e5c50128ca44173f78e3e5ec2007f31052a') {
        image = 'https://www.koka-in.org/%7ezophos/zophos_480x480.jpg'
      } 
      else if (pubkey === '4acec7be212479bd7ee4a9b0e39843e9a5446e40c4c41317067de686330e459a') {
        image = 'https://nostr.build/i/67376f4d26598726743feb2f60e33b3870ee334949e9032a6bd7a6672ab4d7de.jpg'
      } 
      else if (pubkey === '55c3c19b61e8fb4dbf9318bdb2c98687386e5948229463b938cd1425d1e5dfcb') {
        image = 'https://void.cat/d/4P5PJ9LcYH7ztgT5Eh6x63.webp'
      } 
      else if (pubkey === '70e6b4b1c0807a43ee848db6af2f644ef5c17d2291e6e7bba42d3f3093c3565f') {
        image = 'https://nostr.build/i/540ee4eccc1bf7d8f0a4a5b71874987365707381bc63d7066a6638be36c6f8a3.jpg'
      } 
      else if (pubkey === '08f7e00e61ff8e2417de6bec9181dbc0fcd65d2fce9f94506f170452d3e7f7bf') {
        image = 'https://nostr.build/i/e1091e1f233c87b0d638b629283b65a5aaeca5ea603e54b9734433e2d5b36a03.jpg'
      } 
      else if (pubkey === '289b76ceb53883d59befdb315ea773114e8f6b5342e8b9cd49c0772802b5308b') {
        image = 'https://pbs.twimg.com/profile_images/1675507937098473473/DeAqwt53.jpg'
      } 
      else if (pubkey === '5e1707df5c5b606dd99fb55b9d3bf6f16fde81f96315362282f44714730e21d3') {
        image = 'https://nostr.build/i/2cb26b29425ffd62e8d0e723f7759371d4a8c73c71b840c3c0f1b756a3ec615f.jpg'
      } 
      else if (pubkey === 'ed178a82928dc2674814cd131efb49598f13c66abf02327792229ca3b6fe68d7') {
        image = 'https://nostr.build/i/3ecce4e1f84c1f728ee0ad0830ca9d785008a7096e8154b44c1de54041a049bb.jpg'
      } 
      else if (pubkey === 'ed5f537e889f0256bdd27f4982089e2922297fe2b7becdb5366b319ff9c4fd27') {
        image = 'https://raw.githubusercontent.com/gw31415/amadeus-home/main/static/images/avatar.jpg'
      } 
      else if (pubkey === '04b7fb3f1834ef3d4a3be21949a43bf8f864b2a17679f3590c2352f22108c1e4') {
        image = 'https://nostr.build/i/1b5a55d9dbd99a585d10acdbb57a403fd8c5d5fe43c010ddcbdb730b602ff707.jpg'
      } 
      else if (pubkey === '609cb74df9fbe770b40ab68a78a805ee75a91cceb499df364a53c80f0b7500f4') {
        image = 'https://nostr.build/i/25787531fcfa8d137af64f5e30c8e3230969737456792bf3df2696783f5fdaf3.jpg'
      } 
      else if (pubkey === 'b236b74184f377a959ae75c7cab947ee4fd2ab3c18a8d5a790ab4692272ac400') {
        image = 'https://pbs.twimg.com/profile_images/1669018359504207874/W8PwvCqm_400x400.jpg'
      } 
      else if (pubkey === '1968ebb77373ed6c099696ff5dc33a656c529b5d5e456439830973ee87c5e664') {
        image = 'https://nostr.build/i/c06f89e0564e86d50f542138c0ca898e15fe05ab47d961d1868ea8d66e31f8a8.jpg'
      } 
      else if (pubkey === 'aebf9acf5fe346972ce95f2976a8b579e5279a9004f584c14095cbaa627c23af') {
        image = 'https://nostr.build/i/eb8f55d077ac4a4381155c2d2cc18e04444c940d5e70f878d777d13d6bef8796.jpg'
      } 
      else if (pubkey === '893df5d0da66061133000ab4371ecd5b409d12088d1d8bc81b702fd7aed15e6a') {
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMDprwJjQhHbq5TMtdDHMm7X-bj8FWtFVdg&usqp=CAU'
      } 
      else if (pubkey === '3f756a4b107dd021c47193496f88baefc3a8a02a150317a63803d3bb9a4b2425') {
        image = 'https://pbs.twimg.com/profile_images/981682289032609793/tT3WvRlT_400x400.jpg'
      } 
      else if (pubkey === 'b1910ae3af181894e3e2d15abee6d5f6d0a716399a848f2ebf63b8ea03f09bb0') {
        image = 'https://nostr.build/i/a4950bcc5b478884ffc29d1368a16fa35b86c2e732d68dd4a31eb9a752fcdc81.jpg'
      } 
      else if (pubkey === '917493fff103f5022d2af07147aaedd76b99994be288c77dbd0beac49fd36da0') {
        image = 'https://nostr.build/i/ef9697685c2f1343e3f3231b0c1395cda68a83e5dd7bd12fb042baba4891908f.jpg'
      } 
      else if (pubkey === '5cfae0814c67e3f0b1b93343d97f4d683bc0f59b6d26181c41225925ce3eddd3') {
        image = 'https://nostr.build/i/c6573e9b856720fefa54c73b7c17920f7a21762b02bbee7ae166fcb30801987d.jpg'
      } 
      else if (pubkey === '7d3e4c424f93c242412716601c791918fab1530d87ecaa292ca2f7ad1b53be8b') {
        image = 'https://nostr.build/i/nostr.build_9c2d6f8a604304c9940c119e466e814fcb9365a0c826e4c542d1ab1de0f53aae.jpg'
      } 
      else if (pubkey === 'd11e29e95546608265384f82cf58d4eeba344cac0622d5cff3017186c273a1e3') {
        image = 'https://nostr.build/i/a764067b16676e03ae096c1b31c76315d274f1e4638d05e9a7256c37b175710f.jpg'
      } 
      else if (pubkey === 'd1559e0e4048783e835337fbf6c12909d53809ed30f0ce4c261abd525b0a19dd') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDIxNiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDIxNiwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey === '8cc9566c96e2f07d9dc5689162ce997d65dc76ebb1f8c1d63a564e8a29e8d7db') {
        image = 'https://nostr.build/i/2c3fcf55c1f03305bb91c0fcc36569a737c6627ef47a95e08887e6a97ad31a44.jpg'
      } 
      else if (pubkey === 'e747477219e71263ff8ec27f3b1be8e7918eecec8491e23e1762779ee633b9ea') {
        image = 'https://pbs.twimg.com/profile_images/1360990582370279425/moZ2ytg__400x400.jpg'
      } 
      else if (pubkey === 'd4d5e0183aae22476f33911d2090d14e29347c018d1b3e4ab18f72b375299517') {
        image = 'https://pbs.twimg.com/profile_images/1040000266098167808/CSBc0BlD.jpg'
      } 
      else if (pubkey === 'b1d92d397f001b69be04bace26b39f697070bd05267a6f8edf8d1d4759914e09') {
        image = 'https://pbs.twimg.com/profile_images/1659855383530438656/WXwUMeS9_400x400.jpg'
      } 
      else if (pubkey === 'a94e8abdc95472a20af5dc8ac66c984924873472e5bb2d303cd51ccc9c79dc5d') {
        image = 'https://nostr.build/i/25a377f461a1686142e48a114975a58f0cf1ccff1267289a77d764f87c35ef81.jpg'
      } 
      else if (pubkey === '5d443e5956e2920236517aa091051be292a5f6e5ef331ca68b964dae6e97002b') {
        image = 'https://i.imgur.com/EnmQG2A.jpg'
      } 
      else if (pubkey === '9a7e49b4a9b1c43fbd548569a96c042dcd4d872c9dd15c48f0289754dbe97f03') {
        image = 'https://nostr.build/i/9f7c2b55fe68e93181b22d993f884a4f7abec2bb616415a11eb2d272dd5b06be.jpg'
      } 
      else if (pubkey === 'eef7c14580431ba069a3916c0ed7698f812be5152a3a862296002c3e1e45ccdf') {
        image = 'https://pbs.twimg.com/profile_images/1382324203802615808/JwkEPjpQ_400x400.jpg'
      } 
      else if (pubkey === 'ed8855a6883fc6eff01e7bdc36e0689ac9d9002992a30770d94211942bb8a02a') {
        image = 'https://nostr.build/i/8cab9cd2045726747207d5b7db0120264e84dd7e937a48930da55898fb76facc.jpg'
      } 
      else if (pubkey === '38850bcfa95e29bd047300cbcbe91459dc484a2a1d7620230b095409365d905f') {
        image = 'https://nostr.build/i/417fee9d96eb568601c1799131b2461fa809321d2b6acc691cdab499fa476c13.jpg'
      } 
      else if (pubkey === '3059b45130d51244daa615e83d77250d197ebcc9a35643ab01c7b0468db5d0ef') {
        image = 'https://illustbu.jp/wp-content/uploads/2021/08/00080.png'
      } 
      else if (pubkey === '71b3ffe24de5b3c01ce2785f9b9273b74452bed7901c806f95d9b90e10466d1f') {
        image = 'https://nostr.build/i/d209d48d9757d5899a00191b02a83965d2b52e75cbc9a2911df49a9103fc6346.jpg'
      } 
      else if (pubkey === 'ed3def326f24256b6e60bd78b5c36e5c51ed407695408a115d86f0df4552b57b') {
        image = 'https://nostr.build/i/nostr.build_04a46f5128d66748bfe7432f3af4f81ee7667540bbe57bbe31b43b1b142fc03b.jpeg'
      } 
      else if (pubkey === 'f4c77a68e80e3da776cc710f2aa0ab146326c2af43f7e6a2dc6a79efa103865f') {
        image = 'https://nostr.build/i/6a64b550bf5ac802870d7488227dcee17a79e1449e198385a7f9c3bd92412eae.jpg'
      } 
      else if (pubkey === '21d1d803cb7b3b4220a8f16758fa087f5dd074cc05cca641502ab88ed5ca8bac') {
        image = 'https://nostr.build/i/bd3e165f3bfe261bd84edb586c2308e051573f57494321035b33f876dea39b96.jpg'
      } 
      else if (pubkey === 'eee9c3646c7f89d017b5b12581d5974d86484437a4e5e6cac413435ae4d77067') {
        image = 'https://nostr.build/i/3a0381bdff93ca6c5bccf93c997a93bb0b4afea9369b628b4c30aabea2a6a66a.jpg'
      } 
      else if (pubkey === '3a14d081a35c92394e8c031bc4a5852cfd6ceee558c3633316d128f8277cb357') {
        image = 'https://nostr.build/i/5dafab095066e03b2cd710362c51254af84d707f1b5ace4f4af7ad2a4b10f520.jpg'
      } 
      else if (pubkey === 'ace68ce2ae0e7eef40a16facd4107231457d7426bce1c6e0c7dc4d41b4f062dd') {
        image = 'https://pbs.twimg.com/profile_images/1557726633137963010/ZkY6n8gE_400x400.jpg'
      } 
      else if (pubkey === '1078e745f745580f6dafb69ef320a753ae3560add613651c067080d8125266e4') {
        image = 'https://nostr.build/i/5dc88ade1a25ee9c06ff79baf66d2094aff385242d9706814232a393515f4a5c.jpg'
      } 
      else if (pubkey === '418be4e6f5ffa9ba592c425548631f70cb5df55b59ca5b18fbb5140f7771a826') {
        image = 'https://nostr.build/i/67800447274b6b1cb3098ee1aea04139c552af1f02ab66df53be0654a74972e0.jpg'
      } 
      else if (pubkey === '6e66891b2c716770f600754220f81eeddf14b454ae1a2d49ad3bff546d749e21') {
        image = 'https://nostr.build/i/31f4364ab0fe1552619533bd3265d4816444644158756d488479fa569c326f0a.jpg'
      } 
      else if (pubkey === '66d138ba0a60f37a2907bcdae4ebfd2fd7722daa97b2b7deb78466026ba57f89') {
        image = 'https://nostr.build/i/0f9047141455ede25fbb415ae6435e06a06c586d2fa5dde779b1886a73c4efb3.jpg'
      } 
      else if (pubkey === '5ec4280cb254fd70c7a9d099a57764e97dc20a9f5e9303ab3c95411a1079b355') {
        image = 'https://nostr.build/i/869efe0cd3535d1da2b0475f8d289c13ebf518533b9722c10a62daf66846e7ef.jpg'
      } 
      else if (pubkey === '44bc3b9808cdd667d4a8a4eb7899a907158149ebe2ba74196853baaf2d37ba4c') {
        image = 'https://nostr.build/i/a8e1559210cb284d518b8ba6d09720d6923d038305c793305a97e4c274e47486.jpg'
      } 
      else if (pubkey === '67773db326899eda356f3ee02eb9197edd56014c2d6e299532e76686e09ee2ad') {
        image = 'https://pbs.twimg.com/profile_images/1655954613579972609/5zQCXS7z.png'
	image = 'https://pbs.twimg.com/profile_images/1594476567555887105/qDdxN8jo.jpg'
      } 
      else if (pubkey === '61e3d488411361375cab16366ef0af9390943027a499caaa43ece08b6e81feb3') {
        image = 'https://nostr.build/i/ccb2ca4f77d5ba620afa9aeea1313bf53ec55297b73c3fb17ced474a19654295.jpg'
      } 
      else if (pubkey === '44bb65a59ac5c4b47e255d8853ddae8199fc2f990731767e4a3bec56351a5043') {
        image = 'https://pbs.twimg.com/profile_images/1674155700698882054/wYBCvgXT_400x400.jpg'
      } 
      else if (pubkey === '7dc75530f64538681b67184867e44fe39dd50c996b1d78a954b5ebc07b4d0e8d') {
        image = 'https://nostr.build/i/3c5b8087d306d7e0df1155e8c75904bb5c0db3123af8026a1872f5bdab83018c.jpg'
      } 
      else if (pubkey === 'd3754bd54a417b5c248bd453e55908b511c82590583d04abe0171fa8e49722d7') {
        image = 'https://ul.h3z.jp/f89m3qs8.jpg'
      } 
      else if (pubkey === '43e6211b4e6085b7787f21d298845be0d52f1ab63f1158404920151910fa1880') {
        image = 'https://nostr.build/i/1afd75662a06e94c345ba72bf0c444142743e051948aebeaf493ad16cd697edc.jpg'
      } 
      else if (pubkey === '01feb17f80a7037ca2f99626a53cd6f2509ac2b96779f2b68383cf2e86dcfcd3') {
        image = 'https://nostr.build/i/e378398986569f2a8f4c9c97aba94907e1240c5923a2635aea666f1b773a1d3f.jpg'
      } 
      else if (pubkey === 'a49271f9123b37bd9d399f94a1dd360e68baa48a2ec29e6c2c3ce5593738e7cb') {
        image = 'https://nostr.build/i/b8bfe50be4a22ceefce20baec7163a96c33bfb12bedaba807bbbd38d3a4d5d6f.jpg'
      } 
      else if (pubkey === '43ad7b173b3a0e7bcc446b0b126c94fbed916e931d87ed23ece4681b71d01876') {
        image = 'https://nostr.build/i/346773d922d8090b8961ae7b23d00b6a0d0e49db42a77607aa2cab9cf49e0392.jpg'
      } 
      else if (pubkey === '398662827c9fda18465266565286cebdbdfdf718da314bc7ad20badd979224d1') {
        image = 'https://nostr.build/i/ecd05bd196da40e4bd027f47ef0da031356b5d4a7d90d4656c08aecbcd694eb5.jpg'
      } 
      else if (pubkey === '0287ba7ead8486bb5058246cf96c8f0d7b046be271ac56d20bd3929c13b4ec51') {
        image = 'https://nostr.build/i/f5c203dfa9a7cd21cfd218e4bfa60c15d2d5d5b985518125d1766ef169843836.jpg'
      } 
      else if (pubkey === '7f011e3ec9ce4d170f108b267f3b91e3fdd5e9ad840177bf2b8c71f1385d1f1b') {
        image = 'https://nostr.build/i/f4af15b840fa792c3d86947b6b12472f6180f227a256a7c578b03d778394c91d.jpg'
      } 
      else if (pubkey === 'b8d0e9250d1ffbfca5e8c904fe80bb0f130a9e11fe8ed8909c966d78d2e34db5') {
        image = 'https://nostr.build/i/e0cbe9044c9282c422e3d2287e65da4b5c79bc3e2696ee7e5dc232214320be8f.jpg'
      } 
      else if (pubkey === '836cd841732058e7fe5f6dd5b047f262e57f6ce13db4a6b58af2590695e70e34') {
        image = 'https://pbs.twimg.com/profile_images/1675381918798594050/GPqgidXM.jpg'
      } 
      else if (pubkey === '8cd78801395035dffb30503468b496b289756c8bfd9809ecdcad1f4640b6ef3a') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDIwOSwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDIwOSwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey === 'fbb7834ef6e231533ac568d2287c215b64e76cce01ed5c01560664b44398f8c4') {
        image = 'https://nostr.build/i/nostr.build_f835d7aeef19983f438ddb08a3fe1ada6f1ab29a8939662dde4087b26149caea.png'
      } 
      else if (pubkey === 'f2c43d8ae472c768d6d9213520440710612bc2d906a813980eb176727c052a7e') {
        image = 'https://nostr.build/i/312771739c3028f6afa62f573455aa2fca99468266e94b6ea7b98fc08ce50160.jpg'
      } 
      else if (pubkey === '6dd9e8827f4da3e8c41923d24d10d270a955dc402d6d03fddf132c7adf1576e8') {
        image = 'https://nostr.build/i/173c12ade9ada4f4e964e9b68a97ce0aa3ddac527cfc16df51752d0dea9c6263.jpg'
      } 
      else if (pubkey === '677e0ae3d04d2d794f5a63d7ded9b552c3de6aea684211dc078863b981d62846') {
        image = 'https://seccdn.libravatar.org/avatar/07c696d48e924e14f085abf989b666e8?s=300'
      } 
      else if (pubkey === 'b866f899f586ed8c6ef270efd13ef190e61cfca293d5abe30e8f5eef0d0ff03b') {
        image = 'https://nostr.build/i/d8b3f3a51db39e1c9f5ba5bd04348848536b21c2245f40f6292415403a997a3e.jpg'
      } 
      else if (pubkey === 'aee8ae8e3e2e789115ccaaadd2de6dab4706c0d6459058a65138ef2296142421') {
        image = 'https://spy-family.net/assets/img/special/anya/10.png'
      } 
      else if (pubkey === '49362508b17e916337e3430547cf134d77f02bc7ce0219e17ccb3da84c68312c') {
        image = 'https://nostr.build/i/80ac00efa9631fa4089debfaa238cbe491bfde79d9eb31bda9b01e2981cdc6de.jpg'
      } 
      else if (pubkey === '8888888890493e0c6a6e4a24ae3319a0d7fc595ca3d8e5cae19954e1139008d3') {
        image = 'https://nostr.build/i/p/9DA3757A-B231-4E91-ADD7-4576112F0A01.jpeg'
      } 
      else if (pubkey === '39d75d3385404f1e9bf6fa392d5b8981036c035c8b7641c72d06ac793d8e9fa0') {
        image = 'https://nostr.build/i/a79b2fe473e6903cefee3a2abd67b9663d42ea4004937062ed94e2f7bc41d477.jpg'
      } 
      else if (pubkey === '63e38974854580ba7b4ba579b2d42909ed5fc20be1eef48efb0ea3b75765cac2') {
        image = 'https://nostr.build/i/e6dfdf8405ba73f3dfa801c0532a0f071be05fa2a00eba68f7d323c34de667fa.jpg'
      } 
      else if (pubkey === 'b7b0728319477aef678b9c17127636e166266641d8db77f5d4296b49d2f11b31') {
        image = 'https://nostr.build/i/4e00c4c78201b7ce87e6a32beb9520c7ffa6f4f6c09e301514f400faa679e6b0.jpg'
      } 
      else if (pubkey === '30e3679080f4a5eab2154919f756f198df360667c9d4254307b4a52d9aa51d41') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDEwNywzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDEwNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey === 'fe63f4f840c30e5daebd83bdb048eae00858374b7f04c6800c6c49d28ba10f09') {
        image = 'https://nostr.build/i/5e990251f00167a523f53bde7dbc5e6b84013fe0268ea27e8565c006dcdd5d74.jpg'
	image = 'https://cdn.nostr.build/i/c62b9ce04ff4297504675c733b8b829953e5634b21b3247fb7dc0463097770a6.jpg'
	image = 'https://cdn.nostr.build/i/adb4964603bcb2b0d90edf097e98e9a3341bad47f9b4a53e8a0ae19dda336f18.jpg'
	image = 'https://image.nostr.build/4df95de07557dfb70fd0daa605503713606230ec5e35c2b3f773ae717e10b213.jpg'
      } 
      else if (pubkey === 'cb39315e73dc4e5b8e158c2f8ddf81e769847164f6d198ad610e71434f7cbf2b') {
        image = 'https://pbs.twimg.com/profile_images/1656948140925419520/qmYjlcUX.jpg'
      } 
      else if (pubkey === 'd4c58636df2a14bd3acb7c1820a3eebfb3eb69c9e3b15b755c572f6541a1bc14') {
        image = 'https://nostr.build/i/090f124a51b6c8b9c64beb8055bb4b1e8b804f666ddfe64ae2d1a03c9cd378ba.jpg'
      } 
      else if (pubkey === 'a8a9efcc26234e9666e91e81c7652f8209a13104dd9ed32615f2de7bf4b58a28') {
        image = 'https://void.cat/d/AMYpAUhPJ87oYKEvecJCKB.webp'
      } 
      else if (pubkey === 'f0cffc7e13f9b36421faedc13d47d278c4bbe5823e481729e86f0bd36fede01e') {
        image = 'https://nostr.build/i/351af73ee8bb4b577e79ccd22a1e487416b061a02cbf14528460fa37c24dbbd2.webp'
      } 
      else if (pubkey === 'ede3712ce7ea6159b283d1075308736b080f01cce643a20e06d65a158267636e') {
        image = 'https://nostr.build/i/d06c5dc59ad24c975b94c03033f260e45ad2f228f8c2ad9adce57eae79381bc1.jpg'
      } 
      else if (pubkey === '6169c0b709460b29470e3d8b3f67483599eaad0c0b2f56566d814acea9960983') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDEwNywzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDEwNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey === '91469cca1eb54b5ee505f42b150e1e7b8c8e0c7e1a728cc3047fc6d216603920') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDEyMiwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDEyMiwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey === 'e1d62c126d8991a45d9800d281783dbefd923e132744abc4e7195279809c3a87') {
        image = 'https://nostr.build/i/nostr.build_5583fde79ae3819f1efdeb277a8b659da9f97a17b2e02abea37d810e0545583e.jpeg'
      } 
      else if (pubkey === '97565ec7057a8300fc6924307f8b9a2c4408f5d2841a1119f14704f0d7ce0e83') {
        image = 'https://nostr.build/i/9720824c2ec3789c82fe224676fa501b6fc9e8f0177eb2c9328067e3a7cf54bb.jpg'
      } 
      else if (pubkey === '4e5ace6f9b05cd3712ede101ab8439c550055c1c46f47a722e8827c4d0bbcf6c') {
        image = 'https://nostr.build/i/0cb6dc05cff80eaafe54aedeb1a3b5ee28eeac62fb840e61a4cd2362cf0c56d7.jpg'
      } 
      else if (pubkey === 'ed2b6fa242b110d823c737afad33287fe05670edb829116bbc4a04b24f030404') {
        image = 'https://nostr.build/i/06d74e20cd974cdba4c33f3c56c44a48b9715b843af38bea3884d8b01f3cf8d7.jpg'
      } 
      else if (pubkey === '116d29f1c830c356ad0a7c492e0599ed0893cae23f7af8d2bcd147a41e0d3a2a') {
        image = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Turner%2C_The_Battle_of_Trafalgar_%281822%29.jpg'
      } 
      else if (pubkey === 'b37154c9618ecfb1918d434b2fbcc2c5a48308a4089d3c7de451b90b3c35e19a') {
        image = 'https://nostr.build/i/5415c04cb9438d08f23af3ee1b5e028606cf6b2147cba47e24cffd9b811a79d1.jpg'
      } 
      else if (pubkey === '0b08afe10308772036a4c0021ee3a0ae2d770b6279c36dca694221c2a4156351') {
        image = 'https://nostr.build/i/c485ad99a4a8a5e71531ea874430ffd63cfe435f9cd2e4e7f075f418777a4cdb.jpg'
      } 
      else if (pubkey === 'd0509c45584583a183737f6cd8d7c739ddac5bc5822580fbf663f5f8841168a4') {
        image = 'https://nostr.build/i/87e678966d97c90cf1af455c0471d52121a6620c0301df1d0e151a03dc205933.jpg'
      } 
      else if (pubkey === '6b63fde4d8c989aeafe2d10acc4209c518393dde5771ff1f2837d4bfa1801eec') {
        image = 'https://www.gravatar.com/avatar/de92066fa1b908dbdea15c819d357db4'
      } 
      else if (pubkey === '524dd61398ae15e8487d899c7409f1047ec48f73f93044bcad578ff1280c029b') {
        image = 'https://nostr.build/i/07026139a70d7f30b7a101189a3c5eee15171c19ee311de763ac8a8170149926.jpg'
      } 
      else if (pubkey === 'b2d2d4a014e39d003b0bb3d501895599c0220d8a93521fa74050a27227447c35') {
        image = 'https://pbs.twimg.com/profile_images/1563065151561269248/UBrQ6ahO_400x400.jpg'
      } 
      else if (pubkey === 'd69a07270aacc7bb19a911b01004263e329e1bb52771d9d1f42ec79ff7b791c9') {
        image = 'https://nostr.build/i/1f5500ed071d661569d4659d5d1795fb7f84728aa29b0780fee1c2d945a7571e.jpg'
      } 
      else if (pubkey === 'c616451b9bf22d7b82afdf361c221973b7d5cf7ea8f1276b91fc8e7200fe3738') {
        image = 'https://nostr.build/i/7ebe84af2683bf0a715df554ef551e82df85eea584f2c3eebfdf05fe1749fd71.jpg'
      } 
      else if (pubkey === '9a3b39e013a8fa1018a6b341c28b178d3c292231d2c23288fdf3e2936664e7ab') {
        image = 'https://nostr.build/i/9516fea3dc8880374bf35ad311c4ca6c70c6317daf5b2c11e1d229d560c543d8.jpg'
      } 
      else if (pubkey === '04b6ec6918fbde3a9a93bd0fffd48c1e29d5240a88fb83c08651877455609a62') {
        image = 'https://nostr.build/i/a9afef3abaa112887dc85f747ec84af0543898936639c4e69ca9250768a0adb8.jpg'
      } 
      else if (pubkey === '41f8dc3d78becfc499adbbe48cfd9d15b760f267a8088729de7180f12a4f16e7') {
        image = 'https://nostr.build/i/b023e0ca184fa58bb76f417a83cd8beb9296fbd35acfa8faa1df0313ffefd154.jpg'
      } 
      else if (pubkey === 'eb4a1f13f3a0a0be926d4d3ac295d96a38ce8c75002554f41f5f1125ace5f5db') {
        image = 'https://nostr.build/i/63f2670d56703d1971e4ac31580c46c36cd4d52d5a33949c2a47b0c029373690.jpg'
      } 
      else if (pubkey === '2f35472b88c0b3355d383e0b66f80aa45ddd564d99e54343f727fb8b4abf827a') {
        image = 'https://nostr.build/i/696923da0082efbc836bb07b543aeff6ac0f44563406daa4f563cdb7ea4b9db7.jpg'
      } 
      else if (pubkey === 'bbb0ce4d51f99ef3ae2e23bf49ffd568b7caf29abaa472fb0782f29537d41710') {
        image = 'https://nostr.build/i/2ef37a106ff60f0d75649c223e5138781512668a6324e8df74b4a80af6c7f109.jpg'
      } 
      else if (pubkey === '72a997a5f37278af7db0f26fd5e27f46327ac6a898ba6a6d7fe7ab7a9b6b64a1') {
        image = 'https://nostr.build/i/a4c6d0654cdcda8b5e1c389d92efab97667650bf189d717559cb80079738f2a3.jpg'
      } 
      else if (pubkey === 'c8ed719d86d03426dd0cede37ba44437c69c91e3dc92990e7f85ec728d9644da') {
        image = 'https://nostr.build/i/cdbee996ea2d7c60a3908c0171a746bada8d30fb46ad5d944fe7cccb136199a2.jpg'
      } 
      else if (pubkey === '415856770c2ea67ded29cf54842b9df5aad200efb19839b3a14d9221be6b5335') {
        image = 'https://nostr.build/i/nostr.build_0b1a9d105698d1451da78b43499a214d924e67f3658ee08f1836623e8c6df9c9.png'
      } 
      else if (pubkey === '04ef7823524aa9f946bd38d17a4977e2a0e1ca7441bd507fbdfcffcf1957aa35') {
        image = 'https://nostr.build/i/f4ebd2be1f89f0adb3783f9726af96504b33c41212e9376a386684890a09a437.jpg'
      } 
      else if (pubkey === '19d71fab5a72cc35c677b08ba9eec90e17732d554e02ccc886e56e057d2f494b') {
        image = 'https://nostr.build/i/fd27c049466c35cab2b6d6025c4eebfe28ac781d7d11eff57ac7cb264455bddc.jpg'
      } 
      else if (pubkey === 'b0ff018f158d5e1153c66f8bacae81ac687b02ee291b37cebbe6e96ddf147b31') {
        image = 'https://nostr.build/i/ebbc81bcefe78d66783665acb585661a785131e1f204be1b21216f8dcb207c07.jpg'
      } 
      else if (pubkey === '388b979cf6061c4ab1f939fd20473f10eb993f275689ad7d6bcb6ae6668f3cda') {
        image = 'https://nostr.build/i/070eadda1fe7d848d27c0cc39b35a0f6d34334d0c7349a1d64f238174f6ff0d2.jpg'
      } 
      else if (pubkey === '74ee66fb623336a85a1d24c44b9c0c9232318db5bfd32650714d9e652a29010f') {
        image = 'https://nostr.build/i/e7675ebf9e652695374b6d1f1da1240dc968420918678c77cec82e4f9a339028.jpg'
      } 
      else if (pubkey === 'a2c46d964d8baab56f2618c3c61ad516ec1ed00ba814b18b6f3b6ed4913a1022') {
        image = 'https://nostr.build/i/374bfa438f3d84d29ef0403aaa138ff4a5e185cd089ea2aa1d0f1b3c2aa6456c.jpg'
      } 
      else if (pubkey === 'abdd6b239da458bd3e1da2612d27b51898458f26755d78929a026257e090a2f6') {
        image = 'https://nostr.build/i/d37a54b7c1f1e155ae9f5131b79b6a8775e2c0a3ced132c014f82335916d4223.jpg'
      } 
      else if (pubkey === '109006f797ce3e69ab49f3b324b7b7e0bd5e923150e2e482d1c3226ca9f0ecdb') {
        image = 'https://nostr.build/i/b50a26e800ecb717a0d839da3aa169e2adda94445af5993ef0e27a2e129d6a23.jpg'
      } 
      else if (pubkey === '3752f29fb7220f34793de0d143b12ac287c8d0013821fb18aef12257ef937156') {
        image = 'https://nostr.build/i/612255a533c79b4875a4cf29459b3fd544beb20435454dab617ab12d2e61309a.jpg'
      } 
      else if (pubkey === '04ee8246b8daa08e3fabc7f346ac5a019f2ff998475a4318d59997a22c633425') {
        image = 'https://nostr.build/i/f905425dd29fa37dfb6446f167f2bd63643e134981470a61c8a7f1d7a31b0512.jpg'
      } 
      else if (pubkey === 'dbbcad0ed779526301c75cb9399cf4423359feea21010724981b19c03198aee6') {
        image = 'https://pbs.twimg.com/profile_images/1588170276058980352/FUdE7BgE_400x400.jpg'
      } 
      else if (pubkey === 'de74a97207060da0f03402d20e74b2be55ce772939db3c9d98170679190e3add') {
        image = 'https://nostr.build/i/068dddfcdcafd4f50a9cd83a38dcd1596479e6711a278730b7cf313092f9ae55.jpg'
      } 
      else if (pubkey === '04daf4248f8d45b6de2a33e8c58f2bb8040f84ac6e9734b0575c6b793bddcb29') {
        image = 'https://pbs.twimg.com/profile_images/1550103621651804161/QkvgYPzx_400x400.jpg'
      } 
      else if (pubkey === '8ef118a8c4ef3b6cb28acd4463817984de3022005fb2739326afe21be02f6a48') {
        image = 'https://pbs.twimg.com/profile_images/1592373094491951107/kqX37P8j.jpg'
      } 
      else if (pubkey === '12cfc2ec5a39a39d02f921f77e701dbc175b6287f22ddf0247af39706967f1d9') {
        image = 'https://nostr.build/i/p/nostr.build_c644638c6f0892b49ebc7870b4e45ddf4a17c575b26570ba70011e6e08386902.jpg'
      } 
      else if (pubkey === '6b18a135daa9f3d1907db2a57e7b01a09703acfab773d2d300682ac5a5d4c8cb') {
        image = 'https://madosuki.github.io/static/media/for_nostr_icon/nostr_icon.png'
      } 
      else if (pubkey === 'e8d265faa6655cde9af18682723fa1dd8e211891787afe8e791dffe04f21fb29') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/dd8f464923b217d274adde8983d42362.png'
      } 
      else if (pubkey === '2aa6196aa401061b670f041d64cc74ae6016f6b6b95c053ff031f31a112f658d') {
        image = 'https://nostr.build/i/7983d56e0103d8d202dcb011f3b2c29174dec7625778ee65afe80f52c8e16f0c.jpg'
      } 
      else if (pubkey === '2bb82b4c0a03cc1a341718e9cfc010fc9b9dd17a9f0c1d1a9cbd53db1aa7b5f8') {
        image = 'https://nostr.build/i/5bb8d73161694ec63a9e96674e14ccec83e8b286ca1f7507aef83a6a2e555b03.jpg'
      } 
      else if (pubkey === '2a81bcc2a9b1327e0628bdcc100521899e7ffacd4d9543cd3db5a45a641d85af') {
        image = 'https://nostr.build/i/44269d5a967e903db1527b1a26629cf888a9f96f7b6ccb9058d682f10cb8668d.jpg'
      } 
      else if (pubkey === '84bc162909b7274454786417fba90ab23d2e39801db6d8ca6d78b55b56ce12d0') {
        image = 'https://nostr.build/i/f7649c8b095a7a555901a3abd8a10f44f8dffa980f220d02f84b19a1c121670e.jpg'
      } 
      else if (pubkey === '78bcf052141d09b7337fd6f37aec605e0c9960c1cca7d3813de6a249f2468d83') {
        image = 'https://pbs.twimg.com/profile_images/1523517405737078784/PLWJekNt_400x400.jpg'
      } 
      else if (pubkey === '7be13d4499b165578156f581e933d33b33c0dd6a7817221edcc0466150756804') {
        image = 'https://nostr.build/i/nostr.build_7846460248ed7015b49f796aa2a9cd3a17448ee99acda9b4c44cc2e858504898.jpeg'
      } 
      else if (pubkey === '2d2c1d8073e04eddcb400abdf4d4818cd884298eaf232dbf78b0ff14045ddd5d') {
        image = 'https://nostr.build/i/9fb1fea1348bfb535e0430600752a614ea4dff54c19fe88df038ecb935218851.jpg'
      } 
      else if (pubkey === '332d395ee4914832ef278b9f9da08edab591fb40b2021f70371919835788b531') {
        image = 'https://nostr.build/i/c9acdc0b40b8e1d3ae92bdf2f94e4a90db653ce1b885957e10c0bebc02fc5a9f.jpg'
      } 
      else if (pubkey === 'bd83e295f81715182033badf9e80e49193eeda4231f11babbbd474417c2beed6') {
        image = 'https://nostr.build/i/4dd2405a588c67d9c4305928693d20eb3c2491086f821cbfdbd686ba90aa17f7.jpg'
      } 
      else if (pubkey === 'c9f529352d07a2b5233c7449f7c499a045e6dd4be0e005b7714fea2c919c3b96') {
        image = 'https://nostr.build/i/2f9281749bc8c8f15823c807646a725c49a67c177f4928b9d4c1df43654c9eab.jpg'
      } 
      else if (pubkey === 'c909252de5546401e9717846a27d3aec0beef9bd8360bcd7cf5480252dd6776d') {
        image = 'https://i.seadn.io/gcs/files/aca4687cd030bee4d19ea596ffc41556.png?auto=format&w=1000'
      } 
      else if (pubkey === '9c2e769cf692dc442945aed5f2b7fea39f03f27abc68870b43f00003c7e8223e') {
        image = 'https://pbs.twimg.com/profile_images/1623481481032081409/eli8nb4g.jpg'
      } 
      else if (pubkey === '86512238a62ab436f5542e3c71562b257630560d53570086401c70de51632dc7') {
        image = 'https://nostr.build/i/a3184b0066441c5e8b962475a6c767f7795b91d79bc83ff1c11366062be43420.gif'
      } 
      else if (pubkey === 'a3d18b3c5599164b33e8779fa0385b6f0193681e60f99b20c292cf3cf36069cb') {
        image = 'https://nostr.build/i/e194fa82d92eb3ca7e28f2c14721d311287235fdc8050ecd354c25f5e68bc0b0.jpg'
      } 
      else if (pubkey === '3415211216325781a1a7645b2e7697008074b551a0f07c1d8f678131b911e296') {
        image = 'https://nostr.build/i/c72ab6bba1e6e3717c4a222fb6e211330de506e280fe9a97ee83bb6237eaae60.jpg'
      } 
      else if (pubkey === 'ca339db1ea6561c9fea498f90c515676c4561bc235a4561e3884f68260ea35cf') {
        image = 'https://pbs.twimg.com/profile_images/1609549658552143874/HU6-XyIq.jpg'
      } 
      else if (pubkey === 'ddc4537da4f9409fb41250c41fd6d1dd04a22c7fb3725361fe7bec7fc8bd331b') {
        image = 'https://nostr.build/i/5b09634a96cc3818a719aba1de06028fd01b0e9044e0edbf9e0e78c7e626c46c.jpg'
      } 
      else if (pubkey === 'ed99311baecf0da5e776d7c96a122495aae99f6b3aea05beaaa3c3714aeac378') {
        image = 'https://pbs.twimg.com/profile_images/1440865813729185800/BFYudyNw_400x400.jpg'
      } 
      else if (pubkey === 'efb231ef9e6bc4a19d49c081fb069279ac433df0ec7bcef003cf7dcd3c5933d2') {
        image = 'https://nostr.build/i/318b60e9f7176be6ff9ea8255e95945ed02cf1114981660ab983bebb6fcc6f36.jpg'
      } 
      else if (pubkey === '185c880957f7b6029419dba98947e0d96079baf1ecd506fc6634905c1ee8312c') {
        image = 'https://nostr.build/i/43e495562aaf0399a239ce9a585a2c3bae209028e9fd9aa992fc3c73fe28cd26.jpg'
      } 
      else if (pubkey === 'd7f602b1b271a19fef2c0684df4926bc168270de828aaf2f173cc8fa71b46ecd') {
        image = 'https://i.imgur.com/7FZbiSf.jpg'
      } 
      else if (pubkey === 'ca5bb2649d508fb660f60bf423afa3872b803c52a30f30f0310f88a449e420b1') {
        image = 'https://nostr.build/i/49631adad3228bd43c8029ac2ada8b221d1907b043f46a410091bcf29d4df682.jpg'
      } 
      else if (pubkey === '722422c4168813f71ba184c4cc297ffb3fe5a67dd9487ab7b4b8865a73f9ed8a') {
        image = 'https://nostr.build/i/3ee2897f9f857bd548f6ea5e2eb86db25cd4c3ecb374edba1ce798f5f5808167.jpg'
      } 
      else if (pubkey === 'da08901f86ecad369089433960399c10bf37128ce0e339169dfe676d1a0a4b1a') {
        image = 'https://nostr.build/i/33c20371f3988b3f8a39fc6e5cd756eb1f29c97ef37e048d23d0a224afe7aacf.jpg'
      } 
      else if (pubkey === '4643d78886c1e0776c7dab680e8f583ed4f338f5b5708ba233c1d5b5d0ca1dcb') {
        image = 'https://nostr.build/i/39b9aec8a532f92de3ad577178ed4ff9933269c744432b311b635d7ee43659df.jpg'
      } 
      else if (pubkey === '283fdfa5c66777f09f5dac335cd0f62cca2cd5f3001c3f726ed830d064f6b10e') {
        image = 'https://pbs.twimg.com/profile_images/1674381378417471488/MrMQkqXn_400x400.jpg'
      } 
      else if (pubkey === 'eecdd4ecef3997cc597b41420fd2d628330de36bcc31ab597979125ed7705bc3') {
        image = 'https://nostr.build/i/f6c9deaf8ae956b4b7003f1484133f509bfd55f44132af011546ab858bb48053.jpg'
      } 
      else if (pubkey === '7577c1274eecd607cd79ba689acfe001847ed680535f98c6975a7c59e6982223') {
        image = 'https://cdn.nostr.build/i/6151273b5ff5b7da88cd0b1342f2bae8e0f3b355b61d654c32dc104b9175a306.jpg'
        image = 'https://nostr.build/i/05c17ccace64260a157ea87af1206683514d3da9cbf8cfe5dd199cd112288b04.jpg'
      } 
      else if (pubkey === 'b154cef116c884937a1759a44348bb8834168a8ef00a1bf922b01f64fdd9c864') {
        image = 'https://nostr.build/i/dd568e7ea9b9fb5504de9c2d6a709eeefe2cb804b199c99a2984322be3d0e306.jpg'
      } 
      else if (pubkey === '1dcdc632e1f6be656cca56169322db5e1de9389de6f680326aa04f964a38c671') {
        image = 'https://nostr.build/i/7f534047aa9f1c70c61913f76c7383f8ad9c1775bc7202437e4b9a473f7620d4.jpg'
      } 
      else if (pubkey === '0ea6ad7c40b250adfe06492bde5b4d1abc49f63774b5d37a60667851278cec4a') {
        image = 'https://nostr.build/i/1f9297fba3dbaf501cd42571403720d3c00dc306be98b73ef82698063c9cedbc.jpg'
      } 
      else if (pubkey === '439add05f587b535ac64a9f7d8a7b290fa870f6bb14e52569638b8dd31f61e5d') {
        image = 'https://nostr.build/i/01587b4cc3a90dc27fd4fe7476cd59abbabe79ef1b0c80464e4030575f52da2e.jpg'
      } 
      else if (pubkey === '7e174fb6c8509cd62ce20cc847dde2dd4f23da4b7f433cb6431fd79c7d9f1f6d') {
        image = 'https://nostr.build/i/29964b6ff1afd336c3d793c0df7ef818b9b71c96e1a665ef0396c0fddbee36ec.jpg'
      } 
      else if (pubkey === 'bbbe1c012adb049f3c4829bc956d47addd49bb95d94e3dae8c314a5a7b1d90f2') {
        image = 'https://nostr.build/i/b0447feb017096cb8a3d154492e21536bd03f3391eec6ea63af01a8d2070e769.jpg'
      } 
      else if (pubkey === '6915cfedf9f3eb8f74b45980b77b6eccca86ce98e10e3846170735e64431d34b') {
        image = 'https://nostr.build/i/e6e264175ea73524348d48c88f287973c0307bc14c7745a9668e9b0fd5efc95e.jpg'
      } 
      else if (pubkey === 'd9a9ee2496390e243f6abfbf6ef8f419328a2f790c8e9232d97795f0bf0d8c11') {
        image = 'https://nostr.build/i/df33d60c231fad470c39e369926d1998d87641adf69b65fabbbf1b524668da65.jpg'
      } 
      else if (pubkey === 'd62679fe8b516f68bdde88f0fcd97da1e77f3182afd5840c588ce7ffd9e54552') {
        image = 'https://pbs.twimg.com/profile_images/1640640191714197505/CBYVhZSd_400x400.jpg'
      } 
      else if (pubkey === '60830ab20496434c57e16d7753f89b53193fb3dade5be4867e648aee3a14ed3c') {
        image = 'https://pbs.twimg.com/profile_images/1502750789206388736/yvhrTeAK_400x400.jpg'
      } 
      else if (pubkey === '23395bce1a18fe5ff5bde153fcd47ecd1cd66e686684dfd2cfcbd9fafd305cb3') {
        image = 'https://nostr.build/i/ae39c3c07f6b40096b6bd05a8ac0f024d911c6a3425dfe4beec468e427989707.jpg'
      } 
      else if (pubkey === '64bb0a33cad7d47971c7d7d3552dc9f91e383673a742994b595a24bbf05de2f6') {
        image = 'https://pbs.twimg.com/profile_images/771952501495136256/6RIxRpu8_400x400.jpg'
      } 
      else if (pubkey === '7548d4488d1cf3f3d5e2419a10cf369d83b9f3e6f8575edb92e12de8c8167b98') {
        image = 'https://nostr.build/i/a8048c815c8bbcfcbc7347dc020e0bb882ee84f0048435cfb8b1ff6747033145.jpg'
      } 
      else if (pubkey === 'f1e84c20355294c9ed752cd3993964ef056d65d74ea3b4a0572c4ec1f9ffcbef') {
        image = 'https://nostr.build/i/b979be193eb41173f5115622c1062818e78d822471e4d263d625fbf7ffa187ec.jpg'
      } 
      else if (pubkey === '8530b2b511b340704ec5071c39d95dcb93a9b40b9e4fec5fe718c400c2f2ae09') {
        image = 'https://pbs.twimg.com/profile_images/1363121004252340224/3fU-Q7Vz_400x400.jpg'
      } 
      else if (pubkey === 'c1b6a3f7f694ee3f1fab9bc02da668795ad8554bba713fe302cfa016a20ab09a') {
        image = 'https://nostr.build/i/62ac83cf3b2dc353478f19f652de7a7e9cb860853b3bb7cdcedd2fe568734d04.jpg'
      } 
      else if (pubkey === 'c0cd258c73ff34bb11cf9c6cf5c8e78dc2fdd6b5580b22e8d279f86931983243') {
        image = 'https://nostr.build/i/269e83a93fc73e155d90cacd744ca18959fe4c96e278abb9f4357a6408bd7c0a.jpg'
      } 
      else if (pubkey === 'f4e916d220f9619e1ba1a287ae62d6631259d9e14299ace032f08b39dce975d5') {
        image = 'https://nostr.build/i/nostr.build_03eeedfcd38e3e54b8cbde5d02227e7a6d81c4d9a33227d31eed4519fe313a29.jpg'
      } 
      else if (pubkey === '3470ab670cf9872b8ef6d8931aa17223890758649251f2aaf2a6cbe3cc6f65d5') {
        image = 'https://cdn.discordapp.com/attachments/1068206832763555981/1068207349178839052/1C1EA55A-5F44-4E5D-A66C-96D7DAD63BEA.gif'
      } 
      else if (pubkey === '649eefe468ddb107c05eba6d0511d2a5298540fe4d5f0072b00636008fc72f92') {
        image = 'https://i.postimg.cc/y8whz8Rm/D6-BC5806-FFAA-42-D2-8-EC9-B46131-B3-F646.jpg'
      } 
      else if (pubkey === '0fe0b18b4dbf0e0aa40fcd47209b2a49b3431fc453b460efcf45ca0bd16bd6ac') {
        image = 'https://plebstr.com/public-images/icon.png'
      } 
      else if (pubkey === 'f9758ee7b4e8d50026fabf48aa4bfe18906f35813b143999c098641cf43b1dca') {
        image = 'https://void.cat/d/7Y52kW15uEc1t3CtHZpvwn.webp'
      } 
      else if (pubkey === '922945779f93fd0b3759f1157e3d9fa20f3fd24c4b8f2bcf520cacf649af776d') {
        image = 'https://nostr.build/i/nostr.build_b665919cb7cf1eb9fe4e100e195f370a79dfd3f63f8e6818c0e9a6fd0a9f9916.png'
      } 
      else if (pubkey === 'f9aba9203da890546019064ff4f449fb820cc0c22cd92249eacc6a435b4d0dc5') {
        image = 'https://daorayaki-fs-bucket.s3.ap-east-1.amazonaws.com/f9aba9203da890546019064ff4f449fb820cc0c22cd92249eacc6a435b4d0dc5/files/1687757133044-DAORAYAKIS3.png'
      } 
      else if (pubkey === '59cb0748d57e3193f7ffc9333953716864eb7970c038e7299d7717a49602464b') {
        image = 'https://pbs.twimg.com/profile_images/1230337240926048257/MumrnIYR_400x400.jpg'
      } 
      else if (pubkey == '60f2f1621970ff56b45b5bf55687f55c4c506b8c574575d537b1212570292f8c') {
        image = 'https://gyazo.com/6ac3ed27bd2644cb247938526646e41f.jpeg'
      } 
      else if (pubkey == '920cf771aa19a105a2fc5dcfee2d399003716defb66b5fc4e9e9a14f389cdd01') {
        image = 'https://pbs.twimg.com/profile_images/1313116386684616704/H9OZ_R_M_400x400.jpg'
      } 
      else if (pubkey == 'd4843f4c280abba3d43d84ed7924b2567d7c166f5e72985b9f06d355601b5d78') {
        image = 'https://i.ibb.co/5r42hP4/ezofoxprof.png'
      } 
      else if (pubkey == '8d6ca15a767168b3d8719520254ba15904914ba1afa898f6796a3774880fae66') {
        image = 'https://i.gyazo.com/e45eec0b963b6afb55a94f2b67635fe6.jpg'
      } 
      else if (pubkey == '1ece480f8382ff8ea6ac2a3db337855b30f3d915bc3a86edf87f7ac7d21478fd') {
        image = 'https://pbs.twimg.com/profile_images/1569665887917195270/Bg-tLupq_400x400.jpg'
      } 
      else if (pubkey == '7372dcf5b87b7309320b41fee8de33d84ba5641a81686dd9b848f681166bf004') {
        image = 'https://pbs.twimg.com/profile_images/1589639605992595456/XPuI-vhw_400x400.jpg'
      } 
      else if (pubkey == '7055804e90d350f215e812ec1e032a545b4fed317c88285ec066b1223fd78cb7') {
        image = 'https://nostr.build/i/nostr.build_5043e51406170b90180db925d5f62e9eef65f00b808448a9e222a710cb7349e0.jpg'
      } 
      else if (pubkey == '74677f48d0c97b7fba1812ee11b88d28a77db9cc293d971e5272a99ac149e9d4') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/708/333/original/69d85d0fc90b9fc4.jpeg'
      } 
      else if (pubkey == 'a424e5b94f62eb98be760ae37d185848a185624dd4346f704a3a3fea93852b73') {
        image = 'https://mstdn.umiu.si/system/accounts/avatars/109/807/885/376/040/379/original/3fe196a87c45d087.png'
      } 
      else if (pubkey == '04918dfc36c93e7db6cc0d60f37e1522f1c36b64d3f4b424c532d7c595febbc5') {
        image = 'https://thesimplekid.com/thesimplekid.png'
      } 
      else if (pubkey == '8a000bd141200f24a517a9879631b5f4d660a6465217c360e81c07869b3136be') {
        image = 'https://i.postimg.cc/rws2pB6x/F88-D276-F-71-A3-4-D73-8-A08-4-EFA73-F6-CA67.jpg'
      } 
      else if (pubkey == 'da49adaeefdeb5ff1ac6a05a5dab217bd6083c1301c4cfae237a1cf443e2e67e') {
        image = 'https://pbs.twimg.com/media/FoVzuSiagAAatKA?format=jpg&name=small'
      } 
      else if (pubkey == '1ee931021bfc8b078e40435c2718c0c29cc4ddb187b6de29caa68d1faf6f4253') {
        image = 'https://pbs.twimg.com/profile_images/924437605298585600/_2DSz1zu_400x400.jpg'
      } 
      else if (pubkey == '9010ae34695a2f501f9f1806ba373ff90369072a13e39617c0d1f403aaf1d8e9') {
        image = 'https://dogsorcaravan.com/wp-content/uploads/2015/12/DC-big-logo.jpg'
      } 
      else if (pubkey == '90c3aff4fce73c990ac713fd103f1b114c3cdb63702a6fc2d5af32b7412e8fd0') {
        image = 'https://s3.fedibird.com/accounts/avatars/109/028/357/866/877/269/original/41be6aee0f0c435584c2903bb1e64196'
      } 
      else if (pubkey == '2264ec9e619d6f2cbef0eca1f87f522c745b84ff9dd7309a900a66329242c405') {
        image = 'https://files-nightly.fedibird.com/accounts/avatars/000/000/001/original/0207e949bc2edaf6.png'
      } 
      else if (pubkey == '5f84a83e43ce1b9bc4bbcf83cc2aac5448625af68dc7b08f507c53716e7e6370') {
        image = 'https://s3.arkjp.net/misskey/894ba996-b1a3-4572-9ffb-d820cf434f03.png'
      } 
      else if (pubkey == '42262698a8cc5198af270774d331acc79466c1a76a3de65851a7d5e0e03cdb4f') {
        image = 'https://s3.arkjp.net/misskey/webpublic-fc165642-8910-4a8a-9171-9a7c3bd13374.jpg'
      } 
      else if (pubkey == '94e268f4aca4cc14613e1a6d50dab40882b9f08a31d7f6ba81604429b1bbba0e') {
        image = 'https://www.shutterstock.com/image-photo/closeup-portrait-funny-ginger-cat-260nw-1563541219.jpg'
      } 
      else if (pubkey == '92f35ca35ddb1a4233c7c5d59e70e4412e039ed2775952734af7fd4b7bf6eb63') {
        image = 'https://s3.fedibird.com/accounts/avatars/000/024/125/original/ad38c318a965e27f.png'
      } 
      else if (pubkey == '79e993f32fe62a9b2a34f9c77409d34c6710f7bf8d899b353da1fa5cd9e5d39b') {
        image = 'https://nostr.build/i/nostr.build_d5704c023cbc27944dffe251892c20faf2a0e8d8309c5c8f850f873dfdbe03c2.png'
      } 
      else if (pubkey == '579ef4c0be8033f9bb86f7bb1c22b9439b504b7e0293e9623bb08f6fca952d73') {
        image = 'https://pbs.twimg.com/profile_images/1439910470178127877/dxZo3sxq_400x400.jpg'
      } 
      else if (pubkey == '62adeceead563db21bba3462f76256717f37f7516ccf3efd35f4bd5d9d51c1aa') {
        image = 'https://i.seadn.io/gcs/files/d1326bfe6cc8e31b3b97e61c14ba100f.png?auto=format&w=1000'
      } 
      else if (pubkey == 'a75a91b6f29a3aa8ebb0321534b154d0c2ad1adba9df05f22e097037e0899d9f') {
        image = 'https://www.gravatar.com/avatar/446952dec62544bbade3a281d6f6c550'
      } 
      else if (pubkey == 'f29bc6ada333f7b09afeabc521ef15266dc73df13a6266c19e0dbd2304b86ccf') {
        image = 'https://pbs.twimg.com/profile_images/1146712249207160833/8AdAZi2q_400x400.png'
      } 
      else if (pubkey == 'fcaa58b4b233d811af3b9d76358f868e51d96d08aa5a89c132b827e7f7b836f7') {
        image = 'https://pbs.twimg.com/profile_images/1111968075/____400x400.jpg'
      } 
      else if (pubkey == 'b03750fe62acb4d8f63b4f5e3b22ef85ebbe70ae7c29f9c8dc37b3e7a20c8228') {
        image = 'https://i.seadn.io/gcs/files/e03f604ffca4291e809c174e05d7293b.png?auto=format&w=1000'
      } 
      else if (pubkey == '6d38a4cd613b36a611196c933b5fe1e9e313a58cf990c8353828e30f6c357771') {
        image = 'https://i.seadn.io/gcs/files/0a103546533d5ecd5c26c92432de805b.gif?auto=format&w=1000'
      } 
      else if (pubkey == '9e4df482682fa1170d36f6cc901234ce1fe4576d7e8c9dd444893312111993a7') {
        image = 'https://i.seadn.io/gae/0eblfojoKrnMgcUmWVrNb2uNqq7xCSUcL-5JEMWwPmfmZHO_FHLYEdrSnfIP_JEvzrSHqTmjdJXNChn4LUfVLCHySFEC_9sPaagcfg?auto=format&w=1000'
      } 
      else if (pubkey == 'b463e122350c4a6c97ed8962941167ac04f2964d64e08d982a8c3cf841e16bc3') {
        image = 'https://pbs.twimg.com/profile_images/1614631558673240064/Tz2PaRli_400x400.jpg'
      } 
      else if (pubkey == 'b3f66b8825198636d87a4dda0b2f28db7d6799632ebee8ee2fd0d96090055ff5') {
        image = 'https://pbs.twimg.com/profile_images/1424458182139662337/fc-M1ZkO_400x400.jpg'
      } 
      else if (pubkey == 'e7b0a99732858932238a19f7cf5d219346095dfc20209f92b894e90eab72b1b0') {
        image = 'https://s3.fedibird.com/accounts/avatars/000/024/677/original/ae6ecc22c10c430a.jpeg'
      } 
      else if (pubkey == '2aef205e438b0bb4658d81c1838f5ecd039e1a70a73fc83f31fbee3d73e93a2e') {
        image = 'https://yuki2021.sakura.ne.jp/illustration/my_image.jpg'
      } 
      else if (pubkey == 'ba027876b6ce5ddb3884ee49816b200baf00229747dbc0ff1bf8bde7136901ef') {
        image = 'https://pbs.twimg.com/profile_images/563074436/negi_20091007_100x100_400x400.jpg'
      } 
      else if (pubkey == '7e4529fd3fe972e9ecafb0e1c523f42966d3328d1bf8bbd9c4e74d4665bbb0e3') {
        image = 'https://nostr.build/i/efba3bb89dd76bab69108b19e674e7b537a069e4bd8083e9df7f239e407e397c.jpg'
      } 
      else if (pubkey == '73159c0679ec46615a48bd7893f49a5622c4416449b9026a43f96eae811c8400') {
        image = 'https://pbs.twimg.com/profile_images/1591958306892947456/N-my18Fz_400x400.jpg'
      } 
      else if (pubkey == 'e22d11f61356c8f7c156b6c46de724765b54819e0de1f508aef0e9366ba94c46') {
        image = 'https://i.imgur.com/jjHhD0d.jpg'
      } 
      else if (pubkey == 'd5c68ca0ac10b7497a7217ea5b9512c95eaa9d30bc2216f9b11bfdaccd8c8062') {
        image = 'https://pbs.twimg.com/media/FpZ43QBaYAAUDZI?format=png&name=900x900'
      } 
      else if (pubkey == 'dea94f563ad8e0ada8acccdeb802cf350a77c9bc515ffd22c12a68c428a75357') {
        image = 'https://avatars.githubusercontent.com/u/47011'
      } 
      else if (pubkey == 'b469d92fa9421fc34e6b91ce5e506e2a0e9f682529c203f177e39fd837b06d8f') {
        image = 'https://void.cat/d/D5TXKUYMojgL2BPMBQDkPP.webp'
      } 
      else if (pubkey == '0b4f5ece165aa63a1b86736763425212da4ef55db83c1c4b809750fc094bf587') {
        image = 'https://b.toenobu.name/images/avatar.jpg'
      } 
      else if (pubkey == 'cb634f6955d8bafbb14eb9df4329fbbb9deeba4313c0d3296b79ec0c706a78c8') {
        image = 'https://pbs.twimg.com/profile_images/1234622374/mysh-03_400x400.png'
      } 
      else if (pubkey == '281a8fe1e44c2a7b47071dfe41d733dbdf32a43b85cc3ff6489c45e75cec719d') {
        image = 'https://nostr.build/i/b96eb64f7e6431019246aca3f494429ebca94bec2f5ae918bcfd099f13c863c7.jpg'
      } 
      else if (pubkey == 'd30be7f2e66fdcfcb8fb6fedb7564ae898bec73cc65a319df68bed943b173c51') {
        image = 'https://nostr.build/i/896faa3feebea9a433bbf474be203c1167dce5a6474b1907d014577a8b10df69.jpg'
      } 
      else if (pubkey == '86fd1c80c07debbc3d1929377b24d4bf65a85af268af15cda2acce454df670be') {
        image = 'https://nostr.build/i/4388eca83f6cad96d0233c80eb2b0b3b39661dbbb8b6b2eba22e64f3642b2193.jpg'
      } 
      else if (pubkey == '563d9167de4d1e22a543c267c9d4822c7be682b187321bb9538a1558df342273') {
        image = 'https://nostr.build/i/0c56b00467291354e477521f49008f5eebd881a337f20e951d98de3e973690e9.jpg'
      } 
      else if (pubkey == '361b1e0ab197450bf40b23f21be626bcc03e27dc2ece8931d45963250f613c2d') {
        image = 'https://nostr.build/i/770f77cb29a047e17c72e2de09850caf6d6cb29ec69ab5f27e3a3c736c61dbe8.jpg'
      } 
      else if (pubkey == '008a02699ed2ed6860d1c8c43337f242757e2f9978201876002f6aed1fe9f1fb') {
        image = 'https://pbs.twimg.com/profile_images/1066259404117336065/LAAOEc7r_400x400.jpg'
      } 
      else if (pubkey == '49d7bd46dff2745598e5905e4a8fa6d91fa1d51ac90b1040b27e705a073d8eef') {
        image = 'https://void.cat/d/8ziduWLqgGqgNV974m6EmQ.webp'
      } 
      else if (pubkey == 'b777988fbf6bd3f66a49476304dbe7d4d9739f17574225c234866d50c991d231') {
        image = 'https://void.cat/d/MbHwT1JRM5dAxeDLtMVrmt.webp'
      } 
      else if (pubkey == '40a537a917d455a24c4b0c20ea496e81e9bbc807efb0faf76ee30ff32904fbd1') {
        image = 'https://kyohsuke.github.io/avatar.jpg'
      } 
      else if (pubkey == 'aa3533aab5b7e810ec34d14ea8ab5b3296b41d10540b51a3f205de43ad9a5ce6') {
        //image = 'https://nostr.build/i/75bbc5aae5230638324d240db7f05508e646756f229c9f057787e0864ff06f07.jpg'
      } 
      else if (pubkey == '9aafb87aa08dd401746db925853dd3094287cfb58bc9ffe4eca18083d8db3d45') {
        image = 'https://nostr.build/i/359b7f3625e6fb0f5c45e9acf7ea3b2a17aa15180394e51d40b045d07ee16d29.jpg'
      } 
      else if (pubkey == '32b44d8ffb7c1995e708bb7ffb6c49d46576971de246ab6a53a5de64a4589c24') {
        image = 'https://s3.arkjp.net/misskey/e44afb80-e469-4ca2-bfd0-ddb8555e6a26.png'
      } 
      else if (pubkey == '9a71448d5b9855c83dc8bea7237a3f16654d6964779b04c1d6b530f1e26286ad') {
        image = 'https://pbs.twimg.com/profile_images/1470320939757760513/kw-NKoMo.jpg'
      } 
      else if (pubkey == 'b742e3f15af9894cee58a4868fecb63d129d42a518b5cad46fcbdb68ba4659a7') {
        image = 'https://void.cat/d/3DGn18BLAaXdDngkshc2M4.webp'
      } 
      else if (pubkey == '0d286497db795f7ac3ae19db21678a4fd6d2af8e4919cb383818da9bab646d48') {
        image = 'https://i.imgur.com/rI8GAyb.jpeg'
      } 
      else if (pubkey == 'a7fa4b91d1913a262d1c0b19991b80104d471e139f42464138fb900ddc495cb0') {
        image = 'https://nostr.build/i/nostr.build_07bc1a227d552bc678be585dfd42560083b71b5fc4b5927ed9ed7209072612fe.jpeg'
      } 
      else if (pubkey == '0521db9531096dff700dcf410b01db47ab6598de7e5ef2c5a2bd7e1160315bf6') {
        image = 'https://void.cat/d/WGjF8DTAq1EY8LDUb8pKUM.webp'
      } 
      else if (pubkey == '8d39a0f9a133b626f5705324c39a3530ca01fae177ae3bb85d82aefe6c725f33') {
        image = 'https://i.gyazo.com/d454507cee7b8de90381aa2d7147dabd.jpg'
      } 
      else if (pubkey == '40cf870d93b7e67d9e0e140e150e064f2adc2cd3c4a91168cd95aa9e98bc91aa') {
        image = 'https://i.seadn.io/gcs/files/b4a7c0d7e56670832655877e109c756c.gif?auto=format&w=1000'
      } 
      else if (pubkey == '081014225487b59f721acb40a671d06b0b572706880167da64d3bc34420c5e84') {
        image = 'https://media-momo.mame.moe/momo.mame.moe/accounts/avatars/000/000/001/original/27083181447427e7.png'
      } 
      else if (pubkey == '8412c16b6c01fadd224622ee57b1dd58d298b433a37328e50a8c2a2a0bc7739d') {
        image = 'https://pbs.twimg.com/profile_images/1455850581680332800/Fy-4d-jq_400x400.jpg'
      } 
      else if (pubkey == '930b735b2cc3e200e6713241e34bb902b4c2ded90fb797d14a409ee4e6725fa2') {
        image = 'https://nostr.build/i/856e847d6737739dbc780603f5fce96ab95472b8b9fc30f5410022097ff104e7.jpg'
      } 
      else if (pubkey == 'f8b2f4b46f2501049c5d86ee0e9c261d68b28713fb7772154a6d5085262aa742') {
        image = 'https://nostr.build/i/3438133e56ae6386e47bfb1d991ee37cafd4dba67dc907001bdbe6d30de26031.jpg'
      } 
      else if (pubkey == 'ccc3e370a200ab7c2cad6308fcca7fe86dcf2fcee6e9dec1235afc9975d57bf2') {
        image = 'https://nostr.build/i/ad906e7372b33b6c59ec78076673e793260ccf061c185fecf36d057de7da6b10.jpg'
      } 
      else if (pubkey == '06d333dcfe659f2f8cd5adc76e943fe74ea2631514866ab2bce0ae94534d77a1') {
        image = 'https://nostr.build/i/nostr.build_63b9165787d7191cc836dea416c7a47fad264a28f7ec05c40911da1edf1f5aa2.jpeg'
      } 
      else if (pubkey == '3d3177a086627249659aa2b3f9d2624ebe41fb45d394d4cf95c7307a0a88a726') {
        image = 'https://nostr.build/i/a5125716cbd7e994bb834efe3753406d8277ce83c710e0a649237a9511823e9b.jpg'
      } 
      else if (pubkey == 'f7d34fb48940e06ea6e390234f2504e727c69a5a0df02230f06ffafc84dcd038') {
        image = 'https://nostr.build/i/c06b29a51ea2729c11fa6627e0f18e969df9ddd28c785381a12c75763282763c.jpg'
      } 
      else if (pubkey == '4d326a08d40450356514cd32b36b7d1f06e1e8dadbf266049d94f10164bdadc3') {
        image = 'https://nostr.build/i/ef8b18a3e7bea076f00b1ce3c9cba205edc52096fd20154d5ab2740e2c1e5eca.jpg'
      } 
      else if (pubkey == '15552fd34f51be26bcdb793d788e63f3b6544368cacf4a92ae4521e714deac37') {
        image = 'https://nostr.build/i/446c540699783421728e2ba8c941e8b12eba1c6739a127b455eb637e00698e98.jpg'
      } 
      else if (pubkey == '657d259ec889fbb7f995e027a317babd2196416b93611e2e2cc41aebe59b4671') {
        image = 'https://nostr.build/i/p/nostr.build_95808cfca2d79caf1af1102628fc36539dc7c30be6047f1649b21afd340f3218.jpeg'
      } 
      else if (pubkey == '43afb6d668255b407baefbe206c7180cc50cced310d193563d58e610ddeba160') {
        image = 'https://tee.jp/images/damus/pfp_illust_98-min.jpg'
      } 
      else if (pubkey == '2a384b17c4e0efd3477c953d24bc4e9915f474f75aef9ffbc6412bf14e57a27d') {
        image = 'https://nostr.build/i/p/nostr.build_715403651f9b4c1c87b5e298f1ff41c10683535c3263eb3051da0bd2c16f070e.jpeg'
      } 
      else if (pubkey == '3cd64d2382da6e9052dae595e5c97435c2c5f9642c1fb1fe2125e7cb496a2815') {
        image = 'https://www.unagiworks.net/UnagiWorks_ICON.jpg'
      } 
      else if (pubkey == '92aac5a6445e3e12eb6dc661515f96a5442a9220ed33b7ed1acdc7c2e6b34f1e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.postimg.cc/zf3HtRwD/BC346-C3-F-2-B17-47-EC-9579-9-F4632-D07675.jpg'
      } 
      else if (pubkey == '23d494a1d0b9fcd70fc3b6c28502f4b005349f55360a964006f7bee5d495e98f') {
        image = 'https://pbs.twimg.com/profile_images/1614264181859192835/PSfF_mN1_400x400.png'
      } 
      else if (pubkey == 'a354901a6d25a835fd9f77979a6c8d7b8a006fd0129cdef9224c53dfcd506937') {
        image = 'https://www.akira-plus.com/30707_1034162380_400x400.jpg'
      } 
      else if (pubkey == 'ad762d302bc0566e05f173b1d7c462ad645c1d888da61b925e9fc0e30f5517e6') {
        image = 'https://kotori.style/img/profile.png'
      } 
      else if (pubkey == '894d2606bd1a328043aa7e63c2ecdbdfa728319b9e8c82ac0ee8855baca426fd') {
      } 
      else if (pubkey == '4ff1d10f5bf5afa17295f7d89dbd0a78dc78eb635ab23938a60a0d0deefb3693') {
        image = 'https://void.cat/d/A5uK6mGji2davcQ8FqjsiU.webp'
      } 
      else if (pubkey == '6813eef6cd152da313c358b32e04866d9548bca2aa0054a438034ebb9f542412') {
        image = 'https://nostr.build/i/7787da26c025026a90248a21a28786474ac8cb0bb01887bbd77512aee18cb716.jpg'
      } 
      else if (pubkey == '64751efc0810222ddbe8d5618c4d6f26fc4594147087e0b6088d080ca15543c2') {
        image = 'https://nostr.build/i/20a871e90d4cba3f10b107de4b1842b790f14dbe5b4e40544921feec5feae06a.jpg'
      } 
      else if (pubkey == '23dafce457776160caf8f0d96d32d67643c2ee55501740825dd8a432fbbbba89') {
        image = 'https://raw.githubusercontent.com/n0nakamura/yodogawa-janken/main/icon.jpg'
      } 
      else if (pubkey == '7e96f44501472378189cec95ff64e41215748aa37ae3be73a942a8d77c9edf24') {
        image = 'https://pbs.twimg.com/profile_images/58651603/tyoro_matope_400x400.jpg'
      } 
      else if (pubkey == '4894d1f41f1fabce39463c5d9622e998deb7e838937424f1c55359312bffd88d') {
        image = 'https://i.gyazo.com/66beb4b9d0f4b3193cd3dd5f2f40e0cc.png'
      } 
      else if (pubkey == 'e4828b81e20a0c0d4cc6183250c7f2321258376fab66c7a2c3ce0bef94013159') {
        image = 'https://nostr.build/i/ba7c3d267dd3e57594cc524e0c3a7bdbff3f8dc660d9a80939eba98fd9f3bfea.jpg'
      } 
      else if (pubkey == 'ad3f1ce241ff0324745ebd5e7bc8aadda24641282ff351c6aeff581cce5026ba') {
        image = 'https://www.gravatar.com/avatar/1179b2be2101d818dbb543537e6c3107?s=1024'
      } 
      else if (pubkey == '8f8a15cdc36597b6b85b4ab035331054bae5cfd618d223bb8c431063e2c23f3b') {
        image = 'https://i.seadn.io/gcs/files/f0db8d9940b5c18fefdf27224c5a66d9.gif?auto=format&w=1000'
      } 
      else if (pubkey == 'ac39b5015512aa805cb1db84a52a096f1df4672ce7fd66b2fc821e336dd52d3b') {
        image = 'http://naha-webc.com/img/jahgalu200x200.jpg'
      } 
      else if (pubkey == '6a3ff6aa3113e3c6e616a54e32c424a3e00bfd1d4f26912555a6674a84cc7491') {
        image = 'https://pbs.twimg.com/profile_images/1612450446375030785/2gDVe5hC_400x400.png'
      } 
      else if (pubkey == '0b23a40520559c6eac3802aa113af1ecf32b224817fa4ba84c6d9c8b2fd523b4') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x72b38176864bf273412bbcabed5b7840edb533639f12d6dd5f3f47c6b5b1000b/image'
      } 
      else if (pubkey == 'c609ec03e1ea01d03b3b28a57c08349a16dde35c16f20c5216fbfe5edd935633') {
        image = 'https://d8kcunw48sf0v.cloudfront.net/media_attachments/files/109/810/694/082/566/546/original/2172bb0699340d22.png'
      } 
      else if (pubkey == '2f1086a0ae44b921ea8066794c15eba5fa3651d9c6a0b47cd491a87e2e1e73fd') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDEwMCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDEwMCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == '0c521fd952b69cd68b562407f6cfe42a58acbb99840de035a550332614bcbd8d') {
        image = 'https://void.cat/d/KUgDmxuBfe3N9YNSFr3Kiv.webp'
      } 
      else if (pubkey == '4e0ebe6254074e8a0f7cfecce8ae504884ac7ee377ee2dff00b395664d162efd') {
        image = 'https://i.postimg.cc/bNgMycmJ/logo.png'
      } 
      else if (pubkey == '35400078c98bc5dac9912de5dce9679a9ffe9ef575f53f99c74cdb0ae535814c') {
        image = 'https://nostr.build/i/p/nostr.build_504934de7008b91c7ac46fd0ea482b0195f1c1acf26f0c5bc4a6dd4e0184e245.png'
      } 
      else if (pubkey == '36d0d6c410571e19d469e06ea0cbc243ddffe5a16df248a62f5e9f4d44cf6a0a') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDEwMCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDEwMCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == '28d1243fb879d353c15c4cfc7537bf88f6fe18db2160c553beee408147eb0be5') {
        image = 'https://avatars.githubusercontent.com/u/1000796?v=4'
      } 
      else if (pubkey == '606de594a4de9a8956d0efc290b541cf19a38f9c162de78fbe52e7abcc9758de') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTA0LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTA0LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == '69f6045d039c1f2b50a89d87f2896f2e501f08f5df11b5ace69c14936930b4fe') {
        image = 'https://pbs.twimg.com/profile_images/430761026422706178/U5Hktv0z_200x200.png'
      } 
      else if (pubkey == 'f7372426207d0936cdf674589d9969a61fcd0518ce526b28e945500f974a13cc') {
        image = 'https://pbs.twimg.com/profile_images/1208718754969837569/HDxivlbb.jpg'
      } 
      else if (pubkey == '5d84244965de81a2378cb8cf17f8b2309c926f6dd7f5af02362af43c1f7b3898') {
        image = 'https://pbs.twimg.com/profile_images/1055585733707251713/epj7cvoL_400x400.jpg'
      } 
      else if (pubkey == '4caccfa9aab4e06de0a73c1bb37c941f5cbf496e77b6c610dc6db1408c524cf6') {
        image = 'https://pbs.twimg.com/profile_images/1618626377233883136/ABTUeQm2_400x400.png'
      } 
      else if (pubkey == '8c1b1bb6a49bb318db8c105e76d2a39bc7577c3fd6cca60b4db7995b9dec5b17') {
        image = 'https://pbs.twimg.com/media/FfMqZC_UoAYBQrK?format=jpg&name=small'
      } 
      else if (pubkey == '35ac5793152c22f1ef4069220dc482bcbf1601361a3477c6f7aabfff276a59e8') {
        image = 'https://pbs.twimg.com/profile_images/1010785278565351425/fpW6zdoi.jpg'
      } 
      else if (pubkey == '2d9f96e571713b51da42485902b0dfb0e91410e5cc540ed8679f8bc3df84c1ee') {
        image = 'https://pbs.twimg.com/profile_images/557321563549081600/ALUCaM8U_400x400.jpeg'
      } 
      else if (pubkey == '22859c8ffc9614bd71ca8d012fc80c50a91c586db71fc05323639faf0e1bab19') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjAzLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMjAzLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == '485f3efca69a51ee39c0a86449a8ec7dec58f6141e9ffce196866aace8a5cd49') {
        image = 'https://pbs.twimg.com/profile_images/788724819701342210/JYC32AoM_400x400.jpg'
      } 
      else if (pubkey == 'b20bd3cdb6194cf8e75d5b98986a7baf5dc7e1d130536d30ebf282d08759b035') {
        image = 'https://pbs.twimg.com/profile_images/1455886356715274240/LUg2s1sr_400x400.jpg'
      } 
      else if (pubkey == '87c9568db9e983f57a326eec377158f026e34d18302a62c1e0442f4a3e6a4402') {
        image = 'https://www.3qe.us/yuyuko.gif'
      } 
      else if (pubkey == 'f44563fdadd9396e4689b9fb71190cadc40a4808e6d064c60e3f48676d4d7546') {
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8Vo7mmhRpcgpdcb-OKnPR7eMiMlV_bzHoQ&usqp=CAU'
      } 
      else if (pubkey == '4a4e8362e72546b94b722431c9f21394273321d1d622f0e8cd9f0adab6423cc3') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjAzLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMjAzLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == 'b6b3b04d78bcca3c7812908b794bbecaccffacc65374e34a3259f4ed2b09dafc') {
        image = 'https://k16em.net/icons/cat.jpg'
      } 
      else if (pubkey == '020de9b13bafdd657cfa1c3f68348901587469cb4ce18cf06b4c8c075d9fc2ac') {
        image = 'https://masterspark.net/img/moyashi_color_aberration.jpg'
      } 
      else if (pubkey == '341ebb17bd30e9b7311488ba145532e9fcd38c313fc2abb9d28ff03241a45d82') {
        image = 'https://i.postimg.cc/QMzLZbK2/D02-F2035-F619-4-D2-F-9-AE4-58518871151-C.jpg'
      } 
      else if (pubkey == '9ef7875720bfdfc8e60fece858bc6d25368815a1b9ca46b4144fae89d09a3c3f') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjAzLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMjAzLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == '1355ef551cd53c9dcf920b127458a2ab8be213942271a2f9fd4ec1da5d5ae995') {
        image = 'https://avatars2.githubusercontent.com/u/39210441?v=4'
      } 
      else if (pubkey == '483ff3870be8b5476806db0f11fae3b099fa322ab0cf4c67ee7733771b055677') {
        image = 'https://void.cat/d/VDYkGmrwm7o1U3qCjF65HW.webp'
      } 
      else if (pubkey == '06c98992b72ce02a127a023fe73081d3f321a497855c19be16fd4f252cc23cca') {
        image = 'https://yutashx.github.io/image/avatar.webp'
      } 
      else if (pubkey == 'f403126bfbccd7a0da09be9b6315f5d037c0f1112d7f8d08ee2308762f0ff6d4') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDE2OSwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDE2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey == 'f9b159a029ac401472d3125fc934fbdedfc06a832f3991a47c840e7ed729a0ba') {
        image = 'https://www.gravatar.com/avatar/6b05605bbb3b40e2f897d6347dd92b2d'
      } 
      else if (pubkey == '116357134a3c7759d30083056f91f5bb7399f52eaf48ee131c933725e806fd9f') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoODgsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg4OCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey == 'b7bd7a454187e202eeb08a3803c716146e63fe9ff04d3b4b7d38c441e740cb68') {
        image = 'https://bloggingfrom.tv/wp/wp-content/uploads/2023/02/kai3_profile.jpg'
      } 
      else if (pubkey == 'e9b4aa9bf5698ac4294bbb992698a591b8c61f3b9ca8bac951eb568550882a18') {
        image = 'https://avatars.githubusercontent.com/u/4232165?s=96&v=4'
      } 
      else if (pubkey == 'b551940e2ea538c380056df0d68550396e49e53431f3d8d53ca26ffc8521cc68') {
        image = 'https://void.cat/d/4e7E6KZkua4uqNw59LBvEM.webp'
      } 
      else if (pubkey == '43f7ddf5e1b2f8ab9fe6f3e28ef5fdc95d5cae9be78d2bc82c7db7d8c3f75704') {
        image = 'https://majigomama.com/images/profile.png'
      } 
      else if (pubkey == '47444e175cd9523c808e1e9106c422bb24d4270e8a786ad81706e88beff296d5') {
        image = 'https://pbs.twimg.com/profile_images/479564676385099776/o1Gwr_Vd_400x400.png'
      } 
      else if (pubkey == 'a75e9084b10a88007fc4e7c15e2f5a45b2b43bf160c199e861ea7fe4ac43a34d') {
        image = 'https://pbs.twimg.com/profile_images/1545832376516808704/Qsyl9F60.jpg'
      } 
      else if (pubkey == '12759da6c6d560045e13b2cd97d57fd279a7cd0284594fc2b2b6ffe41e2f384e') {
        image = 'https://void.cat/d/YakKQyvcnQpGy1Ye8zzXQ5.webp'
      } 
      else if (pubkey == '6e2c8c7e2535d42c3b90bda5b9ca1b17c1718144865d2d1770ac22a4c6a8b142') {
        image = 'https://1.gravatar.com/avatar/83c113a45ccb936bb3eea7bd51bdc6a0'
      } 
      else if (pubkey == '9f247f26a3e06f753f1169940113c6046aa648cac4446c08c2ec5c6663cb0234') {
        image = 'https://pbs.twimg.com/profile_images/1505117649159995396/y4OppqRI_400x400.jpg'
      } 
      else if (pubkey == '122001825a3636d8553d36d48e1fdfa159e2b0b8d03ef114a36d765a09a857e7') {
        image = 'https://akimateras.github.io/nostr/icon.png'
      } 
      else if (pubkey == '60b0291148360290c487f519e9f9e7823b6395fb1ab6c9167b436414d766ba51') {
        image = 'https://void.cat/d/NMMDthbmNHn1S21t8MRYcT.webp'
      } 
      else if (pubkey == 'd9bdc6e217f9d04ddc55c7f44163f5ef540b824731346fff7fcc69fd41412ff5') {
        image = 'http://flat-icon-design.com/f/f_object_108/s128_f_object_108_0bg.jpg'
      } 
      else if (pubkey == '8a751ec188bc1652e878b1b26d052ef750672a299e0f0709b3e55c6e3ea95d03') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoODgsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg4OCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey == '44e1f898a4bb071f985e2c8395aa627152aa28c771bec9ff954c6fc9bc1cebcc') {
        image = 'https://cdn.discordapp.com/attachments/1065939465941565460/1071655313587056682/IMG_0418_jpg.jpg'
      } 
      else if (pubkey == 'c90a759ab3bc4006f1fe5684a1a0278b41e868580932ad67760f3e52db6112d0') {
        image = 'https://fogtype.com/fileserver/01KH4AJRNSFBFWXFT4XGKX0270/attachment/original/01THJTX731AD39TGGW6MSTJBP8.png'
      } 
      else if (pubkey == 'e21acd469f76d4d82273a50892c8d5de08356b972ab1ebf042eea77363ca9ad9') {
        image = 'https://www.gravatar.com/avatar/87f4fa9d64729982e5888cf66ae3532e'
      } 
      else if (pubkey == '024f4589cc1525d256abe646fa306debe1a8c165aca6ad1e82bd1142ee968c27') {
        image = 'https://like-amber.com/wp-content/uploads/2023/02/red.jpg'
      } 
      else if (pubkey == '96436ad11fd17afd689e2ff2800a610f343d031f8d688c2b50aed921d6eb5de1') {
        image = 'https://wiseken.tokyo/wiseken-icon.webp'
      } 
      else if (pubkey == '05804dea9ee0934bb8d56bc36c0dc5db664ca28c4c51114c6ab28a0aedca52c2') {
        image = 'https://www.nakamuland.com/k.jpeg'
      } 
      else if (pubkey == 'f245bff9731a1965ee0c4288a659509540a1eb4653169355ba8d2ef502c0b735') {
        image = 'https://i.imgur.com/LWBAIoj.png'
      } 
      else if (pubkey == '6b9da920c4b6ecbf2c12018a7a2d143b4dfdf9878c3beac69e39bb597841cc6e') {
        image = 'https://i.pinimg.com/564x/c9/83/9b/c9839b712d428b0ee5377df243b25312.jpg'
      } 
      else if (pubkey == 'e022c76edd65a6ede27162ada4a44e6efa429353c4beb065ed097c5608da5a7a') {
        image = 'https://pbs.twimg.com/profile_images/1557327200332165121/vynbKn2O_400x400.jpg'
      } 
      else if (pubkey == '8e448c48c88324988631c4f123dd9a4a89e8b81855f8a7e19190fa11465be0e2') {
        image = 'https://i.gyazo.com/85ed9df6fac976fb2c4f145b430aaa95.jpg'
      } 
      else if (pubkey == '7b3737c195d44d7809bc030230910fc94dccf001e4a2459d34f73332ea38668e') {
        image = 'https://nostr.build/i/nostr.build_0a2e0a5d1016e08a1e3428c4f53f7976f5a1d2348d0875197a717fe284899941.jpg'
      } 
      else if (pubkey == 'ddf5b3cbfb941d05b714e4b220c7a84dec590a98e82f5209a6acb9acc62dd414') {
        image = 'https://s3-media.hostdon.ne.jp/m146/accounts/avatars/000/000/001/original/8d201d0127d2384c.png'
      } 
      else if (pubkey == '4f2fd842a9990925b299070a515a1bf81fa66654e71768d6906a056edb80a332') {
        image = 'https://pbs.twimg.com/profile_images/850715009680195584/mNZr73Rn_400x400.jpg'
      } 
      else if (pubkey == 'e3610381e7599458701493b8561aadbc79ee7c88064308fc4d6bbf8060804c34') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDIwNSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDIwNSwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == 'bf5ba38def8a5bfa6a89936584787151874725a5d3477d851111bdcf0d042b48') {
        image = 'https://pbs.twimg.com/profile_images/1591780025702830080/_Bt9DySR_400x400.jpg'
      } 
      else if (pubkey == '8092cfdf8db195daa9347c2690f3509c993719ab5d03a5958bda5938e9250806') {
        image = 'https://avatars.githubusercontent.com/u/4425329?v=4'
      } 
      else if (pubkey == 'b27dc08904fd814804657aa88a49e1fd01b3bfa99177eb92d5ba9ab83751032b') {
        image = 'https://pbs.twimg.com/profile_images/1476511110140686336/m5GpFE1l_400x400.jpg'
      } 
      else if (pubkey == 'e472cba86ba9df4a48605371a42e90117036cbc1f9919865809346e59064b28f') {
        image = 'https://kaminchu.github.io/kaminchu.png'
      } 
      else if (pubkey == 'ddb7a7c7d91776b7877b619d0c2941d025c71a9f6393e2f84994642e182fb2ec') {
        image = 'https://pbs.twimg.com/profile_images/437079737660211200/ARP17o4Q_400x400.jpeg'
      } 
      else if (pubkey == 'c46a10ba768ef31d52474b2469c5ef3ae16b5b3832928cd8bd5f3807bd1029be') {
        image = 'https://nostr.build/i/nostr.build_d978038bdd67747043966d70117c9d683b9299d7c77623bd56faebebb23fb155.jpeg'
      } 
      else if (pubkey == '4debe71bae209ddc088ed0d12876f78dc3f1a95daf5f4b97799e454554d63425') {
        image = 'https://assets.kitar.org/profile.jpg'
      } 
      else if (pubkey == '2ab03a49abfd93673d5ef74aead6b9f536a9e1364d48fe9285085e44610dcc25') {
        image = 'https://nostr.build/i/p/nostr.build_124d6462cb9b14ee9a26a65675997f27c0370b2f799268ebec3340d546917238.jpeg'
      } 
      else if (pubkey == '35453d2e49a0282c4dd694e5a364bf29600a9b5443e4712cfc86a0495345d10b') {
        image = 'https://i.postimg.cc/5NF91wdg/D0-BE9-B25-E0-B2-48-F5-968-C-CBF2-D52-C47-A3.jpg'
      } 
      else if (pubkey == 'f6adddea9d7708808b71282a70f2fa40839ad4aa9393db859ff65b9bd3560283') {
        image = 'https://void.cat/d/VVYuRHmfMzbzjzteqpPJGi.webp'
      } 
      else if (pubkey == '154da1bf418485ef8a70951dc7966a6fba01337a3f2b66dfa4efb5dee6852b68') {
        image = 'https://avatars.githubusercontent.com/u/17245737'
      } 
      else if (pubkey == '7c6a5de9f044b3a9de0b8fe1ded0e6c8c401e6670ea6b7adb8f2a65122bd9507') {
        image = 'https://void.cat/d/Jh2bCbM36LQ3teDGLrwZ1F.webp'
      } 
      else if (pubkey == '6f7c2b6cfe25c5f8e034b6598c577857996c4d9a966f57174ab7f7ae939d6da9') {
        image = 'https://pbs.twimg.com/profile_images/1619164012167720960/L2WTpl5j_400x400.jpg'
      } 
      else if (pubkey == 'e40368c29c2735417beb36d9a649ee629f6c5c3bd1f28c47cafa06a27e81d7a8') {
        image = 'https://live.staticflickr.com/3402/3343888756_874a98ecb2_t.jpg'
      } 
      else if (pubkey == '9b6b8d12ec6fff7cec88db87ebb4e8936bdf04763524fafc71f486f4d7706d2d') {
        image = 'https://pbs.twimg.com/profile_images/3785115381/319a239dfbdbe3bec7afdacbfada91c8.jpeg'
      } 
      else if (pubkey == '13c7d9c16b8fac1a2fceafb929c6305ed37027b9913de7136708271507573ffa') {
        image = 'https://ja.gravatar.com/userimage/78987/743de1f23fb87417a8a0927b36a2aa77.jpg?size=200'
      } 
      else if (pubkey == '2df7248fae88ce585f51544b18858c8d0959aaa251a29e5d1cca1edb07da7998') {
        image = 'https://pbs.twimg.com/profile_images/1559013638283104256/k20LfHTo_400x400.jpg'
      } 
      else if (pubkey == 'e16c4ba89d4c3c1eb859ce59a0f9b7a1cc2bd98cac08f4ad3407d4f3e4ba189f') {
        image = 'https://pbs.twimg.com/profile_images/1475261900397363200/FK7BJFdg_400x400.jpg'
      } 
      else if (pubkey == '12a305b19775f1b0deed18e1e5ce6486e52a17d83ea9ed03f4b1725b297933f3') {
        image = 'https://pbs.twimg.com/profile_images/1609470932913098754/5lHIyHGi_400x400.jpg'
      } 
      else if (pubkey == '32db446fc0f10f3e2acd238b2837294b89d0042d8e58ad0c51f2064df291e8d6') {
        image = 'https://yanokikuno.jp/kikuno_cms/wp-content/uploads/2023/02/0yanogohan.jpg'
      } 
      else if (pubkey == 'e0e5fa0186770677bf8b4fb67415c2ce74a33502d85a36171e1e13ec24281676') {
        image = 'https://pbs.twimg.com/profile_images/1513763610094628864/O0MdoLTi_400x400.jpg'
      } 
      else if (pubkey == 'b69b81e87601692acee0bee5d863d3968d9dba253591e0ec119a120ba5484e8e') {
        image = 'https://i.gyazo.com/cff71e3dec3b3bf346335046598fa5cc.png'
      } 
      else if (pubkey == '3f171452c21469efbad5e3080ae928680a5a97856d6e8a824870e8c0006c3bab') {
        image = 'https://pbs.twimg.com/profile_images/768818758597029888/sVgaJtDj_400x400.jpg'
      } 
      else if (pubkey == '00910556a40fff31c13a55ffc562be82cb9ca541dfe49a60228abdb292a7dba1') {
        image = 'https://social.mikutter.hachune.net/system/accounts/avatars/000/000/003/original/fdb6346f1e9c5661.png'
      } 
      else if (pubkey == '538d401b454b09443c647d34345bd6a96bc83968813619036fd6b4419d171d9a') {
        image = 'https://imgur.com/H63SeT0.png'
      } 
      else if (pubkey == 'bd14949d5959be661ff63eee6404cf3d8c9ae41503575d194756d55fbd3eeaea') {
        image = 'https://goroishihata.com/image/goro.png'
      } 
      else if (pubkey == '562fb434297ff3ed7581734525d9cf7b10cbf2b819594428bcb90908e7cc3c2d') {
        image = 'https://pbs.twimg.com/profile_images/1306707794360377344/D1VyoqDZ_400x400.jpg'
      } 
      else if (pubkey == 'ce12ebdf4646e9b5184769cd25fbae7ecc060d4af0f547725511c8a36d8522a4') {
        image = 'https://void.cat/d/4curxM1dZ3vqJ8A2KhCEnW.webp'
      } 
      else if (pubkey == '105e7f7e35f85d0b9bacbe6d2832e43e41816e21d9f405a368f14d8e6c63b547') {
        image = 'https://ex.blazing.jp/wp-content/uploads/2022/05/icon10.png'
      } 
      else if (pubkey == 'bec8b8331a68f7a6334cdfce26fbd62ff050b4503763868826b2ca02382a4f01') {
        image = 'https://pbs.twimg.com/profile_images/802132701838852096/qA16aU3h_400x400.jpg'
      } 
      else if (pubkey == '421f1a2abd3925f7fbe4fe5e5f3bde855d7a88e68ee0d2d3ed09b6b0d14425a4') {
        image = 'https://spisignal.jp/static/wifrina.png'
      } 
      else if (pubkey == '35f118c7b7d349630306e57d4fa23c97e0732e9422e2123ab6111aa2be482dbd') {
        image = 'https://nekomimi-taicho.com/wp-content/uploads/2022/02/94466513-4388-4CDE-BB9E-CFEDF67AE1A7.png'
      } 
      else if (pubkey == 'f264e757ddd895fa95297476085125dc2b6edd097c6536c324ecda5475b24809') {
        image = 'https://f8n-production-collection-assets.imgix.net/0xE26E7000992e1E22e0f16EBD4fe9Fa3187b81F86/1/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max'
      } 
      else if (pubkey == 'b35908a3abfc3ea28f2cf9cef9bf87eeb186f88df4b4d35579afb1223d45fca1') {
        image = 'https://i.seadn.io/gae/CUtwQuPhyNVHojaBXdBP9qOLdliwukunGvz8-LpYD_psCYAlwttMeQnRy1Ca3zhGVft8B-1Nz_lWrxfJjSNamSMCxmDqyvvYmbqc?auto=format&w=1000'
      } 
      else if (pubkey == '84753dbba0ec5661f18c27505ada88d73ef09ed7ce9d232fbcc0bf31e10b1875') {
        image = 'https://nostr.build/i/p/nostr.build_76dacfc05acfb9f0fc63d997af155c2109c3f81c8edf628ffaeda2e7da4ff6c7.jpeg'
      } 
      else if (pubkey == '9d3ed48674b7a39ae489e101595ae8b7fd82aee9f274795b46c5fa2596031349') {
        image = 'https://i.seadn.io/gcs/files/3af30c488bd686b45a61aa7ce0b8491d.png?auto=format&w=1000'
      } 
      else if (pubkey == '269bcebb937a925914074c7bcd33cf6d627fe103684f87f89d53aaa4eb75dda1') {
        image = 'https://pbs.twimg.com/profile_images/876440874128875520/Xu5OeU71_400x400.jpg'
      } 
      else if (pubkey == 'ea2e3c814d08a378f8a5b8faecb2884d05855975c5ca4b5c25e2d6f936286f14') {
        image = 'https://i.imgur.com/TblmAxU.jpg'
      } 
      else if (pubkey == 'be3e19a8337b290f82995be41d18620646bb28b97057f0a180aa62fcedf0bacc') {
        image = 'https://pbs.twimg.com/profile_images/1593384040920657920/sKRMC3m6_400x400.jpg'
      } 
      else if (pubkey == 'bb48efb28768b1355566035ff2e33b2e30040c93c6ab2f5926d099d3402f4236') {
        image = 'https://pbs.twimg.com/profile_images/1438229152486752258/2ZojA9FH.jpg'
      } 
      else if (pubkey == 'cb278c3e30175bd9330c9a00a2c301e634167710db7e1f28a1d42031482b079c') {
        image = 'https://lh3.googleusercontent.com/pTdnIMHDozoVJ7aA-j2x0dBv6gZFzrccqeGlG8cP4MCb9qKNkfPdpIWQ_t140QEbiI6_Dvn3pECdIY1aEWWn2Z90pPqUXnCk0jQ8'
      } 
      else if (pubkey == 'aa8a8aee135a03f26b149b786d6000dbbcbbc50771d4d000e4d52e2747f56f7a') {
        image = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5hSWOz0XuJRUvtRJp-RVau74pCRttRJ7c_FkGenbrIGm0vSv74pQXxdN9fVMUugJYESNiljKtXNuzEG3iSnAPPnNaVi733Rp5ijdwFCwBVEhUhsewS9A4nY_rbV_EkW9VZjhicTrbdv6p_BvKktWZavbUB7uUa0OYHEMoxIvEfYttNrJ_SkSLVz2FFg/s4032/PXL_20230107_062430878.PORTRAIT.jpg'
      } 
      else if (pubkey == 'ee24956dc647b0e70c5639ba89f6d4afffaf36b515cd27d3889e7551fc23470f') {
        image = 'https://pbs.twimg.com/profile_images/1590603554947207168/pHuvaLba_400x400.jpg'
      } 
      else if (pubkey == '68c0fcb1804a6719e24acf2fc99103399b50b5e72267e686d135f6f692deb268') {
        image = 'https://nostr.build/i/nostr.build_cba186d85cf24ccb5eb038d623e2aec8fa3d28e902a3273a3518b346d5520b85.gif'
      } 
      else if (pubkey == '330082f78a2860951a6c1b3c636ac72894f7df9fe43b80303cac4c91d724f4a2') {
        image = 'https://nostr.build/i/p/nostr.build_0e31685f2aba305239151a7eb5e1953b8963f5efafb3853a36465993148f5597.jpeg'
      } 
      else if (pubkey == '7a5b71e67b2be494eb116b7239e1d3b4d13169d063c8ba35e00c403d4f7796ea') {
        image = 'https://pbs.twimg.com/profile_images/1622200523037507587/73JXvMcq_400x400.jpg'
      } 
      else if (pubkey == '0d5e133460751e2ca9e4c4371911ad56bb676daed88fab20366161825bf13e47') {
        image = 'https://pbs.twimg.com/profile_images/1611334093735890945/IFLRXfwJ_400x400.png'
      } 
      else if (pubkey == '9c2b587dd7645f924d0b0a125506dabbb70195ee7e31aa7f39c913618761786b') {
        image = 'https://gyazo.transrain.net/image/yuki/1c19821aba3de559f02fdf23d49a63c30cfc6013'
      } 
      else if (pubkey == 'e8fd2572684b7715048d170c2324f3d340810be2e6c5b7222e93571cc79a9dc0') {
        image = 'https://i.gyazo.com/22938efee0fb8dd506e343487387cb32.webp'
      } 
      else if (pubkey == 'b4b4200aa19978587526aad3953e34e973dc10ef68050d1a4ed52e639eb46049') {
        image = 'https://pbs.twimg.com/profile_images/877152573974761473/M78OZigq_400x400.jpg'
      } 
      else if (pubkey == '3a80c0deeb4c40f7b26eb5d771a6d4a2650a128fd7d638cef10ec6b3a4fdeed9') {
        image = 'https://pbs.twimg.com/profile_images/479342752941879297/BNYaEHfL_400x400.png'
      } 
      else if (pubkey == '8d812b66a9ae59397f7173c60368afdaf1a10aaee53316210f263c7fcb6cbfb0') {
        image = 'https://2.gravatar.com/avatar/78f3c2f0ae440962084b4cf8c5568673'
      } 
      else if (pubkey == '81a9ae0a417a45e4c6f7dd47b64a077e48b20944f532c44d11f97dc0a6f2eb24') {
        image = 'https://avatars.githubusercontent.com/u/26901342'
      } 
      else if (pubkey == '8d45003a9dfa0eac9436c8ba10a50c103e897fdfbe630e7a86a5aa88c5406d29') {
        image = 'https://nostr.build/i/nostr.build_b1a7391b3db887e6177a3f5cfaab275d08bc975caf20b197d52ac7aabad94882.jpeg'
      } 
      else if (pubkey == '08956870438209a06b04e5d1ca6b9ef0b217f84d6894bab3133e6611e224bba9') {
//        image = 'https://pbs.twimg.com/profile_images/1544592696706473986/fNHDOvdz_400x400.jpg'
      } 
      else if (pubkey == 'df705aac787153c22d74aa78690c7adba1c084a594a496e5e64adc89b42d0c84') {
        image = 'https://pbs.twimg.com/profile_images/1386990611706748935/PyyOaI68_400x400.jpg'
      } 
      else if (pubkey == 'd7d45a2bfc99dce7e749a6c29360a8c6afc7b477ef18e6a6925b7bc68e18bb5c') {
        image = 'https://avatars.githubusercontent.com/u/1317305?v=4'
      } 
      else if (pubkey == '3afc6f47a0cfbe1f97bfdbaa7fa21e56315b09099ff865305e8763a994554ebd') {
        image = 'https://nostr.build/i/nostr.build_d4ee391ed84fa452d2bb48d92784ddc9c412fdb6ca9992600044f5add4f9d7b8.jpeg'
      } 
      else if (pubkey == '1da0ebe88575c077009acead37f621baf45f30dfda759ef1d561f1eec808972e') {
        image = 'https://pachelam.com/img/twitter_icon_rainbow.jpg'
      } 
      else if (pubkey == '5cd4a4ab697f52ce7c3725778758652bae2ce93c5a01dda5a6f5eed0428e48a8') {
        image = 'https://pbs.twimg.com/profile_images/1210189515811250177/wr-LDUeN.jpg'
      } 
      else if (pubkey == '7fd9529640dfb96340a038a32b666976fef1309741fae318a79481641c1799e4') {
        image = 'https://www.gravatar.com/avatar/6a52a4b638eeb48e35f8547828633ce7?size=200'
      } 
      else if (pubkey == '15766c32ea05c39185b761604a04382f72732968001e2ec307a16173d8af411e') {
        image = 'https://yukaripeerless.ca/wp-content/uploads/2022/09/F8CEF5DE-42F2-4C90-8549-88847630FC7C.jpg'
      } 
      else if (pubkey == '2d4657179b6bf0f71b493f0b3a3fa8f7174d3f7d6a2fbc2f341e5101a56d74cb') {
        image = 'https://nostr.build/i/nostr.build_ca0d23530b1d7397f0f43f6a0ae4cb25d1ba9fb6ff4c5cccb50ece1a42ca6c53.jpg'
      } 
      else if (pubkey == 'af73cc2f70c4440d9e7e0c531840c873be0639fa5964a1bc568e29e522bf4513') {
        image = 'https://bitkini.org/profile_pic_.jpeg'
      } 
      else if (pubkey == 'a341f45ff9758f570a21b000c17d4e53a3a497c8397f26c0e6d61e5acffc7a98') {
        image = 'https://i.postimg.cc/PxHQ0fwp/8t0-DGo6-V-400x400.jpg'
      } 
      else if (pubkey == 'c76d159ddda0ba6c94bb48c4012cf755c2ffb3bfb1fa89441b5dedb1c22267fa') {
        image = 'https://nostr.build/i/nostr.build_5d3f4b34b6fdded5d7252c31c3714f77277539fe4343ba986f488ffc9f4ce902.gif'
      } 
      else if (pubkey == '6690cc06ddf41dd8de9b298baf9e00c3047dcaa855f9a5faccc5ce10b2d85809') {
        image = 'https://i.seadn.io/gcs/files/c354997726552db84e7f4b5c42057d32.png?auto=format&w=1000'
      } 
      else if (pubkey == 'd7f415064de1335c4e8e378c6e70c1f7fd75e9dab460649f8f691e65514abcc7') {
        image = 'https://pbs.twimg.com/profile_images/1600338666466906113/kXc6Y6Cw_400x400.jpg'
      } 
      else if (pubkey == 'f11e91c5bf486fbcb930d82811d026b113a5cfb77bc8ab91439a7b8759a0b04a') {
        image = 'https://pbs.twimg.com/profile_images/1026477425373274112/pzycbWn__400x400.jpg'
      } 
      else if (pubkey == 'c6833a175a992030d04177fd8128e67110ad6bd1fc8143c830d4364fbecde085') {
        image = 'https://i.imgur.com/ds3Pdj2.jpeg'
      } 
      else if (pubkey == '5e7ae588d7d11eac4c25906e6da807e68c6498f49a38e4692be5a089616ceb18') {
        image = 'https://nostr.directory/icon80.png'
      } 
      else if (pubkey == 'a47ddd4595da6cff05f21f5248517c372447cc13d47031b7ffc50fcc654440d5') {
        image = 'https://nostr.build/i/nostr.build_bb2ed1fb4f5ee027f43bf05fa3afbc1b87faa0fa533aa8661107e774e28d7583.jpg'
      } 
      else if (pubkey == '3b908a0c9aaef14718ff29633509ed5defbbbd730da4d2c7a52e1bee435b4162') {
        image = 'https://pbs.twimg.com/profile_images/1552529198392102913/lTzVsjEc_400x400.jpg'
      } 
      else if (pubkey == '53037581f79ac726675a242efff1fb194f44d09c262c9a6ee2853d205a02b7a7') {
        image = 'https://pbs.twimg.com/profile_images/1574549164385775617/04NvI_ZM.jpg'
      } 
      else if (pubkey == '2c305c8cc641b558edf6683789075d62f174d6fa3947555c8e8170fdbb08f49f') {
        image = 'https://nostr.build/i/nostr.build_223cc59e51fe4fe9dff7830699023102beea1b2a06ea04f2b635942e9eb2a3a8.jpeg'
      } 
      else if (pubkey == '00291919b14905f8d33e97eb407d05958e2e30e5f03eb5c7a0c2f94bf44b4a04') {
        image = 'https://pbs.twimg.com/profile_images/1605547413892399105/EZJJpr8i_400x400.png'
      } 
      else if (pubkey == '626b7e32f64dd0c241404d5dfdcf093d28d13638d1cb5db9509d96130aef3b1b') {
        image = 'https://nostr.build/i/c216889751a652c97a56160bae449934a3ec54f4b371e70ff0be67b27d8bf8ec.jpg'
      } 
      else if (pubkey == 'b83a28b7e4e5d20bd960c5faeb6625f95529166b8bdb045d42634a2f35919450') {
        image = 'https://nostr.build/p/nb305.gif'
      } 
      else if (pubkey == '5ac0427cf0588ae5c9f09aa800e99dbbe4dc19c16afbd322b94c016c085e1c0d') {
        image = 'https://nostr.build/i/0cdfc8cb74370c0701c8699c417af3ebcba48e94bfa73e559a68f6a3d893c235.jpg'
      } 
      else if (pubkey == '706039b36ca7646fcd5211580aba1bcb8a75904cb4aa16fa12d3b9fdc4b5d06e') {
        image = 'https://nostr.build/i/6881a9f4778cbf379e6692d4ce998d0f21d16a717b320b30badedd9c9655879d.jpg'
      } 
      else if (pubkey == 'd8af17bdd5f96ffd46c4b1261c0762dbdfb4ec60897dfb768b95ed07e08763de') {
        image = 'https://herohoro.com/_next/image?url=%2Ffukidashi.png&w=256&q=75'
      } 
      else if (pubkey == '34d2f5274f1958fcd2cb2463dabeaddf8a21f84ace4241da888023bf05cc8095') {
        image = 'https://zeusln.app/nostr/zeus.jpg'
      } 
      else if (pubkey == 'b93049a6e2547a36a7692d90e4baa809012526175546a17337454def9ab69d30') {
        image = 'https://nostr.build/i/p/nostr.build_97516178e05c5b5235de1b1abc77872012b2d0cb9e1db7a581e5b3d6173d6273.jpg'
      } 
      else if (pubkey == '3a0392022aef09e2879e57a473e617f31d80549bad0641f6ec7e5441902de851') {
        image = 'https://void.cat/d/23DG9NbM84W98XoHyyBfmx.webp'
      } 
      else if (pubkey == '8fc11a84c4e5556b332fb7d257ae326f2587f43fc59416e68a7303640c25c062') {
        image = 'https://pbs.twimg.com/profile_images/1600089054657368064/Ow6iSEYF_400x400.jpg'
      } 
      else if (pubkey == 'c753e392890d3ec8274abc3013cd83796f273cbac1daa809dca48fb71fa8ba27') {
        image = 'https://i.postimg.cc/7hzdfbHN/73-DFAD19-D381-4-D8-A-9057-729549-CDFDCA.jpg'
      } 
      else if (pubkey == '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTczLDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTczLDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey == '4c7b041b5ad59e9aa086d1ceab47fce0f37cd834d4a29d90d8b243174967f755') {
        image = 'https://pub-6e4159818a204ff08c81ffb5d7086cfb.r2.dev/utsuwa/a1ebcca9-f82a-4cf8-8990-8d3367350fe9.gif'
      } 
      else if (pubkey == '4c96d763eb2fe01910f7e7220b7c7ecdbe1a70057f344b9f79c28af080c3ee30') {
        image = 'https://damus.io/img/logo.png'
      } 
      else if (pubkey == 'edf16b1dd61eab353a83af470cc13557029bff6827b4cb9b7fc9bdb632a2b8e6') {
        image = 'https://damus.io/img/logo.png'
      } 
      else if (pubkey == '53a1eb46b9fb90d0a3147dc663c08da53515475ca8381fa1b12b53f263441e08') {
        image = 'https://nostr.build/i/3806b00b13ab9e1d1f0bfa2251b5bf819e47975972f8d3604a0df49e7dd26ded.jpg'
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1614562193147842563/mfd80R_H.jpg'
      } 
      else if (pubkey == '3aa38bf663b6c834a04a6542edf14a81d3223e050c3cc9b7479f8c869c432cf2') {
        image = 'https://i.floppy.media/a8ecd14602c8ebfca42e53557ad16542.jpeg'
      } 
      else if (pubkey == 'c998a5739f04f7fff202c54962aa5782b34ecb10d6f915bdfdd7582963bf9171') {
        image = 'https://simplex.chat/img/icon.svg'
      } 
      else if (pubkey == 'f08a93704245801d7e5e6377f878e9c3ea2dfdf7419dc89efcf2b5d7a5f627d9') {
        image = 'https://nostr.build/i/b1515af0f80416b326acd95d92dc33a569dfc6f3383670048163419f7ab83896.jpg'
	image = 'https://image.nostr.build/39bfdb1ac1b9bc51f7154e721228d3179aa83f6f868ba13c19830c3614dcc153.gif'
      } 
      else if (pubkey == 'daefc770c5fa29cd52acbb444e5af3fc94b5bf775ee960703fd0f1da44085bb0') {
        image = 'https://nostr.build/i/nostr.build_7ee429c6b9c942e468e7d78c267f01dd13d40775f3c86e63de105782de8bb9c1.jpg'
      } 
      else if (pubkey == 'b2ee0596dd20de190b909e21e9b079a7e7cc5c0696dd12e27e3e5b1a6c096485') {
        image = 'https://nostr.build/i/9d6d6611424702e3cdbdbd6eb32fe50b2f46beb8ea99b4eb059dacd9d86ef145.jpg'
      } 
      else if (pubkey == '5c508c34f58866ec7341aaf10cc1af52e9232bb9f859c8103ca5ecf2aa93bf78') {
        image = 'https://nostr.build/i/9a73a58e33dcbb77c7b1d692f0e46814e8048bdcf67957dd0afd8919fecdaf3d.gif'
      } 
      else if (pubkey == 'f481fd13f9d695285f0ef54f729836db0470f9f204d6fa7025ced851d6465ff7') {
        image = 'https://void.cat/d/T3xr7Bs4wYaW81t4FXMPuQ.webp'
      } 
      else if (pubkey == '75da94027ad408bc2faffeb1e67d71babe8d78d89c3620da212303b877a65b5c') {
        image = 'https://nostr.build/i/p/nostr.build_b998ce0359ad8f74ea580683be323e6ac724960ae92a08803cd5b4af846631a2.jpg'
      } 
      else if (pubkey == '6e75f7972397ca3295e0f4ca0fbc6eb9cc79be85bafdd56bd378220ca8eee74e') {
        image = 'https://nostr.build/i/nostr.build_2aaf6d82bf46a54779df131f85e2bac7f98943bfb088bc6696cbe60741195e94.gif'
      } 
      else if (pubkey == '28f6ea2d316132ddf6910c789050b437122f6352ec8e01422b7cdc0d8a78deec') {
        image = 'https://nostr.build/i/f8497d94a009df15b9122708c6bf6a2d4901d542dc3240e1268f057aea06d1fe.gif'
      } 
      else if (pubkey == 'ecfa3c5c82d589c867c044056f75d6cff794f1886d5ebcdd48ad851da47adae4') {
        image = 'https://i.imgur.com/wCOItrV.jpg'
      } 
      else if (pubkey == '391819e2f2f13b90cac7209419eb574ef7c0d1f4e81867fc24c47a3ce5e8a248') {
        image = 'https://nostr.build/i/nostr.build_9dae499904c6f29a6caa74eac9a017b9d41c5e35fee0f404dad80e0314772ca1.gif'
      } 
      else if (pubkey == '28d37e1b489437c78d64ccdbf1f44c20e3f013dba3f4c2573b25599ba6308c22') {
        image = 'https://pbs.twimg.com/profile_images/1596544054942371842/yYCwsXQD_bigger.jpg'
      } 
      else if (pubkey == '9bf4f5b059522147f4302e04c1c65eefcb94da9f363cef467e87d152e5468e18') {
        image = 'https://nostr.build/i/9e1df09777b122ef543e81114b30b8021f10b2c68ef709695e352376b39b025c.jpg'
      } 
      else if (pubkey == '958b754a1d3de5b5eca0fe31d2d555f451325f8498a83da1997b7fcd5c39e88c') {
        image = 'https://nostr.build/p/nb1873.gif'
      } 
      else if (pubkey == '9be0be0e64d38a29a9cec9a5c8ef5d873c2bfa5362a4b558da5ff69bc3cbb81e') {
        image = 'https://profilepics.nostur.com/profilepic_v1/e358d89477e2303af113a2c0023f6e77bd5b73d502cf1dbdb432ec59a25bfc0f/profilepic.jpg?1682440972'
      } 
      else if (pubkey == '8781706462080b2f1f62f42f9ae426e7b571dd5d4f0cce4249e8a6f0bdc694d6') {
        image = 'https://nostr.build/i/p/nostr.build_9b11280ff4db4e568e7bd64a4ac27b63efd12009b1a8b9520352474e7a6205ba.gif'
      } 
      else if (pubkey == '6b67ed932051fff765001665b02c718dd3b8cb5bc860136076f3ef3a8eaad1e0') {
        image = 'https://void.cat/d/5rrv8TBdqzfSrpvMNVjQ7R.webp'
      } 
      else if (pubkey == '11d0b66747887ba9a6d34b23eb31287374b45b1a1b161eac54cb183c53e00ef7') {
        image = 'https://nostr.build/i/9084fd65a2c84632a296db939a509defc29849541d38538afe6baabd88946fda.jpg'
      } 
      else if (pubkey == '4a1ad1f471e64a8ab08863570c176e45debda7d085ac0579a699934d74fa7446') {
        image = 'https://nostr.build/i/nostr.build_99e73d1755a4ea86f06038a1379509c271812439fb794af54f539451abdc53c5.jpeg'
      } 
      else if (pubkey == '13628c57afc5d5ce25dc305804fd3e871884e64ac3d16a0ad5891d5e36bf2e0f') {
        image = 'https://nostr.build/i/nostr.build_ad7ace0829f3f0f017cb1c5c6db5d11a9f1c7d1370684a4e8c532ceadc6dc1f5.jpeg'
      } 
      else if (pubkey == 'd7c6d014b342815ba29c48f3449e4f0073df84f4ad580ae173538041a6abb6b8') {
        image = 'https://pbs.twimg.com/profile_images/1617532509021143040/1t-ifMmV_400x400.jpg'
	image = 'https://pbs.twimg.com/profile_images/1666651014231908354/m3iI1oJH_400x400.png'
      } 
      else if (pubkey == '6e196b6f500d650e9dee07c404b8c1675bac55a07e1ee9335c14dd3453387bb9') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDk5LDM4LDEpOyBzdHJva2U6cmdiYSgyMTcsOTksMzgsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == '592295cf2b09a7f9555f43adb734cbee8a84ee892ed3f9336e6a09b6413a0db9') {
        image = 'https://void.cat/d/AMx6K7WfVzSe6R8DVx7rDE.webp'
      } 
      else if (pubkey == 'cce17e1b27f216e8f42548a60f59947e2b199a01ffdd993b3d66bd8dd193c7dd') {
        image = 'https://robohash.org/npub1qn49n06hdwwyrtvdyymu2wx57jvhz7anmu20tgsdjjyae3zhwaxsjtl6rj?set=set4'
      } 
      else if (pubkey == 'eda6845cc2269bea10f010744ad79409acb7129d96857d4bf19e027696299292') {
        image = 'https://cdn.zebedee.io/uploads/4a5e3b05-2b54-4d0d-a604-dff3133e00d6_46286295-B230-4784-883B-C88EADA646DC.jpg'
      } 
      else if (pubkey == '04ea59bf576b9c41ad8d2137c538d4f499717bb3df14f5a20d9489dcc457774d') {
      } 
      else if (pubkey == '81d27c8405d50b6ef0c8171906d6c724af45ce3d8753a87b78472d6727cd41cd') {
        image = 'https://robohash.org/npub1qn49n06hdwwyrtvdyymu2wx57jvhz7anmu20tgsdjjyae3zhwaxsjtl6rj?set=set4'
      } 
      else if (pubkey == '8be2fd2cf7cce65a56f0820b022125e9ab4044c7dc5e444e2c0c0eab7501b0d7') {
        image = 'https://nostr.build/i/p/nostr.build_b16cd573515c070e7212b26225bcccc0e98070e5b7316ec2d500f5a6b1b0bf2e.gif'
      } 
      else if (pubkey == '2799e6c3966fded50d5588ee70c65ed47d4b3119e110b4a8228a2d0c44a0731d') {
        image = 'https://void.cat/d/Xh3yKLJmhSevcy9RHecqz1.webp'
      } 
      else if (pubkey == 'd49a9023a21dba1b3c8306ca369bf3243d8b44b8f0b6d1196607f7b0990fa8df') {
        image = 'https://files.coinfundit.com/accounts/avatars/109/877/596/919/114/210/original/89489e29ca22e54b.gif'
      } 
      else if (pubkey == 'a941f585754a6a95584606228f2021c5c89ec8ada5d37be15cec796a4b8a5e2c') {
        image = 'https://nostr.build/i/6508778517517aa02b7686eb86ae3464712b10228472acc8b42e6a7b023e53db.jpg'
      } 
      else if (pubkey == 'a723805cda67251191c8786f4da58f797e6977582301354ba8e91bcb0342dc9c') {
        image = 'https://nostr.build/i/p/nostr.build_984d249cca437a3352a7a8fcf184b2a75cfbafafc5d4dae6ace0db182b87c834.gif'
      } 
      else if (pubkey == '3ee23277f8a53c4486565167f6a02ffb133062424a2b8a4d86e68b58c71babcd') {
        image = 'https://robohash.org/npub1qn49n06hdwwyrtvdyymu2wx57jvhz7anmu20tgsdjjyae3zhwaxsjtl6rj?set=set4'
      } 
      else if (pubkey == '7f1b2d20466fd5ff836c6bca1a0849f9c77162cfc00b7e708a9142763c021673') {
        image = 'https://nostr.build/i/nostr.build_33f40449b90c6c9da04132fdc51b3a75e62d447dff5bc52548abc177a539cfb8.png'
      } 
      else if (pubkey == 'cfdc11439f3b4b6aad060365c1182f774b524075170a6cf1a3c1b2abc61d102c') {
        image = 'https://nostr.build/i/a0ce91e30a67fbcb83272ee60b98d7ae6ced37877dda77549a74fbb8e9ce41db.jpg'
      } 
      else if (pubkey == '686c37bdc5043c8bea54bbf89802349ab9ec9ad47486ca10ec07cb9e69db536e') {
        image = 'https://pbs.twimg.com/profile_images/1634017930974470145/8V5ZY5Tc_400x400.jpg'
      } 
      else if (pubkey == '29079335c266e8995b9b8b0613017f8a818b2a52600ed19bed268b82f4d025dc') {
        image = 'https://nostr.build/i/c283119d565b9d081f67e04a69c2e505c5675a8fe0b2285a877ccc08deb2f1ac.jpg'
      } 
      else if (pubkey == '0c98c195d9d44a99eac12f4134d47ced21c764fb6b12440de8ca3adbf0c373a7') {
        image = 'https://nostr.build/i/nostr.build_328b9ead692352354f3bdc9ef0732583be0795c613ad093ff3106a444f64df85.jpg'
      } 
      else if (pubkey == 'ea3ac5ea2be08fa176fd63e6637a94a8e996c1e5c3bf087eea013fffd1c9e28e') {
        image = 'https://nostr.build/i/9341297454048230808a856ac38ea37f4a6c70e701fb85447f23bb648ede5f00.jpg'
      } 
      else if (pubkey == 'a6df050214a1de98d54d2e66d87395d5505f557bc79200b4cd02e34118ab038b') {
        image = 'https://nostr.build/i/0fe56dd4f80ef6a3f62283b10f7b5499eff5f60e399fd3425638d706e7b3fe68.jpg'
	image = 'https://nostr.build/i/2c2fc6ae54cc3ec77058df758784490f696b4507c00cc8726a0f731f934e4740.jpg'
      } 
      else if (pubkey == 'ec7475faa996396d74e820bf70c507da56d02056cb49717b470cdb0f842f263b') {
        image = 'https://void.cat/d/EH3ZiXjiSysvMfLZztGvxW.webp'
      } 
      else if (pubkey == '087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e') {
        image = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f1ef-1f1f5.png'
      } 
      else if (pubkey == 'b9e4951d650df316db7560e4fd53355d142d18a2ea288549884674902a59ebfd') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTIxLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTIxLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey == 'ae4753868b2fa50ec8528c766e604c50bbc557c40bf290a78eecb657a816090e') {
        image = 'https://nostr.build/i/d2f26339d147e39826baf9cd5d7c8bdd90bf8ce3b3b511fd12271818ec70cbc6.jpg'
      } 
      else if (pubkey == '001863c7837dc05c768e4ed8d6ab2dd65d5f6af9df7e2a93190acf7f4a915c7a') {
        image = 'https://nostr.build/i/nostr.build_17e7658cd41b9f62ce7e417c656e76e34fe4976d70214705bd9affe4eb936101.jpeg'
      } 
      else if (pubkey == '5fd693e61a7969ecf5c11dbf5ce20aedac1cea71721755b037955994bf6061bb') {
        image = 'https://twobirds.one/pfp_purple.png'
      } 
      else if (pubkey == '5144fe88ff4253c6408ee89ce7fae6f501d84599bc5bd14014d08e489587d5af') {
        image = 'https://nostr.build/i/4aea777abc9af95b087911b4e6c59a5c503c13bf4d9a36b651daebf7b19beb87.jpg'
      } 
      else if (pubkey == '39e8b0dc9a4ce467659f61abf45b9b787900d6d4e52d75dd003d6a931f9a4d65') {
        image = 'https://nostr.build/i/a5ef476287a1e46912767e385afb8b426f9f26e2389f9b25f8b5d6ab6a7338ba.jpg'
      } 
      else if (pubkey == 'e40bcc3e12921ec232fe66528e2ba5d5cd4e0688e4bfa083a486a97fdaadceaf') {
        image = 'https://nostr.build/i/nostr.build_f29a8baa0075e1d05e27ca57500150af098e37afdb5636a448464b1021ca5be9.png'
      } 
      else if (pubkey == '0abb589750cfdf3ca88a62d722263f5082787fd8c19a8372cb27967db8ab42fb') {
        image = 'https://www.conscious-alignment.com/wp-content/uploads/2022/12/gillian_nostr.jpg'
      } 
      else if (pubkey == '234c45ff85a31c19bf7108a747fa7be9cd4af95c7d621e07080ca2d663bb47d2') {
        image = 'https://nostr.build/i/f452782aa056efa102f0d222e862df6ce65dda2316896a5f0c780c01bc23ec82.jpg'
      } 
      else if (pubkey == '55f04590674f3648f4cdc9dc8ce32da2a282074cd0b020596ee033d12d385185') {
        image = 'https://pbs.twimg.com/profile_images/1617539351453335555/0wqTBSkD_400x400.jpg'
      } 
      else if (pubkey == '26bd32c67232bdf16d05e763ec67d883015eb99fd1269025224c20c6cfdb0158') {
        image = 'https://nostr.build/i/nostr.build_18322f1f61c216039b9cd1001db7bd2ec6790c5692d4739cb95abd194c761e57.jpeg'
      } 
      else if (pubkey == 'cbf904c0702a361911c46d79379a6a502bc3bd0b4c56d25389e62d3ebf4a7db8') {
        image = 'https://pbs.twimg.com/profile_images/1589856537828368386/jOVin3dh_400x400.jpg'
      } 
      else if (pubkey == '20986fb83e775d96d188ca5c9df10ce6d613e0eb7e5768a0f0b12b37cdac21b3') {
        image = 'https://pbs.twimg.com/profile_images/1650865610061156353/Xxtar8Ra_400x400.jpg'
      } 
      else if (pubkey == '17538dc2a62769d09443f18c37cbe358fab5bbf981173542aa7c5ff171ed77c4') {
        image = 'https://nostr.build/i/p/nostr.build_7b9579da60a52c32a61cfe48e7b55b9fbd58d389ca29128d6c6851b00bb23d0a.jpg'
      } 
      else if (pubkey == '826f532bec8d0997bb32b8851749eb76be0eae0dd9f2df917ea19c99c015f44b') {
        image = 'https://raw.githubusercontent.com/hm0429/playground/master/chibi.jpg'
      } 
      else if (pubkey == 'd3070b8d93883c80d8a578387ca33ae064dc30218ad04e83bf4edb277c881fbf') {
        image = 'https://doc.rust-lang.org/book/img/ferris/panics.svg'
      } 
      else if (pubkey == '7624500e209a16059ac048d8069ca9c9a2272b4901df251a01c3304a26565955') {
        image = 'https://libertynode.net/system/accounts/avatars/106/552/717/291/762/874/original/8c1ebbc03b336cdc.jpeg'
      } 
      else if (pubkey == '5df413d4c5e5035ff508fd99b38b21ea9a0ac0b9ecc34f3312aba9aa2add4f5b') {
        image = 'https://i.nostrimg.com/aa325f8a49a3f8b5c41d9c98beb959eeeba1962ec50690715f898d9517605ec3/file.jpeg'
      } 
      else if (pubkey == '7bdef7be22dd8e59f4600e044aa53a1cf975a9dc7d27df5833bc77db784a5805') {
        image = 'https://avatars.githubusercontent.com/u/89577423'
      } 
      else if (pubkey == '44f2e5b74246580b5286a1528cd7a27342e8e8f155908ce1c33957136c8e65df') {
        image = 'https://nostr.build/i/76a81d671a3fcd8b052bedceeda3324243ec604f43240322ac271fc3f66adcf5.jpg'
      } 
      else if (pubkey == '4fe05ede79699eb3727c655a248c2e99f12bce793664c183bd4775cc97c78ebd') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDYxLDEpOyBzdHJva2U6cmdiYSgzOCwyMTcsNjEsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == '0ffb0df6e0193519592e8fdc4e638bd560308c56dd1b3b3f83eea09f24d39020') {
        image = 'https://nostr.build/i/nostr.build_81bd13a7c8e7db091c9010c5921b09b212d8e0476f64ae397626dfa410656a6f.png'
      } 
      else if (pubkey == 'f44fcbc65d464d61abce23bc171948b9cd31e136794260ac09d275d039634d2e') {
        image = 'https://showhyuga.pages.dev/nostricon/v3aicon.jpg'
      } 
      else if (pubkey == '909efa6667b28627f107764ce3c28895c46fffd1811b7415dcab03f48c44b597') {
        image = 'https://nostr.build/i/p/nostr.build_7a596b6ad995b5f5ea99495c7d092953af53bf838b7824a146ad1534d9b88790.jpeg'
      } 
      else if (pubkey == 'e4f695f05bb05b231255ccce3d471b8d79c64a65bccc014662d27f0f7e921092') {
        image = 'https://ik.imagekit.io/pnbizia3c/tr:n-media_library_thumbnail/users/hIWsCYxdBJzlDvu5zpT3'
      } 
      else if (pubkey == '68eccd5f56afa114e2af4bee73d77a00d54d5983032f87874e58d05238255ae8') {
        image = 'https://i.current.fyi/68eccd5f56afa114/profile/avatar_35893.png'
      } 
      else if (pubkey == '73923fd4c8d2a590fcadb3feb691cd6a80915872e947093993d1ff10452b3614') {
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8iHr7WdsLj5EKAcSS_h426UKyEqDJ7kP0Q&usqp=CAU'
      } 
      else if (pubkey == 'ce41c1698a8c042218bc586f0b9ec8d5bffa3dcbcea09bd59db9d0d92c3fc0b4') {
        image = 'https://i0.wp.com/lightning.store/wp-content/uploads/2022/12/nostrlogo.gif?ssl=1&resize=320%2C320'
      } 
      else if (pubkey == 'd12139a475fa3313c8617856bf694edc983a089c0b180277b137cfdede571996') {
        image = 'https://pbs.twimg.com/profile_images/682217238774992896/iLx69ewC_400x400.png'
      } 
      else if (pubkey == 'd7a7476b1253a1902f765685ffe3d351f8c2e2ac728f655aeb53f4c9a2f9a77d') {
        image = 'https://pbs.twimg.com/profile_images/1636351292380442626/sqphEYFc_400x400.jpg'
      } 
      else if (pubkey == 'ec79b568bdea63ca6091f5b84b0c639c10a0919e175fa09a4de3154f82906f25') {
        image = 'https://hodlr.rocks/wp-content/uploads/2023/01/chiefmonkey-laser-eyes.png'
      } 
      else if (pubkey == '07ecf9838136fe430fac43fa0860dbc62a0aac0729c5a33df1192ce75e330c9f') {
        image = 'https://nostr.build/i/p/nostr.build_fd197559c0330e3030a0a7b098729bcb9459fa116cae232dc2248fb98c4b18ee.jpeg'
      } 
      else if (pubkey == 'cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb') {
        image = 'https://nostr.build/i/nostr.build_374f05af8959162dc7345d21443e5274b7fa01d88aa8fb5fff9516e0ca70310e.jpeg'
      } 
      else if (pubkey == '955e5a041806dad5f8c088b926eab4c5545710588988c4761443ebb1c03b3cc3') {
        image = 'https://nostr.build/i/8f358e7470b76c54677d8d779679483f82b8137b3aa1dfaddf69d01522e6c2ca.jpg'
      } 
      else if (pubkey == '4ef6ce33aa9770a21145c1547870e7b7111606cfb98ede0671d1c2487083214c') {
        image = 'https://nostr.build/i/nostr.build_75b6cbdc693c6b28793c357635aca285abc7b3c5d7b38209b9f0b92f6238db8e.jpg'
      } 
      else if (pubkey == '7345d349c1b63627f06599e11feab4365224bb66c06183fe2647a0dd7174988a') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDQ5LDEpOyBzdHJva2U6cmdiYSgyMTcsMzgsNDksMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == 'df4f8a1b016e365d93e577aefc0f0d62422c071096f666d947c5e426825abfb4') {
        image = 'https://nostr.build/i/b922b01acb6473154b2d07cf18b62374bf295e8a497abd8aa54e6ca3833bd8aa.jpg'
      } 
      else if (pubkey == '51a9b72f280dc89949bcaeb13daced57546e154c35e5fb540e5d7ce594e3bc7f') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTgwLDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTgwLDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == 'c7c8f645fd45b09055fb6c26d148737ad7ed12ddecde0d4c877b88f8d4196865') {
        image = 'https://nostr.build/i/9e62430b195fe1fb3641a9c756cdccecf1650d99cad038736845b97a5de897ed.jpg'
      } 
      else if (pubkey == '0f1b5961795de31168334c0131986126c55d47ba88a3ff10d309de62868242bd') {
        image = 'https://nostr.build/i/nostr.build_0cef7999b096e3256a8137a019e87fe1654310f02831a3797c0fa54ef069bf26.jpg'
      } 
      else if (pubkey == '978c8f26ea9b3c58bfd4c8ddfde83741a6c2496fab72774109fe46819ca49708') {
        image = 'https://nostr.build/i/nostr.build_f3dfac5e66005f1f97e60e63b9785b5241a8324c346863f633be7563a099bc8a.jpeg'
      } 
      else if (pubkey == '5507590febe5c6c1c6757f3a5fe97d3d11d661edb0fec3c1729f6d6e07fbab48') {
        image = 'https://nostr.build/i/nostr.build_6efa90097971e3dc344249ee3b46034b33cab77a8558256eb43d4b76094ad702.png'
      } 
      else if (pubkey == '8867bed93e89c93d0d8ac98b2443c5554799edb9190346946b12e03f13664450') {
        image = 'https://nostr.build/p/nb9628.gif'
      } 
      else if (pubkey == '72f9755501e1a4464f7277d86120f67e7f7ec3a84ef6813cc7606bf5e0870ff3') {
        image = 'https://bucket.thesamecat.io/ShareX/2023/06/_bd42ae0e-45be-4e99-8ba9-c4bb778a3bb9.jpg'
      } 
      else if (pubkey == '9aa3a3ccc2ed8056b598e632bf98f55ce20a9e2494d5502149aeba838ad7a556') {
        image = 'https://nostr.build/i/nostr.build_ab520f301d8bd8133ae3d694f56ccc7945f55c5b0157a7a58f721bffaa524bd8.jpeg'
      } 
      else if (pubkey == '381dbcc7138eab9a71e814c57837c9d623f4036ec0240ef302330684ffc8b38f') {
        image = 'https://thewell.unc.edu/wp-content/uploads/sites/1007/2020/10/psychedelic-1.jpg'
      } 
      else if (pubkey == 'b708f7392f588406212c3882e7b3bc0d9b08d62f95fa170d099127ece2770e5e') {
        image = 'https://nostr.build/i/p/nostr.build_f397bc98e30551103c3d91438a902c3d4a4bde231f225e00863228516040fa77.png'
      } 
      else if (pubkey == '2489d115ead3641ff3fefd1e98998c48349ef72193242a287dd26493798779b9') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTAwLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTAwLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == '9ce71f1506ccf4b99f234af49bd6202be883a80f95a155c6e9a1c36fd7e780c7') {
        image = 'https://subco.nscio.us/system/accounts/avatars/109/644/296/008/899/114/original/23a86e8ef975b34f.jpeg'
      } 
      else if (pubkey == 'fd6389f914b3ef63c72ab151f958526e85c1279fb1f34850aa954c30a211515d') {
        image = 'https://nostr.build/i/003a7307c5ae6758456242c1ec43e8b7ec586e2a609e577eb4273c0b80f9c968.gif'
      } 
      else if (pubkey == 'bfc058c9abb250a2f4f0f240210ae750221b614f19b9872ea8cdf59a69d68914') {
        image = 'https://uncloud.tech/.well-known/bu5hm4nn_laser.png'
      } 
      else if (pubkey == 'eda96cb93aecdd61ade0c1f9d2bfdf95a7e76cf1ca89820c38e6e4cea55c0c05') {
        image = 'https://void.cat/d/XLzqvHD3CfFDm4DWTrbn7w.webp'
      } 
      else if (pubkey == '3356de61b39647931ce8b2140b2bab837e0810c0ef515bbe92de0248040b8bdd') {
        image = 'https://pbs.twimg.com/profile_images/1226556961434591233/nTJpWObI_400x400.jpg'
      } 
      else if (pubkey == '2609dca5273b841a456d07f2f6e55e2fe709ddb2cf840b81ffa710bfb9e03d4b') {
        image = 'https://pbs.twimg.com/profile_images/1362791299053539328/3lmZBczq_400x400.jpg'
      } 
      else if (pubkey == '6389be6491e7b693e9f368ece88fcd145f07c068d2c1bbae4247b9b5ef439d32') {
        image = 'https://i.imgur.com/w4EBN8d.png'
      } 
      else if (pubkey == 'cd6b7c099203261a42e62af7d0edd476805314ee68daaf9afb7260ddf134404a') {
        image = 'https://nostr.build/i/4b7ee2949f0799c20759cc8d559b05b13d9222fe89bdc1cc83b8ae7a8d61bf8d.jpg'
      } 
      else if (pubkey == '7045f370648ff549e9407f08b9ddde7d9d5d638336b701a7814617acb8ed3ea2') {
        image = 'https://nostr.build/i/db1c7a1c96cb108f018002468d42e4b30082667437c431ce83601aa28d740c71.jpg'
      } 
      else if (pubkey == 'e0f59d89047b868a188c5efd6b93dd8c16b65643b8718884dad8542386c60ddd') {
        image = 'https://i.imgur.com/BpLGErr.jpeg'
      } 
      else if (pubkey == '7ca66d4166b16f54a16868191ba1c6386a976624f4634f3896d9b6740a388ca3') {
        image = 'https://i.postimg.cc/9MKFy36F/0-D1-B767-B-CFE8-4-E1-D-AAB8-F2-EDA3-D2730-B.jpg'
      } 
      else if (pubkey == '5c10ed0678805156d39ef1ef6d46110fe1e7e590ae04986ccf48ba1299cb53e2') {
        image = 'https://cdn.jb55.com/s/dave.png'
      } 
      else if (pubkey == 'd3f06d830e33927f422f9d00c5180b6a071f8e024573c5aad5c5a3f17ff53dc3') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_a7c2255cc4ee30fc85d6bda9eeb3cc1b5ac9dac1c26e153cf50b8e1080569233.jpeg'
      } 
      else if (pubkey == '7f5c2b4e48a0e9feca63a46b13cdb82489f4020398d60a2070a968caa818d75d') {
        image = 'https://nostr.build/i/p/nostr.build_2234d34b3e590e20d8ab2342b01d8b979e620ef9ae263e1605b2f10a6180a22a.gif'
      } 
      else if (pubkey == 'e88a691e98d9987c964521dff60025f60700378a4879180dcbbb4a5027850411') {
        image = 'https://void.cat/d/MreaerC65YkE8zeHvVv6XM.webp'
      } 
      else if (pubkey == 'baf27a4cc4da49913e7fdecc951fd3b971c9279959af62b02b761a043c33384c') {
        image = 'https://nostr.build/i/8a0be1079b77d0ca2da35f529482252859bc1ecdf1629aa59c168c74ccaa5120.jpg'
      } 
      else if (pubkey == '021d7ef7aafc034a8fefba4de07622d78fd369df1e5f9dd7d41dc2cffa74ae02') {
        image = 'https://i.nostrimg.com/b9e45a17.jpeg'
      } 
      else if (pubkey == '04c915daefee38317fa734444acee390a8269fe5810b2241e5e6dd343dfbecc9') {
        image = 'https://werunbtc.com/p.webp'
      } 
      else if (pubkey == 'f271ce016005528d9f9895e722b84115a0af934ae714a0351bbc1d82a6cf2d1b') {
        image = 'https://s3.arkjp.net/misskey/49275b46-b443-412a-a5fa-c11548a28aae.jpg'
      } 
      else if (pubkey == '0b17d13813be9e113219d401fdf62a7ff567acb648cd0f9a749a53eda1eb3b6d') {
        image = 'https://i.postimg.cc/j5hLs3j4/CBD3-ABA4-A695-40-E5-9-A58-9-CD8552-EFBB1.jpg'
      } 
      else if (pubkey == '171ddd43dab1af0d1fb14029287152a4c89296890e0607cf5e7ba73c73fdf1a5') {
        image = 'https://nostr.build/i/p/nostr.build_d0cbd064b003795578573262ebdec9540fb2a81f32c2890d762a58bcb5379f29.jpg'
      } 
      else if (pubkey == 'f728d9e6e7048358e70930f5ca64b097770d989ccd86854fe618eda9c8a38106') {
        image = 'https://pbs.twimg.com/profile_images/1594137153625276416/t1RUP3yP_400x400.jpg'
      } 
      else if (pubkey == 'cfe3b4316d905335b6ce056ba0ec230b587a334381e82bf9a02a184f2d068f8d') {
        image = 'https://pbs.twimg.com/profile_images/1631545297460670466/CZ74Dnl9_400x400.jpg'
      } 
      else if (pubkey == '27f211f4542fd89d673cfad15b6d838cc5d525615aae8695ed1dcebc39b2dadb') {
        image = 'https://pbs.twimg.com/profile_images/1477702801962721285/KqnrA7oU_400x400.jpg'
      } 
      else if (pubkey == 'b5ba65fbb0221a32b6c14400f505cfdd3651d43938a248a9265a516ec0c54240') {
        image = 'https://nostr.build/i/p/nostr.build_14ddd98234538d173d9371832728974b72cf8d151e80bb90e3d6aaeb53bec46a.gif'
      } 
      else if (pubkey == '3dcc157a0304ec26ea131a0f4e576e2da67ff5c66980949c55bd7f0bb1b5efa1') {
        image = 'https://void.cat/d/D1FjFh5MkZLmD4U7YnbGHY'
      } 
      else if (pubkey == 'ff123fa7611698afbdc6f8c00ea2b47162c6b77dbac70aa1832df5db8c4a9e36') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDE3NiwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDE3NiwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == 'ee6ea13ab9fe5c4a68eaf9b1a34fe014a66b40117c50ee2a614f4cda959b6e74') {
        image = 'https://nostr.build/p/nb4316.gif'
      } 
      else if (pubkey == '5c0775b1ae0a5140da9599aa9cd1c5beea55c2d55a5d681808525eb5fce37b32') {
        image = 'https://pbs.twimg.com/profile_images/1578709791786115072/c3c10bs2_400x400.jpg'
      } 
      else if (pubkey == '9479339eb118796a8d8e9b7c1ff6d34abf8cd0e4fe81b0d80372e2b1d2da7b12') {
        image = 'https://social.mikutter.hachune.net/system/accounts/avatars/000/002/334/original/e8656ca209d8f82d.jpg'
      } 
      else if (pubkey == '605bf3430768ebba1dedac592adbafce9db82c4235d98c8f7ffdef4d948b9dda') {
        image = 'https://nostr.build/i/p/nostr.build_e6a8a7c1b1516a99853386ad72a4819cef2329906af0a71c0c199a133707c324.gif'
      } 
      else if (pubkey == '28254652e6a543bf200b9d05dffd835e1414d77c6a184944c5217c842e193cf6') {
        image = 'https://nostr.build/i/a766980fafdbc068ebd76d8644e551a43573ac0bfc24668dad5b6bc0c91ea342.jpg'
      } 
      else if (pubkey == 'feb4e6277e69aedd3b6c0f2c1904976397f30b8f003b201a4908ea3fa7a7bfe8') {
        image = 'https://nostr.build/i/nostr.build_fae8b9094d6b061fdcb9ae35f4c7e0ef2d78b11c9e9061a9a01bb4aaf9cdfec5.png'
      } 
      else if (pubkey == '8b928bf75edb4ddffe2800557ffe7e5e2b07c5d5102f97d1955f921585938201') {
        image = 'https://void.cat/d/TbvhoGzZnSGwQDitSkz2KP.webp'
      } 
      else if (pubkey == '0a26c28b057af50e8e5f3679790bad0c7990a771e94eb6c3a80287edd4b060c2') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDE2OCwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDE2OCwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      } 
      else if (pubkey == 'b726e71bce585201181ace89326ae428406cee071395f9bf12b62b62d0449b23') {
        image = 'http://bl6pap003files.storage.live.com/y4m_ivY7sHya_d4JQAQUaqwhX1Q50bmAXyEkA9wWLK3NuCd6d9ZroEv-k_Dsnhg6jxR3gjY0Vphu5g31KKomPz441Ti5vZ33B-o9oAnVAvJQa7_UJXbssgH5riB0PmD5qIGjgmXSeeLr2PJNPk183W2sj1VXKfS9fzbX2-7G-llKyEyDye5ndu-1EmFZODw2dsi?width=600&height=600&cropmode=none'
      } 
      else if (pubkey == '0d06480b0c6e3be3c9a1a65d7e6bc2091227d55bf4c77eeb6037ba7776c300ec') {
        image = 'https://nostr.build/i/nostr.build_f8806459055dc6a7e72c881ceac9a2a7dda7ea703afdf12c570be57a06498309.jpg'
      } 
      else if (pubkey == '619af6a60b3fe4c733aaca061c522cc9c7cf1d87ef4c908facc5ed936d3bdf23') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE1MywxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE1MywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == '1afe0c74e3d7784eba93a5e3fa554a6eeb01928d12739ae8ba4832786808e36d') {
        image = 'https://i.postimg.cc/yd4j6Znb/0-AE2325-A-C9-A0-475-C-8-ED3-F012-E5-E3-C426.gif'
      } 
      else if (pubkey == 'f901616f00a63f4f9c7881d4871a03df3d4cee7291eafd7adcbeea7c95c58e27') {
        image = 'https://nostr.build/i/p/nostr.build_68aa363a420f42dada27965dc47bbf263ff58950ea14fe2227de7bdaa3d41d9d.png'
      } 
      else if (pubkey == '1247db629e52d5225a6c525615bc6c6342b60b9edfd45283dc4d4f001db0b213') {
        image = 'https://nostr.build/i/c0c5820021490c3d864f1e3cf6375446eb6c9b0a8684018c4e792c09b8f5db4d.jpg'
      } 
      else if (pubkey == 'a55a26a692dae7013f05c50cd3fc5452adac5307f0e53f8a2d12daa32dfcc692') {
        image = 'https://nostr.build/i/b1ee572ad3b722342035750c4459f14c585fa29fd694f2f6e66716d5787ef621.jpg'
      } 
      else if (pubkey == 'cd3e852cda5e61f14fae4d251aa96b59da1c2a7020cabb30a8844d3d89ea2ddc') {
        image = 'https://pbs.twimg.com/profile_images/1410013383299153927/c-4BoFRj_400x400.jpg'
      } 
      else if (pubkey == '56899e6a55c14771a45a88cb90a802623a0e3211ea1447057e2c9871796ce57c') {
        image = 'https://user-images.githubusercontent.com/99301796/219741736-3ce00069-9c6a-47f2-9c8b-108f3f40295b.png'
      } 
      else if (pubkey == '2e79dcc9aaf0b34c65cef08ef84b2ba3723016bb2e834bb385abd84f5c1dee1b') {
        image = 'https://nostr.build/i/nostr.build_017a5018a27045b9838186a7b7f548342dbf7c60f4d794dab2dd7bfdc79b3aae.jpg'
      } 
      else if (pubkey == '72c5f0b04360a038bbc74ba1d9070fad4a0b270796b7d197a495cca43038d000') {
        image = 'https://nostr.build/i/a5381dc9f6087c1062e8c771126480cee2303f064572f5685b59de7eb9cf28a5.jpg'
      } 
      else if (pubkey == '75bf23531ae9f98c62995ba07191e488ead475975371d63d7dfd46bde1bfa895') {
        image = 'http://paynym.is/PM8TJXVwNbJb8MGphGbijWucP3fw9mkDZ9BQT3pGkCsdFK21cR6v5xKrart2oBsqDMkxtqMGgkoTgn1NAczLznUeTwa4BG2rs1zZDfEtKin7WuBcdvcK/avatar'
      } 
      else if (pubkey == '51bbb15e37e85b00d8a76837b6b6a3355d1dc5ec58bdd0f3808c9ad3b77a2290') {
        image = 'https://nostr.build/i/3589dea710b3b8230495a56d99b7bfb780817f167ccd8569442b747f42d282b2.jpg'
      } 
      else if (pubkey == '21b419102da8fc0ba90484aec934bf55b7abcf75eedb39124e8d75e491f41a5e') {
        image = 'https://avatars.githubusercontent.com/u/88121568?v=4'
      } 
      else if (pubkey == 'f2ff7ad4f08ad2d4a09bcdc0db36745761428203e99f32de870da95763602614') {
        image = 'https://lnplus.s3-accelerate.amazonaws.com/52nk60717d9eg6facvzlrejbedtd'
      } 
      else if (pubkey == 'eeadea6cbb5018a190f0117857de513cc271d24c947d56cd82c54a6b64ae47a4') {
        image = 'https://nostr.build/i/p/44053b950072c86e88e0e6eca2322187328ca9a2f08bbd39e7af9c483bf40c83.gif'
      } 
      else if (pubkey == '7ef5f1b156ea5e7e9f9b787f7951b2d101f77806167a8d44b11468a10e0fcd27') {
        image = 'https://nostr.build/i/nostr.build_07a237022e7dbd7273dfb497e38ba4098305436652e8ba8fe4142edde3e88ae9.jpg'
      } 
      else if (pubkey == 'c3750212a078efd8d84d1288ea78ea254922c26c134e3c1a44d64b6fb71b0e78') {
        image = 'https://nostr.build/i/nostr.build_be8a093eec9017f2f784886313c756f0ec592a4bbaff6a9712567d2db93beaa4.png'
      } 
      else if (pubkey == '46c7a8ee3df0867650c0ab03770aa9ad309cb2a45a3e03c762c978cee636be59') {
        image = 'https://pbs.twimg.com/profile_images/1432266009776254977/mUKeRiir_400x400.jpg'
      } 
      else if (pubkey == '0b118e40d6f3dfabb17f21a94a647701f140d8b063a9e84fe6e483644edc09cb') {
        image = 'https://nostr.build/i/p/nostr.build_15d3f5653f090ca5832c77f1583e9f698831d383862eaf1b535e7a4cb30b29ed.jpeg'
      } 
      else if (pubkey == '4408c00c1e9358c05ad11dbe2d3a1d4acb8c2b6dd6386e4e3da9e14bb06df42b') {
        image = 'https://nostr.build/i/nostr.build_6136ed182b05f830ceb0fbc8cd9bf6b1a2879605ffd8911ebee6a51bbbeb8d2b.jpeg'
      } 
      else if (pubkey == '9c163c7351f8832b08b56cbb2e095960d1c5060dd6b0e461e813f0f07459119e') {
        image = 'https://nostr.build/i/nostr.build_9027363fcece7cbf6eb086621a7bc8c9a6997c93de77e51a6bc4dc43fa935c16.png'
      } 
      else if (pubkey == '76c71aae3a491f1d9eec47cba17e229cda4113a0bbb6e6ae1776d7643e29cafa') {
        image = 'https://nostr.build/i/nostr.build_95bb7ab1602652b152795511012747fafcbc040bf0adac220cd833cc5a0ff817.jpeg'
      } 
      else if (pubkey == '3944c69ce301854869182a9269290a909a26b9b6e2c2f9684a371fdd3ad42d3e') {
        image = 'https://nostr.build/i/d9c527835776583f42253dced84e4b3911d587f52e73ab5cee226ffb8d58260d.jpg'
      } 
      else if (pubkey == '868d9200af6e6fe1604a28d587b30c2712100b0edab76982551d56ebc6ae061f') {
        image = 'https://nostr.build/i/6db462ab2ed3e96d14373d2678d1687868092d7bbf39c8339536831084e3bd23.jpg'
      } 
      else if (pubkey == '416335ae6302946042249279d96cae8a33337baae859b6f962618d3c9e520a63') {
        image = 'https://void.cat/d/XZk61uf8Pm6sVPepvKss6m.webp'
      } 
      else if (pubkey == '2250f69694c2a43929e77e5de0f6a61ae5e37a1ee6d6a3baef1706ed9901248b') {
        image = 'https://pbs.twimg.com/profile_images/1640590604672573440/7FtQa-gW_400x400.jpg'
      } 
      else if (pubkey == '79c2cae114ea28a981e7559b4fe7854a473521a8d22a66bbab9fa248eb820ff6') {
        image = 'https://media.gleasonator.com/9059767a327659dad5d43a2a7b3f048b7008cea76e58dc6ba79b3838feaf25e5.png'
      } 
      else if (pubkey == 'b8d3e350867211fd80c1eeb72aa1bec86ba37e080940bd3dff17ac4f43c4f391') {
        image = 'https://nostr.build/i/6678c4c70e81af628f484a4912d0a5215d83234bb74fb299934578d5331c54fa.jpg'
      } 
      else if (pubkey == 'a4dbfdc6e7e27e33b04e8009cf15dd1df35d62a9b258e70c38166871a577c47a') {
        image = 'https://nostr.build/i/nostr.build_72c1d71f29ff07a219e8a3338c52e398ffcac47d5541a07936e3caeecf25bd3d.jpeg'
      } 
      else if (pubkey == '657c0b37cb6eb5fa9b8ad5c4d94fc510bd540bce539dd9c1d3d1bab0171cbe04') {
        image = 'https://nostr.build/i/fd4a48d235b3faa07d5a1b0b2dd6af55ea763065cdd8f1362bbfe057890a8d6b.jpg'
      } 
      else if (pubkey == '8d7e9c016e78dc20e48a7c384cf9123642a5c35fb833b0fb1515cd93ca12555c') {
        image = 'https://nostr.build/i/nostr.build_51541b9b0358638bc0ad90622aed5c0336e7d0b5a25a3861847068e8e852986c.jpeg'
      } 
      else if (pubkey == 'b35ed551ddb3849494922072a805d78098e7f74833aee90c164902bb9e6fcd11') {
        image = 'https://nostr.build/i/7fb1442c595a479b2561ead1075548bdaa9a9ee065d5c9fe5c3644db141e4913.jpg'
      } 
      else if (pubkey == 'cdec7517ea464c6f5aacb16967fee0caf330271811cc3b268c854a3e30a4aa83') {
        image = 'https://nostr.build/i/e5d7125b8621fe8ab51b4ed03e278a21a1e7f7ca80c964dfc6c0730ac2913b99.jpg'
      } 
      else if (pubkey == '4f262f7f69377fc8151ea678e00aba505a8ca699b30eeb1882aca6f233f52695') {
        image = 'https://nostr.build/i/6973a5172e30ea4f658394dffa43b69a1e7fc852d2891b271353394365ac949b.jpg'
      } 
      else if (pubkey == 'a05d4b701627f56efb90f71d21704a6949b70adec1a6b23210d7bb0a3a2ca6a9') {
        image = 'https://nostr.build/i/p/nostr.build_968f7cc38af22b14063cba232aa0d979a204fa53754b8d7ab2364d41855da455.gif'
      } 
      else if (pubkey == 'c04a3449ffc2d097c5d3300ae188fb091aea8406bdb092c16489d0f15af62ab2') {
        image = 'https://dl.openseauserdata.com/cache/originImage/files/b990a0f621f97137988da1c664babb8d.png'
      } 
      else if (pubkey == '50f1e4619bac816a6cfcaf613a2d5b501d4635deceaafe21ed917c66e24f6aff') {
        image = 'https://void.cat/d/UMVFHLuvBkRY3LR5k5DA7N'
      } 
      else if (pubkey == '7cb276c9a7eac6b6af7de8dd4bdd67a4726b71535cd18ee0f956ce92a857ba7e') {
        image = 'https://nostr.build/i/p/nostr.build_3e81771aac7b8b81bd1aaca83b755a37f6676762fa02208a69e9b88c38a40d1d.gif'
      } 
      else if (pubkey == 'ac3fb436a663b25893657f4b6a3d9d2f02d1974bb5ced603f4d0c8ee32d7e0a2') {
        image = 'https://void.cat/d/6YqzrnABpjbEwcbc3qaDso'
      } 
      else if (pubkey == 'bc1c1cc604539bb408446967f38e2a463d3bdafa7af7f31723a35362f1e9abc1') {
        image = 'https://void.cat/d/WymUbA2KHaDPcKCJAEtsWj.webp'
      } 
      else if (pubkey == '6d2a43408ee74c2e35fd7f4eb3288b73cfafd88cd2d059e6c05058e676fc5290') {
        image = 'https://nostr.build/i/p/nostr.build_472a316e428764363dffb7461d53b2347fc580a120cc254cbdf87ad3d12c8d78.jpeg'
      } 
      else if (pubkey == '3f4d4ed0186c86cc7de9f66ff49ae4551c312a742fb885a00ef93b657d4c5717') {
        image = 'https://nostr.build/i/84771bb65b71703e92169b41e0455462100dc5de9f0e9437b13580724d1a564f.jpg'
      } 
      else if (pubkey == '5be6446aa8a31c11b3b453bf8dafc9b346ff328d1fa11a0fa02a1e6461f6a9b1') {
        image = 'https://tonygiorgio.com/content/images/2023/02/tony-giorgio-1.jpeg'
      } 
      else if (pubkey == '106af487eca6e7c9adcaeb3499fd27e05340279fda5fba1d94a48ac301e5e5bb') {
        image = 'https://media.tenor.com/RG-yObB_TeQAAAAM/chill-cute.gif'
      } 
      else if (pubkey == 'f4db5270bd991b17bea1e6d035f45dee392919c29474bbac10342d223c74e0d0') {
        image = 'https://picsur.thesamecat.io/i/1ec8ed4c-be36-4457-9c48-35b7e62b458e.jpg'
      } 
      else if (pubkey == 'baae543256e768aebbd3dbcfafea9e980604af46d5f019b98d40abc8c3339b85') {
        image = 'https://nostr.build/i/fe12cdc6061bfb98adbe278293e253c99e8c20ad94900e548ec6000f84c82eb6.jpg'
      } 
      else if (pubkey == '2edbcea694d164629854a52583458fd6d965b161e3c48b57d3aff01940558884') {
        image = 'https://nostr.build/i/p/nostr.build_2d40c82b0ea13e34069f1c934f39d9cbc33c999ab80824b5763a9ff451c5f82f.gif'
      } 
      else if (pubkey == 'a80455732d5bfa792f279011a8c871853182971994752b9cf1169611ff91a578') {
        image = 'https://nostr.build/i/4d4128cb7a6e1ee9cd902587e96ed35863b23a425e4530a8fbafd59e2f555d48.jpg'
      } 
      else if (pubkey == '42d9955e6af7e477d447f4791c0e820be8a8d5e450284c44f5501a78af84f45f') {
        image = 'https://nostr.build/i/79a429244819700f5863eacb0f63001acbb7e9fe3c20b9c6df3c2917d68cc0c5.jpg'
      } 
      else if (pubkey == '880f967145ab66b53d9dc279d44a9722ba875d232c73f3df4707d1e79c4336ce') {
        image = 'https://i.postimg.cc/JzMptCQ8/605-B03-BA-DB64-4-A85-B8-BD-2-F160-F8-BC345.png'
      } 
      else if (pubkey == 'c037a6897df86bfd4df5496ca7e2318992b4766897fb18fbd1d347a4f4459f5e') {
        image = 'https://pbs.twimg.com/profile_images/1568743166035070976/4MyKww8A_400x400.jpg'
      } 
      else if (pubkey == '71f40d6c85dfac90574135f322f34805e06eb0823503bf2161db96a9bcb413e7') {
        image = 'https://nostr.build/i/nostr.build_21d4d0fe490e023f32cedd4114b0ea7dae634b24575a074594cead6d164e95bc.jpg'
      } 
      else if (pubkey == '516413d79d0feef05fc0adaff418b550f8532f527388fe13b64cae54a8c0e850') {
        image = 'https://nostr.build/i/34f5b7d60a0acb8ec6fb7f667492ab3a2c563886fa85f8ad33a63cea045d227d.jpg'
      } 
      else if (pubkey == '717d4b62ed661dec51fb39962728a424dd00f8edb68da2c52851b79a0ad25465') {
        image = 'https://pbs.twimg.com/profile_images/1632551261965893632/WThDhlfZ.jpg'
	image = 'https://image.nostr.build/fb4acf29faaca7514662a31579e8c756a94852307a69eede3ca3a112b511594f.jpg'
      } 
      else if (pubkey == '5b0183ab6c3e322bf4d41c6b3aef98562a144847b7499543727c5539a114563e') {
        image = 'https://nostr.build/i/p/nostr.build_0e69671aba33808290112d47f133b7169d28e84bdd7dfdb88a517672d4c66ac2.gif'
      } 
      else if (pubkey == 'd902b843a62f946483ca5bfe41cacae81ce7608515116bdad2dffd2417e43df1') {
        image = 'https://cdn.discordapp.com/attachments/1001069168847757355/1070896161906511902/PICT0143.jpg'
      } 
      else if (pubkey == '85a8679df872002a2701d93f908d9fa41d82c68a42a253ddb5b69c3881ad3f10') {
        image = 'https://nos.re/EJcan'
      } 
      else if (pubkey == '0cb05e2faeb2925e0a3e84c022bddcf0a41d156669c09c6ffb9b444422f101a7') {
        image = 'https://i.imgur.com/4kq83BM.jpg'
      } 
      else if (pubkey == 'f7fa0f1ba20ab52418d1a8e83f781685976277da10860f424b78c3aa885d7584') {
        image = 'https://pbs.twimg.com/profile_images/1617515791389446146/P4FDVUPI_400x400.jpg'
      } 
      else if (pubkey == 'af9d70407464247d19fd243cf1bee81e6df1e639217dc66366bf37aa42d05d35') {
        image = 'https://i.postimg.cc/mZtpWG1b/Shaun.jpg'
      } 
      else if (pubkey == '532d830dffe09c13e75e8b145c825718fc12b0003f61d61e9077721c7fff93cb') {
        image = 'https://i.imgur.com/HTe4TAY.png'
      } 
      else if (pubkey == '8fb140b4e8ddef97ce4b821d247278a1a4353362623f64021484b372f948000c') {
        image = 'https://i.nostrpix.com/fishcake/p/profile.png'
      } 
      else if (pubkey == 'cbb2f023b6aa09626d51d2f4ea99fa9138ea80ec7d5ffdce9feef8dcd6352031') {
        image = 'https://nostr.build/i/4125362f1d873855cfee6e57952e990ec2142e346c78f45e5d3a12a21b7c1d37.gif'
      } 
      else if (pubkey == 'a8abe37636fec9ccc78807bb8a8aad7c1ff6801617e5805864a6882fc98ba023') {
        image = 'https://bitcoin.clarkmoody.com/dashboard/img/touch-icon-192.png'
      } 
      else if (pubkey == '05933d8782d155d10cf8a06f37962f329855188063903d332714fbd881bac46e') {
        image = 'https://snuploads.s3.amazonaws.com/53'
      } 
      else if (pubkey == '65594f279a789982b55c02a38c92a99b986f891d2814c5f553d1bbfe3e23853d') {
        image = 'https://blixtwallet.github.io/assets/images/hampus.jpg'
      } 
      else if (pubkey == '5778420eb7247fe5137645a5c9f9c5a6621fea979066ffc7bc13445eb5f5cbb5') {
        image = 'https://i.nostrimg.com/d7ba2158ca8ba939e2378057c3e53ac4982e4f4d2368b13a246fb5b8d6b3fbc4/file.jpeg'
      } 
      else if (pubkey == '693c2832de939b4af8ccd842b17f05df2edd551e59989d3c4ef9a44957b2f1fb') {
        image = 'https://nostr.build/i/af437d1afe49ce1e493da37bc45f5f9329444cc759d207ffea7a7e0d318726ca.jpg'
      } 
      else if (pubkey == '1cb14ab335876fc9efc37d838ba287cf17e5adcccb20bf6d49f9da9695d52462') {
        image = 'https://nostr.build/i/p/nostr.build_cf0c48164dd7e3dcdfbeee9c1e200d4611adfee40716251f4c677b5a25da736c.jpeg'
      } 
      else if (pubkey == 'b20a5e04d5980796673d854bf3798ddc1e29ea20f0a371d9167723150f58476f') {
        image = 'https://pbs.twimg.com/profile_images/1510780910387539970/rXsjyBws.jpg'
      } 
      else if (pubkey == 'c43bbb58e2e6bc2f9455758257f6ba5329107bd4e8274068c2936c69d9980b7d') {
        image = 'https://nostr.build/i/d9daf83c356717c24b0862d58cd8d036c1e9616744761499ab2d678baf0bd64d.jpg'
      } 
      else if (pubkey == '5f2c1dbef94018b2e84b021cceb46b69128ff86b899add248f9751dec3d0277b') {
        image = 'https://nostr.build/i/a6db42991e866026d3878cdb3effc2175b149cb89b6c6c16c3efb735a31a950c.jpg'
      } 
      else if (pubkey == '54fc669ccc03a47b3d95a9111bfddc590863d26a398c7149d2d349683b8451c8') {
        image = 'https://nostr.build/i/nostr.build_2bcb6ed8417586e6523b5f4dcadbec33224674225f84d1b756431b57a3b39151.png'
      } 
      else if (pubkey == '1e9d809ea96f8d7227f06025f4ea2dd41e9426c4276d96a70770987c8013d21c') {
        image = 'https://pbs.twimg.com/profile_images/1618525184339714048/NitlGA6r_400x400.png'
      } 
      else if (pubkey == '7bfee43a17360e696ceb92e75fe292bab7cde94579cc59cf77847ba04261fae8') {
        image = 'https://nostr.build/i/nostr.build_6ebff433c69d6f2044ac11156cfec706c604d5c4eba005319c84884d8fcd551d.jpg'
      } 
      else if (pubkey == '3afa9bf8de1bc112dc0f7a911693b352c6bd32e78cb356c650439e7a775f89f1') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDExOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDExOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      } 
      else if (pubkey == '2bb2abbfc5892b7bda8f78d53682d913cc9a446b45e11929f0935d8fdfcb40bd') {
        image = 'https://pbs.twimg.com/profile_images/59070266/unyu_400x400.png'
      } 
      else if (pubkey == '817148c3690155401b494580871fb0564a5faafb9454813ef295f2706bc93359') {
        image = 'https://pic-1252521402.cos.ap-hongkong.myqcloud.com/favicon.ico'
      } 
      else if (pubkey == 'eae7edfdcb79f23157a1af919495464e49aa76a22e5a5667148f296c1585a879') {
        image = 'https://pbs.twimg.com/profile_images/1597966465889718272/EQTVAbg5_400x400.jpg'
      } 
      else if (pubkey == 'bad9867380f6f2b8f50d3ff869aaf75dc998797204a7c85a4bf6f8bb9fc07078') {
        image = 'https://pbs.twimg.com/profile_images/1554968843033919491/LO0Fbxph_400x400.jpg'
      } 
      else if (pubkey == '803a613997a26e8714116f99aa1f98e8589cb6116e1aaa1fc9c389984fcd9bb8') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_abcfd7383af9a1c8211a5ccbf37b387f2a65548e460963533329f4441f2f8448.jpg'
      } 
      else if (pubkey == 'a545cc25f32bfea4d3bf4a1cb8e1d9492ddf6928c7db210dfe9622983b6f3569') {
        image = 'https://nostr.build/i/757e6ae3a0067bcf94b2fe17806f15d24b5d12241ef30154722422b58deb47ae.jpg'
      } 
      else if (pubkey == '762a3c15c6fa90911bf13d50fc3a29f1663dc1f04b4397a89eef604f622ecd60') {
        image = 'https://nostr.build/i/nostr.build_dd4b60ba2ec3d6963ec3c791e702b68e56eb4119c906f5a7b04b4918ecbe8541.gif'
      } 
      else if (pubkey == '3cfa816bb4892fa6be993ac72a9fcdbb089bdea0c5d9011fd204d154545fa2d9') {
        image = 'https://marco.barulli.it/Marco%20Barulli%20-%20bw%20500x500%20-%20no%20background.png'
      } 
      else if (pubkey == 'ff27d01cb1e56fb58580306c7ba76bb037bf211c5b573c56e4e70ca858755af0') {
        image = 'https://cdn.satellite.earth/7e8a68c0e3b395af431a90b6b773feefab5608625120bfdd09a9148870d365f3.png'
      } 
      else if (pubkey == '25d79e7a6208be603bf5df286813d3906a782e23e20dde1e327e3e4e95ce633d') {
        image = 'https://nostr.build/i/p/nostr.build_a0ce41cb67d329ebc104e765d5ee2059a6ea829922d15c0ee71e9daf774f9cc1.jpg'
      } 
      else if (pubkey == '20f4081c72b2a4d4f9048f718f8f36b2bb8526455b6f022f10e85217a7c3d2ad') {
        image = 'https://nostr.build/i/9126574901ea801738770537f8111e5a3cde0b7c64479f0f0049de3b55525336.jpg'
      } 
      else if (pubkey == '15e53a82be489115846257cf98319f07b8e44a6199478faea249c150c3775fb3') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMTA4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMzgsMTA4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == '1739d937dc8c0c7370aa27585938c119e25c41f6c441a5d34c6d38503e3136ef') {
        image = 'https://nostr.build/i/798e0c80f65710954e80df161308fbbe4f4f39aee3530ce9ea5e3f119aabc2b6.jpg'
      } 
      else if (pubkey == 'b7ed68b062de6b4a12e51fd5285c1e1e0ed0e5128cda93ab11b4150b55ed32fc') {
        image = 'https://towardsliberty.com/agora/s/Jqi4Xmja39xtzeG/preview'
      } 
      else if (pubkey == '6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93') {
        image = 'https://dergigi.com/assets/images/avatar-laser.jpg'
      } 
      else if (pubkey == '58ee1ae59943750475900a48b5a9ba929f07b786004cc0d8703fe59d796968c1') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDE1NCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDE1NCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      } 
      else if (pubkey == '9989500413fb756d8437912cc32be0730dbe1bfc6b5d2eef759e1456c239f905') {
        image = 'https://nostr.build/i/p/1.jpeg'
	image = 'https://i.nostr.build/knvA.gif'
      } 
      else if (pubkey == '8ab46d8b770f3841f4f3dfabf117a382373177e6bd308e2eba1f626d81a7e012') {
        image = 'https://nostr.build/i/nostr.build_0500b929438734a080ad3e0d13553c1fcfdcd50f59a6f77ee01eb8a6cb80ac95.jpg'
      } 
      else if (pubkey == '0c53d66e35ffd969c723ad31dbdd4ce3a4fff86edda7e05cd996d137c0628e25') {
        image = 'https://i.imgur.com/QY5rT1v.jpg'
      } 
      else if (pubkey == 'ee11a5dff40c19a555f41fe42b48f00e618c91225622ae37b6c2bb67b76c4e49') {
        image = 'https://avatars.githubusercontent.com/u/1669069'
      } 
      else if (pubkey == '9bfa99b42aeefeabcaf640eb0c8cbc32426ba1300159e8a4425acff2ec2326eb') {
        image = 'https://nostr.build/i/nostr.build_976cb002609ebc9f591caf7df9cb59197defa78a37ad80eb95c31c8abca22ac5.jpeg'
      } 
      else if (pubkey == '7abafef00c26639e9388625c4ad7932febef2eb4e62c78282f3984145fc7af19') {
        image = 'https://pbs.twimg.com/profile_images/1594930968325984256/TjMXaXBE_400x400.jpg'
      } 
      else if (pubkey == '544c4b256fb8b231071ec5dd30610184bef7414686843b70830a278fa324a77d') {
        image = 'https://b.thumbs.redditmedia.com/4MWMNqIYV0AXaxwLIlpwnb0NDejDZ5QgW5nGqcYCeos.png'
      } 
      else if (pubkey == 'e2ccf7cf20403f3f2a4a55b328f0de3be38558a7d5f33632fdaaefc726c1c8eb') {
        image = 'https://i.nostrimg.com/endorsed-generosity-calms.gif'
      } 
      else if (pubkey == 'a9f8b3f2ac19cc06d5194dd1ac9314d4741a09777444986553926d9165181647') {
        image = 'https://21millonesbtc.com/wp-content/uploads/2022/07/BITCOIN-BEACH-1024x682.jpg'
      } 
      else if (pubkey == 'f4cc2d7c3dd519cd7f1d44e487aca8f7dbe65cb95bd980da297fdf1e8aa24111') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDE0MiwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDE0MiwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '662b0fe5b0d372dcc6d8be4ebfac34d7bc961ca24577e55fe24f2e87e3b057ff') {
        image = 'https://syobon.net/img/avatar.avif'
      }
      else if (pubkey == 'a8171781fd9e90ede3ea44ddca5d3abf828fe8eedeb0f3abb0dd3e563562e1fc') {
        image = 'https://void.cat/d/89RkBSRhMTwG3rFuPaAzpS.webp'
      }
      else if (pubkey == '4b6563e055f7c5bc0f99ecceac2789ca6c9aa25d2dc702bd642433bdd03e62fd') {
        image = 'https://blowater.deno.dev/logo-white.png'
      }
      else if (pubkey == '97a58824eb1493260e410bad69c690634eb7f7567ba1c7d0337ad00ef65660b2') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTc4LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTc4LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == 'f07e0b1af066b4838386360a1a2cbb374429a9fbaab593027f3fcd3bd3b5c367') {
        image = 'https://nostr.build/i/p/nostr.build_cf4966bc801a4f01c1c37150ee45f9849b3501aa5ed1ae11d0de414336d12974.jpg'
	image = 'https://cdn.nostr.build/i/p/69cdd2a12f6b7ec0a3677db3646080d075b33e6dfedc971d6e8dcc550c3182c5.jpg'
      }
      else if (pubkey == 'ad8c68f4baa51a236d05a1491f986aca4bc05bbee92f0e413a9b994247a2b746') {
        image = 'https://pbs.twimg.com/profile_images/1219756534/48587_1256800997_8531_q_400x400.jpg'
      }
      else if (pubkey == '915b010b4ed8ba3eb32428a049e66dc3fae8492fd3a055a6596b1757fec5bd93') {
        image = 'https://nostr.build/i/nostr.build_1a0b3c872655f2d46610822402af0829fafb01f47bf78824fcb302cded897f5c.gif'
      }
      else if (pubkey == 'df5b6a8e3b10687a934ff9f92ba8d7240091cfd125d81816c119644c2fb17caf') {
        image = 'https://nostr.build/i/nostr.build_d5f004326f9bb4d0d72a1d2a06754ba08e437a9bb5b09ba952f5c6ae236bd2ad.jpg'
      }
      else if (pubkey == '91e7934e16be971bbe215e235538253841bb37bfb17e82ee00cfa8c091cf198c') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDE4NSwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDE4NSwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '0899455651ebdaaa09bac33dd381aac7aa28012edf311e7d4e982802eb1ac068') {
        image = 'https://nostr.build/i/c95023993e5fce039a81e01256e1e88e753465ebf5d844d090432fed6678f009.jpg'
      }
      else if (pubkey == '296842eaaed9be5ae0668da09fe48aac0521c4af859ad547d93145e5ac34c17e') {
        image = 'https://nostr.build/i/91e320ffb8f213d60e7da1ff427debb0ef8dff73ab8b9cc5cd63bb204b47b2fb.jpg'
      }
      else if (pubkey == '63fe6318dc58583cfe16810f86dd09e18bfd76aabc24a0081ce2856f330504ed') {
        image = 'https://void.cat/d/H6LtEtGVDotvT22tWnrtDm.avif'
      }
      else if (pubkey == '9936a53def39d712f886ac7e2ed509ce223b534834dd29d95caba9f6bc01ef35') {
        image = 'https://nostr.build/i/nostr.build_5962732f29a2ab6a84ac9a6ac5cf5c421dea769b29decb66be0e7a7a24b50b48.png'
      }
      else if (pubkey == 'b176337e2602bd98c9ab325059ee2512ea2b26a906e955cd484e216067febf77') {
        image = 'https://nostr.build/i/0b09d22d7a9eba49e23879e3f55ef0d8b8d4b44c13bbafe0b98be467dbc03c16.jpg'
      }
      else if (pubkey == '2f4fa408d85b962d1fe717daae148a4c98424ab2e10c7dd11927e101ed3257b2') {
        image = 'https://pbs.twimg.com/profile_images/1599994711430742017/33zLk9Wi_400x400.jpg'
      }
      else if (pubkey == 'b88c7f007bbf3bc2fcaeff9e513f186bab33782c0baa6a6cc12add78b9110ba3') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE0MCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE0MCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '709bd2be88c1f020b36d0b1414fd92e7306e8b91612bef0b3e3e202189d608e0') {
        image = 'https://media1.giphy.com/media/PcNcFbtK2nJlmHiPe7/giphy.gif?cid=5e21488671779875cd57a9afbbf3da736503a0020f3ef249&rid=giphy.gif&ct=s'
      }
      else if (pubkey == 'fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52') {
        image = 'https://pablof7z.com/images/me.jpg'
      }
      else if (pubkey == 'a3dd67d1c57d9d1f8b3c79521f636dd68564acabda2d4de776c4221dfb7e24ae') {
        image = 'https://nostr.kojira.net/blueskychan.jpg'
      }
      else if (pubkey == '971615b70ad9ec896f8d5ba0f2d01652f1dfe5f9ced81ac9469ca7facefad68b') {
        image = 'https://nostr.build/i/p/nostr.build_9841ac0b1902a46e9ecae4cd72f9caa2c20216b43838d1fb7c8dcb113ac98258.gif'
      }
      else if (pubkey == 'f3f5992cdb39e6108768d543fbd384a11efc3713085617ee28932ebb1614e07c') {
        image = 'https://harmonique.live/assets/img/hq-square-400-fs8.png'
      }
      else if (pubkey == 'f8e6c64342f1e052480630e27e1016dce35fc3a614e60434fef4aa2503328ca9') {
        image = 'https://nostr.build/i/fd1bfeb75cddc1678bd5c7c01b057fa0c462ac2f07f47792daba63a8edd1b601.jpg'
      }
      else if (pubkey == 'f00ae576528b2a9845e7a82c63f67bd96f1fcb5fa7070b3c989f3d1a8b429b52') {
        image = 'https://i.postimg.cc/0jPJW2Zn/F37-B583-B-304-C-4-BB3-A111-91-E9598-C381-A.jpg'
      }
      else if (pubkey == 'b481d853bdd549c8cad18dcc1fb1fc8dba6e96b60278fcec388bb15967f95a2d') {
        image = 'https://pbs.twimg.com/profile_images/1398663793790574593/ED-oFT7S_400x400.jpg'
      }
      else if (pubkey == '6a867b81a295bf3f1fec70b0dd72189d8872a69b49c6f512e802c3c723328beb') {
        image = 'https://nostr.build/i/d140554c03e7c886fc689b86119514b59119cb55eef156fc67473c9237a99afb.jpg'
      }
      else if (pubkey == '82d913d82bcdfd214b780d19c03f27307304e8e93beadac8cb01bbf7f5b14f1a') {
        image = ''
      }
      else if (pubkey == 'd4b4cb892f81a3ce9d5f67b368fbcbaf097d3a23115143353fe9d95432acd282') {
        image = ''
      }
      else if (pubkey == 'ca7e6cf15d806abbe882dedb9cc31c8cad7a66a3ca5d65c9f84059fd26394df7') {
        image = 'https://nostr.build/i/9347abe30800e16ce20958019234234acc1ec70b28e9cef3d49084d132f87adb.jpg'
      }
      else if (pubkey == '08c98839fb7dae64ec07ae39ccf852aa2933706b4b326d9eb838bb30722f7135') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoOTcsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg5NywzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      }
      else if (pubkey == '94bbca71dfce61f805678e0fb41a550bd4394b5313ee5ad833502c57e962f406') {
        image = 'https://nostr.build/i/nostr.build_59564be847b6b388b5bb6b772646bf3c29c1021376fe4a5425613e7963bf4d43.jpg'
      }
      else if (pubkey == '38c4684e5f549b1059c25e517d2da02e250234c6261a65fa1890ddf3076b32c2') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsOTksMjE3LDEpOyBzdHJva2U6cmdiYSgzOCw5OSwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'd4338b7c3306491cfdf54914d1a52b80a965685f7361311eae5f3eaff1d23a5b') {
        image = 'https://media.tenor.com/5lLcKZgmIhgAAAAM/american-psycho-patrick-bateman.gif'
      }
      else if (pubkey == 'deba271e547767bd6d8eec75eece5615db317a03b07f459134b03e7236005655') {
        image = 'https://pbs.twimg.com/profile_images/1525266054506655744/6cQinZlr_400x400.jpg'
      }
      else if (pubkey == '23b26fea28700cd1e2e3a8acca5c445c37ab89acaad549a36d50e9c0eb0f5806') {
        image = 'https://nostr.build/i/nostr.build_4ad1ae79c1429fb3464e891b46940e5bf9fe70064f9edb6558794e6ff9267e80.jpeg'
      }
      else if (pubkey == '4b76313b881dc6831e61d3497cf1b400b669d543ec1d871989a356feac626f9f') {
        image = 'https://pbs.twimg.com/profile_images/1249729414390091777/tl6B60fz_400x400.jpg'
      }
      else if (pubkey == 'e2f44c2f16ab05d3c771f73c9a696c64641f89b0d6031a3483191e9fbfa16364') {
        image = 'https://pbs.twimg.com/profile_images/554750725/tsukimi_400x400.jpg'
      }
      else if (pubkey == '99a153d51e12d8ed6e58b1b3ef9f430756989e33c561c6224770f012e41b4f99') {
        image = 'https://showhyuga.pages.dev/nostricon/hyuneon.jpg'
      }
      else if (pubkey == '4ffc11bfa2f8516ae8bc7c6bf82275d358e47045446250be2d0e5612e2140828') {
        image = 'https://nostr.build/i/nostr.build_57ea39dd716277c162d37ac657254640ce012186fcaaa95b7688c2dd703f7987.png'
      }
      else if (pubkey == 'c2622c916d9b90e10a81b2ba67b19bdfc5d6be26c25756d1f990d3785ce1361b') {
        image = 'https://nostr.build/i/nostr.build_b7a24ab64b5deb9c20b89ddf95091016aa55998ea522cdde2a34c261294dc298.jpeg'
      }
      else if (pubkey == 'f9e24c0a9544d119b4f0e31ceac53d1b650c763e378541e1dfde402e350f5792') {
        image = 'https://pbs.twimg.com/profile_images/1246958945723285504/tNQtVIC5_400x400.jpg'
      }
      else if (pubkey == '90b9bec74789688e515125596ab6350bfe646176ac75742275063922c5fea010') {
        image = 'https://nostr.build/i/p/nostr.build_0886afe581289f0bb9b96ee677795933b94ba241922e2bb2400aba424942f430.gif'
      }
      else if (pubkey == '1577e4599dd10c863498fe3c20bd82aafaf829a595ce83c5cf8ac3463531b09b') {
        image = 'https://nostr.build/i/p/nostr.build_02aa45f76a9e0aa512677086dbbafbd8a219ed573d5055f8b9691a5e1ed87212.gif'
      }
      else if (pubkey == 'e8c1ca03a46d97184bfcd9125a5c9674a867bd1beaebe47c77d4eaec6c5ee874') {
        image = 'https://nostr.build/i/nostr.build_cb33d736a8a8cb56248c80ba25f1da806ad73048f399139fada2d35620084f7a.jpg'
      }
      else if (pubkey == '63ee602bdb417251e180ca2189e6df10902ca64e16f9b16d3a8bb83fd0cad077') {
        image = 'https://nostr.build/i/6eb7e7939f621f16ab47d70fd9d1c20d927b5ee53174e98f3d70e42b10d2b203.jpg'
      }
      else if (pubkey == 'ad06ef04aee0274312f9a1ab9615ba05d984541e96e7b64b938bdb2ecd0a3d85') {
        image = 'https://nostr.build/i/73eb558d7206014095939733de2eb82825d6d7e4da784cd2a8e06d688177695c.jpg'
      }
      else if (pubkey == '0e2931e8ff64bc566b1b12b9fa70fec7067495667eaf157ae6cb6b22f43247f2') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTg2LDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTg2LDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      }
      else if (pubkey == '6a223aa5b05b6bf707a91b16e305615c8852d157fa90e139aa008bf7e06b08aa') {
        image = 'https://www.j3s7m4n.com/media/j3s7m4n.jpg'
      }
      else if (pubkey == '97c70a44366a6535c145b333f973ea86dfdc2d7a99da618c40c64705ad98e322') {
        image = 'https://us-southeast-1.linodeobjects.com/dufflepud/uploads/b2a7ef93-fa12-469b-bf3d-0f2654cab346.jpg'
      }
      else if (pubkey == 'bd1e19980e2c91e6dc657e92c25762ca882eb9272d2579e221f037f93788de91') {
        image = 'https://nostr.build/i/bcff5c0d9ddf4ee12ebe87fcde08c650c596e6e510d8605a66a05644d3ebea7c.jpg'
      }
      else if (pubkey == 'd985010ea2036c261d7f9ae4b5a85762a33f25e9929e450053f12814e345c617') {
        image = 'https://i2.wp.com/animales-itonids.com/wp-content/uploads/2017/11/Pudu-andino-2.jpg'
      }
      else if (pubkey == '3d353a9bd13bd007a2bb56f66dc0c3ac369e7159ab008788571f0a71f02c8200') {
        image = 'https://nostr.build/i/48697ca784880835ae557a9e3c171e6ce8f9d24a5201ad378dd74c56767c43ca.jpg'
      }
      else if (pubkey == '1bbfc3c4c6958ada8c75558a6e28604b683bf4a2fb8d44037ec353c0f313fc60') {
        image = 'https://i.imgur.com/qtPFODc.png'
      }
      else if (pubkey == '18aa2eb9e84956e19df84b8c3132f998f78fd4e257b6f6118a9819372d9fa507') {
        image = 'https://nostr.build/i/fed49955161744d760ab6e0f410442f7e58e13d713726c08a42cea048a90a7b5.jpg'
      }
      else if (pubkey == 'b75b9a3131f4263add94ba20beb352a11032684f2dac07a7e1af827c6f3c1505') {
        image = 'https://nostr.build/i/99994f37f1620ec3215fb037a33059e94df7e288b9ecfb9f67f70e0acda339ad.jpg'
      }
      else if (pubkey == '0559387898de5e583f0cfed3dc09bf4737997ac4f585921463ca3240ade4b38c') {
        image = 'https://nostr.build/i/0c56b00467291354e477521f49008f5eebd881a337f20e951d98de3e973690e9.jpg'
      }
      else if (pubkey == '570cb51b147ea8265c6c44c5f1de4686a0466555f9cbc3ab811671db02fee24e') {
        image = 'https://nostr.build/i/nostr.build_00d36a8f770fac5bdb5ca6ebc1d1346567a665ca729d2f5b97dfa31bb3600f1b.png'
      }
      else if (pubkey == 'e21a88fbfa177e3e38adc129274a4f86218482a7c9a436ba9a918cc7f2b31fe9') {
        image = 'https://void.cat/d/WHC5YhS6mwiuLLogtkvGta.webp'
      }
      else if (pubkey == 'bd8eedc9473daa7c8820c942b74476b6f98e6758d3d1028d72b69e95842501be') {
        image = 'https://nostr.kojira.net/nostrchan0.jpg'
      }
      else if (pubkey == '2779f3d9f42c7dee17f0e6bcdcf89a8f9d592d19e3b1bbd27ef1cffd1a7f98d1') {
        image = 'https://nostr.build/i/p/nostr.build_8156bdbedb3d551daaec740eda89e235816bfc20be5514d7781a848f7dcf960c.jpg'
      }
      else if (pubkey == '0fef306d4bab7ddb6a682574300772506dae2dcc0930df708979fa26bf86259b') {
        image = 'https://oransns.com/system/accounts/avatars/000/000/001/original/01e538156043b10c.gif'
	image = 'https://oransns.com/system/accounts/avatars/000/000/001/original/387ad1e160e55bd8.png'
      }
      else if (pubkey == 'a123fe2b1696f3595b8706875c358216ffc1365e3120140809c513ded1fd1eab') {
        image = 'https://pbs.twimg.com/profile_images/1615338920283361282/7FDgcfzz_400x400.jpg'
	image = 'https://cdn.nostr.build/i/c891af2912c5c165a43f4f03aca54e9c31054820aad989d9d60b8c6461f3eb0c.png'
      }
      else if (pubkey == '547994b49353f4b33af366b5d3a6678a7e115eccfb31627edac3fb62e7d38626') {
        image = 'https://i.imgur.com/M9waZSq.jpg'
      }
      else if (pubkey == 'b8af7fcb6a3cd93f5a298b9f47ad0b509765d34d8046442b88f7a5520d328242') {
        image = 'https://nostr.build/i/nostr.build_50ddc4edbb6fe6d134f26815d4c1b27bef2181267741cc7110b77284d8a114f7.jpeg'
      }
      else if (pubkey == 'de081fdfe7ffdf51d9ce7ae5f66525541c26cdeae1da2944de6ee407a7f7b221') {
        image = 'https://nostr.build/i/2dca1986f7ff1af941363392788bd6fdfaaa64eed2ed17fa9045c6fbf4b6f7f8.jpg'
      }
      else if (pubkey == '4ce23b20cb5ae9f4921bf7eda970603225affa504e56ee108698f5158b9b6f38') {
        image = 'https://void.cat/d/4xGzrYXX3ieemep4KkvU61.webp'
      }
      else if (pubkey == '1624cdf57e5cb1e7f26259b519b79149a75bc8f2d5ce0d31ffcbb0bf933050b0') {
        image = 'https://void.cat/d/XYSp8eDAEcSwpeqm534C7c.webp'
      }
      else if (pubkey == 'f0b852f5f23069e43efe63d9601a13b7dbe3bbc1b4a587e3b6153b0b5b002bad') {
        image = 'https://nostr.build/i/c94c0c08ac3d769343155b17b44c08ab6c5ec3603ff6e1955f1aa40c571881dd.jpg'
      }
      else if (pubkey == '85563bdf8b7ec25abb0393fce1d6860fc2aac1237e00455a45b6e7c8717899c7') {
        image = 'https://www.gravatar.com/avatar/eb90a61a5ac824e176da24a816692d6d'
      }
      else if (pubkey == '083c0089d506226c4e4399d63e38cc1022410195c0f412d9fd70841c998f50e6') {
        image = 'https://4.bp.blogspot.com/-pZ8L7YRCwv8/U9y_V0YzUoI/AAAAAAAAjbA/H5rqx7UpKIo/s800/vegetable_taranome.png'
      }
      else if (pubkey == 'c04330adadd9508c1ad1c6ede0aed5d922a3657021937e2055a80c1b2865ccf7') {
        image = 'https://chiezo.dev/images/chiezo.jpg'
      }
      else if (pubkey == '45cc5c949ac4fc658f46dd19b98076a77a3e516415634d3f26b4e74d1f88a5f9') {
        image = 'https://nostr.build/i/nostr.build_875cd9c2adf3696ff0aef8130cb7163978dc02144e172dedcc22c63f3a3c5139.jpeg'
      }
      else if (pubkey == '82eb21b50f2936e6b45b0d77ed83f834f35a65e17df35e74237be74608598493') {
        image = 'https://nostr.build/i/10eaf7029fe129f8e737f6a3b0cc4ec79d336c6f7f0ccf0d7a71e4783dc7b5b4.jpg'
      }
      else if (pubkey == '1d709fcffc239692a87ae22bf6c99a10f1a271a5ac5187adf2a6376355f49da5') {
        image = 'https://nostr.kojira.net/will_neighbor.jpg'
      }
      else if (pubkey == 'cb8ea19233eed8c858b185f962ffa9aef8ee98ea46d30e0a7c9defe01c4cbaa9') {
        image = 'https://nostr.build/i/e5d57c53905e7d62159e4b10c13e6c58ed9aae37f63adfc3e35cbd32c8d20b43.jpg'
      }
      else if (pubkey == '29b7ab632d365315454d5294893e0607cec8297c5910f482a2d1fd41261169fb') {
        image = 'https://awayuki.net/resource/bot1-avatar.png'
	image = 'https://awayuki.net/resource/bot1-avatar-2.png'
      }
      else if (pubkey == 'b06e337d77fe68c0742de266822b8c97626d8f8ab6943641dedf8b88a3da4465') {
        image = 'https://www.gravatar.com/avatar/432c2f8b29e49f8cde472c4115871770?s=300'
      }
      else if (pubkey == '13e033a79ed39e58a37c3795ddd3b8d93eada2c0a303790e4e366e26b343fb96') {
        image = 'https://i.imgur.com/o5H14XH.png'
      }
      else if (pubkey == '6bee48034b01214acd4caadbc50aea4ab3ea1ed22b4754851860a21847e768b7') {
        image = 'https://i.gyazo.com/67215b59801192db1da599072bf09e4d.png'
      }
      else if (pubkey == 'd307643547703537dfdef811c3dea96f1f9e84c8249e200353425924a9908cf8') {
        image = 'https://nostr.build/i/nostr.build_7169.jpg'
      }
      else if (pubkey == 'dc369036ad76c7fe51b381ace9569e7add87c03dc74d9ab73b7e3299c18fe1c2') {
        image = 'https://bae.st/media/3aa1a3868a6a6828b6a238890ccd918439aafa6ebf17f9e5074ff4ec9fe5fd51.jpg?name=36397205f9465fd0deaa2707828edd25.jpg'
      }
      else if (pubkey == 'f64302c7ad2baf4d899ecab909e61d5b89061c391c8609d3305b3b49e2d6fad1') {
        image = 'https://pbs.twimg.com/profile_images/428285340/sol.jpg'
      }
      else if (pubkey == '678150e849ee205ca52470c280bc66948dbd90df2b1a7d2e904005c90df5b3d2') {
        image = 'http://generallee.nido.jp/storage/vombatus_beta_red.png'
      }
      else if (pubkey == '59317d32e89cbd5fb7e5f8e16bbee29e35f12b4bc6561c9a691cc068af0dbfbd') {
        image = 'https://1.gravatar.com/avatar/fa80ed5a85c8e129afab331dcbb13cb8?size=128'
      }
      else if (pubkey == '6a2e03cad0d917086e7f01abeb76a99f4ea3c976fce78221917417bad81aa40b') {
        image = 'https://nostr.build/i/nostr.build_7746cebe622df2f9e0e297d694d88dda50900fcd0044a28344bb71da29642984.jpg'
      }
      else if (pubkey == '249fc9fc5143b720ec9cb1410f6f6b86adf11e98b7d30faf46bf2c7462d343b1') {
        image = 'https://pbs.twimg.com/profile_images/1661025505456558082/XN41sIUx_400x400.jpg'
      }
      else if (pubkey == '12c49c8d2b2a6448af531f457e048f04398cb36d8608706cfc0d6395ad4bebd1') {
        image = 'https://avatars.githubusercontent.com/u/17716649?v=4'
      }
      else if (pubkey == '3fb533ff16dabf6599bfc788699a0393620a350e4fda2f7ac8b1a62286082eec') {
        image = 'https://nostr.build/i/nostr.build_e5c8ce92a55a0a5e3c0a891bf6639c5a792ffe607a28c8f195b0ac750184d1db.jpg'
      }
      else if (pubkey == '5edf40c0cc36350c8d20b9d57e15f95c7cd943b1645747602d8e58fc3026e83e') {
        image = 'https://ryogrid.net/dist/algia-web-chan.png'
      }
      else if (pubkey == '7786bf04611744deda9b802c474f0cd8b6961d8facf81a7fa1404a177b97bcda') {
        image = 'https://nostr.build/i/nostr.build_213f2b8efaec3e0d162b077fae1bbd698c658f4ae1535593b8d7868d2fbfe836.jpeg'
      }
      else if (pubkey == '52b4a076bcbbbdc3a1aefa3735816cf74993b1b8db202b01c883c58be7fad8bd') {
        image = 'https://i.nostrimg.com/prank-enthusiast-willingly.gif'
      }
      else if (pubkey == 'c7d6c0190fe4bf32f9c36a4dac62fbcb25d7c8b7b39a7784bf2fe2c8caea65e9') {
        image = 'https://pbs.twimg.com/profile_images/1459864233/086c1396-a737-46ce-8fc2-05e8ce6b3089_200x200.png'
      }
      else if (pubkey == '8bad4693e04d209ebc7d38a97aa2de605f5023a84f0c1a36436ebc6faf1b2abe') {
        image = 'https://i.nostrimg.com/8bbf672d2b9ce0e5174530e7e7b077afd5d7a1e94740580312e7843bf09a9d26/file.png'
      }
      else if (pubkey == '72c29c440a399fa8ecd16227d38aba96d57ac6e2b2bbde307c6fd2d8db6fe810') {
        image = 'https://i.postimg.cc/6qYtKRRg/R-C-edit-771912936636380.png'
      }
      else if (pubkey == '3a8df8fc33b51679d89ff6a3fbcb174018c928507193643b107b0ad402dd70ca') {
        image = 'https://me.nekoruri.jp/static/d7d1f62a3e0943b80e8ba85eebc2283a/066f9/avatar.jpg'
      }
      else if (pubkey == '45734842193f245caa5de5c821f452c2be9630ac2e400f7f36475b1d9f45dcf6') {
        image = 'https://nostr.wirednet.jp/avaters/20230206_122652.jpg'
      }
      else if (pubkey == '1581ce2cd407b1149c2ca75aa722021b8d6dcf722fb456993e1c78c9a4aadcdf') {
        image = 'https://pbs.twimg.com/profile_images/1008282814943334406/gFJ2lJZN.jpg'
      }
      else if (pubkey == 'a3eb29554bd27fca7f53f66272e4bb59d066f2f31708cf341540cb4729fbd841') {
        image = 'https://nostr.build/i/p/nostr.build_03bddff1b0d3f89cc607f18b6f307fc9bab4da250e53bc243d9808daef227613.gif'
	image = 'https://nostr.build/i/p/nostr.build_5f1c735902d71d138c37095016ef28735c42a7a47388ce0717b6a4eca5c06143.gif'
      }
      else if (pubkey == '1b24801aaed6940d470bad5d905bc2668cd2ad5d5c337afa7e2c4b1da45193c7') {
        image = 'https://ryoch.in/profile.jpg'
      }
      else if (pubkey == '8f7639bc617ead88b53caccf10194dd7f0dcb5b850101ea8ebd3ac932183d156') {
        image = 'https://pbs.twimg.com/profile_images/960761186/img.php.jpg'
      }
      else if (pubkey == 'ce0dee680a18f100118e6262e1dff4082bcc20571fa33989483747b73e3c56e9') {
        image = 'https://lh3.googleusercontent.com/pw/AMWts8CComFZmJ2HuQLCzAhKWrFuNkLNm4kZhoLHI7Uh8vGkBShV7cSaHpMY0uptQBkcxIlyXd0JUwzS2dG5vcGna0SO2OjJ6M1_eJGUJmJUFZTODwRwieXPTG0pNbqA5sM9OqIkqwtw7ZysOf81TGJjjvDaEA=w604-h600-s-no'
      }
      else if (pubkey == '80d413d08b2f54495122028d6d47a11b22e1b908a728a71f2da3ab5c6e946aa0') {
        image = 'https://pbs.twimg.com/profile_images/968883594759307265/V3ZW9D82_400x400.jpg'
      }
      else if (pubkey == '23f650bd490bd8dead29b45c1b4bb1f7bd756e4e846708367b335e50d79fe9e6') {
        image = 'https://secure.gravatar.com/avatar/20f8ccd1939fd97953d445e2be6d7941?s=512'
      }
      else if (pubkey == 'b756fbff5e378cebd458da0df02ec734fe4a24b75e380965ba6d1fcecd5568c3') {
        image = 'https://avatars.githubusercontent.com/u/45391880?v=4'
      }
      else if (pubkey == '4a5e53ff3b78d5bdb88a5b5ea51681db5ecf35aa7ad6fc2bf1a21d8e5c96391b') {
        image = 'http://wallpapercave.com/wp/FQGpHNo.jpg'
      }
      else if (pubkey == 'f3200c76b68ba584770b337fc6553cd08b8898ce86801bb93f6dec5a688389e1') {
        image = 'https://0.gravatar.com/avatar/8035307faa554b4fb46d0452257422b5'
      }
      else if (pubkey == 'b34340b89cdabd07c37ed56f575161ed37e55301898f8f4f56f45aca9a06d0b8') {
        image = 'https://nostr.build/i/19c550e18c8fad6b7ca15061d97ac7c5d88eb707689b41bfc51686f5325de272.jpg'
	image = 'https://nostr.build/i/f69be1029ebdd6602f919d039fc9df45d8f852d1a71ae0b50ab7d9f4c77fdaa8.jpg'
      }
      else if (pubkey == 'f31c5b56075046e41e95888bb5a4e21730e1a11210bdb4343d0f9febf7867432') {
        image = 'https://nostr.build/i/nostr.build_83088aefb926032e480b24109e00214c982157979d3e36707eb625522be4d6c3.jpg'
      }
      else if (pubkey == 'a6c1d32f73cdbf9e2d5fb4d1860e2095ddb27892084366fa43020a92ee666419') {
        image = 'https://nostr.build/i/d75819f2bbc8d438bba0b82a1d6cb81b2fa644b78e975726152a3aad34c68d97.jpg'
      }
      else if (pubkey == 'e62f419a0e16607b96ff10ecb00249af7d4b69c7d121e4b04130c61cc998c32e') {
        image = 'https://pbs.twimg.com/profile_images/1620307593754480640/ytcBAchv_400x400.jpg'
      }
      else if (pubkey == '3efdaebb1d8923ebd99c9e7ace3b4194ab45512e2be79c1b7d68d9243e0d2681') {
        image = 'https://damus.io/img/logo.png'
      }
      else if (pubkey == 'ba09fc8647b3ba2634b79d712987c1a7df01303a97d5accd2afc50c064c32791') {
        image = 'https://kosugi.github.io/nostr/nostr.kosugi.avatar.jpeg'
      }
      else if (pubkey == 'fc356e83c7883b20a1cc4865ca7a18f638a68ba337508603fdc3eb34064711e3') {
        image = 'https://pbs.twimg.com/profile_images/969248790501732352/LdNUwTqF_400x400.jpg'
      }
      else if (pubkey == '96e0952df9809fd2e64d90a72a382c930b961e52c2b8a43284e43e88dae71ce4') {
        image = 'https://pbs.twimg.com/profile_images/1161492187768602624/O6Ga_Jtg.jpg'
      }
      else if (pubkey == '7dba4e164df925e0c819b0a4bd92de51fea89b0363591a1c3d44cd4a5af3e848') {
        image = 'https://arweave.net/fx38Mxy5R-f3g_WqVJe0EkNaWgz1lmbfytO__xvoZfw'
      }
      else if (pubkey == 'c48e29f04b482cc01ca1f9ef8c86ef8318c059e0e9353235162f080f26e14c11') {
        image = 'https://nostr.build/i/p/nostr.build_07aa2596daa48c2752b77ccfa0677c177d1764d42c3f4ad017a038458d59cbee.gif'
      }
      else if (pubkey == 'd03a822c87cf02b586a3ec209bdf4341845a82375a0add3261421af02e7ac288') {
        image = 'https://nostr.build/i/nostr.build_dc4c425a68d569baf12d27db0981eb2fb42a8a74429e26a2116fe13b2e151f7f.gif'
      }
      else if (pubkey == '7f46a8fdfd63f29822e795dbe29230e7915f9f41938c37fe3ff233abf2160bb8') {
        image = 'https://kiri.github.io/img/icon.jpg'
      }
      else if (pubkey == 'e9c29b2f55b72f5482d8db5d2e3694ae83188e108b2ec0b503f0e10dc979ba3c') {
        image = 'https://pbs.twimg.com/profile_images/1470092229251252227/pBuSGgXW.jpg'
      }
      else if (pubkey == 'f518743ce9a3bf6e9592f4abbf62ce7ca5c95b8fe71234f2a489d5bc2dd1e98a') {
        image = 'https://void.cat/d/UWa7mkrWa1PCnbawJKTkbJ.webp'
      }
      else if (pubkey == '351905c5fdbd082958f3783dda59145c38f76122329e588bcf84b4cff8383992') {
        image = 'https://i.gyazo.com/63b60e71019fc569f6fe4aa835cce9e5.jpg'
      }
      else if (pubkey == '2a2a5eead347862a443f99b030d8dfc2cc25582caa23ac4a5a783e60ca524b58') {
        image = 'https://nostr.build/i/nostr.build_603383a02b8e36cfcf781dca59021de2b3bd7ebcde35045bee5e2ad9c5ae504d.jpeg'
      }
      else if (pubkey == '49544fbb0ed1902286400f1f55610fce5990783e69de74ca1e54fb5c399c817b') {
        image = 'https://lh3.googleusercontent.com/pw/AMWts8AeNTuBEG6Kckyfdb_7GhT7dXUUAEjZEMZ5TvBK_nNM9-SMlM_Ofnxr0MJGsj3FU-85953-EpOCQD3iBfZPFXXMWSGSPCPd0ZHRCthmGEQTo3yzXX-4svU5oJaBWasjL2XX-A3nvGirGNBCZAvV2Nt6=s360-no?authuser=0'
      }
      else if (pubkey == '9e4414f242c3130eb6ade5bbae293be197d041c95f9c1a2d25c5151556079e8d') {
        image = 'https://pbs.twimg.com/media/C6kp7s2VoAAN-NB.jpg:medium'
      }
      else if (pubkey == 'e9591428813ebd6916736c88bb95994496f647d6fe769ef8483697eab8d04d2d') {
        image = 'https://pbs.twimg.com/profile_images/1685266254/nekoicon_400x400.jpg'
      }
      else if (pubkey == '25bc24d47b3cf70e5baf417f64043bfd70b6557c1150243f1e820d061a50ffad') {
        image = 'https://nostr.build/i/nostr.build_6f2b1f8b144609df74e9c3f101ff3d402fe01b0dad34f3e051de614ef9bcb652.jpg'
      }
      else if (pubkey == '9f48f588c31853de68cf5a04c2f5b86577fa7cf6a7f7e9b326a2dfe93e890943') {
        image = 'https://ul.h3z.jp/NDgLUflw.png'
      }
      else if (pubkey == '0000005f87f64341c212cc93d6c266c03ae752c02660e78a6da1424f7b05c470') {
        image = 'https://void.cat/d/FgRgcaCcnqhfwPfspKY5es'
      }
      else if (pubkey == 'dbeef8065831054c1bac0ffadbb9d2a42cd0b8ceb2dc25fb321ea2571243496b') {
        image = 'https://nostr.build/i/nostr.build_076e8a247c9cc6e1230b2e5dda24b9583b71332308686272fe9e661f6b7f7086.jpg'
      }
      else if (pubkey == 'e89a2fa00302c33ca39831212a3d3074d18f663f100e1362b54efb38146b089f') {
        image = 'https://pbs.twimg.com/profile_images/1653612992033067008/hnemCkgW.jpg'
      }
      else if (pubkey == 'c6f7077f1699d50cf92a9652bfebffac05fc6842b9ee391089d959b8ad5d48fd') {
        image = 'https://nostr.build/i/p/nostr.build_84564270e68935ec49a46d50d8abe13cfa52e2a973b9719dd5af9e2d4db1045f.jpg'
      }
      else if (pubkey == '389ca4957911b126093f42a0a90786515b59311dc5a942b404d7e16f17287828') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/108610db6f53aead2966ea7e5e9a590d5e958f9b3ba83982a3d6c43ddf51a791.jpg'
	image = 'https://pbs.twimg.com/profile_images/1311126856435814402/HqnsvcRT_400x400.jpg'
	image = 'https://nostr.build/i/a3cee443969f4ff50035117722f1823f89ef96bb4136738f1c8c5f1bb048f048.jpg'
	image = 'https://nostr.build/i/f495d598e51fb31a3cdf327a03bff1e1a1614391731d651adfed352a18378235.jpg'
	image = 'https://image.nostr.build/23dd05361e3826f3a51e7299d52191ee9296128a4c593f49c5ae01923fbe91e5.png'
      }
      else if (pubkey == '6369fb82bec54226bf09bb365b6f0d71b16c41f56e7edfd4f97de23f9c3281da') {
        image = 'https://nostr.build/i/nostr.build_e9120a1b32f992f44c55c0a8916428a9e17a0b1a73439ecd0731997e94a67001.bmp'
	image = 'https://void.cat/d/U5J3k2betmuH7cb2AdMGBY.avif'
      }
      else if (pubkey == '90c8d4d3b7642832b2769a0f5e7d23115cb70b123d10d64701c888a16695a7ab') {
        image = 'https://i.imgur.com/IkJE8yZ.jpg'
      }
      else if (pubkey == 'eeef8f1c33febecebc8fe0aabccf426685f56085ee8de10ebe9200aa8ae3f7ab') {
        image = 'https://murachue.sytes.net/img/20120429.png'
      }
      else if (pubkey == 'efdd0a9fd46de7b9630902021a00e0dbce64f013a89da701084e285dbcda42f1') {
        image = 'https://nostr.build/i/614c4c97dce02fbd380216290a7f2f7eacc3d2397398958179b944e29e76828e.jpg'
      }
      else if (pubkey == '35cb2bc997fa37f27ec2a968866d77ecefc29d6b22f94e2eeb9d3963579e417b') {
        image = 'https://i.gyazo.com/75825ba5ac590f31f34992201d5dc336.jpg'
      }
      else if (pubkey == '6d365e45de4dd87cf73bb82c35ba66a16fc4e7761a42a08243c66a9dbc6ce628') {
        image = 'https://nostr.build/i/718f8816d929887d381ec762c487a90bf16227be765d7ec5e23344cf4b198fce.jpg'
      }
      else if (pubkey == '1fa0679cb80e4a1378d3345102be87cf6aafad6c39979fa7386413749d0bcee4') {
        image = 'https://nostr.build/i/0c56b00467291354e477521f49008f5eebd881a337f20e951d98de3e973690e9.jpg'
      }
      else if (pubkey == 'fe2b9fe2446a44dff5ebe744c32d27cef10f87f5b1ed374070bd6eb3749c06e5') {
        image = 'https://nostr.build/i/1582a2a22093e053cd2c86bfbda5c48e2aa7c2c09fe75384387a2bde6a496a67.jpg'
      }
      else if (pubkey == '047a32b35da5372967e8fc52144011439cb5ea8dbb640e1d56e7790db91abf78') {
        image = 'https://void.cat/d/PdFB24HyM77wfUB8u54ntC.webp'
	image = 'https://nostr.build/i/e06a5fcfacb1aa6203e7c7392ade12667bd4c2744a16584fd4f206bf187148e2.jpg'
      }
      else if (pubkey == '2717d9d9d3b6b5075ecf034957468bd8cc6687356d10ed6d5b29a0f5a474de69') {
        image = 'https://s3.arkjp.net/misskey/e976a3fc-82b8-4a1b-9ca5-500532da4b17.jpeg'
      }
      else if (pubkey == '8b347916be2cb3ab9687c9eb78a8d05224c045bce5b416bdd50169965eb0f45c') {
        image = 'https://nicecrew.digital/media/a96d278adecd64ca34842fdb3f0b2be5aa700d830e40258dbc55d1baee599f68.png'
      }
      else if (pubkey == 'a90e3bd20fc47523dd31709ba8869e5d2317c79a0077f203c52f79e66cb1f5ea') {
        image = 'https://64.media.tumblr.com/85867932dcc24f3ac01f36c75b778b61/226ef8ef891a3d3a-93/s400x600/cf01f7f8084b01eb0583afba7ae2692117e00fea.jpg'
      }
      else if (pubkey == '3009318aa9544a2caf401ece529fd772e26cdd7e60349ec175423b302dafd521') {
        image = 'https://nostr.build/i/07a19dfc04d25699043629ca08be5c7196dec77f30c547dcbc7eed1f586af33b.jpg'
      }
      else if (pubkey == '27a8b993069842712a29b03f534e85f1a3dfcdbe51cdd2c79232ccc30ecb66e8') {
        image = 'https://pubimgs.c-stellar.net/valid_dachou.png'
      }
      else if (pubkey == 'fe09f1624ea39b93a79a5c0edc5ea25ca7b917aaac39b8e53e88ec7e15e2c34d') {
        image = 'https://pbs.twimg.com/profile_images/1342909929321943041/vD3uteo-.jpg'
      }
      else if (pubkey == '9cbc09bec1547f50a77b266dbf8c22fc8fcc4c26bb7fdb083440645a97cba413') {
        image = 'https://nostr.build/i/7bcbfacdd0321fe5213d723ee5964f6da0622ff1ee76cf01c17336c4138d1194.jpg'
      }
      else if (pubkey == 'e07bfc04ea87c72a9185b0891f055361e6492f259f81247683d6c9ccb2b651ed') {
        image = 'https://nostr.build/i/p/nostr.build_af05b0b0fd9e87cff4f7c9b0f0ec62d33abaf617c55dcf0f49410307ac7eddf9.gif'
      }
      else if (pubkey == '67a8ed7e76c79b91ee33635adad073f9466b32ef213373afb2f330dfafa70ff6') {
        image = 'https://nostr.build/i/nostr.build_ae96a17444db4a89e6f4819e95b797e2aefe3a4734f417a87b8b7e20e57b7277.png'
      }
      else if (pubkey == '4117c7206e56cf39c319c303a739c39d8b1a46878f5e18e4274de51750401fc8') {
        image = 'https://nostr.build/i/4f10fa3bbf1fd38196ca456fd327cafdfe6a991b0e84fdcb5ae7a62014afb4d3.jpg'
      }
      else if (pubkey == '1ade3e2127b8f1c4d4bf076f89f48ea20c8be4ce3700af79fcacafde5b200076') {
        image = 'https://nostr.build/i/088940b907bee58b3e05920cf146823d5d3799e5109eab0ffe873dc7151af947.jpg'
      }
      else if (pubkey == 'c7d8d1b065fc768b7b853eb07ba9b85ab951696bfde085224b6af2b2c8327d3a') {
        image = 'https://i.current.fyi/c7d8d1b065fc768b/profile/avatar.png'
      }
      else if (pubkey == '7016f8ba309cfbf20a9a60ad11462578f082e126f5f3c9185244ab26581ee065') {
        image = 'https://nostr.build/i/bd776e7cfc5208d0c4482cf283da5d34c2fd0f93c0f07798a8b40728816d2424.jpg'
      }
      else if (pubkey == 'c6b1c00517d1e81b9ed4a1b64c252fc96acbb171d021f4469c014416e7a6a41a') {
        image = 'https://s3.arkjp.net/misskey/webpublic-08ad26fd-7c39-45d5-a940-b7410ea63eff.png'
      }
      else if (pubkey == '766555472331228de6ece1d08d6d4dd780d36f5b763f94b244576e30ee00eccd') {
        image = 'https://pbs.twimg.com/profile_images/1597565472966578177/DKd7eSpt_400x400.png'
      }
      else if (pubkey == '2a1a928f5791c232fd9627e1b2089d6c702139eaf6fe2735e12e152d8cdd716a') {
        image = 'https://nostr.build/i/p/nostr.build_f38850c6a42f9aa07af18f364833a69c649e0a8cfb3ad6b464e7905a162bc53a.png'
      }
      else if (pubkey == '387097cca4b6b2c7346c3707d6d422b07b64646c59cac69703cd3f37149a1bd0') {
        image = 'https://pbs.twimg.com/profile_images/817449386657517568/S5c7kNr5_400x400.jpg'
      }
      else if (pubkey == '3335d373e6c1b5bc669b4b1220c08728ea8ce622e5a7cfeeb4c0001d91ded1de') {
        image = 'https://i.nostrimg.com/16ffb4d593c7695fa162bee882015861191182bbcd1a48f8a930fba46f945d2d/file.jpeg'
      }
      else if (pubkey == '69074169ed68fa74c37d3926359f4100635c37eea5cfece064ed022ed06f792b') {
        image = 'https://pbs.twimg.com/profile_images/1630647934768259078/GbtkVF8c.jpg'
      }
      else if (pubkey == '21792e167867d96254e843d634c66a7b023f9c1279b0beb47c4e1891ad9615c9') {
        image = 'https://void.cat/d/HL3euCWmfVDqp2LCoawkBx.webp'
      }
      else if (pubkey == '84dee6e676e5bb67b4ad4e042cf70cbd8681155db535942fcc6a0533858a7240') {
        image = 'https://nostr.build/i/p/6838p.jpeg'
      }
      else if (pubkey == 'dfe0818e534daed8fd75d76d94ca96a295db225345cc18cc6d8383ac19e51d81') {
        image = 'https://void.cat/d/5kD2WdeFVR6BVqWjSEeddE.webp'
      }
      else if (pubkey == 'f52bbb0bdc1236c6bc81b1babb16a6a5fe5fbe0334c73e5d94fc730910713260') {
        image = 'https://nostr.build/i/nostr.build_24db2d29dad9eddeabba3ade91b800815410253365dbdd76979933407af5fcb0.jpg'
      }
      else if (pubkey == 'bcfca61028a50a76a41bf324b63e2cc7525a064f45d28a0ee63879f50202cf2b') {
        image = 'https://utouto97.github.io/icon.png'
      }
      else if (pubkey == '6ae9bb93afcdeeccbe1ba66b392e13c01411d01deeb2b1077500b4fb663a658d') {
        image = 'https://pbs.twimg.com/profile_images/1323614159724896257/55oHa1qN.jpg'
      }
      else if (pubkey == '3604e5abe728f8b4fef4ec734a00ed1ad8a0cac84576bef416928c90364408cb') {
        image = 'https://pbs.twimg.com/profile_images/1605496327948800000/VKNezHgT_400x400.jpg'
      }
      else if (pubkey == 'cedc685ffa8bcc29a61adac4963483aae5bdb7d10e2a4fd2cc560d0e00996e89') {
        image = 'https://i.imgur.com/qVXWymH.png'
      }
      else if (pubkey == '2ad6b00d50754b17e4cdfcf9fbb53bb5410abf70564e2a1fd5eb72858e8e9a5b') {
        image = 'https://pbs.twimg.com/profile_banners/881154370980560897/1637244135/1500x500'
      }
      else if (pubkey == '776ea4437354381f14a720be3c476937dce7257ed1073e54a192dbc99f3b7ecc') {
        image = 'https://pbs.twimg.com/profile_images/3281775414/ad72851524c3d42859c39f146d4273ef_400x400.png'
      }
      else if (pubkey == '6a36c1a62cba047b1cdb93bef316c6617c79816e32b80166c471c30bdb77e526') {
        image = 'https://nostr.build/i/9127cb93848b22344fcf93ae2674c5f2160fec9e88551815d520278832ad913b.jpg'
	image = 'https://cdn.nostr.build/i/p/5a061cb56e92193be1e579f72258889382bfc8f853d06cbd9efbfd26683fac59.jpg'
      }
      else if (pubkey == 'e1b89ba9f8a3f2a23de3a28eba7d10bf4896509f4f91fced09dd4aeeda4859a2') {
        image = 'https://nostr.build/i/df5b8a593730ac5121c11ef4eeaa7f6434424847a4a5081b3c8fb43865d652f1.jpg'
      }
      else if (pubkey == '74604f6bfa071f3bd852fefc5176614f80029e6a92517958b5fa71931c3f84b6') {
        image = 'https://nostrcheck.me/media/kanako/avatar.webp'
      }
      else if (pubkey == '8376344d4fce351efd75fd2e8e58eb67a9aa93c756387205b4ebdc6b3f63ab08') {
        image = 'https://pbs.twimg.com/profile_images/1658312190334754816/IArLNhas_400x400.jpg'
      }
      else if (pubkey == '389806c9a166aab49efc5f479ec526aef6f36eb5f6e7b9c42b3c4cd4b3ef9c16') {
        image = 'https://nostr.build/i/nostr.build_e3190e5701ffbfa383e2f5c7dc6305dd884ad04dc281c0c758b5d2a84e607664.jpeg'
      }
      else if (pubkey == '9dddbd20f938748444f2db85ec44282377656da66cd73c333642001df90f736c') {
        image = 'https://pbs.twimg.com/profile_images/1592154028972118018/Ok-yLPQr_400x400.jpg'
      }
      else if (pubkey == 'fc84b01ebbd5609dcd3f320e007a28e4a5de118188327b220e191db4473fba22') {
        image = 'https://nostr.build/i/nostr.build_6daa585a7a409cebe1ab6636e3011ed245f6d44ae628ef59612b7ba1728c4a0c.jpeg'
      }
      else if (pubkey == 'b17c59874dc05d7f6ec975bce04770c8b7fa9d37f3ad0096fdb76c9385d68928') {
        image = 'https://i.imgur.com/f8SyhRL.jpg'
      }
      else if (pubkey == 'b9003833fabff271d0782e030be61b7ec38ce7d45a1b9a869fbdb34b9e2d2000') {
        image = 'https://i.imgur.com/Kgtu3zW_d.webp?maxwidth=640&shape=thumb&fidelity=medium'
      }
      else if (pubkey == 'caab45892650e6f5ab4055b05d10b5bc002d8f9e59a2976ada12604a1fb9d238') {
        image = 'https://nostr.build/i/nostr.build_482ab23472948cb06c4930b9b81afdc1607a4acec2e9573d9cbf80110cca6ee1.jpg'
      }
      else if (pubkey == 'e91831fc244776a1f08657eebb3112c522e9362c6320f24240bc42eb8c9d973c') {
        image = 'https://nostr.build/i/nostr.build_f13874590b1e5a0023d30f03bec11f32a23d2ff1145c5a8abfac5a321df298c5.jpg'
      }
      else if (pubkey == 'd87c931dc0b4b99f0d1116fea4a0702068985f078db0d665d781566e8d253f38') {
        image = 'https://cdn.discordapp.com/attachments/577443131612594191/1072151886389583943/kojiro_512x512.jpg'
      }
      else if (pubkey == 'fef5bf4b706c85d15be6bc44812c5fd218e37aa0e64526d6747b47e507e75225') {
        image = 'https://pbs.twimg.com/profile_images/1225578784600023040/MvStK6IQ_400x400.jpg'
      }
      else if (pubkey == '00548f339a1ae22891de1d2bcaae34414ba7c12a07ec8ce81a2898a360a5cfd1') {
        image = 'https://pbs.twimg.com/profile_images/1616931907438276608/nuGmr1Wa_400x400.jpg'
      }
      else if (pubkey == '0ff4ba1519d213c7dc9454685bf1297a0f8911b46bc0bf8a2fd551394367dd6e') {
        image = 'https://pbs.twimg.com/profile_images/1606579315612995584/KL_7wCT5.jpg'
	image = 'https://nostr.build/i/db4f42b4859ee0b642412b93afce3decbfc4333a38e2500395cf8160559058f7.jpg'
      }
      else if (pubkey == 'e895458a495482ebe6244e2c21d523a8a68ff42b400889795f54d6648aff4bea') {
        image = 'https://mstdn.guru/system/accounts/avatars/000/000/543/original/data.png'
      }
      else if (pubkey == '0d97beae567fcec9c6574f1c6ef6126ea969d4992c3198e51c0fac52c5274a14') {
        image = 'https://nostr.build/i/nostr.build_ace304a6d60edfb11e79888bd670bff58f6213758d63d8fec96d208ff5170c8c.gif'
      }
      else if (pubkey == '405a39faead4489573a70dc384cb5214ed5755d7ae6b6a04d8c4d5434dfa18e2') {
        image = 'https://pbs.twimg.com/profile_images/1521198493477613577/yQfX0rBA_400x400.jpg'
      }
      else if (pubkey == '7dd1b95459baead91a6c5240e37f5d4ebc1a79dad450cb17229fd6e874a241fd') {
        image = 'https://nostr.build/i/nostr.build_3e161bd260d4856cbcc93b1a526ecc3a86637b546e3c5d6b3f8d7de9740b78bd.jpeg'
      }
      else if (pubkey == '56f066574af36215d2ae863bda63b9b2bb1748dd14e4a1598aa4fed2151d443d') {
        image = 'http://pbs.twimg.com/profile_images/1604950695597248512/L-uljZ9N.jpg'
      }
      else if (pubkey == 'a8bf32d90f21bc06cd5631c2a1144d18a3c926e436badce43b943e53a25f4ca9') {
        image = 'https://pbs.twimg.com/profile_images/1569656371636838400/FxEqHud3_normal.jpg'
      }
      else if (pubkey == '7c5f24e1c95f6f1f75555498f0019be1259a65c75ae851c235f7b15c9f88e0ee') {
        image = 'https://void.cat/d/QcC3Wj1SL66GdzctR1QEEb.webp'
      }
      else if (pubkey == '95ea0e2914cd4b020dd751620380af366df634d5f0672a3098ea976fcb2d79f9') {
        image = 'https://codeberg.org/avatars/d5a258fde655be68892b1d8b5871c500?size=870'
      }
      else if (pubkey == 'bd2f96f56347abe90464d1c220d093e325fe41212926b9eb8c056c5f6ab08280') {
        image = 'http://nostr.build/i/6369.jpg'
      }
      else if (pubkey == 'b4678952720edac44f77f0d8ea66e24969dc5bc3851e08b39a998f0f5e898764') {
        image = 'https://nostr.build/i/p/nostr.build_e2ab3c58185fe0f700f5960c9480907e96c014f7388ad09df1a0f069935a4e51.jpg'
      }
      else if (pubkey == '4058c03cd10c9f9fa8b5b89be8588ee85f832b1ec41f5f2359e734255c3b5750') {
        image = 'https://nostr.build/i/nostr.build_6a5532acbc99c1ab667b0d77b2511a22fa019f7a45959f8895986219a60650f5.png'
      }
      else if (pubkey == '72899b6a998058a75cf990ee24433dc185ca0a8a773e326b6daf30575a82c6e7') {
        image = 'https://nitter.moomoo.me/pic/pbs.twimg.com%2Fprofile_images%2F1528076263067353088%2FQCNDftZL_400x400.jpg'
      }
      else if (pubkey == '47f387cf194fde012199db1e7e10b7fadbc9ec4f4dfafc361fbdc09c072aaa65') {
        image = 'https://nostr.build/i/nostr.build_de7d1f5e4f7e5b9251e6bc2f5ae4baf57aef1ca1e5a94daa69362f16cb3706ff.png'
      }
      else if (pubkey == '2aa184c865ce0a988137904b9d743355b3fa5090989e461ce8a3099b97fc7ccc') {
        image = 'https://i.imgur.com/XutIlud.png'
      }
      else if (pubkey == '13debe6a45f9dc7bd01265c64caf8f9f46dd6f8c0e3098bb57332c3b856ae177') {
        image = 'https://nostr.build/i/nostr.build_26a188b0cdeb810621261836c40205cfd7f449116da744dbde2bc80ade4fe804.jpg'
      }
      else if (pubkey == '0d05cde7eb27d5aa8de93cf0ea3e43856a6966c6caaf76dadd15bd84a8ef361e') {
        image = 'https://pbs.twimg.com/profile_images/1577630845162381313/-Rirb1Ei.jpg'
      }
      else if (pubkey == 'c89cf36deea286da912d4145f7140c73495d77e2cfedfb652158daa7c771f2f8') {
        image = 'https://nostr.build/i/p/nostr.build_5dce6bcf61757a4007bac404c0ba556ded1210f904e45993cb29c2b7cc2228e7.jpeg'
      }
      else if (pubkey == '401d9cc33c48e3b2d57fe02b1b46c3823432e658603665d851a0c9e09e5f4abd') {
        image = 'https://void.cat/d/QQgTv9ZfJ7weZzsSMuFXmk'
      }
      else if (pubkey == 'b4638bc717a9b48d4771d4f7008e6d4ab39e9d32c95fa0caa7fff951e3c725e4') {
        image = 'https://ki-chi.jp/me.jpg'
      }
      else if (pubkey == 'e667831a5bae6533cc61891346aa9663f03bb20083e3545f428269e4bcd1142a') {
        image = 'https://nostr.build/i/nostr.build_ae9603d235d3b08d173e71e88cd548ef8bb0f2abd56ae8cf56898eb53b85276d.jpg'
      }
      else if (pubkey == '062fd9857e8f2003bcab25030d179f31d448b73dfb2c8fd005af32643a5890e8') {
        image = 'https://nostr.kojira.net/qchan.png'
      }
      else if (pubkey == '062fd9e9d1c452eec67ef3d4761e4046bfc98e795534ecaf661400ec0893adf8') {
        image = 'https://nostr.kojira.net/qchan.png'
      }
      else if (pubkey == '101b30ee88c27a13de68bf7c8c06368ea3e3e837641595c18675677d18a46a45') {
        image = 'https://pbs.twimg.com/profile_images/791317461287133185/SaFYRRs8_400x400.jpg'
	image = 'https://nostr.build/i/8fa3eca79682c72916ba1893e63e887b901c79da7c6ad83c1731ebf358567f4d.jpg'
	image ='https://nostr.build/i/80b19e6b2d40da27f66ff137069a76dec31104f3b6f3327e2819202f0557e896.jpg'
	image = 'https://cdn.nostr.build/i/f8420f7a675363cb439cbb40b5c82a947138d76ea2826a9a04d116cecf96dc8d.gif'
      }
      else if (pubkey == '99b3b70ce10f097232841cd89e95f7b69178f2450856fe1e7d144751ad8e51e1') {
        image = 'https://nostr.build/i/nostr.build_66a9c54af88a3c6cf4eabebafb78477a8aca05925446aec9c3c6d78a508b6532.jpeg'
        image = 'https://nostr.build/i/d7118b3e1997f328e8371afd05c4668918745e58a3c07c7e072670215af91bfa.jpg'
      }
      else if (pubkey == 'c3e12ba9c3117a14b33e24ed5506bcd9dafb39f6dc46e10c46a6e161c0b6626e') {
        image = 'https://gist.githubusercontent.com/n0nakamura/83c6d1b7341027f414a44e7394f110eb/raw/332df8b0d2d236aad24efc409556a337e80f95fb/icon_n0nakamura.svg'
        image = 'https://nostr.build/i/0ad78feed267fb40b220a720768e811e702942463eef923d6db55c81f9a57838.gif'
//	image = 'https://cdn.nostr.build/i/78b3506d2ed2e2b81540720ec4ccf52e4c2991b0d719850502cb3e3b39f7acf0.jpg'
      }
      else if (pubkey == '1d685541f6cc1aace68403a927bd20e374cc85e895f0a706339103b5f0883831') {
        image = 'https://pbs.twimg.com/profile_images/1523276896943112192/uqdtCSxS_400x400.jpg'
      }
      else if (pubkey == '67514144ab0069a89694f04138733094bcad917a431bf3cb8ac58809cfee2666') {
        image = 'https://i.imgur.com/I4uNOM6.jpg'
      }
      else if (pubkey == '062fd9a466b33de0119b1888530ef327de5dcbc1f531815771a96046b89b3260') {
        image = 'https://nostr.kojira.net/qchan.png'
      }
      else if (pubkey == '062fd9aede73eb9ad9c1afd6ff1f1baa2c7ab4a0e989bed905b10c7a6c2121da') {
        image = 'https://nostr.kojira.net/qchan.png'
      }
      else if (pubkey == '0c04b0d72e1ce6bb40fecdec6cf186a583d80676f5f33868981c79ee05736c39') {
        image = 'https://nostr.build/i/nostr.build_f1ebf1a9fa12d061e20d6c55ed7b0532fdb9babe2287db5df6ea58b47a43ed0e.png'
      }
      else if (pubkey == '9e89e8bfdf3cf5bd1473690edf596e48ec7369962e4a874541e35ccbb089d8a2') {
        image = 'https://pbs.twimg.com/profile_images/3071292442/2d9097c18d71678987d35e9116a49318_400x400.jpeg'
      }
      else if (pubkey == 'dbf0becf24bf8dd7d779d7fb547e6112964ff042b77a42cc2d8488636eed9f5e') {
        image = 'https://pbs.twimg.com/profile_images/855939144945508352/RuSlQohC_400x400.jpg'
      }
      else if (pubkey == 'e211323d410c5702ab2cf200b38360b52fd6c6b7a37bddb9890167935bc30957') {
        image = 'https://ipfs.io/ipfs/QmbY4vSRbHXTrokEXuEVvs5ztjvYReyawNNqqYUys4yVRa'
      }
      else if (pubkey == 'f5d119e19bd7f4fc2a68374dd79ff343d640b7a1a4d55430dd2c37ea1dbb0641') {
        image = 'https://s3.arkjp.net/misskey/63783963-f2c1-43e3-87e4-1335c5ef9748.png'
      }
      else if (pubkey == 'ac7d435496f83192948471b57d66e37d32bc6c99891f43b86229793e8b47ac6e') {
        image = 'https://nostr.build/i/nostr.build_38a3ad1f64d4388a0f433466e1bf2a5b7e5910c096786e96b1043375b4f8f79b.png'
      }
      else if (pubkey == '214c1347a2e518043a28a23de5ff267ba23a5753c39cdf4147047a7cc4eface6') {
        image = 'https://pbs.twimg.com/profile_images/1424027479056949254/carzUJK1_400x400.jpg'
      }
      else if (pubkey == 'e153d9d7551442bfb861264e93e0a1b5a30d587e8637864f1cb26fd274d6e8a9') {
        image = 'https://nostr.build/i/nostr.build_56abb83a7e7e6006c96c43b66be47e1e1d08ead15e159036748a0d811cd4336a.jpg'
      }
      else if (pubkey == '949ddaa102f29159698c6bb9fd432b456ad7da6d9c66cf813ab0e7c1aa04c4a7') {
        image = 'https://nostr.build/i/nostr.build_d1ee3e39c4daee87f80504fec938925c3b9703ceeb566f06976b16ce372eae89.jpg'
      }
      else if (pubkey == '33b59c03ad34cb88404bd3ff4b8440e46497a81dd131cdb9cfede294e1b96a0a') {
        image = 'https://shin.blue/images/icon-anim.gif'
      }
      else if (pubkey == 'f6b21134171281c0a2d84e92dda61c50f0eae8abd2fcdae44c69295fca3af38c') {
        image = 'https://pbs.twimg.com/profile_images/1648691552414486528/83rLDpz-.jpg'
      }
      else if (pubkey == 'bc883b6985f3d6c83ee212204b28447297f150d4be5a88bb1fc6941375a8398f') {
        image = 'https://pbs.twimg.com/profile_images/1555583563273084928/eTIGHfO-_400x400.jpg'
        image = 'https://pbs.twimg.com/profile_images/1654680191111946241/Jwjkt0XF_400x400.jpg'
      }
      else if (pubkey == 'beac82c02402277fe1dd3ad79a6e35c25523c45e9931b4a69299a6cee1b0ba20') {
        image = 'https://nostr.build/i/nostr.build_5182f8896be522ff9d897987031be39d3c09404d842bf3f5d24efd99ece1cdd9.jpg'
      }
      else if (pubkey == 'b25e56b72c676daf2e12717d25990dbc94ace8912f34ddd0b6574cba0ffe4ee9') {
        image = 'https://void.cat/d/6Keeg6s1NEDyx7fqdd3h8B.webp'
	image = 'https://void.cat/d/RhK4rGFq5wUSm4MAeixD9c.webp'
      }
      else if (pubkey == 'b3320cbc0e54ebf79e6eb877fa609c8d645d6722882dc6d961c6b21f0503a468') {
        image = 'https://nostr.build/i/nostr.build_e9ab47cd02bce830593a5a7f9edc589034b3c510bcba3f86ddbe8359a190af23.jpg'
      }
      else if (pubkey == '38146101bd4309b7cb575ef13e6ebdb472c31865a20aeebdcbc7336ea75dd3e7') {
        image = 'https://i.postimg.cc/HLTmKkGz/11-B403-B7-E37-B-4-ED2-A693-FC725623089-A.jpg'
      }
      else if (pubkey == '441ffc0a10cb50fc147ad628cf1a92b4e937245d7fd4a52632666d1d6367679b') {
        image = 'https://nostr.build/i/nostr.build_acaac90108786a66a979562cae69d7ed4f5dbf22f4744de0943d1031605aa6b7.jpg'
      }
      else if (pubkey == '1bc70a0148b3f316da33fe3c89f23e3e71ac4ff998027ec712b905cd24f6a411') {
        image = 'https://nostr.build/i/p/nostr.build_4fb6accf6b24cdb58be127d9a509c3acd3e859bbe24b5c194b82bf30bc1e511a.jpg'
      }
      else if (pubkey == 'bc8bc7232c15f7162bd2bc96965bad8a1b3eae26afe8bbe79b74011b8b482897') {
        image = 'https://d33wubrfki0l68.cloudfront.net/7ddbd046d864aac2269662f3e87875098b678599/63781/assets/images/rai-237.png'
      }
      else if (pubkey == '68095cb37d18d8a75003e35bc361377bc35198abe6dbf7bd4f3cd2b202101786') {
        image = 'https://nostr.build/i/9c56506abeedb48dc417b550490150e08490817ef8a8b1c8c3a5c1b0ebbe5abd.jpg'
      }
      else if (pubkey == 'b707d6be7fd9cc9e1aee83e81c3994156cfcf74ded5b09111930fdeeeb5a0c20') {
        image = 'https://i.floppy.media/de3217a4ad02fdd17d2e1491cebef234.jpeg'
      }
      else if (pubkey == '6beb9b9791362595b2c39b8102253eae2b1e19a71d03a510104ad25c324a0939') {
        image = 'https://awayuki.net/resource/badge-nostopus-xl.png'
      }
      else if (pubkey == 'f5f02030cb4b22ed15c3d7cc35ae616e6ce6bb3fa537f6e9e91aaa274b9cd716') {
        image = 'https://i.gyazo.com/ac1045b91711694359cff4f66dcab3ae.png'
      }
      else if (pubkey == '89a0df6b5d372f0bb66416c9d902db1c0c78b397a9e98269920b5e82b49ee1e7') {
        image = 'https://nostr.build/i/nostr.build_b264d91513eff77c3e859fedfbcd1a16a6c0beca17b9b4e0a8dd7c4c67ff7c06.jpg'
      }
      else if (pubkey == '2bed79f81439ff794cf5ac5f7bff9121e257f399829e472c7a14d3e86fe76984') {
        image = 'https://void.cat/d/MbBpb41nt3UBw8fT9xAKm3.webp'
      }
      else if (pubkey == 'a76e45e4f2f0d1b12f5232bcd7981ff5f127a4a1d6415862dd8e8e9c756296d1') {
        image = 'http://wbird.jp/wp/wp-content/uploads/2017/06/katsuface-268x300.jpg'
      }
      else if (pubkey == 'c4081119f03614c5d5a1ee543f8ff3f20295268297040d0d6ba9bcc03ddeba47') {
        image = 'https://nostr.build/i/nostr.build_63012a23c458ab0e50694225e53de19fcbbf65a60463a42cf7120597a53fd6e8.jpg'
      }
      else if (pubkey == 'df21d556dd811d22411815b4359909a4acc3e0362ef2d5b185278c384c9fe7bd') {
        image = 'https://nostr.build/i/nostr.build_494883eeb4b79c43714db79cca8e3c9871449ce0c25f2b2f53f71159df5dd6a1.jpg'
      }
      else if (pubkey == '5650178597525e90ea16a4d7a9e33700ac238a1be9dbf3f5093862929d9a1e60') {
        image = 'https://raw.githubusercontent.com/TsukemonoGit/TsukemonoGit.github.io/main/img/oknm.png'
      }
      else if (pubkey == '0d1a48df0609c6df12723835030fe4a87abbfbd5f30b6c96bf56ab27958988f1') {
        image = 'https://void.cat/d/4bYttFKUUVUjhRVQQ3pmfn.webp'
      }
      else if (pubkey == '0286a9da5c296cb8cfec4f17a116f6ff78291f9bde0a6a6ec0f0c90d78e87793') {
        image = 'https://nostr.build/i/d5fcfe535533417a5a0d80859c6b52bc7bd61e5d6333de99a8771f14770ab817.jpg'
      }
      else if (pubkey == '2450d704c20605ae34023f243cd98a89ab067e167e046e0ac4a665f808ec15f0') {
        image = 'https://nostr.build/i/0e7f0b7f07ab028e166a3bca72b2d493fb0b35ec1ac0cadfec3d33dbbeb81f88.jpg'
      }
      else if (pubkey == '781702d40a07a84ed3c53c883fd102010e61b969159eab254ac6ea0dade04d70') {
        image = 'https://s3.arkjp.net/misskey/ca424969-c835-480c-8a17-526b27a33fa1.png'
      }
      else if (pubkey == 'bcdcaf9070bca8e703f8d6dd092f64687ca63cf152a2fad97c98db1cdc9aca77') {
        image = 'https://void.cat/d/G1f8d2G3UCGpaJh6KsS91E.webp'
      }
      else if (pubkey == 'b6ac413652c8431478cb6177722f822f0f7af774a274fc5574872407834c3253') {
        image = 'https://void.cat/d/Db3s38EJMXku8U1CBefkud.webp'
      }
      else if (pubkey == 'b6ad3d1301e1110bf60ecab2ea328a1c675d21bb2008d12964140363a03b1823') {
        image = 'https://pbs.twimg.com/profile_images/1513873521147002884/Ys_LEXLC_400x400.jpg'
      }
      else if (pubkey == '4e86cdbb1ed747ff40c65303d1fc463e10aecb113049b05fc4317c29e31ccaaf') {
        image = 'https://nostr.build/i/31fa98722a57f5ca1406bb1a5883fe61c92e9861b564d8adfab458f11045ca03.jpg'
      }
      else if (pubkey == '8c1bdf8eb87aa0ad42c5ae70d85921c24a7b2cf56278509e74f18a644c68050b') {
        image = 'https://nostr.kojira.net/rabbit.jpg'
      }
      else if (pubkey == 'ebadc753f734c678485918f63d8e569efa095768721d0d10e7e2574870a8a763') {
        image = 'https://nostr.build/i/nostr.build_0f96454f68c669988ebd00a96d66919bf58a253b4bf33671f1ca027298a989f9.jpg'
      }
      else if (pubkey == '2748ffc20bf0378ace2b32d4e9ca11fceb07fbef335a7124b5368b6338daf18b') {
        image = 'https://void.cat/d/Vbfw7g23McAfY5Tmiewb6z.webp'
      }
      else if (pubkey == '510e0096e4e622e9f2877af7e7af979ac2fdf50702b9cd77021658344d1a682c') {
        image = 'https://nostr.build/i/nostr.build_838f406ea64c1dc953b3204222622a3d008506deb496e6321573e142befb69f2.png'
      }
      else if (pubkey == 'ddd04270c95823371cbe8ce63856f6ef924da2bb3f0e635b55f56e3e46bd584a') {
        image = 'https://pbs.twimg.com/profile_images/1577630845162381313/-Rirb1Ei_400x400.jpg'
      }
      else if (pubkey == '') {
        image = ''
      }
      else if (pubkey == '9b58b54d9b6cb1f3a03feb8456ebdaed550ad1a7be71deb9005ec2c2d38e93f1') {
        image = 'https://ul.h3z.jp/lNq3qVYW.webp'
      }
      else if (pubkey == 'b1b4105a564aaddc8ae440a1b03a8ca0f36e0592aec502e84515948919aa52d5') {
        image = 'https://void.cat/d/7CLaNvnMgrwT2PLqvvfAPc'
      }
      else if (pubkey == 'd7c13d1edc3e0ba63ab74b859b2809fa15c0e8b538237dc8bd165b3f14cfe365') {
        image = 'https://void.cat/d/7CLaNvnMgrwT2PLqvvfAPc'
      }
      else if (pubkey == 'b0c8af215af765a124c20c6e37b481df0b6c5e406f967c3d04216bb1843174a6') {
        image = 'https://void.cat/d/QQgTv9ZfJ7weZzsSMuFXmk'
      }
      else if (pubkey == 'e4f9ab96540d24a525a149432efb94aaa2e3073cd246cd74316b9eeb9512673a') {
        image = 'https://void.cat/d/7CLaNvnMgrwT2PLqvvfAPc'
      }
      else if (pubkey == '71ecabd8b6b33548e075ff01b31568ffda19d0ac2788067d99328c6de4885975') {
        image = 'https://nostr.build/i/nostr.build_97cf0f276d50cf616fbe6ad808b5f4a3e87a11386a691d5006ecc23f8a83b934.jpg'
      }
      else if (pubkey == '26d884a45bf7506348b997e51aa4dda3c3b8400575ae17a010b1aae6b1bb44bf') {
        image = 'https://kazeki.net/img/icon.jpg'
      }
      else if (pubkey == '45b4326bfb68f11f8209c1a61360e866a8070e309c08df1f987a77c9ac0e0d93') {
        image = 'https://pbs.twimg.com/profile_images/1614587836040351745/G_eRYNBd_400x400.png'
      }
      else if (pubkey == '2cd0f141ac55fc2f9e88ca08d4f371c801365ce0a8d1f8e8eadbd94bfdfb4536') {
        image = 'https://nostr.build/i/nostr.build_b6ffa78e030a26c616750413765c0b088b5df84ab6d52ec859b54076c3f74d70.jpg'
      }
      else if (pubkey == 'c2e4efef6b4eace4d47abc30920b40c120b8e9b25d950e5d68325a09f8ac2e10') {
        image = 'https://i.imgur.com/RMVJ4CM.jpg'
      }
      else if (pubkey == '1f12d5dce3bf4bc620ef05bc5ce860896e1740ec4c353607005945ff12a1d990') {
        image = 'https://pbs.twimg.com/profile_images/1635591882825932800/7lICrmX1_400x400.jpg'
      }
      else if (pubkey == 'd0784382adce35c5640d55d72ffeea09f9a0f38f66efdc118fdbc0535f7ed366') {
        image = 'https://pbs.twimg.com/profile_images/317945199/627204648_37_400x400.jpg'
      }
      else if (pubkey == '658ae463581942c0e3975613df5c4274f3d3767e00a0fba37965e6574ccb9d6a') {
        image = 'https://wangdora.jp/images/wangdora.jpg'
	image = 'https://pbs.twimg.com/profile_images/1038813265663410179/lFhy4hcs_400x400.jpg'
      }
      else if (pubkey == 'a56783deb3a83cfbdd331a854a74d599bfc8bf05b4221cf8f0e1347b089f8e8f') {
        image = 'https://nostr.build/i/nostr.build_98169d045a5add9ca2fe9a8dd0bac5256414bcfc998e99b4efacefc88bac10e8.png'
      }
      else if (pubkey == '6c880f472776db7d4acf1fedf745f367f055b255a82968da118a06909a854e24') {
        image = 'https://nostr.build/i/nostr.build_552ce358ff30e69778669593b70a2095999cb6ddf1998251605a5010cdbc9aad.jpg'
      }
      else if (pubkey == 'e2141697a8da73ffde044bd31c3c95b9b66ee34cf0c8549230828bfe72e5011c') {
        image = 'https://s3.arkjp.net/misskey/d33fb88d-4ab6-4b10-8458-1d0bfe9d590b.png'
      }
      else if (pubkey == '3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d') {
        image = 'https://fiatjaf.com/static/favicon.jpg'
      }
      else if (pubkey == '460c25e682fda7832b52d1f22d3d22b3176d972f60dcdc3212ed8c92ef85065c') {
        image = 'https://vitorpamplona.com/me.jpg'
      }
      else if (pubkey == 'be1d89794bf92de5dd64c1e60f6a2c70c140abac9932418fee30c5c637fe9479') {
        image = 'https://pbs.twimg.com/profile_images/1362672747399159818/QR9bbtrT_400x400.jpg'
      }
      else if (pubkey == '09f08c555adc7855a187f8d42f4e3fbd89d11d062e3a63a46851296629ed06e3') {
        image = 'https://s3.arkjp.net/misskey/3c08aa80-6a94-4417-a435-ed04cf270734.png'
      }
      else if (pubkey == '3932eaa6df35f93f5e24a003543cbc3ee5bb9e2e34f74a456e949e22bcb600d3') {
        image = 'https://s3.arkjp.net/misskey/2fcf6970-ffcc-4d69-8edf-de958cb4bcce.png'
      }
      else if (pubkey == '16fde07682c23b9b1f49f0d614d83f1e8a78b5a0d7d3a0029ace971827069712') {
        image = 'https://s3.arkjp.net/misskey/webpublic-88848c65-4d89-40f4-b5aa-f1046f37e828.png'
      }
      else if (pubkey == '207eac28fa44d62179a179d98fe20658dc9ec5ba4da7730925322f5ff1d1d174') {
        image = 'https://rx104ff.me/icon/little_lady.jpg'
      }
      else if (pubkey == '76d5e7e16ad7aebfb8f87a7254516ecd57b2243e259a44793616b831cd191098') {
        image = 'https://nostr.build/i/3ab018e481945ab22efb14b6d9b0ba1180ac159e7b9d3586fd37a72a4a31d4ef.jpg'
      }
      else if (pubkey == 'f5142896ed33a06299797864338779ba229a476693ca037a3a57f25440f94d11') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_3d83e82e7cb18822133d34cc0002cc874862562e872aad6ee02ad8cf55958a26.jpeg'
      }
      else if (pubkey == '8e4cdaca2afb6765f3c18d5d5c41ca9e1502e0816e96e8df4fc779e031030d4a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/qchan.png'
	image = 'https://nostr.kojira.net/qchan.png'
      }
      else if (pubkey == '9b840e12109a3ed2d54c75e872246e76d96a45fcdd6b171dc723eeac7232e29b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/nostaro.png'
      }
      else if (pubkey == '5f010febe730be42d18c3bf9bf3a135f90621dc572175b5c357119533ae9756b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1353298673933799425/gLMl43fA_400x400.jpg'
	image = 'https://cdn.nostr.build/i/cbbf30d005524e7bb29e9b5e515dae68b1891825a1f2f49812a8de4ea2c0ccef.png'
      }
      else if (pubkey == '07804b786c6a3b400b7b20d9bfc945035f3ad213da797b0c50954767c375c543') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/2363?v=4'
      }
      else if (pubkey == 'e013e2d0a59e17688690f32364af5f21203007938ce1a30a3665dfb328406112') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn.discordapp.com/attachments/1082553832371921066/1083400228931129495/tobipen.gif'
      }
      else if (pubkey == 'd3c06b47f17d28f46422f05dcf053d391a000b64dfe56963f2f0eed2ad3b8309') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://randomsoft.com/damus/prof.png'
      }
      else if (pubkey == 'd7b50f8d6d772f9014138ca63b7df0cd6815b1f7d8ce3c81bb3e9284d4e72896') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://gravatar.com/avatar/f5c4bc5f41ae0e84ec112cc1cd71d418'
      }
      else if (pubkey == '2d6967dca8c29c5a58fe088591f4073afaceceedd20227f2b6559d4763253a39') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1384131342091243526/spVaX9SR_400x400.jpg'
      }
      else if (pubkey == 'b757d9f550dbe0a5261d9d28d3fc8e3bba09a5e8dd9621a1e0dbec9368a98319') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/104398899?v=4'
      }
      else if (pubkey == 'f34d34b94c1dd0bb552803761e00cc7d3851f7bc8b9f0bf49edc3637b450aefd') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMzksMjE3LDEpOyBzdHJva2U6cmdiYSgzOCwzOSwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
	image = 'https://i.gyazo.com/fe5c0915065b515e509ef351c71b617a.jpg'
      }
      else if (pubkey == '9cf9b6087934351e408b971d3d4d7824503ac81b8e6d45e010e25440594db487') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/kojiranyan.png'
	image = 'https://nostr.kojira.net/kojiranyan.png'
      }
      else if (pubkey == '1f617e368ce633acef348a2f755dd0a459e56e394766699524ae5d0ee66e9caa') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1509474712543399940/qaT7nqqS.jpg'
      }
      else if (pubkey == '7dc1677112f05eaf49547806543b1c006ce3257278e52b1c9abff63270ed704f') {
        image = 'https://i.imgur.com/WgIkvHL.jpg'
	image = 'https://i.imgur.com/kcS2WiU.jpg'
	image = 'https://image.nostr.build/1e957ca3f25bf97fd3050036849a80b9b43be3831ab452378ef5a06f66685d88.gif'
      }
      else if (pubkey == 'f03f2244d27bfd41e4de902fcc8744bcc1a425b466b3d6057e30d2ca31275430') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://teraminato.com/apple-touch-icon-precomposed.png'
      }
      else if (pubkey == '4620592dc7b3c7e13f14177b9089db2efd91021604a74d41c827c99f1f9128fc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ukadon.shillest.net/system/accounts/avatars/109/373/509/477/597/895/original/5e11247f0d9ea4de.png'
      }
      else if (pubkey == '45180424f24e5df50d387a9fbff5c028fc81db14eb44c1776cd5fa3dedcc26d8') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1541807671019352064/tfk6aKlu_400x400.jpg'
      }
      else if (pubkey == '18403a91191feb1a7bf09bd583e367002ab6528be867bdce1ffb63e08ed808c5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/FWb9CRejdKG9MJcPfef3K4.webp'
      }
      else if (pubkey == '8b2a81394983805231efbdcf714a09b63c6783996d0d932291a449e72224fe77') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_6a77132cb8524eed0491c967a8a9ffbc164797bae7daabcc5e031d46f1cc5390.jpg'
      }
      else if (pubkey == 'efc2c31cddaa8cfb85997c430f6bae61eb13c7c25832740ea90d5993e1e35926') {
        image = 'https://www.izumix.xyz/nostr/icons/icon-nostr-jsdfq43wtr-001.png'
      }
      else if (pubkey == '1d80e5588de010d137a67c42b03717595f5f510e73e42cfc48f31bae91844d59') {
        image = 'https://void.cat/d/VmfqvDTKsCEmaM8BatTaW6.webp'
      }
      else if (pubkey == '582e4aab4c043946d93094bdfcacead2b9519fefc919c41f14ab381cd47afbd8') {
        image = 'https://nostr.build/i/nostr.build_2a6f2712c0731840084a424faad773d3177adbab7e6f1f2e77475ee5c99dce51.png'
      }
      else if (pubkey == '7b537164efc60ea0cda7dd3213c54aeba67834e05131a7f7bf29e94e4eaeae8a') {
        image = 'https://void.cat/d/Mzbfg6aug7uJC5pzH6ANh3.webp'
      }
      else if (pubkey == '6b48053fc2e87420ca48d5d2fd827cf55a5cbcaecf5136ff8fc5c344427059b8') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://64.media.tumblr.com/959baab597673135942b2a1397b5fac3/51dd5b5ea841aed3-6d/s512x512u_c1/a33b1bf5073848d55d17a33568cd277ec4284600.jpg'
	image = 'https://void.cat/d/XwDZx78HGtQ1UcpVSD71fs.webp'
      }
      else if (pubkey == 'd4ea67859c89cce2a2f25c41f0efc81da8299f086e34eff47d661807dcc8e982') {
        image = 'https://raw.githubusercontent.com/TsukemonoGit/TsukemonoGit.github.io/main/img/time2/0600.png'
      }
      else if (pubkey == '87e02cd9151cbf69ba20268a2a4237ad2f39fc631c96558e294ca00586477412') {
        image = 'https://cdn.discordapp.com/attachments/1076030840460550245/1078815685620273192/485fc6d65db77c4e.png'
      }
      else if (pubkey == 'c23d36fedcc7bd08485ecdfea7453fdbecfa4f464d5460540ae546c0d824bf65') {
        image = 'https://void.cat/d/QQgTv9ZfJ7weZzsSMuFXmk'
      }
      else if (pubkey == '19801bb150aefd151cc4b67e9cd15afe465745013c4431dd91b2c6c2a050a915') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.eniehack.net/~eniehack/assets/avatar.svg'
      }
      else if (pubkey == '22c733af44ce6f7b23a34d9beb99b30935aa0926b5dba44e4dde9c2dda4094ff') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/nostrchan4.png'
	image = 'https://nostr.kojira.net/nostrchan4.png'
      }
      else if (pubkey == 'd801c8d4c9fa14c21a60e9a4c263687eba908b39d818611587f020f060cc5b68') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_e0b76469720c82cab4b43571e0260278a31adb0f1d5646542fd5a4cd0159eb4a.png'
      }
      else if (pubkey == 'a3bce095cd0e8348b094c9201bd0c3270eafaf78f776517f4101326daf5cb7ff') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/83725933?v=4'
	image = 'https://nostr.build/i/56b8c4078a0bcf07cb18e9f777a25eb415a681d80eff9d377060894bd602820d.jpg'
      }
      else if (pubkey == '046284c5d3cc859f58b1ff58d2bdbf22eb6f41a633e97f503a569cc1fe886322') {
        image = 'https://github.com/Neos21.png'
      }
      else if (pubkey == '6c535d95a8659b234d5a0805034f5f0a67e3c0ceffcc459f61f680fe944424bf') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_008ce3e77fde037efd6e2ec8a8f8b755f27492b66119f6baddeb704ff4888a0a.jpeg'
      }
      else if (pubkey == '614b813b9400437108077e97ca0a7aadfb4ffc0719d87548c9b07cc3d96b22f6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn.amazingca.dev/assets/nostr/profilepicture.JPG'
      }
      else if (pubkey == 'df173277182f3155d37b330211ba1de4a81500c02d195e964f91be774ec96708') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/CZPXhnwjqRhULSjPJ3sXTE.webp'
      }
      else if (pubkey == '61359eeb59baf4bbadf21a2d5f03129267883e0b5f0f3024870e4705c0a19fcc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ul.h3z.jp/qDwZK3cO.jpeg'
      }
      else if (pubkey == '2fda8cd83101180a1493b5f51bf6d40ced22b8b2dcf5e15f633242f992250eff') {
        image = 'https://pbs.twimg.com/profile_images/1224756560829677568/zm3g7rMk_400x400.jpg'
	image = 'https://nostr.build/i/nostr.build_86453ce1d2ad2073c06f9414ae1405a617dd212b52f49905092c37dcde5ad6c8.jpeg'
      }
      else if (pubkey == 'f371771f97f4a57f3e606315014600fbad27ce155f0a5411294549e25385be31') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1622543518777610241/CDNCzno7_400x400.jpg'
      }
      else if (pubkey == '6b825cc404caa105a7e8cc11e1187d50a60f8d00d3eb34bc0ff64b0c8b87e4bf') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ryumu.dev/profile.jpg'
      }
      else if (pubkey == '8520aa73a2b678e59be1b1ab3f0b62d7eec9e6e12b964dc650cb4bb19466ddba') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pictogram2.com/p/p0998/i/m.png'
      }
      else if (pubkey == 'ee7d9e9a33a6479c3890d52ce9602ff83f032645f1ca93d54873384f16c02b44') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/skyka.png'
	image = 'https://nostr.kojira.net/skyka.jpg'
      }
      else if (pubkey == '4afc021c034d6fc25aa7989f24f83d1ba214ca0aaf45e090efc98e4d866076b1') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_dcccfa8138d0d17101ee5d6b64d45a74d45fe0651e8ada1f72d8595157e0102b.png'
      }
      else if (pubkey == '9fddf9de549c2e1959ddc30f9f468f972db2fb0f716f711ce31ef033e97875ca') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1505884953858670592/Oae9UTQC_400x400.jpg'
      }
      else if (pubkey == 'aa1d59f88a2d86ef549e745b67553a7591fae583014adb8259e4ba61e7815d78') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'cb230a5e9341a1809c0d796ae4b63af1a513b735c49b8aa09278fd3414aed832') {
	image = 'https://nostr.kojira.net/nostrchan2_new.png'
      }
      else if (pubkey == '084c8801aca910c6cc429f1bdbadc0c459d048513aaaceb928762e1ca04ffc24') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://secure.gravatar.com/avatar/225bd4431484af73d0b594f3aebdf541?s=1000'
      }
      else if (pubkey == '4a99a93b0bafb0a71a87a944223297d86c2e7f728ae55ac1e3a5fdf91924e923') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/nostrchan_new.png'
      }
      else if (pubkey == 'db0b3a1d86ce280a97d622a18b534b5522b31feab231f4067555b229eef05e30') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDEzOCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDEzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '00598be218731669cebd9546f2755f4f25b673bed5bc39c763c7435f32560d27') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/nostrchan_tako.jpg'
      }
      else if (pubkey == 'd65fbcd230d68207db10a6d952afdc660905468d035bdeedd773cba667b84b65') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://jun3010.me/wp-content/uploads/2022/07/junreal-1.webp'
      }
      else if (pubkey == 'c9b9a14df54a502b2915de1ceffac2ce04d3215f893723fcb1b62a52de106b8a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_60a80d224efc687723511ae49549a2cd1eeb923a6cb3baf95a562d9d29e662a3.jpg'
      }
      else if (pubkey == 'ed6a6a13617ae9fabbd970a7ddd4e3653ae8b63d80b3786145d27c0862700d3f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn-ak.f.st-hatena.com/images/fotolife/y/yamato3010/20230226/20230226235312.png'
      }
      else if (pubkey == 'a9540bede750da2334b76bd212d50b6018bfdb7ae5d811d414a1769772223066') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://botamochi08.github.io/img/IMG.jpg'
      }
      else if (pubkey == '8630407ab201b4ba7df5e9e2d3dfd8c8975f6a92a097f740e15102452d0c3c0d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/802164042726969344/8Hx3-k0M_400x400.jpg'
      }
      else if (pubkey == '58e724b6ee7f80f8d888afbdb3837ad4eac8117837414ecaa4e7ab9e0ddcc9ee') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDE3OCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDE3OCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '65e48e593d3d2d315a5d143c507e30b0e30c1b08af161c563a409aba99422836') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1364115004/522_400x400.png'
      }
      else if (pubkey == 'ad49832d5a2a8cf1d168278f62210ba17ae7619da708b1bc11d03a11b51906a4') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nicoanime.com/images/nicoanimech.jpg'
      }
      else if (pubkey == '8246b544273746c4b2d9a8599117f7f310cd9c87f58ed0860e432a9a39c8c060') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/NYeiFEBMc5YSPzQkMbmVYR.webp'
      }
      else if (pubkey == '363b899a69d4e8b57460f726f5c23f91863932b7ea8d40081016c8d90580e00a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_7a5c27083b5274943d7de307dbc6a6969295215ac703f632db8842f917d38b2d.jpeg'
      }
      else if (pubkey == '74dcec31fd3b8cfd960bc5a35ecbeeb8b9cee8eb81f6e8da4c8067553709248d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://iris.to/3f213087732422818ea1f7bfc2345c5a.png'
      }
      else if (pubkey == '7460b7fd291c47bc397fe58d0349b467984e7333772d1b8c7f69cc814fc4e74b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_d2e4db7d384af4758ad378127d6ff0fc0deafaa5559078075827fe7b5bc09b83.jpeg'
      }
      else if (pubkey == 'b2c7b965b6d293ddbbd5be096ae351ffe96f11b7d1f915f1653179de1a23e446') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1554788650877014016/sbaxwZ04_400x400.jpg'
      }
      else if (pubkey == '00cd25edf33aca74a406d105eda293fb1bfc60ee044f8abf4fa5991b88cc909f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://c-cha.cc/media/kyunkyun2.png'
      }
      else if (pubkey == '86970129b2d59ce72e2b9457bbca2da859c7f4e6f94947a50693d73de9c757e0') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.odoru.org/iris/_kaz_400x400.png'
      }
      else if (pubkey == '498fbd3ad9e36e0185f0646c1d1ae168803e0b36cee2c55f8945fc8997ff09ba') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1622837843092705280/qOcwYjLH.jpg'
      }
      else if (pubkey == 'f1c6361e537552ceb5709742809560b6a9a92f7242109eda55f25270f1a9b99b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ppoi.space/SNS_icon2.jpg'
      }
      else if (pubkey == '14b6912f67c13447fa53e9981f48b93dfac9782b31ee099e48193c070cc730de') {
        image = 'https://pbs.twimg.com/media/FouD1e4aIAM_ZQW?format=jpg&name=900x900'
      }
      else if (pubkey == '060aed85be6832502ed73a796d15196a62bc7cd6936cfddd75f06ee309bbd434') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://4.bp.blogspot.com/-U-nFjQg1qtA/Xs9OoXcxzuI/AAAAAAAARjc/mFkjsEpoUhkBOQkKaPvsGE9c3prayaJPgCK4BGAYYCw/s113/1001819_10203291568511192_800437713_n.jpg'
      }
      else if (pubkey == '81c4e85123d96b981a612b3424f996d3f71bf3718be93f1e03f457e3dbf9e43c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.nostrimg.com/ab0dd3de419a857d7d1fce2185f8c7b546d1f62d83596b83ba064cccc97d700c/file.png'
      }
      else if (pubkey == '43911a57588e46762f67bb3660892fd6c7f0269ffc963065e68355ebaaac6ba1') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1411354749/fuku.gif'
      }
      else if (pubkey == 'd318840064ac04fd3423a663c0c4950c514f0b4acccedf019808431ac516ecaf') {
        image = 'https://i.imgur.com/2vsoOGb.gif'
      }
      else if (pubkey == 'b11b658ecd4fe47512c22a279b9ecc989fe9a212fdc5f09b1e0c3aef0e796301') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_e6a2d007f44dc7b91ad91035dc94c249771a7f5ac88ce383ed13ec6695712be5.png'
      }
      else if (pubkey == 'd9a701ea152464c8fb642296048418e3832745117e7026910590007661c87609') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      }
      else if (pubkey == '1ffd0072bc2e56e1118c47b48654e3817f75077813bc97c4f5dd9c2d1ee124bd') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gae/i4Mk2R-7ybXU8su836jfIkhDOUrfV3x1Cttv9G7_X3Qx8xhhw1J-coqiB4On6NANL_yV4nJ7-vbogT2hh5az5xlVW8OYAOTaupjY?w=500&auto=format'
      }
      else if (pubkey == 'cdb15f2208f9c0cdde737175fb7aace6b1d6867130cdd8a2d518dfed18d4f430') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1491949965442043905/4b3_VAeM.jpg'
      }
      else if (pubkey == '661639332278623e415352f6d78347904beed9c587068448f6ea9f5536ce8869') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE1NywxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE1NywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '47317fbc0fbb7815cd2c2037e5d8bc5ac0fe51449e41c9a54f18ca687acae488') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://gravatar.com/avatar/0ef3656433eb30976060daf645bdf269?size=500'
      }
      else if (pubkey == '547d7343b4dc254014c7140ad5b395a8045521d8fddafa28fa0bed6b36ae2645') {
        image = 'npub1237hxsa5msj5q9x8zs9dtvu44qz92gwclhd05286p0kkkd4wyezsy9x395'
	image = 'https://moe-illust.com/image/blog/main/thumbnail/18.jpg'
      }
      else if (pubkey == '468529cdfde9a4534b465c23a14d4e8cef1550ee15cbf4088f14324be74befdd') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTc5LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTc5LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      }
      else if (pubkey == '99968da168a276a16e6fa4330b21aee81ba3f09d2fe67abd735db1be46a10a4f') {
        image = 'https://abc'
      }
      else if (pubkey == '9490ecff7eb52bc52150fcc7ed76063bbd32448b69252fed2769364d7a7fe661') {
        image = 'https://pbs.twimg.com/profile_images/1626155482611322881/6K3pLD_0_400x400.jpg'
      }
      else if (pubkey == '494ac6c2cab8debdf5a396c8f6346d297c83fa1fff7dadb2b3664bc2ed2d3227') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://blog.ast.moe/images/prof.jpg'
      }
      else if (pubkey == '3ccdf3b6c59a75c112f76835f4668d391c59033ce14f64a90ac98f323c49c42c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.postimg.cc/XvqsTwKx/821-A0-B5-B-973-D-4-FA5-BE25-FC8-CA69451-E5.jpg'
      }
      else if (pubkey == '92e8c5f3956c243853a28a2bc9ef0c5866f52c2c55e25f071ba6fa662f6b057c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://dl.openseauserdata.com/cache/originImage/files/bccf8486c625e07c7b74be6ed00ee5af.jpg'
      }
      else if (pubkey == '2228b9eb51db33117ae9e770ad404bc4064b984c8f31e37cd33be7b702191219') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1200539712231890945/H0EzbOBk_400x400.jpg'
      }
      else if (pubkey == 'b202b12bc481c3773c5960dfbd4354586de444c251962ea98dbf6e861d21e9de') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ama.ne.jp/appendices/media-kit/amane_768x768.png'
      }
      else if (pubkey == 'e59486a8cf64afc3387ee3366d213feb512413f55947dfcc0de9401fb7ff87a3') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://1.gravatar.com/avatar/f01d018d5cec0cf69a38b8e4bb8adbea'
      }
      else if (pubkey == '3d67850c49ff5bb27980be19b3bc41d6bc7042a6eae9371911ca3a0d5233d3df') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://upasama.com/wp/wp-content/uploads/2018/03/5N1w476o-150x150.jpg'
      }
      else if (pubkey == '161de3731ebf81743c366139d4bdff589e77ccd459060dda3b2a1a3e45e014f6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1005751548691939331/OLn6uTLj_400x400.jpg'
      }
      else if (pubkey == 'ea51992e360b2c6ec59f47766700496fe298248183565481f0df986dba0dd4e8') {
        image = 'https://abc'
      }
      else if (pubkey == '1b49d9682873308e635f4f6ef9c452e9348550f184604be0287f777b1d52507e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://jmtg.net/profimage_eye.jpg'
      }
      else if (pubkey == '8f52fc1164b182b5595b350e4d0faaec13dad362d0f7978e6e19bb07917cf534') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn-ak.f.st-hatena.com/images/fotolife/d/dacho_rider/20230208/20230208092926.gif'
      }
      else if (pubkey == 'ac133d83ceb9e9c434e9b0beff17ae7d1a3f267d658075286d6afaf58f663468') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1416775614929977351/9XnFXRPp_400x400.jpg'
      }
      else if (pubkey == '194bf15af3dd8ec01558615c12157bf12dcf90545c446e9cba14231eb778b0c2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/TpvCfLzxwteAUmbmNUPWwC.webp'
      }
      else if (pubkey == '7a7bf05425b4ef78efc26ace08d43064b5ee1c41cedd64d9e3913ec3b47c392e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://bagapo.vivaldi.net/wp-content/uploads/sites/29085/2023/02/BaronIcon.jpg'
      }
      else if (pubkey == '4737174f26322a0018736610240dcdde81c802d95cbc6c1001b02aee0ec7e349') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://booklog.jp/icon/84/L_484ce8b7a77d15150e02d8d7c2ea336c.jpg'
      }
      else if (pubkey == 'f7ee49af1f4604bc5288884b73ce2c170ee0f5acf683e5e426ca223b3b94041f') {
        image = 'https://pbs.twimg.com/profile_images/1621630708098949122/i0qtWMgD_400x400.jpg'
      }
      else if (pubkey == '3caab247b6b45e918e346b5bd04784d919c46419e2241624af619e60724cfa36') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1511218055401345024/4NX8DYIB_400x400.jpg'
      }
      else if (pubkey == '25c6e687c617f25b4bda9e41e3d08154f6c7cf86c99d3bfd9189a66feb9370cf') {
        image = 'https://pbs.twimg.com/profile_images/1619713003255140356/ZZNHjFMf_400x400.jpg'
      }
      else if (pubkey == '3d842afecd5e293f28b6627933704a3fb8ce153aa91d790ab11f6a752d44a42d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_e98eb6df11ddc1157b402a58634fa6e9cb11bb5b9e86189437033344b63e0d9e.png'
      }
      else if (pubkey == '5e01f12d3e08efb0a31f7c061663832513173c21f71d4fb7a412a2e010d187f5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://rogumi.net/IMG_1145.JPG'
      }
      else if (pubkey == 'a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://en.gravatar.com/avatar/884be098693425b409d25aaec5091de8?s=150'
      }
      else if (pubkey == 'dbd36fb28e4e5ef45b0365cd54e1427de4984b6008cd3d8f4e1be9d0f99187c3') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gae/-5ZkwyfNWdODImGoyXH2ErAhDyZOwiECdejApZ28kDiSbnMzzJgyQ7T3GupV-9iEmQpzL3Qf-o7r4J3Z7cBCrPHq8BHsIxCp4Zm087w?auto=format&w=1000'
      }
      else if (pubkey == 'de3459f17e1a1d14435dfbe057d5b41402a0dd659edb0b9c32e83e303a2c80b6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1385485900306522115/D66XDiz2_400x400.png'
      }
      else if (pubkey == 'dc5209b5ad85de052bcebcf0aabac2b7c93cd687b65b400f9cc9c9b3d1772b0d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1509909389154537484/M09p7qrK_400x400.jpg'
      }
      else if (pubkey == 'b1100bf07a091738f09568f167a0fa1d22807005bf3ba65b349c45c441401289') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_b34f58faccedf7cca5a95189800b6cea59f580b1be7098c523f8b6d6b82c08c2.jpeg'
      }
      else if (pubkey == 'dbe099ba2c41df51e06535fa969ced7672069fbe4654cfaba28b80f1c92ed9ce') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://github.com/siketyan.png'
      }
      else if (pubkey == '310fa8f4d388bb143c508fa0459d6e90b937c40ed1c351be7307604bdf3e38a3') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/2agWuAMdKSSmqEn6SYfS3j.webp'
      }
      else if (pubkey == 'cb7d05d3b97f9b25f9f7f5143983da63f808be2c4a18e55403ed2c4787958177') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_12abe5475e4fcd2d3dd19a4211b216194bdaa326ad1bc3c9d1d998d44ecd7d51.gif'
      }
      else if (pubkey == '2dadc402e7fcbc6733b7397151149155349007647550a1dac2706f32b1671b5d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_136230349609e706d377e772a8a5201f9927902fcd4ba9abca5014f40cb59b89.jpg'
      }
      else if (pubkey == '7bbc6dd4eaf487d03e2562f0aa21072935e1d80c632be6d24c018537ec202d6e') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMTQyLDIxNywxKTsgc3Ryb2tlOnJnYmEoMzgsMTQyLDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      }
      else if (pubkey == '06796e9eca42dd4c08d869f94896f0e7b9699ffb9621770810579b9fc2317c51') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1591958235006771200/VXOjjL2w.jpg'
      }
      else if (pubkey == '28787870d6e0a475951c5396d480687963b6f6cdfeb9900d35bce6803381640d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/9L2A7XQ48oCBLQtNiKxEte.webp'
      }
      else if (pubkey == '9f77c2766c37608065f2a5fb58edd4984653945e00c7a8c0c10bdef7f2c63560') {
        image = 'https://abc'
      }
      else if (pubkey == '23dd9ca64a2077f259edcdb029785870a9ebd9a3cb1bc033c29fa3c099d4913f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ykazu.com/images/ykazu_thumbnail.jpeg'
      }
      else if (pubkey == 'c186f6af371c63beb8935fef666f59d7c6941434e237434ec5576baa7254b142') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://img.hyuki.net/20230204191542-b3b72a8b78da31e7.png'
      }
      else if (pubkey == '7f87fc49a0b1439841a2291e18198d134bfcb9bb8f222232fabc70668462c1a9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://flash.lomo.jp/images/karate_b.jpg'
      }
      else if (pubkey == 'f5a43e03b21c23fcf67ce40e894173ba50ff509a98de22a7e5133a2298de43ca') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://0.gravatar.com/avatar/f8bcd46d3490ed4169a9fc3098c738f3'
      }
      else if (pubkey == 'ad084edd07063f778b3ab2673ee0b17f33376a2b5a2719283b1e00eed78e117a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.haxibami.net/icon_ange_glasses_512.webp'
      }
      else if (pubkey == '22466897af022abb620c86d77fd3e3ae478d7f763d533c9cd059e4df53a11078') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1565374978887122944/t-mE3-v9_400x400.png'
      }
      else if (pubkey == '69f82b623dc0265052caafce901d326623f469e36a8ec7132cabb06f5cc7de0a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/8732654/5bf18162b4542533e7e9ca03af827076.jpg?size=200'
      }
      else if (pubkey == '4bcc022810a7eff571f1a02024cf3a835c795af109b4ecab11e45062299141d7') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1505613048236498947/rI0hpagN_400x400.png'
      }
      else if (pubkey == '91f7f43cfc1c00397e3457eb6286bb36c639b253fa0e54d6795155d0d60d8ac4') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1588448098501554176/VVjbJNW0_400x400.jpg'
      }
      else if (pubkey == '09901790a14c4923784e6f0526043f35542159434863dd3fbcad662f5bf9a8f7') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1591957540249784321/8FGXWVF5.jpg'
      }
      else if (pubkey == '139b1ed03764c10e796b902d36b55d182016f963fadd4548c998c21872f66b28') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://utubo.github.io/nostr-bot-traininfo/img/area04.svg'
      }
      else if (pubkey == '614aee83d7eaffc7bc6bbf02feda0cc53e7f97eeceac08a897c4cea3c023b804') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_7494c2c95277dcf39f3cddb224a4340f8de13b8c357313d595040e7585068735.jpeg'
      }
      else if (pubkey == 'c81c7999f7276387317878e59d7c321093a433977ee6811ca76dc3a9738e1869') {
        image = 'https://ul.h3z.jp/353dVxmE.png'
	image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAztSURBVHhe7d0xcxtVFwZg5RsKUjI0pjMlHZSpmHShSzrShSqhI1VwBZlhBlwBlemcznRJFzr4B/APcBcahnTQMPl85F1ztVbslbwr7dl9nhlNtI4DQUivz7333LvXXp2YASTwv+pXgMETWEAaAgtIQ2ABaQgsIA2BBaQhsIA0BBaQhsAC0hBYQBoCC0hDYAFpCCwgDYEFpCGwgDQEFpCGwALSEFhAGgILSENgAWkILCANgQWkIbCANAQWkIbAAtIQWEAaAgtIQ2ABaQgsIA2BBaQhsIA0BBaQhsAC0hBYQBoCC0hDYAFpCCwgDYEFpCGwgDQEFpCGwALSEFhAGgILSENgAWkILCANgQWkIbCANAQWkIbAAtIQWEAaAgtIQ2ABaQgsIA2BBaQhsIA0BBaQhsAC0hBYQBoCC0hDYAFpCCwgDYEFpCGwgDQEFpCGwALSEFhAGgILSENgAWkILCANgQWkIbCANAQWkIbAAtIQWEAaAgtIQ2ABaQgsIA2BBaQhsIA0BBaQhsAC0hBYQBoCC0hDYAEb9dNPP81u3rw5e/LkSfWV9q69OlE9B+jdO++8M/vjjz9mb7755uzvv/+uvtqOCgvYmB9++GEeVuGff/6Z/7oKgQVsRAwB9/b2qqvZ7OOPP66etWdICPQuKqtPP/20ujoVw8EYFq5ChQX07vHjx9WzUw8ePFg5rIIKC+jdtWvXqmfrVVY1FRbQqxgOltYNqyCwgF6Vw8F1JtpLhoRAr7oaDgYVFtCbly9fVs9OXSWsgsACehFbcN59993qqhsCC+hcdLPfuXNnocK6detW9Wx9Agvo3P7+/tnWm52dndnh4eHs+fPn8+urMOkOdK7e4ByePn06u3379vz5VQksoHPlymCXEWNICHSq2SjaJYEFdCZWBq96IsNFDAmBzpRzV+GqjaJNKiygE19++eVCWK17IsNFVFjAlTXPu4qh4NHRUXXVHYEFrC3mrCKojo+Pq6+cNohGK0PX1VUQWMBaIqzu3r17br9g1/NWJXNYwMoipD755JNzYdXHvFVJYAErefbs2XxTc3OCPQZrBwcH1Vf6YUgItBZ3vnn48OG5Tc1d7BNsQ4UFtBJtC81hYFebmttSYQGXWnabrhgG9j0EbBJYwIVizqqsrPpsW7iMwAJeKybWY4K9vK18n20LlzGHBSwVfVY3btxYCKu+2xYuo8ICzlnWFNrlQXzrEljAOc1TFzbZunARQ0JgQawINptChxBWQYUFLCirq75OXViXCguYi3mr5pabaAwdEoEFnE2yl8fERHW1zRXBZQwJgXOT7BFWUV0NLbBUWDBxyybZY95qaGEVVFgwYRFUZSf70CbZm1RYjNZXX301u379+vymnmN7RMh0cf+/x48fn4XV+++/P7hJ9iYVFqP1xhtvzP7999/qarx2d3dnjx49mg/lVtE8gWEIneyXUWExSrHqNYWwCrGyF8GzShUWB/GVNzyNTvahh1VQYTFKzVWvMb3NYwgXARWhs46333579ueff1ZXp7Z5AsMqVFiMUnPVa0wiWGKuKUI4gubevXvV77TTDKttn8CwChUWoxRDotoU3+JtqrAYAg61feF1BBajNPXAukxUoDs7O9VVHoaEjE7cLIGLZQyrILAYlVgVi96iWjRCMh6GhIxKuTq4zZsl0A+BxaiUc1dZluppz5CQ0ShbGYKwWhQrhtFMWjeVrtvHtU0Ci9HY39+vnp3uixuKMii2+Yh7C9bnXdXd8dkILEYhtuKUFcMXX3wx/7U+RXPZB3hTjzIohmTVhtMhMIdFevVpmeUtqeq3dYTVEMNiW4Z6MF9bKizSK2+jHsqtOPfv36+ebVcERSwCRJBu85Gts71JhUV6MeyqRVgdHBxUV4yNwCK9MrC8ncfNkJDUujh1kzwEFqnZhjMtAou0YpNz2Sw69PPIuTqBRUrLNjnrbB8/k+6kZJPzNAksUipXBm1yng5DQtJprgwKq+kQWKRjZXC6DAlJx3BwulRYpGI4OG0Ci1QMB6dNYJGGRlEEFiloFCWYdGfwoqqKg/jibsZBo+h0qbAYvKis6rCKs9qF1XQJLAYt5q3KlcE4q11YTZchIYMVQVXe2SWGgs+fP6+umCKBxWDZ4EyTwGKwdLTTJLAYLGe102TSnUFqbsGBILAYJFtwWMaQkEEyf8UyKqyBituvR3d3fHAvesT3jG34VO4XDMKKmsAaqLj9+vHxcXX1evE90avUDLGHDx+e++Bnsb+/Xz077WyHmsAaoOapBKuKEPvuu+/mfUxlkJWB9uTJk+q7h+fHH3+snp12tkPNHNbANLu7Y8L56OiouloU++vie4ccPlfl7UlJYA1MF93dz549m6+y/fbbb9VX8vL2pCSwBiaGbLU+Vse++eab2d7eXnU1fN6elMxhDUhzta+P1bHPP/98HgJDfezu7lZ/01NjqBLpjsAaEM2Ss9n9+/erZ6fK1wQMCQek7+FgFlFVffDBB9WVYSH/UWENREyUl6bcLBm9V+V/f7R5QBBYAxCrgnfv3q2uzmvb9b6pxya66x88eFA9Ox0WxmIBRLnNlp18OGPMc/aI69Lu7u7C7w/tEX+/zz777NWLFy+qv/HVnQyJX926devs33FScVW/w5QJrC07ODhY+PA/ffq0+p3/fP311wvfM+RHhNfh4WH1N7+aCK3ynw3eBVu2s7Nz9oGMimLoIkTu3bu3ECRdPpqBF5VV/Xu//vpr9VWmyirhFsXcVXS217KuDHbdWR+vQbwWIeb26r2Ft2/fnnf+M10m3bckJtJv3LhRXZ1fGcskguSk+pmdDF2rr1zNSQVXPZvNHj16VD07v5LK9KiwtqTcMxiicogPPufFymTN23XaVFhb0Dw+JjY5C6vXKytPPVnTJrA2LPqXmltw3Bz0YnqyqBkSbpibg64uzv26c+fOfN4vlJPyTIsKa4OaQ0Fh1U68RuVrFQGmypomgbUhEVbNoaCwai9eq+bQkOkxJNyA5rHHhoLricrq+vXr1dVs9uLFi9nOzk51xRSosDagrAaE1friNStft9iEbWg4LSqsnsVE8UcffVRduSnoVcXty+KOQLV4LU3AT4fA6tHLly9n77333sJEu5f76qLjPVYNa17T6TAk7El8qGLIUoZVOWnM+ppNtmO+zRmLVFg9iGFgbNqNCqsWc1caRLsTk+8xCR8MC6dDhdWDuM18GVaHh4fCqmPlHaHr4GL8BFbHms2hMQwsTx+gG3G7slL5mjNeAqtDy5pDDw4Oqiu6psVhesxhdSDmrKIx9Pj4uPqKfqtN0OIwPb1XWPFhjp9+8Rjrak7MWQmrzfv222/nr3PNXNb49V5hRVDVH+ax/gQsD5iLYWBMsgurzSlXDOPk0zi9lXFaqcKKCikCqLxH3bJHWU2Vtx4f40/A5oFyR0dHwmrDyr4sm6LHrXWF1dzAe5mymooQq41pyqz5mkR1FYHFZrm1/XS0DqzmGeRt1P/osQaWw/iGw7BwGloPCcuwisopgmfZo75zyhS2oZSvibDaLsPCaWhdYV2lShprhTXW/66MmsPC+MHZbC4lv1YVVszVZNV2oWCdB8MRQ8ByR4Eqa5xaBVaze3uIYu9erNg1w6nZI9UXJwZsX7mrIOaz/D8Zn1ZDwrKaiPmrVedqyj/f9dApgiq6nb///vuFDcebVq6Ksj1OcRi3lTvdhzCxXFZTb7311rwCvCisoiq8aKFg3Ud5a3YbnIfBKQ7jtnKF1eLbz+mywor5tL29vaUBtbu7O3/DCo9pK99vsevA+2E8Bh9YyzYWNwkqSoaF47XykHATYok6duLHkC9u4LAsrCKk4qdnBODvv/8urDhTDgu9L8ZlUBXWL7/80mpVzwZjmKZBBdbNmzfnobVMdM47DA+mbVBDwg8//HD+a9zNNwLq559/ngdcPIQVkG6VEJiuQU66AywjsIA0BBaQRqeBFZtNY6XPplOgDy'
	image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAAAXNSR0IArs4c6QAA%20AARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA78SURBVHhe7Z09%20iBw5Fsc7nHBChxNeOOGGEzqcsMMJJ3TobEKHFzo0LBgbFjwcGBrMwcAmNixsLyyc%20WVgYWDDjjxuPsfc83l1/3GP0LLTV3fWhKuk9Pf1/dNCl6paqJP1UUpWqavYFgIqB%20AKBqIACoGggAqgYCgKqBAKBqIACoGggAqgYCgKqBAKBqIACoGggAqgYCgKqBAKBq%20IACoGggAqgYCgKqBAKBqIACoGggAqgYCgKqBAKBqIACoGggAqgYCgKqBAKBqrAmw%20WCx2dnZmm6G1t2/f5l+D6jElwJ07d7a3t7mmt3J0dMT/sQLte7v5DvjfwI4AVK5c%20yP24desW/7N8yGfeq96QCTdu3Dg7O+MoasWOANeuXeOync0ODw859O9cXl5ev37d%20/WZra4tDC2eo+Q3IBDp6cFz1YUcALs/ZjGo5B62D1vLvZkb23ZtPbnfu+8HBgftx%20iJm2IAKDAvDyZvh3vQXo070W7FvzFnSZ3+D4+Hh3d5f/uXlQRD9r33daS8fbk5MT%20/kNp1CgANXjul32GAYO61/nHFdSJ57SjDmg0DOA/b3Ag7Fj2QbAhiKNGAXyptx/6%20l8vl2g5DC+0Rdp6iDaFf9uma+32h5pyDhkAHDT8oIhoCU7vOKwbSc+M1YESAQQ0h%20lXr7QYDasEZNbe9ehxFu6ktQ7e95itbTrpPDt9DUV+GggYQONFL0/t+8eZODVqBm%20giRcFbvPxmvAiABDG8JNB4G13f3OwSXhIyQm6Us4aGPu3bvHUayDfxfV//HQ3nEs%20QTxh3+/x48cc2grFEx4zN7UFqjAiwNCGcG2RN84nUpz9h3dhO0qsHlh4xeZTtCGh%20TkTLNvAvxglA+COY2/IwK2i/3G96Em58/kHRUIwIwPk9pB7wH77+hTpRvhIQ8/m8%20s9VvEDrQOLAMHao2mlI6DmzaGP7FaAHCQyJtrW9Q+hz9GrTkg0IgAP/F1wDqRA0t%20cg/90UVCcNAVYeQc1AOqiH7YsPa44QepZAgHxUJbHvrvicuKTfmgEAsCDG1fHb68%20XVd1/GjS4SIhwrOB0ZHTmMT9cW1TSla4tS2D1P40+l0OXjcc/j8EyEBc+xqWN3VV%20+dvoAgvbUd8D5uWoyBuihniveg5SOyE/KQ9dnESf4comOAoIkJqw7z6ofaXDdNhV%20dV8IXh1L6JJvtnk5KvJQ1IYDHKqykvGWQYDUxDX/jrCr6oiIZJXVHjAvRNWGUFQi%20dICDIMAIihdgZN/d/dczcgDg4ehmM3dBlBdia0PDgVX4d5rgLYMAqeFsjs3osPND%20cOhofLSuF+S+E25tBC0OzOdz/pEmeOMgQGo4m2MzOuyyT1iTwmiXyyV/G1cbyIHV%20uUkR1yvywNsHAVLD2Twio90oYn9/f9qaRFXTbRjF7L4QvK4CeIchQFImvBI0OWHD%207+F11glnUnCQVsoukmmvBE1Oo8eis7OeAn9mQv8uly3A3t6ey+iprgRNS9hrV9tZ%20T4HbZUL/LhcpwMXFxdHRkZ+3TJ1sXgF04MqF4GXFFCaAq/rhnSX+aivQA5cNBJgW%20GlqtvamKVwMdxM1NlKKY2tO4W4X6P657PWbCFkjBmMkp+SlDgHDGG1X9Um64rpOp%20JpbnoQwB/OlOalTqOZdSKK6kCF7WTQFbSaNeztFCGpXK4aKCAJMw5u5sIAKXFgSY%20BN+hpNqPzk8RuPIieFk32reS87KEa4rAwQW2gR1lz04sRgBeBupp3GKxCSUmQAAw%20MeG9EJ007nLODwQA+aB+7Oo9PYTgtR0IAAQgExp3eErN6YIAQIbVowGvyAsEAMJw%20AUOAtXDeQAC7cAFDgLVw3kAAu3ABQ4C1cN5AALtwAUOAtXDeQAC7cAFDgLVw3kAA%20o/jnvxMclBcIAMQIJ7oTHJoXCABkaNR+qVtbIQAQIKz9shPdtVcsP7XQv20FlI6e%202k9oF8A/YgDP/zHAxcVF+MIbDTc5aReAMggHARs0Huuk5Ba/AvrW4UFA1c1EoA+N%2051g6lNR+ogABwoMAQbnJK4Bi1tZ7QnDq/1oKEIBo3GSk5G46EHJ6eko1++DgYLXS%20exQ+IrsMAQjKODpuckZOgbamSDmUVy01ux3NWV2MAAQ5sPaGumhwZqkndLzlLBtC%20EU1MSQI4ptWAIwWt+KcztUCtCR2iqbOq82Ulm6i0BnChQYB+cGZZfDoTBADd+LNw%201KsxdvoBAoBuwsu3hKUz0RAAdLM67jJzVR4CJOH4+NifNDTTbQjPRJs5gQYBpid8%20n40nRZO5WCxCzTKccyQHXHIEBxUOBJieRo/ZkaLJbJydzNMqc2IQoGi4DNOUYviS%20LGoy/dFg8rGjizbk8PCQjj+8Og2cEgQoGi7DNKXIUX+NPDwgTOsARzqbhUmQb0lH%20qJwMBCga3yovl0sOmg4XM+EWw7EjMWGKHOPV9an9/X1euCLdmUpOAAIUzXw+d6VI%209YaDJoIGpi5mgoOuHNjb23OBE6boIiTcIvW4dnd3OSiZAxw7BCgaaoa5GKfuN4cD%20Uw66IkxxkqpJkXB0fzctPNqkOAPLUUOA0mmZUUf1hqw4OTnhn/ajMWF49Tkfm1Kk%20f1EnfpCEYe2noxmHXtFwgJhWA44UApTOar95QhqV0rFaNVfpI0M4OZkipGh5xVco%20ZFW2qXpEHB0EsEGj3zwJLfc9ra2a0ayt/Z61aUUcbRpwRBDAMNRfp1oS9md6EnfL%20X7SEfdKi36wedra2tuI0uLi44CggAEhBfxn6P0tw7aFgPBx74UCAupiqy0dHFY6x%20cCBAjYzRgHqG+u/07Q8EAFVjRIA7v77fefBq9u1z+tAXWuQVALRiQYCjn965qu8/%20W3df8DoAWilegNu//K9R++lz+OQtrwaglbIFOHv/iRp7V+mv//vi8uNnXgFAP8oW%204MYP3PnZfXiO2g8iKFuAa9+9dAIc//aBgwAYQtkCuNpPH14GYCAQAFRNwQKcPP/D%201f6dB684CICBFCzA4ZO3ToCbP77jIAAGUrAAfgT8+OWfHATAQAoWwNV++vAyAMMp%20VYDl+V+u9m/ff8lBAAynVAH++R+eAbF/8oaDABhOqQJQvXcCkAkcBMBwihSA+j9+%20ChB951CQmMWzD3uPXhubal6eAJcfP+8+PHe1/5vFOYeC9LjTbsammpcngJ/9TyXx%209A2a/3y4bKcPL5ugPAH86f9bP//OQSALJrud5QngyoA+vAxyMf+eTzxYOvNWmABn%207z8NFcDk0E0Ef+2lf+brpzABwjtgOKgLk0M3KVzm04eXy6ckAcIbIPvfAWOvzASx%20l5klCRDR/BP2ykwQe5lZjABxzT9hr8wEsZeZxQgQ1/wT9spMEHuZWYYA0c0/Ya/M%20BLGXmWUIEN38E/bKTBB7mVmAAGOaf8JYmcle1jCWmUQBAoxp/gljZSZ7WcNYZhIF%20COAn/8Q9/cpYmcnujmzqKShAgJGZPvLv2pDdHdnUU2BcgIi5Q8qR3R3Z1FNgXICR%204weFjMmN8cimngLtAoxswkeOHxQyJjfGI5t6CrQLMKYJN/nsRLdH9OHlvMimngLt%20Aoxpwk0+O9HtEX14OS+yqadAuwD+EhgvD8HLY+nZiW6P4jJkPLKpp0C7ALd+/p2y%20O+6dX/ZKi5DdKdnUU6BdgDHYKy1CdqdkU08BBCgM2Z2STT0FECCSxbMPOw9e5X8p%20d9Kd6kQ29RRAgEio6rvIM89LS7pTncimngKzAoQv0OagSXGj83Txb0IkUY9s6ikw%20K4A/Bzr/PtVTnERqg0iiHtnUU2BWAH8BId0LtEVqg0iiHtnUU2BWgDEXEPogNc/C%20JUofXs6LbOopsDwITorUPAvZKiibegogQAzUrZKaZyFbBWVTTwEEiOHe6aWrB//4%201385KBeyVVA29RRAgBj2Hr129SD/G8pkq6Bs6imAAIN5+oafEr5198XZ+08cmgvZ%20KiibegogwGD8PToi74mQrYKyqacAAgxm+z4PfxfPBG6zlK2CsqmnAAIMQ/w2S9kq%20KJt6CiDAMMRvs5StgrKppwACDMNPApW6zVK2CsqmngIIMIDTdx9d8dMwgIOyI1sF%20ZVNPAQQYgJ9iLfieUNkqKJt6CiDAAKjeu+LPf/3LM+YxGeNxSUulngII0Jfl+V++%208gm+Kj31LNd2ZPVLAQToxeXHz7sPz13Zf7Mw8pjRCGT1SwEE6MXRT3z1l5rAp2/E%20mn8wORCgF37yMzWBHARMAAF64Wo/fXgZWAEC9AICWAUCdGPvNTPAAwG6sfeaGeCB%20AN2MeUcBUA4E6MbVfvrwMjAEBOgmjwDuFfC3fxGbZFEnEKCbPAL4ida41JATCNBN%20ngkwfqhNyXEQSA8E6CbPBJjLj5+dAPThIJAeCKAICJAfCKAICJAfCKAICJAfCKAI%20CJAfCKAICJAfCKAICJAfUwLc+fX93qPXmd9bOiEQID92BPDPLNm6+yLde8GSAgHy%20Y0cAP5Ug3WshUwMB8mNEAH/Pyvb9l4U2/wQEyI8RAY5/++CqDo0BOKhAIEB+jAjg%20H1ty4weZhzZPAgTIjxEB/EML751eclCBQID8GBHAv7Wl6KdWQYD8GBHARtWxsRdl%20AQEUoW0v3F2a5V5Y7AMEUIS2vXCPw7B9hxoEUIS2vdC2PSmAAIrQthfaticFEEAR%202vZC2/akAAIoQtteaNueFEAARWjbC23bkwIIoAhte6Fte1IAAbSweMbz+fTshbbt%20SYEFAU6e/+HKaefBKw4qEP8Maj0VTtv2pMCCAIdP3rpyuvmjhamget7B6DeJly1i%20QQDfdj5++ScHFYjC2qZwkybHggA2yknhXijcpMmBAFpQuBcKN2lyIIAWFO6Fwk2a%20HAigBYV7oXCTJgcCaCHPazgGYSNj27EggMKqE0Ge13AMwuVq6RnbjgUBFFYdG0AA%20UDUQAFQNBABVAwFA1UAAUDUQAFQNBABVAwFA1UAAUDU2LrG3AwHARmq4xA4BQNVA%20AFA1EABUDQQAVQMBQNVAAFA1EABUDQQAVQMBQNVAAFA1EABUDQQAVQMBQNVAAFA1%20EABUDQQAVQMBQNVAAFA1EABUDQQAVQMBQNVAAFA1EABUDQQAVQMBQNVAAFA1EABU%20DQQAVQMBQNVAAFA1EABUDQQAVQMBQNVAAFA1EABUzJcv/wcO2dFLStWamQAAAABJ%20RU5ErkJggg=='
      }
      else if (pubkey == '5a462fa6044b4b8da318528a6987a45e3adf832bd1c64bd6910eacfecdf07541') {
        image = 'https://imgproxy.iris.to/insecure/plain/http://fiatjaf.com/static/favicon.jpg'
      }
      else if (pubkey == '4fecd36ea23ba215c56ec3a5f26b4eed8e01c8d2c5a4700d2222393677f2d39f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://bitcoinmagazine.com/site/images/apple-touch-icon.png'
      }
      else if (pubkey == '71191e1c7ebd072eaa1bd7953a8d85260dc67def8dc8f257ad370148094f64b7') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gae/-a53kN2LOFO9qkdk1vOuBbkp6RtWNk7i__m16P_wrVwO_M7KJCwAAlMrBuQVpBJR-HEGjDCK23l8ZWTbpP26cBzfwfkrugQZrBJT?auto=format&w=1200'
      }
      else if (pubkey == '57a32d47e68851e0a5a392e23a3ca7222e509cd7316dc03268985e4180babe7e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_e3d5b2450e53ec5cd957973fbe38e73da4054e1d46e1406b7f327fbfe4942132.jpg'
      }
      else if (pubkey == '064de2497ce621aee2a5b4b926a08b1ca01bce9da85b0c714e883e119375140c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1596605570047426560/t8SMJEfy.jpg'
      }
      else if (pubkey == '00000000827ffaa94bfea288c3dfce4422c794fbb96625b6b31e9049f729d700') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/124.webp'
      }
      else if (pubkey == 'febe10145a5b63ea549d8cbe51e6890b6431605a96939ff72be4bba6e505650f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1127362587102867458/P_PPdbYZ_400x400.jpg'
      }
      else if (pubkey == '66eb07f016237a012eb569171386900fd7fd6a3e81869341db1eac73c534ebdb') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/6883.png'
      }
      else if (pubkey == '5e926cc5587e3c5283abfa8e457bd13d53bb070e73dc27d46c34c1e99cb70c77') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_32163ae02f1c01eb5ca2a579874b7f0d0d444fa39a6adeb40d9823fbeb36091c.png'
      }
      else if (pubkey == '21792e167867d96254e843d634c66a7b023f9c1279b0beb47c4e1891ad9615c9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://penlight777.com/images/IMG_0768.JPG'
      }
      else if (pubkey == '115e05ed17b23426eb0833db4d642b7e0be34387fba1070cb9f2c0cd53f1c564') {
	image = 'https://pbs.twimg.com/profile_images/1587842667010199552/XF-DWF2M_400x400.jpg'
      }
      else if (pubkey == '09a34a94eea50687758255b3bb4cb2a2b4878215e3b7d01daeb31c6132f62918') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/595582024636702720/kTlyArbE_400x400.jpg'
      }
      else if (pubkey == 'dd5c9743b34c1ca20aecef52a9c3d2edc9657870228010a4cc1182a57ec0ae2b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1421485818837823493/4Yiab0Vv_400x400.jpg'
      }
      else if (pubkey == '1a14d67d46714c5a390489b278ae8ae4b0ac8268ff2026be39af3b2a05633162') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1608054909450215426/QlJR-Ki__400x400.jpg'
      }
      else if (pubkey == '6c851d4e112148f1a6b095381e4c46b3ae15691389b37a4fb788c3e586a64c58') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1761362207/image_400x400.jpg'
      }
      else if (pubkey == '9ea2d0cd0f2a5781536f7286a24ab254a3cb2f14f5d8fa95afb12b58c52be137') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_ab4048309b087c9dbc3b060fd0f65984dfe856c0553f54f4c05fc5f900187033.jpg'
      }
      else if (pubkey == '8d6a0d47a662154036b2bd209a76e678bd5adb1280f07f3ea3a1e1d704a21e16') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/3f6hBYQFgRF28PQ8wbFTsJ.webp'
      }
      else if (pubkey == '6e96dad430b20b248b9e9a6c42c1a0a05f35d89a24e2a2d416e1bb444dd98249') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gcs/files/1821754cd8e0b1b69d411ab637b92b90.gif?auto=format&w=1000'
      }
      else if (pubkey == 'e0a8cbd75ebfe4efbba8a65ff54bb435858404f6dc0ba4a6458a24d7f642d154') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1455796591655555072/RzZSrJMp.jpg'
	image = 'https://void.cat/d/4oSoQJBBRpY12ccEFvhYx5.webp'
      }
      else if (pubkey == 'dab733dab4a9d4bbd34381a11b674159e589ba0c236e1171384eac5fd13a753f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://aheahead.com/perm/icon/ninja_icon.png'
      }
      else if (pubkey == '09c05a547324dc9ff48083409c58d38cb49eed41d9534a5a47b2075b6eeb8cf8') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ul.h3z.jp/jhrfT2cc.png'
      }
      else if (pubkey == '2fcaf6f6b1862dec027290f1680f999e45c9afd85952606df9c56b1c86b140e4') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/WBfLxtYhHz9mY4BCPVmKpn.webp'
      }
      else if (pubkey == '7c71b60798d8e6c4ea420075a4509b92bbd812516c6e7f5bfe1f8e50eb01968c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://co3k.org/images/co3k.jpg'
      }
      else if (pubkey == '59dcb7c9f8569c799c1f3c16869b195bdc2e66072bca2188324c2646bb184a9b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://kenchiro.com/sns-data/pfp_s.jpg'
      }
      else if (pubkey == '6eb17bd1743495154fa64efce7092ac8323c6ecf3c40fa75dd59d1253717d44c') {
        image = 'https://pbs.twimg.com/profile_images/1620544051627032576/v8_btLca_400x400.jpg'
      }
      else if (pubkey == '1828fc4c2c37d09b1f327b0c666beea37ee7a42558aa838e3930060914be26cb') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/28776406/07299bb95b2e4411e4f19363f7e6ecb7?size=200'
      }
      else if (pubkey == '8fb517ae2aea816e00deb483dcc21300a9ade2d3b7df55357c93eccfd2f6a4e5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/18643?v=4'
      }
      else if (pubkey == '9781c62880034bddbf74f63d4ed8d97d6161631baeddb8cf1003b653e47802b6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://kuzugunshi.cabezfactory.net/img/f02.png'
      }
      else if (pubkey == '8faaa1063b85e89be748f28147265cf89c4ddddb30ff1c28233640a865902b17') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1356578081943687172/0MUNad9__400x400.jpg'
      }
      else if (pubkey == '0ca3039a60f9e5a038a5b4bb392e98c48c59e2235f6e47b91a0cd21c3f53bb81') {
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxXNW6kmr_c9b3CduiCXsvfYH8JkZDMy3QQ&usqp=CAU'
      }
      else if (pubkey == '4657dfe8965be8980a93072bcfb5e59a65124406db0f819215ee78ba47934b3e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1452933125743460360/5xkRoFj7_400x400.jpg'
      }
      else if (pubkey == '2aa6d958baf2390d387cec62719c52755d7b9e2dbd6f0378c4a881dcb8c8cada') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://static.wixstatic.com/media/29f72b_b8c0c8ff04ef45c1b226758c613a0470~mv2.jpg/v1/fill/w_348,h_402,al_c,lg_1,q_80,enc_auto/icon.jpg'
      }
      else if (pubkey == '5477d9c9eed4626a16a926cf49966e5440c2de035862e9f703e6ffcd51b4b4e5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://media.manji.dev/icon.png'
      }
      else if (pubkey == '668ceee55475f595ec0e8ef44c64bf9da8d9dd6008ac54dcd24b2501930b960e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://btcapsule.com/damus/btcapsule_icon.gif'
      }
      else if (pubkey == 'a7f72cd8c8c7cf18fa6f44c131e01d5b88c2f47723a56626ef33d6990e6a9f15') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/774.jpg'
      }
      else if (pubkey == '383ec2d4536e95c27b4bf914f323ef6a41661d2e5d82cd2346717fd69143a098') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/GDixizX8bjiZgFdvcpbAZG.webp'
      }
      else if (pubkey == 'b2a0a51cebf0f93dd07b71e21fb500a12672eaaf5736ad8a8b197800eb1a9b38') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoOTcsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg5NywzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
	image = ''
      }
      else if (pubkey == 'f49afc5faa04366916985485c45d2d6af7645a79105681b06ef627eafeb3d571') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.linkpicture.com/q/9DEAFF6A-715F-43D7-9018-2938A8F18458.jpeg'
      }
      else if (pubkey == '8e9d385f641cd1991b519cdcda815882a0678825b32d8261769e59c195a2a761') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://aheahead.sakura.ne.jp/aheahead/perm/icon/natsuko_photo_icon_crop.jpg'
      }
      else if (pubkey == 'f8978eb7b86da8563b2cf208359e2e0ae27817bd616e4181a565a3e27f8e8a50') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1561307455849902080/KhP76V6h_400x400.jpg'
      }
      else if (pubkey == '32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn.jb55.com/img/red-me.jpg'
      }
      else if (pubkey == '17b209d34f8fd7c30fde779eb8c3b0c84f724d021ebe6007a5ba70093b2576da') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/72647502/tyler_400x400.jpg'
      }
      else if (pubkey == 'a0c9894ada7805d4a9415a484eb66bf72f8dcecec414b3e47e2446573a4bd08b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_c5eff1b8c37b49cbcfdfb5afb96342c06397e4a8a346122e9d642633c04a7d07.jpeg'
      }
      else if (pubkey == '7fa56f5d6962ab1e3cd424e758c3002b8665f7b0d8dcee9fe9e288d7751ac194') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/23pdoumyGXx7QniXPsyJih.webp'
        image = 'https://void.cat/d/Mh8J1u64Bo9w8rBfhCVdGC.webp'
	image = 'https://awayuki.net/nostr/habla_draft02_anime2.gif'
      }
      else if (pubkey == '148755e670adb36ebba529ff46b9f3580a499928249dd79a749b2853450c107f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_6167a9d3b1e22cd4fd8110fdb28204729cfc602d8b27533e3b612722c07b5bf4.jpeg'
        image = 'https://nostr.build/i/1157ac8075fea71d087ed51d82ccbbe534edb1b8732448de0af763a5cfdc2eff.jpg'
      }
      else if (pubkey == '8685f2e2e2792d392af9ea147695a0983c98afacea7fff25004bb50d025a117e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/96575492/1a29d227f05f66c68176a6c334128d1d.jpg'
      }
      else if (pubkey == 'c7539f7bcb37decd0848f43223b1ccdbd50f0eb9432aa048e6b45bee0cf5044e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/608754?v=4'
      }
      else if (pubkey == 'b7ab2dc03c22d569cf7c307ea8a59780e89b93c944c62d40bd3f57f5425ae9b0') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://proxy.irismessengers.wtf/insecure/plain/https://nostr.build/i/nostr.build_a701dd3a854c0b85544305e1b9ee4c4100bb0829f6db724e0a30a70bf452b05d.jpg'
	image = 'https://nostrcheck.me/media/public/nostrcheck.me_6242875636227981231693501845.webp'
      }
      else if (pubkey == '50da372151e99214f544191e047ec5ebc4c0bc60ed8dd85430235d2955a2a0c5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://shiopan.net/wp-content/uploads/しおぱんAI.gif'
      }
      else if (pubkey == '30290fa3901b0b49748c1c53ee93f0df670e39a37875f4c74ba98ed2a1d6d0d9') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNjAsMjE3LDM4LDEpOyBzdHJva2U6cmdiYSg2MCwyMTcsMzgsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '2c7cc62a697ea3a7826521f3fd34f0cb273693cbe5e9310f35449f43622a5cdc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://mattn.github.io/assets/image/logo-big.png'
        image = 'https://void.cat/d/7hreyJ9qar2qxwUGBRgnax.webp';
      }
      else if (pubkey == 'e08d742a0ae8ffd9b7ffa84729b0f70647ed73b7fb8d0700f5a175496770bb08') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/418350/a9e1322e-29a7-eb9a-bf8a-81b132f38205.jpeg'
      }
      else if (pubkey == '3589b793b977c4f025175afd792e7c51d26ef683b45cbc66c56c4d14ad53847e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_15df2cf7148465e498aee314788bef9c62dda323bb2359dd3125b2831235adc3.png'
      }
      else if (pubkey == '70b70b0bbfc91d117d33cac1ac7ef17e3ba3d260ccf95296a42ea85ff1a9da5c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.gyazo.com/58b42e52a5abaabc4afb5150e7e532e5.jpg'
      }
      else if (pubkey == 'c58926c4cbe8846b0ecff84de46fcf3840736df2a64dfa8d2f7329acd9ae37bc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1217562595525136385/k_Kynrcu_400x400.jpg'
      }
      else if (pubkey == 'bc6c3f17e385d327e7c255264cc094ba466c2a5cda5c5560a871520593fb73f7') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1229438074683133954/3w-bij80_400x400.jpg'
      }
      else if (pubkey == 'b269aeef3418e121cdedc3480ebd80a3794939abb2e193d3fb1ad1547019ebb6') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTQsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1NCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '2fc29418a41a18753e56eac7953a8c2ffbd0c7118a38d6fa3ae41b9e8bce6b0a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_c22ce0b408cfabf2bd2db8a8b5285e9fea9811fbb96fd04babeb9da7548dfa14.jpeg'
      }
      else if (pubkey == 'b11b658ecd4fe47512c22a279b9ecc989fe9a212fdc5f09b1e0c3aef0e796301') {
        image = 'https://abc'
      }
      else if (pubkey == 'baf8fa8a9b2616c811afe759c324a3c6af7d30f013fc663bb8b3638796d70ab5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gcs/files/b67cbb5b4899bfa0b7b0e1043d71ae98.gif?auto=format&w=1200'
      }
      else if (pubkey == '4523be58d395b1b196a9b8c82b038b6895cb02b683d0c253a955068dba1facd0') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1125299725828272129/n8NDo1LN_400x400.png'
      }
      else if (pubkey == 'a6ecbcd34b97994c640c6021ed95b8e4a65ce03e7efcac62390fb148976ca69c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1612229972932059137/9aFkW9al_400x400.jpg'
      }
      else if (pubkey == '33411920b26692cfe766e3f045507c1349c0bb8ead31781ac5efa77bd7c12082') {
        image = 'https://i.imgur.com/BFWTdcl.gif'
      }
      else if (pubkey == 'cfa3ea283640f21905c928267fee82e66260087de79db1fc0702bb5a9ad915e4') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://upload.wikimedia.org/wikipedia/commons/6/62/BallTM.jpg'
      }
      else if (pubkey == '5dfb2544a36bd351699c54f20356d13e861ada567e24caa177ea89854d508eb5') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoODcsMjE3LDM4LDEpOyBzdHJva2U6cmdiYSg4NywyMTcsMzgsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == 'd1f38e168250f41bf0bb394d8ca37bd4027db7bf52dcd35b75e0b9da70be94c5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://user-images.githubusercontent.com/62370527/218466623-84ac663e-cacb-4a74-a892-bbad3214b4b9.png'
      }
      else if (pubkey == '8ea485266b2285463b13bf835907161c22bb3da1e652b443db14f9cee6720a43') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://j76hg02i3h904.s3.amazonaws.com/3508D355-4CD0-4219-B5D2-A8BD56521A69.jpeg'
      }
      else if (pubkey == 'b3e43e8cc7e6dff23a33d9213a3e912d895b1c3e4250240e0c99dbefe3068b5f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn.discordapp.com/attachments/577443131612594191/1072151886389583943/kojiro_512x512.jpg'
      }
      else if (pubkey == 'ca4ef0d885f25c5b1aa6d424f591b1b7a7d37af1cf58eaaa21a6e0d584e65287') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostrilandia.com/img2/nostrilandia-800x800.jpg'
      }
      else if (pubkey == '00000000aab8f17f1d333d39533f602eee1b534f914322973906ef9059901700') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_f06e44649809ddada0fd246f34e04349b1584f166171487a9d5f5d05e250cec3.png'
      }
      else if (pubkey == 'c4eabae1be3cf657bc1855ee05e69de9f059cb7a059227168b80b89761cbc4e0') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTg3LDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTg3LDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '4147451e52d3565b5067966bfcc8b134ece65201de7ad7d9c33e5238596a7645') {
        image = 'https://pbs.twimg.com/media/Fn3A5y8aAAURyxf.jpg'
      }
      else if (pubkey == '35e50bd6af2c2258d5e5d948262758ed1d76742a8eb758b01b437f8861702413') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://anya.jp/Me.jpg'
      }
      else if (pubkey == '12d2c9f0c9eb8f8792b8ef8b509121859dd90a3779f1af308fba60bcb1d9e107') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://kunigaku.github.io/public/news_icon.png'
      }
      else if (pubkey == '13883e40ec1b1940a655fa776ad5d337656a68767968598388148b977e56550f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pics-nostrich.friendship.tw/1e15816a17487a5bf1f350236b97d107c2a81607fa263931d4558ba7fe0c0eda.jpg'
      }
      else if (pubkey == 'cb63a728ab63a029736c161bc8225e8009c702766812b3460a31f2335b1508e6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1355422252062306305/wUynMfkc_400x400.jpg'
      }
      else if (pubkey == 'a0e44c713c6ac7a7336fdfd0e6430b19a0909bf8a10e33de1a04b7442275c457') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cuconoki.net/public/icon.jpg'
      }
      else if (pubkey == '9f77d173dcd94cc4243d36883b157f8c3283051dc6bd237b1c5ac400fb90cecb') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/SUGwzKgvoyY87HhTNstPYY.webp'
      }
      else if (pubkey == 'b4f62363fb11624086fb6f09fa3f4c7ada1cf3dcc01981bef038443367047867') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/806619769461870592/UcOYX9hs_400x400.jpg'
      }
      else if (pubkey == '2c78dc1bff772c601ac6332a63d2235308515710035e791cd629b482cf300dc0') {
        image = 'https://pbs.twimg.com/profile_images/1623067613726408709/mP2Y59a5_400x400.jpg'
      }
      else if (pubkey == 'f4e8afb742704ebb71c248b09229921fc7c970cb1067fffe30f389d8d8639bdb') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/6yfv7umeWLhJatSPCXWBBq.webp'
      }
      else if (pubkey == '9f376635bfcc2021daa2ddf5b93420e0a8a468ba35ccf613587948697bc42976') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_75f0c3bd5993031c8895d0dbce9ebd200350c1476e1c14659bc23253078646b7.gif'
      }
      else if (pubkey == '9573188bb1c4b64403f48c12fe00a344396cc8b622b997c5bc2c9da55bb53a4c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.postimg.cc/Bnf61QtB/13-E1545-D-365-E-4-BE3-93-C1-EEEA177-C1-C2-C.png'
      }
      else if (pubkey == '43dde971bf63a4cbd5690349efec7c1f5896f2ab3c338aba83cf99ffd7e73ed6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://lucky-art.net/wp-content/uploads/2023/02/pinkonofuku.gif'
      }
      else if (pubkey == 'e599313380fc2858cc30c1ea70573f706b9d6143c115bc84c5260f091807de5f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1430376346694258691/Q7zJEUAh_400x400.jpg'
      }
      else if (pubkey == 'a7f67c4a74c5fc8572f29648349464407f451f53257fea71c2143b348c5f03a2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.ibb.co/mH4g33k/SNS.png'
      }
      else if (pubkey == 'c7eda660a6bc8270530e82b4a7712acdea2e31dc0a56f8dc955ac009efd97c86') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://shawnyeager.com/assets/img/glitch.gif'
      }
      else if (pubkey == 'f9cb12d3c14e7316b564120495f315863b541ce464c12cbfb09018d1e6981885') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1306898059750563840/hrBDpuE3_400x400.jpg'
	image = 'https://void.cat/d/ChHCGP3mMZj968JqTW9GUW.webp'
      }
      else if (pubkey == 'bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/3063i.gif'
      }
      else if (pubkey == 'f90ba7ca5f076934aeb44991074ffb54026a755cc9306a243d792865b8973a0d') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDkwLDEpOyBzdHJva2U6cmdiYSgyMTcsMzgsOTAsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'adbee4be9267070867972248e1d86c1de766f9a7d01a3a6764db6fd4372af499') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://3.bp.blogspot.com/-tBPoVdyerSk/Ur1HTs7FDWI/AAAAAAAAceA/z7v5_TGCeVk/s800/dog_beagle.png'
      }
      else if (pubkey == 'fe49cfb430d288a8e6e599fa1be3a81114d20ab84f3e7a9e848d284501436b4e') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDEyOCwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDEyOCwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '0342cb9fc8f30a1e67d2a4fb1160d2127367daadf4053194daf087ae62cf035c') {
        image = 'https://imgproxy.iris.to/insecure/plain/http://hoku.github.io/GithubImages/buta.png'
      }
      else if (pubkey == '6b6e19ce47a917cbe13a67eeb4053a9b301e78ec991413e7554953088ed62d3b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1614562193147842563/mfd80R_H.jpg'
	image = 'https://nostr.build/i/3806b00b13ab9e1d1f0bfa2251b5bf819e47975972f8d3604a0df49e7dd26ded.jpg'
//	image = 'https://image.nostr.build/60b815bf3035327eea27dd43826c57b4b123d257b73b6b73e0292cc73213f0e0.gif'
      }
      else if (pubkey == '1ec007290d7bf778dbc41d52ddb0ff37fab0921437c913188aacc654fe7be633') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/CJ5EFJVuDxLThhBoSiQWYu.webp'
      }
      else if (pubkey == '7466d86eee70e96bf60a7be57e957ff865a3f010f05556b05220caa5c147e7fe') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDc0LDEpOyBzdHJva2U6cmdiYSgyMTcsMzgsNzQsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      }
      else if (pubkey == '728d2922504ddd9978b7d74e0bf093981e6251746b7fdc969b333641ac9b369a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://favity.dev/img/avator.png'
      }
      else if (pubkey == '6af9411d742c74611e149d19037e7a2ba4d44bbceb429b209c451902b6740bb8') {
        image = 'https://i.imgur.com/tH7x5Vr.png'
      }
      else if (pubkey == '7b1fde82a8f9d5e89e3e441cfe3a91c4e7a59d3eadc21c47e7d801d08c396b8d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.wada-denki.co.jp/bunguho/zshoplogo132.jpg'
      }
      else if (pubkey == '1bb2de6aece13ce37bda75dd41cf3a1caafb55f8b35ac9b4bd63582fc8b9a66b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/AJrNt3VCtY81YFrxp7Q33B.webp'
      }
      else if (pubkey == '2d417bce8c10883803bc427703e3c4c024465c88e7063ed68f9dfeecf56911ac') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1622377449941250049/4oaXywYL.jpg'
	image = 'https://nostr.build/i/nostr.build_eee59b4db55bc81004ad4c3ca4025565e7990ad3c8c33f395f725631737f6490.jpg'
	image = 'https://media.discordapp.net/attachments/1078693696712736860/1137648827168473199/97cce7198c2c74e6d4d2365a0441511d6b3b5fa4e9e0ddd41b8f00d26a2e37d4.png?width=1212&height=1212'
      }
      else if (pubkey == 'f1db37389f268a87afe95ab0f4f1e6302ca0cc21cd36294323a9352e3374985a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://media.manji.dev/icon.png'
      }
      else if (pubkey == '3f751c3eeb89898a7bc4946575279e687f27f043bfdcf7fc082f1c21381a49ca') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_70e3dea0658d66418b80d8ceed22041b963bcb2d834631cc2f69575900151450.png'
      }
      else if (pubkey == 'cf4b205ef25030a469118c36f6872ef6b00cdd1a616fa1ebe38abdd56cd4e9da') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/98054437?s=200&v=4'
      }
      else if (pubkey == 'c369f870a43720cce1c24e617f69614d63fbadf6529af662bc88b26b1444d385') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_86e2ba42377c9f040b98b6a2e3b506f3b0f0ab5c24e1f748b76319e635a5a4f7.jpeg'
      }
      else if (pubkey == '7e761304b2750faee86ce1281a3ce7d24555ff53d721de7bb52172009ef01e1f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://kazuyukihidaka.com/4nostr/me4.jpg'
      }
      else if (pubkey == '9a00ce174a1dcad4cc4925a475a7b89eedbf0e2aa2d03ad904fc64cdaef946fc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nixeneko.info/media/30494669-0559-4b4f-967f-4e3de4d24ff8/20221119_icon_small_3.jpg'
      }
      else if (pubkey == '73491509b8e2d80840873b5a13ba98a5d1ac3a16c9292e106b1f2eda31152c52') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1270911698/640_400x400.png'
      }
      else if (pubkey == '7bde5296d6cdd22ac6eb4db890277df032b1e02b2deaecc0561ce2842363f099') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_0a41c1203a940ac26b1f78ca9b7d2629a40a1efe62bce11b47b3abcbd43c76a2.jpeg'
      }
      else if (pubkey == '7b733b726a87c1f1d23b976e9198aa4aab30df6125448b1a4446c2e8dd51bf27') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1445852882457153541/X59L4DdZ.jpg'
      }
      else if (pubkey == '3809ec36d247b6d212a933fd121e52f46fed0f19e85125c11e8dcf6e96cc2f2b') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDc5LDEpOyBzdHJva2U6cmdiYSgzOCwyMTcsNzksMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '67c6d1a1d49b40929d977e90c553c399bff4311251b473c27d15392efca8f4aa') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://oran.ski/files/104ed3b2-f62f-48a1-b863-7a61d8380609'
      }
      else if (pubkey == '9bf6feb776f574e65e3426910459bec47ad888251c32b18e05f77f9914152c9c') {
        image = 'https://i.imgur.com/KhoEXNz.png'
      }
      else if (pubkey == 'be4977e502ee030151b7391caf0a0e44ef77649f89b25a537434eabf20d973bd') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/VxKjWWKGRqy3pGAhuPTfy9.webp'
      }
      else if (pubkey == '8721cdf007e798f80549a4bf174b973dc388e01952f0a952f5473c2cf84a7f60') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://susumuota.github.io/images/tw_prof.png'
      }
      else if (pubkey == 'df570e700a8df0b2d04ab32959ba967f997b01d561b0a4765daf5332d2bee679') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/5LShLzKs9XdwHtYVAVDRRz.webp'
      }
      else if (pubkey == 'c174ffa8b46b8333a1ab1d1245a5570fcb1c59d4aa50f0a965a6a6527d3390b3') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_cb58b35d553ced965979cab880b4d9d8e394f9962e634ba271a2626e0a848926.jpeg'
      }
      else if (pubkey == '58097a38fbda9883f0ae18e8d6b838d0c3a7149ecd7fe6626abe205376b7ae8a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.gravatar.com/avatar/141b1425813da305f6d8194346318cb0'
      }
      else if (pubkey == '5a7fc14bcdf19eec2bc7663e95f528cfcf7adcb08f518947e46f3c7ec4b3f97f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1470813139419549698/8hF4oULn_400x400.jpg'
      }
      else if (pubkey == '344de8044c5e889fa2bf3aa9d407fdb588c3df4abd250f9400f22e6fe0752bdc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1625917494384009217/1vhTulHY_400x400.jpg'
      }
      else if (pubkey == '61b02fe63c5c2dcd932584b370850ecf32107b090545503b23677e130e99b4af') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/552204762/robot01s_400x400.jpg'
      }
      else if (pubkey == '2888961a564e080dfe35ad8fc6517b920d2fcd2b7830c73f7c3f9f2abae90ea9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.tatapa.org/~takuo/image/arm_watch_square.png'
      }
      else if (pubkey == '0ee84a5fea306f8cb81b5bab01630d0a1ece217774462279816cfcc1725f6156') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1585892893901799426/OMJfDvsD_400x400.jpg'
      }
      else if (pubkey == 'eb954287860ba5409a34f680988df61dfdccf83a4ee0ff9c6a635887c04881f6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.hyponex.co.jp/plantia/wp/wp-content/uploads/2018/06/MV-5.jpg'
      }
      else if (pubkey == 'b07a412d3515958f23fee8e7b45c03b1b416095bc55a3578954467ed4bcef842') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1355141531263492100/zkAPFmxC_400x400.jpg'
      }
      else if (pubkey == '4b56eefb3d47e059554772224654c11e081d4abe76ecd4b5791972a4d8aa3ea9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://dl.openseauserdata.com/cache/originImage/files/9a41b261b7e7cab272fe9cb460ab22d6.png'
      }
      else if (pubkey == '83d52b4363d2d1bc5a098de7be67c120bfb7c0cee8efefd8eb6e42372af24689') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/1297512?v=4'
      }
      else if (pubkey == '1f25ce2fe11194fa0c4584dd10a71d2bb0d3459c7000c7f7e6df7db61f1f4d9a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://blog.rujuu.com/wp-content/uploads/2023/02/image0-scaled-e1676052189310.jpg'
      }
      else if (pubkey == 'cecd2766a5577ed33e998d4e043b0794ee3d0fcc7474efcd3b7d2cbc82cdc2be') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://hitoxu.com/.well-known/nostr_profile_picture.jpg'
      }
      else if (pubkey == '41aec21af79710bd51d765f169b5ecd74d251fb8704f0429b77b048694e36516') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1401917758061768704/0g18yUVY_400x400.png'
      }
      else if (pubkey == '4501dc25e75b4f5937b7ac0b1bb09798ced8050b92175312244bbc86f70d2870') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1401917758061768704/0g18yUVY_400x400.png'
      }
      else if (pubkey == 'ec8f72ff2937c197cb0d032dae27bae073ae6a4e1bd2a8e2ef1578636b3595cb') {
        image = 'https://i.imgur.com/yu9Jla1.gif'
      }
      else if (pubkey == 'de960c1a03559cbee17e720f6350e1f02d057c13561d95e29011b3229fc4648a') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTAzLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTAzLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '384b684f115a001d5519944100e81f25699d08676a6caa5e43bfc0338046aace') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ocean-alliance.org/oceanalliance_circle_logo.png'
      }
      else if (pubkey == 'cbcb0e0b602ec3a9adfc6956bfbe3e2bc12379ee13bf8505ce45f1c831d2e52a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_76f8e26c638989d29473f811e0c7170b7452ddac12e7405463b578af8600d91c.jpg'
      }
      else if (pubkey == '64c66c231ea1c25ebd66b14fe4a0b1b39a6928d6824ad43e035f54aa667bc650') {
        image = 'https://i.imgur.com/nhJ2vCo.jpg'
	image = 'https://i.imgur.com/SsNCSLd.png'
      }
      else if (pubkey == '93ab9382fa66c807cd4bb702cf3be9e52f42ff9629db84e5a97c7b3bd336a4ac') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://heguro.com/public/nostr/heguro-icon-20230206.jpg'
      }
      else if (pubkey == 'faa996088958171e9454114bbb8507891dd66961792eaadf838c32abc9743abc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://tamiyatechtest.com/img/myprof.jpg'
      }
      else if (pubkey == 'c925d2c6045ed93fdde401c3b3492ba9d8a4691a799d3888f719b7df70e54b17') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE4MCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE4MCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'f8838597697d322692878c6bd970a910291bcc007b85cab6ee16ba057ad3e77a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_6463c3ea8e2cb222f5d588e1520a2543a785e978675649c4e58d41a33535a6d4.jpg'
      }
      else if (pubkey == '56bdb9fc8f1e5c56262bed407c7700d6519bae306a51b2c8e9184a5ae0c2323a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_9971bb11758956731a30e32236724fe444c8140f364ec91ac053411dd2e4a555.jpeg'
      }
      else if (pubkey == '4362a5d1ffc0d180ae4d68673cb2461c62e6b86041f82cc021c529e2e1795854') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMTE3LDIxNywxKTsgc3Ryb2tlOnJnYmEoMzgsMTE3LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'deefa61354d45f0c0bf2e2bb0007b42e2b0bc294f28003b949f16c3e51a3f0e3') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE4OSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE4OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
      }
      else if (pubkey == '46a644244709ef0d65812ede73a362f4f533d783557d64142355ec8617a28277') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDE3NywzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDE3NywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'e0f50ea1bc976bdaaafa6881aaa3b062edbeccf52cbb0cffae27abec2e4613a2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_4ea336bb97ff8fc760502ea69b5cfb74e13fe9852bef7a4b179540f759388a93.jpeg'
      }
      else if (pubkey == '3a9b08d3a22a854a9f40817028e1daef257b8d26057cfccc2fad33cf767ae423') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.postimg.cc/pd7W00tX/icon.png'
      }
      else if (pubkey == 'd87c931dc0b4b99f0d1116fea4a0702068985f078db0d665d781566e8d253f38') {
        image = 'https://abc'
      }
      else if (pubkey == '85deaab77004fe9adba86ef4b6b9bc84ca66cc1de8e09aebb166f88f9da62b00') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTIzLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTIzLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'c58661ec0dd7ca1dc546cbd3b0ca1efd5d89631189b426f990813a50ce962d01') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTQyLDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTQyLDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '36c09d960f2189d68a577e03e4413e4988f3251d02a380943e4cf39d63371fcc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.floppy.media/de3217a4ad02fdd17d2e1491cebef234.jpeg'
      }
      else if (pubkey == 'd4ecac0b10308aec48ab2c5a9147711b2a91e3910a6b78163426f6400387cb3d') {
        image = 'https://pbs.twimg.com/profile_images/1620958195257851904/owDKzyvU_400x400.jpg'
      }
      else if (pubkey == '05574cb3414cc891ccd3fdfe2806d87671f07f7671e77ab100237ec6d84f9be9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.gravatar.com/avatar/0f9b5e659331f7b6070db0c8584c9730'
      }
      else if (pubkey == '14303af86e61de81f7413337d26a0afd88d505b61e1358284622c949723e8056') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTkyLDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTkyLDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '88ac0e0b5b1051fe3b6cc2ad5cf671f6c657fa0e002402d5863a9ad5df0b0464') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDEwMywxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDEwMywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '97c3b6cf1180d8dce7b493dde847a14f12fc064894cf5e0a9950a6ee4961790c') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDIwMiwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDIwMiwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'cf6df94733fef0597bf35a0b4cfebef544651a9da03a0b9bc710d9ea18d66773') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2MCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2MCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '6d61a0736f94da3a7af9a5b6d1f8cbe1ba955953381c05a9562f10b752fb175e') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoOTQsMjE3LDM4LDEpOyBzdHJva2U6cmdiYSg5NCwyMTcsMzgsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.gravatar.com/avatar/19606b92a428ca0fed7fe5291bcfd865'
      }
      else if (pubkey == '7cc328a08ddb2afdf9f9be77beff4c83489ff979721827d628a542f32a247c0e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://rogue.earth/.well-known/th3administrator1.jpg'
      }
      else if (pubkey == '4728f1fbcfda37fb5974af887e9ef74d7762561c7dc48b7f5aa19faa9f8ff91c') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDU3LDEpOyBzdHJva2U6cmdiYSgzOCwyMTcsNTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '2ebf25ea9042fa2548e065c6d172f2b2e41b6308893df70bb7584bb2c0e2bec6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_9ad3ff8b85fa5e421070c40ca5a77b530830d8d8a92225b8e10525cffaac6ee3.webp'
      }
      else if (pubkey == 'ea13369f0a5e38b267ed9cebb61b1127d64bf60a9f6794458ca1ab923b4f1b10') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMmSMTbX8PP1KV0ufrHwu-apIJh75uMYH6HVb7dD4VRqjhLl7XPIocBqIwrIP-QU4meamE2ygFy7Wqf22dSZQJTGUkgldId1N45Wj_XvCiFeb5lg-etecU7W0PP_Z_HYYz5379aj_Ud0vn2xZPxwCtwuKJ3Fp4ALHiXBPX_rfyVdkV/s220/BD53B340-736B-4CB9-895A-B664E4A482DC.png'
      }
      else if (pubkey == '73b6211dfc7e6b042590891c0ab19878900b98ea38db9edd27ac063986eabe78') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_59d3476c68160709b1c69b1ef9b03cee45168770911448fb2f6de35e67a2a09d.png'
      }
      else if (pubkey == '5826587114786c62dbf9fd8bc21d0797697e5b73186d6a21100c10f55e20f150') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://media.mstdn.jp/accounts/avatars/000/002/396/original/154812fdb033723f.gif'
      }
      else if (pubkey == 'b3cb5743f2faa215a73d3d9df9ae727c3cedd414e2942c3857caa425698998cc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1508632587631165440/gdm7aQNl_400x400.jpg'
      }
      else if (pubkey == '9bebd27d8d2f2f7465e9c8851c81313dae6a3ecc5d64943109df3420e529eeb9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://1.gravatar.com/avatar/4a243a099ee4ea0c62e81b0d279825e6'
      }
      else if (pubkey == 'b80d462f02b813543759fa51860c3a4edaabbd057deb00378d6ae9abba3ba160') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1110270743/cat_400x400.jpg'
      }
      else if (pubkey == '7eb8090a89bd173ae612269827fcdd6045c4d66f1c55d38a3ccec51689f116fc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_411508c43dd7d4071488b03989faa073fc79699ef9db2ea4e829b4814eda9ef0.jpeg'
      }
      else if (pubkey == '2104c19559de976ac90aad85e55de02e74d11bd24596e18bc8ff97a89db06dcc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://gembox.pro/nostr/nostr_Gemicon_500.png'
      }
      else if (pubkey == 'e7d668fa27a97ed6e4c911828eeeef615b18f84d6ff60cbe2cee420400b03847') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://plusd.in/avatar/myPhoto-extreme.jpg'
      }
      else if (pubkey == 'b7c81f2194e87f5ebd2419532f3edbcbc946368240e0db3ddc9a5b5a072c96f1') {
        image = 'https://pbs.twimg.com/profile_images/1591957941569085442/zOu5uxf0_400x400.jpg'
      }
      else if (pubkey == 'a1cba65ee2744d2c2ad3797c6e1fd43764a8b77e54b0c4c34ede1343b960c048') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/APEFyi4mDmSSD6k5ZRiscS.webp'
      }
      else if (pubkey == '48adaf0d30ac7ff5adf03c6830e097e8c9fcb7437f32714625a5291c88cf2466') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_1bb1b06651b80abe6bf6fa5c7c3b267fd5a214ccea11bf2242b5092bcda805c2.jpeg'
      }
      else if (pubkey == '1e0da54fdcb611d77fd1bd1deb828bba594596b147f6ce3a997d48bd40746dc3') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/PvxqTHobUfbwsXqxAqxmas.webp'
      }
      else if (pubkey == '9a0647607b07b3511ecf923165ceae4a210c337dd07d2a6c6a85832f24c54014') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://dl.openseauserdata.com/cache/originImage/files/e6504b4cab525d7cbbe8ce0c8934e609.png'
      }
      else if (pubkey == '389ab4fc1db804be65942224f3b08ab596c17ae4a746b6a791b67f7c82f0a70f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1629121191159156736/yDLoc_a6_400x400.jpg'
      }
      else if (pubkey == '946572f6d189df078aefb2d35899962a5e53a1c3da83e7d96778073652741376') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1623671358805925890/RjcrXc6y.jpg'
      }
      else if (pubkey == '8c59239319637f97e007dad0d681e65ce35b1ace333b629e2d33f9465c132608') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://penpenpng.github.io/static/icon.jpg'
      }
      else if (pubkey == '3e1691aa75beb6aff2887e677b10f89a5ab9f71e7e3c54800eb6ab96d3afd9a7') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://sotalive.net/img/pota-avator.jpg'
      }
      else if (pubkey == 'ff62152d8b6d6cb6c33c2459b168818b9949c4ac22359a240f4e322222195277') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE2LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMjE2LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '6a3cdfe891cddc33228a52cd7b27eca17e630569c93c24d70dc1cc01ce45881f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://gh.caffeline.com/asset/cltIcoTrim.png'
      }
      else if (pubkey == 'f6b1cec1278c56f33a168846c056e7df243eb52b592c09a76378184be169e20e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/434227?v=4'
      }
      else if (pubkey == '3bae7ca582d82c9ffcee7b81b81de907ba40b641d7c842f353676c17bbbcb663') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/NfkZXnKPNT9bRPZxZgromG.webp'
      }
      else if (pubkey == '0bdcf0019e79d159bd822b61eac4dd018f6f7d3c66d54bf99ddbcd519fb34f96') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ocha.one/icon_400x400.jpg'
      }
      else if (pubkey == '04928f48607819f506d192b5907d5775593582573224ff393a16bfc8a6607793') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://storage.googleapis.com/xen_nippon_nostr/avatar.jpg'
      }
      else if (pubkey == 'e3ca4c6dcbc6e76c34c40fa9e8a31c6c7b7fc2448b37467a0b2b79a3856e40b6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://takagrow.com/images/takakun_v2.png'
      }
      else if (pubkey == 'bb2c22e5236cf65106353b0be3d6c92e64c7b758989976938e3a9a47807b689a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.msng.info/msng.png'
      }
      else if (pubkey == '1a35b54ef7752af54cacbeedf0f349e320f0a2ee50142883134c3ee31879ce71') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://dl.openseauserdata.com/cache/originImage/files/84555870b442dbc1e4b1f01798cacff8.jpg'
      }
      else if (pubkey == 'd87c931dc0b4b99f0d1116fea4a0702068985f078db0d665d781566e8d253f38') {
        image = 'https://abc'
      }
      else if (pubkey == 'a42f891155b0b5b1aa0f74ce6edf7d6def5f343c3dcd3a133c36e1573185c81b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://butsuyoku.life/nostr/icon.jpg'
      }
      else if (pubkey == '239ac49fe07cc9ba299468c3070b1d233ad1111344550c1644060a7ce5bcddfa') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://proxy.irismessengers.wtf/insecure/plain/https://nostr.build/i/nostr.build_ab49a3ffd7cecb492113925647c5ba95788ce2cded5380cb8797f337190b0312.png'
      }
      else if (pubkey == '5da0b4080afbcf6f2ee6ee0bcebd9afc56cf2fda3aabd83f92384d113c8cde63') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1330012997/62094200-d39b-4f74-8a23-af5c7585dbcd_400x400.png'
      }
      else if (pubkey == '1fccb71030f072e64ae78c46a51d83fc7ed9018ce6aec14ab6217d942770c6e6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1705506045/b_400x400.jpg'
      }
      else if (pubkey == '7361ca9132d428cb62cb4995ff10ab6046986dc1a532a44a860ab5a4252fce6d') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_852276b6cefd2e683a076a17cd53cc4ab787562ae8788035b5e35447cfaf612a.jpeg'
      }
      else if (pubkey == 'e9fa79c94723d815f6a9660ca15e8fa63f3b459c6cfd6d285c9eb3b669ead84a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1547394799552327681/Z5xF77J0_400x400.jpg'
      }
      else if (pubkey == '6d3ba8545233feda8c328de23f603f3d068ab7f713bb76870feac4a3515bba42') {
        image = 'https://abc'
      }
      else if (pubkey == '48bdb71d250220dc3f495d906eacd53e68913bd38fac9413f53adf1018e24e46') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://utubo.github.io/.well-known/avatar.png'
      }
      else if (pubkey == 'd87c931dc0b4b99f0d1116fea4a0702068985f078db0d665d781566e8d253f38') {
        image = 'https://abc'
      }
      else if (pubkey == 'd1b621478707667109f6933707e5c4bf09fa0bafdea45a93ec24a9c918f23018') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.caffeine.page/icon.png'
      }
      else if (pubkey == '3e3a8a4245aa0822c050c42de0b17d0fe30d447cea0e6087e55b678851ed0373') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://sksksketch.net/wp-content/themes/sksksketch2021/images/sksksketch-author-icon-qt.webp'
      }
      else if (pubkey == '2d5b6404df532de082d9e77f7f4257a6f43fb79bb9de8dd3ac7df5e6d4b500b0') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://us-southeast-1.linodeobjects.com/dufflepud/uploads/910d2d0c-b2f7-4276-9a7d-1942497f4e7e.jpg'
      }
      else if (pubkey == 'd753a438e1086e9fabcb2e6b982fdc484752ab0f1de7a5abe343dbeb81fad709') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gcs/files/5a0029c9d0a2d7174937206933b4babd.png?auto=format&w=3840'
      }
      else if (pubkey == '681fd1284c934113b98c8e68d428a60fc0db75a8af19d9868312ac7f7d0c80d8') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/Whp5R9cuQGFtiY72ZahJH8.webp'
      }
      else if (pubkey == '379a66eabb288e65b30b324a690c5ccc61b54893920820d94f21a39219d04f18') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/458817302956216320/y9dxGDjD_400x400.png'
      }
      else if (pubkey == 'a22a2372ed6e77d2391d4392be07547b9e8ba38394cae680219781d5061a8c67') {
        image = 'https://i.imgur.com/GNYlrYW.jpg'
      }
      else if (pubkey == '16d859c42eeb2139e96d0b343c3f2b9b49f7b7c64e117ab683d1652e3b2cb251') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE1MCwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE1MCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'eb119234c467ac9d2ffea5b7284f3a74bd04287a12cfd58a22d19626434cddf2') {
        image = 'https://void.cat/d/2627RwhfWjsFBzmpSqZDNC.webp'
	image = 'https://nostr.build/i/0549fbcd7dfd6fa9a74579b7077f5a68eab73e112cf888463d4bd32fd4d3f252.jpg'
	image = 'https://nostr.build/i/0785e2c1234d0c316bd26d03d06559f9f0e8dee1b9d8c77f24bc1a6f96e52803.jpg'
	image = 'https://cdn.nostr.build/i/9f5f40d025c8d9ad8139b5775a3716bace3bfd7ae743d295af59039c6f93f4d6.jpg'
      }
      else if (pubkey == '5e0708079b7127b584ef197b9104ad13895dbfc535bbcc618961bd54a328e997') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ihasq.com/image.webp'
      }
      else if (pubkey == '6368314d1b0b5b19943c6e48a3c93bfd6b870ad999821b4478d294f6e89c069c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1340824991974100992/Jb79Cuc9_400x400.jpg'
      }
      else if (pubkey == 'd138bc5cf4fe9adfbe61c06d49f8e24ecac5dee1992314fc0d548a73003ed984') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://corestudio.jp/about/img/facemanga.jpg'
      }
      else if (pubkey == '06254fc786d0478b879a439c97ae4543fb2ed98f1484c2d3feb5c8c9443763a7') {
        image = 'https://pbs.twimg.com/profile_images/1621979587935870976/QHNvTxQH_400x400.jpg'
      }
      else if (pubkey == '89e0fc458db26860db5e70646f809a626e712b319c54eb1447b726a563cea9f1') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://fumi.day/img/00avatar.jpg'
      }
      else if (pubkey == '131243188e54271b14d6f7290fcd9b84068f16d6de9c9851cb44bce901e1ed23') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/108892217/fdfbc1f0e066744941a0eec92d838662.png?size=300'
      }
      else if (pubkey == '0a2f19dc1a185792c3b0376f1d7f9971295e8932966c397935a5dddd1451a25a') {
        image = 'https://drive.google.com/uc?id=1E3JrJ2MSGBK_7YfIR-gF8XJMqV2FVAsN&export=download'
	image = ''
      }
      else if (pubkey == '2a825cda6197a195929c5e62442bc5293cafb50132659a485a69804db9d0545e') {
        image = 'https://innocent40life.site/wp-content/uploads/2022/08/screenshot-opensea.io-2022.11.22-19_24_29.png'
      }
      else if (pubkey == 'dabcb1a8b34edbe369df3a8f90ee1fd508bdc7b08ff6caf6a144253118792541') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/54520258/903cf1d261fe771a639418aa11ed8b12.jpg?size=400'
      }
      else if (pubkey == 'f2b54f7375fb1bcbbeec188f21f3631a3dd49ff12ea92fcdb10e78b662267427') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gcs/files/6d6f303dcec129288ede01f10b417c15.jpg?w=500&auto=format'
      }
      else if (pubkey == '5992806688c9abf3bd3d7ea83614b15353f6c99e36f88d92e75333260c090583') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1611766556673081352/9fefDsfK_400x400.jpg'
      }
      else if (pubkey == '37564fc93a75918c6502866eefd88061561cd0d9d5cd9536f9482fade6dc1adc') {
        image = 'https://yoshiki-kato.imgix.net/shared/img/yoshiki_600x600.png'
      }
      else if (pubkey == '569e1f5dbd3f540ae2f2e179cec5bb13e43a539907e02babc0e18a6dcdcf10c2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.postimg.cc/pXLhwVd1/mfer.jpg'
      }
      else if (pubkey == '77d38d09d0428e76f707f7852c407f4c6691cbf263566e25ef3359e0d4c6d7df') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_e8832a6809a86565d73b9a60e20e8fa448bac6708fb0531df8b8e8096edd09f5.jpeg'
      }
      else if (pubkey == '3004d45a0ab6352c61a62586a57c50f11591416c29db1143367a4f0623b491ca') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1393044641772150786/MBzvgHOA_400x400.jpg'
      }
      else if (pubkey == '3f770d65d3a764a9c5cb503ae123e62ec7598ad035d836e2a810f3877a745b24') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.ibb.co/BssTkdf/derek-profile-bitcoin-200.gif'
      }
      else if (pubkey == '0a02d935ff9a88f16b4c9f50e727f0de5c4f7c82606a9891db27e5eb666fb658') {
        image = 'https://pbs.twimg.com/profile_images/1622134050193563648/V7d0_9tP_400x400.jpg'
	image = 'https://pbs.twimg.com/profile_images/1625672627821101056/js3LRsjQ_400x400.jpg'
      }
      else if (pubkey == 'c05f8ab1c206e7bf265e29b08c749804c4e5557bc202108ac708b20fe297bbe0') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_3ee78191a4dc407633307e5a29a0abd135b3084118e73b0cb98503d324ef6974.jpeg'
      }
      else if (pubkey == 'a03fe70ce5df00d0ced8fa4f55403b4521c58179beb9d65d127981587d72d366') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/710348895352557568/e80u2j0o.jpg'
      }
      else if (pubkey == '2530bcd3ddf928df1709d01a9f6d9dcbe8bbe17117ede8e28208ffb112ffefe3') {
        image = 'https://imgproxy.iris.to/insecure/plain/http://www7b.biglobe.ne.jp/~rei0612/leiconenicon.jpg'
      }
      else if (pubkey == '84de35e2584d2b144aae823c9ed0b0f3deda09648530b93d1a2a146d1dea9864') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_9544c1449dc024f3eb446215ddfad13b71013da1a308288d67b932ae8f3cf3cc.png'
      }
      else if (pubkey == '6a3d3f20f5abdc3182ce558473a0036372f9f6099dcc6e6abfa071e36a569bcc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1032084495753781249/vYR3bY34_400x400.jpg'
      }
      else if (pubkey == '92de68b21302fa2137b1cbba7259b8ba967b535a05c6d2b0847d9f35ff3cf56a') {
        image = 'https://imgur.com/6C0Vr9D.gif'
      }
      else if (pubkey == 'f512c0ad5de07c27d0fd048516cccf82662e60279d1534b7053c7006293f7168') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_6d9f1b53e5cc27d311042142572a62cee975148afb9941a13eef10200ecd7360.png'
      }
      else if (pubkey == 'e1367008a2b8ae244cd24b6b4c828c7c52011250518b6eab9af9bd0d9499858b') {
        image = 'https://abc'
      }
      else if (pubkey == '885bfc2076f182973b045024459552332f6747772d95e1320f93126ebf1739c5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/5339p.jpeg'
      }
      else if (pubkey == '82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_6b9909bccf0f4fdaf7aacd9bc01e4ce70dab86f7d90395f2ce925e6ea06ed7cd.jpeg'
      }
      else if (pubkey == 'd61f3bc5b3eb4400efdae6169a5c17cabf3246b514361de939ce4a1a0da6ef4a') {
        image = 'https://i.imgur.com/Z8dpmvc.png'
      }
      else if (pubkey == 'e05953648d171fdba7fb3d22c768f0e9bd74824dd5450b3bf5c82aa0630083c8') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://storage.googleapis.com/drive.misskey.nokotaro.com/files/webpublic-9f58e898-c282-48af-a5b3-a3b464c64af2.png'
      }
      else if (pubkey == '54f1211af3ba57c9a4ecb29d55a7b850a8d2bcf8659a7df9ed99076afaa390c4') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsOTMsMjE3LDEpOyBzdHJva2U6cmdiYSgzOCw5MywyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == 'a6a92fa79a81b70d7b4d16acece5ef9c79a283a0f90bd5f7bfb00ba1c67068ad') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1563860004473606145/idh5cblN_400x400.png'
      }
      else if (pubkey == '9dc5c31062dde1f8e6c80d8c9e6fddf22fa2056672189c6443c3d87b6ed4dee7') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.gyazo.com/c846fc27f4787db65dd7ca2bc1d7d2ab.png'
	image = 'https://i.gyazo.com/c846fc27f4787db65dd7ca2bc1d7d2ab.png'
      }
      else if (pubkey == 'cc88b7afe3e53e4acaf3702c5033582fd842a438f085c124f56130928266880b') {
        image = 'https://imgproxy.iris.to/insecure/plain/http://highrise.s28.xrea.com/icon.jpeg'
      }
      else if (pubkey == 'fc4b9ec153190fe468dcbb7bb429df88c89b9d79b64465105a4fcdd250c74291') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.seadn.io/gcs/files/7eb35aaf8f5a3fdb0abb30de0be9b807.png?auto=format&w=1080'
      }
      else if (pubkey == 'ad2ccc9d215c694fba0fadd8984b0b8ecfc2ac45d070538302ff3c02e12e36e6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://wtr.app/images/wtr_icon.png'
      }
      else if (pubkey == 'd4ef291669477d203982b12160a2a9524b7f5a7dfe4263f562008f41bb1b7947') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1345280832219488256/MziRuq3A_400x400.jpg'
      }
      else if (pubkey == '7786bf04611744deda9b802c474f0cd8b6961d8facf81a7fa1404a177b97bcda') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1534545255856762880/dStyqZI8_400x400.jpg'
      }
      else if (pubkey == 'edc083016d344679566ae8205b362530ecbafc6e064e224a0c2df1850cecfb4a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1587707705346920448/PunLtOLk_400x400.jpg'
        image = 'https://nostr.build/i/nostr.build_b9fb5d34aeceb9ff115c0467ee7de46b5ea4ccacf8e9486a61ff312e27189126.png'
      }
      else if (pubkey == '670271501bd9073d64402c40988a73b73076ffefeaae4db8b952b479c799bc07') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://rdlf.jp/images/Nostr.png'
      }
      else if (pubkey == '84b0c46ab699ac35eb2ca286470b85e081db2087cdef63932236c397417782f5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://raw.githubusercontent.com/TsukemonoGit/TsukemonoGit.github.io/main/Freest2022/images/icon.png'
        image = 'https://raw.githubusercontent.com/TsukemonoGit/TsukemonoGit.github.io/main/img/ojo04.png'
	//image = 'https://nostr.build/i/377697f4bdcbd0648949fb52b31270952a4ef50ab347a9636585ef9a94a43b26.jpg'
      }
      else if (pubkey == '55e15d51e5ea14ee1ee1098263a8579428c8073a9173869853b585dccec5ccde') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1354235589415997441/jai-ftL2_400x400.jpg'
      }
      else if (pubkey == 'b47beb0c6743a4b7a15c693cb1acad3914e587fb2c6ef7f7d955b9a32d1e3491') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/38049332/d7a7afc7ef835eda7f0f3eaf5e223d3b.jpg?size=400'
      }
      else if (pubkey == '211e5b170d682e8e5c8baf137f3e7f6a47c2b331fcd70527b7f1773ef103c76c') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://media.azunyan.jp/Files/4203f548-faf4-4fb7-b295-3f63d20090ec.jpeg'
      }
      else if (pubkey == '205dbea49abc81559a794881d3c852cc3f904ad192f3c174901848b749137d25') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTI0LDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTI0LDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == 'ca66fb8f802647dc339a18f9ece6f9761648c23e58c4963555b732ee51554c16') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nuke.ninja/nostr/icon_01.jpg'
      }
      else if (pubkey == '0c016fa0b79edb469135bbff8659282b977145fc0816ad20b05c9851eb9ecd56') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/Dnfec4AMZdwGtJVSghQYyH.webp'
      }
      else if (pubkey == '9c1d55f0cc0090b22791bf13d6cc612e97c8107ae99559ced8bbf68e4ef65b7a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://media-social.lillin.net/accounts/avatars/109/737/090/399/638/422/original/a3b55282f1b99035.jpg'
      }
      else if (pubkey == '52131d23b2c544972585515f217822cb408cc569ca016c5bdd0b679491b0d16f') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDEyMywxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDEyMywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
      }
      else if (pubkey == '24da3978bd61426b5499d8e5a842a4d1d906790c0a6fc2471da1e1e293fa77c7') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/855939144945508352/RuSlQohC_400x400.jpg'
      }
      else if (pubkey == '112e1b545997b7b0e5d49b9fec3c45448ece5993ec940f4ebc137caef58a5e05') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://june29.jp/img/ring.jpg'
      }
      else if (pubkey == '51c934106724e8dbc64b4f8ff7d045242ce719861e5c59b7ebb3be05c55b1b4e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://dl.openseauserdata.com/cache/originImage/files/317cb8fddfa94c4be945e80628c7cac5.png'
      }
      else if (pubkey == 'c4be4f70f100daf9399abd7fe51404cf07f55dffd4066f7ec37ed7b5674d3a0a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1586350178981715968/K-tzFnsH_400x400.jpg'
      }
      else if (pubkey == '3408383fe5d5355f1694e51619f69dde63a5a9ac2c12d60b57d6468e0918964b') {
        image = 'https://imgproxy.iris.to/insecure/plain/http://kson.jp/nostr/meyuii.jpg'
      }
      else if (pubkey == '81e33af3bb1aa8af19314454a8fc2f546fdd31c89406ffceb42b2dc4068f7b6f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_e41c1186fa786df24733b0457435b7afd0dcaa00ade97122567b89eb607739ac.bmp'
      }
      else if (pubkey == '0153d742cf537c94e2bef9541cf3b02140a8a3b3641efe813d418451a2d44479') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_9092f51c7947b964b4d40ef8cedeceb4ebb57458f269b8ef2842d02b5ec34540.jpeg'
      }
      else if (pubkey == '14cbdf215a07e4d911b4f1b6d05b8fe0240bc414b678394f59427ff14ccd7670') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://i.postimg.cc/rws2pB6x/F88-D276-F-71-A3-4-D73-8-A08-4-EFA73-F6-CA67.jpg'
      }
      else if (pubkey == '91af95cbeb4d0f337efe69aef4ff9c81ff568f70e0393d65c1be44bdd6695d5b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_426532198511c2d91f54fd5718f6fea8f791f2e69894bed740a153c18b65d0ae.png'
	image = 'https://nostr.build/i/nostr.build_426532198511c2d91f54fd5718f6fea8f791f2e69894bed740a153c18b65d0ae.png'
      }
      else if (pubkey == '4fa2a4ddc81ffe91d28fb99262f8af383c687b12035ace73415fd705262c60af') {
        image = 'https://pbs.twimg.com/profile_images/1607010836912164867/th_K8vC4_400x400.jpg'
      }
      else if (pubkey == 'ac1cad77ce623f32385c1ae059fde541637868ccb81b9348210eb44b11ba4f9d') {
        image = 'https://i.imgur.com/aWlmMAg.jpg'
      }
      else if (pubkey == '55f66ab2d090fb32c0bea9f6519c8e33eec5a82a6ce258b8107fc6a6730ab878') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://raw.githubusercontent.com/Neos21/dotfiles/master/Images/Neos21.jpg'
      }
      else if (pubkey == '5520f8f635a676689531f902606aa6258a578326beab56200d3beb2f5019be92') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/34566290?v=4'
      }
      else if (pubkey == 'c754606647f33d7017c992eeb4454c64bfb0938a7f3fd036f3e368398ec0f9a2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1603042377584807937/EWawd9ob.jpg'
      }
      else if (pubkey == '65eb3a4f049b03b97e05f56bee28681c565dbfdcdfe29f93f57840a74ed3863e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn.discordapp.com/attachments/984038141008687174/1072917591200366667/74DDD5D5-E56A-4E08-BF6C-DAAE5DCC4F27.jpg'
      }
      else if (pubkey == 'bf7c7ac7e413ecc3f353083181b087a8c3e6aa7848c60ef7912e0adc4d07e478') {
        image = 'https://pbs.twimg.com/profile_images/1628378747056590848/5UAjcmTO_400x400.jpg'
      }
      else if (pubkey == 'd6e1e6461f05ad064b4b9e1497637c148ce78b6331064770f671d8cf8883d0fe') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1086658683809886208/-WvKAHZc_400x400.jpg'
      }
      else if (pubkey == 'c618776c3f75201ad0a1a57bd32170d4337a60aef9cd739fc1bd94295f107db7') {
        image = 'https://imgproxy.iris.to/insecure/plain/http://www.tsukumi.net/gotoken/gotoken_profile.jpg'
      }
      else if (pubkey == '78b3c1ed0a53b072fcfb8cc2e2e09cad31c9bfec869d1c8745c343d55033eea9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1493189466768703492/JcrHM8JI_400x400.jpg'
      }
      else if (pubkey == 'b181fb01240c9bc3ababaa805beef61ad2a51961adba6c7261f17626656a4db9') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/2595116676/p5ym19whvymh626i6vao_400x400.jpeg'
      }
      else if (pubkey == '13c9616be1890e394a6bcce707e72f53f4a4292f9d29ca95d5a99b9dba346603') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_3a214f41cad17d78fb08a3364699edb1a56e4d4f4804c918e1470746b9795873.png'
      }
      else if (pubkey == '7c3b3f4b25101b879c6c41d292134d09ef851915572900fe3fe2ee5f00b67fd2') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://0sn.net/img/saber.png'
      }
      else if (pubkey == '907bac5fe54801227b906ba219a759537d2bef65adc877b65462fe15947f1f16') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ryo1107.github.io/image/profile.jpg'
      }
      else if (pubkey == '3c116d603661ccbb4bc77542a5aa549bf82f1a54de1754e166af4755e848f4f0') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_aabc340368f70fbfe5bd1e5a4ff8323600d0550c4c89fa396c1401858db4b4aa.jpeg'
      }
      else if (pubkey == 'cef718fb3ab52d6242d09a3293d2f1ec24698622581105a6b9aac0b3a4e49fbc') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1491731371370643458/ZVj9ItZM_400x400.jpg'
      }
      else if (pubkey == '8dd8f949ecf52eb8ac5a598fa54751a73a6dfad09ff125bc928efbad1920aaca') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_1f73701f9b79877652dca1820b857416ad0b06df49835a4b2a7be8e391a9cce6.png'
      }
      else if (pubkey == 'f6edcd7e35ee2b864b65512c89458d5b52b614be06c504d62e0569ad8b1294dd') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://cdn-ak.f.st-hatena.com/images/fotolife/m/milestone/20230205/20230205093403.jpg'
      }
      else if (pubkey == '269e6f57aa9a200c814e6b98721819dde038ca60c0390b87b658d300ab6d0d04') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://picture-dka.pages.dev/headicon.jpg'
      }
      else if (pubkey == '1033fb6de67db3650821a84e66d9329741ab787c6acfb7438710e556ae98d461') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://tcrf.net/images/a/af/BmWS-title.png'
      }
      else if (pubkey == 'c6dc2b963a3125b06dc4007fa21075405f53bbcafd3d1ae98d77ba2e434f6947') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1502093599122817025/pHhKUY8P_400x400.jpg'
      }
      else if (pubkey == 'bfba4e19f9080450476d227527d95874b1911798b77ec8dfb0a7b32897da56d5') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1386990611706748935/PyyOaI68_400x400.jpg'
      }
      else if (pubkey == '4a20a2b7673c2ef864f9f9ef48913a5491eacab430562f6d8d1f31b04118a67a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr-tkithrta.vercel.app/static/iu.png'
	image = 'https://assets.st-note.com/production/uploads/images/103763639/profile_3106cc4bf681d912ef8f9d1a69e338cb.png'
      }
      else if (pubkey == '7b73abe05caa0533e54770cd22203c032ee7c128502d2d54560f8e91a4985287') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/231357535/5293b9fad391fed1dbbcd1efed959daf?size=200'
      }
      else if (pubkey == '3a4206a3b4c5082ff1fd9ebc3ce71661f5c1d3cbd527f3176d7e7766ff7d35bd') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1622440384965246976/PJTue6sG_400x400.jpg'
      }
      else if (pubkey == '7232d725dbbab9c881b2a26af88fd651dd917362a70ec7d3018296c6a22ff54e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1576592042552983552/8noHAVaf_400x400.jpg'
      }
      else if (pubkey == '738f7229ee7c38be9124e9a4fe18e6346d670def6e590c9fc17e5a6174edf098') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://misskey.mugiko.moe/files/e78b4080-cf89-44d3-9811-99793d830f56'
      }
      else if (pubkey == 'ab2bed3899587ab5699dd2a22c6f8c3f53127999fe271e0976c250c85a02eb7f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/585254893293699072/8T-p1x0Y.png'
      }
      else if (pubkey == '219aa90f3e0002a59cedc49eda44b333f96bc920ee67388e797aac5381ed9d13') {
        image = 'https://i.imgur.com/tlcHSri.jpg'
      }
      else if (pubkey == 'a31c3827632345946fefa26be759dd7ddc7c293247ec2dde63a59faa3f81ee7a') {
        image = 'https://i.postimg.cc/mgf1jQc5/8960-C6-F9-1203-4435-8476-06-DB7159-CC4-C.jpg'
      }
      else if (pubkey == '3c245186a6980665c8ecf6fccd4ffcce089b243cf3b582c1cdf1c15944ada29c') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDE0NCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDE0NCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '3e9f97ab57c02f658065993541ae3f1ba45a08ba62ee43dc23ac23643be15671') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://www.photolibrary.jp/mhd8/img800/450-20201024152845201025.jpg'
      }
      else if (pubkey == '24380e85e34903e06f543e90b80c42160872eb22cdb6e52d3daa52778e543f02') {
        image = 'https://i.imgur.com/l4qsWQg.jpg'
      }
      else if (pubkey == '5ab334936b6cd3db9a7f77b1c4a23d84c7a08d4a58a2dd8a383f0da78d259c22') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://void.cat/d/SN146RfWKuzoEoWvmBPfPg.webp'
      }
      else if (pubkey == '8bba73be1955e3fa56de37b5968ec35d425ac2f503caf2fabb5bc5a9bca05cd6') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://numpad0.com/imgs/ccast.png'
      }
      else if (pubkey == '4999fe49ab2381f95afef789938d918736b1a3ae98974b1698c93c682bf0d17a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://xaiqi.graphics/external/icon.jpg'
      }
      else if (pubkey == '50d43bc04cead43df759d1e60ff6dc4c6f277c99efcc019507d6c57352c5b403') {
        image = 'https://nostr.build/i/c929f51ef1ca4cfdbedd82cb1f31ecb417c5654262bfa702b29ed32027d4c9f1.jpg'
      }
      else if (pubkey == '97a3bb8cb06ea92e9e4467443b4d5bb90a10a212cb577cae9b63de05d7cacf3e') {
        image = 'https://nostr.build/i/nostr.build_e29b488178bd29a7bbb10a5ef7078d4551fdc6c2360647fe90e9c215e78ead48.jpeg'
      }
      else if (pubkey == '96fade2896aef1270bbb25f9195b389167e6ae51a53f0ccbb27b7de58345550b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://lifehacking.jp/mehori/mehori_l-300x300.jpg'
      }
      else if (pubkey == 'bada82368fd6f3c59f6f0e1587a86d770a71f0393c305dc19eeb868fcefb000b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_1c021252d4f99190a157a8587996609e158243114905da938b5729be1b95fb0a.png'
      }
      else if (pubkey == '81f3649fcf22bce3fb4bf3be1319e0e661170f5096b871b244d9bfc4653192db') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://akanetojo.blue/rody/wp-content/uploads/D38065C5-89B7-4246-99B2-BCB6302A47BF.jpeg'
      }
      else if (pubkey == '33a3f0f5d0b98a44e180983173531516e3cbabfdb35d1e52303a84c22e7d7f21') {
        image = 'https://github.com/shioncha.png'
      }
      else if (pubkey == '871b65190ac85c80df13753462385ccfb77854e03041a5098ded09444229780f') {
        image = 'https://holybea.com/wp-content/uploads/2023/02/gravater_icon.png'
      }
      else if (pubkey == 'afb18dfa9cdbc569bfe32a50570fa852344325ca8d521dddaee33a0913281dd1') {
        image = 'https://avatars.githubusercontent.com/u/18186312'
      }
      else if (pubkey == 'afb18dfa9cdbc569bfe32a50570fa852344325ca8d521dddaee33a0913281dd1') {
        image = 'https://avatars.githubusercontent.com/u/18186312'
      }
      else if (pubkey == '9b57e55a0a14a4b51d412960794ad9ae29f7f0860a4cad25bd8435d529ac9d98') {
        image = 'https://void.cat/d/3ia77V9RTiVgfBcGfTTVWs.webp'
      }
      else if (pubkey == '48f7c59a278dd3a114c9ee88275a61dd04fd4daafe4430ef60fcd13537946c0e') {
        image = 'https://uploads-ssl.webflow.com/63a5075c6c31f26aa8199987/63a5f77d8cfe911d30cb4d22_08575_raw_profile-p-500.png'
      }
      else if (pubkey == '04317e40be42f3371053e47d63186c1554a362ddafb816ed5df4bee1aad3ed54') {
        image = 'https://www.gravatar.com/avatar/07c696d48e924e14f085abf989b666e8?s=300'
      }
      else if (pubkey == '8a667339337fa7b75d8b6406ced38f8da9edf38381f0676f4e9b5ace9510a077') {
        image = 'https://pbs.twimg.com/profile_images/1547938643284983808/AlEBMrmf_400x400.jpg'
      }
      else if (pubkey == '4e82459778b61358366d7a50f798955d48b0fb4c6b9edcdcfcf543a20b5bfcba') {
        image = 'https://pbs.twimg.com/profile_images/1272095503/sam3_400x400.JPG'
      }
      else if (pubkey == '6c242404fb986d184cbea2eb9e94e8fe708a35fdbf5a02198caaeedede99bea1') {
        image = 'https://pbs.twimg.com/profile_images/1614398202056445952/lvcuUhKo_400x400.jpg'
        image = 'https://void.cat/d/DZVjkrYbzowuqah1jSrbLy.webp'
      }
      else if (pubkey == '9b28524450acf0e76e7737598e9f15de48c4bea3a2e15a0cb6b855bb16178e13') {
        image = 'https://pbs.twimg.com/profile_images/1559219223863316481/6418TZ5B_400x400.jpg'
      }
      else if (pubkey == '634bd19e5c87db216555c814bf88e66ace175805291a6be90b15ac3b2247da9b') {
      }
      else if (pubkey == '898f59d12df63f89d85167c89adc5aefa3ab7f6b299d17a4113c4e269ec8a6f3') {
        image = 'https://cdn.gudako.net/social/rita_mascot_ph_rev2.jpg'
      }
      else if (pubkey == 'aa4916c1e0036a526fc112d053ed1f438cee18ea34acc04e79dd4238aae82dcd') {
        image = 'https://www.peipeipe.net/images/jekyll-logo.png'
	image = 'https://cdn.gudako.net/social/rita_mascot_ph_rev2.jpg'
      }
      else if (pubkey == '0e7e1cb3a8b0adcedce46c42c57db79dd2d360392b3e8da9f85f3441b6b4cbc1') {
        image = 'https://www.peipeipe.net/images/jekyll-logo.png'
      }
      else if (pubkey == '35cef114599e95d27c9499fc3b757ba4c1973bdca791febbcfbdb371c041bae8') {
        image = 'https://okumuralab.org/~okumura/img/okumura130506.jpg'
      }
      else if (pubkey == '2fda8cd83101180a1493b5f51bf6d40ced22b8b2dcf5e15f633242f992250eff') {
        image = 'https://pbs.twimg.com/profile_images/1224756560829677568/zm3g7rMk_400x400.jpg'
      }
      else if (pubkey == '38a688a7c59d841560bf14700b47d4cd769f9036b4c36f06b285e811085c1aec') {
        image = 'https://ul.h3z.jp/n9DxkhIE.png'
      }
      else if (pubkey == '891eead16df5d67750627b1a2bb8137596d88cfcf003f5dc8237dc422b148295') {
        image = 'https://kujira-ongaku.net/ech.jpg'
      }
      else if (pubkey == 'cd408a69cc6c737ca1a76efc3fa247c6ca53ec807f6e7c9574164164797e8162') {
        image = 'https://awayuki.net/con/my/img/icon237.png'
	image = 'https://awayuki.net/con/my/img/icon178.png'
	image = 'https://awayuki.net/con/my/img/icon286.png'
	image = 'https://awayuki.net/con/my/img/icon222.png'
      }
      else if (pubkey == '7aa090be3c66dbcc7c98ca17a22ed5daa2cea6f2b87df35cada814bb09e1e283') {
        image = 'https://pbs.twimg.com/profile_images/1445176476161114113/pWP6zWyX_400x400.jpg'
	image = 'https://cdn.nostr.build/i/779159f79559a9487018850628af1b62d8800ab907aeccdc058e3199cf16931e.png'
      }
      else if (pubkey == '804bc2c1366938c45a2c8409afbe284c48981d492d510fa47a57eb8c08a660d2') {
        image = 'https://img.majipoka.com/080717e.png'
      }
      else if (pubkey == '9ca497b52b9ee60bcb539f8834dd207136f643f7fa6b394359a726bf8111e57a') {
        image = 'https://pbs.twimg.com/profile_images/1245462183682535424/b6Q-0Z0l_400x400.jpg'
      }
      else if (pubkey == 'abd9854487782ad5357bfee64c36fe6556eba9e41dbaca18eb4744253c534d1e') {
        image = 'https://pbs.twimg.com/profile_images/1597458425348136960/eFew9Qt6_400x400.jpg'
      }
      else if (pubkey == '6b0a60cff3eca5a2b2505ccb3f7133d8422045cbef40f3d2c6189fb0b952e7d4') {
        image = 'https://nostr.build/i/nostr.build_96de16125bf6fcf33c8e7aec18c1c9a043ec9f617148d3c7b9726c4fe5d17e74.jpeg'
        //image = 'https://void.cat/d/XaXeo5TPvrWKMX1rPb1hrN.webp'
	image = 'https://nostr.build/i/nostr.build_a3d539ddaceeb6bcbdceab542208d346300f410b6227c0b278ae4f798666f04c.jpg'
	image = 'https://ukadon.shillest.net/system/accounts/avatars/106/643/449/831/237/150/original/15898508930424cb.png'
      }
      else if (pubkey == '32310997f6b37b6cd60bb15a28e9a14badddfbf0875a7de24c69123a0c1e64cc') {
        image = 'https://www.eonet.ne.jp/~mmaga/omake/hyutegaki.jpg'
	//image = 'https://showhyuga.pages.dev/nostricon/pehyu_s.png'
      }
      else if (pubkey == '3f4ec0d48b2441c658921402789271d93c42fb6ac2bf154159c7ec7b6c43328f') {
        image = 'https://void.cat/d/ApCMhfHKNMik9ohM1i3Kb4.webp'
      }
      else if (pubkey == '6b2b47e82bfb300eeec598dbc4621dbcb3c0d350d6fc21a85ff7a92e325be4ff') {
        image = 'https://pbs.twimg.com/profile_images/1613806837207560192/TV-mlGDq_400x400.png'
      }
      else if (pubkey == 'a8d9ba5dc94dd3d5b76fa6b5909caf814ce4efcfac1bd199b62d962071b1441e') {
        image = 'https://pbs.twimg.com/profile_images/1548501019449241600/YWzBhU6L_400x400.jpg'
      }
      else if (pubkey == '5b7f889276abeedc6fdca3d063f9112f0dff6e85f1ee032cd3053d9ecf0d5197') {
        image = 'https://i.imgur.io/G1eghnh_d.webp'
      }
      else if (pubkey == 'e3168078608580b4eee1eaf9d47ac01e94a27c406f4f4477b8447e5510f13b2c') {
        image = 'https://void.cat/d/PiW8RP1TUT5nz33ZFY6jRY.webp'
      }
      else if (pubkey == 'ec42c765418b3db9c85abff3a88f4a3bbe57535eebbdc54522041fa5328c0600') {
        image = 'https://i.gyazo.com/90a95093bfeb169dddaea7a33734c97e.png'
      }
      else if (pubkey == 'f7decdac89077def534fd55b5fcb1b984c8205f0daaa720ad047521dee009202') {
        // AirArt
        image = 'https://ul.h3z.jp/Ci4sZ0IM.jpeg'
      }
      else if (pubkey == '4d39c23b3b03bf99494df5f3a149c7908ae1bc7416807fdd6b34a31886eaae25') {
        // akiomik
        image = 'https://i.imgur.com/Me9P5y1.png'
	image = 'https://i.nostrimg.com/553ce0727d62c08fe07f9d6d45c0e4daa4fb6debb505195575b365110f376ec0/file.webp'
      }
      else if (pubkey == '83409ce424d2dae116fc9d1596f076d1d65843e44e026fa52a6b67dca2f35500') {
        // saharu
        image = 'https://pbs.twimg.com/profile_images/1210189515811250177/wr-LDUeN.jpg'
      }
      else if (pubkey == '81bbb510f2a6ecb221d1df36219e37a63ce2372795b4cb14759c8cd8468799a6') {
        // kame3des
        image = 'https://void.cat/d/LntKZCpUhj8WZBsuTWfjhm.webp'
      }
      else if (pubkey == '9168772564e66c07a776a3e2849b02d1a0ac88a7f8e621600c54493ca0de48ea') {
        // Kate 
        image = 'https://pbs.twimg.com/profile_images/1543631555179884546/qK8sI9Z5_400x400.jpg'
      }
      else if (pubkey == 'c762a9152a4fe93f35e386b668499dd140200d387c9f431e98ac75fd66eb0ad5') {
        // weepjp
	image = 'https://nostr.weep.me/a/random.webp'
      }
      else if (pubkey == 'd1d1747115d16751a97c239f46ec1703292c3b7e9988b9ebdd4ec4705b15ed44') {
        // jiftechnify
        image = 'https://void.cat/d/3q1WhDAGSDP1vphgXhYUQG.webp'
      }
      else if (pubkey == 'a2ee3c86c25f22a23e0bd7b8af18631a994b8d67a9fba7b657a9db63560c8c47') {
        // pomcan
        image = 'https://nostr.build/i/nostr.build_b8a40685d0b7f631bd3efb44c48777ad2a25316c1c3cc38945634c36dc3e220b.jpeg'
	image = 'https://nostr.build/i/nostr.build_b8a40685d0b7f631bd3efb44c48777ad2a25316c1c3cc38945634c36dc3e220b.jpeg'
      }
      else if (pubkey == 'f40832e26b1d12f8a27717b606996baef68bc4b6b86c4a35ca827f6fbcbf511e') {
        // erechorse
        image = 'https://i.gyazo.com/0775dc06170f3a9385faf921c50d8d80.jpg'
        image = 'https://i.gyazo.com/ee480a2fdfa15aae6c9a15d44225489f.jpg'
	image = 'https://image.nostr.build/3e55ee8d28c338052a1bdc36a59d871f4447fe28c70e192f85230ba2a2ad98db.gif'
      }
      else if (pubkey == '4c5d5379a066339c88f6e101e3edb1fbaee4ede3eea35ffc6f1c664b3a4383ee') {
        // koteitan
        image = 'https://koteitan.github.io/img/ni_circlefit.jpg'
	image = 'https://nostr.build/i/0e2151001b06bb95c6d076ebe185c4df0567103d2d0ef043f2d6f7a16262ac5d.jpg'
	image = 'https://nostr.build/i/83badd41be2388e3d5bfc3adeee19e24accc7dd1524e1a4b8a62a49ec3634744.jpg'
	image = 'https://cdn.nostr.build/i/83badd41be2388e3d5bfc3adeee19e24accc7dd1524e1a4b8a62a49ec3634744.jpg'
      }
      else if (pubkey == '6b24da7e8e5236d17307501b73b50326f33060d2ec11ee4b9c42576bd011b895') {
        // pomchan
        image = 'https://nostr.build/i/nostr.build_a414ec5fb667dd1965c9f70d4e1e4c3ad7be88ba4189bfcfbc80cf1274eb49c0.jpg'
	image = 'https://profilepics.nostur.com/profilepic_v1/5439ea4fc92c3512a999ef08472a6271d23fe51dd0cb38709ec14695227661ef/profilepic.jpg?1685834552'
      }
      else if (pubkey == '5257f6d685301de8792099a0b173c3f57f42750612dd876fa0955aaac90192b1') {
        // takenoko
        image = 'https://storage.googleapis.com/drive.misskey.nokotaro.com/files/fcef8b90-e0af-445e-b259-49422df0ea86.png'
	image = 'https://icon.nokotaro.com/kanako_sweetches_512.png'
      }
      else if (pubkey == 'c9a58ba53c4287c4939ed71a7e31cb21bd13d2ff4bbbcc985455f25a7a20e636') {
        // afternooncurry
        image = 'https://i.gyazo.com/cd5e3a543bf20f0caafb9f19f13527e6.jpg'
      }
      else if (pubkey == '21ac29561b5de90cdc21995fc0707525cd78c8a52d87721ab681d3d609d1e2df') {
        // betoneto
        image = 'https://pbs.twimg.com/profile_images/1563860073625051136/lsXjXGwA.jpg'
      }
      else if (pubkey == '510e0096e4e622e9f2877af7e7af979ac2fdf50702b9cd77021658344d1a682c') {
        // Moonlotus
        image='https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_bb16b1cd4cb050fa586426e0f7b2371eee1946512ce135d99ff98a61a73dfa52.png'
      }
      else if (pubkey == '75f457569d7027f819de92e8bb13795c0febe9750dc3fb1b5c42aeb502d0841d') {
        // yutaro
        image = 'https://pbs.twimg.com/profile_images/1389106045058838528/aZRGqdwI_400x400.jpg'
      }
      else if (pubkey == '1040a4404aa3a08e4d59aa1768143a8cbc96112dae9d924841a2d9a2120728b1') {
        // h3zjp
        image = 'https://media.h3z.jp/img/profile-img-circle.png'
      }
      else if (pubkey == '811002f2348bdaa52d89b18b7e90bbc6aa5b948eff3e3689c041d2ac0ccba15a') {
        // feier
        image = 'https://d2pmpprut4wwdv.cloudfront.net/fit-in/300x300/images/2KHvdIWcCzB0u6gxDJJRj7ST4if'
      }
      else if (pubkey == '9fe72c76ced19360f2e62d89b8b54f80fdea877a1f334b58b1e4bdf1e3a5f902') {
        // jun_dow
        image = 'https://jundow.neocities.org/_nostr/e8f4cfb9fa23abf8d2644cacf1075cb9_bigger.png'
      }
      else if (pubkey == 'ce0d385252733bd84c1e9ce7d7cdb5733b8021bb0b3740c84d184580bf403ea3') {
        // mouse_484
        image = 'https://scrapbox.io/files/63e0ff39376f93001e1677d8.png'
      }
      else if (pubkey == 'e6821fb99307c5fbab0ca40f46a4d5525b6116f44db16ce37711f1e390462fb3') {
        // matusita
        image = 'https://nostr.build/i/p/nostr.build_6b2c86448fe463a2719924aba990ec70af092713cd44ae8cdef35ba9db9d2ef9.png'
      }
      else if (pubkey == '3ce2b51dca8b67b69c0ccb7c6a226437f7dbcc44a32426e70e52c78336fc72c7') {
        // kiri_tory
        image = 'https://void.cat/d/QQgTv9ZfJ7weZzsSMuFXmk'
      }
      else if (pubkey == 'af07786197826a2f1ebd71f19d137aeed74eb4c8e56cb32a3efee82f898e2714') {
        // mekamakrd
        image = 'https://void.cat/d/JWM33EgySUGtsbFL7GCLxx.webp'
        image = 'https://nostr.build/i/nostr.build_d72bb9253c94ea74ee7f9f158aa7e26b5c48d51c3070165a5d0039b94df697f4.jpeg'
      }
      else if (pubkey == '26bb2ebed6c552d670c804b0d655267b3c662b21e026d6e48ac93a6070530958') {
        // ocknamo
        image = 'https://cloudflare-ipfs.com/ipfs/QmVRuC4WGugfQ8U5pDhW2AkXgJogbs14Zu9Dd4GmfBMsZM'
      }
      else if (pubkey == '53bde5f1748546a0c28f1fab8ee18d7229e6ebaaea2df343906de9325333dd3c') {
        // syui
        image = 'https://imgproxy.iris.to/insecure/plain/https://syui.cf/icon/syui.png'
	image = 'https://syui.ai/icon/syui.png'
      }
      else if (pubkey == 'f1479c160e576934586a7424195dc155a04448d3d71d4090adec95915dd1eba9') {
        // h3y6e
        image = 'https://h3y6e.com/nostr/icon_f1479c160e576934586a7424195dc155a04448d3d71d4090adec95915dd1eba9.png'
      }
      else if (pubkey == 'c75622fd77ff9aa0e0ae9b213fd06170940807065d997e9c28ff8a67a9b66e1d') {
        // nobody u
        image = 'https://i.postimg.cc/bYxrTcDf/icon.jpg'
      }
      else if (pubkey == '8065e16d7b437e74626dc017a1f8f136937901d4cd2bfffb1c6a037719fbf289') {
        // kappaseijin
        image = 'https://raw.githubusercontent.com/kappaseijin/kappaseijin/main/kappa.png'
      }
      else if (pubkey == '897bb37449ed3fcea198e260a406733290dc2bedd5a5d447a68472c491baa739') {
        // U.G.M.
        image = 'https://nostr.build/i/nostr.build_2ba9abe96dec2c23e1c7befaa9837d63d075f7edbc219711fba78be5c8d18a7f.png'
      }
      else if (pubkey == 'aadd000a4183196aaf8fd38a8cb5759616e0197eac9dc5eea9882f74c4629ec4') {
        // adieuCord
        image = 'https://cdn.midjourney.com/16003ed4-dd82-449a-afe4-20d25711c98d/grid_0.png'
      }
      else if (pubkey == 'cb92d81fded72024a68ff0e693a9e6b35687c56040a8780fd739ac6228f9fde5') {
        // kawaiirailroads
        image = 'https://millie-may.net/img/icon_nostr.png'
      }
      else if (pubkey == 'fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b') {
        // shino3
        image = 'https://pbs.twimg.com/profile_images/1032657185392615425/0OvFqyb5_400x400.jpg'
      }
      else if (pubkey == '1f46356a832a4b2d65c12e9f7c6fd8608a285b1efa896773f4f67c6ee9e33e21') {
        // uaa
        image = 'https://nostr.build/i/nostr.build_472e5de35839285714a8e1a00d011ecc18b10a6cd95e6b7443332938b7351ba2.jpg'
      }
      else if (pubkey == '0c9b1e9fef76c88b63f86645dc33bb7777f0259ec41e674b61f4fc553f6db0e0') {
        // shi_on_72
        image = 'https://nostr.build/i/nostr.build_0d82a5e17035a545e37c91def026c542a2fcc967f5a2adda881fe121de4098e2.jpg'
        image = 'https://i.gyazo.com/74c608e1b67f7eec5f03150f53ac1ff5.jpg'
      }
      else if (pubkey == '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c') {
        // syusui_s
        image = 'https://i.gyazo.com/883119a7763e594d30c5706a62969d52.jpg'
      }
      else if (pubkey == '846b763b1234c5652f1e327e59570dcb6535d2d20589c67c2a9a90b323539eca') {
        // caz0617
        image = 'https://www.tgkzmdd.help/nostrimg/profile/feelie.jpg'
	image = 'https://tgkzmdd.help/nostrimg/profile/caz0617_malaysia_800x800.png'
      }

      if(image == '') {
        image = 'https://robohash.org/' + nip19.npubEncode(pubkey) + '?set=set4'
      }

      return image;
  }

  return (
    <>
      <div style={{ backgroundColor: "#222222", color: "#DDDDDD" }}>
        <div>
          <p>now:{dateToUnix(now.current)}</p>
          <p>untilValue:{untilValue}</p>
	  <p>links:</p>
	  <p><a href="https://nostrends.vercel.app" target="_blank">nostrends</a></p>
	  <p><a href="https://nostr-bookmark-viewer3.vercel.app/p/nprofile1qqsfrhnlctykespn2jckeg0n30fhpzqvnw4seexj8t0kesytm0xmsacpy9mhxue69uhhyetvv9uj66ns9ehx7um5wgh8w6tjv4jxuet59e48qtcppemhxue69uhhjctzw5hx6ef0qyt8wumn8ghj7un9d3shjtnddaehgu3wwp6kytcz7vjaj" target="_blank">bookmark</a></p>
	  <p><a href="https://nos.today" target="_blank">nos.today</a></p>
	  <p><a href="https://nosaray.vercel.app" target="_blank">Nosaray</a></p>
	  <p><a href="https://flycat.club" target="_blank">flycat</a></p>
        </div>
        <ul>{renderImageList2(events2)}</ul>
        <ul>{renderImageList(events)}</ul>
	<ul>{noteCount}</ul>
	End
      </div>
    </>
  );
};


export default Test;
