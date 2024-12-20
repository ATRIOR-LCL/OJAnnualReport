<template>
<section>
    <div class="bisai">
        <div class="bstxt">
            <div class="bstxt1">今年你一共参加了<span>00</span>场比赛</div>
            <div class="bstxt2">在<span>00000</span>中<br>你取得了<span>00</span>的年度最好成绩<br>可喜可贺，可喜可贺<span>🥳</span></div>
        </div>
        <div class="loader"></div>
    </div>
</section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    const bstxtanim = new IntersectionObserver(lists=>{
        lists.forEach(list=>{
            if(list.isIntersecting){
                list.target.classList.add('active')
            }else{
                list.target.classList.remove('active')
            }
        })
    })

    const bstxts = document.querySelectorAll('.bstxt, .loader')
    bstxts.forEach(bstxt=>bstxtanim.observe(bstxt))
})
</script>

<style scoped>
@import url('../assets/bisai.css');

.active{
    transform: translateX(0);
    opacity: 1;
    filter: blur(0);
}
</style>