import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import { nip19 } from "nostr-tools";
import moment from 'moment';

const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      //authors: ['2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2','43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906','fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b'], // maya,Segment,shino3
      //authors: '43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906', // maya
      kinds: [1],
      //since: dateToUnix(now.current), // all new events from now
      since: 1679413822, // 1679413822 2023/03/22 0:50
      //since: 1678379111,
      //since: 0,
      limit: 10,
    },
  });

  const { data: npub } = nip19.decode(
    "npub17l0vmtyfqa77756064d4ljcmnpxgyp0sm248yzksgafpmmsqjgpq6ahnv0"
  );

  const { data: userData, isLoading } = useProfile({
    pubkey: npub.toString(),
  });
  console.log(isLoading);
  console.log(dateToUnix(now.current));
  //console.log({event.pubkey});

  const renderImageList = (list) => {
    const posts = events.map((event, index) => {
      let dateTime = new Date(event.created_at * 1000);
      let createdDate = dateTime.toLocaleDateString('ja-JP');
      let createdTime = createdDate + ' ' + dateTime.toLocaleTimeString('ja-JP');

      const npub = nip19.npubEncode(event.pubkey)

      let imageURL = getImageURL(event.pubkey);

      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              <img src={imageURL} width="50" height="50" />
                {event.content}
                <font color="orange" size="2">{moment(createdTime).fromNow()}</font>
            </div>
          </div>
        </li>
      );
    });
    return posts;
  }


  const getImageURL = (pubkey) => {
      let image =''
      if (pubkey == '43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906') {
        // maya
        image = 'https://i.gyazo.com/3e33d8e30a6db0868ad7a5beee61d5d2.webp'
      }
      else if (pubkey == '') {
        // 
        image = ''
      }
      else if (pubkey == 'f7decdac89077def534fd55b5fcb1b984c8205f0daaa720ad047521dee009202') {
        // AirArt
        image = 'https://ul.h3z.jp/Ci4sZ0IM.jpeg'
      }
      else if (pubkey == '4d39c23b3b03bf99494df5f3a149c7908ae1bc7416807fdd6b34a31886eaae25') {
        // akiomik
        image = 'https://i.imgur.com/Me9P5y1.png'
      }
      else if (pubkey == '83409ce424d2dae116fc9d1596f076d1d65843e44e026fa52a6b67dca2f35500') {
        // saharu
        image = 'https://pbs.twimg.com/profile_images/1210189515811250177/wr-LDUeN.jpg'
      }
      else if (pubkey == '81bbb510f2a6ecb221d1df36219e37a63ce2372795b4cb14759c8cd8468799a6') {
        // kame3des
        image = 'https://void.cat/d/LntKZCpUhj8WZBsuTWfjhm.webp'
      }
      else if (pubkey == '9168772564e66c07a776a3e2849b02d1a0ac88a7f8e621600c54493ca0de48ea') {
        // Kate 
        image = 'https://pbs.twimg.com/profile_images/1543631555179884546/qK8sI9Z5_400x400.jpg'
      }
      else if (pubkey == 'c762a9152a4fe93f35e386b668499dd140200d387c9f431e98ac75fd66eb0ad5') {
        // weepjp
        image = 'https://nostr.weep.me/a/random.webp'
      }
      else if (pubkey == 'd1d1747115d16751a97c239f46ec1703292c3b7e9988b9ebdd4ec4705b15ed44') {
        // jiftechnify
        image = 'https://void.cat/d/3q1WhDAGSDP1vphgXhYUQG.webp'
      }
      else if (pubkey == 'a2ee3c86c25f22a23e0bd7b8af18631a994b8d67a9fba7b657a9db63560c8c47') {
        // pomcan
        image = 'https://nostr.build/i/nostr.build_b8a40685d0b7f631bd3efb44c48777ad2a25316c1c3cc38945634c36dc3e220b.jpeg'
      }
      else if (pubkey == 'f40832e26b1d12f8a27717b606996baef68bc4b6b86c4a35ca827f6fbcbf511e') {
        // erechorse
        image = 'https://i.gyazo.com/0775dc06170f3a9385faf921c50d8d80.jpg'
      }
      else if (pubkey == '4c5d5379a066339c88f6e101e3edb1fbaee4ede3eea35ffc6f1c664b3a4383ee') {
        // koteitan
        image = 'https://koteitan.github.io/img/ni_circlefit.jpg'
      }
      else if (pubkey == '6b24da7e8e5236d17307501b73b50326f33060d2ec11ee4b9c42576bd011b895') {
        // pomchan
        image = 'https://nostr.build/i/nostr.build_a414ec5fb667dd1965c9f70d4e1e4c3ad7be88ba4189bfcfbc80cf1274eb49c0.jpg'
      }
      else if (pubkey == '5257f6d685301de8792099a0b173c3f57f42750612dd876fa0955aaac90192b1') {
        // takenoko
        image = 'https://storage.googleapis.com/drive.misskey.nokotaro.com/files/fcef8b90-e0af-445e-b259-49422df0ea86.png'
      }
      else if (pubkey == 'c9a58ba53c4287c4939ed71a7e31cb21bd13d2ff4bbbcc985455f25a7a20e636') {
        // afternooncurry
        image = 'https://i.gyazo.com/cd5e3a543bf20f0caafb9f19f13527e6.jpg'
      }
      else if (pubkey == '21ac29561b5de90cdc21995fc0707525cd78c8a52d87721ab681d3d609d1e2df') {
        // betoneto
        image = 'https://pbs.twimg.com/profile_images/1563860073625051136/lsXjXGwA.jpg'
      }
      else if (pubkey == '510e0096e4e622e9f2877af7e7af979ac2fdf50702b9cd77021658344d1a682c') {
        // Moonlotus
        image = 'https://nostr.build/i/nostr.build_f7c7face2810230bdb3aec449aafd802efdb72e5579afca9c4b45d77dcbe1083.jpg'
      }
      else if (pubkey == '75f457569d7027f819de92e8bb13795c0febe9750dc3fb1b5c42aeb502d0841d') {
        // yutaro
        image = 'https://pbs.twimg.com/profile_images/1389106045058838528/aZRGqdwI_400x400.jpg'
      }
      else if (pubkey == '1040a4404aa3a08e4d59aa1768143a8cbc96112dae9d924841a2d9a2120728b1') {
        // h3zjp
        image = 'https://media.h3z.jp/img/profile-img-circle.png'
      }
      else if (pubkey == '811002f2348bdaa52d89b18b7e90bbc6aa5b948eff3e3689c041d2ac0ccba15a') {
        // feier
        image = 'https://d2pmpprut4wwdv.cloudfront.net/fit-in/300x300/images/2KHvdIWcCzB0u6gxDJJRj7ST4if'
      }
      else if (pubkey == '9fe72c76ced19360f2e62d89b8b54f80fdea877a1f334b58b1e4bdf1e3a5f902') {
        // jun_dow
        image = 'https://jundow.neocities.org/_nostr/e8f4cfb9fa23abf8d2644cacf1075cb9_bigger.png'
      }
      else if (pubkey == 'ce0d385252733bd84c1e9ce7d7cdb5733b8021bb0b3740c84d184580bf403ea3') {
        // mouse_484
        image = 'https://scrapbox.io/files/63e0ff39376f93001e1677d8.png'
      }
      else if (pubkey == 'e6821fb99307c5fbab0ca40f46a4d5525b6116f44db16ce37711f1e390462fb3') {
        // matusita
        image = 'https://nostr.build/i/p/nostr.build_6b2c86448fe463a2719924aba990ec70af092713cd44ae8cdef35ba9db9d2ef9.png'
      }
      else if (pubkey == '3ce2b51dca8b67b69c0ccb7c6a226437f7dbcc44a32426e70e52c78336fc72c7') {
        // kiri_tory
        image = 'https://void.cat/d/QQgTv9ZfJ7weZzsSMuFXmk'
      }
      else if (pubkey == 'af07786197826a2f1ebd71f19d137aeed74eb4c8e56cb32a3efee82f898e2714') {
        // mekamakrd
        image = 'https://void.cat/d/JWM33EgySUGtsbFL7GCLxx.webp'
      }
      else if (pubkey == '26bb2ebed6c552d670c804b0d655267b3c662b21e026d6e48ac93a6070530958') {
        // ocknamo
        image = 'https://cloudflare-ipfs.com/ipfs/QmVRuC4WGugfQ8U5pDhW2AkXgJogbs14Zu9Dd4GmfBMsZM'
      }
      else if (pubkey == '53bde5f1748546a0c28f1fab8ee18d7229e6ebaaea2df343906de9325333dd3c') {
        // syui
        image = 'https://syui.cf/icon/syui.png'
      }
      else if (pubkey == 'f1479c160e576934586a7424195dc155a04448d3d71d4090adec95915dd1eba9') {
        // h3y6e
        image = 'https://h3y6e.com/nostr/icon_f1479c160e576934586a7424195dc155a04448d3d71d4090adec95915dd1eba9.png'
      }
      else if (pubkey == 'c75622fd77ff9aa0e0ae9b213fd06170940807065d997e9c28ff8a67a9b66e1d') {
        // nobody u
        image = 'https://i.postimg.cc/bYxrTcDf/icon.jpg'
      }
      else if (pubkey == '8065e16d7b437e74626dc017a1f8f136937901d4cd2bfffb1c6a037719fbf289') {
        // kappaseijin
        image = 'https://raw.githubusercontent.com/kappaseijin/kappaseijin/main/kappa.png'
      }
      else if (pubkey == '897bb37449ed3fcea198e260a406733290dc2bedd5a5d447a68472c491baa739') {
        // U.G.M.
        image = 'https://nostr.build/i/nostr.build_2ba9abe96dec2c23e1c7befaa9837d63d075f7edbc219711fba78be5c8d18a7f.png'
      }
      else if (pubkey == 'aadd000a4183196aaf8fd38a8cb5759616e0197eac9dc5eea9882f74c4629ec4') {
        // adieuCord
        image = 'https://cdn.midjourney.com/16003ed4-dd82-449a-afe4-20d25711c98d/grid_0.png'
      }
      else if (pubkey == 'cb92d81fded72024a68ff0e693a9e6b35687c56040a8780fd739ac6228f9fde5') {
        // kawaiirailroads
        image = 'https://millie-may.net/img/icon_nostr.png'
      }
      else if (pubkey == 'fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b') {
        // shino3
        image = 'https://pbs.twimg.com/profile_images/1032657185392615425/0OvFqyb5_400x400.jpg'
      }
      else if (pubkey == '1f46356a832a4b2d65c12e9f7c6fd8608a285b1efa896773f4f67c6ee9e33e21') {
        // uaa
        image = 'https://nostr.build/i/nostr.build_472e5de35839285714a8e1a00d011ecc18b10a6cd95e6b7443332938b7351ba2.jpg'
      }
      else if (pubkey == '0c9b1e9fef76c88b63f86645dc33bb7777f0259ec41e674b61f4fc553f6db0e0') {
        // shi_on_72
        image = 'https://nostr.build/i/nostr.build_0d82a5e17035a545e37c91def026c542a2fcc967f5a2adda881fe121de4098e2.jpg'
      }
      else if (pubkey == '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c') {
        // syusui_s
        image = 'https://i.gyazo.com/883119a7763e594d30c5706a62969d52.jpg'
      }
      else if (pubkey == '846b763b1234c5652f1e327e59570dcb6535d2d20589c67c2a9a90b323539eca') {
        // caz0617
        image = 'https://www.tgkzmdd.help/nostrimg/profile/feelie.jpg'
      }
    return image;
  }

  return (
    <>
      <div style={{ backgroundColor: "#222222", color: "#DDDDDD" }}>
        <div>
          <p>Name: {isLoading ? "Loading..." : userData?.name}</p>
          <p>Public key: {isLoading ? "Loading..." : userData?.npub}</p>
          <p>Picture URL: {isLoading ? "Loading..." : userData?.picture}</p>
        </div>
        <div>
          <PostButton />
        </div>
        <ul>{renderImageList(events)}</ul>
      </div>
    </>
  );
};

export default Test;
