import { createApp, ref } from 'vue'
import App from './App.vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import 'vue-fullpage.js/dist/style.css'
createApp(App).use(Layui).mount('#app')
