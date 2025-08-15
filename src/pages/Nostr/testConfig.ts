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
  //   "0c9b1e9fef76c88b63f86645dc33bb7777f0259ec41e674b61f4fc553f6db0e0",
  // my jp
  // "efd0c54be5718d038609bcf70cee2d84c390dd7bad0978f3aaea2e50a01ea3c7",
  // 1j
  "91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877",
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

// memo
// untilValue = 1739089652;  // inlineImage. tag "r" なし.
// untilValue = 1740816421;  // tag "r" image 7個
//  untilValue = 1739151061;  // content Apple Music large OGP. fix. nostrudel large OK (by content)
//  untilValue = 1695999820;  //  tag Apple Music OGP. fix. tag 'r' small
// untilValue = 1740364485;  // tag Apple Music tag "r" small
// untilValue = 1740811263;  // fix https
// untilValue = 1740805610;  // image tag "r"
//  untilValue = 1739046056;  // kind:30023 LogForm Will. Makdown syntax. lumilumi ok
// untilValue = 1734267337;  //  Repost content
//  untilValue = 1692963976;  // fix spotify playlist tag "r"
//  untilValue = 1687906810;  //fix  spotify playlist tag "r"
//  untilValue = 1692963542;  // fix Repost spotify album. content, 2つ表示される
// untilValue = 1739707055;  // tag "r" twitter   fix
//  untilValue = 1688253140;  //iframe 3つ tag "r". contentにもhttp
//  untilValue = 1740748496;  // youtube tag "r"
//  untilValue = 1739012160;  // youtube live content Repost ¥n fix
// untilValue = 1739588223;  //YouTube fix. tag "r"
// untilValue = 1740735358;  // nikoniko AGP todo
// untilValue = 1740668415;  // tag "r" image 2つ。同じ画像があるため
// untilValue = 1676068338;  // fix 30023 fiatjaf
// untilValue = 1680268376;  // repost 2つ avatar
// untilValue = 1740366714;  // Twitter large tag "r"
// untilValue = 1740368841;  // oppa avatar large
// untilValue = 1740366217;  // avatar large
// untilValue = 1740320393;  // #p link fix
// untilValue = 1740278453;  // fiatjaf avatar 画像 Image optimization /image/width=256/http://origin
// untilValue = 1740270976;  // kind:1808
// untilValue = 1740221491;  // tags 13個
// untilValue = 1740222292;  // 10030 emoji set
// untilValue = 1740207152;  // threads
//  untilValue = 1740149320; // twitterのiframe以降が表示されない。tag"r" 2つのうち、2個目のbsky linkが表示されない fix
// untilValue = 1739617219;  // quote_naddr1 nos-haiku ok kind:10030? lumilumi NG
// untilValue = 1686983200;  // quote_naddr1. nos-haiku emoji set kind:30030 fix, lumilumi ok
// untilValue = 1739065989;  // quote_nevent1. nos_haiku. 42.Channel_Message
// untilValue = 1739886588;  // fix Invalid byte sequence, nip19.noteEncode
// untilValue = 1740182551;  // fix mp3 audio
// untilValue = 1740192495;  // kind:30003 (ブックマーク)
// untilValue = 1739169439;  // httpが２つ。画像表示 fix. jpg(fron content)
//  untilValue = 1686241976;  //emoji 13 fix, <img>
// untilValue = 1740133406;  // x.com/i/broadcasts NG
// untilValue = 1740107126;  // Repost content fix. contentに,あり
// untilValue = 1739784977;  // Repost Text fix.
// untilValue = 1740062880;  // Thingstr
// untilValue = 1740054319;  // #t Nostr座談会 fix
// untilValue = 1740048906;  // twitter twitframe.com domain切れ
// untilValue = 1739973122;  // amazon iframe NG. fix text link
// untilValue = 1739879880;  // x.com iframe fix
// untilValue = 1739880840;  // inlineImage ok mov?
// untilValue = 1739870175;  // twitter iframe fix.
// untilValue = 1739873101;  // quote_npub1 3つあるのに2つしか表示されない fix
// untilValue = 1739796967;  // zenn ogp
//  untilValue = 1739018108;  // NHK NEW OGP  Todo. nostter ok
//  untilValue = 1739018724;  // togetter OGP Todo. nostter ok
//  untilValue = 1739015355;  // dare-ai OGP  Todo
//  untilValue = 1739024868;  // kirby OGP Todo nostter ok
// untilValue = 1739628837;  // quote_nprofile1
//  untilValue = 1739790231;  // youtu.be fix
//  untilValue = 1739099394;  // Repost Text ok
// untilValue = 1737563052;  // NG very large html. nostter ok
// untilValue = 1686839510;  //nicovideo iframe. fix TypeError:  '? '
// untilValue = 1739782236;  // quote_npub1
// untilValue = 1739674153;  // tag "r" (r) nipron iframe NG. fix text link
// untilValue = 1739674961;  // tag "r" (r) amazon iframe NG. fix text link
// untilValue = 1739678550;  // tag "r" link 7個 fix
//  untilValue = 1686929129;  //twitter iframe tag "r"
//  untilValue = 1700358511;  // instagram link iframe content fix
// untilValue = 1739577124;  // content iframe fix
// untilValue = 1739585002;  // Youtube target fix. youtu.be content
// untilValue = 1739359806;  // tag "r" img ok
// untilValue = 1700654092;  // long-form content. kind:30023 Markdown
// untilValue = 1734489363;  // #t tag
// untilValue = 1734489831;  // kind:20 not display picture
// untilValue = 1732921974;  // kind:20 not display picture
//  untilValue = 1739573404;  // fix: unnerv imeta url png  ok
//  untilValue = 1700351963;  // fix link. http nostter app home 4つ. tag r 4つ
//  untilValue = 1686933213;  //quote_note1(nostr:note1) fix
//  untilValue = 1686933213;  // nostr:note1 fix quote
//  untilValue = 1692694772;  // nostr:note1 (quote)
// untilValue = 1739177954;  // quote_nevent1(nostr:nvent1) fix
// untilValue = 1688605603;  //qoote_neventt1, quote2 fix
//  untilValue = 1696105738;  // quote_nevent1 njump fix. quote_nos_haiku ok
//  untilValue = 1739175991;  // quote_npub1 fix quote
// untilValue = 1698228483;  // quote_npub1, quote2_nevent1.
// untilValue = 1696316415;  // (nevent1) ok
//  untilValue = 1690354019;  //(quote #[0]). content:#[0]. tag "e"
// untilValue = 1739627342;  // #e 2つ。1つ目がroot
//  untilValue = 1691507141;  // NG. tag "r" があるが、#rが追加されない?
// untilValue = 1739613007;  // quote_nprofile1?
// untilValue = 1739572207;  // nostagawa iframe content ok
// untilValue = 1739577054;  // nostagawa iframe content ok
//  untilValue = 1739604459;  // 3 images ok
// untilValue = 1739602957;  // fix image duplicate
// untilValue = 1739594870;  // http <username> fix iframe
// untilValue = 1739582796;  // x.com iframe fix
//  untilValue = 1739585405;  // fix. tag"r"とtag"imeta"があるため、画像が２つ表示される
// untilValue = 1739577075;  // fix. tag"r"とtag"imeta"があるため、画像が２つ表示される
// untilValue = 1739261908;  // altにhttps://があるため、kind:20 http://の表示が消えない。
// untilValue = 1739158577;  // fix nhk iframe href target="_blank". NHK
// untilValue = 1739454334;  // fix http content youtube
// untilValue = 1739454167;  // fix http content suno
// untilValue = 1739454027;  // http content github
// untilValue = 1739373027;  // fix iframe content prime video
// untilValue = 1739446863;  // fix twitter iframe  content
// untilValue = 1739087698;  // Error: hexToBytes NG
// untilValue = 1694194192;  // kind:30025 LongForm
//  untilValue = 1702648801;  // 9735 content empty . naddr1
//  untilValue = 1702648782;  // fix nostr:naddr1. link kind:30402
//  untilValue = 1700648893;  // bookmark
//  untilValue = 1698731466;  // Invalid byte sequence
//  untilValue = 1697536841;  // NG
//  untilValue = 1697295574;  // repost fix. id nip19.neventEncode(event: EventPointer) fix
//  untilValue = 1696110614;  // url # NG
//  untilValue = 1694055016;  // \n\n ok
// untilValue = 1707634026;  // Repost先のiconが表示されないのは、tagp"がないため。
// untilValue = 1739262337;  // Repost先のiconが表示されないのは、tag "p"がないため。
//  untilValue = 1688460571;  // youtube channel?. thumbnail NG. lumilumi URL ok. This live stream recording is not available.
//  untilValue = 1691507141;  // repostのcontentにtargoyleのリンクが2つ fix. nostter ok
// untilValue = 1739159139;  // x(twitter) large ok. x.com (by tag)
//  untilValue = 1691662709;  // repost mov fix. nostter ok
// untilValue = 1703564079;  // googleusercontent.com/ img fix. contentに"`"が1つ残る理由は、"r"には'が1つ、contentには2つのため。
// untilValue = 1739258350;  // tag "r" jpg
// untilValue = 1739256506;  // fix. 2個目、３個目の画像が表示されない
// untilValue = 1697112060;  // #r link fix. tag "r"を全卓スペースで分割してURLを取得。tag rにURLと日本語が入っている場合があるため
//  untilValue = 1739169149;  // userStatus test
//  untilValue = 1739114201;  // YouTube repost fix. nostter ok
//  untilValue = 1739008994;  // kind:1111 Commment Re] fix
//  untilValue = 1703568307;  // img threads NG. link切れ
//  untilValue = 1688390047;  // music.youtube (normal youtube ok)
//  untilValue = 1688382329;  // music.youtube (normal youtube ok)
//  untilValue = 1739008290;  // youtube fix Delete After &
//  untilValue = 1739114136;  // YouTube fix. nostter ok
//  untilValue = 1739265383;  // youtube hrefが表示される
//  untilValue = 1739113299;  // YouTube fix. youtube.com
//  untilValue = 1739114442;  // あめさん @rain_256
//  untilValue = 1739011806;  // mostr niji
//  untilValue = 1739091313;  // repost image size
//  untilValue = 1739163316;  // Repost  fix
//  untilValue = 1739098339;  // #e relay address #e(wss://relay.nostr.band lu) fix
//  untilValue = 1739100944;  // client fix
//  untilValue = 1739012160;  // repost ¥n fix
//  untilValue = 1739017185;  // repost 数字 fix
//  untilValue = 1739011853;  // ryusoku fix
//  untilValue = 1704284862;  // moster cannot open
//  untilValue = 1704158604;  // cashu sats. noStrudel or snort ok
//  untilValue = 1704037251;  // lightning invoice 1 sat pay. snort ok
//  untilValue = 1700282586;  // kind 10005 Channel list?
//  untilValue = 1699350541;  // Nostrasia Day 1 Summary Nosli
//  untilValue = 1698636018;  // kind 6666
//  untilValue = 1698415786;  // Zap Add Avatar
//  untilValue = 1697641710;  // ok :bow:  FreeFrom ok
//  untilValue = 1697598212;  // Zap
//  untilValue = 1697471297;  // kind:4550
//  untilValue = 1697385059;  // 42.Channel_Message nostter
//  untilValue = 1697448782;  // kind:9735
//  untilValue = 1697289857;  // will nos.lol
//  untilValue = 1697223369;  // jack nos.lol
//  untilValue = 1697282603;  // fiatjaf yabu.me
//  untilValue = 1697247223;  // reply image OK
//  untilValue = 1697247497;  // tag relay
//  untilValue = 1696632885;  // Metadata
//  untilValue = 1696502429;  // jpg OK
//  untilValue = 1696412926;  // LIVE
//  untilValue = 1696119569;  // njump.me nevent fix
//  untilValue = 1695438407;  // to link fix
//  untilValue = 1695370850;  // tiktok
//  untilValue = 1695066723;  // kind:10001 pin Channel
//  untilValue = 1694945195;  // repost 1694945166
//  untilValue = 1694683832;  // generic repost, Nostrasia Hackathon
//  untilValue = 1694687538;  // zap request
//  untilValue = 1694359339;  // search kind:30040
//  untilValue = 1694326407;  // kind:10030
//  untilValue = 1694003737;  // nostr:naddr1 zap.stream
//  untilValue = 1693796212;  // #e(reply fix
//  untilValue = 1693566199;  // generic repost 42.Channel_Message
//  untilValue = 1693300143;  // Channel creation
//  untilValue = 1692922942;  // nak install
//  untilValue = 1692649004;  // mp4
//  untilValue = 1691665815;  // tag:h nowplaying
//  untilValue = 1691417549;  // kind:9735 zap memo
//  untilValue = 1690983115;  //live chat message kind:1311 Karnage
//  untilValue = 1690284540;  // \t
//  untilValue = 1690114119;  //youtube ok
//  untilValue = 1690041940;  //To 5
//  untilValue = 1689862993;  //https Add fix max width 580
//  untilValue = 1689652872;  //NIP-36
//  untilValue = 1689374075;  //NIP-98 Firebase Auth
//  untilValue = 1689334972;  //ff14
//  untilValue = 1689335282;  //NIP-50 search nostr.band
//  untilValue = 1689254202;  //repost
//  untilValue = 1689245113;  //nostr:naddr1 nostter fix
//  untilValue = 1688944930;  //threads ogp
//  untilValue = 1688395711;  //youtube playlist (normal youtube ok)
//  untilValue = 1688303413;  //https:// search engine
//  untilValue = 1688289075;  //1,300 active authors 2023/7/2
//  untilValue = 1688261108;  //zap
//  untilValue = 1688115603;  //nostr:profile1
//  untilValue = 1688127866;  //nostr:nprofile1
//  untilValue = 1688084234;  //live_chat kind:1311 will
//  untilValue = 1675550855;  //https://
//  untilValue = 1687865289;  //emoji
//  untilValue = 1686896097;  //https://  same url
//  untilValue = 1687689358;  //https://
//  untilValue = 1687655585;  //yabumi relay
//  untilValue = 1687588227;  //#nowplaying
//  untilValue = 1687579812;  //#illust fix
//  untilValue = 1687575908;  //tag fix
//  untilValue = 1687194994;  //reply 8
//  untilValue = 1687333253;  //nostr:naddr1 habla fix relay kind:30022
//  untilValue = 1686985618;  //about nevent relay
//  untilValue = 1686949316;  //2 cards fix
//  untilValue = 1686918544;  //nhk news card
//  untilValue = 1686918929;  //hatenablog, nicovideo, card
//  untilValue = 1685703268;  //emoji fix
//  untilValue = 1686199783;  //emoji, tate, <style> fix,
//  untilValue = 1686238459;  //#[0] fix, <a href>
//  untilValue = 1675779342;  //#[5] fix
//  untilValue = 1686034150;  //https: 5 // fix
//  untilValue = 1686034209;  //about reverce
//  untilValue = 1686135829;  //U+202E (RTL)
//  untilValue = 1686051720;  //reverce
//  untilValue = 1686052701;  //before 1 hour fix
//  untilValue = 1707783206;  // :kubipaka_null: NG

