
export const YouTube = (tmpUrl) => {

    let out_iframe1 = '';
    let out_youtubeIdText1 = '';

    let linkUrl = ''
    let id = '';


    // 全卓スペースで分割。tag rにURLと日本語が入っている場合があるため
    const value = tmpUrl.split('　');

    for(let j=0; j<value.length; j++) {
        if(value[j].includes("http"))  {
            linkUrl = value[j];
            for(let i = 0; i<10; i++)  linkUrl = linkUrl.replace('`','');
            break;
        }
    }



    if(linkUrl.includes('http') && !linkUrl.includes('@')) {
        let link = ""
        try {
            link = new URL(linkUrl);
        } catch(e) {
            return '[URL_ERROR_tmpUrl=' + linkUrl + ']'
        }
        
        // YouTube
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

        out_iframe1 = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
        out_youtubeIdText1 = '__[id=' + id + ']'
    }


    if(linkUrl.includes('@')) {
        out_iframe1 = '<a href="' + linkUrl + '" target="_blank">@YouTube</a>';;
        out_youtubeIdText1 = '__[YouTubeChannel]'
    }




    // Make #ry link by tag
    let linkText = '__YouTube(r)'
    if(linkUrl.includes('playlist'))  linkText = '__YouTube(playlist)(r)'
    const out_linkr = '<a href="' + linkUrl + '" target="_blank">' + linkText + '</a>';
    // Make (c_YouTube) link by content
    const out_linkc = '<a href="' + linkUrl + '" target="_blank">__(c_YouTube)</a>';
    

    return { out_iframe1, out_youtubeIdText1, out_linkr, out_linkc };
}
