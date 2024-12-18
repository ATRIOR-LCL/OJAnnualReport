<template>
<Vue3Fullpage :hide-navigation="true" :scrollingEnabled="false" class="main" >
  <p class="title fontremove">SDUT Online Judge</p>
  <!-- <section>
    <lay-fullscreen v-slot="{ enter, exit, toggle, isFullscreen }" @fullscreenchange=fullscreen style="z-index: 999;position: relative;top: 1rem;">
    <lay-button type="primary" @click="enter()">进入全屏</lay-button>  
    <lay-button type="primary" @click="exit()">退出</lay-button> 
    <lay-button type="default" @click="toggle()">切换: {{isFullscreen ? "退出" : "进入全屏"}}</lay-button>
  </lay-fullscreen>
  </section> -->
  <section>
    
    <div class="confettis" v-if="true">
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
    </div>
    <div class="letter"  :class="{'donn': isClick}">
        <p class="e1" style="--i:1;">🥳</p>
        <p class="e2" style="--i:2;">😝</p>
        <p class="e3" style="--i:3;">🤩</p>
        <p class="e4" style="--i:4;">🥳</p>
      <div class="lt_txt" :class="{'upp': isClick}">
          <p class="ts" v-if="tsxx">您有一份来自SDUTOJ的信件😊</p>
          <p class="jiyu fontremove">
            不知不觉， SDUTOJ已经陪伴您走过了好长时间呢， 还记得你第一次登录OJ的时候吗？可能是为了某场比赛， 某次作业， 某章习题...还记得那道使你抓耳挠腮的题目吗？每一次提交， 都是对自己编程能力最好的锻炼， 道阻且长， 行则将至！<br><span class="f1">下滑页面， 开启您与OJ的专属回忆</span>
          </p>
      </div>
      <div class="lt1">
        <lay-ripple @click="open" spreadWidth=".3rem" spreadSize="40px" type="out" trigger="always" borderRadius="50%" color="#fff" class="clk">
            <img src="./assets/img/sdutacm_logo_colorful-02a05aa9.svg" alt="" class="acmsvg">
        </lay-ripple>
      </div>
      <div class="lt2"></div>
      <div class="lt3"></div>
    </div>
  </section>
  <XinZeng></XinZeng>
  <Diligent></Diligent>
  <Achievement></Achievement>
  <Busy></Busy>
  <Night></Night>
  <Hard></Hard>
  <Question></Question>
  <Last></Last>
</Vue3Fullpage>
</template>

<script setup>
import Hard from "./components/Hard.vue";
import Last from "./components/Last.vue";
import "vue3-fullpage/styles";
import { Vue3Fullpage } from "vue3-fullpage";
import { onMounted, ref, nextTick } from 'vue';
import Night from "./components/Night.vue";
import Achievement from "./components/Achievement.vue";
import Diligent from "./components/Diligent.vue";
import XinZeng from "./components/XinZeng.vue";
import Busy from "./components/Busy.vue";
import Question from "./components/Question.vue";

const fullscreen = (isFullscreen) => {
  console.log(isFullscreen)
}
const isClick = ref(false)
const tsxx = ref(true);
const scr = ref(false)
const waiting = ref(false)
const wait = ref(null)

onMounted(()=>{
  const main = document.querySelector('.main');
    main.classList.add('cll')
})


if(window.screen.width<1000){
    console.log('yes')
    scr.value = true
  }

function open(){
  setTimeout(()=>{
    const main = document.querySelector('.main');
    main.classList.remove('cll')
  }, 1500)
  const confettis = document.querySelector('.confettis')
  confettis.classList.add('Delay')
  
  const upp = document.querySelector('.lt_txt')
  upp.classList.add('upp')

  const donn = document.querySelector('.letter')
  donn.classList.add('donn')

  const ts = document.querySelector('.ts')
  ts.classList.add('fontremove')

  const jy = document.querySelector('.jiyu')
  jy.classList.add('fontactive')

  const emojis = document.querySelectorAll(".e1,.e2,.e3,.e4");
  emojis.forEach(emoji=>{
    emoji.classList.add('fontactive')
    
  })
  setTimeout(()=>{
      emojis.forEach(i=>{
        i.classList.remove('fontactive')
      })
    }, 1500)
    const title = document.querySelector('.title')
    title.classList.add('fontactive')
}
</script>

<style scoped>
@import url('../src/assets/main.css');

.dis{
  display: flex;
}

.Delay{
  filter: blur(0);
  opacity: 1;
}
.main{
  text-align: center;
  overflow-y: scroll;
  font-size: 70px;
  /* scroll-snap-type: y mandatory; */
}
.main::-webkit-scrollbar {
    width: 0px;  
    background: transparent;
}

section{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: all .1s linear;
  /* scroll-snap-align: start; */
}

.fontremove{
    opacity: 0;
}

.fontactive{
    filter: blur(0);
    opacity: 1;
    transform: translateX(0) translateY(0);
}

.cll{
  overflow: hidden;
}
</style>