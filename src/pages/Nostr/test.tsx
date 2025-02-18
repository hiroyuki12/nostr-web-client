import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import NextButton from "@/components/NextButton";
import { nip19 } from "nostr-tools";
import moment from 'moment';
import parse from 'html-react-parser';
import Pictures from './Pictures';
import {getImageURL} from './getImageURL'
import {makeTagImageHTML} from './makeTagImageHTML'
import {removeTagImageUrl} from './removeTagImageUrl'
import {makeInlineImageHTML} from './makeInlineImageHTML'
import {makeReplyHTML} from './makeReplyHTML'
import {makeStatusString} from './makeStatusString'
import {makeQuoteLinksHTML} from './makeQuoteLinksHTML'
import {makeIframesbyTagHTML} from './makeIframesbyTagHTML'
import {makeIframesbyContentHTML} from './makeIframesbyContentHTML'
import {makeMarkdownHTML} from './makeMarkdownHTML'
import {makeTextlinkbyMarkdownHTML} from './makeTextlinkbyMarkdownHTML'
import {youtubebyTagHTML} from './youtubebyTagHTML'


const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered
  let untilValue = ''

  untilValue = 1739872092;  //paging
  // untilValue = dateToUnix(now.current);  //all new events from now

  let noteCount = 0;

  // untilValue = 1739873101;  // quote_npub1 3つあるのに2つしか表示されない NG
  // untilValue = 1739796967;  // zenn ogp
//  untilValue = 1739018108;  // NHK NEW OGP  Todo. nostter ok
//  untilValue = 1739018724;  // togetter OGP Todo. nostter ok
//  untilValue = 1739015355;  // dare-ai OGP  Todo
//  untilValue = 1739024868;  // kirby OGP Todo nostter ok
// untilValue = 1739628837;  // quote_nprofile1
  // untilValue = 1686983200;  // quote_naddr1. nos-haiku emoji set kind:30030 fix
  //  untilValue = 1739790231;  // youtu.be fix
//  untilValue = 1739099394;  // Repost Text ok
  // untilValue = 1739784977;  // Repost Text fix.
  // untilValue = 1737563052;  // NG very large html. nostter ok
  // untilValue = 1686839510;  //nicovideo iframe. fix TypeError:  '? '
  // untilValue = 1739782236;  // quote_npub1 
  // untilValue = 1739707055;  // tag "r" twitter   
  // untilValue = 1739674153;  // tag "r" (r) nipron iframe NG. fix text link
  // untilValue = 1739674961;  // tag "r" (r) amazon iframe NG. fix text link
  // untilValue = 1739678550;  // tag "r" link 7個 fix
//  untilValue = 1686929129;  //twitter iframe content
//  untilValue = 1700358511;  // instagram link iframe content fix
  // untilValue = 1739577124;  // content iframe fix
//  untilValue = 1688253140;  //iframe 3つ tag "r". contentにもhttp
  // untilValue = 1739628240;  // youtube shorts content ok
  // untilValue = 1739588223;  //YouTube fix. tag "r"
  // untilValue = 1739585002;  // Youtube target fix. youtu.be content
//  untilValue = 1739012160;  // youtube live content Repost ¥n fix
  // untilValue = 1739359806;  // tag "r" img ok
  //  untilValue = 1739046056;  // kind:30023 LogForm Will. Makdown syntax. lumilumi ok
  // untilValue = 1700654092;  // long-form content. kind:30023 Markdown
  // untilValue = 1734489363;  // #t tag
// untilValue = 1734489831;  // kind:20 not display picture
// untilValue = 1732921974;  // kind:20 not display picture
//  untilValue = 1739573404;  // fix: unnerv imeta url png  ok
//  untilValue = 1700351963;  // fix link. http nostter app home 4つ. tag r 4つ





  
  // const sinceValue = untilValue - 1800;  //about 30 minutes 
  // const sinceValue = untilValue - 3600;  //about 60 minutes 
  // const sinceValue = untilValue - 36000;  //about 10 hours 
     const sinceValue = untilValue - 18000;  //about 2 days 
  // const sinceValue = untilValue - 999999;  //about 11 days 
  // const sinceValue = untilValue - 7200;  //about 120 minutes 
