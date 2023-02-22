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
	<div id="infinite" class="highway-slider">
		<div class="container highway-barrier">
			<ul class="highway-lane">
				<li class="highway-car"><img src='https://i.imgur.com/I3nZgfb.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/A2nJm85.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/2bOJNYO.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/Y7WQN0Q.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/AuIPhjc.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/c0k3DKL.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/bo7NtUF.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/aHRAQNS.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/I3nZgfb.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/A2nJm85.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/2bOJNYO.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/Y7WQN0Q.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/AuIPhjc.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/c0k3DKL.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/bo7NtUF.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/aHRAQNS.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/I3nZgfb.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/A2nJm85.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/2bOJNYO.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/Y7WQN0Q.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/AuIPhjc.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/c0k3DKL.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/bo7NtUF.png' width='70px'></li>
				<li class="highway-car"><img src='https://i.imgur.com/aHRAQNS.png' width='70px'></li>
			</ul>
		</div>
	</div>
</section>

<style setup>
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
    display: flex;
    justify-content: center;
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
    background: #fff;
    color: #343434;
  }
  @-webkit-keyframes translatestf {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-500%);
    }
  }
  @keyframes translatestf {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-500%);
    }
  }
  #stffull div.highway-barrier ul.highway-lane {
    width: 500%;
  }
  #stffull div.highway-barrier ul.highway-lane li.highway-car {
    -webkit-animation: translatestf 30s linear infinite;
            animation: translatestf 30s linear infinite;
  }
  #stffull div.highway-barrier ul.highway-lane li.highway-car h4 {
    font-size: 28px;
  }
  @-webkit-keyframes translateinfinite {
    100% {
      transform: translateX(calc(-180px * 12));
    }
  }
  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-180px * 12));
    }
  }
  #infinite div.highway-barrier {
    background: #fff;
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.3);
  }
  #infinite div.highway-barrier::before,
  #infinite div.highway-barrier::after {
    content: " ";
    position: absolute;
    z-index: 9;
    width: 180px;
    height: 100%;
  }
  #infinite div.highway-barrier::before {
    top: 0;
    left: 0;
    background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  }
  #infinite div.highway-barrier::after {
    top: 0;
    right: 0;
    background: linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  }
  #infinite div.highway-barrier ul.highway-lane {
    width: calc(180px * 24);
  }
  #infinite div.highway-barrier ul.highway-lane li.highway-car {
    width: 180px;
    -webkit-animation: translateinfinite 25s linear infinite;
            animation: translateinfinite 25s linear infinite;
  }
  #infinite div.highway-barrier ul.highway-lane li.highway-car span.fab {
    font-size: 65px;
  }
  #red {
    background: #cb5454;
  }
  #orange {
    background: #cb8054;
  }
  #yellow {
    background: #cbba54;
  }
  #green {
    background: #69b46e;
  }
  #blue {
    background: #6091b0;
  }
</style>
