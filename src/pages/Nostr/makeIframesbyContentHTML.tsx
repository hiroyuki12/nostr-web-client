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
  
    let tmpContent = content;
    
    tmpContent = tmpContent.replace(/<[^>]*>/g, '');  //タグ除去

    tmpContent = tmpContent.replace('#idolmaster', '\n')
    // tmpContent = tmpContent.replace('=', '\n')  //YouTube
    tmpContent = tmpContent.replace(']', '\n')
    tmpContent = tmpContent.replace('? ', '\n')
    

    const splitContent = tmpContent.split('\n');



    for(let i=0; i<splitContent.length; i++) {

      // YouTube iframe
      // https://github.com/SnowCait/nostter/blob/be5748cbd2ab1b4423f6fad29c2f4e18d0242edd/web/src/lib/components/content/YouTube.svelte
      if(splitContent[i].includes("youtube.com") || splitContent[i].includes("youtu.be/")) {
        // /watch?v= より後を取得
        // const target = '/watch?v=';
        // if(id.includes(target)) {
        //   id = id.substring(id.indexOf(target) + target.length, id.length);
        // }
        


        const tmpUrl = splitContent[i]

        // cannot be parsed as a URL
        const link = new URL(tmpUrl);
        let id = tmpUrl;
        
        // youtube.be/ より後を取得
        if(link.hostname === 'youtu.be') {
          const target3 = 'youtu.be/'
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

        const tmpIframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>(c)";
        
        if(iframe1 === '') {
          iframe1 = tmpIframe;
          iframe1 = iframe1 + '_[id =' + id + ']';
          iframe1 = iframe1 + '<a href="' + splitContent[i] + '" target="_blank">__YouTube</a>';
          content = content.replace(tmpUrl, '');
        }
      }


      // Twitter iframe
      else if(splitContent[i].includes("twitter.com") || splitContent[i].includes("x.com")) {
        // const id = splitContent[i].replace("x.com","twitter.com"); 
        // const tmpIframe = '<iframe border=0 frameborder=0 height=387 width=563 src="https://twitframe.com/show?url=' + id + '"></iframe>'

        const tmp = splitContent[i].split('?')[0]
        const id = tmp.split('/')[5]  //1892199000356655161
        const embedid = `https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-3&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&id=${
            id
          }`;
        const tmpIframe = '<iframe id="' + id + '" border=0 frameborder=0 height=387 width=563 src="' + embedid + '" />'


        content = content.replace(splitContent[i], tmpIframe);

        const httpLinkUrl1 = splitContent[i];
        const httpLinkUrlText1 = '__Ttwitter_X(content)';
        content = content + '<a href="' + httpLinkUrl1 + '" target="_blank">' + httpLinkUrlText1 + '</a>';
      }
      // else if (splitContent[i].includes('zenn.dev')) {
      //   // content = '<span class="embed-block zenn-embedded zenn-embedded-${encodedType}"><iframe id="https://zenn.dev/ryokomy/articles/a2fa332bcfe8d8" src="https://res.cloudinary.com/zenn/image/upload/s--6_cqBvmm--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E4%25BB%258A%25E3%2581%2593%25E3%2581%259D%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AFCode-based%25E3%2581%25AA%25E3%2583%2589%25E3%2582%25AD%25E3%2583%25A5%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2586%25E3%2583%25BC%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%25B3%25E3%2582%2592%25E8%25A1%258C%25E3%2581%2586%25E3%2581%25B9%25E3%2581%258D%25E3%2581%25A0%25E3%2581%25A8%25E6%2580%259D%25E3%2581%25A3%25E3%2581%259F%25E3%2581%25AE%25E3%2581%25A7%25E3%2580%2581%25E3%2581%259D%25E3%2581%25AE%25E6%2580%259D%25E6%2583%25B3%25E3%2581%25A8%25E6%2596%25B9%25E6%25B3%2595%25E3%2582%2592%25E3%2581%25BE%25E3%2581%25A8%25E3%2582%2581%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Komy%2520%257C%2520Kyuzan%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2ZjNzZjZTEwNWQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" data-content="${encodedSrc}" frameborder="0" scrolling="no" loading="lazy"></iframe></span>'
      //   content = '<span class="embed-block zenn-embedded zenn-embedded-${encodedType}"><iframe id="https://zenn.dev/ryokomy/articles/a2fa332bcfe8d8" src="https://res.cloudinary.com/zenn/image/upload/s--6_cqBvmm--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E4%25BB%258A%25E3%2581%2593%25E3%2581%259D%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AFCode-based%25E3%2581%25AA%25E3%2583%2589%25E3%2582%25AD%25E3%2583%25A5%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2586%25E3%2583%25BC%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%25B3%25E3%2582%2592%25E8%25A1%258C%25E3%2581%2586%25E3%2581%25B9%25E3%2581%258D%25E3%2581%25A0%25E3%2581%25A8%25E6%2580%259D%25E3%2581%25A3%25E3%2581%259F%25E3%2581%25AE%25E3%2581%25A7%25E3%2580%2581%25E3%2581%259D%25E3%2581%25AE%25E6%2580%259D%25E6%2583%25B3%25E3%2581%25A8%25E6%2596%25B9%25E6%25B3%2595%25E3%2582%2592%25E3%2581%25BE%25E3%2581%25A8%25E3%2582%2581%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Komy%2520%257C%2520Kyuzan%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2ZjNzZjZTEwNWQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" data-content="${encodedSrc}" frameborder="0" height=387 width=563 scrolling="no" loading="lazy"></iframe></span>'
      // }
      

      // http iframe
      else if (splitContent[i].includes('http')){ // (instagram etc)
      // else if(!splitContent[i].includes('nostrudel.ninja')  // #t
        // && (splitContent[i].includes('media.unnerv.jp') ||
        //  )) {
        
        if(!splitContent[i].includes('domain') && !splitContent[i].includes('www.amazon.co.jp')
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





  /*
      let iframe1 = "";
      let iframe2 = "";
      let youtubeId = "";
      let httpLinkUrl1 = "";
      let httpLinkUrlText1 = "";  // # https://
      let httpLinkUrl2 = "";
      let httpLinkUrlText2 = "";  // # https://
      if(content.includes("https://") || content.includes("youtu.be")) {
        let tmp = content;
        for(let i=0; i<10; i++) {
          tmp = tmp.replace('\\n\\n',' ');
          tmp = tmp.replace('\\n',' ');
          tmp = tmp.replace('\n',' ');
          tmp = tmp.replace('　',' ');  // zenkaku space
          tmp = tmp.replace('<a',' ');
        }
        let tmp2 = tmp.split(' ');
        let iframeCount = 0;
        for(let i=0; i<tmp2.length; i++) {
          if(!tmp2[i].includes("\"https://") && tmp2[i].includes("https://")) {  // not <a href="https://>
            if(tmp2[i] == "https://") {
              tmp2[i] = "";
            }
            if(tmp2[i].includes("youtube.com") || tmp2[i].includes("youtu.be/")) {
              let id = tmp2[i];  // tmp2は' 'でsplit済み, idに入れる

              let target = 'youtube.com/watch?v=';
              // watch?v= より後を取得
              if(id.includes(target)) {
                id = id.substring(id.indexOf(target) + target.length, id.length);
              }
              // /live/ より後を取得
              target = '/live/'
              if(id.includes(target)) {
                id = id.substring(id.indexOf(target) + target.length, id.length);
              }
              // youtube.be/ より後を取得
              target = 'youtu.be/'
              if(id.includes(target)) {
                id = id.substring(id.indexOf(target) + target.length, id.length);
              }

              // &より前を取得
              target = '&'
              if(id.includes(target)) {
                id = id.substring(0, id.indexOf(target));
              }
              // ","sig より前を取得
              target = '","sig'
              if(id.includes(target)) {
                id = id.substring(0, id.indexOf(target));
              }
              // ?si= より前を取得
              target = '?si='
              if(id.includes(target)) {
                id = id.substring(0, id.indexOf(target));
              }


              // httpLink __YouTube
              httpLinkUrl1 = tmp2[i];
              // httpLinkUrl1 = 'https://www.youtube.com/@diversesystem';  //debug
              if(tmp2[i].includes("/live/")) {
                httpLinkUrl1 = 'https://www.youtube.com/live/' + id;
              }

              if(!id.includes("@")) {  // youtube channel 以外
                // contentから削除
                content = content.replace(tmp2[i], "");

                httpLinkUrlText1 = '__YouTube(content)';
                iframe1 = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
                youtubeId = '_[id = ' + id + '(content)]';
              }
              else {
                // content = content + 'https://www.youtube.com/@diversesystem';
                content = content.replace(id, '<a href="' + id + '" target="_blank">' + id + '</a>');
              }

              // youtubeId = '_[id = ' + tmp2[i] + ']';  // Debug tmp2[i]表示
              //content = content + "<br />id=" + id  // Debug id表示
            }  // youtube
            else if(tmp2[i].includes("open.spotify.com")) {
              content = content.replace(tmp2[i], "");
              const id = tmp2[i].replace("https://open.spotify.com/track/", ""); 
              iframe1 = '<iframe src="https://open.spotify.com/embed/track/' + id + '" width="560" height="232" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;"></iframe>'

              httpLinkUrl1 = tmp2[i];
              httpLinkUrlText1 = '__Spotify(content)';
            }
            else if(tmp2[i].includes("targoyle.jp")) {
              if(httpLinkUrlText1 == '') {
                httpLinkUrlText1 = '_link[1](content)';
                httpLinkUrl1 = 'https://targoyle.jp/fanart/';  //debug
              }
              else {
                httpLinkUrlText2 = '_link[2](content)';
                httpLinkUrl2 = 'https://targoyle.jp/';  //debug
              }
            }
            //("hatenablog.com")("nicovideo.jp")("nico.ms")("www3.nhk.or.jp")
            else {
              iframeCount++;
              const url = tmp2[i];
              // text link
              if(  !tmp2[i].includes("codepen.io")
                && !tmp2[i].includes("ctoa-") 
                && !tmp2[i].includes("nostr.cooking") 
                && !tmp2[i].includes('https://nostr.build/profilepic.php' )
                //&& tmp2[i] != 'https://nostr.build/profilepic.php' 
                && tmp2[i].length != 0) {
                // remove image link
                if(  tmp2[i].includes(".mp4") 
                  || tmp2[i].includes("?set=set4") 
                  || tmp2[i].includes(".png") 
                  || tmp2[i].includes(".mov") 
                  || tmp2[i].includes(".jpeg") 
                  || tmp2[i].includes(".jpg") 
                  || tmp2[i].includes("@jpeg")  // threads img
                  || tmp2[i].includes(".webp")) {
                        content = content.replace(tmp2[i], "");
                }
                // OGP hatenablogcard
                else {
                  // ryusoku
                  if(tmp2[i].includes("https://nostr-hotter-site.vercel.app")){
                    content = content.replace(tmp2[i], '<a href="https://nostr-hotter-site.vercel.app" target="_blank">https://nostr-hotter-site.vercel.app/</a>'); 
                  }
                  else {
                    const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + url + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
                    content = content.replace(tmp2[i], tmpIframe);
                    httpLinkUrl1 = tmp2[i];
                    if(httpLinkUrl1.includes("music.apple.com")) {
                        httpLinkUrlText1 = '__Apple Music(content)';
                    }
                    else if(httpLinkUrl1.includes("/x.com/")) {
                        httpLinkUrlText1 = '__X(content)';
                    }
                    else if(httpLinkUrl1.includes("/zenn.dev/")) {
                        httpLinkUrlText1 = '__Zenn(content)';
                    }
                    else if(httpLinkUrl1.includes("/www.instagram.com/")) {
                        httpLinkUrlText1 = '__Instagram(content)';
                        // https:// 以降の文字列を取得(https://も含む)
                        httpLinkUrl1 = httpLinkUrl1.substring(httpLinkUrl1.indexOf('https://'), httpLinkUrl1.length);
                        // httpLinkUrlText1 = '__Instagram' + '[URL=' + httpLinkUrl1 + ']';  // debug
                    }
                    else {
                      httpLinkUrlText1 = '__iframe(content)';
                    }
                  }
                }
              }
              else {
                //content = content.replace(tmp2[i], "");
                content = content.replace(tmp2[i], '<a href=' + tmp2[i] + ' target="_blank">' + tmp2[i] + '</a>');
              }
            }
          }
        }
      }



      */





    return content +
        iframe1;
}
