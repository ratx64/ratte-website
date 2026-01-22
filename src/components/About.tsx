import React from "react";

/**
 * About section component to enhance EEAT signals
 * Demonstrates experience, expertise, and authoritativeness
 */
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h2
        id="about-heading"
        className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 sm:mb-6 text-center sm:text-left"
      >
        About Ratte
      </h2>

      <div className="space-y-6">
        <div
          className="bg-white/5 dark:bg-background rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 p-4 sm:p-6"
          itemScope
          itemType="https://schema.org/Person"
        >
          <meta itemProp="name" content="Ratte" />
          <meta itemProp="alternateName" content="RatteCS" />
          <meta
            itemProp="jobTitle"
            content="CS2 Content Creator & Streamer | Competitive Gamer | Social Media & Content Strategist"
          />
          <meta itemProp="url" content="https://ratte.xyz/" />

          <p
            className="text-sm sm:text-base text-black/80 dark:text-white/80 leading-relaxed mb-4 text-center sm:text-left"
            itemProp="description"
          >
            I've been playing competitive games for over 15 years. These days I stream CS2, share settings, and test gaming gear. I've hit top ranks in a few games—Faceit Level 10+ in CS, Grandmaster in Overwatch, Immortal in Valorant, and Apex Predator in Apex. When I recommend something, it's because I've actually used it, not because someone paid me to say it. I also do web development and content strategy, which helps with the streaming and community stuff.
          </p>

          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 text-center sm:text-left">
              Expertise & Experience
            </h3>
            <ul
              className="space-y-2 text-xs sm:text-sm text-black/70 dark:text-white/70"
              itemProp="knowsAbout"
            >
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Counter-Strike 2:</strong> I play competitively and share my settings and configs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Gaming Peripherals:</strong> I test mice, keyboards, headsets, and other gear before recommending anything
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Content Creation:</strong> I stream on Twitch, make videos for YouTube, and post clips on TikTok
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Social Media & Content Strategy:</strong> I manage content across Twitch, YouTube, TikTok, Discord, and other platforms
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 text-center sm:text-left">
              Competitive Gaming Achievements
            </h3>
            <p className="text-xs sm:text-sm text-black/70 dark:text-white/70 mb-3 text-center sm:text-left">
              Here's where I've ranked in different games:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-black/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Counter-Strike:</strong> Faceit Level 10+
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Overwatch:</strong> Grandmaster rank
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Valorant:</strong> Immortal rank
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Apex Legends:</strong> Apex Predator rank
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 text-center sm:text-left">
              Additional Interests & Experience
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-black/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Digital Art & Web3:</strong> I've created and sold digital art, including some photomanipulation pieces
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Fitness & Nutrition:</strong> I lift weights and track my nutrition. The data-obsessed part of me that likes coding also applies here
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-primary dark:text-glow mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>PC Building, Anime, Fashion, Esports Culture:</strong> I build PCs, watch anime, follow fashion, and keep up with esports. These interests show up in my content sometimes
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-accent-gray/10 dark:border-accent-gray/20">
            <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 text-center sm:text-left">
              Trust & Transparency
            </h3>
            <p className="text-xs sm:text-sm text-black/70 dark:text-white/70 leading-relaxed text-center sm:text-left">
              All affiliate links are marked. If you buy something through my links, I get a small commission at no extra cost to you. That helps keep the content going. I only link stuff I've actually used and would recommend to friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
