<script lang="ts" setup>
import type { GlobalThemeOverrides, MenuOption } from 'naive-ui';
import { Check } from '@vicons/fa';
import ScrollReveal from 'scrollreveal';
import { menuOptions } from '@/utils/menu';
import HomeImg from '@/assets/imgs/home.png';
import Img10 from '@/assets/home/image10.png';
import Img66 from '@/assets/home/image66.png';
import Img67 from '@/assets/home/image67.png';
import Img1 from '@/assets/home/image1.png';
import hk2 from '@/assets/home/hk2.png';
import hk3 from '@/assets/home/hk3.png';
import hk4 from '@/assets/home/hk4.png';
import hk5 from '@/assets/home/hk5.png';

ScrollReveal({ reset: true });
const router = useRouter();
const message = useMessage();

type Origin = 'left' | 'right' | 'top' | 'bottom';
function slide(origin: Origin) {
  return {
    duration: 800, // 动画持续时间
    distance: '200px', // 移动距离
    easing: 'ease-in-out', // 动画缓动效果
    origin, // 动画起始位置
    interval: 300, // 元素之间的动画间隔
    viewFactor: 0.8,
  };
}

function toast() {
  message.error('Once upon a time you dressed so fine');
}

onMounted(() => {
  ScrollReveal().reveal('.left', {
    ...slide('left'),
    viewOffset: { top: 0, right: 0, bottom: 0, left: -50 }, // 确保不会超出左侧
  });
  ScrollReveal().reveal('.right', {
    ...slide('right'),
    viewOffset: { top: 0, right: -50, bottom: 0, left: 0 }, // 确保不会超出右侧
  });

  ScrollReveal().reveal('.reveal', {
    duration: 1000, // 动画持续时间
    distance: '50px', // 元素移动的距离
    origin: 'bottom', // 动画的起点（可选：top, bottom, left, right）
    opacity: 0, // 初始透明度
    reset: true, // 每次滚动时重置动画
    viewFactor: 0.8,
  });
});

