


// make tags[0],  client(-via), proxy, alt, etc

export const makeTagsText = (note) => {
  let client = "";
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
      client = "-via " + note.tags[h][1]
    }
    else if(marker === "proxy") { 
    //proxy = note.tags[h][2]  // activitypub (misskey.io, p1.a9z.dev, unnerv.jp, fedibird.com, etc)
    let host = note.tags[h][1].match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
      proxy = "-" + host
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
  }

  return {
    client,
    proxy,
    proxyUrl,
    tagsLinkUrlText1,
    tagsLinkUrlText2,
    tagsLinkUrlText3,
    tagsLinkUrlText4,
    tagsLinkUrlText5,
    tagsLinkUrlText6,
    alt,
    streaming,
    streamingUrl
  };
};

