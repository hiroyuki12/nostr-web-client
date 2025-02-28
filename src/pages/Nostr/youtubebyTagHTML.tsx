import { YouTube } from '../../components/content/YouTube';

export const youtubebyTagHTML = (content, note) => {

// Add youtube iframe by tag "r" (URL) &  Add link #ry

// update content. delete URL
// add #ry link to content

// return cotent


// 
    let linkUrl1 = "";
    let linkText1 = "";  // #ry 1
    let linkTagR1 = "";



    for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "r") {
            if(!note.tags[i][1].includes("youtube.com/") && !note.tags[i][1].includes("youtu.be/")) {
                continue;
            }
            if(note.tags[i][1].includes("http")) {
                // 全卓スペースで分割。tag rにURLと日本語が入っている場合があるため
                const value = note.tags[i][1].split('　');

                let textUrl = "";
                for(let j=0; j<value.length; j++) {
                    if(value[j].includes("http"))  textUrl = value[j];
                    linkUrl1 = textUrl.replace('`','');
                    linkText1 = "__#ry";
                    break;
                }
            }
        }
    }



    if(linkUrl1 === "") return content;


    
    // Make iframe, youtubeIdText
    const {iframe1, youtubeIdText1, linkr} = YouTube(linkUrl1);

    // Remove link
    content = content.replace(linkUrl1, '');
    
    





    return content +

        iframe1 +
        '(r_YouTube)' +
        linkr +  // #ry link
        youtubeIdText1;
}
    