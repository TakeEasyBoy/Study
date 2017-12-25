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
            <h5>{{areaTwo.length?getCurType(this.areaTwo[0].type):"最新动态"}}<span @click="moreFuncTwo">MORE</span></h5>
            <p v-for="(item,index) in areaTwo">
                {{item.content}}
            </p>
          </div>
          <div>
            <h5>{{areaThree.length?getCurType(this.areaThree[0].type):"最新录取"}}<span @click="moreFuncThree">MORE</span></h5>
              <p v-for="(item,index) in areaThree">
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
	    //区域1当前显示状态
	    currentDataLists:[],
	    //用于存放各个却与显示的数据
        areaOne:[],
	    areaTwo:[],
	    areaThree:[],
        //用于存放显示的标题
        areaOneTitle:'',
        areaTwoTitle:'',
        areaThreeTitle:'',
    }
  },
    methods:{
  	    getCurType(type){
  	    	let curType = ''
  	    	switch (type){
                case 1:
                	curType = '新闻动态';
                	break;
		        case 2:
			        curType = '最新录取';
			        break;
		        case 3:
			        curType = '留学资讯';
			        break;
            }
            return curType;
        },
	    getStudyAbord(type){
		    this.$http.get('/frontend/article/list')
			    .then((res)=>{
				    if(type == "2"){
					    this.areaOne = res.data.data.enroll;
					    this.areaTwo = res.data.data.information;
					    this.areaThree = res.data.data.news;
					    return;
				    }else if(type == "3"){
					    this.areaOne = res.data.data.information;//资讯3
					    this.areaTwo = res.data.data.news;//动态 1
					    this.areaThree = res.data.data.enroll;//录取2
					    return;
				    }else{
					    this.areaOne = res.data.data.news;//资讯3
					    this.areaTwo = res.data.data.information;//动态 1
					    this.areaThree = res.data.data.enroll;//录取2
                    }

			    })
	    },
        //位置二同位置一的交换
	    moreFuncTwo(){
  	    	let temp = [];
  	    	let type = '';
  	    	//当前状态的类型
  	    	type = this.areaTwo[0].type;
  	    	//缓存当前的数据
            temp = this.areaTwo;
            //将要区域1的数据替换到区域2
            this.areaTwo = this.areaOne;
            //将区域1的数据换成点击前的数据
            this.areaOne = temp;
            this.currentDataLists = temp;
            //在新闻详情页面的时候，页面需要跳转到新闻列表
            this.$router.push({path:'/infolist',query:{type:type}});
        },
        //位置三同位置一的交换
	    moreFuncThree(){
            let temp = [];
		    let type = '';
		    //当前状态的类型
		    type = this.areaThree[0].type;
            temp = this.areaThree;
            this.areaThree = this.areaOne;
            this.areaOne = temp;
            this.currentDataLists = temp;
            //在新闻详情页面的时候，页面需要跳转到新闻列表
		    this.$router.push({path:'/infolist',query:{type:type}});
	    },

    },
    created(){
        console.log(this.$route.query);
	    let type = this.$route.query.type;
	    this.curType = type;
	    this.getStudyAbord(type);
    },
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
