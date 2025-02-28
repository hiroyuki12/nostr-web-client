export const Nicovideo = (url) => {

    let id = url.replace("https://www.nicovideo.jp/watch/",""); 
    id = id.replace("https://nico.ms/",""); 
    // copilot const tmpIframe = '<iframe width="100%" height="300" src="' + src + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>(c)'
    

    const src = 'https://embed.nicovideo.jp/watch/' + id;
    // const src = 'https://embed.nicovideo.jp/watch/' + id + '?persistence=1&oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1';
    // const src = 'https://embed.nicovideo.jp/watch/' + id + '/script'
    // const src = 'http://embed.nicovideo.jp/watch/' + id + '?jsapi=1&playerId=abc'

    
    // const tmpIframe = '<iframe width="560" height="315" src="https://embed.nicovideo.jp/watch/' + id + '" allowfullscreen></iframe>(c)'
    const tmpIframe = '<iframe width="560" height="315" src=' + src +  ' frameborder="0" allowfullscreen></iframe>(c)'
    




    return tmpIframe;
}