//  untilValue = 1672000000; // 2022/12/26-1970/1/1
//  untilValue = 1675000000; // 2023/1/29 22- 2023/1/11 4,
//  untilValue = 1675200000; // 2023/2/1 6-  2023/1/12 20, +200,000
//  untilValue = 1675300000; // 2023/2/2 10- 2023/2/1 10, +100,000
//  untilValue = 1675400000; // 2023/2/3 13- 2023/2/2 19, +100,000
//  untilValue = 1675500000; // 2023/2/4 15- 2023/2/7,    +100,000
//  untilValue = 1675600000; // 2023/2/5 21- 2023/2/5 18  +100,000
//  untilValue = 1675650000; // 2023/2/6 11- 2023/2/4 18,  +50,000
//  untilValue = 1675591669; // 2023/2/6 11- 2023/2/4 18,  +50,000
//  untilValue = 1675695000; // 2023/2/6 23- 2023/2/6 23 , +45,000 nosaray
//  untilValue = 1675700000; // 2023/2/7 1-  2023/2/7 0,    +5,000
//  untilValue = 1675780000; // 2023/2/7 20- 2023/2/7 20 , +60,000
//  untilValue = 1675780000;
//  untilValue = 1675790000; // 2023/2/8 2- 2023/2/8 1,   +10,000 nosaray
//  untilValue = 1675800000; // 2023/2/9-    2023/2/9,    +10,000
//  untilValue = 1675900000; // 2023/2/9  8 -2023/2/9,    +100,000
//  untilValue = 1676000000; // 2023/2/10 12-2023/2/10,   +100,000
//  untilValue = 1676100000; // 2023/2/11-   2023/2/11,   +100,000
//  untilValue = 1676200000; // 2023/2/12-   2023/2/12,   +200,000 nosaray
//  untilValue = 1676210000; //
//  untilValue = 1676300000; // 2023/2/13 23-2023/2/13 23 +100,000
//  untilValue = 1676350000; // 2023/2/14 13-2023/2/14 12, +50,000
//  untilValue = 1676400000; // 2023/2/15 3- 2023/2/15 1,  +50,000
//  untilValue = 1676470000; // 2023/2/15 23-2023/2/15 20, +10,000
//      untilValue = 1676480000; // 2023/2/16 1- 2023/2/15 22, +10,000
//      untilValue = 1676550000; // 2023/2/16 21-2023/2/16 15, +20,000
//      untilValue = 1676580000; // 2023/2/17 5- 2023/2/16 21, +30,000
//      untilValue = 1676640000; // 2023/2/17 22-2023/2/17 19, +10,000
//      untilValue = 1676650000; // 2023/2/18 1- 2023/2/17 21, +10,000
//      untilValue = 1676750000; // 2023/2/19 4- 2023/2/17 23,+100,000
//untilValue = 1676840000; // 2023/2/20 5- 2023/2/18 0,  +90,000
//untilValue = 1676920000; // 2023/2/21 4- 2023/2/18 5,  +80,000
//      untilValue = 1676990000; // 2023/2/21 23-2023/2/21 20, +10,000 nosaray
//untilValue = 1677030000; // 2023/2/22-10 2023/2/21 23, +40,000
//untilValue = 1677070000; // 2023/2/22 21-2023/2/22 18  +10,000
//untilValue = 1677080000; // 2023/2/23 0- 2023/2/22 22  +10,000
//untilValue = 1677150000; // 2023/2/23 19-2023/2/22 12  +20,000
//untilValue = 1677170000; // 2023/2/24 1- 2023/2/23 17  +20,000
//untilValue = 1677230000; // 2023/2/24 18-2023/2/24 14  +10,000
//untilValue = 1677270000; // 2023/2/25 5- 2023/2/24 18  +40,000
//untilValue = 1677320000; // 2023/2/25 19-2023/2/25 14, +20,000
//untilValue = 1677360000; // 2023/2/26 6- 2023/2/25 18, +40,000
//untilValue = 1677420000; // 2023/2/26 22-2023/2/26 20  +20,000
//untilValue = 1677440000; // 2023/2/27 4- 2023/2/26 23  +20,000
//untilValue = 1677500000; // 2023/2/27 21-2023/2/27 19  +10,000
//untilValue = 1677520000; // 2023/2/28 2- 2023/2/27 23  +20,000
//      untilValue = 1677590000; // 2023/2/28 22-2023/2/28 15  +10,000 nosaray
//      untilValue = 1677600000; // 2023/3/1 0-  2023/2/28 22, +10,000

