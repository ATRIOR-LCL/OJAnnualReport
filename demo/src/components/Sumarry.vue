<template>
  <section>
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
import { nextTick, onMounted, ref } from "vue";
import html2canvas from "html2canvas";
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

// onMounted(() => {
function downloadAsImage() {
  nextTick(() => {
    if (sumarry.value) {
      html2canvas(sumarry.value).then((canvas) => {
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
// });
</script>

<style scoped>
@import url("../assets/sumarry.css");
</style>
