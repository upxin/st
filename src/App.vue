<script setup lang="ts">
import { menuOptions } from '@/utils/menu';

const router = useRouter();
const route = useRoute();

const key = ref('/')

watch(() => route.name, (v) => {
  key.value = v
}, {
  immediate: true
})

function selectMenu(key: string) {
  router.push(key);
}
const themeOverrides: GlobalThemeOverrides = {
  Menu: {
    itemTextColor: '#fff',
    fontSize: '16px',
  },
  Button: {
    textColor: '#fff',
  },
};
const KEEP = ['Home', 'Drone', 'Map3d', 'Contact']
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" abstract>
    <n-message-provider>
      <section class="flex flex-col h-screen w-screen box-border">
        <section class="header" flex justify-between w-screen py-10px>
          <n-menu :value="key" mode="horizontal" :options="menuOptions" responsive @update:value="selectMenu" />
        </section>
        <section class="flex-1 w-screen overflow-y-auto overflow-x-hidden">
          <RouterView v-slot="{ Component }">
            <keep-alive :include="KEEP">
              <component :is="Component" :key="key" />
            </keep-alive>
          </RouterView>

          <p bg="#151515" text-fff h-38px text-center border-0 border-t-1px border-solid border="#ddd" class=" leading-38px">
            Copyright © 2022 数图网络科技有限公司 All Rights Reserved | 皖ICP备 2022014965号-1
          </p>
        </section>
      </section>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped lang="scss">
.header {
  background-color: rgba(0, 0, 0, 0.8);
}

:deep(.v-overflow) {
  width: 100vw !important;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
