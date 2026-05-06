import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  focusable: false,
} satisfies IconProps;

export function TwitchIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 3h16v10.5l-4.5 4.5H12l-3 3v-3H4V3Zm2 2v11h4v2l2-2h3l3-3V5H6Zm8 3h2v5h-2V8Zm-5 0h2v5H9V8Z" />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M8.1 5.4a14 14 0 0 1 3.1-1l.4.8a12.2 12.2 0 0 1 3.7 0l.4-.8a14 14 0 0 1 3.1 1c2 3 2.6 5.9 2.3 8.7a12.8 12.8 0 0 1-4 2l-.9-1.3a8.8 8.8 0 0 0 1.4-.7c-.4.2-1.9.8-4.7.8s-4.3-.6-4.7-.8c.4.3.9.5 1.4.7l-.9 1.3a12.8 12.8 0 0 1-4-2c-.3-2.8.3-5.7 2.4-8.7Zm2.2 7.1c.8 0 1.4-.7 1.4-1.5s-.6-1.5-1.4-1.5S9 10.2 9 11s.6 1.5 1.3 1.5Zm5.4 0c.8 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.4.7-1.4 1.5.6 1.5 1.4 1.5Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M21.2 8.1a3 3 0 0 0-2.1-2.2C17.3 5.4 12 5.4 12 5.4s-5.3 0-7.1.5a3 3 0 0 0-2.1 2.2 31 31 0 0 0 0 7.8 3 3 0 0 0 2.1 2.2c1.8.5 7.1.5 7.1.5s5.3 0 7.1-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 0-7.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M15.4 3c.4 2.5 1.9 4 4.3 4.2v3.1a8 8 0 0 1-4.2-1.3v6.1a5.9 5.9 0 1 1-5.9-5.9c.4 0 .7 0 1 .1v3.2a2.8 2.8 0 1 0 1.7 2.6V3h3.1Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14 10.3 21.4 2h-1.8l-6.4 7.2L8.1 2H2.2l7.8 11L2.2 22h1.8l6.8-7.8 5.5 7.8h5.9L14 10.3Zm-2.4 2.8-.8-1.1-6.3-8.7h2.8l5 7 .8 1.1 6.6 9.2h-2.8l-5.3-7.5Z" />
    </svg>
  );
}

export function SteamIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 2a10 10 0 0 0-9.9 8.8l5.4 2.2a2.8 2.8 0 0 1 1.6-.5l2.4-3.5v-.1A3.7 3.7 0 1 1 15.2 13h-.1l-3.4 2.5A2.9 2.9 0 1 1 6 16l-3.8-1.6A10 10 0 1 0 12 2Zm-3.3 16.8a2 2 0 0 0 1.5-3.7l-1.5-.6a1.5 1.5 0 0 1-.8 2.8l1 .4Zm6.5-7.1A2.4 2.4 0 1 0 15.2 7a2.4 2.4 0 0 0 0 4.7Zm0-.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z" />
    </svg>
  );
}

export function KickIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 4h5v5h2V7h2V4h7v6h-3v2h-3v2h3v2h3v4h-7v-3h-2v-2H9v5H4V4Z" />
    </svg>
  );
}