//  sinceValue = untilValue - 500;  //about 15 minutes 


  const { events } = useNostrEvents({
    filter: {
     until: untilValue,
    //  authors: ['32b44d8ffb7c1995e708bb7ffb6c49d46576971de246ab6a53a5de64a4589c24'],  // misskey
//      authors: ['77b83da207aa98f3fcaf293c8d3b7beb15e812e937d79104670e4ef43f6ae0e4'],  // unnerv.jp

//      kinds: [0],      // 0:Metadata
//      kinds: [1],      // 1:Short Text Note
      kinds: [1,6,20,42,1111,30023],      // 1:Short Text Note ======================
//      kinds: [3],      // 3:Contacts (follow)
//      kinds: [4],      // 4:Encryped Direct Message(DM)
//      kinds: [5],      // 5:Event Deletion
    //  kinds: [6],      // 6:Repost
//      kinds: [7],      // 7:Reaction
//      kinds: [8],      // 8:Badge Award
//      kinds: [16],     // 16:Generic Repost
//      kinds: [20],     // 20:Picture Events
//      kinds: [40],     // 40:Channel Creation
//      kinds: [41],     // 41:Channel Metadata
//      kinds: [42],     // 42:Channel_Message
//      kinds: [44],     // 44:Channel Mute User
//      kinds: [1111],   // 1111:Comment
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
    //  kinds: [30023],  // 30023:Long-form Content.  lumilumi ok
//      kinds: [30025],  // 
//      kinds: [30030],  // 30030:emoji set https://nos-haiku.vercel.app/entry/nevent1qvzq
//      kinds: [30078],  // 30078:Application-specific Data(key-value storage)
//      kinds: [30311],  // 30311:Live Event
//      kinds: [30315],  // 30315:User Statuses
    //  kinds: [30402],  // 30402:shopstr?
//      kinds: [31922],  // 31922:calender
//      kinds: [31989],  // 31989:Handler recommendation
//      kinds: [31990],  // 31990:Handler information
      since: sinceValue,
      //since: dateToUnix(now.current), // all new events from now
      //since: 1679403822, // 1679413822 2023/03/22 0:50
      // limit: 1000,
      limit: 100,
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



////////////////////////////////////////////////
// renderImageList2

  var followList = "";

  // フォローリスト作成
  const renderImageList2 = (list) => {
    const posts = list.map((event, index) => {
      for(let i=0; i<event.tags.length; i++) {
        followList = followList + event.tags[i][1] + ",";
      }
      return (
        <div>
        </div>
      );
    });
    return posts;
  }



////////////////////////////////////////////////
// renderImageList


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

      if(note.kind === 7        //kind:7:reaction
        || note.kind === 30078  //kind:30078:Application-specific Data
      ) { return; }

      if(note.content.includes('#markostr') || note.content.includes('#targoyleTweetGen')) { return; }

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

      if(note.pubkey === '1f617e368ce633acef348a2f755dd0a459e56e394766699524ae5d0ee66e9caa')  return;

      noteCount = noteCount + 1;

      if(minCreateDate > note.created_at) minCreateDate = note.created_at;

      const dateTime = new Date(note.created_at * 1000);
      const createdDate = dateTime.toLocaleDateString('ja-JP');
      const createdTime = createdDate + ' ' + dateTime.toLocaleTimeString('ja-JP');

      const npub = nip19.npubEncode(note.pubkey)
      //const nostrnpub = "https://nostr.com/" + npub
      // const nostrnpub = "https://yabu.me/" + npub
      //const userUrl = "https://snort.social/p/" + npub 
      //const userUrl = "https://yabu.me/" + npub 
      //const userUrl = "https://nostter.app/" + npub 
      //const userUrl = "https://freefromjp.github.io/FreeFromWeb/#/profile/" + npub 
      //const userUrl = "https://astraea.mousedev.page/profile/" + npub 
      const userUrl = "https://nostrudel.ninja/#/u/" + npub 

      //let imageURL2 = getImageURL(note.pubkey);  // avator
      const imageURL2 = getImageURL(note.pubkey);  // avator

      //const noteUrl = "https://snort.social/e/" + note.id
      //const noteUrl = "https://iris.to/#/post/" + note.id
      //let noteUrl = "https://nostter.app/" + nip19.noteEncode(note.id)
      let noteUrl = "https://nostter.app/" + nip19.neventEncode({id:note.id})
      for(let h=0; h<note.tags.length; h++)  {
        // kind:42.Channel_Message
        if(note.kind === 42) {
          if(note.tags[h][0] == "e") {
            if(note.tags[h][1].includes(":")) {
              return
            }
            //noteUrl = "https://nostter.app/channels/" 
            //  + nip19.neventEncode({id:note.tags[h][1]})
            noteUrl = "https://nos-haiku.vercel.app/keyword/" + nip19.neventEncode({id:note.tags[h][1]})
          }
	      }
      }
      const noteIdShort = note.id.substring(0,2)
      //const checkerUrl = 'https://koteitan.github.io/staged/nostr-post-checker/?eid=' + nip19.noteEncode(note.id) + '&kind=' + note.kind + '&relay=wss://relay-jp.nostr.wirednet.jp/;wss://yabu.me/;wss://nos.lol;wss://relay.mostr.pub/;wss://nostr-relay.nokotaro.com/;wss://nostr.fediverse.jp/;wss://relay.damus.io/;'
      const checkerUrl = 'https://koteitan.github.io/nostr-post-checker/?hideform&eid=' + nip19.noteEncode(note.id) + '&kind=' + note.kind + '&relay=wss://relay-jp.nostr.wirednet.jp/;wss://yabu.me/;wss://nos.lol;wss://relay.mostr.pub/;wss://nostr-relay.nokotaro.com/;wss://nostr.fediverse.jp/;wss://relay.damus.io/;wss://relay-jp.nostr.moctane.com/;wss://nrelay-jp.c-stellar.net;'

      const nostterUrl = "https://nostter.app/" + nip19.noteEncode(note.id)
      const freefromUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/" + note.id
      const lumilumiUrl = "https://lumilumi.app/" + nip19.noteEncode(note.id)
      const nosHaikuUrl = "https://nos-haiku.vercel.app/entry/" + nip19.neventEncode({id:note.id})
      const irisUrl = "https://iris.to/" + nip19.noteEncode(note.id)
      const snortUrl = "https://snort.social/e/" + nip19.noteEncode(note.id)
      const noStrudelUrl = "https://nostrudel.ninja/#/n/" + nip19.noteEncode(note.id)


    




      // Re] etc
      let replyHTML = makeReplyHTML(note);







      // make tags[0],  client(-via), proxy, alt, etc

      let client = "";
      //let title = "";
      let proxy = "";
      let proxyUrl = "";
      let tagsLinkUrlText1 = "";  // tags[0][0]
      let tagsLinkUrlText2 = "";  // tags[1][0] 
      let tagsLinkUrlText3 = "";  // tags[2][0] 
      let tagsLinkUrlText4 = "";  // tags[3][0]
      let tagsLinkUrlText5 = "";  // tags[4][0]
      let tagsLinkUrlText6 = "";  // tags[5][0]
      let alt = "";
      let streaming = "";
      let streamingUrl = "";

      for(let h=0; h<note.tags.length; h++)  {
        let marker = "";
        if(note.tags[h][0] != undefined) {
          marker = note.tags[h][0]
        }

        if(marker === "client") {  // client gossip 
          client = "-via " + note.tags[h][1] + "-"
        }
        else if(marker === "proxy") { 
          //proxy = note.tags[h][2]  // activitypub (misskey.io, p1.a9z.dev, unnerv.jp, fedibird.com, etc)
          let host = note.tags[h][1].match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
          proxy = "__" + host + "__"
          proxyUrl = note.tags[h][1]
        }
        else if(marker === "alt") {  //  alt picture
          alt = "_(alt) " + note.tags[h][1] + ")"
        }
        else if(marker === "streaming") {  //  streaming
          streaming = "-streaming"
          streamingUrl = note.tags[h][1]
        }
        else {
          if(tagsLinkUrlText1 === "") {
            tagsLinkUrlText1  = "_tags[0](" + marker + ")";  // event id
          }
          else if(tagsLinkUrlText2 === "") {
            tagsLinkUrlText2  = "_tags[1](" + marker + ")";
          }
          else if(tagsLinkUrlText3 === "") {
            tagsLinkUrlText3  = "_tags[2](" + marker + ")";
          }
          else if(tagsLinkUrlText4 === "") {
            tagsLinkUrlText4  = "_tags[3](" + marker + ")";
          }
          else if(tagsLinkUrlText5 === "") {
            tagsLinkUrlText5  = "_tags[4](" + marker + ")";
          }
          else if(tagsLinkUrlText6 === "") {
            tagsLinkUrlText6  = "_tags[5](" + marker + ")...";
          }
        }
      }  //for



////////////////////////////////////////////////
// contentの調整

      let content = note.content;
      let markdownContent = content;




      // parseしてもHTMLタグをそのまま表示するようにcontentの<を置き換え
      for(let i=0; i<1000; i++) {
        content = content.replace('<','&lt;');  // <
      }




      // kind:30023 Markdown

      if(note.kind === 30023) { // Markdown
        // ## , ###, - をMarkdown HTML(<h2>,<h3>,<ol><li>に置き換え
        markdownContent = makeMarkdownHTML(markdownContent, note)
      }

      content = markdownContent  // Markdown表示対応前を表示するにはコメントアウト

      // <a href無効化
      // for(let i=0; i<1000; i++) {
      //   content = content.replace('https://','_ttps://');  // <
      // }

      // Markdown化した後のHTMLを表示する時
      // for(let i=0; i<1000; i++) {
      //   content = content.replace('<','&lt;');  // <
      // }






////////////////////////////////////////////////
// Repostのcontentの調整
// Repostのcontentデータをcontentの本文のみに調整

      if(content === "") {
	      content = "[empty]";
	    }
      else {
        let splitContent = content
        splitContent = splitContent.split(',');  // , でsplit
        for(let i=0; i<splitContent.length; i++) {
          // Repostのcontentデータをcontentの本文のみに調整
          if(splitContent[i].includes('"content"')) {
            let splitContent2 = splitContent[i];
            // if(splitContent2.includes('{"content"')) {
              splitContent2 = splitContent2.replace('{"content":"','');
            // }
            
            splitContent2 = splitContent2.replace('"content":"','');
            if(splitContent2.substr(-1) == '}') { // 末尾が}の時は最後の文字を削除
              splitContent2 = splitContent2.slice(0, -1);
            }
            if(splitContent2.substr(-1) == '"') { // 末尾が"の時は最後の文字を削除
              splitContent2 = splitContent2.slice(0, -1);
            }
            
            /* // content より後を取得
            if(content.includes("content")) {
                    //tmp2 = tmp2.substring(content.indexOf('content'),content.length);  
                  }
            // created_at より前を取得
            if(tmp2.includes("created_at")) {
                    //tmp2= tmp2.substring(0,content.indexOf("created_at"));  				      
            }*/

            for(let j=0; j<10; j++) {
              splitContent2 = splitContent2.replace("\\n","\n");   // \\n -> \n
            }
            for(let j=0; j<20; j++) {
              splitContent2 = splitContent2.replace("\\/","/");   // \/ -> /
            }
            content = splitContent2;
          }
	      }  //for

      }

      






      
  /////////////////////////////////
      
// make img by tag "r"
      
      let tagImageHTML = makeTagImageHTML(content, note);

// update cotent. remove tag "r" image URL

      content = removeTagImageUrl(content, note);







      
  /////////////////////////////////
      
// make img by conent. (tag "r"にない時もあるので必要)
// return inlineImageHTML

// makeInlineImageHTMLの前に、makeIframesbyTagHTMLを実行すると、複数画像表示がNG

      let inlineImageHTML = makeInlineImageHTML(content);
    
      // content の画像URLを削除
      {
        let tmp = content;
        for(let i=0; i<20; i++) {
          tmp = tmp.replace('\\/','/');
        }
        for(let i=0; i<5; i++) {
          tmp = tmp.replace('\n',' ');
          tmp = tmp.replace('　',' ');
          tmp = tmp.replace('`',' ');
          tmp = tmp.replace('`',' ');
          tmp = tmp.replace('https://',' https://');  // httpの前にスペースを追加
          tmp = tmp.replace('http://',' http://');
          tmp = tmp.replace("`", "");  // googleusercontent
        }
        for(let i=0; i<20; i++) {
          tmp = tmp.replace('\n',' ');
        }
        const tmpContent = tmp.split(' ');

        // conentのjpgなどのURLを削除
        // const tmpContent = content.split('\n')
        for(let i=0; i<tmpContent.length; i++) {
          if(tmpContent[i].includes('http') 
            && (tmpContent[i].includes('.jpg') ||
              tmpContent[i].includes('.jpeg') ||
              tmpContent[i].includes('.png') ||
              tmpContent[i].includes('.gif') ||
              tmpContent[i].includes('.svg') ||
              tmpContent[i].includes('.ico') ||
              tmpContent[i].includes('.bmp') ||
              tmpContent[i].includes('.webp') ||
              tmpContent[i].includes('.mp4') ||
              tmpContent[i].includes('.mov')
            )) {
            content = content.replace(tmpContent[i], '')
          }
        }
      }








  /////////////////////////////////

// make iframe by tag "r" (URL) &  make link #r
// update content. replace URL to iframe
// add #r link to content

// update cotent. Add iframe to content

      content = makeIframesbyTagHTML(content, note);

      content = youtubebyTagHTML(content, note)









      // kind:20 for picture-first clients.
      // let pictureImage1Height = "0";
      // let pictureImage1Url = "";

      if(note.kind === 20) {
        content = "Picture] " + content
        // pictureImage1Height = "250";
        // for(let i=0; i<note.tags.length; i++) {
        //   if(note.tags[i][0].includes("imeta")) {
        //     for(let j=0; j<note.tags[j].length; j++) {
        //       if(note.tags[i][j].includes("url")) {
                // pictureImage1Url = note.tags[i][j].replace('url ', '');
                // makeTagImageHTML で表示. _tagImage
        //       }
        //     }
        //   }
        // }
      }







      if(note.kind != 30023) {
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
    }






      let toLinkUrl1 = ""
      let toLinkText1 = ""

      let eventLinkUrl1 = ""
      let eventLinkText1 = ""
      let eventLinkUrl2 = ""
      let eventLinkText2 = ""

      // tag "p", #[0], #[1] (#p)
      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "p") {
          const npub = nip19.npubEncode(note.tags[i][1])
          //const toLinkUrl =  "https://nostter.app/" + npub
          const toLinkUrl =  "https://freefromjp.github.io/FreeFromWeb/#/profile/" + npub
          // toLinkUrl1 = toLinkUrl
          // toLinkText1 = '_#p'

          // content = content.replace('#[' + i + ']', '<a href="' + toLinkUrl + '" target="_blank">#[' + i + ']</a>');
          
          /*if(npub === "npub19xm6kcedxef3232d222gj0sxql8vs2tutyg0fq4z6875zfs3d8ascl440n") {
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
          }*/
        }
        else if(note.tags[i][0] === "e") {
          //const eventLinkUrl = "https://nostter.app/search?q=" + note.tags[i][1]
          //const eventLinkUrl = "https://snort.social/e/" + note.tags[i][1]
          const eventLinkUrl = "https://nostter.app/" + nip19.noteEncode(note.tags[i][1])
          // const eventLinkUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/" + note.tags[i][1]
          
          if(eventLinkUrl1 === '') {
            eventLinkUrl1 = eventLinkUrl
            eventLinkText1 = "_#e"
            // contentの#[0]をa hrefに置き換え
            // content = content.replace('#[' + i + ']', '<a href="' + eventLinkUrl + '" target="_blank">(quote#)</a>');
          } else if(eventLinkUrl1 != '') {
            eventLinkUrl2 = eventLinkUrl
            eventLinkText2 = "_#e"
          }
        }
      }







      // (to), (quote)  nostr:npub1, nostr:note1, nostr:nevent1

      let quoteLinksHTML = makeQuoteLinksHTML(content);
      
      let wordsNostr = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|nostr:(?:nprofile|nrelay|nevent|naddr|nsec|npub|note)[a-z0-9]*)/g);
      for(let i=0; i<wordsNostr.length; i++) {
        let tmp = wordsNostr[i];
        if(tmp.includes("nostr:note1") || 
          tmp.includes("nostr:naddr1") || 
          tmp.includes("nostr:nevent1") || 
          tmp.includes("nostr:nprofile1") || 
          tmp.includes("nostr:npub1")
        ) {
            // contentからnostr:note1, naddr1, nevent1, nprofile1, npub1を削除
            content = content.replace(wordsNostr[i], '');
          }
      }




      


      let quoteLinkUrl = ''
      let quoteLinkText = ''

      // nevent1,  untilValue = 1696316415;
      if(content.includes("\nnevent1")) {
        let wordsNostr = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|(?:nprofile|nrelay|nevent|naddr|nsec|npub|note)[a-z0-9]*)/g);
        for(let i=0; i<wordsNostr.length; i++) {
          if(wordsNostr[i].includes("nevent1")) {
            // let quoteBaseUrl = "https://snort.social/e/"
            // nevent1qvzqqqqq9gpzq6c2vr8l8m9952e9qhxt8acn8kzzypzuhm6q70fvvxylkzu49e75qqs8fs9sy2ujm9yt220t5q6amhl7aumal5uha382f5eqrk6pheqp5jgv7nmq6
            const quoteBaseUrl = "https://nostter.app/"
            quoteLinkUrl = quoteBaseUrl + wordsNostr[i]
            quoteLinkText = '(nevent1)';
            // contentからnevent1を削除
            content = content.replace(wordsNostr[i],'');
          }
        }
      }




      let quoteId = "";
      let quoteUrl1 = ""
      let quoteIdText1 = "";  // #q 1
      let quoteUrl2 = ""
      let quoteIdText2 = "";  // #q 2

      for(let i=0; i<note.tags.length; i++) {
        //quoteUrl1 = "https://snort.social/e/" + quoteId1;
        //quoteUrl1 = "https://nostr.com/" + quoteId1;
        //quoteUrl1 = "https://iris.to/post/" + quoteId1;
        //let quoteBaseUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/"
        let quoteBaseUrl = "https://nostter.app/"
        if(note.tags[i][0] === "q") {
          if(quoteUrl1 === '') {
            quoteId = note.tags[i][1];  // event id
            quoteUrl1 = quoteBaseUrl + nip19.noteEncode(quoteId);
            quoteIdText1 = "__#q(" + note.tags[i][1].substring(0,2) + ")";
          }
          else if(quoteUrl1 != '') {
            quoteId = note.tags[i][1];  // event id
            quoteUrl2 = quoteBaseUrl + nip19.noteEncode(quoteId);
            quoteIdText2 = "__#q(" + note.tags[i][1].substring(0,2) + ")";
            
          }
        }
      }


  /////////////////////////////////
  // Add <a href>       @@
  // Add <iframe>. YouTube, Spotify, Twitter, etc.

  // Add <a href>





      if(note.kind != 30023) {
        content = makeIframesbyContentHTML(content, note);
      }
      else {  // Markdown
        content = makeTextlinkbyMarkdownHTML(content, note);
      }








      let contentWarning = "";
      let contentWarningText = "";

      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "content-warning") {  // NIP-36
          contentWarning = "[!!content-warning!!]";
          contentWarningText = note.tags[i][1];
        }
      }
      



      //(emoji)
      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "emoji") {
          const emojiURL = note.tags[i][2];
          for(let j=0; j<200; j++) {
                  content = content.replace(":" + note.tags[i][1] + ":",'<img src=' + emojiURL + ' height=40 title="[' + note.tags[i][1] + ']" />');
          }
        }
      }
      for(let j=0; j<10; j++) {
        content = content.replace(":bow:","🙇");
      }





      let statusString = makeStatusString(note);






      let bookmark = "";
      let bookmarkUrl= "";

      bookmark = "-bookmark"
      //bookmarkUrl = "https://nostr-bookmark-viewer3.vercel.app/p/" + nprofile
      bookmarkUrl = "https://nostr-bookmark-viewer3.vercel.app/p/" + npub

      let nozokimado = "-nozoki"
      // let nozokimadoUrl = "https://relay-jp.nostr.wirednet.jp/index.html?" + npub
      let nozokimadoUrl = "https://relay-jp.nostr.wirednet.jp/index.html?" + nip19.noteEncode(note.id)






      for(let i=0; i<3000; i++) {
        content = content.replace('\n', '<br />');
      }

      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              <a href={userUrl} target="_blank"><img src={imageURL2} width="60" height="60" /></a>
              {contentWarning}{contentWarningText}{contentWarning}
              {statusString}
              {parse(replyHTML)}
              {parse(content)}<br />
              {/* {content}<br /> */}
              {follow}
              {parse(quoteLinksHTML)}
              {tagsLinkUrlText1}
              {tagsLinkUrlText2}
              {tagsLinkUrlText3}
              {tagsLinkUrlText4}
              {tagsLinkUrlText5}
              {tagsLinkUrlText6}
              <a href={quoteUrl1} target="_blank">{quoteIdText1}</a>
              <a href={quoteUrl2} target="_blank">{quoteIdText2}</a>
              {/* <a href={httpLinkUrl1} target="_blank">{httpLinkUrlText1}</a> */}
              {/* <a href={httpLinkUrl2} target="_blank">{httpLinkUrlText2}</a> */}
              {parse(tagImageHTML)}
              {parse(inlineImageHTML)}
              <a href={toLinkUrl1} target="_blank">{toLinkText1}</a>
              <a href={eventLinkUrl1} target="_blank">{eventLinkText1}</a>
              <a href={eventLinkUrl2} target="_blank">{eventLinkText2}</a>
              <a href={quoteLinkUrl} target="_blank">{quoteLinkText}</a>
              {/* <a href={pictureImage1Url} target="_blank"><img src={pictureImage1Url} height={pictureImage1Height} /></a> */}
        {alt}<br />
              <font color="orange" size="2">{moment(createdTime).fromNow()}</font>
              -<a href={noteUrl} target="_blank">{createdTime}</a>-{note.created_at}-
              ({noteIdShort}){client}
              <a href={proxyUrl} target="_blank">{proxy}</a><br />
              <a href={freefromUrl} target="_blank">-FreeFrom</a>
              <a href={nostterUrl} target="_blank">-nostter</a>
              <a href={lumilumiUrl} target="_blank">-lumilumi</a>
              <a href={nosHaikuUrl} target="_blank">-Nos Haiku</a>
              <a href={noStrudelUrl} target="_blank">-noStrudel</a>
              <a href={checkerUrl} target="_blank">-checker</a>
              <a href={irisUrl} target="_blank">-Iris</a>
              <a href={snortUrl} target="_blank">-Snort</a>
              <a href={bookmarkUrl} target="_blank">{bookmark}</a>
              <a href={nozokimadoUrl} target="_blank">{nozokimado}</a>
              <a href={streamingUrl} target="_blank">{streaming}</a>
            </div>
          </div>
        </li>
      );  // return
    });  // list.map
    return posts;
  }  // renderImageList

  return (
    <>
      <div style={{ backgroundColor: "#222222", color: "#DDDDDD" }}>
        <div>
          <p>now:{dateToUnix(now.current)}</p>
          <p>untilValue:{untilValue}</p>
          <p>links:</p>
          <a href="https://nostter.app/home" target="_blank">nostter</a>-
          <a href="https://lumilumi.app" target="_blank">lumilumi</a>-
          <a href="https://nos-haiku.vercel.app" target="_blank">ノスハイク</a>-
          <a href="https://jumble.social" target="_blank">Jumble</a>-
          <a href="https://use.nsec.app/key/npub1j808lskfdnqrx493djsl8z7nwzyqexatpnjdywkldnqghk7dhpms7vfslt" target="_blank">nsec.app</a>-
          <a href="https://nostrends.vercel.app" target="_blank">nostrends</a>-
          <a href="https://nostr-bookmark-viewer3.vercel.app/p/nprofile1qqsfrhnlctykespn2jckeg0n30fhpzqvnw4seexj8t0kesytm0xmsacpy9mhxue69uhhyetvv9uj66ns9ehx7um5wgh8w6tjv4jxuet59e48qtcppemhxue69uhhjctzw5hx6ef0qyt8wumn8ghj7un9d3shjtnddaehgu3wwp6kytcz7vjaj" target="_blank">bookmark</a>-
          <a href="https://nos.today" target="_blank">nos.today</a>-
          <a href="https://nosaray.vercel.app" target="_blank">Nosaray</a>-
          <a href="https://flycat.club" target="_blank">flycat</a>
        </div>
        <br />
        <ul>{renderImageList2(events2)}</ul>
        <ul>{renderImageList(events)}</ul>
	<ul>{noteCount}</ul>
	End
      </div>
    </>
  );
};

