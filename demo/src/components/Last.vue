<template>
  <section>
    <div class="font2">
      <span>Practice coding, </span><span>compete with players, </span
      ><span>and become a master.</span>
    </div>
    <div class="sdutoj">
      <div class="font1">
        Practice coding, compete with players, and become a master.
      </div>
      <div class="bottom-icon">
        <img src="../assets/img/bottomicon.png" alt="" class="btm-txt" />
        <img
          src="../assets/img/bLue.png"
          alt=""
          height="60%"
          style="position: relative; right: 0.2rem"
        />
        <p class="blue">bLue</p>
        <img
          src="../assets/img/and.png"
          alt=""
          height="50%"
          style="position: relative; right: 0.1rem"
        />
        <img src="../assets/img/qq.png" alt="" height="60%" />
        <p class="atrior">atrior</p>
        <div class="wline"></div>
        <img
          src="../assets/img/LCL_hero_dark.bfdc1ef6.png"
          alt=""
          height="100%"
          class="lcllab"
        />
      </div>
      <span ref="text1" class="chars">S</span>
      <span ref="text2" class="chars">D</span>
      <span ref="text3" class="chars">U</span>
      <span ref="text4" class="nc">T</span>
      <span ref="text5" class="nc">O</span>
      <span ref="text6" class="nc">J</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const text4 = ref(null);
const text5 = ref(null);
const text6 = ref(null);
const ojoj = ref(null);

onMounted(() => {
  setTimeout(() => {
    nextTick(() => {
      let shadow = "";
      let shadow3 = "";
      let total = 10;
      for (let i = 1; i <= total; i++) {
        shadow += `-${i}px ${i}px #c2c2c2,`;
      }
      for (let i = 1; i <= total; i++) {
        shadow3 += `${i}px ${i}px #c2c2c2,`;
      }
      shadow = shadow.slice(0, -1);
      shadow3 = shadow3.slice(0, -1);

      if (text1.value) text1.value.style.textShadow = shadow;
      if (text2.value) text2.value.style.textShadow = shadow;
      if (text3.value) text3.value.style.textShadow = shadow;
      if (text4.value) text4.value.style.textShadow = shadow3;
      if (text5.value) text5.value.style.textShadow = shadow3;
      if (text6.value) text6.value.style.textShadow = shadow3;

      const charsanimation = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("charsanim");
              const title = document.querySelector(".title");
              title.classList.remove("fontactive");
            } else {
              entry.target.classList.remove("charsanim");
            }
          });
        },
        { threshold: 0.1 }
      );

      const fontanimation = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("font1anim");
            } else {
              entry.target.classList.remove("font1anim");
            }
          });
        },
        { threshold: 0.1 }
      );

      const font2animation = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sdutoj = document.querySelector(".sdutoj");
              sdutoj.classList.add("sdutojanim");
              entry.target.classList.add("font2anim");
            } else {
              entry.target.classList.remove("font2anim");
            }
          });
        },
        { threshold: 0.5 }
      );

      const bottomIconanim = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("btm-logo");
            } else {
              entry.target.classList.remove("btm-logo");
            }
          });
        },
        { threshold: 0.1 }
      );
      const chars = document.querySelectorAll(".chars, .nc");
      chars.forEach((char) => {
        charsanimation.observe(char);
      });
      const fonts = document.querySelector(".font1");
      fontanimation.observe(fonts);
      const font2s = document.querySelector(".font2");
      font2animation.observe(font2s);

      const bottomIcon = document.querySelector(".bottom-icon");
      bottomIconanim.observe(bottomIcon);
    });
  }, 100);
});
</script>
<style scoped>
@import url("../assets/last.css");
section {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s linear;
}
.btm-logo {
  animation: opop ease 1s forwards;
  animation-delay: 7.5s;
}

.animrunning {
  animation-play-state: running;
}

@keyframes opop {
  100% {
    opacity: 1;
  }
}
.sdutojanim {
  opacity: 1;
  filter: blur(0);
  animation: upmove 1.5s ease forwards;
  animation-delay: 7.5s;
}

@keyframes upmove {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1rem);
  }
}
</style>
