export const makeTagImageHTML = (content, note) => {

// make img by tag "r"
    
    let arrayLinkUrl: string[] = []
    let imageUrl = ""

    let image1Height = "250";
    let image1Width = "500";




    for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "r" ||
           note.tags[i][0] === "imeta"
        ) {
            if(note.tags[i][1].includes("http")) {
                if(note.tags[i][0] === "r") {
                    imageUrl = note.tags[i][1];
                }
                else {  // imeta
                    for(let j=0; j<note.tags[i].length; j++) {
                        if(note.tags[i][j].includes("image")) {
                            imageUrl = note.tags[i][1].replace('url ', '');
                        }
                    }
                }

                if(imageUrl.includes(".jpg")  ||
                    imageUrl.includes(".jpeg") || 
                    imageUrl.includes(".png")  || 
                    imageUrl.includes(".gif")  || 
                    imageUrl.includes(".svg")  || 
                    imageUrl.includes(".ico")  || 
                    imageUrl.includes(".bmp")  || 
                    imageUrl.includes(".webp") ||
                    imageUrl.includes(".mp4") ||
                    imageUrl.includes(".mov") 
                    // imageUrl.includes("/img/") ||
                    // imageUrl.includes("/images?") ||
                    // imageUrl.includes("?set=set4") ||
                    // imageUrl.includes("pbs.twimg.com/") ||
                    // imageUrl.includes("robohash.org/") ||
                    // imageUrl.includes("pbs.twimg.com/") ||
                    // imageUrl.includes("/profile/avatar/") ||
                    // imageUrl.includes("/imgproxy.snort.social/") ||
                    // imageUrl.includes("/0.gravatar.com/avatar/") ||
                    // imageUrl.includes("/www.gravatar.com/avatar/") ||
                    // imageUrl.includes("googleusercontent.com/") ||
                    // imageUrl.includes("grafana.gsn.im/") ||
                    ) {
                        
                    if(imageUrl.includes("`"))
                    {
                        // googleusercontent
                        imageUrl = imageUrl.replace("`", "");
                    }

                    if(!arrayLinkUrl.includes(imageUrl))  arrayLinkUrl.push(imageUrl);

                }  // if extension
            }  // if http
        }  //  if r
    }  // for





    let linkUrlHTML = "";
    for(let i=0; i < arrayLinkUrl.length; i++) {
        // linkUrlHTML = linkUrlHTML + '<a href="' + arrayLinkUrl[i] + '" target="_blank"><img src="' + arrayLinkUrl[i] + '" height="' + image1Height + '" class="imgborder" /></a>';
        linkUrlHTML = linkUrlHTML + '<a href="' + arrayLinkUrl[i] + '" target="_blank"><img src="' + arrayLinkUrl[i] + '" width="' + image1Width + '" class="imgborder" /></a>';
    }


    let tagImageHTML = linkUrlHTML;
    // if(linkUrlHTML != "") tagImageHTML = image1Height;  // debug
    if(linkUrlHTML != "") tagImageHTML = tagImageHTML + '_tagImage(r)'



    return tagImageHTML;
}
