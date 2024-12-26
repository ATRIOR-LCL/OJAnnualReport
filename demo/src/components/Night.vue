<template>
  <section>
    <div class="night">
      <div class="nightfont">
        与星同行的你<span>00:00</span>还在做题<span>😴</span>
      </div>
      <div class="nightgl">
        这是独属于你的不眠之夜
        <img class="sticker" src="../assets/img/sticker.png" alt="" />
      </div>
      <div class="moon"></div>
      <div class="sea"></div>
    </div>
  </section>
</template>

<script setup>
import { can, isnext, isScoll } from "@/assets/global";
import { onMounted, ref } from "vue";
const first = ref(true);

onMounted(() => {
  const nightanim = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (first.value) {
            setTimeout(() => {
              can.value = true;
              isnext.value = true;
              isScoll.value = true;
            }, 2500);
            first.value = false;
          }
          entry.target.classList.add("fontactive");
        } else {
          entry.target.classList.remove("fontactive");
        }
      });
    },
    { threshold: 0.5 }
  );

  const nights = document.querySelectorAll(".nightfont, .nightgl, .moon");
  nights.forEach((night) => nightanim.observe(night));
});
</script>

<style scoped>
@import url("../assets//night.css");
.fontactive {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
