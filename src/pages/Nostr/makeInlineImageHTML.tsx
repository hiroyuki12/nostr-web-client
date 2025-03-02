export const makeInlineImageHTML = (content) => {

// make img by conent

// return inlineImageHTML



    let arrayLinkUrl: string[] = []
    let imageUrl = ""


    let inlineImage1Height = "250";
    let inlineImage1Width  = "500";
    let image1Url = "";
    let image2Url = "";
    let image3Url = "";
    let image4Url = "";
    let image5Url = "";

    let audio1Url = "";
    //RegExp
    //let words = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|[a-z0-9]*)/g);



    
    if(content.includes("https:") || content.includes("http:")) {
        let tmpContent = content;
        {
            const count = tmpContent.split('\\/').length;
            for(let i=0; i<count; i++) {
                tmpContent = tmpContent.replace('\\/','/');
            }
        }
        for(let i=0; i<5; i++) {
            tmpContent = tmpContent.replace('　',' ');
            tmpContent = tmpContent.replace('`',' ');
            tmpContent = tmpContent.replace('`',' ');
            tmpContent = tmpContent.replace('https://',' https://');  // httpの前にスペースを追加
            tmpContent = tmpContent.replace('http://',' http://');
            tmpContent = tmpContent.replace("`", "");  // googleusercontent
        }
        {
            const count = tmpContent.split('\n').length;
            for(let i=0; i<count; i++) {
                tmpContent = tmpContent.replace('\n',' ');
            }
        }
        const splitContent = tmpContent.split(' ');

        for(let i=0; i<splitContent.length; i++) {
            imageUrl = splitContent[i];
            if((imageUrl.includes(".jpg")  ||
                imageUrl.includes(".jpeg") || 
                imageUrl.includes(".png")  || 
                imageUrl.includes(".gif")  || 
                imageUrl.includes(".svg")  || 
                imageUrl.includes(".ico")  || 
                imageUrl.includes(".bmp")  || 
                imageUrl.includes(".webp") ||
                imageUrl.includes(".mp4") ||
                imageUrl.includes(".mov") 
                // imageUrl.includes("/img/") ||
                // imageUrl.includes("/images?") ||
                // imageUrl.includes("?set=set4") ||
                // imageUrl.includes("pbs.twimg.com/") ||
                // imageUrl.includes("robohash.org/") ||
                // imageUrl.includes("pbs.twimg.com/") ||
                // imageUrl.includes("/profile/avatar/") ||
                // imageUrl.includes("/imgproxy.snort.social/") ||
                // imageUrl.includes("/0.gravatar.com/avatar/") ||
                // imageUrl.includes("/www.gravatar.com/avatar/") ||
                // imageUrl.includes("googleusercontent.com/") ||
                // imageUrl.includes("grafana.gsn.im/"))
                )
            && imageUrl.includes("http")
            // && !imageUrl.includes("gifu.jp/")
            )  {
                if(!arrayLinkUrl.includes(imageUrl))  arrayLinkUrl.push(imageUrl);
            }
            else if(imageUrl.includes(".mp3")){
                audio1Url = imageUrl;
            }
        }
    }



    let inlineImageHTML = ''
    for(let i=0; i < arrayLinkUrl.length; i++) {
        inlineImageHTML = inlineImageHTML + '<a href="' + arrayLinkUrl[i] + '" target="_blank"><img src="' + arrayLinkUrl[i] + '" width="' + inlineImage1Width + '" class="imgborder" /></a>';
    }


    if(audio1Url != '')  inlineImageHTML = inlineImageHTML + '<audio controls src="' + audio1Url + '" />';
            
    if(inlineImageHTML != '' || audio1Url != '')  inlineImageHTML = inlineImageHTML + '_inlineImage(c)'
    
    return inlineImageHTML;
}