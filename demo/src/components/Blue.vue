<template>
<section>
    <div class="blu">
        <div class="bg-slide" style="z-index: 3;">
            <div class="txt1">
                <div class="txt1-a">
                    在 2 月 3 日，一个临近年关的日子
                </div>
                <div class="txt1-b">
                    000名兴趣相投的旅行者和你一同参加了<br> SDUT OJ 历史上最特别的比赛
                </div>
                <div class="txt1-c">
                    蔚蓝系列赛 Round 2：原神主题赛
                </div>
            </div>
            <div class="circle bg " ref="bg1">
                <img src="../assets/img/image1.jpg" alt="" >
            </div>
            <div class="circle large" ref="large1">
                <img src="../assets/img/image1.jpg" alt="" >
            </div>
            <div class="circle small" ref="small1">
                <img src="../assets/img/image1.jpg" alt="" >
            </div>
            <div class="circle-dark">
            </div>
        </div>
        <div class="bg-slide" style="z-index: 2">
            <div class="txt1">
                <div class="txt2-a">
                    你使用「xxxx」开门<br>并首先解锁了 country 篇
                </div>
                <div class="txt2-b">
                    五个国度的新奇有趣的题目<br>一定让你回想起了旅行的意义
                </div>
                <div class="txt2-c">
                    别忘了<br>提瓦特大陆的星空永远会有你的位置
                </div>
            </div>
            <div class="circle bg" ref="bg2">
                <img src="../assets/img/image2.jpg" alt="">
            </div>
            <div class="circle large" ref="large2">
                <img src="../assets/img/image2.jpg" alt="">
            </div>
            <div class="circle small" ref="small2">
                <img src="../assets/img/image2.jpg" alt="">
            </div>
            <div class="circle-dark">
            </div>
        </div>
        <div class="bg-slide" style="z-index: 1;">
            <div class="txt1">
                <div class="txt3-a">
                    蔚蓝系列赛从一个小小的点子到生根发芽<br>你的存在不可或缺
                </div>
                <div class="txt3-b">
                    希望在不远的 Round 3 中<br>藉由星轨引导命定的重逢
                </div>
                <div class="txt3-c">
                    让我们将新的玩法、新的设定<br>包裹成一份美梦般的快乐<br>再次传递给你
                </div>
            </div>
            <div class="circle bg">
                <img src="../assets/img/image3.jpg" alt="">
            </div>
            <div class="circle large">
                <img src="../assets/img/image3.jpg" alt="">
            </div>
            <div class="circle small">
                <img src="../assets/img/image3.jpg" alt="">
            </div>
            <div class="circle-dark">
            </div>
        </div>
        
    </div>
</section>
</template>

<script setup>
import { ref,onMounted } from 'vue';
const bg1 = ref(null)
const large1 = ref(null)
const small1 = ref(null)
const bg2 = ref(null)
const large2 = ref(null)
const small2 = ref(null)

onMounted(()=>{
    const animstart = new IntersectionObserver(lists=>{
        lists.forEach(list=>{
            if(list.isIntersecting){
                list.target.classList.add('active')
                const txt1s = document.querySelectorAll('.txt1-a, .txt1-b, .txt1-c');
                const txt2s = document.querySelectorAll('.txt2-a, .txt2-b, .txt2-c');
                const txt3s = document.querySelectorAll('.txt3-a, .txt3-b, .txt3-c');

                txt1s.forEach(txt1=>txt1.classList.add('fontactive'))
                setTimeout(()=>{
                    bg1.value.classList.add('rotate1')
                    large1.value.classList.add('rotate')
                    small1.value.classList.add('rotate')
                    txt1s.forEach(txt1=>txt1.classList.remove('fontactive'))
                    setTimeout(()=>{
                        txt2s.forEach(txt1=>txt1.classList.add('fontactive'))
                    }, 2000)
                }, 5000)

                setTimeout(()=>{
                    bg2.value.classList.add('rotate1')
                    large2.value.classList.add('rotate')
                    small2.value.classList.add('rotate')
                    txt2s.forEach(txt1=>txt1.classList.remove('fontactive'))
                    setTimeout(()=>{
                        txt3s.forEach(txt1=>txt1.classList.add('fontactive'))
                    }, 2000)
                }, 11000)
            }else{
                list.target.classList.remove('active')
            }
        })
    }, {threshold: .5});

    const blu = document.querySelector('.blu')
    animstart.observe(blu)
})
</script>

<style scoped>
@import url('../assets/blue.css');

.fontactive{
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
}

.active{
    opacity: 1;
}

.rotate1{
    transform: rotate(360deg) ;
    opacity: 0;
}

.rotate{
    transform: rotate(720deg);
    opacity: 0;
}
</style>