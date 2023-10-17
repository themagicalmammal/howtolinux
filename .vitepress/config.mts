import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "howtolinux",
  description: "A Webpage with tips, tricks and guides for Linux.",
  lastUpdated: true,
  sitemap: {
    hostname: "https://howtolinux.vercel.app",
  },
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'howtolinux' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    logo: "/logo.svg",
    editLink: {
      pattern: "https://github.com/themagicalmammal/howtolinux/edit/dev/:path",
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
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 Dipan Nanda",
    },
    search: {
      provider: "algolia",
      options: {
        appId: "VOBGBTBQEC",
        apiKey: "45c50b062601b6001ed6a708995e4e89",
        indexName: "howtolinux",
      },
    },
  },
});

/**
 * Returns an array of `DefaultTheme.NavItem` objects representing the navigation items.
 *
 * @return {DefaultTheme.NavItem[]} An array of `DefaultTheme.NavItem` objects.
 */
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guide",
      link: "/guide/installation",
      activeMatch: "/guide/",
    },
    {
      text: "Contributors",
      link: "/contributors",
      activeMatch: "/contributors",
    },
  ];
}

/**
 * Returns an array of sidebar items for the default theme.
 *
 * @return {DefaultTheme.SidebarItem[]} The array of sidebar items.
 */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
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
      collapsed: true,
      items: [
        { text: "Display", link: "/guide/display" },
        { text: "Optimize Boot", link: "/guide/optimizeboot" },
        { text: "Miscellaneous", link: "/guide/miscellaneous" },
      ],
    },
  ];
}
