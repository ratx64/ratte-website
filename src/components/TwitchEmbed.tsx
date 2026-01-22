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

export default function TwitchEmbed({ channel, parent }: TwitchEmbedProps) {
  const embedRef = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Lazy load Twitch embed when component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initPlayer();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    function initPlayer() {
      if (!embedRef.current || !window.Twitch?.Player) return;

      // Clear previous embed to prevent duplicates
      embedRef.current.innerHTML = "";
      setIsLoading(true);
      setHasError(false);

      try {
        const player = new window.Twitch.Player(embedRef.current, {
          channel,
          width: "100%",
          height: "100%",
          parent,
          autoplay: false, // Prevent autoplay to avoid AudioContext warnings
          muted: true, // Start muted to avoid autoplay issues
        });

        playerRef.current = player;

        // Handle player ready
        player.addEventListener(window.Twitch.Player.READY, () => {
          setIsLoading(false);
        });

        // Handle player errors
        player.addEventListener(window.Twitch.Player.ERROR, (error: any) => {
          console.warn("Twitch player error:", error);
          setIsLoading(false);
          setHasError(true);
        });

        // Handle offline/not available
        player.addEventListener(window.Twitch.Player.OFFLINE, () => {
          setIsLoading(false);
          setHasError(true);
        });

        // Timeout fallback in case player doesn't initialize
        const timeout = setTimeout(() => {
          setIsLoading(false);
          // Don't set error immediately, player might still be loading
        }, 10000); // 10 second timeout

        return () => {
          clearTimeout(timeout);
          if (playerRef.current) {
            try {
              playerRef.current.destroy();
            } catch (e) {
              // Ignore destroy errors
            }
          }
        };
      } catch (error) {
        console.warn("Failed to initialize Twitch player:", error);
        setIsLoading(false);
        setHasError(true);
      }
    }

    const existingScript = document.getElementById(
      "twitch-embed-script"
    ) as HTMLScriptElement;

    if (existingScript) {
      if (window.Twitch?.Player) {
        initPlayer();
      } else {
        existingScript.addEventListener("load", initPlayer);
        return () => existingScript.removeEventListener("load", initPlayer);
      }
    } else {
      const script = document.createElement("script");
      script.id = "twitch-embed-script";
      script.src = "https://player.twitch.tv/js/embed/v1.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      
      script.addEventListener("load", initPlayer);
      script.addEventListener("error", () => {
        setIsLoading(false);
        setHasError(true);
      });
      
      document.body.appendChild(script);
      
      if (embedRef.current) {
        observer.observe(embedRef.current);
      }
      
      return () => {
        script.removeEventListener("load", initPlayer);
        script.removeEventListener("error", () => {});
        observer.disconnect();
        if (playerRef.current) {
          try {
            playerRef.current.destroy();
          } catch (e) {
            // Ignore destroy errors
          }
        }
      };
    }
  }, [channel, parent]);

  return (
      <section
        className="group relative overflow-hidden rounded-lg sm:rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 bg-white/5 dark:bg-background backdrop-blur-sm transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 mb-8 sm:mb-12 mx-2 sm:mx-0"
        aria-label="Twitch Live Stream"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/5 dark:from-primary/0 dark:via-primary/10 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Twitch embed container */}
        <div className="relative pt-[56.25%] min-h-[200px] sm:min-h-[300px] min-w-0 sm:min-w-[400px] rounded-lg sm:rounded-xl overflow-hidden">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-white/5">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-glow mb-2"></div>
              <p className="text-sm text-black/60 dark:text-white/60">Loading stream...</p>
            </div>
          </div>
        )}
        
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-white/5 p-6">
            <div className="text-center max-w-md">
              <svg
                className="mx-auto h-12 w-12 text-black/40 dark:text-white/40 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                Stream Currently Unavailable
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60 mb-4">
                The stream may be offline or unavailable. Check back later or visit{" "}
                <a
                  href={`https://twitch.tv/${channel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-glow hover:underline"
                >
                  Twitch
                </a>{" "}
                directly.
              </p>
              <a
                href={`https://twitch.tv/${channel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary dark:bg-glow text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Visit Twitch Channel
              </a>
            </div>
          </div>
        ) : (
          <div 
            ref={embedRef} 
            className="absolute top-0 left-0 w-full h-full"
            aria-label={`Twitch stream for ${channel}`}
          />
        )}
      </div>
      
      {/* VideoObject schema - only render if not in error state */}
      {!hasError && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: `RatteCS Twitch Stream - ${channel}`,
            description: "Live CS2 streaming content from RatteCS",
            thumbnailUrl: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-1920x1080.jpg`,
            uploadDate: new Date().toISOString(),
            contentUrl: `https://twitch.tv/${channel}`,
            embedUrl: `https://player.twitch.tv/?channel=${channel}`,
            publisher: {
              "@type": "Person",
              name: "RatteCS",
              url: "https://ratte.xyz/",
            },
          })}
        </script>
      )}
    </section>
  );
}
