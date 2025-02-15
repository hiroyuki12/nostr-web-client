export const makeInlineImageHTML = (content) => {

// make img by conent

// return inlineImageHTML

    let inlineImage1Height = "0";
    let inlineImage2Height = "0";
    let inlineImage3Height = "0";
    let inlineImage4Height = "0";
    let inlineImage5Height = "0";
    let image1Url = "";
    let image2Url = "";
    let image3Url = "";
    let image4Url = "";
    let image5Url = "";
    //RegExp
    //let words = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|[a-z0-9]*)/g);



    
    if(content.includes("https:") || content.includes("http:")) {
        let tmp = content;
        for(let i=0; i<20; i++) {
            tmp = tmp.replace('\\/','/');
        }
        for(let i=0; i<5; i++) {
            tmp = tmp.replace('\n',' ');
            tmp = tmp.replace('　',' ');
            tmp = tmp.replace('`',' ');
            tmp = tmp.replace('`',' ');
            tmp = tmp.replace('https://',' https://');  // httpの前にスペースを追加
            tmp = tmp.replace('http://',' http://');
            tmp = tmp.replace("`", "");  // googleusercontent
        }
        for(let i=0; i<20; i++) {
            tmp = tmp.replace('\n',' ');
        }
        const tmp2 = tmp.split(' ');

        let imageCount = 0;
        for(let i=0; i<tmp2.length; i++) {
            if((tmp2[i].includes(".jpg")  ||
                tmp2[i].includes(".jpeg") || 
                tmp2[i].includes(".png")  || 
                tmp2[i].includes(".gif")  || 
                tmp2[i].includes(".svg")  || 
                tmp2[i].includes(".ico")  || 
                tmp2[i].includes(".bmp")  || 
                tmp2[i].includes(".webp") ||
                tmp2[i].includes(".mp4") ||
                tmp2[i].includes(".mov") 
                // tmp2[i].includes("/img/") ||
                // tmp2[i].includes("/images?") ||
                // tmp2[i].includes("?set=set4") ||
                // tmp2[i].includes("pbs.twimg.com/") ||
                // tmp2[i].includes("robohash.org/") ||
                // tmp2[i].includes("pbs.twimg.com/") ||
                // tmp2[i].includes("/profile/avatar/") ||
                // tmp2[i].includes("/imgproxy.snort.social/") ||
                // tmp2[i].includes("/0.gravatar.com/avatar/") ||
                // tmp2[i].includes("/www.gravatar.com/avatar/") ||
                // tmp2[i].includes("googleusercontent.com/") ||
                // tmp2[i].includes("grafana.gsn.im/"))
                )
            && tmp2[i].includes("http")
            && !tmp2[i].includes("gifu.jp/")
            )  {
                if(imageCount===0) {
                    inlineImage1Height = "250";
                    image1Url = tmp2[i];
                }
                else if(imageCount===1) {
                    inlineImage2Height = "250";
                    image2Url = tmp2[i];
                }
                else if(imageCount===2) {
                    inlineImage3Height = "250";
                    image3Url = tmp2[i];
                }
                else if(imageCount===3) {
                    inlineImage4Height = "250";
                    image4Url = tmp2[i];
                }
                else if(imageCount===4) {
                    inlineImage5Height = "250";
                    image5Url = tmp2[i];
                }
                imageCount = imageCount + 1;
            }
        }
    }

    // let inlineImageHTML = '<a href="' + image1Url + '" target="_blank">{inlineImage1Height}</a><br />';
    let inlineImageHTML = '<a href="' + image1Url + '" target="_blank"><img src="' + image1Url + '" height="' + inlineImage1Height + '" /></a>' +
            '<a href="' + image2Url + '" target="_blank"><img src="' + image2Url + '" height="' + inlineImage2Height + '" /></a>' +
            '<a href="' + image3Url + '" target="_blank"><img src="' + image3Url + '" height="' + inlineImage3Height + '" /></a>' +
            '<a href="' + image4Url + '" target="_blank"><img src="' + image4Url + '" height="' + inlineImage4Height + '" /></a>' +
            '<a href="' + image5Url + '" target="_blank"><img src="' + image5Url + '" height="' + inlineImage5Height + '" /></a>';
    
            if(image1Url != '')  inlineImageHTML = inlineImageHTML + '_inlineImage'
    
    return inlineImageHTML;
}