//until 1677700000, // 2023/3/2 4-  2023/3/2 1,  +100,000, limit 100
//until 1677800000, // 2023/3/3 8-  2023/3/3 3,  +100,000 * 25
//until 1677900000, // 2023/3/4 12- 2023/3/4 8,  +100,000
//until 1678000000, // 2023/3/5 16- 2023/3/5 13, +100,000
//until 1678100000, // 2023/3/6 19- 2023/3/6 18, +100,000
//until 1678200000, // 2023/3/7 23- 2023/3/7 19, +100,000
//until 1678300000, // 2023/3/9 3-  2023/3/8 15, +100,000
//until 1678400000, // 2023/3/10 7- 2023/3/10 2, +100,000
//until 1678500000, // 2023/3/11 10-2023/3/11 8, +100,000
//until 1678600000, // 2023/3/12 14-2023/3/12 12,+100,000
//until 1678700000, // 2023/3/13 18-2023/3/13 16,+100,000
//until 1678800000, // 2023/3/14 22-2023/3/14 21,+100,000
//until 1678860000, // 2023/3/15 14-2023/3/15 10,+100,000,broccoli
//until 1678900000, // 2023/3/16 2- 2023/3/15 20,+100,000
//until 1679000000, // 2023/3/17 5- 2023/3/17 1, +100,000
//until 1679100000, // 2023/3/18 9- 2023/3/18 4, +100,000
//until 1679200000, // 2023/3/19 13-2023/3/19 11,+100,000
//until 1679300000, // 2023/3/20 17-2023/3/20 14,+100,000
//until 1679400000, // 2023/3/21 20-2023/3/21 18,+100,000
//until 1679500000, // 2023/3/23 0- 2023/3/22 21,+100,000
//until 1679600000, // 2023/3/24 4- 2023/3/24 1, +100,000
//until 1679700000, // 2023/3/25 8- 2023/3/25 1, +100,000
//until 1679800000, // 2023/3/26 12-2023/3/25 12,+100,000
//until 1679900000, // 2023/3/27 15-2023/3/27 14,+100,000
//until 1680000000, // 2023/3/28 19-2023/3/28 17,+100,000 *26
//until 1680050000, // 2023/3/29 9- 2023/3/29 6,  +50,000 *11
//until 1680100000, // 2023/3/29 23-2023/3/29 22, +50,000 *13
//until 1680150000, // 2023/3/30 13-2023/3/30 11, +50,000 *12
//until 1680180000, // 2023/3/30 21-2023/3/30 20, +10,000 *2
//until 1680190000, // 2023/3/31 0- 2023/3/30 23, +10,000 *2
//until 1680270000, // 2023/3/31 22- 2023/3/31 20,  +10,000 *

