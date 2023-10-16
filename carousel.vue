<template>
    <section class="section-infinite slide-option sticky-section">
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
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-infinite {
    display: flex;
    flex-flow: column;
    align-items: center;
}

section div.container {
    transition: all 0.3s ease;
}

section.slide-option {
    margin: 0 0 50px 0;
}

section.slide-option .no-marg {
    margin: 0 0 0 0;
}

.sticky-section {
    position: fixed;
    bottom: 8%;
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
    color: rgba(52, 52, 52, 0.8);
    /* Text color with 80% opacity */
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
    -webkit-animation: translatestf 10s linear infinite;
    animation: translatestf 10s linear infinite;
}

@-webkit-keyframes translateinfinite {
    100% {
        transform: translateX(calc(-45px * 8));
    }
}

@keyframes translateinfinite {
    100% {
        transform: translateX(calc(-45px * 8));
    }
}

#infinite div.highway-barrier {
    background: rgba(22, 22, 24, 0.15);
}

#infinite div.highway-barrier::before,
#infinite div.highway-barrier::after {
    content: " ";
    position: absolute;
    z-index: 9;
    width: 180px;
    height: 100%;
}

#infinite div.highway-barrier ul.highway-lane {
    width: calc(180px * 10);
}

#infinite div.highway-barrier ul.highway-lane li.highway-car {
    width: 180px;
    -webkit-animation: translateinfinite 5s linear infinite;
    animation: translateinfinite 5s linear infinite;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Carousel',
});
</script>