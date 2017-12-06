<template>
  <div class="intro-all">
    <div class="intro-left">
      <div class="intro-title">
        <p>简介</p>
      </div>
      <div class="intro-text">
       <!-- <div class="intro-text-one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>
        <div class="intro-text-two">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>
        <div class="intro-text-three">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>-->
		  <div class="intro-text-one">
			  &emsp;&emsp;{{introductions}}
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
			baseUrl: '/static/image/bannercolle1.jpg',
			link: '',
		}, {
			baseUrl: '/static/image/bannercolle2.jpg',
			link: '',
		}, {
			baseUrl: '/static/image/bannercolle3.jpg',
			link: '',
		}],
		//banner介绍文字
		introductions:'',
		//根据路由找对应的ID,默认为1
		queryType:1
    }
  },
    methods:{
	    getIntro(id){
		    this.$http.get(`/frontend/category/info?cateId=${id}`)
			    .then((res)=>{
				     this.introductions = res.data.data.info.introduce;
//                    console.log(res.data.data.info);
			    })
	    },
		//获取导航栏对应的跳转
		getCurrentPath(item){
			switch (item){
				case 'Summersch':
					this.queryType = 1;
					break;
				case 'Exchangestu':
					this.queryType = 2;
					break;
				case 'Undergraduate':
					this.queryType = 3;
					break;
				case 'Ueec':
					this.queryType = 4;
					break;
				case 'Freshman':
					this.queryType = 5;
					break;
				default:
					break;
			}
	    	return this.queryType;
		}
    },
    created(){
  		let query = this.$route.name;
	    this.getIntro(this.getCurrentPath(query));
    }
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