export default Test;


// memo

//  untilValue = 1686933213;  //quote_note1(nostr:note1) fix
//  untilValue = 1686933213;  // nostr:note1 fix quote
//  untilValue = 1692694772;  // nostr:note1 (quote)
// untilValue = 1739177954;  // quote_nevent1(nostr:nvent1) fix
// untilValue = 1688605603;  //qoote_neventt1, quote2 fix
//  untilValue = 1696105738;  // quote_nevent1 njump fix. quote_nos_haiku ok
// untilValue = 1739065989;  // quote_nevent1. nos_haiku. 42.Channel_Message
//  untilValue = 1739175991;  // quote_npub1 fix quote
  // untilValue = 1698228483;  // quote_npub1, quote2_nevent1.
// untilValue = 1739617219;  // quote_naddr1 nos-haiku ok
// untilValue = 1696316415;  // (nevent1) ok
//  untilValue = 1690354019;  //(quote #[0]). content:#[0]. tag "e"
  // untilValue = 1739627342;  // #e 2つ。1つ目がroot
//  untilValue = 1691507141;  // NG. tag "r" があるが、#rが追加されない?
// untilValue = 1739613007;  // quote_nprofile1?
// untilValue = 1739572207;  // nostagawa iframe content ok
// untilValue = 1739577054;  // nostagawa iframe content ok
//  untilValue = 1739604459;  // 3 images ok
  // untilValue = 1739602957;  // fix image duplicate
  // untilValue = 1739594870;  // http <username> fix iframe
  // untilValue = 1739582796;  // x.com iframe fix
  //  untilValue = 1739585405;  // fix. tag"r"とtag"imeta"があるため、画像が２つ表示される
  // untilValue = 1739577075;  // fix. tag"r"とtag"imeta"があるため、画像が２つ表示される
  // untilValue = 1739261908;  // altにhttps://があるため、kind:20 http://の表示が消えない。
  // untilValue = 1739158577;  // fix nhk iframe href target="_blank". NHK
  // untilValue = 1739454334;  // fix http content youtube
  // untilValue = 1739454167;  // fix http content suno
  // untilValue = 1739454027;  // http content github
  // untilValue = 1739373027;  // fix iframe content prime video
  // untilValue = 1739446863;  // fix twitter iframe  content
  // untilValue = 1739087698;  // Error: hexToBytes NG
  // untilValue = 1694194192;  // kind:30025 LongForm
