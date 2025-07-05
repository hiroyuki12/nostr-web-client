export const makeMarkdownHTML = (content, note) => {

    let newContent = ''
    let li = false;

    const splitContent = content.split('\n')
    for(let i=0; i<splitContent.length; i++) {
        if(splitContent[i].includes('### ')) {
            const tmp = splitContent[i].replace('### ', '')
            newContent = newContent + '<h3>' + tmp + '</h3>'
        }
        else if(splitContent[i].includes('## ')) {
            const tmp = splitContent[i].replace('## ', '')
            newContent = newContent + '<h2>' + tmp + '</h2>'
        }
        else if(splitContent[i].includes('# ')) {
            const tmp = splitContent[i].replace('# ', '')
            newContent = newContent + '<h1>' + tmp + '</h1>'
        }
        else if(splitContent[i].includes('- ')) {  //list No1
            li = true;
            newContent = newContent + '<ol>'
            const tmp = splitContent[i].replace('- ', '')
            newContent = newContent + '<li>' + tmp + '</li>'

            for(let j=i+1; j<splitContent.length; j++) {
                if(splitContent[j].includes('- ')) {  //list No2
                    i = j;
                    const tmp = splitContent[i].replace('- ', '')
                    // newContent = newContent + '<li>' + tmp + '</li>\n'
                    newContent = newContent + '<li>' + tmp + '\n'
                }
                else {
                    newContent = newContent + '</ol>'
                    break;
                }
            }

        }            
        else {
            if(!li) {
                // newContent = newContent + splitContent[i] + '@' + splitContent[i]
                newContent = newContent + splitContent[i] + '\n'
            }
        }

    }

    // content = content.replace('##', '<h2></h2>')
    // content = content.replace('###', '<h3></h3>')
    // content = content.replace('-', '<ol><li></li></ol>')

    // content = 'markdown_' + newContent;
    content = newContent;

    return content;
}
