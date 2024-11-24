<script setup lang="ts">
import { menuOptions } from '@/utils/menu';

const router = useRouter();
const route = useRoute();
const initKey = route.name;

const key = computed(() => {
  return initKey;
});
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
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" abstract>
    <n-message-provider>
      <n-affix :top="0" z-1>
        <section class="header" flex justify-between w-screen py-10px>
          <n-menu :value="key" mode="horizontal" :options="menuOptions" responsive @update:value="selectMenu" />
        </section>
      </n-affix>

      <RouterView />

      <p bg="#151515" text-fff py-30px text-center border-0 border-t-1px border-solid border="#ddd">
        Copyright © 2022 数图网络科技有限公司 All Rights Reserved | 皖ICP备 2022014965号-1
      </p>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped lang="scss">
.header {
  background-color: rgba(0, 0, 0, 0.3);
}

:deep(.v-overflow) {
  width: 100vw !important;
  justify-content: center;
}
</style>
