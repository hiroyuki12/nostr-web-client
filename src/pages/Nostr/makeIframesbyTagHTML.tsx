export const makeIframesbyTagHTML = (content, note) => {
    //let newContent = content;




    let linkUrl1 = "";
    let linkUrlText1 = "";  // #r 1
    let linkUrlHTML1 = ""
    let linkUrl2 = "";
    let linkUrlText2 = "";  // #r 2
    let linkUrlHTML2 = ""
    let linkUrl3 = "";
    let linkUrlText3 = "";  // #r 3
    let linkUrlHTML3 = ""
    let linkUrl4 = "";
    let linkUrlText4 = "";  // #r 4
    let linkUrlHTML4 = ""
    let linkUrl5 = "";
    let linkUrlText5 = "";  // #r 5
    let linkUrlHTML5 = ""




    for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "r") {
            if(note.tags[i][1].includes("http")) {
		        // 全卓スペースで分割。tag rにURLと日本語が入っている場合があるため
                let text = note.tags[i][1].split('　');
                let textUrl = "";
                for(let j=0; j<text.length; j++) {
                    if(text[j].includes("http"))  textUrl = text[j];
                }

                if(linkUrl1 === "") {
                    linkUrl1 = textUrl;
                    linkUrlText1 = "__#r";
                    if(!note.tags[i][1].includes("youtu")) {
                        content = content.replace(linkUrl1,"[@1]");
                    }
                }
                else if(linkUrl2 === "") {
                    linkUrl2 = textUrl;
                    linkUrlText2 = "__#r";
                    if(!note.tags[i][1].includes("youtu")) {
                        content = content.replace(linkUrl2,"[@2]");
                    }
                }
                else if(linkUrl3 === "") {
                    linkUrl3 = textUrl;
                    linkUrlText3 = "__#r";
                    if(!note.tags[i][1].includes("youtu")) {
                        content = content.replace(linkUrl2,"[@3]");
                    }
                }
                else if(linkUrl4 === "") {
                    linkUrl4 = textUrl;
                    linkUrlText4 = "__#r";
                }
                else if(linkUrl5 === "") {
                    linkUrl5 = textUrl;
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
            if(tmpUrl.includes("music.apple.com")) {
                const id = tmpUrl.replace("music.apple.com","embed.music.apple.com"); 
                //large tmpIframe = '<iframe height="450" width="100%" title="メディアプレイヤー" src="https://embed.music.apple.com/us/album/kick-back-single/1648272179?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1648272179&amp;theme=auto" id="embedPlayer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="border: 0px; border-radius: 12px; width: 100%; height: 450px; max-width: 660px;"></iframe>'
                tmpIframe = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + id + '"></iframe>'
            }
            else if(tmpUrl.includes("open.spotify.com")) {
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
            // update content
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






    if(linkUrlText1 != "") linkUrlHTML1 = '<a href="' + linkUrl1 + '" target="_blank">' + linkUrlText1 + '</a>';
    if(linkUrlText2 != "") linkUrlHTML2 = '<a href="' + linkUrl2 + '" target="_blank">' + linkUrlText2 + '</a>';
    if(linkUrlText3 != "") linkUrlHTML3 = '<a href="' + linkUrl3 + '" target="_blank">' + linkUrlText3 + '</a>';
    if(linkUrlText4 != "") linkUrlHTML4 = '<a href="' + linkUrl4 + '" target="_blank">' + linkUrlText4 + '</a>';
    if(linkUrlText5 != "") linkUrlHTML5 = '<a href="' + linkUrl5 + '" target="_blank">' + linkUrlText5 + '</a>';

    content = content + 
	linkUrlHTML1 +  
	linkUrlHTML2 +  
	linkUrlHTML3 +  
	linkUrlHTML4 +  
	linkUrlHTML5;  






    
    return content;
}
