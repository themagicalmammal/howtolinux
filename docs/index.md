---
layout: home

title: howtolinux
titleTemplate: A extensive guide of tips and tricks in linux.

hero:
  name: howtolinux
  text: tips & tricks for linux
  tagline: An extensive guide for tips and tricks for Linux.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/themagicalmammal/howtolinux

features:
---

<template>
  <section class="slide-option sticky-section">
    <div id="infinite" class="highway-slider">
      <div class="container highway-barrier">
        <ul class="highway-lane">
          <li v-for="car in cars" class="highway-car"><img :src="car"></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        'https://i.imgur.com/I3nZgfb.png',
        'https://i.imgur.com/A2nJm85.png',
        'https://i.imgur.com/2bOJNYO.png',
        'https://i.imgur.com/Y7WQN0Q.png',
        'https://i.imgur.com/AuIPhjc.png',
        'https://i.imgur.com/c0k3DKL.png',
        'https://i.imgur.com/bo7NtUF.png',
        'https://i.imgur.com/aHRAQNS.png'
      ]
    };
  }
};
</script>

<style>
  section {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  section div.container {
    transition: all 0.3s ease;
  }

  section div.container h1 {
    margin: 15px 0 0 0;
  }

  section div.container h3 {
    margin: 0 0 25px 0;
  }

  @media (max-width: 992px) {
    section {
      padding: 0 20px 0 20px;
    }
  }

  section.slide-option {
    margin: 0 0 50px 0;
  }

  section.slide-option .no-marg {
    margin: 0 0 0 0;
  }

  .sticky-section {
   position: fixed;
   bottom: 10%;
   width: 100%;
  }

  div.highway-slider {
    width: 100%;
    height: 150px;
  }

  div.highway-slider div.highway-barrier {
    overflow: hidden;
    position: relative;
  }

  div.highway-slider ul.highway-lane {
    display: flex;
    height: 100%;
  }

  div.highway-slider ul.highway-lane li.highway-car {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent; /* updated line */
    color: #343434;
    width: 70px;
  }

  div.highway-slider ul.highway-lane li.highway-car img {
    width: 100%;
  }
</style>
