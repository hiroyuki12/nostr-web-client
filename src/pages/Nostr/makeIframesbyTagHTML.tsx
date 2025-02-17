export const makeIframesbyTagHTML = (content, note) => {

// make iframe by tag "r" (URL) &  make link #r

// update content. delete URL
// add #r link to content

// return cotent

    const linkText = '__#r';  // #r 1

    let linkUrl1 = "";  // #r 1
    let iframe1 = "";
    let link1 = "";
    let serviceText = "";
    let linkUrl2 = "";  // #r 2
    let iframe2 = "";
    let link2 = "";
    let linkUrl3 = "";  // #r 3
    let iframe3 = "";
    let link3 = "";
    let linkUrl4 = "";  // #r 4
    let iframe4 = "";
    let link4 = "";
    let linkUrl5 = "";  // #r 5
    let iframe5 = "";
    let link5 = "";
    let linkUrl6 = "";  // #r 6
    let iframe6 = "";
    let link6 = "";
    let linkUrl7 = "";  // #r 7
    let iframe7 = "";
    let link7 = "";




    for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "r") {
            if(note.tags[i][1].includes("http")) {
		        // 全卓スペースで分割。tag rにURLと日本語が入っている場合があるため
                const value = note.tags[i][1].split('　');
                let contentReplace = "";

                let textUrl = "";
                for(let j=0; j<value.length; j++) {
                    if(value[j].includes("http"))  textUrl = value[j];
                    contentReplace = value[j];
                    textUrl = textUrl.replace('`','');
                    textUrl = textUrl.replace(')','');
                }


                if(linkUrl1 === "") {
                    // youtube以外
                    if(!textUrl.includes("youtube.com/") && !textUrl.includes("youtu.be/")) {
                        linkUrl1 = textUrl;
                    }
                }
                else if(linkUrl2 === "") {
                    linkUrl2 = textUrl;
                }
                else if(linkUrl3 === "") {
                    linkUrl3 = textUrl;
                }
                else if(linkUrl4 === "") {
                    linkUrl4 = textUrl;
                }
                else if(linkUrl5 === "") {
                    linkUrl5 = textUrl;
                }
                else if(linkUrl6 === "") {
                    linkUrl6 = textUrl;
                }
                else if(linkUrl7 === "") {
                    linkUrl7 = textUrl;
                }
            }
        }
    }

    // update content.
    for(let i=0; i<note.tags.length; i++) {
        let tmpWord = "";
        let tmpIframe = "";
        let tmpUrl = "";
        if(i === 0) {
            tmpUrl = linkUrl1;
        }
        else if(i === 1) {
            tmpUrl = linkUrl2;
        }
        else if(i === 2) {
            tmpUrl = linkUrl3;
        }
        else if(i === 3) {
            tmpUrl = linkUrl4;
        }
        else if(i === 4) {
            tmpUrl = linkUrl5;
        }
        else if(i === 5) {
            tmpUrl = linkUrl6;
        }
        else if(i === 6) {
            tmpUrl = linkUrl7;
        }


        // youtube 以外
        if(tmpUrl != "") {
            if(tmpUrl.includes("music.apple.com")) {
                const id = tmpUrl.replace("music.apple.com","embed.music.apple.com"); 
                //large iframe1 = '<iframe height="450" width="100%" title="メディアプレイヤー" src="https://embed.music.apple.com/us/album/kick-back-single/1648272179?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1648272179&amp;theme=auto" id="embedPlayer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="border: 0px; border-radius: 12px; width: 100%; height: 450px; max-width: 660px;"></iframe>'
                iframe1 = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + id + '"></iframe>(r)'
                serviceText = '__AppleMusic(r)'
                content = content.replace(tmpUrl, '');
            }
            else if(tmpUrl.includes("open.spotify.com")) {
                const id = tmpUrl.replace("https://open.spotify.com/track/", ""); 
                tmpIframe = '<iframe src="https://open.spotify.com/embed/track/' + id + '" width="560" height="232" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>(r)'
            }
            else if(tmpUrl.includes("twitter.com") || tmpUrl.includes("x.com")) {
                const id = tmpUrl.replace("x.com","twitter.com"); 
                iframe1 = '<iframe border=0 frameborder=0 height=387 width=563 src="https://twitframe.com/show?url=' + id + '"></iframe>(r)'
                serviceText = '__Twitter_X(r)'
                content = content.replace(tmpUrl, '');
            }
            //else if(tmpUrl.includes("googleusercontent.com/")){
            //    let tmpUrl2 = tmpUrl.replace("`", "");
            //    iframe1 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
            //    serviceText = '__googleusercontent(r)'
            //}
            else if(tmpUrl.includes('nipron.co.jp') ||
                    tmpUrl.includes('amzn.to')) {
                iframe1 = '<a href="' + tmpUrl + '" target="_blank">' + tmpUrl.replace('http', '(r)_ttp') + '</a>'
                content = content.replace(tmpUrl, '')
            }
            else {  // todo

                // update content
                // if(!tmpUrl.includes("nostr.cooking") && !tmpUrl.includes("codepen.io")) {
                    // Add iframe, or remove link
                    if(!tmpUrl.includes(".mov") 
                        && !tmpUrl.includes(".jpeg")  
                        && !tmpUrl.includes(".jpg") 
                        && !tmpUrl.includes(".mp4") 
                        && !tmpUrl.includes(".png") 
                        && !tmpUrl.includes(".gif") 
                        && !tmpUrl.includes(".webp")) {
                            
                        if(iframe1 == '') {
                            iframe1 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>(r)';
                        }
                        else if(iframe2 == '')
                            iframe2 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>(r)';
                        else if(iframe3 == '')
                            iframe3 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>(r)';
                        else if(iframe4 == '')
                            iframe4 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>(r)';
                        else if(iframe5 == '')
                            iframe5 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>(r)';
                        else if(iframe6 == '')
                            iframe6 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>(r)';
                        else if(iframe7 == '')
                            iframe7 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>(r)';


                        // url表示なし
                        content = content.replace(tmpUrl, '');
                        // _(r)ttps 表示
                        // content = content.replace(tmpUrl, tmpUrl.replace('http', '_(r)ttp'));

                    }
                    else {
                        // .mov etc remove link
                        content = content.replace(tmpWord, '');
                    }
                // }
                // else {
                // if(tmpUrl.includes("nostr.cooking") || tmpUrl.includes("codepen.io")) {
                //     // Add url link
                //     content = content.replace(tmpWord, tmpUrl);
                // }

            }

        }
    }




    // Add #r link
    if(linkUrl1 != "") link1 = '<a href="' + linkUrl1 + '" target="_blank">' + linkText + '</a>';
    if(linkUrl2 != "") link2 = '<a href="' + linkUrl2 + '" target="_blank">' + linkText + '</a>';
    if(linkUrl3 != "") link3 = '<a href="' + linkUrl3 + '" target="_blank">' + linkText + '</a>';
    if(linkUrl4 != "") link4 = '<a href="' + linkUrl4 + '" target="_blank">' + linkText + '</a>';
    if(linkUrl5 != "") link5 = '<a href="' + linkUrl5 + '" target="_blank">' + linkText + '</a>';
    if(linkUrl6 != "") link6 = '<a href="' + linkUrl6 + '" target="_blank">' + linkText + '</a>';
    if(linkUrl7 != "") link7 = '<a href="' + linkUrl7 + '" target="_blank">' + linkText + '</a>';


    content = content + 
        iframe1 +  
        iframe2 +  
        iframe3 +  
        iframe4 +  
        iframe5 +
        iframe5 +
        iframe6 +
        iframe7 +
        link1 +  // #r
        link2 + 
        link3 + 
        link4 + 
        link5 + 
        link6 + 
        link7 + 
        serviceText;

    return content;
}
