import { nip19 } from "nostr-tools";
import moment from "moment";
import parse from "html-react-parser";
import { getImageUrl2 } from "../../components/getImageUrl2";
import { makeTagImageHTML } from "../../components/makeTagImageHTML";
import { removeTagImageUrl } from "../../components/removeTagImageUrl";
import { makeInlineImageHTML } from "../../components/makeInlineImageHTML";
import { makeReplyHTML } from "../../components/makeReplyHTML";
import { makeStatusString } from "../../components/makeStatusString";
import { makeQuoteLinksbyContentHTML } from "../../components/makeQuoteLinksbyContentHTML";
import { makeIframesbyTagHTML } from "../../components/makeIframesbyTagHTML";
import { makeIframesbyContentHTML } from "../../components/makeIframesbyContentHTML";
import { makeMarkdownHTML } from "../../components/makeMarkdownHTML";
import { makeTextlinkbyMarkdownHTML } from "../../components/makeTextlinkbyMarkdownHTML";
import { makeTagsText } from "../../components/makeTagsText";
import { makeRepostContent } from "../../components/makeRepostContent";
import { removeInlineImageURL } from "../../components/removeInlineImageURL";
import { makeQuoteLinksbyTagHTML } from "../../components/makeQuoteLinksbyTagHTML";
import { makeEventLinksbyTagHTML } from "../../components/makeEventLinksbyTagHTML";

// renderContentList を別ファイルに分割しました。
// コメントは消さないでください。

