<template>
  <div class="cooperate-banner-container">
    <div class="cooperate-banner">
      <img src="/static/image/map.jpg" alt="">
    </div>
    <div class="cooperate-text">
      <h4>地址信息</h4>
      <div class="cooperate-text-main">
        <h5>北京总部</h5>
        <p>中心金桥北京(BEIJING HQ)</p>
        <p>联系电话(TEL)：+8601-82938420</p>
        <p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p><p>联系电话(TEL)：+8601-82938420</p>
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
