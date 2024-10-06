<script lang="ts" setup>
import type { Component } from 'vue';
import type { MenuOption } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { BookOutline as BookIcon } from '@vicons/ionicons5';

const message = useMessage();

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer',
        },
        '且听风吟',
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '嘻嘻哈哈哈',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
];

type Origin = 'left' | 'right' | 'top' | 'bottom';
function slide(origin: Origin) {
  return {
    duration: 800, // 动画持续时间
    distance: '200px', // 移动距离
    easing: 'ease-in-out', // 动画缓动效果
    origin, // 动画起始位置
    interval: 200, // 元素之间的动画间隔
  };
}

function toast() {
  message.error('Once upon a time you dressed so fine');
}

onMounted(() => {
  ScrollReveal().reveal('.left', slide('left'));
  ScrollReveal().reveal('.right', slide('right'));
});
</script>

<template>
  <n-menu mode="horizontal" :options="menuOptions" responsive />
  <n-button type="primary" @click="toast">
    你好
  </n-button>
  <div bg-amber text-amber h-2000px></div>
  <section class="flex justify-between overflow-hidden">
    <h1 class="left h-200px">
      Widget Inc.
    </h1>
    <h1 class="right h-200px">
      Widget Inc.
    </h1>
  </section>
  <section class="flex justify-between overflow-hidden">
    <h1 class="left">
      Widget Inc.
    </h1>
    <h1 class="right">
      Widget Inc.
    </h1>
  </section>
</template>

<style lang="scss">
  :deep(.v-overflow){
    justify-content: center;
  }
</style>
