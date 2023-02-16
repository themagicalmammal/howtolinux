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

function sidebarGuide() {
  return [
    {
      text: "Basic",
      collapsed: false,
      items: [
        { text: "Installation", link: "/guide/installation" },
        { text: "Post Installation", link: "/guide/postinstallation" },
        { text: "Display", link: "/guide/display" },
      ],
    },
    {
      text: "Distros",
      collapsed: false,
      items: [
        { text: "Details", link: "/guide/distro" },
        { text: "Ubuntu/Debian", link: "/guide/dubuntu" },
      ],
    },
    {
      text: "Flavours",
      collapsed: false,
      items: [
        { text: "Details", link: "/guide/flavours" },
        { text: "Gnome", link: "/guide/gnome" },
      ],
    },
    {
      text: "Prefferred Apps",
      collapsed: false,
      items: [
        { text: "Details", link: "/guide/prefferredapps" },
        { text: "Browser", link: "/guide/browsers" },
        { text: "Email", link: "/guide/email" },
        { text: "Audio", link: "/guide/audio" },
        { text: "Video", link: "/guide/video" },
        { text: "Graphic", link: "/guide/graphic" },
        { text: "Social", link: "/guide/social" },
        { text: "Office", link: "/guide/office" },
        { text: "Programming", link: "/guide/programming" },
        { text: "Entertainment", link: "/guide/entertainment" },
        { text: "Others", link: "/guide/others" },
      ],
    },
    {
      text: "Advanced",
      collapsed: false,
      items: [
        { text: "Tweaks", link: "/guide/importanttweaks" },
        { text: "Optimize Boot", link: "/guide/optimizeboot" },
        { text: "Miscellaneous", link: "/guide/miscellaneous" },
      ],
    },
  ];
}
