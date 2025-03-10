import { nip19 } from "nostr-tools";
// import {getImageURL} from './getImageURL'
import {getImageUrl2} from './getImageUrl2'

export const makeReplyHTML = (note) => {

  let arrayImageUrl: string[] = []
  let arrayLinkUrl: string[] = []
  let arrayImageSize: string[] = []
  let imageUrl = ""


  let reply = "";
  //let replyToUserBaseUrl = "https://nostter.app/" 
  //let replyToUserBaseUrl = "https://yabu.me/" 
  //const replyToUserBaseUrl = "https://freefromjp.github.io/FreeFromWeb/#/profile/" 
  //const replyToUserBaseUrl = "https://astraea.mousedev.page/profile/" 
  const replyToUserBaseUrl = "https://nostrudel.ninja/#/u/" 

  let channelUrl = "";
  let eventCount = 0;



  let channel = ""

  if(note.kind === 42) {  // kind:42.Channel_Message
    channel = "42.Channel_Message(lumilumi)] ";   // link to ChannelUrl
  }
  if(note.kind === 1311) {  // kind:1311.live chat
    channel = "Live Chat]";   // link to ChannelUrl
  }


//////////////////////////

  // reply(repost) image url, size
  for(let h=0; h<note.tags.length; h++)  {


// tag "p"
    if(note.tags[h][0] === "p") {  // mention
      reply = "To]";
      if(note.tags[h][1].includes("npub")) {  // npub(not hex) NG
        continue;
      }
      else {
        // Repost kind:6 含む
        const hexReplyTo = note.tags[h][1];

        if(!arrayImageUrl.includes(imageUrl))  {
          arrayImageUrl.push(getImageUrl2(hexReplyTo));
          const npubRreplyTo1 = nip19.npubEncode(hexReplyTo);
          const replyToUrl1 = replyToUserBaseUrl + npubRreplyTo1
          arrayLinkUrl.push(replyToUrl1);

          if(note.kind === 6){  
            if(arrayImageSize.length > 0)  arrayImageSize[arrayImageSize.length-1] = '40'
            arrayImageSize.push('60');
          }
          else  arrayImageSize.push('40');
        }
      }    

      for(let i=0; i<note.tags.length; i++) { 
        //if(note.tags[i][0] === "e" && note.tags[h][1] != note.pubkey) {  // re
        if(note.tags[i][0] === "e") {  // re
          reply = "Re]";
          if(note.kind === 1111) {  // kind:1111:Comment
            reply = "Comment Re]";
          }
        }
      }
    }



//////////////////////////
// tag "a"

    else if(note.tags[h][0] === "a") {  // live chat message. kind:1311
        //	  channelUrl = "https://zap.stream";
        channelUrl = "https://zap.stream/naddr1qq9rzd3c8qcrwvejxqusygpjuxp8vd29p6ancknaztql3eajk52y8xkppfn7au7elkw9c68zg5psgqqqwensgqahaf";
    }



//////////////////////////
// tag "e"

    else if(note.tags[h][0] === "e") {  // NIP-10 kind1
      eventCount = eventCount + 1;
      if(reply === "" || reply === "#e]") {
        if(note.kind === 1) {  // kind:1:note
          reply = "#e]";
        }
      }

      // kind:42.Channel_Message かつ、データに:がない時
      if(note.kind === 42 && !note.tags[h][1].includes(":")) {  // tag:e
        // channelUrl = "https://garnet.nostrian.net/channels/" + note.tags[h][1]
        // channelUrl = "https://coracle.social/chat/" + note.tags[h][1]
        // channelUrl = "https://unyu-house.vercel.app/"
        // channelUrl = "https://unyu-house.vercel.app/channels/" + note.tags[h][1] 
        // channelUrl = "https://unyu-house.vercel.app/channels/" + nip19.neventEncode({id:note.tags[h][1] })
        // channelUrl = "https://nos-haiku.vercel.app/keyword/" + nip19.neventEncode({id:note.tags[h][1] })  // nos_haiku
        channelUrl = "https://lumilumi.app/" + nip19.neventEncode({id:note.tags[h][1] })  // lumilumi
      }
    }


  }  // for


    
    
  // kind:6.repost, kind:16.Generic Repost, kind:4550.Post Approval by moderators
  if(note.kind === 6 || note.kind === 16 || note.kind === 4550) {  
    reply = "Repost]";
    if(note.kind === 16) {
      reply = "Generic Repost]"
    }
    else if(note.kind === 4550) {
    reply = "To]"
    }
  }


  


  let replyHTML = '<a href="' + channelUrl + '" target="_blank">' + channel + '</a>' +
    reply + " ";

  for(let i=0; i < arrayImageUrl.length; i++) {
    replyHTML = replyHTML + '<a href="' + arrayLinkUrl[i] + '" target="_blank"><img src="' + arrayImageUrl[i] + '" width="' + arrayImageSize[i] + '" height="' + arrayImageSize[i] + '" class="imgavatar" /></a>' ;
  }

  return replyHTML;
}
