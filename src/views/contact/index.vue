<template>
  <div class="flex flex-col items-center justify-center  h-[calc(100vh-101px)] box-border overflow-hidden bg-cover bg-no-repeat" :style="{backgroundImage:`url(${I5})`}">
    <div style="background-color: #2c2c2c; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); border-radius: 12px; padding: 32px; max-width: 400px; width: 100%; text-align: center;">
      <div style="margin-bottom: 24px;">
        <p style="color: #eee; margin-bottom: 4px;" class="text-16px">手机: <span style="font-weight: 500;">123-456-7890</span></p>
      </div>
      <div style="margin-bottom: 24px;" class="flex flex-col justify-center items-center">
        <h2 style="color: #eee; font-size: 1.5rem; font-weight: 600; margin-bottom: 8px;" class="pb-20px">微信二维码</h2>
        <img  alt="二维码" style="width: 160px; height: 160px; margin: 0 auto; border: 2px solid #444444; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import I5 from '../drones/i5.png'
defineOptions({
  name: 'Contact'
})
// 这里可以添加任何需要的逻辑
</script>

<style scoped>
/* 你可以在这里添加任何自定义样式 */
</style>
