<template>
    <section>
        <div class="achivstar">
            <lay-carousel v-model="activeAnmi1" anim="updown" style="display:inline-block;width:90%;height: 100px;" :autoplay="true" indicator="none">
                <lay-carousel-item id="1">
                <div style="color: white;text-align: center;width:100%;height:100px;line-height:100px;background-color:#009688;">条目一</div>
                </lay-carousel-item>
                <lay-carousel-item id="2">
                <div style="color: white;text-align: center;width:100%;height:100px;line-height:100px;background-color:#5FB878;">条目二</div>
                </lay-carousel-item>
                <lay-carousel-item id="3">
                <div style="color: white;text-align: center;width:100%;height:100px;line-height:100px;background-color:#FFB800;">条目三</div>
                </lay-carousel-item>
                <lay-carousel-item id="4">
                <div style="color: white;text-align: center;width:100%;height:100px;line-height:100px;background-color:#FF5722;">条目四</div>
                </lay-carousel-item>
            </lay-carousel>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const activeAnmi1 = ref("1")
const arr = ref([
    'nihao',
    'woshi',
    'wujinhao',
    'bushi',
    'wokao',
    'wanle'
])

</script>

<style scoped>
@import url('../assets/achivestar.css');
</style>