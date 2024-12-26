<template>
  <section>
    <div class="ac">
      <div class="actest">
        <div class="gongac">
          你总共在OJ上AC了<span>00</span>道题目<span>🥴</span>
        </div>
        <div class="xinac">其中，<span>00</span>道是今年新AC的题目</div>
        <div class="sts">你的刷题数傲立群雄， 超过了OJ <span>00%</span>的用户</div>
      </div>
      <div class="acstar">
        <div class="stzx">
          <img src="../assets/img/qq.png" alt="" />
          <span class="rank2">atrior</span>
          <img src="../assets/img/qq.png" alt="" />
          <span class="rank1">atrior</span>
          <img src="../assets/img/qq.png" alt="" />
          <span class="rank3">atrior</span>
        </div>
        <div class="pyramid-loader">
          <div class="wrapper">
            <span class="side side1"></span>
            <span class="side side2"></span>
            <span class="side side3"></span>
            <span class="side side4"></span>
            <span class="shadow"></span>
          </div>
        </div>
        <img src="../assets/img/star.png" alt="" class="star4" />
        <img src="../assets/img/star.png" alt="" class="star5" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { can, isnext, isScoll } from "@/assets/global";
import { ref, onMounted } from "vue";
const star1 = ref(null);
const star2 = ref(null);
const star3 = ref(null);

onMounted(() => {
  const txtanim = new IntersectionObserver((lists) => {
    lists.forEach((list) => {
      if (list.isIntersecting) {
        setTimeout(() => {
          can.value = true;
          isnext.value = true;
          isScoll.value = true;
        }, 2500);
        list.target.classList.add("active");
        star1.value.style.animationPlayState = "running";
        star2.value.style.animationPlayState = "running";
        star3.value.style.animationPlayState = "running";
      } else {
        list.target.classList.remove("active");
      }
    });
  });
  const txt = document.querySelector(".actest");
  txtanim.observe(txt);

  const acstarmove = new IntersectionObserver((lists) => {
    lists.forEach((list) => {
      if (list.isIntersecting) {
        list.target.classList.remove("move");
      } else {
        list.target.classList.add("move");
      }
    });
  });

  const acst = document.querySelector(".acstar");
  acstarmove.observe(acst);
});
</script>

<style scoped>
@import url("../assets/ac.css");
.active {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.move {
  opacity: 0;
}
</style>
