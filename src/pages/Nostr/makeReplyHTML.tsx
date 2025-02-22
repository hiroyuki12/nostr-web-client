import { nip19 } from "nostr-tools";
import {getImageURL} from './getImageURL'

export const makeReplyHTML = (note) => {
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
    //let replyToUrl1 = replyToUserBaseUrl + npub 
    let replyToUrl1 = replyToUserBaseUrl
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
    let eventCount = 0;



    let channel = ""

    if(note.kind === 42) {  // kind:42.Channel_Message
      channel = "42.Channel_Message(nos_haiku_keyword)] ";   // link to ChannelUrl
    }
    if(note.kind === 1311) {  // kind:1311.live chat
      channel = "Live Chat]";   // link to ChannelUrl
    }


    // reply(repost) image url, size
    for(let h=0; h<note.tags.length; h++)  {
        if(note.tags[h][0] === "p") {  // mention
            reply = "To]";
            if(!note.tags[h][1].includes("npub")) {  // not hex
                // Repost kind:6
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
              //}
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

        else if(note.tags[h][0] === "a") {  // live chat message. kind:1311
            //	  channelUrl = "https://zap.stream";
            channelUrl = "https://zap.stream/naddr1qq9rzd3c8qcrwvejxqusygpjuxp8vd29p6ancknaztql3eajk52y8xkppfn7au7elkw9c68zg5psgqqqwensgqahaf";
        }

//////////////////////////

        else if(note.tags[h][0] === "e") {  // NIP-10 kind1
          eventCount = eventCount + 1;
          if(reply === "" || reply === "#e]") {
            if(note.kind === 1) {  // kind:1:note
              reply = "#e]";
            }
          }
        }



        if(channelUrl == "") {
          //channelUrl = "https://garnet.nostrian.net/channels/" + note.tags[h][1]
          //channelUrl = "https://coracle.social/chat/" + note.tags[h][1]
          //channelUrl = "https://unyu-house.vercel.app/"
          //channelUrl = "https://unyu-house.vercel.app/channels/" + note.tags[h][1] 

          if(note.kind === 42 && !note.tags[h][1].includes(":")) {  // tag:e
            //channelUrl = "https://unyu-house.vercel.app/channels/" + nip19.neventEncode({id:note.tags[h][1] })
            channelUrl = "https://nos-haiku.vercel.app/keyword/" + nip19.neventEncode({id:note.tags[h][1] })  // nos_haiku
            // channel = 'channel(' + note.tags[h][1]  + ')'  // nos_haiku
            // channel = 'channel(' + note.kind  + ')'  // nos_haiku
          }
        } //  if
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




    const replyHTML = '<a href="' + channelUrl + '" target="_blank">' + channel + '</a>' +
      reply + " " +
      '<a href="' + replyToUrl1 + '" target="_blank"><img src="' + replyToImageURL1 + '" width="' + replyToImageSize1 + '" height="' + replyToImageSize1 + '" /></a>' +
      '<a href="' + replyToUrl2 + '" target="_blank"><img src="' + replyToImageURL2 + '" width="' + replyToImageSize2 + '" height="' + replyToImageSize2 + '" /></a>' +
      '<a href="' + replyToUrl3 + '" target="_blank"><img src="' + replyToImageURL3 + '" width="' + replyToImageSize3 + '" height="' + replyToImageSize3 + '" /></a>' +
      '<a href="' + replyToUrl4 + '" target="_blank"><img src="' + replyToImageURL4 + '" width="' + replyToImageSize4 + '" height="' + replyToImageSize4 + '" /></a>' +
      '<a href="' + replyToUrl5 + '" target="_blank"><img src="' + replyToImageURL5 + '" width="' + replyToImageSize5 + '" height="' + replyToImageSize5 + '" /></a>' ;

    return replyHTML;
}
