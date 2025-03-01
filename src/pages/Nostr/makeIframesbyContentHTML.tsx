import { YouTube } from '../../components/content/YouTube';
import { Nicovideo } from '../../components/content/Nicovideo';
import { AppleMusic } from '../../components/content/AppleMusic';
import { Twitter } from '../../components/content/Twitter';

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
      const tmpUrl = splitContent[i]



      // YouTube iframe
      // https://github.com/SnowCait/nostter/blob/be5748cbd2ab1b4423f6fad29c2f4e18d0242edd/web/src/lib/components/content/YouTube.svelte
      if(tmpUrl.includes("youtube.com") || tmpUrl.includes("youtu.be/")) {
        const {out_iframe1, out_youtubeIdText1, out_linkc} = YouTube(tmpUrl);
        // Remove link
        content = content.replace(tmpUrl, '');
        return content + out_iframe1 + out_youtubeIdText1 + out_linkc;
      }


      // Twitter iframe
       if(tmpUrl.includes("twitter.com") || tmpUrl.includes("x.com")) {
        const {out_iframe1, out_twitterIdText1, out_linkc} = Twitter(tmpUrl);
        // Remove link
        content = content.replace(tmpUrl, '');  // 最後にTwitter iframeを追加するため削除

        content = content + out_linkc + out_twitterIdText1 + out_iframe1;  // 最後にTwitter iframeを追加
      }
      

      else if(tmpUrl.includes("music.apple.com")) {
        const {out_iframe1, out_appleMusicIdText1, out_linkc} = AppleMusic(tmpUrl);
        const tmpIframe = out_iframe1
        serviceText = out_linkc
        // Remove link
        content = content.replace(tmpUrl, tmpIframe + out_appleMusicIdText1);
      }


      else if(tmpUrl.includes("open.spotify.com") && !tmpUrl.includes("playlist")) {
        const id = tmpUrl.replace("https://open.spotify.com/", ""); 
        const tmpIframe = '<iframe src="https://open.spotify.com/embed/' + id + '" width="560" height="580" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'
        if(iframe1 == '')  iframe1 = tmpIframe;
        else iframe2 = tmpIframe;
        serviceText = '__Spotify(r)'
        serviceText = '<a href="' + tmpUrl + '" target="_blank">' + serviceText + '</a>';
        content = content.replace(tmpUrl, tmpIframe)
    }


      // todo nicovideo 再生できない
      else if(tmpUrl.includes("www.nicovideo.jp/watch") || tmpUrl.includes("nico.ms")) {
      
        const tmpIframe = Nicovideo(tmpUrl);

        serviceText = '__niconico'
        serviceText = '<a href="' + tmpUrl + '" target="_blank">' + serviceText + '</a>';
        content = content.replace(tmpUrl, tmpIframe);
      }


      // else if (tmpUrl.includes('zenn.dev')) {
      //   // content = '<span class="embed-block zenn-embedded zenn-embedded-${encodedType}"><iframe id="https://zenn.dev/ryokomy/articles/a2fa332bcfe8d8" src="https://res.cloudinary.com/zenn/image/upload/s--6_cqBvmm--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E4%25BB%258A%25E3%2581%2593%25E3%2581%259D%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AFCode-based%25E3%2581%25AA%25E3%2583%2589%25E3%2582%25AD%25E3%2583%25A5%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2586%25E3%2583%25BC%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%25B3%25E3%2582%2592%25E8%25A1%258C%25E3%2581%2586%25E3%2581%25B9%25E3%2581%258D%25E3%2581%25A0%25E3%2581%25A8%25E6%2580%259D%25E3%2581%25A3%25E3%2581%259F%25E3%2581%25AE%25E3%2581%25A7%25E3%2580%2581%25E3%2581%259D%25E3%2581%25AE%25E6%2580%259D%25E6%2583%25B3%25E3%2581%25A8%25E6%2596%25B9%25E6%25B3%2595%25E3%2582%2592%25E3%2581%25BE%25E3%2581%25A8%25E3%2582%2581%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Komy%2520%257C%2520Kyuzan%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2ZjNzZjZTEwNWQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" data-content="${encodedSrc}" frameborder="0" scrolling="no" loading="lazy"></iframe></span>'
      //   content = '<span class="embed-block zenn-embedded zenn-embedded-${encodedType}"><iframe id="https://zenn.dev/ryokomy/articles/a2fa332bcfe8d8" src="https://res.cloudinary.com/zenn/image/upload/s--6_cqBvmm--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E4%25BB%258A%25E3%2581%2593%25E3%2581%259D%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AFCode-based%25E3%2581%25AA%25E3%2583%2589%25E3%2582%25AD%25E3%2583%25A5%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2586%25E3%2583%25BC%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%25B3%25E3%2582%2592%25E8%25A1%258C%25E3%2581%2586%25E3%2581%25B9%25E3%2581%258D%25E3%2581%25A0%25E3%2581%25A8%25E6%2580%259D%25E3%2581%25A3%25E3%2581%259F%25E3%2581%25AE%25E3%2581%25A7%25E3%2580%2581%25E3%2581%259D%25E3%2581%25AE%25E6%2580%259D%25E6%2583%25B3%25E3%2581%25A8%25E6%2596%25B9%25E6%25B3%2595%25E3%2582%2592%25E3%2581%25BE%25E3%2581%25A8%25E3%2582%2581%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Komy%2520%257C%2520Kyuzan%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2ZjNzZjZTEwNWQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" data-content="${encodedSrc}" frameborder="0" height=387 width=563 scrolling="no" loading="lazy"></iframe></span>'
      // }



      // http iframe
      else if (tmpUrl.includes('http')){ // (instagram etc)
      // else if(!tmpUrl.includes('nostrudel.ninja')  // #t
        // && (tmpUrl.includes('media.unnerv.jp') ||
        //  )) {
        
        if(!tmpUrl.includes('domain') 
          && !tmpUrl.includes('www.amazon.co.jp')
          && !tmpUrl.includes('nostr-hotter-site.vercel.app') )
          // todo: https://<domain>/.well-known/lnurlp/<username>
        {
          httpLinkUrl1 = tmpUrl.substring(tmpUrl.indexOf('https://'), tmpUrl.length);

          const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + httpLinkUrl1 + '" width="300" height="150" frameborder="0" scrolling="no" ></iframe>(c)';
          iframe1 = tmpIframe;
          // URL 非表示
          content = content.replace(httpLinkUrl1, '');
          // (c)_ttp' 表示
          content = content.replace(httpLinkUrl1, httpLinkUrl1.replace('http', '(c)_ttp'));
        }
        else {
          httpLinkUrl1 = tmpUrl.substring(tmpUrl.indexOf('https://'), tmpUrl.length);

          // (c)_ttp' 表示
          const tmpIframe = '<a href="' + httpLinkUrl1 + '" target="_blank">' + httpLinkUrl1.replace('http', '(c)_ttp') + '</a>'
          iframe1 = tmpIframe;
          // URL 非表示
          content = content.replace(httpLinkUrl1, '');
        }
      }




      /*else  {
        if (tmpUrl.includes('http')) { 
          httpLinkUrl1 = tmpUrl.substring(tmpUrl.indexOf('https://'), tmpUrl.length);

          const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + httpLinkUrl1 + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
          content = content.replace(tmpUrl, tmpIframe);
          // content = httpLinkUrl1  // debug
        }
        else {
          //  content = tmpUrl
        }
      }*/


    }  // for


    return content +
        iframe1 +
        serviceText;
}
