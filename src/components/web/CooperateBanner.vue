<template>
  <div class="cooperate-banner-container">
    <div class="cooperate-banner">
      <Carousel autoplay v-model="sliderDefault" trigger="hover" arrow="never" :autoplay-speed="4000" class="slider-container">
        <CarouselItem v-for="(item,index) in sliderDatas" :key="item.baseUrl+index">
          <div class="slider"><img :src="item.baseUrl" alt="轮播图"></div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="cooperate-text">
      <h4>新闻动态</h4>
      <div class="cooperate-text-main">
        <h5>这是标题</h5>
        <p>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderDefault: 0,

      sliderDatas: [{
        baseUrl: '/static/image/banner1.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner2.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner3.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner4.jpg',
        link: '',
      }]
    }
  }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .cooperate-banner-container {
    height: 400px;
    overflow: hidden;
    .cooperate-banner {
      width: 800px;
      float: left;
      .ivu-carousel-dots {
        text-align: right;
        padding-right: 118px;
      }
      .ivu-carousel-dots-inside {
        bottom: 10px;
      }
      .ivu-carousel-dots li button {
        width: 30px;
        height: 4px;
      }
      .ivu-carousel-dots li.ivu-carousel-active>button {
        width: 40px;
      }
    }
    .cooperate-text {
      width: 410px;
      float: right;
      color: #000;
      h4 {
        font-size: 14px;
        text-indent: 10px;
        height: 30px;
        line-height: 30px;
        background-color: #00688b;
        color: #fff;
        letter-spacing: 1px;
      }
    }
    .cooperate-text-main {
      padding: 5px 10px 0;
      height: 370px;
      border-bottom: 1px solid #010101;
      h5 {
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
      	font-size: 12px;
      }
    }
  }
}

</style>