//until 1680300000, // 2023/4/1 6- 2023/4/1 2,  +30,000
//until 1680360000, // 2023/4/1 23- 2023/4/1 21,  +10,000 *
//untilValue = 1680370000; // 2023/4/1 - 2023/4/1 ,  +10,000 *

//until: 1684667029, // 2023/5/21 20:03 -

//  untilValue = 1675720000; // 2023/2/-     2023/2/,     +20,000

//authors: ['2235b39641a2e2ed57279aa6469d9912e28c1f0fa489ffe6eb2b1e68bc5f31d2','43658ae91382bee7dfa3c7c360b13a5ec8c222635f2b2aad3de75e4bb20da906','fe9edd5d5c635dd2900f1f86a872e81ce1d6e20bd4e06549f133ae6bf158913b'], // maya,Segment,shino3

//      authors: ['91de7fc2c96cc03354b16ca1f38bd370880c9bab0ce4d23adf6cc08bdbcdb877'],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,6969,9734,9735,10000,10001,10002,10003,10005,30000,30001,30003,30008,30009,30023,30311,30315,31922,31989,31990],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,4550,6969,9734,9735,10000,10001,10002,10003,10005,],
//      kinds: [0,1,3,4,6,8,16,40,41,42,44,1311,1984,4550,6969,9734,9735,10000,10001,10002,10003,10005,13194,23194,23195],
//      kinds: [30000,30001,30003,30008,30009,30023,30311,30315,31922,31989,31990],

