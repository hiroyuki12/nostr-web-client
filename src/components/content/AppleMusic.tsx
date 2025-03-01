export const AppleMusic = (tmpUrl) => {

    let out_iframe1 = '';
    let out_appleMusicIdText1 = '';


    // by Content backup
    // const id = tmpUrl.replace("music.apple.com","embed.music.apple.com"); 
    // // large iframe1 = '<iframe height="450" width="100%" title="メディアプレイヤー" src="https://embed.music.apple.com/us/album/kick-back-single/1648272179?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1648272179&amp;theme=auto" id="embedPlayer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="border: 0px; border-radius: 12px; width: 100%; height: 450px; max-width: 660px;"></iframe>'
    // let tmpIframe = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="455" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + id + '"></iframe>'
    // if(tmpUrl.includes("i=")) {
    //   iframe1 = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + id + '"></iframe>'
    // }

    if(tmpUrl.includes("music.apple.com")) {
        const src = tmpUrl.replace("music.apple.com","embed.music.apple.com"); 
        // kickback large 
        // out_iframe1 = '<iframe height="450" width="100%" title="メディアプレイヤー" src="https://embed.music.apple.com/us/album/kick-back-single/1648272179?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1648272179&amp;theme=auto" id="embedPlayer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="border: 0px; border-radius: 12px; width: 100%; height: 450px; max-width: 660px;"></iframe>'
        // large
        out_iframe1 = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="455" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + src + '"></iframe>'
        if(tmpUrl.includes("i=")) {  // small
            const height = "150px";
            const borderRadius = "12px";

            const theme = "theme=auto";  // dark
            // const theme = "";         // light
            // out_iframe1 = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="' + height + '" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + src + '"></iframe>'
            out_iframe1 = '<iframe width="100%" title="メディアプレイヤー" src="' + src + '?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1648272179&amp;' + theme + '" id="embedPlayer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="border: 0px; border-radius: ' + borderRadius + '; width: 100%; height: ' + height + '; max-width: 660px;"></iframe>'
        }

        const id = src.replace('https://embed.music.apple.com/jp/album/','')
        out_appleMusicIdText1 = '__[id=' + id + ']';
    }




    // Make #ry link by tag
    const out_linkr = '<a href="' + tmpUrl + '" target="_blank">__Apple Music(r)</a>';
    // Make (c_YouTube) link by content
    const out_linkc = '<a href="' + tmpUrl + '" target="_blank">__Apple Music(c)</a>';

    return { out_iframe1, out_appleMusicIdText1, out_linkr, out_linkc };

}
