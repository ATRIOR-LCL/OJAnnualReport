<template>
    <section>
        <div class="newcontest">
            <div class="ncttxt">
                <p class="saishi">这一年里OJ共举办了<span>00</span>场中大型正式赛事</p>
                <p class="bipin">共有<span>0000</span>名选手参与了这些激情的比拼</p>
            </div>
            <div class="pd1">SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM</div>
            <div class="pd2">SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM</div>
            <div class="pd3">SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM SDUTACM</div>
            <div class="acmacm">
                <img src="../assets/img/sdutacm_logo_colorful-02a05aa9.svg" alt="">
                <p class="qds">ACM庆典赛</p>
                <p class="wls">蔚蓝系列赛</p>
                <p class="lts">新生擂台赛</p>
            </div>
        </div>
    </section>

</template>

<script setup>
import {ref, onMounted} from 'vue'
import { can, isnext } from '@/assets/global';
onMounted(()=>{
    const ncttxtanim = new IntersectionObserver(lists=>{
        lists.forEach(list=>{
            if(list.isIntersecting){
                setTimeout(() => {
                    isnext.value = true
                    can.value=true
                }, 3000);
                list.target.classList.add('active')
            }else{
                list.target.classList.remove('active')
            }
        })
    }, {threshold: .5})

    const txts = document.querySelector('.ncttxt')
    ncttxtanim.observe(txts)


    const acmanim = new IntersectionObserver(lists=>{
        lists.forEach(list=>{
            if(list.isIntersecting){
                list.target.classList.add('active1')
                setTimeout(()=>{
                    const pd1 = document.querySelector('.pd1')
                    pd1.classList.add('activepd1')
                    const pd2 = document.querySelector('.pd2')
                    pd2.classList.add('activepd2')
                    const pd3=document.querySelector('.pd3')
                    pd3.classList.add('activepd3')
                },1000)
            }else{
                list.target.classList.remove('active1')
                const pd1 = document.querySelector('.pd1')
                    pd1.classList.remove('activepd1')
                    const pd2 = document.querySelector('.pd2')
                    pd2.classList.remove('activepd2')
                    const pd3=document.querySelector('.pd3')
                    pd3.classList.remove('activepd3')
            }
        })
    }, {threshold: .5})
    const acms = document.querySelector('.acmacm')
    acmanim.observe(acms)
})

</script>

<style scoped>
@import url('../assets/newcontest.css');

.active{
    transform: translate(0);
    opacity: 1;
    filter: blur(0);
}

.active1{
    filter: blur(0);
    opacity: 1;
}

.activepd1{
    transform: rotate(70deg) translateX(0);
}

.activepd2{
    transform: rotate(-35deg) translateX(0);
}

.activepd3{
    transform: rotate(-25deg) translateX(0);
}
</style>