export const Spotify = (tmpUrl) => {

    let out_iframe1 = '';
    let out_spotifyIdText1 = '';



    // content backup
    // let  tmpIframe = '<iframe src="https://open.spotify.com/embed/' + id + '" width="560" height="580" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'


    if(tmpUrl.includes("open.spotify.com")) {
        
        const id = tmpUrl.replace("https://open.spotify.com/", ""); 
        out_iframe1 = '<iframe src="https://open.spotify.com/embed/' + id + '" width="560" height="580" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'

        if(id.includes('track'))  
            out_iframe1 = '<iframe src="https://open.spotify.com/embed/' + id + '" width="560" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'

        out_spotifyIdText1 =  '__[id=' + id + ']';

    }


    
    // Make #ry link by tag
    const out_linkr = '<a href="' + tmpUrl + '" target="_blank">__Spotify(r)</a>';
    // Make (c_YouTube) link by content
    const out_linkc = '<a href="' + tmpUrl + '" target="_blank">__Spofity(c)</a>';

    return { out_iframe1, out_spotifyIdText1, out_linkr, out_linkc };
}
