import type { RsbuildPlugin } from "@rsbuild/core";

export function pluginAsyncCss(): RsbuildPlugin {
  return {
    name: "plugin-async-css",
    setup(api) {
      api.modifyHTMLTags(({ headTags, bodyTags }) => {
        const nextHeadTags = headTags.flatMap((tag) => {
          if (tag.tag !== "link" || tag.attrs?.rel !== "stylesheet" || !tag.attrs.href) {
            return [tag];
          }

          const href = String(tag.attrs.href);

          return [
            {
              tag: "link",
              attrs: {
                rel: "preload",
                href,
                as: "style",
                onload: "this.onload=null;this.rel='stylesheet'",
              },
            },
            {
              tag: "noscript",
              children: `<link rel="stylesheet" href="${href}">`,
            },
          ];
        });

        return { headTags: nextHeadTags, bodyTags };
      });
    },
  };
}