<template>
<section>
        <div class="hard">
            <div class="hardtxt">
                <span>某一道题做了</span><span>00</span><span>遍才过</span><span>🥵</span>
            </div>
            <div class="hard_slogan">只要路是对的，就不怕路远🤗</div>
            <div class="hdsea"></div>
            <div class="sun"></div>
        </div>
</section>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(()=>{
    const sunanim = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('fontactive')
        }else{
            entry.target.classList.remove('fontactive')
        }
        })
    }, {threshold: 0.5})

    const suns = document.querySelectorAll(".hardtxt, .hard_slogan, .sun")
    suns.forEach(sun=>sunanim.observe(sun))
})

</script>

<style scoped>
@import url('../assets/hard.css');
.fontactive{
    filter: blur(0);
    opacity: 1;
    transform: translateX(0) translateY(0);
}
</style>