import React from "react";
import { DiscordIcon, TwitchIcon, XIcon } from "./icons";

const SocialIcons: React.FC = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: XIcon,
      url: "https://x.com/rattecs",
      color: "text-ratteDarkGray dark:text-white",
      size: "w-[18px] h-[18px]",
    },
    {
      name: "Twitch",
      icon: TwitchIcon,
      url: "https://twitch.tv/rattecs",
      color: "text-[#9146FF]",
      size: "w-[18px] h-[18px]",
    },
    {
      name: "Discord",
      icon: DiscordIcon,
      url: "https://discord.com/invite/gc2epPGDKP",
      color: "text-[#5865F2]",
      size: "w-[20px] h-[20px]",
    },
    {
      name: "Email",
      icon: EnvelopeIcon,
      url: "mailto:biz@ratte.xyz",
      color: "text-ratteGray dark:text-accent-gray",
      size: "w-[18px] h-[18px]",
    },
  ];

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} opacity-90 hover:opacity-100 transition-opacity duration-200 inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full`}
          aria-label={`Visit ${social.name}`}
        >
          <social.icon className={social.size} />
        </a>
      ))}
    </div>
  );
};

function EnvelopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.3l8 5.2 8-5.2V7H4Zm0 2.7V17h16V9.7l-7.5 4.9a1 1 0 0 1-1.1 0L4 9.7Z" />
    </svg>
  );
}

export default SocialIcons;
