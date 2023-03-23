import { useRef } from "react";
import { useNostrEvents, dateToUnix, useProfile } from "nostr-react";
import PostButton from "@/components/PostButton";
import { nip19 } from "nostr-tools";
import moment from 'moment';

const Test = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      authors: ['2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2','43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906','fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b'], // maya,Segment,shino3
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
      else if (event.pubkey == 'fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b') {
        // shino3
        image = 'https://pbs.twimg.com/profile_images/1032657185392615425/0OvFqyb5_400x400.jpg'
      }

      return (
        <li className="item" key={index}>
          <div className="card-container">
            <div className="card-text">
              <img src={image} width="50" height="50" />  {event.content} {moment(createdTime).fromNow()}
            </div>
          </div>
        </li>
      );
    });
    return posts;
  }

  return (
    <>
      <div style={{ backgroundColor: "white", color: "black" }}>
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
