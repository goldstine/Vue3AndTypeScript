import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

// 配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


console.log(import .meta.env)


const app = createApp(App)

app.use(ElementPlus,{
  locale:zhCn
})
// svg插件需要配置代码
import 'virtual:svg-icons-register'

//将 SVG注册成全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon',SvgIcon)
// 通过插件暴露多个自定义组件  index.ts
// 引入自定义插件
import globalComponent from '@/components';
// console.log(globalComponent)
//安装自定义插件
app.use(globalComponent)

app.mount('#app')