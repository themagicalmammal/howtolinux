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

const coreMembers = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/53917226?v=4',
    name: 'GSchuemann',
    title: 'Major Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/GSchuemann' },
      { icon: { svg: reddit, }, link: 'https://www.reddit.com/user/GGG_246/'},
    ]
  },
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
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Thanks for contributing!</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>
