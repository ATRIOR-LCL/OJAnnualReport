<template>
  <section>
    <div class="achivstar">
      <div class="card-container">
        <div class="card" @click="show">
          <div class="content">
            <div class="name">作为成就大师</div>
            <div class="handle">@Achievement</div>
            <div class="title">
              <span class="emoji">😊</span> 你总计达成了 x 项成就<br />
              继续努力向全收集进发吧！
            </div>
          </div>
          <div class="dots orange-dots"></div>
          <div class="dots pink-dots"></div>
        </div>
      </div>
      <ul class="chengjiu">
        <div class="waitao">
          <li class="cjli" v-for="(item, index) in arr" :key="index">
            {{ item }}🏆️
          </li>
        </div>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { can, isnext, isScoll } from "@/assets/global";
import { onMounted, ref } from "vue";
const activeAnmi1 = ref("1");
const soMucn = ref(false);
const arr = ref([
  "刷题勇者",
  "刷题大师",
  "wujinhao",
  "bushi",
  "wokao",
  "wanle",
  "heihei",
  "bushi",
  "heihei",
  "刷题勇者",
  "刷题大师",
  "wujinhao",
  "bushi",
  "wokao",
  "wanle",
  "heihei",
  "bushi",
  "heihei",
  "刷题勇者",
  "刷题大师",
  "wujinhao",
  "bushi",
  "wokao",
  "wanle",
  "heihei",
  "bushi",
  "heihei",
  "刷题勇者",
  "刷题大师",
  "wujinhao",
  "bushi",
  "wokao",
  "wanle",
  "heihei",
  "bushi",
  "heihei",
]);
onMounted(() => {
  if (arr.value.length >= 7) {
    // console.log('yes')
    const lis = document.querySelector(".waitao");
    const cnt1 = arr.value.length * 0.2;
    const cnt2 = arr.value.length * -0.9;
    lis.style.setProperty("--cnt1", `${cnt1}rem`);
    lis.style.setProperty("--cnt2", `${cnt2}rem`);
    lis.classList.add("gun");
  }
  const achshow = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          setTimeout(() => {
            can.value = true;
            isnext.value = true;
            isScoll.value = true;
          }, 2000);
          list.target.classList.add("active");
        } else {
          list.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.1 }
  );
  const achs = document.querySelector(".achivstar");
  achshow.observe(achs);
});
</script>

<style scoped>
@import url("../assets/achivestar.css");

.gun {
  animation: gundong 15s infinite linear;
}

@keyframes gundong {
  from {
    transform: translateY(var(--cnt1));
  }
  to {
    transform: translateY(var(--cnt2));
  }
}

.active {
  opacity: 1;
}
</style>
