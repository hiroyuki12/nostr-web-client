
export const youtubebyTagHTML = (content, note) => {

// Add youtube iframe by tag "r" (URL) &  Add link #ry

// update content. delete URL
// add #ry link to content

// return cotent


// 
    let linkUrl1 = "";
    let linkText1 = "";  // #ry 1
    let iframe1 = "";
    let linkTagR1 = "";

    let youtubeIdText1 = "";




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



    let tmpUrl = linkUrl1;

    if(tmpUrl.includes('http') && !tmpUrl.includes('@')) {

        let id = tmpUrl.replace('"', '');
        let link = ""
        
        try {
            linke = new URL(tmpUrl);
        } catch(e) {
            content = content + '[URL-ERROR tempUrl=' + tmpUrl + ']'
        }

        
        
        // YouTube tag "r"
        // https://github.com/SnowCait/nostter/blob/be5748cbd2ab1b4423f6fad29c2f4e18d0242edd/web/src/lib/components/content/YouTube.svelte
        if(link.hostname === 'youtu.be') {
            // const target3 = 'youtu.be/'
            // youtube.be/ より後を取得
            // id = id.substring(id.indexOf(target3) + target3.length, id.length);
            id = link.pathname.replace('/', '');
        }
        else if(link.pathname.startsWith('/live/')) {
            // /live/ より後を取得
            // id = id.substring(id.indexOf(target2) + '/live/'.length, id.length);
            id = link.pathname.replace('/live/', '');
        }
        else {
            const v = link.searchParams.get('v');
            if (v !== null) {
                id = v;
            } else if (link.pathname.includes('shorts')) {
                const match = link.pathname.match(/\/shorts\/(?<id>\w+)/);
                id = match?.groups?.id;
            }
        }

        iframe1 = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>(r_YouTube)";
        youtubeIdText1 = '__[id=' + id + ']'
        content = content.replace(tmpUrl, '');
    }
    else if(tmpUrl.includes('@')) {
        iframe1 = tmpUrl;
        youtubeIdText1 = '__[YouTubeChannel]'
        content = content.replace(tmpUrl, '');
    }
    
    



    // Make #ry link
    if(linkText1 != "") linkTagR1 = '<a href="' + linkUrl1 + '" target="_blank">' + linkText1 + '</a>';
    



    return content +
        iframe1 +
        linkTagR1 + 

        youtubeIdText1;
}
    