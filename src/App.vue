<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
  </div>
</template>

<script setup lang="ts">
//引入图标组件
import {Plus,Edit,Delete} from '@element-plus/icons-vue'
</script>


<style scoped></style>