//  untilValue = 1702648801;  // 9735 content empty . naddr1
//  untilValue = 1702648782;  // fix nostr:naddr1. link kind:30402
//  untilValue = 1700648893;  // bookmark
//  untilValue = 1698731466;  // Invalid byte sequence
//  untilValue = 1697536841;  // NG
//  untilValue = 1697295574;  // repost fix. id nip19.neventEncode(event: EventPointer) fix
//  untilValue = 1696110614;  // url # NG
//  untilValue = 1694055016;  // \n\n ok
  // untilValue = 1707634026;  // Repost先のiconが表示されないのは、tagp"がないため。
  // untilValue = 1739262337;  // Repost先のiconが表示されないのは、tag "p"がないため。
//  untilValue = 1688460571;  // youtube channel?. thumbnail NG. lumilumi URL ok. This live stream recording is not available.
//  untilValue = 1691507141;  // repostのcontentにtargoyleのリンクが2つ fix. nostter ok
  // untilValue = 1739159139;  // x(twitter) large ok. x.com (by tag)
//  untilValue = 1691662709;  // repost mov fix. nostter ok
// untilValue = 1703564079;  // googleusercontent.com/ img fix. contentに"`"が1つ残る理由は、"r"には'が1つ、contentには2つのため。
// untilValue = 1739258350;  // tag "r" jpg
// untilValue = 1739256506;  // fix. 2個目、３個目の画像が表示されない
// untilValue = 1739089652;  // inlineImage. tag "r" なし.
// untilValue = 1739169439;  // httpが２つ。画像表示 fix. jpg(fron content)
// untilValue = 1697112060;  // #r link fix. tag "r"を全卓スペースで分割してURLを取得。tag rにURLと日本語が入っている場合があるため
//  untilValue = 1739151061;  // Apple Music OGP. fix. nostrudel large OK (by content)
//  untilValue = 1739169149;  // userStatus test
//  untilValue = 1739114201;  // YouTube repost fix. nostter ok
//  untilValue = 1739008994;  // kind:1111 Commment Re] fix
//  untilValue = 1703568307;  // img threads NG. link切れ
//  untilValue = 1739151041;  // Twitter OGP. nostter large OK (by content)
//  untilValue = 1692963542;  // spotify album. no tag "r"
//  untilValue = 1695999820;  // Apple Music OGP. fix.
//  untilValue = 1688390047;  // music.youtube (normal youtube ok)
//  untilValue = 1688382329;  // music.youtube (normal youtube ok)
//  untilValue = 1739008290;  // youtube fix Delete After &
//  untilValue = 1739114136;  // YouTube fix. nostter ok
//  untilValue = 1739265383;  // youtube hrefが表示される
//  untilValue = 1739113299;  // YouTube fix. youtube.com
//  untilValue = 1739114442;  // あめさん @rain_256
//  untilValue = 1739011806;  // mostr niji
//  untilValue = 1739091313;  // repost image size
//  untilValue = 1739163316;  // Repost  fix
//  untilValue = 1739098339;  // #e relay address #e(wss://relay.nostr.band lu) fix
//  untilValue = 1739100944;  // client fix
//  untilValue = 1739012160;  // repost ¥n fix
//  untilValue = 1739017185;  // repost 数字 fix
//  untilValue = 1739011853;  // ryusoku fix
//  untilValue = 1704284862;  // moster cannot open
//  untilValue = 1704158604;  // cashu sats. noStrudel or snort ok
//  untilValue = 1704037251;  // lightning invoice 1 sat pay. snort ok
//  untilValue = 1700282586;  // kind 10005 Channel list?
//  untilValue = 1699350541;  // Nostrasia Day 1 Summary Nosli
//  untilValue = 1698636018;  // kind 6666
//  untilValue = 1698415786;  // Zap Add Avatar
//  untilValue = 1697641710;  // ok :bow:  FreeFrom ok
//  untilValue = 1697598212;  // Zap
//  untilValue = 1697471297;  // kind:4550
//  untilValue = 1697385059;  // 42.Channel_Message nostter
//  untilValue = 1697448782;  // kind:9735
//  untilValue = 1697289857;  // will nos.lol
//  untilValue = 1697223369;  // jack nos.lol
//  untilValue = 1697282603;  // fiatjaf yabu.me
//  untilValue = 1697247223;  // reply image OK
//  untilValue = 1697247497;  // tag relay
//  untilValue = 1696632885;  // Metadata
//  untilValue = 1696502429;  // jpg OK
//  untilValue = 1696412926;  // LIVE
//  untilValue = 1696119569;  // njump.me nevent fix
//  untilValue = 1695438407;  // to link fix
//  untilValue = 1695370850;  // tiktok
//  untilValue = 1695066723;  // kind:10001 pin Channel
//  untilValue = 1694945195;  // repost 1694945166
//  untilValue = 1694683832;  // generic repost, Nostrasia Hackathon
//  untilValue = 1694687538;  // zap request
//  untilValue = 1694359339;  // search kind:30040
//  untilValue = 1694326407;  // kind:10030
//  untilValue = 1694003737;  // nostr:naddr1 zap.stream
//  untilValue = 1693796212;  // #e(reply fix
//  untilValue = 1693566199;  // generic repost 42.Channel_Message
//  untilValue = 1693300143;  // Channel creation
//  untilValue = 1692922942;  // nak install
//  untilValue = 1692649004;  // mp4
//  untilValue = 1691665815;  // tag:h nowplaying
//  untilValue = 1691417549;  // kind:9735 zap memo
//  untilValue = 1690983115;  //live chat message kind:1311 Karnage
//  untilValue = 1690284540;  // \t
//  untilValue = 1690114119;  //youtube ok
//  untilValue = 1690041940;  //To 5
//  untilValue = 1689862993;  //https Add fix max width 580
//  untilValue = 1689652872;  //NIP-36
//  untilValue = 1689374075;  //NIP-98 Firebase Auth
//  untilValue = 1689334972;  //ff14
//  untilValue = 1689335282;  //NIP-50 search nostr.band
//  untilValue = 1689254202;  //repost
//  untilValue = 1689245113;  //nostr:naddr1 nostter fix
//  untilValue = 1688944930;  //threads ogp
//  untilValue = 1688395711;  //youtube playlist (normal youtube ok)
//  untilValue = 1688303413;  //https:// search engine
//  untilValue = 1688289075;  //1,300 active authors 2023/7/2
//  untilValue = 1688261108;  //zap
//  untilValue = 1688115603;  //nostr:profile1
//  untilValue = 1688127866;  //nostr:nprofile1
//  untilValue = 1688084234;  //live_chat kind:1311 will
//  untilValue = 1675550855;  //https://
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
//  untilValue = 1686985618;  //about nevent relay
//  untilValue = 1686949316;  //2 cards fix
//  untilValue = 1686918544;  //nhk news card
//  untilValue = 1686918929;  //hatenablog, nicovideo, card
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
//  untilValue = 1707783206;  // :kubipaka_null: NG

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
//  untilValue = 1676210000; // 
//  untilValue = 1676300000; // 2023/2/13 23-2023/2/13 23 +100,000
//  untilValue = 1676350000; // 2023/2/14 13-2023/2/14 12, +50,000
//  untilValue = 1676400000; // 2023/2/15 3- 2023/2/15 1,  +50,000
//  untilValue = 1676470000; // 2023/2/15 23-2023/2/15 20, +10,000
//      untilValue = 1676480000; // 2023/2/16 1- 2023/2/15 22, +10,000
//      untilValue = 1676550000; // 2023/2/16 21-2023/2/16 15, +20,000
//      untilValue = 1676580000; // 2023/2/17 5- 2023/2/16 21, +30,000
//      untilValue = 1676640000; // 2023/2/17 22-2023/2/17 19, +10,000
//      untilValue = 1676650000; // 2023/2/18 1- 2023/2/17 21, +10,000
//      untilValue = 1676750000; // 2023/2/19 4- 2023/2/17 23,+100,000
      //untilValue = 1676840000; // 2023/2/20 5- 2023/2/18 0,  +90,000
      //untilValue = 1676920000; // 2023/2/21 4- 2023/2/18 5,  +80,000
