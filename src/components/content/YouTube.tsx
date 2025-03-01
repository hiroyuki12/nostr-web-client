
export const YouTube = (tmpUrl) => {

    let out_iframe1 = '';
    let out_youtubeIdText1 = '';

    // let id = tmpUrl.replace('"', '');
    let id = '';


    if(tmpUrl.includes('http') && !tmpUrl.includes('@')) {
        let link = ""
        try {
            link = new URL(tmpUrl);
        } catch(e) {
            return '[URL_ERROR_tmpUrl=' + tmpUrl + ']'
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


    if(tmpUrl.includes('@')) {
        out_iframe1 = '<a href="' + tmpUrl + '" target="_blank">@YouTube</a>';;
        out_youtubeIdText1 = '__[YouTubeChannel]'
    }




    // Make #ry link by tag
    const out_linkr = '<a href="' + tmpUrl + '" target="_blank">__#ry</a>';
    // Make (c_YouTube) link by content
    const out_linkc = '<a href="' + tmpUrl + '" target="_blank">__(c_YouTube)</a>';
    

    return { out_iframe1, out_youtubeIdText1, out_linkr, out_linkc };
}
