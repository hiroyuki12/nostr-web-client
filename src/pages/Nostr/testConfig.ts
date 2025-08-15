// Configuration / constants for test.tsx

// kind 39701 social bookmark

// untilValue = 1675696012;  //paging  Repost image test nachika
// untilValue = 1675635362;  //avatar リンクぎれ確認

//untilValue = untilValue - 31536000  // 1年前
//  untilValue = 1709543364
// untilValue = untilValue - 31536000 * 0.5  // 半年前
//  untilValue = 1725414989
// untilValue = untilValue - 31536000 * 1.5  // 1.5年前
// untilValue = 1693949858
// untilValue = untilValue - 31536000 * 2  // 2年前
//  untilValue = 1679036480

// following 配列 req
// avatar画像　ローカルにキャッシュ
// css
// 配列 tags
// auto load
// youtube shorts content

// untilValue = 1744811580;  // 30023 Markdown
// untilValue = 1742212592;  // #3, #4 ノストレカまとめ

//  untilValue = 1739151041;  // Twitter OGP. nostter large OK (by content)
// untilValue = 1678362909;  // Twitter ok content
// untilValue = 1743210249;  // fix nostr:npub 表示されない
// untilValue = 1742964890;  // NG mp4
// untilValue = 1742969245;  // Aoole Music
// untilValue = 1742908206;  // NIP-21 link
// untilValue = 1742466396;  //NG SVG
// untilValue = 1741533291;  // 特殊文字
// untilValue = 1678351582;  // NG dropboxがc_Twitterと表示
// untilValue = 1678100231;  // バッジまとめ
// untilValue = 1709549855;  // quote npub
// untilValue = 1741076218;  // quote_npub1
// untilValue = 1677987932;  // NG Twitter content  ?t
// untilValue = 1709499298;  // NG Apple Music
// untilValue = 1740997233;  // NG Twitter tag "r"
// untilValue = 1677850677;  // NG 複数3つ Twitter content
// untilValue = 1677851103;  // NG 複数2つ Twitter content
// untilValue = 1675697898;  // fix spotify track
// untilValue = 1740922206;  // youtube playlist NG
// untilValue = 1740192864;  // NG #q(30023: quote_naddr1 content, 30023 lumilumi ok, nos haiku
// untilValue = 1740193143;  // fix Error: Invalid byte sequence,  nip19.noteEncode(quoteId)
// untilValue = 1740896171;  // NG YouTube Channel @nostrasia/videos
// untilValue = 1740895678;  // NG Repost content 短い ,kugiri
// untilValue = 1740877806;  // NG Repost content 短い
// untilValue = 1677589855;  // NG #3〜#13
// untilValue = 1677890462;  // NR Re [1]
// untilValue = 1675699195;  // #[0] Repost NG
// untilValue = 1740801707;  // NG コード表示 空白
// untilValue = 1740489426;  // script http NG
// untilValue = 1740489507;  // twitter content NG
// untilValue = 1740296791;  // fix 画像はみ出る 横長画像 tag Image
// untilValue = 1740242330;  // NG テキスト　はみ出る
// untilValue = 1734267365;  // 30023   Thingstr
// untilValue = 1740216152;  // amazon.co.jp iframe NG. fix link
// untilValue = 1740213396;  // udio.com iframe NG. fix link
// untilValue = 1740833587;  // fix 画像たくさん 17 image

// untilValue = 1675696829;  // 2023/2/7 nostr client base github

// untilValue = 1640953592;  // 2021/12/31  fiatfaj first post
// untilValue = 1650053582;  // 2022/4/16   Will first post
// untilValue = 1670984287;  // 2022/12/14  jack first post

// untilValue = 1650953592;  // 2022/4/26  Will
// untilValue = 1660953592;  // 2022/8/20  Will
// untilValue = 1670953592;  // 2022/12/14 fiatfaj,Will
// untilValue = 1670990442;  // 2022/12/14 jack

//  untilValue = 1675000000; // 2023/1/29 22- 2023/1/29 17,
//  untilValue = 1675700000; // 2023/2/7 1-  2023/2/7 0,    +5,000
// untilValue = 1675698353;

//  untilValue = 1676200000; // 2023/2/12-   2023/2/12,   +200,000 nosaray
//  untilValue = 1675696120;

//  untilValue = 1677590000; // 2023/2/28 22-2023/2/28 15  +10,000 nosaray
// untilValue = 1680270000; // 2023/3/31 22- 2023/3/31 20,  +10,000 *

// untilValue = 1684667029; // 2023/5/21 20:03 -

// maxNum used when building merged follow list (limit per event tag index)
export const MAX_NUM = 700; // OK <= 700, shion main

// since offset in seconds used to compute sinceValue = untilValue - SINCE_OFFSET_SECONDS
export const SINCE_OFFSET_SECONDS = 1800; // about 30 minutes

// Authors used for the main follow-list (event kind 3)
export const MAIN_EVENT_AUTHORS: string[] = [
  // shion
  "0c9b1e9fef76c88b63f86645dc33bb7777f0259ec41e674b61f4fc553f6db0e0",
  // my jp
  // "efd0c54be5718d038609bcf70cee2d84c390dd7bad0978f3aaea2e50a01ea3c7",
  // 1j
  // "91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877",
];

// Authors used for the additional follow-list (event kind 3)
export const ADD_EVENT_AUTHORS: string[] = [
  // 1j
  "91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877",
];

// Kind filter used for the main content events
export const DEFAULT_KINDS: number[] = [1, 6, 20, 22, 42, 1111, 30023, 30315];

// Kind for follow-list (contacts)
export const FOLLOW_LIST_KIND: number[] = [3];

// Default limit for event queries
export const DEFAULT_LIMIT = 50;

// Export other small defaults here if needed in future