//      untilValue = 1676990000; // 2023/2/21 23-2023/2/21 20, +10,000 nosaray
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
//      untilValue = 1677590000; // 2023/2/28 22-2023/2/28 15  +10,000 nosaray
//      untilValue = 1677600000; // 2023/3/1 0-  2023/2/28 22, +10,000

      //until 1677700000, // 2023/3/2 4-  2023/3/2 1,  +100,000, limit 100
      //until 1677800000, // 2023/3/3 8-  2023/3/3 3,  +100,000 * 25
      //until 1677900000, // 2023/3/4 12- 2023/3/4 8,  +100,000
      //untilValue = 1678000000; // 2023/3/5 16- 2023/3/5 13, +100,000
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
      //untilValue = 1680370000; // 2023/4/1 - 2023/4/1 ,  +10,000 *
      
      //until: 1684667029, // 2023/5/21 20:03 - 

//  untilValue = 1675720000; // 2023/2/-     2023/2/,     +20,000



      //authors: ['2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2','43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906','fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b'], // maya,Segment,shino3

//      authors: ['91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877'],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,6969,9734,9735,10000,10001,10002,10003,10005,30000,30001,30003,30008,30009,30023,30311,30315,31922,31989,31990],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,4550,6969,9734,9735,10000,10001,10002,10003,10005,],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,4550,6969,9734,9735,10000,10001,10002,10003,10005,13194,23194,23195],
//      kinds: [30000,30001,30003,30008,30009,30023,30311,30315,31922,31989,31990],


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



/*
  const onLoadNext = async () => {
    untilValue = 1688863000;
    alert("Next");
    //return;
  }
*/