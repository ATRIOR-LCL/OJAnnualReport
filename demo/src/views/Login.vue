<template>
<section>
    <div id="login">
        <p class="oj">SDUT OJ</p>
        <form class="form-control" action="">
        <p class="title">Login</p>
            <div class="input-field">
                <input required="" class="input" type="text" />
                <label class="label" for="input">Enter UserName</label>
            </div>
            <div class="input-field">
                <input required="" class="input" type="password" />
                <label class="label" for="input">Enter Password</label>
            </div>
            <div class="tongyi">
                <input type="checkbox" class="ui-checkbox" v-model="isChecked">
                <p>同意SDUTOJ统计我的数据</p>
            </div>
            
            <!-- <a>Forgot your password?</a> -->
            <button class="submit-btn" :disabled="!isChecked">SUBMIT</button>
        </form>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue';


const isChecked = ref(false)
</script>
<style scoped>
@import url('../assets/login.css');
</style>