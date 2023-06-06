import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import { nip19 } from "nostr-tools";
import moment from 'moment';
import Pictures from './Pictures';

const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      until: dateToUnix(now.current), // all new events from now
      until: 1686048907,  //paging

      //until: 1686034150,  //paging contentLink
      //until: 1686038739,  //paging (#e)
      //until: 1686041046,  //paging conteltLink
      //until: 1686034209,  //about reverce
      //until: 1685956335,  //reverce erechorse
      //until: 1685891401,  //reverce rain
      //until: 1685844995,  //reverce
      //until: 1685844912,  //reverce
      //until: 1685884961,  //reverce

      //authors: ['2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2','43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906','fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b'], // maya,Segment,shino3
      kinds: [1,6,42],  // 1:post, 6:repost, 7:reaction, 42:channel message
      //since: dateToUnix(now.current), // all new events from now
      //since: 1679403822, // 1679413822 2023/03/22 0:50
      //limit: 5000,
      limit: 100,
      //"#t": ["nostter"],
      //"#t": ["foodstr"],
      //"#t": ["illust"],
      //"#t": ["ロクヨウ画像"],
      //"#t": ["nosli"],
      //"#t": ["cluster"],
      //"#t": ["Amethyst"],

      //until: 1672000000, // 2022/12/26-1970/1/1 ,3 month ago, 17 notes
      //until: 1675000000, // 2023/1/28- 1970/1/1

      //until: 1676000000, // 2023/2/10- 2022/12/19,  +1,000,000, limit 100, wirednet
      //until: 1676200000, // 2023/2/12- 2022/12/19,    +200,000,
      //until: 1676300000, // 2023/2/13 23-2023/2/6 23, +100,000,
      //until: 1676350000, // 2023/2/14 13-2023/2/7,   , +50,000
      //until: 1676400000, // 2023/2/15 3- 2023/2/14 12, +50,000
      //until: 1676440000, // 2023/2/15 14-2023/2/15 0,  +40,000
      //until: 1676450000, // 2023/2/15 17-2023/2/15 13, +10,000
      //until: 1676460000, // 2023/2/15 20-2023/2/15 16, +10,000
      //until: 1676470000, // 2023/2/15 23-2023/2/15 20, +10,000
      //until: 1676480000, // 2023/2/16 1- 2023/2/15 22, +10,000
      //until: 1676500000, // 2023/2/16 7- 2023/2/16 0,  +20,000
      //until: 1676520000, // 2023/2/16 12-2023/2/16 6 , +20,000
      //until: 1676530000, // 2023/2/16 15-2023/2/16 10, +20,000
      //until: 1676550000, // 2023/2/16 21-2023/2/16 15, +20,000
      //until: 1676580000, // 2023/2/17 5- 2023/2/16 21, +30,000
      //until: 1676590000, // 2023/2/17 8- 2023/2/16 23  +10,000
      //until: 1676600000, // 2023/2/17 11-2023/2/17 8,  +10,000
      //until: 1676620000, // 2023/2/17 16-2023/2/17 10, +20,000
      //until: 1676630000, // 2023/2/17 19-2023/2/17 16, +10,000
      //until: 1676640000, // 2023/2/17 22-2023/2/17 19, +10,000
      //until: 1676650000, // 2023/2/18 1- 2023/2/17 21, +10,000
      //until: 1676750000, // 2023/2/19 4- 2023/2/17 23,+100,000
      //until: 1676840000, // 2023/2/20 5- 2023/2/18 0,  +90,000
      //until: 1676920000, // 2023/2/21 4- 2023/2/18 5,  +80,000
      //until: 1676940000, // 2023/2/21 9- 2023/2/21 2,  +20,000
      //until: 1676950000, // 2023/2/21 12-2023/2/21 10, +10,000
      //until: 1676970000, // 2023/2/21 17-2023/2/21 11, +20,000
      //until: 1676980000, // 2023/2/21 20-2023/2/21 16, +10,000
      //until: 1676990000, // 2023/2/21 23-2023/2/21 20, +10,000
      //until: 1677030000, // 2023/2/22-10 2023/2/21 23, +40,000
      //until: 1677040000, // 2023/2/22 13-2023/2/22 8,  +10,000
      //until: 1677050000, // 2023/2/22 16-2023/2/22 12  +10,000
      //until: 1677060000, // 2023/2/22 18-2023/2/22 15  +10,000
      //until: 1677070000, // 2023/2/22 21-2023/2/22 18  +10,000
      //until: 1677080000, // 2023/2/23 0- 2023/2/22 22  +10,000
      //until: 1677100000, // 2023/2/23 6- 2023/2/22 23  +20,000
      //until: 1677130000, // 2023/2/23 14-2023/2/23 2,  +30,000
      //until: 1677150000, // 2023/2/23 19-2023/2/22 12  +20,000
      //until: 1677170000, // 2023/2/24 1- 2023/2/23 17  +20,000
      //until: 1677200000, // 2023/2/24 9- 2023/2/24 1   +30,000
      //until: 1677220000, // 2023/2/24 15-2023/2/24 9   +20,000
      //until: 1677230000, // 2023/2/24 18-2023/2/24 14  +10,000
      //until: 1677270000, // 2023/2/25 5- 2023/2/24 18  +40,000
      //until: 1677300000, // 2023/2/25 13-2023/2/25 3,  +30,000
      //until: 1677320000, // 2023/2/25 19-2023/2/25 14, +20,000
      //until: 1677360000, // 2023/2/26 6- 2023/2/25 18, +40,000
      //until: 1677380000, // 2023/2/26 11-2023/2/26 3,  +20,000
      //until: 1677400000, // 2023/2/26 17-2023/2/26 11  +20,000
      //until: 1677420000, // 2023/2/26 22-2023/2/26 20  +20,000
      //until: 1677440000, // 2023/2/27 4- 2023/2/26 23  +20,000
      //until: 1677460000, // 2023/2/27 10-2023/2/27 4   +20,000
      //until: 1677480000, // 2023/2/27 15-2023/2/27 9   +20,000
      //until: 1677490000, // 2023/2/27 18-2023/2/27 16  +10,000
      //until: 1677500000, // 2023/2/27 21-2023/2/27 19  +10,000
      //until: 1677520000, // 2023/2/28 2- 2023/2/27 23  +20,000
      //until: 1677540000, // 2023/2/28 8- 2023/2/28 0   +20,000
      //until: 1677550000, // 2023/2/28 11-2023/2/28 9   +10,000
      //until: 1677560000, // 2023/2/28 13-2023/2/28 12  +10,000
      //until: 1677570000, // 2023/2/28 16-2023/2/28 15  +10,000
      //until: 1677580000, // 2023/2/28 19-2023/2/28 15  +10,000
      //until: 1677590000, // 2023/2/28 22-2023/2/28 15  +10,000
      //until: 1677600000, // 2023/3/1 0-  2023/2/28 22, +10,000

      //until: 1677700000, // 2023/3/2 4-  2023/3/2 1,  +100,000, limit 100
      //until: 1677800000, // 2023/3/3 8-  2023/3/3 3,  +100,000 * 25
      //until: 1677900000, // 2023/3/4 12- 2023/3/4 8,  +100,000
      //until: 1678000000, // 2023/3/5 16- 2023/3/5 13, +100,000
      //until: 1678100000, // 2023/3/6 19- 2023/3/6 18, +100,000
      //until: 1678200000, // 2023/3/7 23- 2023/3/7 19, +100,000
      //until: 1678300000, // 2023/3/9 3-  2023/3/8 15, +100,000
      //until: 1678400000, // 2023/3/10 7- 2023/3/10 2, +100,000
      //until: 1678500000, // 2023/3/11 10-2023/3/11 8, +100,000
      //until: 1678600000, // 2023/3/12 14-2023/3/12 12,+100,000
      //until: 1678700000, // 2023/3/13 18-2023/3/13 16,+100,000
      //until: 1678800000, // 2023/3/14 22-2023/3/14 21,+100,000
      //until: 1678860000, // 2023/3/15 14-2023/3/15 10,+100,000,broccoli
      //until: 1678900000, // 2023/3/16 2- 2023/3/15 20,+100,000
      //until: 1679000000, // 2023/3/17 5- 2023/3/17 1, +100,000
      //until: 1679100000, // 2023/3/18 9- 2023/3/18 4, +100,000
      //until: 1679200000, // 2023/3/19 13-2023/3/19 11,+100,000
      //until: 1679300000, // 2023/3/20 17-2023/3/20 14,+100,000
      //until: 1679400000, // 2023/3/21 20-2023/3/21 18,+100,000
      //until: 1679500000, // 2023/3/23 0- 2023/3/22 21,+100,000
      //until: 1679600000, // 2023/3/24 4- 2023/3/24 1, +100,000
      //until: 1679700000, // 2023/3/25 8- 2023/3/25 1, +100,000
      //until: 1679800000, // 2023/3/26 12-2023/3/25 12,+100,000
      //until: 1679900000, // 2023/3/27 15-2023/3/27 14,+100,000
      //until: 1680000000, // 2023/3/28 19-2023/3/28 17,+100,000 *26
      //until: 1680050000, // 2023/3/29 9- 2023/3/29 6,  +50,000 *11
      //until: 1680100000, // 2023/3/29 23-2023/3/29 22, +50,000 *13
      //until: 1680150000, // 2023/3/30 13-2023/3/30 11, +50,000 *12
      //until: 1680160000, // 2023/3/30 16-2023/3/30 14, +10,000 *
      //until: 1680170000, // 2023/3/30 18-2023/3/30 17, +10,000 *
      //until: 1680180000, // 2023/3/30 21-2023/3/30 20, +10,000 *2
      //until: 1680190000, // 2023/3/31 0- 2023/3/30 23, +10,000 *2
      //until: 1680200000, // 2023/3/31 3- 2023/3/31 0,  +10,000
      //until: 1680210000, // 2023/3/31 5- 2023/3/31 0,  +10,000
      //until: 1680220000, // 2023/3/31 8- 2023/3/31 4,  +10,000
      //until: 1680230000, // 2023/3/31 11- 2023/3/31 10,  +10,000 *2
      //until: 1680240000, // 2023/3/31 14- 2023/3/31 12,  +10,000 *
      //until: 1680250000, // 2023/3/31 17- 2023/3/31 15,  +10,000 *
      //until: 1680260000, // 2023/3/31 19- 2023/3/31 17,  +10,000
      //until: 1680270000, // 2023/3/31 22- 2023/3/31 20,  +10,000 *

      //until: 1680300000, // 2023/4/1 6- 2023/4/1 2,  +30,000
        //until: 1680300000, // 2023/4/1 6- 2023/3/31 12,  +50,000 limit 5,000
      //until: 1680310000, // 2023/4/1 9- 2023/4/1 4,  +10,000 *2
      //until: 1680320000, // 2023/4/1 12- 2023/4/1 10,  +10,000 *
      //until: 1680330000, // 2023/4/1 15- 2023/4/1 13,  +10,000 *
      //until: 1680340000, // 2023/4/1 18- 2023/4/1 15,  +10,000
      //until: 1680350000, // 2023/4/1 20- 2023/4/1 17,  +10,000
      //until: 1680360000, // 2023/4/1 23- 2023/4/1 21,  +10,000 *
      //until: 1680370000, // 2023/4/1 - 2023/4/1 ,  +10,000 *
      
      //until: 1684667029, // 2023/5/21 20:03 - 

    },
  });

  /*const { data: npub } = nip19.decode(
    "npub1gdjc46gns2lw0harclpkpvf6tmyvygnrtu4j4tfaua0yhvsd4yrq38fkq3"  // maya
  );

  const { data: userData, isLoading } = useProfile({
    pubkey: npub.toString(),
  });
  console.log(isLoading);*/


  // following list
  const { events: events2 } = useNostrEvents({
    filter: {
      kinds: [3],  // 3:following list
      //authors: ["c186f6af371c63beb8935fef666f59d7c6941434e237434ec5576baa7254b142"],  // hyuki  67 following
      //authors: ["43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906"],  // maya
      //authors: ["0c9b1e9fef76c88b63f86645dc33bb7777f0259ec41e674b61f4fc553f6db0e0"],  // shion
      authors: ["91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877"],  // 1j
      //authors: ["087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e"],  // jp user bot
      
      //since: 0,
      limit: 1000,
    },
  });

  var followList = "";

  const renderImageList2 = (list) => {
    const posts = list.map((event, index) => {
      for(let i=0; i<event.tags.length; i++) {
        /*if(event.tags[i] == undefined) {
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
  const renderImageList = (list) => {
    const posts = list.map((note, index) => {

      follow = "";
      if(!followList.includes(note.pubkey)) {
        // following filter
	follow = "follow]";
        return;
      }

      if(note.pubkey == '1f617e368ce633acef348a2f755dd0a459e56e394766699524ae5d0ee66e9caa')
      {
        return;
      }

      let dateTime = new Date(note.created_at * 1000);
      let createdDate = dateTime.toLocaleDateString('ja-JP');
      let createdTime = createdDate + ' ' + dateTime.toLocaleTimeString('ja-JP');

      const npub = nip19.npubEncode(note.pubkey)
      const url = "https://nostter.vercel.app/" + npub 

      let imageURL2 = getImageURL(note.pubkey);  // avator

      let noteUrl = "https://nostter.vercel.app/search?q=" + note.id

      /*let imageURL = Pictures.pictures.map((picture, index) => {
        if(note.pubkey == picture.npub) {
          return picture.pic;
        }
      });*/


      let reply = "";
      let replyToHex1 = nip19.npubEncode(note.pubkey)
      let replyToHex2 = nip19.npubEncode(note.pubkey)
      let replyToHex3 = nip19.npubEncode(note.pubkey)
      let replyToImageURL1 = getImageURL(note.pubkey);
      let replyToImageURL2 = getImageURL(note.pubkey);
      let replyToImageURL3 = getImageURL(note.pubkey);
      let replyToUrl1 = "https://nostter.vercel.app/" + npub 
      let replyToUrl2 = "https://nostter.vercel.app/" + npub
      let replyToUrl3 = "https://nostter.vercel.app/" + npub
      let replyToImageSize1 = "0"
      let replyToImageSize2 = "0"
      let replyToImageSize3 = "0"
      let motoHex = replyToHex1
      let repHex = "";

      let linkUrl1 = "";
      let linkUrlText1 = "";  // #r 1
      let linkUrl2 = "";
      let linkUrlText2 = "";  // #r 2
      let linkUrl3 = "";
      let linkUrlText3 = "";  // #r 3
      let linkUrl4 = "";
      let linkUrlText4 = "";  // #r 4
      let eventLinkUrl1 = "";
      let eventLinkUrlText1 = "";  // #e 1
      let eventLinkUrl2 = "";
      let eventLinkUrlText2 = "";  // #e 2

      for(let h=0; h<note.tags.length; h++)  {
        if(note.tags[h][0] == "p") {  // mention
          reply = "To]";
	  if(!note.tags[h][1].includes("npub")) {  // not hex
	    //if(motoHex != nip19.npubEncode(note.tags[h][1])) {  // not self
	    if(replyToImageSize1 == "0") {
              replyToImageSize1 = "40"
              replyToImageURL1 = getImageURL(note.tags[h][1]);  // to user id
	      if(replyToImageURL1 == "") {
                replyToImageSize1 = "60"
	      }
		repHex = note.tags[h][1];
	      replyToHex1 = nip19.npubEncode(note.tags[h][1]);
	      replyToUrl1 = "https://nostter.vercel.app/" + replyToHex1
	    }
	    else if(replyToImageSize2 == "0") {
	      replyToHex2 = nip19.npubEncode(note.tags[h][1]);
	      if(replyToHex2 != replyToHex1) {
                replyToImageSize2 = "40"
                replyToImageURL2 = getImageURL(note.tags[h][1]);  // to user id
	        replyToUrl2 = "https://nostter.vercel.app/" + replyToHex2
	      }
	    }
	    else if(replyToImageSize3 == "0") {
	      replyToHex3 = nip19.npubEncode(note.tags[h][1]);
	      if(replyToHex3 != replyToHex2 && replyToHex3 != replyToHex1) {
                replyToImageSize3 = "40"
                replyToImageURL3 = getImageURL(note.tags[h][1]);  // to user id
	        replyToUrl3 = "https://nostter.vercel.app/" + replyToHex3
	      }
	    }
	    //}
	  }
          for(let i=0; i<note.tags.length; i++) { 
            if(note.tags[i][0] == "e") {  // re
              reply = "Re]";
            }
          }
        }
	else if(note.tags[h][0] == "e") {
	  if(reply == "" || reply == "#e]") {
	    reply = "#e]";
	  }

	  if(eventLinkUrlText1 == "") {
            eventLinkUrlText1  = "__" + note.tags[h][1].substring(0,7) + "(#e)";
	    eventLinkUrl1 = "https://nostter.vercel.app/search?q=" + note.tags[h][1]
	  }
	  else if(eventLinkUrlText2 == "") {
            eventLinkUrlText2  = "__" + note.tags[h][1].substring(0,7) + "(#e 2)";
	    eventLinkUrl2 = "https://nostter.vercel.app/search?q=" + note.tags[h][1]
            eventLinkUrlText1  = eventLinkUrlText1.replace("#e","#e 1");
	  }
        }
      }

      let content = note.content;
      if(note.kind == "6") {  // 6.repost
        reply = "Repost]";
        
	let tmp = content.split('\",');  // ",
        for(let i=0; i<tmp.length; i++) {
	  if(tmp[i].includes("\"content\"")) {
	    let tmp2 = tmp[i].split('],');  // ],
	    for(let j=0; j<tmp2.length; j++) {
	      if(tmp2[j].includes("\"content\"")) {
	        tmp[i] = tmp2[j];
	      }
	    }
	    content = tmp[i];
	    //content = content.replace("jpg",'');  //test
	    
            for(let j=0; j<20; j++) {
	      content = content.replace("\\n"," ");
	    }
	    
	    content = content.replace("{","");
	    content = content.replace("\"content\":\"","");
	    content = content.replace("\"","");

            for(let j=0; j<11; j++) {
	      content = content.replace("\\","");
	    }
	  }
	}
	for(let i=0; i<note.tags.length; i++) {
	  if(content == "") {
	    if(note.tags[i][0] == "e") {
	      //content = note.tags[i][1] + "," + content;  // to eventId
	    }
	  }
	}
      }

      let emoji1URL = "";
      let emoji1Size = "0"
      let emoji2URL = "";
      let emoji2Size = "0"
      let emoji3URL = "";
      let emoji3Size = "0"
      let emoji4URL = "";
      let emoji4Size = "0"
      let emoji5URL = "";
      let emoji5Size = "0"
      
      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] == "emoji") {
          if(i==0) {
            emoji1Size = "40";
            emoji1URL = note.tags[i][2];
            //note.content = note.content.replace(":" + note.tags[0][1] + ":",'');
	  }
          if(i==1) {
            emoji2Size = "40";
            emoji2URL = note.tags[i][2];
            //note.content = note.content.replace(":" + note.tags[1][1] + ":",'');
	  }
          if(i==2) {
            emoji3Size = "40";
            emoji3URL = note.tags[i][2];
            //note.content = note.content.replace(":" + note.tags[2][1] + ":",'');
	  }
          if(i==3) {
            emoji4Size = "40";
            emoji4URL = note.tags[i][2];
            //note.content = note.content.replace(":" + note.tags[3][1] + ":",'');
	  }
          if(i==4) {
            emoji5Size = "40";
            emoji5URL = note.tags[i][2];
            //note.content = note.content.replace(":" + note.tags[4][1] + ":",'');
	  }
        }
      }

      let inlineImage1Height = "0";
      let inlineImage2Height = "0";
      let inlineImage3Height = "0";
      let inlineImage4Height = "0";
      let image1Url = "";
      let image2Url = "";
      let image3Url = "";
      let image4Url = "";
      //let words = content.split('\n');
      //words = content.split(' ');
      //words = content.split('\n\n');
      let words = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|[a-z0-9]*)/g);

      let imageCount = 0;
      for(let i=0; i<words .length; i++) {
        if(words[i].includes(".jpg")  ||
           words[i].includes(".jpeg") || 
           words[i].includes(".png")  || 
           words[i].includes(".gif")  || 
           words[i].includes(".svg")  || 
           words[i].includes(".ico")  || 
           words[i].includes(".bmp")  || 
           words[i].includes(".webp") ){
	  if(imageCount==0) {
            inlineImage1Height = "250";
	    image1Url = words[i];
	  }
	  else if(imageCount==1) {
            inlineImage2Height = "250";
	    image2Url = words[i];
	  }
	  else if(imageCount==2) {
            inlineImage3Height = "250";
	    image3Url = words[i];
	  }
	  else if(imageCount==3) {
            inlineImage4Height = "250";
	    image4Url = words[i];
	  }
	  imageCount = imageCount + 1;
          content = content.replace(words[i],'');
        }
      }

      let note1LinkUrl = "";
      let note1LinkText = "";
      let note1LinkUrl2 = "";
      let note1LinkText2 = "";
      let wordsNostr = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|nostr:(?:nprofile|nrelay|nevent|naddr|nsec|npub|note)[a-z0-9]*)/g);
      // nostr:note1, nostr:naddr1, nostr:nevent1
      if(content != undefined &&
        (content.includes("nostr:note1") || 
         content.includes("nostr:naddr1") || 
         content.includes("nostr:nevent1") || 
         content.includes("nostr:npub1"))
	) {
	for(let i=0; i<wordsNostr.length; i++) {
	  if(wordsNostr[i].includes("nostr:")) {
            //content = wordsNostr[0] + " https://nostter.vercel.app/" + wordsNostr[1].replace("nostr:",'');
	    content = content.replace(wordsNostr[i],'');
	    note1LinkUrl =  "https://nostter.vercel.app/" + wordsNostr[i].replace("nostr:",'')
	    content = content.replace(note1LinkUrl,'');
            note1LinkText = "__nostr:note1(quote)";
	    if(note1LinkUrl.includes("npub")) {
              note1LinkText = "(nostr:npub1)(to)";
	    }
	  }
	}
      }

      // cpngirl  
      if(content.includes("nostr:npub17dxnfw2vrhgtk4fgqdmpuqxv05u9raau3w0shay7msmr0dzs4m7s6ng4yl")) 
      {
        content = content.replace("nostr:npub17dxnfw2vrhgtk4fgqdmpuqxv05u9raau3w0shay7msmr0dzs4m7s6ng4yl","@ログボ(テスト運用中)");
      }
      // cpngirl  
      let cpngirlnpub = "f34d34b94c1dd0bb552803761e00cc7d3851f7bc8b9f0bf49edc3637b450aefd"
      for(let i=0; i<note.tags.length; i++)
      {
        if(content.includes("#[0]") && note.tags[i].includes(cpngirlnpub) ) 
        {
          content = content.replace("#[0]","@ログボちゃん(テスト運用中)");
        }
      }

      // #[0], #[1] (#p)
      for(let i=0; i<note.tags.length; i++) {
	let tmp = "#[" + String(i) + "]";
        if(content.includes(tmp)) {
          if(note.tags[i][0] == "p") {
            const npub = nip19.npubEncode(note.tags[i][1])

	    if(note1LinkUrl == "") {
	      note1LinkUrl =  "https://nostter.vercel.app/" + npub
	      note1LinkText = npub.substring(0,12) + "(" + tmp + " #" + note.tags[i][0] + ")"
	    }
	    else if(note1LinkUrl2 == "") {
	      note1LinkUrl2 =  "https://nostter.vercel.app/" + npub
	      note1LinkText2 = "__" + npub.substring(0,12) + "(" + tmp + " #" + note.tags[i][0] + ")"
	    }
          }
	  else {
            content = content + note.tags[i][1] + "(#[0] #" + note.tags[i][0] + ")";
  	  }
        }
      }


      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] == "r") {
	  if(note.tags[i][1].includes("http")) {
	    if(linkUrl1 == "") {
	      linkUrl1 = note.tags[i][1];
	      //linkUrlText1 = note.tags[i][1];
	      if(content != linkUrl1) {
	        content = content.replace(linkUrl1,'');
	      }
	      linkUrlText1 = "__(#r)";
	    }
	    else if(linkUrl2 == "") {
	      linkUrl2 = note.tags[i][1];
	      content = content.replace(linkUrl2,'');
	      linkUrlText2 = "(#r 2)";
	      linkUrlText1 = "__(#r 1)";
	    }
	    else if(linkUrl3 == "") {
	      linkUrl3 = note.tags[i][1];
	      content = content.replace(linkUrl3,'');
	      linkUrlText3 = "(#r 3)";
	    }
	    else if(linkUrl4 == "") {
	      linkUrl4 = note.tags[i][1];
	      content = content.replace(linkUrl4,'');
	      linkUrlText4 = "(#r 4)";
	    }
	  }
        }
      }

      let contentLinkUrlFront = "";   // link before content
      let contentLinkUrlFront2 = "";  // link before content
      let contentLinkUrlAfter = "";   // link after content
      let contentLinkUrlAfter2 = "";  // link after content
      let afterSpacer1 = "";
      let afterSpacer2 = "";
      let words2 = content.split(' ');
      words2 = content.split('\n');
      words2 = content.split(' ');  // zenkaku space

      if(content.includes("https://")) {
        for(let i=0; i<words2.length; i++) {
	  if(words2[i].includes("https://") && contentLinkUrlAfter == "") {
	    if(i == 0) {
	      afterSpacer1 = "__";
	      contentLinkUrlFront = words2[i];
	    }
	    else if(i == 1 && words2[0] == "") {
	      afterSpacer1 = "__";
	      contentLinkUrlFront = words2[i];
	    }
	    else {
	      afterSpacer1 = "__";
	      contentLinkUrlAfter = words2[i];
	    }
	    content = content.replace(words2[i],'');
	  }
	  else if(words2[i].includes("https://") && contentLinkUrlAfter != "") {
	    afterSpacer2 = "__";
	    contentLinkUrlAfter2 = words2[i];
	    content = content.replace(words2[i],'');
	  }
        }
      }

      let contentWarning = "";
      let contentWarningText = "";

      for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] == "content-warning") {  // NIP-36
	  contentWarning = "[!!content-warning!!]";
	  contentWarningText = note.tags[i][1];
        }
      }
      
      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              <a href={url} target="_blank"><img src={imageURL2} width="60" height="60" /></a>
	        {follow}
	        {contentWarning}{contentWarningText}{contentWarning}
                {reply} <a href={replyToUrl1} target="_blank"><img src={replyToImageURL1} width={replyToImageSize1} height="40" /></a> <a href={replyToUrl2} target="_blank"><img src={replyToImageURL2} width={replyToImageSize2} height="40" /></a>  <a href={replyToUrl3} target="_blank"><img src={replyToImageURL3} width={replyToImageSize3} height="40" /></a>
                <img src={emoji1URL} width={emoji1Size} height={emoji1Size} />
                <img src={emoji2URL} width={emoji2Size} height={emoji2Size} />
                <img src={emoji3URL} width={emoji3Size} height={emoji3Size} />
                <img src={emoji4URL} width={emoji4Size} height={emoji4Size} />
                <img src={emoji5URL} width={emoji5Size} height={emoji5Size} />
		<a href={contentLinkUrlFront} target="_blank">{contentLinkUrlFront}</a>
		<a href={contentLinkUrlFront2} target="_blank">{contentLinkUrlFront2}</a>
                {content}
		<a href={note1LinkUrl} target="_blank">{note1LinkText}</a>
		<a href={note1LinkUrl2} target="_blank">{note1LinkText2}</a>
		<a href={eventLinkUrl1} target="_blank">{eventLinkUrlText1}</a>
		<a href={eventLinkUrl2} target="_blank">{eventLinkUrlText2}</a>
		<a href={linkUrl1} target="_blank">{linkUrlText1}</a>
		<a href={linkUrl2} target="_blank">{linkUrlText2}</a>
		<a href={linkUrl3} target="_blank">{linkUrlText3}</a>
		<a href={linkUrl4} target="_blank">{linkUrlText4}</a>
		<a href={contentLinkUrlAfter} target="_blank">{afterSpacer1}{contentLinkUrlAfter}</a>
		<a href={contentLinkUrlAfter2} target="_blank">{afterSpacer2}{contentLinkUrlAfter2}</a>
                <a href={image1Url} target="_blank"><img src={image1Url} height={inlineImage1Height} /></a>
                <a href={image2Url} target="_blank"><img src={image2Url} height={inlineImage2Height} /></a>
                <a href={image3Url} target="_blank"><img src={image3Url} height={inlineImage3Height} /></a>
                <a href={image4Url} target="_blank"><img src={image4Url} height={inlineImage4Height} /></a>
                <font color="orange" size="2">{moment(createdTime).fromNow()}</font>
                -<a href={noteUrl} target="_blank">{createdTime}</a>-{note.created_at}-
                <font color="black">{repHex}-{note.pubkey}-</font>{index}
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
      let image =''
      if (pubkey == '43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906') {
        // maya
        image = 'https://i.gyazo.com/3e33d8e30a6db0868ad7a5beee61d5d2.webp'
      } // @@ 
      else if (pubkey == '') {
        image = ''
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
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
      } 
      else if (pubkey == '') {
        image = ''
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
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMTM5LDIxNywxKTsgc3Ryb2tlOnJnYmEoMzgsMTM5LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
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
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTc0LDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTc0LDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScyNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
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
      }
      else if (pubkey == 'a123fe2b1696f3595b8706875c358216ffc1365e3120140809c513ded1fd1eab') {
        image = 'https://pbs.twimg.com/profile_images/1615338920283361282/7FDgcfzz_400x400.jpg'
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
      }
      else if (pubkey == '6369fb82bec54226bf09bb365b6f0d71b16c41f56e7edfd4f97de23f9c3281da') {
        image = 'https://nostr.build/i/nostr.build_e9120a1b32f992f44c55c0a8916428a9e17a0b1a73439ecd0731997e94a67001.bmp'
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
      }
      else if (pubkey == '99b3b70ce10f097232841cd89e95f7b69178f2450856fe1e7d144751ad8e51e1') {
        image = 'https://nostr.build/i/nostr.build_66a9c54af88a3c6cf4eabebafb78477a8aca05925446aec9c3c6d78a508b6532.jpeg'
        image = 'https://nostr.build/i/d7118b3e1997f328e8371afd05c4668918745e58a3c07c7e072670215af91bfa.jpg'
      }
      else if (pubkey == 'c3e12ba9c3117a14b33e24ed5506bcd9dafb39f6dc46e10c46a6e161c0b6626e') {
        image = 'https://gist.githubusercontent.com/n0nakamura/83c6d1b7341027f414a44e7394f110eb/raw/332df8b0d2d236aad24efc409556a337e80f95fb/icon_n0nakamura.svg'
        image = 'https://nostr.build/i/0ad78feed267fb40b220a720768e811e702942463eef923d6db55c81f9a57838.gif'
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
      else if (pubkey == '1e090289a239316456a69657a5ab14174514a31a514958e3626163e21a1ba463') {
        image = 'https://nostter.vercel.app/npub1rcys9zdz8yckg44xjet6t2c5zaz3fgc629y43cmzv937yxsm533s9vp27k'
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
      else if (pubkey == '') {
        image = ''
      }
      else if (pubkey == 'f5142896ed33a06299797864338779ba229a476693ca037a3a57f25440f94d11') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_3d83e82e7cb18822133d34cc0002cc874862562e872aad6ee02ad8cf55958a26.jpeg'
      }
      else if (pubkey == '8e4cdaca2afb6765f3c18d5d5c41ca9e1502e0816e96e8df4fc779e031030d4a') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/qchan.png'
      }
      else if (pubkey == '9b840e12109a3ed2d54c75e872246e76d96a45fcdd6b171dc723eeac7232e29b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.kojira.net/nostaro.png'
      }
      else if (pubkey == '5f010febe730be42d18c3bf9bf3a135f90621dc572175b5c357119533ae9756b') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1353298673933799425/gLMl43fA_400x400.jpg'
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
      }
      else if (pubkey == '1f617e368ce633acef348a2f755dd0a459e56e394766699524ae5d0ee66e9caa') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1509474712543399940/qaT7nqqS.jpg'
      }
      else if (pubkey == '7dc1677112f05eaf49547806543b1c006ce3257278e52b1c9abff63270ed704f') {
        image = 'https://i.imgur.com/WgIkvHL.jpg'
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
      }
      else if (pubkey == 'd801c8d4c9fa14c21a60e9a4c263687eba908b39d818611587f020f060cc5b68') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/p/nostr.build_e0b76469720c82cab4b43571e0260278a31adb0f1d5646542fd5a4cd0159eb4a.png'
      }
      else if (pubkey == 'a3bce095cd0e8348b094c9201bd0c3270eafaf78f776517f4101326daf5cb7ff') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/83725933?v=4'
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
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDY3LDEpOyBzdHJva2U6cmdiYSgzOCwyMTcsNjcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMjcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
	image = 'https://nostr.kojira.net/nostrchan2_new.png'
      }
      else if (pubkey == '1bdab038c79ce5fad6c2937a8ce720805de00288faa7d0a9df906bc1f7bffbc7') {
        image = 'https://media.mstdn.jp/accounts/avatars/000/868/408/original/301235090b57b4b4.png'
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
        image = 'npub1z90qtmghkg6zd6cgx0d56ept0c97xsu8lwsswr9e7tqv65l3c4jqcn5wm3'
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
      }
      else if (pubkey == '148755e670adb36ebba529ff46b9f3580a499928249dd79a749b2853450c107f') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://nostr.build/i/nostr.build_6167a9d3b1e22cd4fd8110fdb28204729cfc602d8b27533e3b612722c07b5bf4.jpeg'
        image = 'https://nostr.build/i/1157ac8075fea71d087ed51d82ccbbe534edb1b8732448de0af763a5cfdc2eff.jpg';
      }
      else if (pubkey == '8685f2e2e2792d392af9ea147695a0983c98afacea7fff25004bb50d025a117e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://ja.gravatar.com/userimage/96575492/1a29d227f05f66c68176a6c334128d1d.jpg'
      }
      else if (pubkey == 'c7539f7bcb37decd0848f43223b1ccdbd50f0eb9432aa048e6b45bee0cf5044e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://avatars.githubusercontent.com/u/608754?v=4'
      }
      else if (pubkey == 'b7ab2dc03c22d569cf7c307ea8a59780e89b93c944c62d40bd3f57f5425ae9b0') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://proxy.irismessengers.wtf/insecure/plain/https://nostr.build/i/nostr.build_a701dd3a854c0b85544305e1b9ee4c4100bb0829f6db724e0a30a70bf452b05d.jpg'
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
      else if (pubkey == 'c2966c63a212de44f9ce2230beb5e5862461af159f7f517f43971cd3cd2776ba') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1614671036313899011/xjAYrWcN_400x400.jpg'
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
      else if (pubkey == '51bc2d9506830cc54c62485197ac29f0c27472b3578f1f6de23dfde5b0dddc92') {
        image = 'https://www.dropbox.com/s/2dz6ic31e65biy0/2-480x480.png?dl=1'
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
      else if (pubkey == 'd1bf5ca6326a5473df940488056e1e45f946f11eff65227e7900604a8e2b896e') {
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/760484433392603136/w4w4jQSp_400x400.jpg'
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
      else if (pubkey == '2fca316a7a258c3b304b00c2d3addd9f7517d047cce90058bdb85b2f588789c6') {
        image = 'https://pbs.twimg.com/profile_images/1568089080319340544/rIa_kpBO_400x400.jpg'
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
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDY2LDEpOyBzdHJva2U6cmdiYSgyMTcsMzgsNjYsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzI3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nMTcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PScxNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48L2c+PC9zdmc+'
      }
      else if (pubkey == '97a3bb8cb06ea92e9e4467443b4d5bb90a10a212cb577cae9b63de05d7cacf3e') {
        image = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDM4LDEzMywxKTsgc3Ryb2tlOnJnYmEoMjE3LDM4LDEzMywxKTsgc3Ryb2tlLXdpZHRoOjAuMzI7Jz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg=='
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
        image = 'https://imgproxy.iris.to/insecure/plain/https://pbs.twimg.com/profile_images/1568747937513222144/VneRfcSu_400x400.jpg'
      }
      else if (pubkey == '898f59d12df63f89d85167c89adc5aefa3ab7f6b299d17a4113c4e269ec8a6f3') {
        image = 'https://cdn.gudako.net/social/rita_mascot_ph_rev2.jpg'
      }
      else if (pubkey == 'aa4916c1e0036a526fc112d053ed1f438cee18ea34acc04e79dd4238aae82dcd') {
        image = 'https://www.peipeipe.net/images/jekyll-logo.png'
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
	image = 'https://awayuki.net/con/my/img/icon222.png'
      }
      else if (pubkey == '7aa090be3c66dbcc7c98ca17a22ed5daa2cea6f2b87df35cada814bb09e1e283') {
        image = 'https://pbs.twimg.com/profile_images/1445176476161114113/pWP6zWyX_400x400.jpg'
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
      }
      else if (pubkey == '32310997f6b37b6cd60bb15a28e9a14badddfbf0875a7de24c69123a0c1e64cc') {
        image = 'https://www.eonet.ne.jp/~mmaga/omake/hyutegaki.jpg'
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
      }
      else if (pubkey == 'f40832e26b1d12f8a27717b606996baef68bc4b6b86c4a35ca827f6fbcbf511e') {
        // erechorse
        image = 'https://i.gyazo.com/0775dc06170f3a9385faf921c50d8d80.jpg'
        image = 'https://i.gyazo.com/ee480a2fdfa15aae6c9a15d44225489f.jpg'
      }
      else if (pubkey == '4c5d5379a066339c88f6e101e3edb1fbaee4ede3eea35ffc6f1c664b3a4383ee') {
        // koteitan
        image = 'https://koteitan.github.io/img/ni_circlefit.jpg'
      }
      else if (pubkey == '6b24da7e8e5236d17307501b73b50326f33060d2ec11ee4b9c42576bd011b895') {
        // pomchan
        image = 'https://nostr.build/i/nostr.build_a414ec5fb667dd1965c9f70d4e1e4c3ad7be88ba4189bfcfbc80cf1274eb49c0.jpg'
      }
      else if (pubkey == '5257f6d685301de8792099a0b173c3f57f42750612dd876fa0955aaac90192b1') {
        // takenoko
        image = 'https://storage.googleapis.com/drive.misskey.nokotaro.com/files/fcef8b90-e0af-445e-b259-49422df0ea86.png'
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
    return image;
  }

  return (
    <>
      <div style={{ backgroundColor: "#222222", color: "#DDDDDD" }}>
        <div>
          <p>now:{dateToUnix(now.current)}</p>
        </div>
        <div>
          <PostButton />
        </div>
        <ul>{renderImageList2(events2)}</ul>
        <ul>{renderImageList(events)}</ul>
      </div>
    </>
  );
};


export default Test;
