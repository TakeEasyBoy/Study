<template>
  <div class="cooperate-container">
    <!-- 轮播 -->
    <CooperateBanner></CooperateBanner>
    <!-- 院校 -->
    <CooperateSchool></CooperateSchool>
    <!-- 最新排行 -->
    <div class="cooperate-ranking-now">
      <h3 class="title">
			2017最新世界大学排名
				<span class="subhead">待提供的软文</span>
			</h3>
      <ul class="ranking-now-container">
        <li>
          <h4><p>2017 QS</p><p>世界大学排名</p></h4>
          <ul class="ranking-now-list">
            <li v-for='(item,index) in schoolQSDatas' :key="index">
              <p>{{item.name}}</p>
              <b>{{item.country}}</b>
              <span :class="index==0?'red':index==1?'blue':index==3?'yellow':''">{{index+1}}</span>
            </li>
            <div class="btn-more">
              了解更多
            </div>
          </ul>
        </li>
        <li>
          <h4><p>2017 US</p><p>世界大学排名</p></h4>
          <ul class="ranking-now-list">
            <li v-for='(item,index) in schoolUSDatas' :key="index">
              <p>{{item.name}}</p>
              <b>{{item.country}}</b>
              <span :class="index==0?'red':index==1?'blue':index==3?'yellow':''">{{index+1}}</span>
            </li>
            <div class="btn-more">
              了解更多
            </div>
          </ul>
        </li>
				<li>
          <h4><p>2017 THE</p><p>世界大学排名</p></h4>
          <ul class="ranking-now-list">
            <li v-for='(item,index) in schoolTHEDatas' :key="index">
              <p>{{item.name}}</p>
              <b>{{item.country}}</b>
              <span :class="index==0?'red':index==1?'blue':index==3?'yellow':''">{{index+1}}</span>
            </li>
            <div class="btn-more">
              了解更多
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CooperateBanner from "@/components/web/CooperateBanner"
import CooperateSchool from "@/components/web/CooperateSch"

export default {
  data() {
    return {
      schoolQSDatas:[],
      schoolTHEDatas:[],
      schoolUSDatas:[]
    }
  },
  components: {
    CooperateBanner,
    CooperateSchool,
  },
  created(){
    this.getSchoolRanking();
  },
  methods:{
    getSchoolRanking(){
      this.$http.get('/frontend/college/rank')
      .then((res)=>{
        this.schoolUSDatas = res.data.data.US;
        this.schoolQSDatas = res.data.data.QS;
        this.schoolTHEDatas = res.data.data.THE;
      })
    }
  }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .cooperate-container {
    .cooperate-ranking-now {
      padding: 56px 0;
    }
    .ranking-now-container {
      overflow: hidden;
      padding-top: 33px;
      >li {
        float: left;
        height: 561px;
        border: 1px solid #09658a;
        width: 349px;
        margin-left: 85px;

        &:first-child {
          margin-left: 0;
        }

        h4 {
          height: 60px;
          background-color: #00688b;
          padding: 7px;
          color: #fff;
          font-size: 16px;
          text-align: center;

          p {
            line-height: 22px;
          }
        }
      }
    }
    .ranking-now-list {
      padding: 10px 10px 0;
      >li {
        padding-left: 30px;
        height: 20px;
        overflow: hidden;
        position: relative;
        margin-bottom: 10px;
        p {
          float: left;
          width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        b {
          width: 60px;
          display: inline-block;
          float: right;
          text-align: right;
          font-weight: normal;
        }

        span {
          display: inline-block;
          position: absolute;
          left: 0;
          top: 0;
          height: 20px;
          width: 20px;
          color: #fff;
          background-color: #bbbbbb;
          text-align: center;
          line-height: 20px;
        }

        .red {
          background-color: #f60000;
        }

        .blue {
          background-color: #00aee4;
        }

        .yellow {
          background-color: #f4a338;
        }
      }
    }

    .btn-more {
      height: 30px;
      background-color: #00aee4;
      font-size: 16px;
      text-align: center;
      line-height: 30px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }
  }
}

</style>
