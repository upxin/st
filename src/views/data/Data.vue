<script lang='ts' setup>
import type { GlobalThemeOverrides } from 'naive-ui';
import Card from './Card.vue';
import HomeImg from '@/assets/imgs/home.png';
import { menuOptions } from '@/utils/menu';

const themeOverrides: GlobalThemeOverrides = {
  Menu: {
    itemTextColor: '#fff',
    fontSize: '16px',
  },
  Button: {
    textColor: '#fff',
  },
};

const router = useRouter();
function selectMenu(key: string) {
  router.push(key);
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" abstract>
    <section class="h-1000px bg-no-repeat relative" bg="100% 100%" :style="{ backgroundImage: `url(${HomeImg})` }">
      <n-menu mode="horizontal" :options="menuOptions" responsive value="3dmax" @update:value="selectMenu" />
      <section class="mt-300px text-fff">
        <h1 class=" text-fff text-60px pl-220px">
          三维模型
        </h1>
        <div class="w-900px leading-30px pl-220px">
          三维模型的数据来源分为无人机航拍倾斜摄影、人工建模（revit、3dmax等），根据不同的项目需要，我方可为您采集或建立不同的模型。其中倾斜摄影具有数据采集快、处理迅速的特点，但某些细节上由于飞行器及镜头的限制，展现的略微粗糙；人工建模的优势在于模型细节上的高精度还原，但是与此同时，人工建模需要花费大量的人力。
        </div>
      </section>
    </section>
  </n-config-provider>
  <section bg="#151515" pb-30px>
    <section overflow-hidden text-fff class="pt-120px">
      <section class="text-center text-40px text-fff  mt-85px">
        无人机倾斜摄影
      </section>
      <p class="text-center text-18px text-fff  mt-30px mb-100px">
        通过多旋翼或固定翼无人机来进行航飞拍摄，采集精度最高可达0.5cm，在大范围城区或者山区环境下，采用无人机进行航拍是建模的不二选择。
      </p>
    </section>

    <section class="flex justify-around px-100px">
      <Card class="card"></Card>
      <Card class="card"></Card>
      <Card class="card"></Card>
      <Card class="card"></Card>
    </section>
  </section>
</template>

<style lang="scss" scoped>
:deep(.v-overflow) {
  width: 100vw !important;
  justify-content: center;
}

.card {
  width: 340px;
  height: 423px;
  background: #1F1F1F;
  border-radius: 10px 10px 10px 10px;
}

body {
  overflow-x: hidden; // 防止水平滚动条
}
</style>
