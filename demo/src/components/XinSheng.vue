<template>
    <section>
        <div class="xinsheng">
            <div class="xshtxt">
                <div>
                    作为新生，在争霸赛中首次展露头角
                </div>
                <div>
                    你以第 x 名的成绩<br>向大家宣告了你的存在<br>「嗯呢嗯呢」
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    const allin = new IntersectionObserver(lists=>{
        lists.forEach(list=>{
            if(list.isIntersecting){
                list.target.classList.add('active1')
                const xshtxt = document.querySelector('.xshtxt')
                setTimeout(() => {
                    xshtxt.classList.add('active')
                }, 1000);
            }else{
                list.target.classList.remove('active1')
            }
        })
    }, {threshold: .5})

    const xinsheng= document.querySelector('.xinsheng')
    allin.observe(xinsheng)
})
</script>

<style scoped>
@import url('../assets/xinsheng.css');

.active{
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
}

.active1{
    opacity: 1;
}
</style>