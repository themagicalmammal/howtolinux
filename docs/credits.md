---
title: Teams
sidebar: auto
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const reddit = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>'

const askubuntu = '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M6.511 13a3.95 3.95 0 0 0-.505.035c-.178.023-.341.07-.489.143a1.07 1.07 0 0 0-.37.299c-.098.126-.147.294-.147.5 0 .383.121.65.364.8.242.148.571.223.988.223.25 0 .472-.006.665-.017.193-.012.354-.032.483-.063v-1.782a1.33 1.33 0 0 0-.37-.098 4.04 4.04 0 0 0-.619-.04zm12.774 2.77c-.171-.284-.37-.574-.593-.87a13.212 13.212 0 0 0-.703-.854 10.048 10.048 0 0 0-.746-.75 6.636 6.636 0 0 0-.722-.573v3.048h-1.137V6.506l1.137-.195v5.778l.649-.646c.236-.236.468-.475.696-.719.229-.244.445-.478.648-.701.204-.223.38-.42.526-.591h1.334c-.188.203-.392.426-.612.67-.22.244-.448.49-.685.737-.237.249-.475.497-.715.744l-.679.701c.244.188.503.419.777.695.273.276.541.575.807.896.265.321.515.646.752.976.236.329.436.635.6.92zm-5.754-.304c-.436.3-1.057.451-1.864.451-.563 0-1.003-.046-1.321-.14a6.652 6.652 0 0 1-.648-.214l.208-.974c.13.049.338.121.623.22.286.096.665.145 1.138.145.464 0 .809-.06 1.033-.183.224-.122.336-.317.336-.585a.775.775 0 0 0-.33-.658c-.22-.163-.583-.345-1.088-.549a15.22 15.22 0 0 1-.704-.299 2.464 2.464 0 0 1-.58-.359 1.582 1.582 0 0 1-.392-.5 1.597 1.597 0 0 1-.147-.719c0-.56.208-1.006.624-1.335.416-.33.983-.494 1.7-.494.179 0 .359.01.538.031.18.02.347.044.502.073a4.802 4.802 0 0 1 .684.177l-.208.975a2.941 2.941 0 0 0-.574-.201 3.75 3.75 0 0 0-.942-.104c-.318 0-.595.063-.832.189a.626.626 0 0 0-.355.591c0 .139.027.26.08.366a.848.848 0 0 0 .245.287c.11.085.246.164.41.237.162.074.358.15.587.232.3.114.57.226.807.335.236.11.438.238.605.384.167.146.296.323.385.53.09.208.135.462.135.763 0 .585-.218 1.028-.655 1.328zm-4.97.195-.41.068c-.175.028-.373.055-.594.079-.22.024-.458.046-.715.067-.256.02-.511.03-.764.03a4.19 4.19 0 0 1-.99-.11 2.221 2.221 0 0 1-.784-.347 1.595 1.595 0 0 1-.513-.628c-.122-.26-.184-.573-.184-.938 0-.35.071-.65.214-.903.143-.251.337-.455.582-.61a2.71 2.71 0 0 1 .856-.34 4.68 4.68 0 0 1 1.027-.11 4.132 4.132 0 0 1 .703.067 15.222 15.222 0 0 1 .458.091v-.317c0-.187-.02-.372-.06-.554a1.275 1.275 0 0 0-.22-.488 1.118 1.118 0 0 0-.435-.341c-.184-.086-.422-.129-.715-.129-.375 0-.704.027-.985.08a3.48 3.48 0 0 0-.63.164l-.134-.938c.147-.065.391-.128.734-.19.342-.06.713-.091 1.113-.091.456 0 .841.06 1.155.177.314.118.567.285.758.5.192.215.328.471.41.768.082.297.122.624.122.981zM24 11.961C24 5.356 18.627 0 12 0S0 5.356 0 11.961c0 6.607 5.373 11.963 12 11.963 2.177 0 4.217-.58 5.978-1.591L24 24l-1.512-6.226A11.878 11.878 0 0 0 24 11.961z"/></svg>'

const coreMembers = [
  {
    avatar: 'https://winaero.com/blog/wp-content/uploads/2019/09/Chrome-Incognito-Mode-Icon-256.png',
    name: 'schykle',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/schykle'},
    ]
  },
  {
    avatar: 'https://styles.redditmedia.com/t5_134jwq/styles/profileIcon_qr65fm6aali51.jpg?width=256&height=256&crop=256:256,smart&v=enabled&s=82bab6fe0e4b437b3609a15c81fc27b8e05515ee',
    name: 'wsadES',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/wsades'},
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/25666761?v=4',
    name: 'tur1ngb0x',
    title: 'Contributor',
    links: [
      { icon: 'github' , link: 'https://github.com/tur1ngb0x'},
    ]
  },
  {
    avatar: 'https://i.redd.it/snoovatar/avatars/5ba7224f-7620-40ac-81d4-c69716f924e9.png',
    name: 'coolwyou',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/coolwyou'},
    ]
  },
  {
    avatar: 'https://i.stack.imgur.com/EQWv9.jpg?s=256&g=1',
    name: 'Pilot6',
    title: 'Contributor',
    links: [
      { icon: { svg: askubuntu, }, link: 'https://askubuntu.com/users/167850/pilot6'},
    ]
  },
  {
    avatar: 'https://styles.redditmedia.com/t5_7sfx2/styles/profileIcon_p7fa2h72bv301.jpg?width=256&height=256&crop=256:256,smart&v=enabled&s=00d0ebf470c4aee708abf3265579d5a492f9f05c',
    name: 'spxak1',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/spxak1/'},
    ]
  },
  {
    avatar: 'https://i.redd.it/snoovatar/avatars/4c1586af-0b3d-40e9-991a-4ace9a558633.png',
    name: 'JawadAlkassim',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/JawadAlkassim/'},
    ]
  },
  {
    avatar: 'https://i.redd.it/snoovatar/avatars/d441723f-66c9-460c-928d-9d1a5758770c.png',
    name: 'arsfeld',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/arsfeld'},
    ]
  },
  {
    avatar: 'https://styles.redditmedia.com/t5_boto3/styles/profileIcon_3c1ehha8nr8a1.png?width=256&height=256&crop=256:256,smart&v=enabled&s=808b04de2908b010bdf7a88dc334b3aae5d12806',
    name: 'lulzdoods',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/lulzdoods'},
    ]
  },
  {
    avatar: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
    name: 'RiderExMachina',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/RiderExMachina'},
    ]
  },
  {
    avatar: 'https://styles.redditmedia.com/t5_2ni604/styles/profileIcon_deknwzcrscn81.png?width=256&height=256&crop=256:256,smart&v=enabled&s=8734ef92341e4090a598dce72950a6922a7a6261',
    name: '1ntr0v3rt3ch',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/1ntr0v3rt3ch'},
    ]
  },
  {
    avatar: 'https://winaero.com/blog/wp-content/uploads/2019/09/Chrome-Incognito-Mode-Icon-256.png',
    name: 'rbmorse',
    title: 'Contributor',
    links: [
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/rbmorse/'},
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/47557035?v=4',
    name: 'abrgg',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/abrgg'},
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Thanks for contributing!</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>
