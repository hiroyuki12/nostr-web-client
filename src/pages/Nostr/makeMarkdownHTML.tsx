export const makeMarkdownHTML = (content, note) => {

    let newContent = ''

    const splitContent = content.split('\n')
    for(let i=0; i<splitContent.length; i++) {
        if(splitContent[i].includes('###')) {
            const tmp = splitContent[i].replace('###', '')
            newContent = newContent + '<h3>' + tmp + '</h3>\n'
        }
        else if(splitContent[i].includes('##')) {
            const tmp = splitContent[i].replace('##', '')
            newContent = newContent + '<h2>' + tmp + '</h2>\n'
        }
        else if(splitContent[i].includes('-')) {  //list No1
            newContent = newContent + '<ol>\n'
            const tmp = splitContent[i].replace('-', '')
            newContent = newContent + '<li>' + tmp + '</li>\n'

            for(let j=i+1; j<splitContent.length; j++) {
                if(splitContent[j].includes('-')) {  //list No2
                    i = j;
                    const tmp = splitContent[i].replace('-', '')
                    newContent = newContent + '<li>' + tmp + '</li>\n'
                }
                else {
                    newContent = newContent + '</ol>\n'
                    break;
                }
            }
        }            
        else {
            newContent = newContent + splitContent[i] + '\n'
        }

    }

    // content = content.replace('##', '<h2></h2>')
    // content = content.replace('###', '<h3></h3>')
    // content = content.replace('-', '<ol><li></li></ol>')

    // content = 'markdown_' + newContent;
    content = newContent;

    return content;
}
