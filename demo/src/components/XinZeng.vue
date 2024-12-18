<template>
<section>
    <div class="xinzeng">
        <p class="yh" ><span>今年OJ共新增 </span><span class="yhnum">0000</span><span> 名用户 !</span></p>
        <p class="tj"><span>新增提交数</span><span class="tjnum">0000</span><span>个 !</span></p>
    </div>
</section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    const page2anim = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('fontactive')
        }else{
            entry.target.classList.remove('fontactive')
        }
        })
    }, {threshold: .5})

    const page2font = document.querySelectorAll('.yh, .tj, .qf1, .qf2, .qf3, .emoji')
    page2font.forEach(page2font=> page2anim.observe(page2font))
})
</script>

<style scoped>
@import url('../assets/page2.css');
.fontactive{
    filter: blur(0);
    opacity: 1;
    transform: translateX(0) translateY(0);
}
</style>