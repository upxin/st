<script setup lang="ts">
import Tab from './Tab.vue'
defineOptions({
  name: 'Drone'
})

// 获取图片路径
const images = import.meta.glob('./*.png', { eager: true });
const imageList = Object.values(images).map(item => item.default);
function getImg(tag: string, i: string | number) {
  return imageList.find((item: string) => item.includes(`${tag}${i}`))
}

const tabIndex1 = ref(0)
const tabIndex2 = ref(0)

const sImg = computed(() => {
  return imageList.find((item: string) => item.includes(`s${tabIndex1.value}`))
})
const tImg = computed(() => {
  return imageList.find((item: string) => item.includes(`t${tabIndex2.value+1}`))
})

function tabSelected1(i: number) {
  tabIndex1.value = i
}
function tabSelected2(i: number) {
  tabIndex2.value = i
}

const vList = [
  { title: '2.5维基础地图[1]', content: '自带全球高程信息，让平面地图立体化。实用的地理信息，使任务规划更合理。' },
  { title: '一键全景，实时回传', content: '无人机“一键全景”拍摄完成后，全景图可实时上传到大疆司空 2，并自动显示在对应的地理位置上，便于团队成员第一时间了解现场的整体状况，助力高效指挥。' },
  { title: '云端建图', content: '支持可见光或红外建图，无论白天还是黑夜，都可高效获取任务区域内最新的影像数据。通过可见光建图，单架次即可获取约 1.5 平方公里的清晰地理影像[2]。' },
  { title: '实时直播', content: '支持多路无人机低延时高清画面直播，实时了解一线动态，即时掌控全局。' }
]
const tabs2 = [
  { title: '标注与同步', content: '可在遥控器、移动设备和电脑端标记目标、规划路线、分配作业区域，并实时同步。指令清晰，分工明确。' },
  { title: '团队信息共享', content: '团队成员位置、无人机状态、任务、地图等信息，可以在多端实时共享，团队协作从未如此简单。' },
  { title: '直播分享', content: '支持将直播内容分享至业务相关人员，让协作更顺畅。' }
]

onMounted(()=>{
  const video = document.querySelector('#bigVideo') as HTMLVideoElement;
  if (video) {
    video.play().catch(error => {
      console.error('自动播放失败:', error);
    });
  }
})

onActivated(()=>{
  const video = document.querySelector('#bigVideo') as HTMLVideoElement;
  if (video) {
    video.play().catch(error => {
      console.error('自动播放失败:', error);
    });
  }
})
</script>

