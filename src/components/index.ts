//将组件注册成全局组件   对外暴露插件对象
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGlobalComponent = {SvgIcon,Pagination}
console.log(allGlobalComponent)
export default {
    //务必叫做install方法
    install(app){
        //注册项目全部的全局组件
        Object.keys(allGlobalComponent).forEach(key => {
            app.component(key,allGlobalComponent[key]);
        })
    }
}