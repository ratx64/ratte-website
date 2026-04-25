import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Twitch?: {
      Player: any;
    };
  }
}

interface TwitchEmbedProps {
  channel: string;
  parent: string[];
}

type StreamStatus = "loading" | "live" | "offline" | "error";

/**
 * Twitch live stream block.
 *
 * Behaviour:
 *  - Mounts a hidden Twitch player just to detect ONLINE / OFFLINE.
 *  - When live, shows the embed (autoplay=false, muted by default).
 *  - When offline, erroring, or still checking, renders no visible block.
 */
export default function TwitchEmbed({ channel, parent }: TwitchEmbedProps) {
  const probeRef = useRef<HTMLDivElement | null>(null);
  const visibleRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const [status, setStatus] = useState<StreamStatus>("loading");

  useEffect(() => {
    let cancelled = false;
    let probePlayer: any = null;
    let visiblePlayer: any = null;
    let scriptLoadCleanup: (() => void) | null = null;
    let timeoutId: number | null = null;

    function destroy(p: any) {
      if (!p) return;
      try {
        p.destroy();
      } catch {
        /* ignore */
      }
    }

    function mountVisiblePlayer() {
      if (!visibleRef.current || !window.Twitch?.Player) return;
      visibleRef.current.innerHTML = "";
      try {
        visiblePlayer = new window.Twitch.Player(visibleRef.current, {
          channel,
          width: "100%",
          height: "100%",
          parent,
          autoplay: false,
          muted: true,
        });
        playerRef.current = visiblePlayer;
      } catch (e) {
        console.warn("Failed to mount visible Twitch player:", e);
        if (!cancelled) setStatus("error");
      }
    }

    function probe() {
      if (!probeRef.current || !window.Twitch?.Player) return;

      try {
        probePlayer = new window.Twitch.Player(probeRef.current, {
          channel,
          width: 320,
          height: 180,
          parent,
          autoplay: false,
          muted: true,
          // Hint to skip the controls UI on the probe; harmless if ignored.
          controls: false,
        });

        const ONLINE = window.Twitch.Player.ONLINE;
        const OFFLINE = window.Twitch.Player.OFFLINE;
        const READY = window.Twitch.Player.READY;
        const ERROR = window.Twitch.Player.ERROR;

        const handleOnline = () => {
          if (cancelled) return;
          setStatus("live");
          // Tear down the probe and mount the real, visible player.
          destroy(probePlayer);
          probePlayer = null;
          // Defer to next tick so React can render the visible container.
          window.setTimeout(() => {
            if (!cancelled) mountVisiblePlayer();
          }, 0);
        };
        const handleOffline = () => {
          if (cancelled) return;
          setStatus("offline");
          destroy(probePlayer);
          probePlayer = null;
        };
        const handleReady = () => {
          // Some embeds fire READY before ONLINE/OFFLINE — query state directly.
          if (cancelled) return;
          try {
            const live =
              typeof probePlayer?.isPaused === "function"
                ? !probePlayer.isPaused() // playing usually means live
                : false;
            // Don't trust isPaused alone; wait for ONLINE/OFFLINE if either fires.
            // Fallback: if neither fires within timeout, assume offline.
            void live;
          } catch {
            /* ignore */
          }
        };
        const handleError = () => {
          if (cancelled) return;
          setStatus("offline"); // Treat errors as offline — same UX, cleaner copy.
          destroy(probePlayer);
          probePlayer = null;
        };

        if (ONLINE) probePlayer.addEventListener(ONLINE, handleOnline);
        if (OFFLINE) probePlayer.addEventListener(OFFLINE, handleOffline);
        if (READY) probePlayer.addEventListener(READY, handleReady);
        if (ERROR) probePlayer.addEventListener(ERROR, handleError);

        // Fallback: if no event resolves the state in time, assume offline.
        timeoutId = window.setTimeout(() => {
          if (cancelled) return;
          setStatus((prev) => (prev === "loading" ? "offline" : prev));
          destroy(probePlayer);
          probePlayer = null;
        }, 6000);
      } catch (e) {
        console.warn("Failed to start Twitch probe:", e);
        if (!cancelled) setStatus("offline");
      }
    }

    function start() {
      // Defer the probe until the section is near the viewport.
      const target = probeRef.current;
      if (!target) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer.disconnect();
            ensureScript(probe);
          }
        },
        { rootMargin: "200px" }
      );
      observer.observe(target);
      scriptLoadCleanup = () => observer.disconnect();
    }

    function ensureScript(onReady: () => void) {
      if (window.Twitch?.Player) return onReady();
      const existing = document.getElementById(
        "twitch-embed-script"
      ) as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", onReady, { once: true });
        return;
      }
      const s = document.createElement("script");
      s.id = "twitch-embed-script";
      s.src = "https://player.twitch.tv/js/embed/v1.js";
      s.async = true;
      s.defer = true;
      s.crossOrigin = "anonymous";
      s.addEventListener("load", onReady, { once: true });
      s.addEventListener("error", () => !cancelled && setStatus("offline"), {
        once: true,
      });
      document.body.appendChild(s);
    }

    start();

    return () => {
      cancelled = true;
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      if (scriptLoadCleanup) scriptLoadCleanup();
      destroy(probePlayer);
      destroy(visiblePlayer);
      playerRef.current = null;
    };
  }, [channel, parent]);

  // ── Render ─────────────────────────────────────────────────────────────
  const twitchUrl = `https://twitch.tv/${channel}`;

  const probeElement = (
    <div
      ref={probeRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
        left: -9999,
        top: -9999,
      }}
    />
  );

  if (status !== "live") {
    return probeElement;
  }

  return (
    <section
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-accent-gray/10 dark:border-accent-gray/20 bg-white/5 dark:bg-background backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/30 dark:hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 mb-8 sm:mb-12 mx-2 sm:mx-0"
      aria-label="Twitch Live Stream"
      data-stream-status={status}
    >
      {/* Hidden probe — mounted briefly while we detect online/offline. */}
      {probeElement}

      <>
          <div className="absolute top-2 left-2 z-10 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-pink text-white text-[11px] font-semibold tracking-wider uppercase shadow-md motion-safe:animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Live
          </div>
          <div className="relative pt-[56.25%] min-h-[200px] sm:min-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden">
            <div
              ref={visibleRef}
              className="absolute top-0 left-0 w-full h-full"
              aria-label={`Twitch stream for ${channel}`}
            />
          </div>

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: `RatteCS Twitch Stream - ${channel}`,
              description: "Live CS2 streaming content from RatteCS",
              thumbnailUrl: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-1920x1080.jpg`,
              uploadDate: new Date().toISOString(),
              contentUrl: twitchUrl,
              embedUrl: `https://player.twitch.tv/?channel=${channel}`,
              publisher: {
                "@type": "Person",
                name: "RatteCS",
                url: "https://ratte.xyz/",
              },
            })}
          </script>
        </>
    </section>
  );
}
