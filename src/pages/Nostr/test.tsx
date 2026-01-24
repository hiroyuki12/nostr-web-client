import { useRef, useState, useEffect } from "react";
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
  
  // State for pagination
  const [paginationUntil, setPaginationUntil] = useState<number>(dateToUnix(now.current));
  const [accumulatedEvents, setAccumulatedEvents] = useState<any[]>([]);

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

  // main events to render (fetch current batch)
  const { events: newEvents } = useNostrEvents({
    filter: {
      kinds: DEFAULT_KINDS,
      // since: sinceValue,
      limit: DEFAULT_LIMIT,
      until: paginationUntil,
      // Removed since to allow fetching older posts freely based on limit
    },
  });

  // Accumulate events
  useEffect(() => {
    if (newEvents && newEvents.length > 0) {
      setAccumulatedEvents((prev: any[]) => {
        const combined = [...prev, ...newEvents];
        // Deduplicate keying by event id
        const uniqueMap = new Map();
        combined.forEach(evt => uniqueMap.set(evt.id, evt));
        // Sort by created_at desc
        const sorted = Array.from(uniqueMap.values()).sort((a, b) => b.created_at - a.created_at);

        const filtered: any[] = [];
        if (sorted.length > 0) {
          filtered.push(sorted[0]);
          for (let i = 1; i < sorted.length; i++) {
            const previous = filtered[filtered.length - 1];
            if (previous.created_at - sorted[i].created_at < 1800) {
              filtered.push(sorted[i]);
            }
          }
        }
        return filtered;
      });
    }
  }, [newEvents]);

  const makeFollowingCsv = (list: any[]) => {
    // build mergedFollowList for [follow] indicators
    list?.forEach((event: any) => {
      (event.tags || []).forEach((t: any) => {
        if (t[1]?.length === 64) mergedFollowList.push(t[1]);
      });
    });
    return null;
  };

  // prepare rendering result from extracted helper
  makeFollowingCsv(mainEvent);
  // Use accumulatedEvents for rendering
  const contentResult = renderContentList(accumulatedEvents, mergedFollowList);

  const handleNext = () => {
    if (accumulatedEvents.length > 0) {
      const oldestEvent = accumulatedEvents[accumulatedEvents.length - 1];
      // Set until to the oldest event's timestamp minus 1 to fetch older
      setPaginationUntil(oldestEvent.created_at - 1);
    }
  };

  return (
    <div className="container">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '1rem', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nostr Client</h1>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
          <a href="https://nostter.app/home" target="_blank">
            nostter
          </a>
          <span>•</span>
          <a href="https://rabbit.syusui.net/#/" target="_blank">
            Rabbit
          </a>
        </div>
      </header>

      <details>
        <summary>Follow List ({mergedFollowList.length})</summary>
        <ul style={{ maxHeight: "200px", overflowY: "auto", marginTop: '10px' }}>
          {mergedFollowList.map((pubkey, index) => (
            <li key={index} style={{ fontSize: "12px", padding: '8px', marginBottom: '8px' }}>
              {pubkey}
            </li>
          ))}
        </ul>
      </details>

      <main style={{ marginTop: '2rem' }}>
        <ul>{contentResult.posts}</ul>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
          <p>Last Event: {contentResult.lastValue}</p>
          <p>Total Notes: {contentResult.noteCount}</p>
          <p>Skipped: {contentResult.skipCount} posts (not follow)</p>
          {/* Debug info */}
          <p style={{ fontSize: '0.8rem', color: '#666' }}>Current Until: {paginationUntil}</p>
        </div>
      </main>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <PostButton />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default Test;
