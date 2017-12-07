<template>
  <div class="web-index-container">

    <!-- 轮播 -->
    <WebSliderNav></WebSliderNav>
    <!-- 留学意义 -->
    <WebMeaning></WebMeaning>
    <!-- 留学动态 -->
    <WebTrends></WebTrends>
    <!-- 留学专区 -->
    <WebPrefecture></WebPrefecture>
    <!-- 热门院校推荐 -->
    <WebAcademy></WebAcademy>
    <!-- 公司能力 -->
    <WebCapacity></WebCapacity>
  </div>
</template>
<script>

import WebSliderNav from '@/components/web/SliderNav'
import WebMeaning from '@/components/web/Meaning'
import WebTrends from '@/components/web/Trends'
import WebPrefecture from "@/components/web/Prefecture"
import WebAcademy from "@/components/web/Academy"
import WebCapacity from "@/components/web/Capacity"
export default {
  data() {
    return {

    }
  },
  components: {
    WebSliderNav,
    WebMeaning,
    WebTrends,
    WebPrefecture,
    WebAcademy,
    WebCapacity
  },
  created(){
  }
}

</script>
<style lang="less">

.web-index-container {
  font-size: 14px;
}

</style>
