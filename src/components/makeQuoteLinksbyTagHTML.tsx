import { nip19 } from "nostr-tools";

export const makeQuoteLinksbyTagHTML = (note) => {
  let quoteId = "";
  let quoteUrl1 = "";
  let quoteIdText1 = "";  // #q 1
  let quoteUrl2 = "";
  let quoteIdText2 = "";  // #q 2

  for (let i = 0; i < note.tags.length; i++) {
    let quoteBaseUrl = "https://nostter.app/";
    if (note.tags[i][0] === "q") {
      // if (quoteUrl1 === '') {
        quoteId = note.tags[i][1];  // event id
        if (!quoteId.includes(":")) {  
          quoteUrl1 = quoteBaseUrl + nip19.noteEncode(quoteId);  // Error: Invalid byte sequence. 30023:
          quoteIdText1 = "__#q(" + note.tags[i][1].substring(0, 2) + ")";
        } else {  // ex. 30023:xxx
          quoteId = quoteId.split(':')[1];  // event id
          quoteUrl1 = quoteBaseUrl + nip19.noteEncode(quoteId);  // Error: Invalid byte sequence. 30023:
          quoteIdText1 = "__x#q(" + note.tags[i][1].split(':')[0] + ":)";
          // quoteIdText1 = "__#q(" + quoteUrl1;  // debug
        }
      // }
      // else if (quoteUrl1 != '') {
      //   quoteId = note.tags[i][1];  // event id
      //   if (!quoteId.includes(":")) {  
      //     quoteUrl2 = quoteBaseUrl + nip19.noteEncode(quoteId);
      //     quoteIdText2 = "__#q(" + note.tags[i][1].substring(0, 2) + ")";
      //   } else {// ex. 30023:xxx
      //     quoteIdText2 = "__#q(" + quoteId.split(':')[0] + ":)";
      //   }
      // }
    }
  }

  return { quoteUrl1, quoteIdText1, quoteUrl2, quoteIdText2 };
}
