<template>
  <div class="flex" style="width: 500px;">
    <div class="relative bg-#cccc" style="width: 1px;">
      <div class="absolute bg-white transition-transform duration-300"
        :style="{ transform: `translateY(${activeTab * 120}px)`, height: '120px', width: '4px' }"></div>
    </div>
    <div class="flex flex-col">
      <div v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)"
        class="cursor-pointer p-4 transition-all duration-300 box-border" style="height: 120px;">
        <div :class="{
          'transition-all duration-300': true,
          'text-white': activeTab === index,
          'text-gray-500': activeTab !== index,
        }" :style="{ fontSize: activeTab === index ? '1.5rem' : '1.25rem' }">
          {{ tab.title }}
        </div>
        <p :style="{ visibility: activeTab === index ? 'visible' : 'hidden', opacity: activeTab === index ? 1 : 0 }"
          class="text-sm text-#ddd mt-2 transition-opacity duration-500">
          {{ tab.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义要发出的事件
const emit = defineEmits(['tab-selected'])

interface Tab {
  title: string;
  content: string;
}

interface Props {
  tabs?: Tab[];
}

const props = withDefaults(defineProps<Props>(), {
  tabs: [
    { title: '基础操控', content: '通过键盘鼠标，可轻松控制飞行器和云台。' },
    { title: '画面控制', content: '通过视角跟随模式或框选变焦等快捷操作，可高效控制画面。' },
    { title: '指点飞行', content: '一键设置目标点后，司空 2 将绘制飞行路径，让飞行器快速且安全地飞向目标点。' },
    { title: '智能环绕', content: '选择任一位置或标注点作为目标点后，飞行器将环绕并自动看向该目标点，高效安全。' },
  ]
})


// 初始化为第一个选项卡
const activeTab = ref(0)

// 选择选项卡时触发事件
function selectTab(index) {
  activeTab.value = index
  emit('tab-selected', index)
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
