<template>
  <div class="prefecture-container">
    <h3 class="title">
			留学专区
			<!--<span class="subhead">测试文字</span>-->
		</h3>
    <ul class="perfecture-list">
      <li class="perfecture-each" v-for="(item,index) in dataList" :key="item.cname+index">
        <div @click="jumpTo(index)" class="perfecture-each-bg">
          <img :src="item.cover"  alt="背景图">
          <div class="perfecture-each-intro">
            <h5>项目优势</h5>
            <p>
              {{item.introduce}}
            </p>
          </div>
          <div class="perfecture-each-title">
            {{item.cname}}
          </div>
        </div>
        <div class="perfecture-object">
        	<h5>适合人群<span @click="jumpTo(index)">MORE</span></h5>
        	<p>
        		{{item.requirement}}
        	</p>
        </div>
      </li>
      
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coverList:['/static/image/jiaohuansheng.png','/static/image/zhuanshengpic.png','/static/image/xiaxiaopic.png','/static/image/zhishengpic.png','/static/image/jiaohuanshengpic.png'],
      dataList:[],
      dataUrl:['./summersch','./exchangestu','./undergraduate','./ueec','./freshman']
    }
  },
  created(){
    this.getPrefecture();
  },
  methods:{
    getPrefecture(){
      this.$http.get('/frontend/category/list')
      .then((res)=>{
        res.data.data.forEach((item,index)=>{
          this.$set(item,'cover',this.coverList[index]);
        });
//          console.log(res.data.data);
        this.dataList = res.data.data;
      })
    },
    // 跳转到指定页面
    jumpTo(index){
//        console.log(index);
        this.$router.push(this.dataUrl[index]);
    }
  }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .prefecture-container {
    height: 664px;
    padding-top: 58px;
    .perfecture-list {
      overflow: hidden;
      margin-top: 33px;
    }
    .perfecture-each {
      float: left;
      width: 228px;
      height: 480px;
      margin-left: 20px;

      &:first-child{
      	margin-left: 0;
      }
    }
    .perfecture-each-title {
      background-color: #fff;
      opacity: 0.9;
      height: 40px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: 16px;
      line-height: 40px;
      color: #000;
    }
    .perfecture-each-intro {
      height: 260px;
        width: 100%;
        position: absolute;
        left: 0;
        background-color: #fff;
        opacity: 0.9;
        padding: 12px;
        overflow: hidden;
        color: #000;
        font-size: 12px;
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
      h5 {
        font-weight: bold;
      }
    }
    .perfecture-each-bg {
      position: relative;
      height: 376px;
      cursor: pointer;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }

      &:hover {
        .perfecture-each-title {
          display: none;
        }
        .perfecture-each-intro {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          bottom: 0;
        }
      }
    }
    .perfecture-object{
    	color: #000;
    	font-size: 12px;

    	h5{
    		font-weight: bold;
    		margin: 8px 0;
    		position: relative;
    		span{
    			color: red;
    			float: right;
    			cursor: pointer;
    		}
    		&:after{
    			content: '';
    			width:100%;
    			height: 1px;
    			background-color: #000;
    			display: inline-block;
    			position: absolute;
    			left: 0;
    			bottom: -4px;
    		}
    	}
    }
  }
}

</style>
