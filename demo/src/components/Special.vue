<template>
<section>
    <div class="special">
        <div class="splanimall">
            <div ref="bili1" class="bili1">
                <div class="eyes"></div>
            </div>
            <div ref="bili2" class="bili2">
            </div>
            <div class="bigoj">SDUT OJ</div>
            <img src="../assets/img/codesmall.svg" alt="" class="codesmall">
            <img src="../assets/img/code.svg" alt="" class="code">
        </div>
        <p class="spl1">0000-00-00是个特殊的日子。</p>
        <p class="spl2">在这一天，注定不平凡的你，</p>
        <p class="spl4">开始了与SDUT OJ的不期而遇。</p>
        <p class="spl3">时至今日，我们的旅程已经开始了0000天</p>
    </div>
</section>
</template>

<script setup>
import {ref, onMounted} from 'vue'
const bili1 = ref(null)
const bili2 = ref(null)
onMounted(()=>{
    if(window.screen.width<1000){
        let total = 15;
        let shadow = '';
        let shadow2 = '';
        for(let i=1; i<=total; i++){
            shadow+=`${i}px -${i}px #eee,`
        }
        for(let i=1; i<=total/2; i++){
            shadow2+=`${i}px -${i}px #eee,`
        }
        shadow=shadow.slice(0,-1)
        shadow2= shadow2.slice(0, -1)
        bili1.value.style.boxShadow = shadow
        bili2.value.style.boxShadow = shadow2
    }
})


</script>

<style scoped>
@import url('../assets/special.css');
</style>