<template>
  <div class="trend-container">
    <h3 class="title">
			留学动态
			<span class="subhead">“留学” 需要专业团队为您保驾护航</span>
		</h3>
    <div class="main">
      <div class="trend-new">
        <div class="trend-nav">
          最新动态
          <span @click="$router.push('/infolist')">MORE</span>
        </div>
        <ul class="trend-content">
          <li v-for="(item,index) in recentNews">
            <h3 class="trend-title">
						{{item.title}}
						</h3>
            <p class="trend-intro">
              {{item.content}}
              <span class="trend-intro-more">
	            		MORE
	            	</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="trend-other">
      	<div class="trend-other-main">
      		<div class="trend-other-cover">
      			<div class="trend-other-inline"></div>
      		</div>
      		<div class="trend-other-content">
      			<h4>留学资讯<span>MORE</span></h4>
      			<p>{{abroadInfo.content}}</p>
      		</div>
      	</div>
      	<div class="trend-other-main">
      		<div class="trend-other-cover1">
      			<div class="trend-other-inline1"></div>
      		</div>
      		<div class="trend-other-content">
      			<h4>最新录取<span>MORE</span></h4>
      			<p>{{newOffer.content}}</p>
      		</div>
      	</div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recentNews:[],
      abroadInfo:{},
      newOffer:{}
    }
  },
  methods:{
    getTrends(){
      this.$http.get('/frontend/article/list')
      .then((res)=>{
        if (res.data.status == 200) {
          this.recentNews = res.data.data.news;
          this.abroadInfo = res.data.data.information[0];
          this.newOffer = res.data.data.enroll[0];
        }
      })
    }
  },
  created(){
    this.getTrends();
  },
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .trend-container {
    height: 520px;
    /* background-color: #efefef; */
    overflow: hidden;
    .main {
      padding-top: 40px;
      overflow: hidden;
    }
    .trend-new {
      float: left;
      width: 605px;
    }
    .trend-other {
      float: right;
      width: 580px;
    }
    .trend-nav {
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      background-color: #00688b;
      color: #fff;
      height: 40px;
      line-height: 40px;
      padding: 0 11px;
      overflow: hidden;

      span {
        float: right;
        font-weight: normal;
        cursor: pointer;
      }
    }
    .trend-content {
      color: #000;
      padding: 0 11px;
      >li:after {
        content: '';
        display: inline-block;
        height: 1px;
        width: 100%;
        background-color: #000;
      }
    }
    .trend-title {
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    .trend-intro {
      position: relative;
      line-height: 18px;
      height: 54px;
      overflow: hidden;
    }
    
    .trend-intro::after {
      content: "......";
      font-weight: bold;
      position: absolute;
      z-index: 10;
      display: inline-block;
      background-color: #fff;
      bottom: 0;
      right: 0;
      padding-right: 160px;
    }

    .trend-content>li:last-child .trend-intro{
    	position: relative;
      line-height: 18px;
      height: 36px;
      overflow: hidden;
    }
    .trend-intro-more {
      position: absolute;
      color: #d00000;
      bottom: 0;
      right: 0;
      font-size: 14px;
      z-index: 11;
      cursor: pointer;
    }
		
		.trend-other-main{
			margin-top: 35px;
			overflow: hidden;
			&:first-child{
				margin-top: 0;
			}
		}
    .trend-other-cover{
    	float: left;
    	height: 202px;
    	width: 300px;
    	background: url('/static/image/zixuntu.png');
      position: relative;
    }
    .trend-other-cover1{
      float: left;
      height: 202px;
      width: 300px;
      background: url('/static/image/luqutu.png');
      position: relative;
    }
    .trend-other-inline{
      width: 207px;
      height: 202px;
      background: url('/static/image/zixun.png');
      margin: 0 auto;
    }
    .trend-other-inline1{
      width: 207px;
      height: 202px;
      background: url('/static/image/luqu.png');
      margin: 0 auto;
    }
    .trend-other-content{
    	width: 252px;
    	height: 202px;
    	float: right;
    	color: #000;
    	h4{
    		font-size: 12px;
    		font-weight: normal;
    		line-height: 12px;
    		margin-bottom: 16px;
    		position: relative;

    		&:after{
    			content: '';
    			height: 1px;
    			width: 100%;
    			display: inline-block;
    			background-color: #000;
    			position: absolute;
    			left: 0;
    			bottom: -8px;
    		}
    		span{
    			color: red;
					float: right;
					cursor: pointer;
    		}
    	}
    }
  }
}

</style>
