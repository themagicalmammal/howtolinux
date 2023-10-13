import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "howtolinux",
  description: "A Webpage for tips, tricks and guides for Linux.",
  lastUpdated: true,
  sitemap: {
    hostname: "https://howtolinux.vercel.app",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Guide",
        link: "/guide/installation",
        activeMatch: "/guide/",
      },
      {
        text: "Team",
        link: "/team",
        activeMatch: "/team",
      },
      {
        text: "Credits",
        link: "/credits",
        activeMatch: "/credits",
      },
    ],
    logo: "/logo.svg",
    editLink: {
      pattern:
        "https://github.com/themagicalmammal/howtolinux/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: {
      "/guide/": sidebarGuide(),
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/themagicalmammal/howtolinux",
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/themagicalmammal/howtolinux/blob/master/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2023 <a href="https://github.com/themagicalmammal">Dipan Nanda</a>',
    },
    algolia: {
      appId: "VOBGBTBQEC",
      apiKey: "45c50b062601b6001ed6a708995e4e89",
      indexName: "howtolinux",
    },
  },
});

/**
 * Side bar function that returns an array of objects, each of which has a text,
 * link.
 */
function sidebarGuide() {
  return [
    {
      text: "Basic",
      collapsed: false,
      items: [
        { text: "Installation", link: "/guide/installation" },
        { text: "Post Installation", link: "/guide/postinstallation" },
        { text: "Tweaks", link: "/guide/tweaks" },
      ],
    },
    {
      text: "Distros",
      link: "/guide/distros/distro",
      collapsed: true,
      items: [{ text: "Ubuntu", link: "/guide/distros/dubuntu" }],
    },
    {
      text: "Desktop",
      link: "/guide/desktop/desktop",
      collapsed: true,
      items: [{ text: "Gnome", link: "/guide/desktop/gnome" }],
    },
    {
      text: "Apps",
      link: "/guide/apps/apps",
      collapsed: false,
      items: [
        { text: "Browser", link: "/guide/apps/browsers" },
        { text: "Email", link: "/guide/apps/email" },
        { text: "Audio", link: "/guide/apps/audio" },
        { text: "Video", link: "/guide/apps/video" },
        { text: "Graphic", link: "/guide/apps/graphic" },
        { text: "Social", link: "/guide/apps/social" },
        { text: "Office", link: "/guide/apps/office" },
        { text: "Programming", link: "/guide/apps/programming" },
        { text: "Entertainment", link: "/guide/apps/entertainment" },
        { text: "Others", link: "/guide/apps/others" },
      ],
    },
    {
      text: "Advanced",
      collapsed: false,
      items: [
        { text: "Display", link: "/guide/display" },
        { text: "Optimize Boot", link: "/guide/optimizeboot" },
        { text: "Miscellaneous", link: "/guide/miscellaneous" },
      ],
    },
  ];
}
