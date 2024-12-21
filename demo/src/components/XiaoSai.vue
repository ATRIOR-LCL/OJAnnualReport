<template>
    <section>
        <div class="xiaosai">
            <div class="xstxt1">
                    <div class="txt1">
                        在 5 月 12 日，你参加了紧张刺激的第十六届校赛
                    </div>
                    <div class="txt2">
                        你与 x 名选手以及 y 名中小学生同台竞技
                    </div>
                    <div class="txt3">
                        并拿下了金奖|第x名|总第x名的好成绩
                    </div>
            </div>
            <div class="xstxt2">
                <div>
                    这届校赛中
                </div>
                <div>
                    「全新的同步直播」
                </div>
                <div>
                    「高能滚榜」与「闭幕式节目」首次亮相
                </div>
                <div>
                    为这场盛会增添了更多精彩
                </div>
            </div>
            <div class="container">
                <div class="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg" alt="" class="img1">

                </div>
                <div class="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg" alt="" class="img1">

                </div>
                <div class="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg" alt="" class="img1">

                </div>
                <div class="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg" alt="" class="img1">

                </div>
                <div class="bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg" alt="" class="img1">

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(()=>{
    const allanim = new IntersectionObserver(lists=>{
        lists.forEach(list=>{
            if(list.isIntersecting){
                list.target.classList.add('active')
                const xstxt1 = document.querySelector('.xstxt1')
                const xstxt2 = document.querySelector('.xstxt2')
                const bubble = document.querySelector('.container')
                bubble.classList.add('active')
                setTimeout(()=>{
                    xstxt1.classList.add('active')
                }, 1000)
                setTimeout(() => {
                    xstxt1.classList.remove('active')
                    setTimeout(() => {
                        xstxt2.classList.add('active')
                    }, 1000);
                }, 4000);
            }else{
                list.target.classList.remove('active')
            }
        })
    }, {threshold: .5})

    const xiaosai = document.querySelector('.xiaosai')
    allanim.observe(xiaosai)
})
</script>

<style scoped>
@import url('../assets/xiaosai.css');
.active{
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
}
</style>