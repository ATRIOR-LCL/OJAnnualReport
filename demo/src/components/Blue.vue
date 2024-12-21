<template>
<section>
    <div class="blu">
        <div class="bg-slide" style="z-index: 3;">
            <div class="txt1">
                <div class="txt1-a">
                    在 2 月 3 日，一个临近年关的日子
                </div>
                <div class="txt1-b">
                    000名兴趣相投的旅行者和你一同参加了 SDUT OJ 历史上最特别的比赛
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
                // setTimeout(()=>{
                //     bg1.value.classList.add('rotate1')
                //     large1.value.classList.add('rotate')
                //     small1.value.classList.add('rotate')
                // }, 500)

                setTimeout(()=>{
                    bg2.value.classList.add('rotate1')
                    large2.value.classList.add('rotate')
                    small2.value.classList.add('rotate')
                }, 5000)
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