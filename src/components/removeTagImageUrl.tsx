export const removeTagImageUrl = (content, note) => {


    let arrayLinkUrl: string[] = []
    let imageUrl = ""




    for(let i=0; i<note.tags.length; i++) {
        if(note.tags[i][0] === "r" ||
           note.tags[i][0] === "imeta"
        ) {
            if(note.tags[i][1].includes("http")) {
                if(note.tags[i][0] === "r") {
                    imageUrl = note.tags[i][1];
                }
                else {  // imeta
                    for(let j=0; j<note.tags[i].length; j++) {
                        if(note.tags[i][j].includes("image")) {
                            imageUrl = note.tags[i][1].replace('url ', '');
                        }
                    }
                }

                if(imageUrl.includes(".jpg")  ||
                    imageUrl.includes(".jpeg") || 
                    imageUrl.includes(".png")  || 
                    imageUrl.includes(".gif")  || 
                    imageUrl.includes(".svg")  || 
                    imageUrl.includes(".ico")  || 
                    imageUrl.includes(".bmp")  || 
                    imageUrl.includes(".webp") ||
                    imageUrl.includes(".mp4") ||
                    imageUrl.includes(".mov") 
                    ) {
                        
                    if(imageUrl.includes("`"))
                    {
                        // googleusercontent
                        imageUrl = imageUrl.replace("`", "");
                    }

                    if(!arrayLinkUrl.includes(imageUrl))  arrayLinkUrl.push(imageUrl);

                }  // if extension
            }  // if http
        }  //  if r
    }  // for






    for(let i=0; i < arrayLinkUrl.length; i++) {
        // Remove link
        content = content.replace(arrayLinkUrl[i],"");
    }

    

    return content;
}