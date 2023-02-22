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

<section class="slide-option sticky-section">
  <div class="highway-slider">
    <div class="container highway-barrier">
      <ul class="highway-lane">
        <li class="highway-car"><img src="https://i.imgur.com/I3nZgfb.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/A2nJm85.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/2bOJNYO.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/Y7WQN0Q.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/AuIPhjc.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/c0k3DKL.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/bo7NtUF.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/aHRAQNS.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/I3nZgfb.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/A2nJm85.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/2bOJNYO.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/Y7WQN0Q.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/AuIPhjc.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/c0k3DKL.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/bo7NtUF.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/aHRAQNS.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/I3nZgfb.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/A2nJm85.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/2bOJNYO.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/Y7WQN0Q.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/AuIPhjc.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/c0k3DKL.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/bo7NtUF.png"></li>
        <li class="highway-car"><img src="https://i.imgur.com/aHRAQNS.png"></li>
      </ul>
    </div>
  </div>
</section>

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
   bottom: 5%;
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