/*enum NostrKind {
  metadata = 0,
  text = 1,
  contacts = 3,
  dm = 4,
  delete = 5,
  boost = 6,
  like = 7,
  channel_create = 40,
  channel_meta = 41,
  chat = 42,
  list = 30000,
}*/

/*const { data: npub } = nip19.decode(
    "npub1gdjc46gns2lw0harclpkpvf6tmyvygnrtu4j4tfaua0yhvsd4yrq38fkq3"  // maya
  );*/

/*const { data: userData, isLoading } = useProfile({
    //pubkey: npub.toString(),
    pubkey: "c909252de5546401e9717846a27d3aec0beef9bd8360bcd7cf5480252dd6776d",
  });*/

/*const Profile = (npub) => {
    const { data: userData, isLoading } = useProfile({
      //pubkey: npub.toString(),
      //pubkey: "afb18dfa9cdbc569bfe32a50570fa852344325ca8d521dddaee33a0913281dd1",
      pubkey: npub,
    });
    console.log(isLoading);
    
    return (
      <>
        <p>Name: {userData?.name}</p>
        <p>Picture: {userData?.picture}</p>
        <p><img src={userData?.picture} width="60" /></p>
      </>
    )
  }*/
//  {Profile("bbbe1c012adb049f3c4829bc956d47addd49bb95d94e3dae8c314a5a7b1d90f2")}

/*
  const onLoadNext = async () => {
    untilValue = 1688863000;
    alert("Next");
    //return;
  }
*/

// Image optimization. image = 'https://nostr-image-optimizer.ocknamo.com/image/width=128,format=webp/' + image;
// https://nostr-blog.ocknamo.com/blog/70791a26bcf4debe4a4ee5e118ced1829350d74e28bea3d8a73110fceea1300c

// imgproxy\.yabu\.me
// https://github.com/ikuradon/yabume-api
