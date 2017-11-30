<template>
  <div class="academy-container">
    <h3 class="title">
			热门院校推荐
			<span class="subhead">测试文字</span>
		</h3>
    <div class="academy-main">
      <ul class="academy-list">
        <li v-for="(item,index) in hotSchoolDatas" :key="item.id+index">
          <div class="academy-cover">
            <img :src="item.logo" alt="学校封面" style="width:100%;height:100%;">
          </div>
          <div class="academy-info">
            <h3>{{item.name}}</h3>
            <p>{{item.enName}}</p>
            <span>了解详情</span>
          </div>
        </li>
      </ul>
      <div class="academy-ranking">
      	<div>
          <div class="academy-ranking-title">
            <h4>
              美国综合排名 <span>TOP20:</span>
            </h4>
          </div>
          
          <ul class="academy-ranking-list">
            <li v-for="(item,index) in zhRankingDatas" :key='item.id+index'>
              {{item.name}}
            </li>
          </ul>
        </div>
        <div>
          <div class="academy-ranking-title">
            <h4>
              美国文理排名 <span>TOP20:</span>
            </h4>
          </div>
          

            <ul class="academy-ranking-list">
            <li v-for="(item,index) in wlRankingDatas" :key='item.id+index'>
              {{item.name}}
            </li>
          </ul>

        </div>
        <div>
          <div class="academy-ranking-title">
            <h4>
              美国寄宿高中 <span>TOP20:</span>
            </h4>
          </div>
          

            <ul class="academy-ranking-list">
            <li v-for="(item,index) in jsRankingDatas" :key='item.id+index'>
              {{item.name}}
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotSchoolDatas:[],
      zhRankingDatas:[],
      wlRankingDatas:[],
      jsRankingDatas:[],
    }
  },
  created(){
    this.getHotSchool();
    this.getSchoolRanking();
  },
  methods:{
    getHotSchool(){
      this.$http.get('/frontend/college/hotRecommend')
      .then((res)=>{
        this.hotSchoolDatas = res.data.data;
      })
    },
    getSchoolRanking(){
      this.$http.get('/frontend/college/top20')
      .then((res)=>{
        this.zhRankingDatas = res.data.data.usTop;
        this.wlRankingDatas = res.data.data.wlTop;
        this.jsRankingDatas = res.data.data.highTop;
      })
    }
  }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .academy-container {
    .academy-main {
      margin-top: 35px;

      .academy-list {
        overflow: hidden;
        >li {
          float: left;
          width: 290px;
          overflow: hidden;
          margin-bottom: 15px;
          margin-right: 20px;
          &:nth-child(4n){
						margin-right: 0;
          }
        }
      }
      .academy-cover {
        float: left;
        width: 164px;
        height: 109px;
        padding: 10px 30px;
        background: url('/static/image/xiangluang.jpg') no-repeat 100%;
      }
      .academy-info {
        float: right;
        width: 116px;
        color: #000;
        h3 {
          font-size: 14px;
          margin: 10px 0 5px;
        }
        span {
          display: inline-block;
          color: #fff;
          padding: 1px 7px;
          cursor: pointer;
          margin-top: 5px;
          background-color: #bbb;
        }
      }
      .academy-ranking{
        color: #000;
      	padding-top: 20px;
        >div{
          overflow: hidden;
          margin-bottom: 15px;
        }
        

        .academy-ranking-list{
          float: right;
          width: 943px;
          position: relative;
          margin-bottom: -6px;
          &:after{
            content: '';
            display: inline-block;
            position: absolute;
            left: -8px;
            height: 100%;
            width: 2px;
            background-color: #00aee9;
          }
          li{
            float: left;
            font-size: 12px;
            padding: 7px;
            display: inline-block;
            background-color: #dcdcdc;
            border: 1px solid #000;
            border-radius: 4px;
            margin-right: 6px;
            margin-bottom: 6px;
          }
        }

        .academy-ranking-title{
          width: 260px;
          float: left;
          h4{
            line-height: 56px;       
            font-size: 31px;
            font-weight: normal;
            span{
              font-size: 20px;
              letter-spacing: -1px;
            }
          }
        }

      }
    }
  }
}

</style>
