export const makeTextlinkbyMarkdownHTML = (content, note) => {
    // for Markdown

    let newContent = ''

    const splitContent = content.split('\n')

    for(let i=0; i<splitContent.length; i++) {
        if(splitContent[i].includes('[')) {
            const splitContent2 = splitContent[i].split(']')
            for(let j=0; j<splitContent2.length; j++) {
                if(splitContent2[j].includes('[')) {
                    let id = splitContent[i];
                    // [ より後を取得
                    const target = '[';
                    if(id.includes(target)) {
                        id = id.substring(id.indexOf(target) + target.length, id.length);
                    }
                    const moto = '[' + id

                    let text = moto.split(']')[0].replace('[', '')

                    let url = ''
                    const motoSplit = moto.split('(');
                    if(motoSplit.length > 1) {
                        // let url = motoSplit[1].replace(')', '')
                        url = motoSplit[1].replace(')', '').replace('li>', '')
                        url = url.replace('<', '')
                        
                    }



                    newContent = newContent + '@' + moto + '\n';    // debug
                    newContent = newContent + '' + text + '\n'  //debug
                    newContent = newContent + '' + url + '\n'  //debug


                    // newContent = newContent.replace(moto, '<a href="' + url + '" target="_blank">' + text + '</a>')
                    content = content.replace(moto, '<a href="' + url + '" target="_blank">' + text + '</a>')
                    // content = content.replace(moto, '<a href="' + url + '" target="_blank">' + url + '</a>')  // debug
                }
            }
            


            // newContent = splitContent[i];
        }
    //     let splitContentText = ''
    //     if(splitContent.length > 1) {
    //         splitContentText = splitContent[1].split(']');
    //     }

    //     newContent = splitContentText[0];
    }

        //  newContent = splitContent.length;




    // content = newContent;

    return content;
}
