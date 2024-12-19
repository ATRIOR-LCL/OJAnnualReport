<template>
<section>
    <div class="special">
        <div class="splanimall">
            <div ref="bili1" class="bili1">
                <p class="bili1txt">SDUT ACM</p>
                <div class="eyes"></div>
            </div>
            <div ref="bili2" class="bili2">
            </div>
            <div class="bigoj">SDUT OJ</div>
            <img src="../assets/img/codesmall.svg" alt="" class="codesmall">
            <img src="../assets/img/code.svg" alt="" class="code">
        </div>
        <p class="spl1"><span>0000-00-00</span><span>是个特殊的日子。</span></p>
        <p class="spl2">在这一天，注定不平凡的你，</p>
        <p class="spl4">开始了与SDUT OJ的不期而遇。</p>
        <p class="spl3"><span>时至今日，我们的旅程已经开始了</span><span>0000</span><span>天</span></p>
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

    const allanim = new IntersectionObserver((lists)=>{
        lists.forEach((list)=>{
            if(list.isIntersecting){
                list.target.classList.add('erase')
            }else{
                list.target.classList.remove('erase')
            }
        })
    }, {threshold: 0.5})

    const animall = document.querySelector('.splanimall');
    allanim.observe(animall)
})


</script>

<style scoped>
@import url('../assets/special.css');
.erase{
    opacity: 1;
}
</style>