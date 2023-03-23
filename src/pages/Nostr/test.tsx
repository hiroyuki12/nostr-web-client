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
    "npub1gdjc46gns2lw0harclpkpvf6tmyvygnrtu4j4tfaua0yhvsd4yrq38fkq3"
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

      let image =''
      if (event.pubkey == '43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906') {
        //maya
        image = 'https://i.gyazo.com/3e33d8e30a6db0868ad7a5beee61d5d2.webp'
      }
      else if (event.pubkey == '') {
        //
        image = ''
      }
      else if (event.pubkey == 'f1479c160e576934586a7424195dc155a04448d3d71d4090adec95915dd1eba9') {
        // h3y6e
        image = 'https://h3y6e.com/nostr/icon_f1479c160e576934586a7424195dc155a04448d3d71d4090adec95915dd1eba9.png'
      }
      else if (event.pubkey == 'c75622fd77ff9aa0e0ae9b213fd06170940807065d997e9c28ff8a67a9b66e1d') {
        // nobody u
        image = 'https://i.postimg.cc/bYxrTcDf/icon.jpg'
      }
      else if (event.pubkey == '8065e16d7b437e74626dc017a1f8f136937901d4cd2bfffb1c6a037719fbf289') {
        // kappaseijin
        image = 'https://raw.githubusercontent.com/kappaseijin/kappaseijin/main/kappa.png'
      }
      else if (event.pubkey == '897bb37449ed3fcea198e260a406733290dc2bedd5a5d447a68472c491baa739') {
        // U.G.M.
        image = 'https://nostr.build/i/nostr.build_2ba9abe96dec2c23e1c7befaa9837d63d075f7edbc219711fba78be5c8d18a7f.png'
      }
      else if (event.pubkey == 'aadd000a4183196aaf8fd38a8cb5759616e0197eac9dc5eea9882f74c4629ec4') {
        // adieuCord
        image = 'https://cdn.midjourney.com/16003ed4-dd82-449a-afe4-20d25711c98d/grid_0.png'
      }
      else if (event.pubkey == 'cb92d81fded72024a68ff0e693a9e6b35687c56040a8780fd739ac6228f9fde5') {
        // kawaiirailroads
        image = 'https://millie-may.net/img/icon_nostr.png'
      }
      else if (event.pubkey == 'fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b') {
        // shino3
        image = 'https://pbs.twimg.com/profile_images/1032657185392615425/0OvFqyb5_400x400.jpg'
      }
      else if (event.pubkey == '1f46356a832a4b2d65c12e9f7c6fd8608a285b1efa896773f4f67c6ee9e33e21') {
        // uaa
        image = 'https://nostr.build/i/nostr.build_472e5de35839285714a8e1a00d011ecc18b10a6cd95e6b7443332938b7351ba2.jpg'
      }
      else if (event.pubkey == '0c9b1e9fef76c88b63f86645dc33bb7777f0259ec41e674b61f4fc553f6db0e0') {
        // shi_on_72
        image = 'https://nostr.build/i/nostr.build_0d82a5e17035a545e37c91def026c542a2fcc967f5a2adda881fe121de4098e2.jpg'
      }
      else if (event.pubkey == '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c') {
        // syusui_s
        image = 'https://i.gyazo.com/883119a7763e594d30c5706a62969d52.jpg'
      }
      else if (event.pubkey == '846b763b1234c5652f1e327e59570dcb6535d2d20589c67c2a9a90b323539eca') {
        // caz0617
        image = 'https://www.tgkzmdd.help/nostrimg/profile/feelie.jpg'
      }

      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              <img src={image} width="50" height="50" />
                {event.content}
                <font color="orange" size="2">{moment(createdTime).fromNow()}</font>
            </div>
          </div>
        </li>
      );
    });
    return posts;
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
