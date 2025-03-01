import { YouTube } from '../../components/content/YouTube';
import { Nicovideo } from '../../components/content/Nicovideo';

export const makeIframesbyContentHTML = (content, note) => {

    // make iframe by content (URL) 
    
    // update content. delete URL
    
    // return cotent





    let iframe1 = "";
    let iframe2 = "";
    let youtubeId = "";
    let httpLinkUrl1 = "";
    let httpLinkUrlText1 = "";  // # https://
    let httpLinkUrl2 = "";
    let httpLinkUrlText2 = "";  // # https://
    let serviceText = "";
  
    let tmpContent = content;
    
    tmpContent = tmpContent.replace(/<[^>]*>/g, '');  //タグ除去

    for(let i=0; i<100; i++) {
      tmpContent = tmpContent.replace('#idolmaster', '\n')
      // tmpContent = tmpContent.replace('=', '\n')  //YouTube
      tmpContent = tmpContent.replace(']', '\n')
      tmpContent = tmpContent.replace('? ', '\n')
      tmpContent = tmpContent.replace('https://', '\nhttps://')
      tmpContent = tmpContent.replace(' ', '\n')
    }
    const splitContent = tmpContent.split('\n');


    


    for(let i=0; i<splitContent.length; i++) {

      // YouTube iframe
      // https://github.com/SnowCait/nostter/blob/be5748cbd2ab1b4423f6fad29c2f4e18d0242edd/web/src/lib/components/content/YouTube.svelte
      if(splitContent[i].includes("youtube.com") || splitContent[i].includes("youtu.be/")) {
        const tmpUrl = splitContent[i]

        const {out_iframe1, out_youtubeIdText1, out_linkc} = YouTube(tmpUrl);
        // Remove link
        content = content.replace(tmpUrl, '');
        return content + out_iframe1 + out_youtubeIdText1 + out_linkc;
      }


      // Twitter iframe
       if(splitContent[i].includes("twitter.com") || splitContent[i].includes("x.com")) {
        // const id = splitContent[i].replace("x.com","twitter.com"); 
        // NG const tmpIframe = '<iframe border=0 frameborder=0 height=387 width=563 src="https://twitframe.com/show?url=' + id + '"></iframe>'

        const tmp = splitContent[i].split('?')[0]
        const id = tmp.split('/')[5]  //1892199000356655161
        const embedid = `https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-3&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&id=${
            id
          }`;
        const tmpIframe = '<iframe id="' + id + '" border=0 frameborder=0 height=387 width=563 src="' + embedid + '" />'

        content = content.replace(splitContent[i], '');

        const httpLinkUrl1 = splitContent[i];
        const httpLinkUrlText1 = '__Ttwitter_X(content)';
        content = content + '<a href="' + httpLinkUrl1 + '" target="_blank">' + httpLinkUrlText1 + '</a>';
        content = content + tmpIframe;  // 最後にTwitter iframeを追加
      }
      // else if (splitContent[i].includes('zenn.dev')) {
      //   // content = '<span class="embed-block zenn-embedded zenn-embedded-${encodedType}"><iframe id="https://zenn.dev/ryokomy/articles/a2fa332bcfe8d8" src="https://res.cloudinary.com/zenn/image/upload/s--6_cqBvmm--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E4%25BB%258A%25E3%2581%2593%25E3%2581%259D%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AFCode-based%25E3%2581%25AA%25E3%2583%2589%25E3%2582%25AD%25E3%2583%25A5%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2586%25E3%2583%25BC%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%25B3%25E3%2582%2592%25E8%25A1%258C%25E3%2581%2586%25E3%2581%25B9%25E3%2581%258D%25E3%2581%25A0%25E3%2581%25A8%25E6%2580%259D%25E3%2581%25A3%25E3%2581%259F%25E3%2581%25AE%25E3%2581%25A7%25E3%2580%2581%25E3%2581%259D%25E3%2581%25AE%25E6%2580%259D%25E6%2583%25B3%25E3%2581%25A8%25E6%2596%25B9%25E6%25B3%2595%25E3%2582%2592%25E3%2581%25BE%25E3%2581%25A8%25E3%2582%2581%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Komy%2520%257C%2520Kyuzan%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2ZjNzZjZTEwNWQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" data-content="${encodedSrc}" frameborder="0" scrolling="no" loading="lazy"></iframe></span>'
      //   content = '<span class="embed-block zenn-embedded zenn-embedded-${encodedType}"><iframe id="https://zenn.dev/ryokomy/articles/a2fa332bcfe8d8" src="https://res.cloudinary.com/zenn/image/upload/s--6_cqBvmm--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E4%25BB%258A%25E3%2581%2593%25E3%2581%259D%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AFCode-based%25E3%2581%25AA%25E3%2583%2589%25E3%2582%25AD%25E3%2583%25A5%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2586%25E3%2583%25BC%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%25B3%25E3%2582%2592%25E8%25A1%258C%25E3%2581%2586%25E3%2581%25B9%25E3%2581%258D%25E3%2581%25A0%25E3%2581%25A8%25E6%2580%259D%25E3%2581%25A3%25E3%2581%259F%25E3%2581%25AE%25E3%2581%25A7%25E3%2580%2581%25E3%2581%259D%25E3%2581%25AE%25E6%2580%259D%25E6%2583%25B3%25E3%2581%25A8%25E6%2596%25B9%25E6%25B3%2595%25E3%2582%2592%25E3%2581%25BE%25E3%2581%25A8%25E3%2582%2581%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Komy%2520%257C%2520Kyuzan%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2ZjNzZjZTEwNWQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" data-content="${encodedSrc}" frameborder="0" height=387 width=563 scrolling="no" loading="lazy"></iframe></span>'
      // }
      
      else if(splitContent[i].includes("music.apple.com")) {
        const id = splitContent[i].replace("music.apple.com","embed.music.apple.com"); 
        // large iframe1 = '<iframe height="450" width="100%" title="メディアプレイヤー" src="https://embed.music.apple.com/us/album/kick-back-single/1648272179?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1648272179&amp;theme=auto" id="embedPlayer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="border: 0px; border-radius: 12px; width: 100%; height: 450px; max-width: 660px;"></iframe>'
        const tmpIframe = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="455" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + id + '"></iframe>(content)'
        if(splitContent[i].includes("i=")) {
          iframe1 = '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="' + id + '"></iframe>'
        }
        serviceText = '__Apple Music'
        serviceText = '<a href="' + splitContent[i] + '" target="_blank">' + serviceText + '</a>';
        content = content.replace(splitContent[i], tmpIframe);

        // content = content + '<a href="' + httpLinkUrl1 + '" target="_blank">' + httpLinkUrlText1 + '</a>';
      }


      else if(splitContent[i].includes("open.spotify.com") && !splitContent[i].includes("playlist")) {
        const id = splitContent[i].replace("https://open.spotify.com/", ""); 
        const tmpIframe = '<iframe src="https://open.spotify.com/embed/' + id + '" width="560" height="580" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'
        if(iframe1 == '')  iframe1 = tmpIframe;
        else iframe2 = tmpIframe;
        serviceText = '__Spotify(r)'
        serviceText = '<a href="' + splitContent[i] + '" target="_blank">' + serviceText + '</a>';
        content = content.replace(splitContent[i], tmpIframe)
    }


      // todo nicovideo 再生できない
      else if(splitContent[i].includes("www.nicovideo.jp/watch") || splitContent[i].includes("nico.ms")) {
      
        const tmpIframe = Nicovideo(splitContent[i]);

        serviceText = '__niconico'
        serviceText = '<a href="' + splitContent[i] + '" target="_blank">' + serviceText + '</a>';
        content = content.replace(splitContent[i], tmpIframe);
      }



      // http iframe
      else if (splitContent[i].includes('http')){ // (instagram etc)
      // else if(!splitContent[i].includes('nostrudel.ninja')  // #t
        // && (splitContent[i].includes('media.unnerv.jp') ||
        //  )) {
        
        if(!splitContent[i].includes('domain') 
          && !splitContent[i].includes('www.amazon.co.jp')
          && !splitContent[i].includes('nostr-hotter-site.vercel.app') )
          // todo: https://<domain>/.well-known/lnurlp/<username>
        {
          httpLinkUrl1 = splitContent[i].substring(splitContent[i].indexOf('https://'), splitContent[i].length);

          const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + httpLinkUrl1 + '" width="300" height="150" frameborder="0" scrolling="no" ></iframe>(c)';
          iframe1 = tmpIframe;
          // URL 非表示
          content = content.replace(httpLinkUrl1, '');
          // (c)_ttp' 表示
          content = content.replace(httpLinkUrl1, httpLinkUrl1.replace('http', '(c)_ttp'));
        }
        else {
          httpLinkUrl1 = splitContent[i].substring(splitContent[i].indexOf('https://'), splitContent[i].length);

          // (c)_ttp' 表示
          const tmpIframe = '<a href="' + httpLinkUrl1 + '" target="_blank">' + httpLinkUrl1.replace('http', '(c)_ttp') + '</a>'
          iframe1 = tmpIframe;
          // URL 非表示
          content = content.replace(httpLinkUrl1, '');
        }
      }




      /*else  {
        if (splitContent[i].includes('http')) { 
          httpLinkUrl1 = splitContent[i].substring(splitContent[i].indexOf('https://'), splitContent[i].length);

          const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + httpLinkUrl1 + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
          content = content.replace(splitContent[i], tmpIframe);
          // content = httpLinkUrl1  // debug
        }
        else {
          //  content = splitContent[i]
        }
      }*/


    }  // for


    return content +
        iframe1 +
        serviceText;
}
