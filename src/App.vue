<template>
  <div>
    <!-- <h1>测试代码</h1>

    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button> -->

    <!--测试svg的使用-->
    <!--
    <svg style="width:30px;height:30px;">
      <use xlink:href="#icon-phone" fill="red"></use>
    </svg>
    -->
    <!-- <svg-icon name="phone" color="blue" width="100px" height="100px"></svg-icon>
    <Pagination></Pagination> -->

    <!--使用路由组件-->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
//引入图标组件
import { Plus, Edit, Delete } from '@element-plus/icons-vue'

import request from '@/utils/request'
import { onMounted } from 'vue'

//当你组件挂在完毕测试发一个请求
/*
onMounted(()=>{
	request({
		url: '/user/login',
		method:'post',
		data:{
			username: 'admin',
			password: '111111'
		}
	}).then(res=>{
			console.log(res);
	})
})
*/

import { reqLogin } from './api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
