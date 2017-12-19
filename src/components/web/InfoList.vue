<template>
  <div class="info-list-container">
    <div class="info-list-banner"></div>
    <!-- 资讯 -->
    <div class="info-list">
        <h3 class="title">
			资讯{{$route.fullPath.indexOf('details')!=-1?'详情':''}}
            <span class="subnav">
                当前位置：
                <a href="#" @click.prevent="$router.push('/')">首页</a>
                > 留学资讯
                {{$route.fullPath.indexOf('details')!=-1?'> 资讯详情':''}}
            </span>
        </h3>
      <div class="info-list-main">
      	<div class="info-list-list">
      		<router-view :currentDataLists="currentDataLists"></router-view>
      	</div>
        <div class="info-recommend">
          <div>
            <h5>最新动态<span @click="moreFuncTwo">MORE</span></h5>
            <p v-for="(item,index) in changeStatusTwo?areaTwo:informations">
                {{item.content}}
            </p>
          </div>
          <div>
            <h5>最新录取<span @click="moreFuncThree">MORE</span></h5>
              <p v-for="(item,index) in changeStatusThree?areaThree:enrolls">
                  {{item.content}}
              </p>
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
        enrolls:[],
        news:[],
        informations:[],
	    //当前状态
	    currentDataLists:[],
	    //区域2 3,显示其他
	    dataLists:[],
        areaOne:[],
	    areaTwo:[],
	    areaThree:[],
        //更新当前区域的标志
        changeStatusTwo:false,
        changeStatusThree:false,
    }
  },
    methods:{
  	    getCurrentType(){
        },

  	    getStudyAbord(){
	        this.$http.get('/frontend/article/list')
		        .then((res)=>{
			        console.log(res.data.data);
			        this.enrolls = res.data.data.enroll;//录取
			        this.news = res.data.data.news;//动态
			        this.informations = res.data.data.information;//资讯
                    this.areaOne = this.informations;
		        })
        },
	    moreFuncTwo(){
  	    	let temp = [];
  	    	if(!this.changeStatusTwo){
		        this.changeStatusTwo = true;
		        //保存当前第二区域的数据,第一次点击的时候为空
                if(!this.areaTwo){
	                temp = this.areaTwo;
                }else{
                	temp = this.news;
                }
		        //第二区域数据更新,同第一区域的数据进行交换
		        this.areaTwo = this.areaOne;
		        //更新路由中的数据
		        this.currentDataLists = temp;
            }else{

		        temp = this.areaTwo;
		        this.areaTwo = this.currentDataLists;
		        this.currentDataLists = temp;
            }

        },
	    moreFuncThree(){
  	    	let temp = []
		    if(!this.changeStatusThree){
			    this.changeStatusThree = true;

			    //保存当前第二区域的数据,第一次点击的时候为空
			    if(!this.areaThree){
				    temp = this.areaThree;
			    }else{
				    temp = this.news;
			    }
			    //第二区域数据更新,同第一区域的数据进行交换
			    this.areaThree = this.areaOne;
			    //更新路由中的数据
			    this.currentDataLists = temp;
		    }else{
			    temp = this.areaThree;
			    this.areaThree = this.currentDataLists;
			    this.currentDataLists = temp;
		    }
	    },

    },
    created(){
		this.getStudyAbord();
    },
    mounted(){
//  	    this.getStudyAbord();
    }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .info-list-container {
    .info-list-banner {
      height: 400px;
      background: url('/static/image/banner_info.jpg') no-repeat;
      background-size: 100% 100%;
      background-position: center;
    }
    .info-list {
      padding: 56px 0;
    }
    .subnav {
      float: right;
      font-size: 14px;
      color: #808080;
      vertical-align: baseline;
      line-height: 48px;
      >a {
        color: #808080;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .info-list-main {
      margin-top: 40px;
      overflow: hidden;
      background: url('/static/image/diwen1.png') no-repeat right bottom;
      background-size: 50%;
    }
    .info-list-list {
      width: 922px;
      float: left;
      ul {
        padding: 4px 18px;
        height: 560px;
        border-bottom: 1px solid #999;
      }
      li {
        height: 30px;
        line-height: 30px;
        color: #000;
        font-size: 16px;
        overflow: hidden;
				cursor: pointer;
        >p {
          width: 650px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          float: left;
        }
        >span {
          float: right;
        }
      }
    }
    .info-recommend {
      width: 288px;
      float: right;
      >div{
      	height: 214px;
      	overflow: hidden;
      	margin-bottom: 10px;
      }
      p{
      	padding: 7px 19px;
      	line-height: 16px;
      	font-size: 12px;
      	color: #000;
      }
    }
    h5 {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      background-color: #00688b;
      color: #fff;
      text-indent: 19px;
      font-weight: normal;
      span{
      	font-size: 14px;
      	cursor: pointer;
      	float: right;
      	margin-right: 18px;
      }
    }
  }
}

</style>
