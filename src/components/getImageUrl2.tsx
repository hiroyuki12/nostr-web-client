import { nip19 } from "nostr-tools";
import {getImageUrlDic} from './getImageUrlDic'

export const getImageUrl2 = (pubkey) => {
    const npub = nip19.npubEncode(pubkey)  // npubにEncode
    let image =''




    const { out_npubImageUrlDic, out_pukeyImageUrlDic } = getImageUrlDic();  // avatar
    let npubImageUrlDic = out_npubImageUrlDic
    let pubkeyImageUrlDic = out_pukeyImageUrlDic


    let imageURL2 = npubImageUrlDic[npub];  // npubで探す

    if(imageURL2 == undefined || imageURL2 == '') {
        imageURL2 = pubkeyImageUrlDic[pubkey];  // pubkeyで探す

        if(imageURL2 == undefined || imageURL2 == '') {
          // imageURL2 = 'https://robohash.org/npub1p06l4uzzu7q4n98gcdwq9kas0rh26dur2qvfveszhzmphhfg262s6m7el6?set=set4'
          imageURL2 = 'https://robohash.org/' + npub + '?set=set4'
        }
      }

    image = imageURL2





    return image;
}
