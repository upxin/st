<script lang="ts" setup>
import type { GlobalThemeOverrides, MenuOption } from 'naive-ui';
import { Check } from '@vicons/fa';
import { menuOptions } from '@/utils/menu';
import HomeImg from '@/assets/drones/drones.png';
import d2 from '@/assets/drones/d2.png';
import d4 from '@/assets/drones/d4.png';
import d8 from '@/assets/drones/d8.png';
defineOptions({
  name: 'Map3d'
})
const router = useRouter();
const message = useMessage();
function toast() {
  message.error('Once upon a time you dressed so fine');
}


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
  {
    title: '实时监控，风险预判',
    desc: '持续、不间断的监测和记录，对自身和外界运行风险进行智能感知，提升无人机对风险的自动识别和主动防控能力。',
    img: d2,
  },
];
</script>

<template>
  <section class="h-1000px bg-no-repeat relative bg-cover" bg="100% 100%"
    :style="{ backgroundImage: `url(${HomeImg})` }">
    <section class="pt-300px text-fff">
      <h1 class="pl-200px text-60px">
        无人机智能管控平台
      </h1>
      <p class="pl-200px text-20px">
        高效、精准、自主完成信息感知，远程掌控，无线覆盖
      </p>
    </section>
  </section>
  <section bg="#151515" class="w-screen overflow-hidden">
    <section overflow-hidden text-fff>
      <section class="text-center text-40px text-fff  my-85px">
        无人值守，自动作业，智能高效，灵活可靠
      </section>
    </section>

    <section v-for="(item, index) of list" :key="item.img"
      class="flex justify-center  overflow-hidden items-center pb-100px" text="#fff"
      :class="[index % 2 === 1 ? 'flex-row-reverse' : ' ']">
      <section class=" left w-500px flex flex-col justify-center px-80px">
        <h2 text-30px>
          {{ item.title }}
        </h2>
        <p text-20px flex items-center w-500px>
          {{ item.desc }}
        </p>
      </section>
      <section class="right h-400px w-700px bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${item.img})` }">
      </section>
    </section>
    <section class="w-screen flex justify-center">
      <img :src="d8" alt="" class="w-1100px h-610px">
    </section>
  </section>
</template>

<style lang="scss" scoped>
:deep(.v-overflow) {
  width: 100vw !important;
  justify-content: center;
}

.crad {
  width: 223px;
  height: 98px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 0px 0px;
}

body {
  overflow-x: hidden; // 防止水平滚动条
}
</style>
