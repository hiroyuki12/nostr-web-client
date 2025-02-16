export const makeQuoteLinksHTML = (content) => {

  // (to), (quote)  nostr:npub1, nostr:note1, nostr:nevent1
  let quoteLinkUrl = "";
  let quoteLinkText = "";
  let quoteLinkHTML1 = "";
  let quoteLinkHTML2 = "";
  let quoteLinkHTML3 = "";



  const wordsNostr = content.split(/(:[a-z0-9_]+:|https?:\/\/[\w\-.~:/?#\[\]@!$&'()*+,;=]+|nostr:(?:nprofile|nrelay|nevent|naddr|nsec|npub|note)[a-z0-9]*)/g);
  // nostr:note1, nostr:naddr1, nostr:nevent1
  if(content != undefined &&
    (content.includes("nostr:note1") || 
      content.includes("nostr:naddr1") || 
      content.includes("nostr:nevent1") || 
      content.includes("nostr:nprofile1") || 
      content.includes("nostr:npub1"))
  ) {
    for(let i=0; i<wordsNostr.length; i++) {

      // fixed
      if(wordsNostr[i].includes("nostr:npub1") && wordsNostr[i].length > 11) {

        //const toLinkUrl = 'https://nostter.app/' + wordsNostr[i].replace('nostr:','');
        //const toLinkUrl = "https://nostter.app/" + wordsNostr[i].replace('nostr:',''); 
        //const toLinkUrl = "https://snort.social/p/" + wordsNostr[i].replace('nostr:',''); 
        const toLinkUrl = "https://nostrudel.ninja/#/u/" + wordsNostr[i].replace('nostr:',''); 
        if(quoteLinkHTML1 === "") {
          quoteLinkText = "(quote_npub1)";
          quoteLinkHTML1 = '<a href="' + toLinkUrl + '" target="_blank">' + quoteLinkText +'</a>';
        }
        else if(quoteLinkHTML1 != "") {
          quoteLinkText = "(quote2_npub1)";
          quoteLinkHTML2 = '<a href="' + toLinkUrl + '" target="_blank">' + quoteLinkText +'</a>';
        }
        else if(quoteLinkHTML2 != "") {
          quoteLinkText = "(quote3_npub1)";
          quoteLinkHTML3 = '<a href="' + toLinkUrl + '" target="_blank">' + quoteLinkText + '</a>';
        }

        //todo
        /*
        if(wordsNostr[i].replace('nostr:','') === 'npub1823chanrkmyrfgz2v4pwmu22s8fjy0s9ps7vnd68n7xgd8zr9neqlc2e5r') {
          content = content.replace('(to)','@やぶみちゃん');
        }
        else if(wordsNostr[i].replace('nostr:','') === 'npub1y0d0eezhwaskpjhc7rvk6vkkwepu9mj42qt5pqjamzjr97amh2yszkevjg') {
          content = content.replace('(to)','@Yodogawa-Janken');
        }
        else if(wordsNostr[i].replace('nostr:','') === 'npub1ttqyyl8stz9wtj0sn25qp6vah0jdcxwpdtaaxg4efsqkczz7rsxshjpp3x') {
          content = content.replace('(to)','@mahjong');
        }
      
        else if(wordsNostr[i].replace('nostr:','') === 'npub1f6rvmwc76arl7sxx2vparlzx8cg2ajc3xpymqh7yx97znccue2hs5mkavc') {
          content = content.replace('(to)','@ぬるぽ・ｶﾞｯ');  //@nullpoga
        }
        else if(wordsNostr[i].replace('nostr:','') === 'npub19xm6kcedxef3232d222gj0sxql8vs2tutyg0fq4z6875zfs3d8ascl440n') {
          content = content.replace('(to)',"@もちもち");
        }
        else if(wordsNostr[i].replace('nostr:','') === 'npub19we2h0793y4hhk500r2ndqkez0xf53rtghs3j20sjdwclh7tgz7s36kl6t') {
          content = content.replace('(to)',"@うにゅう");
        }
        else if(wordsNostr[i].replace('nostr:','') === 'npub17dxnfw2vrhgtk4fgqdmpuqxv05u9raau3w0shay7msmr0dzs4m7s6ng4yl') {
          content = content.replace('(to)',"@ログボちゃん(休止中)");
        }
        else if(wordsNostr[i].replace('nostr:','') === 'npub1pp79ruvjd7xned8lgh6n4rhz4pg3els3x5n6kr58l8zcyysp5c0qrkan2p') {
          content = content.replace('(to)',"@日本人ユーザー (bot))");
        }*/
      }


      // fixed
      else if(wordsNostr[i].includes("nostr:note1") || wordsNostr[i].includes("nostr:nevent1")) {  

        //let quoteBaseUrl = "https://freefromjp.github.io/FreeFromWeb/#/thread/"
        //let quoteBaseUrl = "https://snort.social/e/"
        const quoteBaseUrl = "https://nostter.app/"

        if(quoteLinkHTML1 === "") {
          //quoteLinkUrl = "https://snort.social/e/" + wordsNostr[i].replace("nostr:",'') 
          //quoteLinkUrl = "https://iris.to/post/" + wordsNostr[i].replace("nostr:",'') 
          //quoteLinkUrl = "https://coracle.social/" + wordsNostr[i].replace("nostr:",'') 
          //quoteLinkUrl = "https://nostr.com/" + wordsNostr[i].replace("nostr:",'') 
          //quoteLinkUrl = "https://primal.net/thread/" + wordsNostr[i].replace("nostr:",'') 
          //quoteLinkUrl = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')
          quoteLinkUrl = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')  
          quoteLinkText = "_(quote_note1)";
          quoteLinkHTML1 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
          
          if(content.includes("nevent1")) {
            //emojis set https://nos-haiku.vercel.app/entry/nevent1qvzq
            //let quoteNeventLinkUrl = "https://njump.me/" + wordsNostr[i].replace("nostr:",'')
            //let quoteNeventLinkUrl = "https://snort.social/e/" + wordsNostr[i].replace("nostr:",'')
            //let quoteNeventLinkUrl = "https://nos-haiku.vercel.app/entry/" + wordsNostr[i].replace("nostr:",'')
            const quoteNeventLinkUrl = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')
            quoteLinkText = "_(quote_nevent1)";
            quoteLinkHTML1 = '<a href="' + quoteNeventLinkUrl + '" target="_blank">' + quoteLinkText + '</a>';
          }
        }

        else if(quoteLinkHTML1 != "") {
          quoteLinkUrl = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "_(quote2_note1)";
          quoteLinkHTML2 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
          
          if(content.includes("nostr:nevent1")) {
            quoteLinkText = "_(quote2_nevent1)";
            quoteLinkHTML2 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
          }
        }

        else if(quoteLinkHTML2 != "") {
          quoteLinkUrl = quoteBaseUrl + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "_(quote3_note1)";
          quoteLinkHTML3 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
          if(content.includes("nostr:nevent1")) {
            quoteLinkText = "_(quote3_nevent1)";
            quoteLinkHTML3 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
          
          }
        }
      }

      // todo
      else if(wordsNostr[i].includes("nostr:naddr1")) {
        if(quoteLinkHTML1 === "") {
          //content = content.replace(wordsNostr[i],'');
          //quoteLinkUrl = "https://snort.social/e/" + wordsNostr[i].replace("nostr:",'') 
          // quoteLinkUrl = "https://habla.news/a/" + wordsNostr[i].replace("nostr:",'')   // kind:30022
          // quoteLinkUrl = "https://lumilumi.app/" + wordsNostr[i].replace("nostr:",'')
          // quoteLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
          //quoteLinkUrl = "https://emojis-iota.vercel.app/a/" + wordsNostr[i].replace("nostr:",'')  //kind:30030
          quoteLinkUrl = "https://nos-haiku.vercel.app/entry/" + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "__(quote_naddr1)";
          quoteLinkHTML1 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>';
        }
        else if(quoteLinkHTML1 != "") {
          quoteLinkUrl = "https://nos-haiku.vercel.app/entry/" + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "__(quote2_naddr1)";
          quoteLinkHTML2 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>';
        }
        else if(quoteLinkHTML2 != "") {
          quoteLinkUrl = "https://nos-haiku.vercel.app/entry/" + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "__(quote3_naddr1)";
          quoteLinkHTML3 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>';
        }
      }

      // todo
      else if(wordsNostr[i].includes("nostr:nprofile1")) {
        if(quoteLinkHTML1 === "") {
          quoteLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "_(quote_nprofile1)";
          quoteLinkHTML1 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
        }
        else if(quoteLinkHTML1 != "") {
          quoteLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "_(quote2_nprofile1)";
          quoteLinkHTML2 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
        }
        else if(quoteLinkHTML2 != "") {
          quoteLinkUrl = "https://nostter.app/" + wordsNostr[i].replace("nostr:",'')
          quoteLinkText = "_(quote3_nprofile1)";
          quoteLinkHTML3 = '<a href="' + quoteLinkUrl + '" target="_blank">' + quoteLinkText + '</a>'
        }
          
      }
    }  // for
  }  // if



  const quoteLinksHTML = quoteLinkHTML1 + quoteLinkHTML2 + quoteLinkHTML3;
  // const quoteLinksHTML = quoteLinkHTML2 ;


  return quoteLinksHTML;
}
