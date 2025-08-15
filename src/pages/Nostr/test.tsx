import { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import PostButton from "@/components/PostButton";
import NextButton from "@/components/NextButton";
import {
  MAX_NUM,
  SINCE_OFFSET_SECONDS,
  MAIN_EVENT_AUTHORS,
  ADD_EVENT_AUTHORS,
  FOLLOW_LIST_KIND,
  DEFAULT_KINDS,
  DEFAULT_LIMIT,
} from "./testConfig";
import { renderContentList } from "./renderContentList";

// This page was refactored: constants moved to testConfig.ts and
// the heavy rendering logic moved to renderContentList.tsx.
// Comments from the original file were preserved where relevant.

const Test = () => {
  const now = useRef(new Date());
  const untilValue: number = dateToUnix(now.current);
  const sinceValue = untilValue - SINCE_OFFSET_SECONDS;

  // follow list collector used by the rendering helper
  let mergedFollowList: string[] = [];

  // following list2 (main)
  const { events: mainEvent } = useNostrEvents({
    filter: { kinds: FOLLOW_LIST_KIND, authors: MAIN_EVENT_AUTHORS },
  });

  // following list (add)
  const { events: addEvent } = useNostrEvents({
    filter: { kinds: FOLLOW_LIST_KIND, authors: ADD_EVENT_AUTHORS },
  });

  // main events to render
  const { events } = useNostrEvents({
    filter: {
      kinds: DEFAULT_KINDS,
      since: sinceValue,
      limit: DEFAULT_LIMIT,
      until: untilValue,
    },
  });

  const makeFollowingCsv = (list: any[]) => {
    // build mergedFollowList for [follow] indicators
    list?.forEach((event: any) => {
      (event.tags || []).forEach((t: any) => {
        // if (t[1]?.length === 64) mergedFollowList.push(t[1]);
      });
    });
    return null;
  };

  // prepare rendering result from extracted helper
  const contentResult = renderContentList(events || [], mergedFollowList);

  return (
    <div style={{ backgroundColor: "#222222", color: "#DDDDDD" }}>
      <div>
        {/* preserved link list and notes from original file */}
        <p>linksss:</p>
        <a href="https://nostter.app/home" target="_blank">
          nostter
        </a>
        -{" "}
        <a href="https://rabbit.syusui.net/#/" target="_blank">
          Rabbit
        </a>
      </div>

      <br />
      <ul>{makeFollowingCsv(mainEvent)}</ul>
      {/* <ul>{makeFollowingCsv(addEvent)}</ul> */}

      {/* render posts and stats from the extracted helper */}
      <ul>{contentResult.posts}</ul>
      <ul>{contentResult.lastValue}</ul>
      <ul>{contentResult.noteCount}</ul>
      <ul>{contentResult.skipCount} posts (not follow)</ul>

      <div style={{ marginTop: 20 }}>
        <PostButton />
        <NextButton />
      </div>
    </div>
  );
};

export default Test;
