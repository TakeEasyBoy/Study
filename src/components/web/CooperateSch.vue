<template>
  <div class="cooperate-school-container">
    <h3 class="title">
			各大院校
			<!--<span class="subhead">待提供的软文</span>-->
		</h3>
    <div class="cooperate-nav">
      <ul class="cooperate-nav-main">
        <li v-for="(item,index) in schoolTypeList" :key="index" :class="item.value==defaultType?'selected':''" @click="changeSchoolType(item,index)">{{item.label}}</li>
      </ul>
      <div class="cooperate-nav-search">
        <span>院校查询：</span>
        <div class="search">
          <input type="text" class="search-input" v-model="searchKey" placeholder="请输入您要查询的院校" @keydown.enter='getSchoolList'>
          <Button class="search-btn" @click="getSchoolList">搜 索</Button>
        </div>
      </div>
    </div>
    <ul class="cooperate-list">
    	<li v-for="(item,index) in schoolListDatas" :key="index">
    		<div class="cooperate-logo">
                <img :src="item.logo" alt="学校封面" style="width:100%;height:100%;">
    		</div>
    		<div class="cooperate-info">
    			<h4>{{item.name}}</h4>
    			<h5>{{item.enName}}</h5>
    			<span>{{item.cost}} 关注</span>
    			<div class="overflow:hidden;">
    				<div class="btn-default">
    					方案
    				</div>
    				<div class="btn-error">
    					咨询
    				</div>
    			</div>
    		</div>
            <div class="cooperate-college-detail">
                <p>地区:{{item.area}}</p>
                <p>学校性质:{{item.natures}}</p>
                <p>总费用:{{Math.floor(item.cost/1000)/10}}万 <span>录取率:{{item.acceptanceRate}}</span></p>
                <p>排名:{{item.rank}}</p>
                <p>教育部认证: {{item.authentication}}</p>
            </div>
    	</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchKey: '',

      defaultType:'全部',

      schoolTypeList:[{
        value:'全部',
        label:'全部',
      },{
        value:'大学',
        label:'大学',
      },{
        value:'中学',
        label:'中学',
      },{
        value:'艺术学院',
        label:'艺术学院',
      },{
        value:'文理大学',
        label:'文理大学',
      },{
        value:'社区大学',
        label:'社区大学',
      }],

      schoolListDatas:[],

    }
  },
  methods:{
    changeSchoolType(item,index){
        this.defaultType = item.value;
        this.getSchoolList();
    },
    getSchoolList(){
        /*this.$http.get('/frontend/college',{
            params:{
                keywords:this.searchKey,
                type:this.defaultType
            }
        }).then((res)=>{
//              console.log(res.data.data);
            this.schoolListDatas = res.data.data.rows;
        })*/
          //请求各大院校的时候,不需要传参数
          this.$http.get('/frontend/college')
              .then((res)=>{
              console.log(res.data.data);
              this.schoolListDatas = res.data.data.rows;
          })
    }
  },
  created(){
    this.getSchoolList();
//    console.log(this.$route.params.keywords);
  }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .cooperate-school-container {
    padding: 56px 0 35px;

    .cooperate-nav {
      overflow: hidden;
      position: relative;
      padding: 25px 0 0;
      &:after {
        content: '';
        height: 1px;
        width: 100%;
        background-color: #066881;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 0;
      }
    }
    .cooperate-nav-main {
      float: left;
      overflow: hidden;
      font-size: 20px;
      color: #000;
      >li {
        float: left;
        padding: 13px 16px;
        cursor: pointer;
      }
      .selected {
        color: #05aae4;
        position: relative;
        &:after {
          content: '';
          width: 100%;
          height: 2px;
          background-color: #05aae4;
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 10;
        }
      }
    }

    .cooperate-nav-search {
      width: 410px;
      float: right;
      font-size: 20px;
      color: #000;
      line-height: 34px;
      overflow: hidden;
      padding-top: 10px;
      span {
        float: left;
      }
      .search {
        width: 304px;
        height: 30px;
        float: right;
        border: 2px solid #01aee6;
        overflow: hidden;
      }
      .search-input {
        border: none;
        outline: none;
        height: 25px;
        line-height: 25px;
        width: 230px;
        text-indent: 4px;
        font-size: 16px;
        color: #495060;
        float: left;
      }
      .search-btn {
        float: right;
        border: none;
        border-radius: 0;
        background-color: #01aee6;
        font-size: 16px!important;
        height: 26px;
        line-height: 26px;
        padding: 1px 13px;
        color: #fff;
        width: 64px;
      }
    }
    .cooperate-list{
    	overflow: hidden;
    	>li{
    		float: left;
    		width: 290px;
    		margin-right: 20px;
    		margin-top: 15px;
    		overflow: hidden;
             /*定位属性*/
             position:relative;
    		&:nth-child(4n){
    			margin-right: 0;
    		}
    	}
        .cooperate-college-detail{
            width: 162px;
            position: absolute;
            /*left: -8px;*/
            top:18px;
            opacity: 0;
            /*padding: 12px;*/
            overflow: hidden;
            color: #fff;
            font-size: 12px;
            box-shadow: 5px 3px 10px 1px rgb(0,0,0);
            background: -webkit-linear-gradient(#545454 ,#333);
            -webkit-transition: all .5s;
            -moz-transition: all .5s;
            -ms-transition: all .5s;
            -o-transition: all .5s;
            transition: all .5s;
            /*display:none;*/
            p{
                color:#fff;
                text-indent:5px;
                width: 100%;
                text-overflow: hidden;
                white-space: nowrap;
            }
            &:hover{
                opacity: 0.8;
             }
        }
    }
    .cooperate-logo{
    	height: 109px;
    	width: 164px;
    	float: left;
        padding: 10px 30px;
    	background: url('/static/image/xiangluang.jpg') 100% no-repeat;
    }
    .cooperate-info{
			width: 114px;
			float: right;
			h4{
				font-weight: normal;
				font-size: 14px;
				margin: 0 0 9px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			h5{
				font-size: 12px;
				line-height: 16px;
				letter-spacing: -1px;
			}
			span{
				display: inline-block;
				text-align: right;
				width: 100%;
				line-height: 31px;
			}
    }
    .btn-default{
    	color: #fff;
    	width: 50px;
    	height: 16px;
    	float: left;
    	line-height: 16px;
    	background-color: #bbb;
    	text-align: center;
    	cursor: pointer;
    }
    .btn-error{
    	color: #fff;
    	width: 50px;
    	height: 16px;
    	float: right;
    	line-height: 16px;
    	background-color: #fe0000;
    	text-align: center;
    	cursor: pointer;
    }
  }
}

</style>
