<template>
  <section v-if="generate">
    <div class="font2">
      <span class="font2-txt">时至今日，</span>
      <span class="font2-txt">我们的旅程已经开始了 x 天。</span>
      <span class="font2-txt">看似一眨眼的时间，</span>
      <span class="font2-txt">却承载了我们无可忘却的珍重回忆。</span>
      <span class="font2-txt">以这份回忆的重量所编织的纽带，</span>
      <span class="font2-txt">正是连结我们并一起前进的动力。</span>
      <span class="font2-txt">愿时间与你共写美梦，愿祝福伴你终抵云顶。</span>
      <span class="font2-txt">感谢陪伴！</span>
    </div>
    <button class="btn" @click="gosum">点击生成你的专属OJ年报🥳</button>
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
  <section v-else class="summ">
    <button class="main-button" @click="downloadAsImage">
      <svg
        width="30"
        height="30"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"
        ></path>
      </svg>
    </button>
    <div class="sumarry" ref="sumarry">
      <img
        src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg"
        alt=""
        class="back"
      />
      <div class="topoj">SDUT Online Judge</div>
      <div class="results-summary-container">
        <div class="confetti">
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
          <div class="confetti-piece"></div>
        </div>
        <div class="results-summary-container__result">
          <div class="heading-tertiary">你的OJ年报<span>🥳</span></div>
          <div class="result-box">
            <img src="../assets/img/qq.png" alt="" />
          </div>
          <div class="result-text-box">
            <div class="heading-secondary">ATRIOR</div>
            <div class="paragraph">
              <div class="ac-num">
                <p>总AC:<span>1111</span></p>
                <p>今年AC:<span>234</span></p>
                <p>90%</p>
              </div>
              <div class="rating">
                Rating:<span class="rating-color">1900</span>
              </div>
              <div class="achiv-num">总成就数:<span>89</span></div>
              <div class="contests">
                <li
                  v-for="(item, index) in contests"
                  :key="index"
                  class="bisai"
                >
                  <span>{{ item.name }}</span>
                  <span>{{ item.rank }}</span>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="results-summary-container__options">
          <div class="tag-head">2024回忆标签✨️</div>
          <!-- <div class="heading-secondary heading-secondary--blue">Summary</div> -->
          <ul class="summary-result-options">
            <li v-for="(item, index) in tags" :key="index" class="tag">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
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
const generate = ref(true);

function gosum() {
  setTimeout(() => {
    generate.value = false;
  }, 600);
}
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
              setTimeout(() => {
                entry.target.classList.add("charsanim");
                const title = document.querySelector(".title");
                title.classList.remove("fontactive");
              }, 14000);
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
              setTimeout(() => {
                entry.target.classList.add("font1anim");
              }, 14000);
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
              const font2txt = document.querySelectorAll(".font2-txt");
              font2txt.forEach((ft) => {
                ft.classList.add("font2anim");
              });
              setTimeout(() => {
                entry.target.classList.add("remove");
              }, 13000);
              setTimeout(() => {
                const sdutoj = document.querySelector(".sdutoj");
                sdutoj.classList.add("sdutojanim");
                const btn = document.querySelector(".btn");
                btn.classList.add("sdutojanim");
              }, 14000);
            }
          });
        },
        { threshold: 0.1 }
      );

      const bottomIconanim = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("btm-logo");
              }, 14000);
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

const sumarry = ref(null);
const tags = ref([
  "刷题王",
  "夜猫子",
  "百折不挠",
  "原神启动!",
  "校赛明星",
  "新星",
  "队伍的羁绊",
]);
const contests = ref([
  {
    name: "擂台赛",
    rank: 12,
  },
  {
    name: "新生赛",
    rank: 12,
  },
  {
    name: "校赛",
    rank: 12,
  },
  {
    name: "原神赛",
    rank: 12,
  },
]);

function downloadAsImage() {
  nextTick(() => {
    if (sumarry.value) {
      html2canvas(sumarry.value, {
        useCORS: true, // 启用跨域支持
        scale: 2, // 提升图片分辨率
      }).then((canvas) => {
        // 将 canvas 转换为图片 URL
        const imgUrl = canvas.toDataURL("image/png");
        // 创建一个下载链接
        const link = document.createElement("a");
        link.href = imgUrl;
        link.download = "webpage_image.png"; // 设置下载文件名
        link.click(); // 模拟点击下载
      });
    } else {
      console.log("null");
    }
  });
  // 使用 html2canvas 截取 #content 元素的内容
}
</script>
<style scoped>
@import url("../assets/sumarry.css");
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
.remove {
  opacity: 0;
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

.summ {
  opacity: 1 !important;
  transition: all 0.5s ease-in-out;
  transform: translateY(0) !important;
}
</style>
