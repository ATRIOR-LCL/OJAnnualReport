<template>
  <section>
    <div class="newcontest">
      <div class="ncttxt">
        <p class="saishi">
          这一年里OJ共举办了<br />
          <span>4</span>场<br />中大型正式赛事<span>😲</span>
        </p>
        <p class="bipin">
          共有<span>496</span>名选手<br />参与了这些激情的比拼<span>💭</span>
        </p>
      </div>
      <div class="acmacm">
        <div class="outer">
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">496</div>
            <div class="pt">Participants</div>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>
        <p class="qds">ACM庆典赛</p>
        <p class="wls">蔚蓝系列赛</p>
        <p class="lts">新生擂台赛</p>
        <img src="../assets/img/sad.svg" alt="" />
        <img src="../assets/img/nervous.svg" alt="" />
        <img src="../assets/img/sentiment.svg" alt="" />
        <img src="../assets/img/happy.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { can, isnext, isScoll } from "@/assets/global";
onMounted(() => {
  const ncttxtanim = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          setTimeout(() => {
            isnext.value = true;
            can.value = true;
            isScoll.value = true;
          }, 3000);
          list.target.classList.add("active");
        } else {
          list.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  const txts = document.querySelector(".ncttxt");
  ncttxtanim.observe(txts);

  const acmanim = new IntersectionObserver(
    (lists) => {
      lists.forEach((list) => {
        if (list.isIntersecting) {
          list.target.classList.add("active1");
        } else {
          list.target.classList.remove("active1");
          const pd1 = document.querySelector(".pd1");
        }
      });
    },
    { threshold: 0.5 }
  );
  const acms = document.querySelector(".acmacm");
  acmanim.observe(acms);
});
</script>

<style scoped>
@import url("../assets/newcontest.css");

.active {
  transform: translate(0);
  opacity: 1;
  filter: blur(0);
}

.active1 {
  filter: blur(0);
  opacity: 1;
}

.activepd1 {
  transform: rotate(70deg) translateX(0);
}

.activepd2 {
  transform: rotate(-35deg) translateX(0);
}

.activepd3 {
  transform: rotate(-25deg) translateX(0);
}
</style>
