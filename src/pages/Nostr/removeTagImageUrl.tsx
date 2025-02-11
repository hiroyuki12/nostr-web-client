export const removeTagImageUrl = (content, note) => {




    let linkUrl1 = "";  // #r 1
    let image1Height = "0";
    let linkUrl2 = "";  // #r 2
    let image2Height = "0";
    let linkUrl3 = "";  // #r 3
    let image3Height = "0";
    let linkUrl4 = "";  // #r 4
    let image4Height = "0";
    let linkUrl5 = "";  // #r 5
    let image5Height = "0";
    let linkUrlHTML1 = ""
    let linkUrlHTML2 = ""
    let linkUrlHTML3 = ""
    let linkUrlHTML4 = ""
    let linkUrlHTML5 = ""





    for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "r") {
            if(note.tags[i][1].includes("http")) {
                let textUrl = note.tags[i][1];

                if(textUrl.includes(".jpg")  ||
                    textUrl.includes(".jpeg") || 
                    textUrl.includes(".png")  || 
                    textUrl.includes(".gif")  || 
                    textUrl.includes(".svg")  || 
                    textUrl.includes(".ico")  || 
                    textUrl.includes(".bmp")  || 
                    textUrl.includes(".webp") ||
                    textUrl.includes(".mp4") ||
                    textUrl.includes(".mov") ||
                    textUrl.includes("/img/") ||
                    textUrl.includes("/images?") ||
                    textUrl.includes("?set=set4") ||
                    textUrl.includes("pbs.twimg.com/") ||
                    textUrl.includes("robohash.org/") ||
                    textUrl.includes("pbs.twimg.com/") ||
                    textUrl.includes("/profile/avatar/") ||
                    textUrl.includes("/imgproxy.snort.social/") ||
                    textUrl.includes("/0.gravatar.com/avatar/") ||
                    textUrl.includes("/www.gravatar.com/avatar/") ||
                    textUrl.includes("googleusercontent.com/") ||
                    textUrl.includes("grafana.gsn.im/")) {
                


                    if(linkUrl1 === "") {
                        image1Height = "250";
                        linkUrl1 = textUrl;
                    }
                    else if(linkUrl2 === "") {
                        image2Height = "250";
                        linkUrl2 = textUrl;
                    }
                    else if(linkUrl3 === "") {
                        image3Height = "250";
                        linkUrl3 = textUrl;
                    }
                    else if(linkUrl4 === "") {
                        image4Height = "250";
                        linkUrl4 = textUrl;
                    }
                    else if(linkUrl5 === "") {
                        image5Height = "250";
                        linkUrl5 = textUrl;
                    }



                }  // if extension
            }  // if http
        }  //  if r
    }  // for




    if(linkUrl1 != "") content = content.replace(linkUrl1,"");
    if(linkUrl2 != "") content = content.replace(linkUrl2,"");
    if(linkUrl3 != "") content = content.replace(linkUrl3,"");
    if(linkUrl4 != "") content = content.replace(linkUrl4,"");
    if(linkUrl5 != "") content = content.replace(linkUrl5,"");

    


    return content;
}