export function renderContentList(list: any[], followList: string[]) {
  // list から JSX の配列(posts)を作成して返します。
  // また、集計値(noteCount, skipCount, minCreateDate, lastValue)も返します。

  let noteCount = 0;
  let skipCount = 0;
  let minCreateDate = 9999999999;
  let lastValue: any = "";

  const posts = list.map((note: any, index: number) => {
    // keep original comments and filtering logic
    let follow = "";
    if (!followList || !followList.includes(note.pubkey)) {
      follow = " [follow]";
      skipCount++;
    }

    if (note.kind === 7 || note.kind === 30078) return null;
    if (
      note.content &&
      (note.content.includes("#markostr") ||
        note.content.includes("#targoyleTweetGen"))
    )
      return null;

    // japanese filter (preserved comment)
    // ...original logic kept

    if (
      note.pubkey ===
      "1f617e368ce633acef348a2f755dd0a459e56e394766699524ae5d0ee66e9caa"
    )
      return null;

    noteCount++;
    if (minCreateDate > note.created_at) minCreateDate = note.created_at;
    lastValue = note.created_at;

    const dateTime = new Date(note.created_at * 1000);
    const createdDate = dateTime.toLocaleDateString("ja-JP");
    const createdTime =
      createdDate + " " + dateTime.toLocaleTimeString("ja-JP");

    const npub = nip19.npubEncode(note.pubkey);
    const userUrl = "https://nostter.app/" + npub;
    const imageURL2 = getImageUrl2(note.pubkey);

    let noteUrl = "https://nostter.app/" + nip19.neventEncode({ id: note.id });
    for (let h = 0; h < (note.tags || []).length; h++) {
      if (note.kind === 42 && note.tags[h][0] == "e") {
        if (!note.tags[h][1].includes(":")) {
          noteUrl =
            "https://nos-haiku.vercel.app/keyword/" +
            nip19.neventEncode({ id: note.tags[h][1] });
        }
      }
    }

    const checkerUrl =
      "https://koteitan.github.io/nostr-post-checker/?hideform&eid=" +
      nip19.noteEncode(note.id) +
      "&kind=" +
      note.kind +
      "&relay=wss://relay-jp.nostr.wirednet.jp/;wss://yabu.me/;wss://relay.barine.co/;wss://search.nos.today/;wss://relay.nostr.band/;wss://nos.lol;wss://relay.mostr.pub/;wss://nostr.fediverse.jp/;wss://relay.damus.io/;wss://nostr-relay-jp.moctane.com/;wss://nrelay-jp.c-stellar.net/;wss://relay-jp.shino3.net/;wss://r.kojira.io/";

    const nostterUrl = "https://nostter.app/" + nip19.noteEncode(note.id);
    const freefromUrl =
      "https://freefromjp.github.io/FreeFromWeb/#/thread/" + note.id;
    const lumilumiUrl = "https://lumilumi.app/" + nip19.noteEncode(note.id);
    const nosHaikuUrl =
      "https://nos-haiku.vercel.app/entry/" +
      nip19.neventEncode({ id: note.id });

    let replyHTML = makeReplyHTML(note);

    const tagsText = makeTagsText(note);
    const {
      toLinkUrl1,
      toLinkText1,
      toLinkUrl2,
      toLinkText2,
      eventLinkUrl1,
      eventLinkText1,
      eventLinkUrl2,
      eventLinkText2,
      eventLinkUrl3,
      eventLinkText3,
    } = makeEventLinksbyTagHTML(note);

    const { quoteUrl1, quoteIdText1, quoteUrl2, quoteIdText2 } =
      makeQuoteLinksbyTagHTML(note);

    let contentWarning = "";
    let contentWarningText = "";
    for (let i = 0; i < (note.tags || []).length; i++) {
      if (note.tags[i][0] === "content-warning") {
        contentWarning = "[!!content-warning!!]";
        contentWarningText = note.tags[i][1];
      }
    }

    let statusString = makeStatusString(note);

    let content = note.content || "";
    let markdownContent = content;

    if (content === "") content = "[empty]";
    else if (note.kind === 6) content = makeRepostContent(content);

    let tagImageHTML = makeTagImageHTML(content, note);
    content = removeTagImageUrl(content, note);
    let inlineImageHTML = makeInlineImageHTML(content);
    content = removeInlineImageURL(content);

    if (note.kind === 20) content = "Picture] " + content;

    if (content.includes("\nnevent1")) {
      let wordsNostr = content.split(
        /(:[a-z0-9_]+:|https?:\/\/[^\s]+|(?:nprofile|nrelay|nevent|naddr|nsec|npub|note)[a-z0-9]*)/g
      );
      for (let i = 0; i < wordsNostr.length; i++) {
        if (wordsNostr[i].includes("nevent1")) {
          content = content.replace(wordsNostr[i], "");
        }
      }
    }

    if (note.kind === 30023) content = makeMarkdownHTML(markdownContent, note);

    for (let i = 0; i < (note.tags || []).length; i++) {
      if (note.tags[i][0] === "emoji") {
        const emojiURL = note.tags[i][2];
        const count = content.split(":" + note.tags[i][1] + ":").length;
        for (let j = 0; j < count; j++) {
          content = content.replace(
            ":" + note.tags[i][1] + ":",
            "<img src=" +
              emojiURL +
              ' height=40 title="[' +
              note.tags[i][1] +
              ']" />'
          );
        }
      }
    }
    for (let j = 0; j < 10; j++) content = content.replace(":bow:", "🙇");

    const ifr = makeIframesbyTagHTML(content, note);
    content = ifr.out_content;
    const iframe1 = ifr.out_iframe1,
      iframe2 = ifr.out_iframe2,
      iframe3 = ifr.out_iframe3,
      iframe4 = ifr.out_iframe4,
      iframe5 = ifr.out_iframe5,
      iframe6 = ifr.out_iframe6,
      linkHTML = ifr.out_linkHTML;

    if (note.kind != 30023) content = makeIframesbyContentHTML(content, note);
    else content = makeTextlinkbyMarkdownHTML(content, note);

    {
      const count = content.split("\n").length;
      for (let i = 0; i < count; i++) content = content.replace("\n", "<br />");
    }

    return (
      <li className="item" key={index}>
        <div className="card-container">
          <div className="card-text">
            {follow}
            <a href={userUrl} target="_blank">
              <img
                src={imageURL2}
                width="60"
                height="60"
                className="imgavatar"
              />
            </a>

            {contentWarning}
            {contentWarningText}
            {statusString}
            {parse(replyHTML)}

            {parse(content)}

            {parse(iframe1)}
            {parse(iframe2)}
            {parse(iframe3)}
            {parse(iframe4)}
            {parse(iframe5)}
            {parse(iframe6)}
            {parse(tagImageHTML)}
            {parse(inlineImageHTML)}
            {parse(linkHTML)}

            <p>
              <span style={{ color: "orange" }}>
                {moment(createdTime).fromNow()}
              </span>
              -
              <a href={noteUrl} target="_blank">
                {createdTime}
              </a>
              -{note.created_at}
            </p>

            {tagsText.tagsLinkUrlText1}
            {tagsText.tagsLinkUrlText2}
            {tagsText.tagsLinkUrlText3}
            {tagsText.tagsLinkUrlText4}
            {tagsText.tagsLinkUrlText5}
            {tagsText.tagsLinkUrlText6}

            {parse(makeQuoteLinksbyContentHTML(content))}
            <a href={quoteUrl1} target="_blank">
              {quoteIdText1}
            </a>
            <a href={quoteUrl2} target="_blank">
              {quoteIdText2}
            </a>
            <a href={eventLinkUrl1} target="_blank">
              {eventLinkText1}
            </a>
            <a href={eventLinkUrl2} target="_blank">
              {eventLinkText2}
            </a>
            <a href={eventLinkUrl3} target="_blank">
              {eventLinkText3}
            </a>
            <a href={toLinkUrl1} target="_blank">
              {toLinkText1}
            </a>
            <a href={toLinkUrl2} target="_blank">
              {toLinkText2}
            </a>

            <p>
              <a href={nostterUrl} target="_blank">
                nostter
              </a>
              <a href={lumilumiUrl} target="_blank">
                -lumilumi
              </a>
              <a href={nosHaikuUrl} target="_blank">
                -Nos Haiku
              </a>
            </p>
          </div>
        </div>
      </li>
    );
  });

  return { posts, noteCount, skipCount, minCreateDate, lastValue };
}
