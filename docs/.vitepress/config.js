import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "howtolinux",
  description: "Tweaks for Linux",

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
    },
    logo: "https://raw.githubusercontent.com/themagicalmammal/howtolinux/main/docs/logo.svg",
    editLink: {
      pattern:
        "https://github.com/themagicalmammal/howtolinux/edit/main/docs/:path",
      text: "Edit this page on GitHub",
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
      apiKey: "dedf00e140269ea8f5b7c88e670873f2",
      indexName: "howtolinux",
    },
  },
});

/**
 * Top Nav bar function that returns an array of objects, each of which has a
 * text, link, and activeMatch property @returns An array of objects.
 */
function nav() {
  return [
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
  ];
}

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
      link: "/guide/distro",
      collapsed: true,
      items: [{ text: "Ubuntu", link: "/guide/dubuntu" }],
    },
    {
      text: "Desktop",
      link: "/guide/desktop",
      collapsed: true,
      items: [{ text: "Gnome", link: "/guide/gnome" }],
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
