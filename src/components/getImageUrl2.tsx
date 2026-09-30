import { nip19 } from "nostr-tools";
import {getImageUrlDic} from './getImageUrlDic'

export const getImageUrl2 = (pubkey: string) => {
    const npub = nip19.npubEncode(pubkey)  // npubにEncode
    let image =''




    const { out_npubImageUrlDic, out_pukeyImageUrlDic } = getImageUrlDic();  // avatar
    let npubImageUrlDic = out_npubImageUrlDic
    let pubkeyImageUrlDic = out_pukeyImageUrlDic


    let imageURL2 = npubImageUrlDic[npub];  // npubで探す

    if(typeof imageURL2 !== "string" || imageURL2 === '') {
        const pubkeyImageUrl = pubkeyImageUrlDic[pubkey];  // pubkeyで探す

        if(typeof pubkeyImageUrl !== "string" || pubkeyImageUrl === '') {
          // imageURL2 = 'https://robohash.org/npub1p06l4uzzu7q4n98gcdwq9kas0rh26dur2qvfveszhzmphhfg262s6m7el6?set=set4'
          imageURL2 = 'https://robohash.org/' + npub + '?set=set4'
        } else {
          imageURL2 = pubkeyImageUrl;
        }
      }

    image = typeof imageURL2 === "string" ? imageURL2 : ''





    return image;
}
