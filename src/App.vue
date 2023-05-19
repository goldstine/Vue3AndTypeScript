<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>

    <!--测试svg的使用-->
    <!--
    <svg style="width:30px;height:30px;">
      <use xlink:href="#icon-phone" fill="red"></use>
    </svg>
    -->
    <svg-icon name="phone" color="blue" width="100px" height="100px"></svg-icon>
    <Pagination></Pagination>
  </div>
</template>

<script setup lang="ts">
//引入图标组件
import {Plus,Edit,Delete} from '@element-plus/icons-vue'

</script>


<style scoped></style>
