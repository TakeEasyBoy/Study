<template>
  <div class="slider-nav">
    <Carousel autoplay v-model="sliderDefault" trigger="hover" arrow="never" :autoplay-speed="4000" class="slider-container">
      <CarouselItem v-for="(item,index) in sliderDatas" :key="item.baseUrl+index">
        <div class="slider"><img :src="item.baseUrl" alt="轮播图"></div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
    	sliderDefault:0,

      sliderDatas:[{
        baseUrl:'/static/image/banner1.jpg',
        link:'',
      },{
        baseUrl:'/static/image/banner2.jpg',
        link:'',
      },{
        baseUrl:'/static/image/banner3.jpg',
        link:'',
      },{
        baseUrl:'/static/image/banner4.jpg',
        link:'',
      }]
    }
  }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .slider-nav {
    .slider{
    	width: 100%;
    	background-color: #ddd;
    }
    .slider-container{
    	.ivu-carousel-dots{
    		text-align: right;
    		padding-right: 118px;
    	}
      .ivu-carousel-dots-inside{
        bottom: 10px;
      }
    	.ivu-carousel-dots li button{
    		width: 30px;
    		height: 4px;
    	}
    	.ivu-carousel-dots li.ivu-carousel-active>button{
    		width: 40px;
    	}
    }
  }
}

</style>
