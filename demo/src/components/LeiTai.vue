<template>
<section>
    <div class="leitai">
        <div class="lttxt">
            <div class="txt1">作为全新升级的组队赛</div>
            <div class="txt2">
                你和你的队友所向披靡，怒切 x 题
            </div>
            <div class="txt3">
                一举夺得 金奖|第x名|总第x名 的战绩
            </div>
            <div class="txt4">
                这份力量，就是你们的羁绊
            </div>
        </div>
        <div class="zgn">
            <img src="../assets/img/zgn.png" alt="">
        </div>
        <img class="nailong" src="../assets/img/nailong.gif" alt="">
        <div class="szyx">「奶龙的数学游戏」</div>
        <div class="jz">「奶龙的矩阵」</div>
        <div class="ygg">「超的超超超超超超级阳光菇」</div>
        <div class="cc">「Mirai 大战 灿灿」</div>
        <div class="hwc">「回文串串回文」</div>
        <div class="llzm">这些题目一定也使你历历在目🤗</div>
    </div>
</section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    const all = new IntersectionObserver(lists=>{
        lists.forEach(list=>{
            if(list.isIntersecting){
                const zgn = document.querySelector('.zgn')
                const nail = document.querySelector('.nailong')
                const txts = document.querySelectorAll('.szyx, .jz, .ygg, .cc, .hwc, .llzm')
                list.target.classList.add('active')
                zgn.classList.add('active')
                zgn.classList.add('zgnanim')
                nail.classList.add('nlanim')
                setTimeout(() => {
                    txts.forEach(txt=>txt.classList.add('active'))
                }, 8000);
            }else{
                list.target.classList.remove('active')
            }
        })
    }, {threshold: .5})
    const alls = document.querySelectorAll('.txt1, .txt2, .txt3, .txt4')
    alls.forEach(alll=>all.observe(alll))
})
</script>

<style scoped>
@import url('../assets/leitai.css');

.active{
    transform: translateX(0) translateY(0);
    opacity: 1;
    filter: blur(0);
}

.zgnanim{
    animation: fly 1s forwards ;
    /* background-color: red; */
    animation-delay: 5s;
}

.nlanim{
    animation: nl 5s forwards;
    animation-delay: 5s;
}
</style>