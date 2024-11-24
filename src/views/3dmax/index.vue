<script lang='ts' setup>
import type { GlobalThemeOverrides } from 'naive-ui';
import Card from './Card.vue';
import HomeImg from '@/assets/imgs/home.png';
import { menuOptions } from '@/utils/menu';
import d2 from '@/assets/drones/d2.png';
import d4 from '@/assets/drones/d4.png';

const list = [
  {
    title: '空域管理，合规畅行',
    desc: '构建空域管理功能，确保无人机的飞行计划符合当地法规和空域限制。进行飞行前的合规性检查，包括飞行区域、飞行时间、飞行高度等，以避免违规飞行。',
    img: d2,
  },
  {
    title: '一键全景，实时回传',
    desc: '利用设备内置的摄像头和算法，自动捕捉周围环境的多个角度图像，拼接成一个完整的全景图，通过无线通信技术实时传输回控制端。',
    img: d2,
  },
  {
    title: '飞行规划，智能控制',
    desc: '预设无人机的飞行路径、高度、速度等参数，制定详细的飞行计划 能够根据任务需求和环境变化自主做出决策，优化飞行控制算法和路径规划策略，提高飞行效率和安全性。',
    img: d2,
  },
];
const name = ref('');
const themeOverrides: GlobalThemeOverrides = {
  Tabs: {
    colorSegment: '#151515',
    tabTextColorSegment: '#fff',
  },
};
</script>

<template>
  <section
    class="h-1000px bg-no-repeat relative bg-cover" bg="100% 100%"
    :style="{ backgroundImage: `url(${HomeImg})` }"
  >
    <section class="pt-120px text-fff">
      <h1 class=" text-fff text-60px pl-220px">
        三维模型
      </h1>
      <div class="w-900px leading-30px pl-220px">
        三维模型的数据来源分为无人机航拍倾斜摄影、人工建模（revit、3dmax等），根据不同的项目需要，我方可为您采集或建立不同的模型。其中倾斜摄影具有数据采集快、处理迅速的特点，但某些细节上由于飞行器及镜头的限制，展现的略微粗糙；人工建模的优势在于模型细节上的高精度还原，但是与此同时，人工建模需要花费大量的人力。
      </div>
    </section>
  </section>

  <section bg="#151515" flex justify-center>
    <section class="w-1400px  box-border pt-30px">
      <n-config-provider :theme-overrides="themeOverrides" abstract>
        <n-tabs v-model="name" type="segment" animated :bar-width="60" size="large" pane-class="paneclass">
          <n-tab-pane
            v-for="(item, index) of list" :key="item.img" :name="item.title" :tab="item.title"
          >
            <section
              class="flex justify-center  overflow-hidden items-center pb-40px" text="#fff"
              :class="[index % 2 === 1 ? 'flex-row-reverse' : ' ']"
            >
              <section class=" left w-500px flex flex-col justify-center px-80px">
                <h2 text-30px>
                  {{ item.title }}
                </h2>
                <p text-20px flex items-center w-500px>
                  {{ item.desc }}
                </p>
              </section>
              <section
                class="right h-400px w-700px bg-cover bg-no-repeat"
                :style="{ backgroundImage: `url(${item.img})` }"
              >
              </section>
            </section>
          </n-tab-pane>
        </n-tabs>
      </n-config-provider>
    </section>
  </section>

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
.paneclass{
  padding-top: 50px !important;
}
</style>
