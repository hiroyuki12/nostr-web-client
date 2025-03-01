import { YouTube } from '../../components/content/YouTube';
import { Twitter } from '../../components/content/Twitter';
import { AppleMusic } from '../../components/content/AppleMusic';
// import Tweets from "@/pages/Nostr/Twitter";

export const makeIframesbyTagHTML = (content, note) => {

// make iframe by tag "r" (URL) &  make link #r

// update content. delete URL
// add #r link to content


// let out_content = '';
// let out_iframe1 = '';
// return { out_content, out_iframe1 };



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
    let linkr = "";
    let youtubeIdText1 = "";
    let twitterIdText1 = "";
    let appleMusicIdText1 = "";




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


                if(linkUrl1 === "") linkUrl1 = textUrl;
                else if(linkUrl2 === "")  linkUrl2 = textUrl;
                else if(linkUrl3 === "")  linkUrl3 = textUrl;
                else if(linkUrl4 === "")  linkUrl4 = textUrl;
                else if(linkUrl5 === "")  linkUrl5 = textUrl;
                else if(linkUrl6 === "")  linkUrl6 = textUrl;
                else if(linkUrl7 === "")  linkUrl7 = textUrl;
            }
        }
    }

    // update content.
    for(let i=0; i<note.tags.length; i++) {
        let tmpWord = "";
        let tmpIframe = "";
        let tmpUrl = "";
        if(i === 0)  tmpUrl = linkUrl1;
        else if(i === 1)  tmpUrl = linkUrl2;
        else if(i === 2)  tmpUrl = linkUrl3;
        else if(i === 3)  tmpUrl = linkUrl4;
        else if(i === 4)  tmpUrl = linkUrl5;
        else if(i === 5)  tmpUrl = linkUrl6;
        else if(i === 6)  tmpUrl = linkUrl7;

        
        // youtube 他
        if(tmpUrl != "") {

            if(tmpUrl.includes("youtube.com/") || tmpUrl.includes("youtu.be/")) {
                const {out_iframe1, out_youtubeIdText1, out_linkr} = YouTube(tmpUrl);
                iframe1 = out_iframe1;
                youtubeIdText1 = out_youtubeIdText1;
                linkr = out_linkr;
                serviceText = out_linkr
                // Remove link
                content = content.replace(tmpUrl, '');
            }
            
            
            else if(tmpUrl.includes("twitter.com") || tmpUrl.includes("x.com")) {
                const {out_iframe1, out_twitterIdText1, out_linkr} = Twitter(tmpUrl);
                iframe6 = out_iframe1;  // Twitter以降のiframeや#r, Serviceが表示されないため、最後
                twitterIdText1 = out_twitterIdText1;
                serviceText = out_linkr;
                // Remove link
                content = content.replace(tmpUrl, '');
            }


            else if(tmpUrl.includes("music.apple.com")) {
                const {out_iframe1, out_appleMusicIdText1, out_linkr} = AppleMusic(tmpUrl);
                iframe1 = out_iframe1
                appleMusicIdText1 = out_appleMusicIdText1;
                serviceText = out_linkr;
                // Remove link
                content = content.replace(tmpUrl, '');
            }


            else if(tmpUrl.includes("open.spotify.com")) {
                const id = tmpUrl.replace("https://open.spotify.com/", ""); 
                tmpIframe = '<iframe src="https://open.spotify.com/embed/' + id + '" width="560" height="580" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'
                if(iframe1 == '')  iframe1 = tmpIframe;
                else iframe2 = tmpIframe;
                serviceText = '__Spotify(r)'
                serviceText = '<a href="' + tmpUrl + '" target="_blank">' + serviceText + '</a>';
                content = content.replace(tmpUrl, '')
            }


            //else if(tmpUrl.includes("googleusercontent.com/")){
            //    let tmpUrl2 = tmpUrl.replace("`", "");
            //    iframe1 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
            //    serviceText = '__googleusercontent'
            //}
            
            
            else if(tmpUrl.includes('nipron.co.jp') ||
                    // tmpUrl.includes('bsky.app') ||
                    tmpUrl.includes('amzn.to') ||
                    tmpUrl.includes('udio.com') ||
                    tmpUrl.includes('maps.app.goo.gl') ||
                    tmpUrl.includes('comic-walker.com') ||
                    tmpUrl.includes('nipron.co.jp')) {
                const tmpIframe = '<a href="' + tmpUrl + '" target="_blank">' + tmpUrl.replace('http', '(r)_ttp') + '</a>'
                if(iframe1 == '')  iframe1 = tmpIframe;
                else iframe2 = tmpIframe;
                content = content.replace(tmpUrl, '')
            }
            
            
            else {
                // Add iframe, or remove link
                if(!tmpUrl.includes(".mov") 
                    && !tmpUrl.includes(".jpeg")  
                    && !tmpUrl.includes(".jpg") 
                    && !tmpUrl.includes(".mp4") 
                    && !tmpUrl.includes(".png") 
                    && !tmpUrl.includes(".gif") 
                    && !tmpUrl.includes(".webp")) {
                        
                    if(iframe1 == '') 
                        iframe1 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
                    else if(iframe2 == '')
                        iframe2 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
                    else if(iframe3 == '')
                        iframe3 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
                    else if(iframe4 == '')
                        iframe4 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
                    else if(iframe5 == '')
                        iframe5 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
                    else if(iframe6 == '')
                        iframe6 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
                    else if(iframe7 == '')
                        iframe7 = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + tmpUrl + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';


                    // url表示なし
                    content = content.replace(tmpUrl, '');
                    // _(r)ttps 表示
                    // content = content.replace(tmpUrl, tmpUrl.replace('http', '_(r)ttp'));

                }
                else {
                    // .mov etc remove link
                    content = content.replace(tmpWord, '');
                }
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





    const out_content = content;
    const out_iframe1 = iframe1;
    const out_iframe2 = iframe2;
    const out_iframe3 = iframe3;
    const out_iframe4 = iframe4;
    const out_iframe5 = iframe5;
    const out_iframe6 = iframe6;  // Twitter以降のiframeや#r, Serviceが表示されないため、最後
    const out_link1 = link1;
    const out_link2 = link2;
    const out_link3 = link3;
    const out_link4 = link4;
    const out_link5 = link5;
    const out_link6 = link6;
    // const out_link7 = link7 + serviceText + linkr + youtubeIdText1;
    const out_link7 = link7 + serviceText + youtubeIdText1 + twitterIdText1 + appleMusicIdText1;

    return { out_content, out_iframe1, out_iframe2, out_iframe3, 
        out_iframe4, out_iframe5, out_iframe6,
        out_link1, out_link2, out_link3, out_link4,
        out_link5, out_link6, out_link7 
        };


    if(!iframe1.includes('(r)') && (iframe1 != "" || iframe7 != "")) content = content + "(r)";
}
