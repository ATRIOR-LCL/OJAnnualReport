<template>
<section>
        <div class="night">
            <div class="nightfont">
                某一天深夜<span>00</span>点还在做题<span>😴</span>
            </div>
            <div class="nightgl">
                默默努力，让成功成为你的声音🥳
            </div>
            <div class="moon"></div>
            <div class="sea"></div>
            </div>
</section>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(()=>{
    const nightanim = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('fontactive')
            }else{
                entry.target.classList.remove('fontactive')
            }
            })
        }, {threshold: 0.5})

        const nights = document.querySelectorAll(".nightfont, .nightgl, .moon")
nights.forEach(night=>nightanim.observe(night))
})


</script>

<style scoped>
@import url('../assets//night.css');
.fontactive{
    filter: blur(0);
    opacity: 1;
    transform: translateX(0) translateY(0);
}
</style>