const themeOverrides: GlobalThemeOverrides = {
  Menu: {
    itemTextColor: '#fff',
    fontSize: '16px',
  },
  Button: {
    textColor: '#fff',
  },
};
function selectMenu(key: string, item: MenuOption) {
  router.push(key);
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" abstract>
    <section class="h-1000px bg-no-repeat relative" bg="100% 100%" :style="{ backgroundImage: `url(${HomeImg})` }">
      <n-menu mode="horizontal" :options="menuOptions" responsive value="home" @update:value="selectMenu" />
      <section class="mt-300px">
        <h1 class="text-center text-fff text-60px">
          数字化场景 构建专家工程
        </h1>
        <div class="flex justify-center">
          <n-button class="mr-20px">
            工程实例
          </n-button>
          <n-button>应用项目</n-button>
        </div>
      </section>
    </section>
  </n-config-provider>
  <section bg="#151515">
    <!-- <section bg="#151515" overflow-hidden text-fff class="">
      <section class="text-center text-40px text-fff mt-85px">
        平台介绍
      </section>
      <p class="text-center text-18px text-fff  mt-85px">
        一系列的基础设施和服务，加速了软件的研发过程，让软件开发变得更加高效和便捷‌
      </p>
    </section> -->

    <section overflow-hidden text-fff class="pt-120px">
      <section class="text-center text-40px text-fff  mt-85px">
        我们可以为您提供
      </section>
      <p class="text-center text-18px text-fff  mt-30px mb-100px">
        一套从0到1完整的平台开发方案，保证项目全面开发执行落地
      </p>
    </section>

    <section class="flex justify-center  overflow-hidden items-center" text="#fff" mb-120px>
      <section class="left  mr-150px">
        <h2 text-30px>
          项目框架搭建
        </h2>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          提供Easy3d三维地图框架
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          Easy2d二维地图框架
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          全景平台以及数据管理中心
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          后台管理系统
        </p>
      </section>

      <section class="right h-400px w-700px bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${Img10})` }">
      </section>
    </section>

    <section class="flex justify-center  overflow-hidden items-center" text="#fff" mb-120px>
      <section class="right h-400px w-700px bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${Img67})` }">
      </section>

      <section class="left  ml-150px">
        <h2 text-30px>
          项目技术开发与维护
        </h2>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          项目需求确认
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          UI界面设计
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          前后端功能开发
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          相关数据处理
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          系统部署上线
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          系统验收相关文档编写
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          系统运行维护
        </p>
      </section>
    </section>

    <section class="flex justify-center  overflow-hidden items-center" text="#fff" mb-120px>
      <section class="left  mr-150px">
        <h2 text-30px>
          高精度模型设计
        </h2>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          提供高精度大场景下的
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          bim/3dmax格式的模型设计
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          小模型库模型设计
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          倾斜摄影模型精细化
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          以各类型模型相互转换
        </p>
      </section>
      <section class="right h-400px w-700px bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${Img10})` }">
      </section>
    </section>

    <section class="flex justify-center  overflow-hidden items-center" text="#fff">
      <section class="right h-400px w-700px bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${Img66})` }">
      </section>
      <section class="left  ml-150px">
        <h2 text-30px>
          数据采集及处理
        </h2>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          倾斜摄影模型的采集、处理、导出、格式转换
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          全景照片的采集及处理发布
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          地区影像数据
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          地形数据的采集及处理
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          全国各地影像数据
        </p>
        <p text-20px flex items-center>
          <n-icon color="#6D8FFF" mr-10px>
            <Check></Check>
          </n-icon>
          矢量数据地形下载
        </p>
      </section>
    </section>

    <section overflow-hidden text-fff class="pt-120px">
      <section class="text-center text-40px text-fff  mt-85px">
        行业应用
      </section>
      <p class="text-center text-18px text-fff  mt-30px mb-100px">
        面向丰富的业务场景，提供整套行业和技术解决方案
      </p>
    </section>
    <section class="flex w-full flex-nowrap overflow-hidden" text="#fff">
      <div class="right w-560px h-450px bg-cover bg-no-repeat relative" :style="{ backgroundImage: `url(${Img1})` }">
        <div class="center crad flex flex-col justify-center items-center">
          <span>航空航天</span>
          <span>Aerospace</span>
        </div>
      </div>
      <div class="right flex-1 h-450px bg-cover bg-no-repeat relative" :style="{ backgroundImage: `url(${hk3})` }">
        <div class="center crad flex flex-col justify-center items-center">
          <span>航空航天</span>
          <span>Aerospace</span>
        </div>
      </div>
      <div class="right flex-1 h-450px bg-cover bg-no-repeat relative" :style="{ backgroundImage: `url(${hk2})` }">
        <div class="center crad flex flex-col justify-center items-center">
          <span>航空航天</span>
          <span>Aerospace</span>
        </div>
      </div>
      <div class="right flex-1 h-450px bg-cover bg-no-repeat relative" :style="{ backgroundImage: `url(${hk4})` }">
        <div class="center crad flex flex-col justify-center items-center">
          <span>航空航天</span>
          <span>Aerospace</span>
        </div>
      </div>
      <div class="right flex-1 h-450px bg-cover bg-no-repeat relative" :style="{ backgroundImage: `url(${hk5})` }">
        <div class="center crad flex flex-col justify-center items-center">
          <span>航空航天</span>
          <span>Aerospace</span>
        </div>
      </div>
    </section>

    <section overflow-hidden text-fff class="pt-120px">
      <section class="text-center text-40px text-fff  mt-85px">
        我们的优势
      </section>
      <p class="text-center text-18px text-fff  mt-30px mb-100px">
        覆盖全端场景，紧贴业务需求，助力企业发展
      </p>
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
