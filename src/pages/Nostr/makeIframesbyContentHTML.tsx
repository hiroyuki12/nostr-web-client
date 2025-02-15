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
    // splitContent = splitContent.replace('- ', '\n')

    const splitContent = tmpContent.split('\n');

    for(let i=0; i<splitContent.length; i++) {


      // if(splitContent[i] == 'https://github.com/vrtmrz/obsidian-livesync/releases/tag/0.24.11') {
      //   content = splitContent[i]
      // }
      if(splitContent[i].includes('https') && splitContent[i].includes('"https') && splitContent[i].includes('>https')) {
        // content = content.replace(splitContent[i], '<a href="' + splitContent[i] + '" target="_blank">' + splitContent[i] + '</a>'); 
      }
  

      // YouTube iframe
      if(splitContent[i].includes("youtube.com") || splitContent[i].includes("youtu.be/")) {
        let id = splitContent[i];
        // /watch?v= より後を取得
        const target = '/watch?v=';
        if(id.includes(target)) {
        id = id.substring(id.indexOf(target) + target.length, id.length);
        }
        // /live/ より後を取得
        const target2 = '/live/'
        if(id.includes(target2)) {
        id = id.substring(id.indexOf(target2) + target2.length, id.length);
        }
        // youtube.be/ より後を取得
        const target3 = 'youtu.be/'
        if(id.includes(target3)) {
        id = id.substring(id.indexOf(target3) + target3.length, id.length);
        }

        iframe1 = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
        
        content = content.replace(splitContent[i], iframe1)
        content = content + '_[id = ' + id + ']';
        content = content + '<a href="' + splitContent[i] + '" target="_blank">__YouTube(fromContent)</a>';
      }

      // Twitter iframe
      if(splitContent[i].includes("twitter.com") || splitContent[i].includes("x.com")) {
        const id = splitContent[i].replace("x.com","twitter.com"); 
        iframe1 = '<iframe border=0 frameborder=0 height=387 width=563 src="https://twitframe.com/show?url=' + id + '"></iframe>'

        // content = content.replace(splitContent[i], iframe1);

        // const httpLinkUrl1 = splitContent[i];  //NG
        // const httpLinkUrlText1 = '__Ttwitter(fromContent)';
        // content = content + '<a href="' + httpLinkUrl1 + '" target="_blank">' + httpLinkUrlText1 + '</a>';
      }

      // targoyle
      else if(splitContent[i].includes("targoyle.jp")) {
        if(httpLinkUrlText1 == '') {
          httpLinkUrlText1 = '_link[1](fromContent)';
          httpLinkUrl1 = 'https://targoyle.jp/fanart/';  //debug
          const link = '<a href="' + httpLinkUrl1 + '" target="_blank">' + httpLinkUrlText1 + '</a>';
          content = content.replace(splitContent[i], link);
        }      
        else {
        //   httpLinkUrlText2 = '_link[2](fromContent)';
        //   httpLinkUrl2 = 'https://targoyle.jp/';  //debug
        //   const link = '<a href="' + httpLinkUrl2 + '" target="_blank">' + httpLinkUrlText2 + '</a>';
        //   content = content.replace(splitContent[i], link);
        }
      }



        else if (splitContent[i].includes('http')){ // (instagram etc)
      // else if(!splitContent[i].includes('nostrudel.ninja')  // #t
        // && splitContent[i].includes('http')
        // && (splitContent[i].includes('media.unnerv.jp') ||
        //  splitContent[i].includes('nostr-hotter-site.vercel.app'))) {
        
        httpLinkUrl1 = splitContent[i].substring(splitContent[i].indexOf('https://'), splitContent[i].length);

        const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + httpLinkUrl1 + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
        content = content.replace(splitContent[i], tmpIframe);
      }



      else  {
        if (splitContent[i].includes('http')) { 

        httpLinkUrl1 = splitContent[i].substring(splitContent[i].indexOf('https://'), splitContent[i].length);

        const tmpIframe = '<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:580px;" title="【ブログタイトル】" src="https://hatenablog-parts.com/embed?url=' + httpLinkUrl1 + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
        content = content.replace(splitContent[i], tmpIframe);

        // content = httpLinkUrl1  // debug
        }
        else {
          //  content = splitContent[i]

        }
      }


    }  // for

    // content = 'def'





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

                httpLinkUrlText1 = '__YouTube(fromContent)';
                iframe1 = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
                youtubeId = '_[id = ' + id + '(fromContent)]';
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
              httpLinkUrlText1 = '__Spotify(fromContent)';
            }
            else if(tmp2[i].includes("targoyle.jp")) {
              if(httpLinkUrlText1 == '') {
                httpLinkUrlText1 = '_link[1](fromContent)';
                httpLinkUrl1 = 'https://targoyle.jp/fanart/';  //debug
              }
              else {
                httpLinkUrlText2 = '_link[2](fromContent)';
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
                        httpLinkUrlText1 = '__Apple Music(fromContent)';
                    }
                    else if(httpLinkUrl1.includes("/x.com/")) {
                        httpLinkUrlText1 = '__X(fromContent)';
                    }
                    else if(httpLinkUrl1.includes("/zenn.dev/")) {
                        httpLinkUrlText1 = '__Zenn(fromContent)';
                    }
                    else if(httpLinkUrl1.includes("/www.instagram.com/")) {
                        httpLinkUrlText1 = '__Instagram(fromContent)';
                        // https:// 以降の文字列を取得(https://も含む)
                        httpLinkUrl1 = httpLinkUrl1.substring(httpLinkUrl1.indexOf('https://'), httpLinkUrl1.length);
                        // httpLinkUrlText1 = '__Instagram' + '[URL=' + httpLinkUrl1 + ']';  // debug
                    }
                    else {
                      httpLinkUrlText1 = '__https_iframe(fromContent)';
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





    return content;
}
