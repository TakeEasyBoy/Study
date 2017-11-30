<template>
  <div class="intro-all">
    <div class="intro-left">
      <div class="intro-title">
        <p>简介</p>
      </div>
      <div class="intro-text">
        <div class="intro-text-one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>
        <div class="intro-text-two">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>
        <div class="intro-text-three">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>
      </div>
    </div>
    <div class="intro-right">
      <Carousel autoplay v-model="sliderDefault" trigger="hover" arrow="never" :autoplay-speed="4000" class="slider-container">
        <CarouselItem v-for="(item,index) in sliderDatas" :key="item.baseUrl+index">
          <div class="slider"><img :src="item.baseUrl" alt="轮播图"></div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderDefault: 0,

      sliderDatas: [{
        baseUrl: '/static/image/banner.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner.jpg',
        link: '',
      }]
    }
  },
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .intro-all {
    height: 402px;
    .intro-left {
      float: left;
      width: 65.73%;
      margin-right: 6px;
      border-bottom: 1px solid black;
      .intro-title {
        height: 32px;
        line-height: 32px;
        background-color: #00688b;
        color: white;
        font-size: 16px;
        p {
          margin-left: 12px;
        }
      }
      .intro-text {
        font-size: 16px;
        height: 350px;
        margin: 10px 0;
        .intro-text-two {
          margin: 34px 0;
        }
      }
    }
    .intro-right {
      float: right;
      width: 33.77%;
      height: 402px;
      img {
        width: 100%;
      }
      .slider-container {
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
    }
  }
}

</style>
