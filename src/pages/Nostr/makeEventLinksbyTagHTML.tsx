import { nip19 } from "nostr-tools";

export const makeEventLinksbyTagHTML = (note) => {
  let toLinkUrl1 = "";
  let toLinkText1 = "";

  let eventLinkUrl1 = "";
  let eventLinkText1 = "";
  let eventLinkUrl2 = "";
  let eventLinkText2 = "";

  for (let i = 0; i < note.tags.length; i++) {
    if (note.tags[i][0] === "p") {
      const npub = nip19.npubEncode(note.tags[i][1]);
      const toLinkUrl = "https://freefromjp.github.io/FreeFromWeb/#/profile/" + npub;
      // toLinkUrl1 = toLinkUrl;
      toLinkText1 = '_#p';

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
    } else if (note.tags[i][0] === "e") {
      let eventLinkUrl = "";

      if (!note.tags[i][1].includes(":")) {
        eventLinkUrl = "https://nostter.app/" + nip19.noteEncode(note.tags[i][1]);
      }

      if (eventLinkUrl1 === "") {
        eventLinkUrl1 = eventLinkUrl;
        eventLinkText1 = "_#e";
        if (eventLinkUrl === "") {
          eventLinkText1 = "_#e(" + note.tags[i][1] + ")";
        }
        // contentの#[0]をa hrefに置き換え
        // content = content.replace('#[' + i + ']', '<a href="' + eventLinkUrl + '" target="_blank">(quote#)</a>');
      } else if (eventLinkUrl1 !== "") {
        eventLinkUrl2 = eventLinkUrl;
        eventLinkText2 = "_#e";
        if (eventLinkUrl === "") {
          eventLinkText2 = "_#e(" + note.tags[i][1] + ")";
        }
      }
    }
  }

  return {
    toLinkUrl1,
    toLinkText1,
    eventLinkUrl1,
    eventLinkText1,
    eventLinkUrl2,
    eventLinkText2,
  };
};