<template>
  <section class="bg-#000 text-fff pb-30px">
    <div
      class="w-screen h-[1290px] bg-#141414 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${getImg('i', '5')})`, }">
      <video id="bigVideo" loop autoplay muted playsinline x5-playsinline="true" class="w-screen h-[900px]"
        style="width: 2295.11px; height: 1291px; object-fit: contain;">
        <source type="video/mp4; codecs=&quot;avc1.4D401E, mp4a.40.2&quot;"
          data-layzr-src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/af6ca775-831c-4a88-848c-d48f27de6a86.mp4"
          src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/af6ca775-831c-4a88-848c-d48f27de6a86.mp4">
      </video>
    </div>


    <div class="flex flex-col items-center justify-center min-h-screen p-5">
      <h1 class="text-center mb-5 text-2xl text-white" w-896px pb-20px pt-60px>
        一站式无人机任务管理云平台，带来全面、实时的态势感知，实现团队信息高效聚合、处理与同步。
      </h1>
      <div class="grid grid-cols-2 gap-5 text-fff">
        <div class="w-[592px] h-[400px] bg-#141414  "
          :style="{ backgroundImage: `url(${getImg('i', '2')})`, backgroundSize: 'cover', }">
          <h1 class=" text-center py20px">虚拟座舱实时态势感知</h1>
        </div>
        <div class="w-[592px] h-[400px] bg-#141414 flex  flex-col justify-center items-center "
          :style="{ backgroundImage: `url(${getImg('i', '2')})`, backgroundSize: 'cover', }">
          <h1 class=" text-center">私有化部署</h1>
          <h3 data-aos="none" data-aos-once="true"
            class="text-[72px] font-semibold leading-[80px] max-w-[693px] bg-gradient-to-r from-[#66c6ff] to-[#1fa5fe] bg-clip-text text-transparent pb-[0.1em] mb-[-0.1em] mt-10px">
            更安全
          </h3>
        </div>
        <div class="w-[592px] h-[400px] bg-#141414 flex  flex-col justify-center items-center "
          :style="{ backgroundImage: `url(${getImg('i', '3')})`, backgroundSize: 'cover', }">
          <h1 class=" text-center">一站式管理</h1>
          <h3 data-aos="none" data-aos-once="true"
            class="text-[72px] font-semibold leading-[80px] max-w-[693px] bg-gradient-to-r from-[#66c6ff] to-[#1fa5fe] bg-clip-text text-transparent pb-[0.1em] mb-[-0.1em] mt-10px">
            更高效
          </h3>
        </div>
        <div class="w-[592px] h-[400px] bg-#141414  "
          :style="{ backgroundImage: `url(${getImg('i', '4')})`, backgroundSize: 'cover', }">
          <h1 class=" text-center py20px">多类精细化航线规划</h1>
        </div>
      </div>

      <div
        class="w-screen h-[900px] bg-#141414 flex flex-col justify-center items-center mt-40px bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${getImg('i', '5')})`, }">
        <h1 class=" text-center text-40px">全面、实时的态势感知</h1>
      </div>
    </div>

    <h1 class=" text-center text-40px pb-20px pt-60px">虚拟座舱</h1>
    <section class="w-screen flex flex-col items-center">
      <div class="flex w-1200px items-center justify-between">
        <Tab @tab-selected="tabSelected1"></Tab>
        <transition name="fade">
          <section v-if="sImg" :key="sImg" :style="{ backgroundImage: `url(${sImg})` }"
            class="bg-cover bg-center bg-no-repeat w-[592px] h-[333px]"></section>
        </transition>
      </div>
    </section>

    <h1 class=" text-40px text-center pb-40px pt-60px">全面掌握作业环境</h1>
    <section class="w-screen flex flex-col items-center pb-40px" v-for="(item, index) in vList">
      <section class=" flex justify-between w-1200px" :class="{ 'flex-row-reverse': index & 1 }">
        <div class="h-330px w-592px bg-#141414 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${getImg('v', index + 1)})`, }"></div>
        <div class="w-60px"></div>
        <div class="flex flex-col justify-center w-580px">
          <h2 class="pb-20px text-30px">{{ item.title }}</h2>
          <p class="text-16px">{{ item.content }}</p>
        </div>
      </section>
    </section>

    <h1 class=" text-center text-40px pb-20px pt-60px">团队高效协作</h1>
    <section class="w-screen flex flex-col items-center">
      <div class="flex w-1200px items-center justify-between">
        <transition name="fade">
          <section v-if="sImg" :key="sImg" :style="{ backgroundImage: `url(${tImg})` }"
            class="bg-cover bg-center bg-no-repeat w-[592px] h-[333px]"></section>
        </transition>

        <Tab @tab-selected="tabSelected2" :tabs="tabs2">
        </Tab>
      </div>
    </section>

    <h1 class="text-center text-40px pb-20px pt-128px">云端建模</h1>
    <h4 class="text-center text-16px">作业成果自动回传至司空 2 后，可在司空 2 实现各类可见光二三维实景模型的云端重建，精准高效，并可将重建结果直接应用于司空 2 项目中。</h4>
    <div :style="{ backgroundImage: `url(${getImg('b', '1')})`, }" class="w-1200px h-675px mx-auto"></div>

    <h1 class="text-center text-40px pb-20px pt-128px">航线规划及管理</h1>
    <div :style="{ backgroundImage: `url(${getImg('b', '2')})`, }" class="w-1200px h-675px mx-auto"></div>
  </section>
</template>
