<template>
  <div class="cooper-all">
  	<div class="clearfix"></div>
    <h3 class="title">合作院校</h3>
		<div class="cooper-container">
			<div class="cooper-header">
				<ul class="cooper-select">
					<li v-for="(item,index) in title" @click="selectChange(item,item.index)">
                         <span :class="item.isActive ? 'active' : ''">{{item.navInfo}}</span>
                     </li>
				</ul>
				<div class="cooper-btn">
					<Button class="cooper-btns" @click="sortRank">综合排名</Button>
					<Button class="cooper-btns" @click="sortFee">总费用</Button>
					<Button class="cooper-btns" @click="sortHot">人气</Button>
					<Button class="cooper-btns">筛选</Button>
				</div>
				<div class="cooper-input">
					<span class="cooper-span">院校查询：</span>
					<input type="text" class="input-box" v-model="searchKeywords" @keyup.enter="searchSchool(searchKeywords)" placeholder="请输入要查询的院校"></input>
					<button class="input-btn" @click="searchSchool(searchKeywords)">查询</button>
				</div>
			</div>

			<div class="cooper-content">
				<AllSchool :index = 'index' :searchDataList="searchDataList"></AllSchool>
				<University :index = 'index' :searchDataList="searchDataList"></University>
				<MiddleSchool :index = 'index' :searchDataList="searchDataList"></MiddleSchool>
				<ArtsSchool :index = 'index' :searchDataList="searchDataList"></ArtsSchool>
				<ScienceSchool :index = 'index' :searchDataList="searchDataList"></ScienceSchool>
				<CommunitySchool :index = 'index' :searchDataList="searchDataList"></CommunitySchool>
			</div>
		</div>
  </div>
</template>
<script>
import AllSchool from '@/components/web/AllSchool';
import University from '@/components/web/University';
import MiddleSchool from '@/components/web/MiddleSchool';
import ArtsSchool from '@/components/web/ArtsSchool';
import ScienceSchool from '@/components/web/ScienceSchool';
import CommunitySchool from '@/components/web/CommunitySchool';
export default {
  data() {
    return {
    	title: [{
        navInfo: '全部',
        isActive: true,
        index:0
      }, {
        navInfo: '大学',
        isActive: false,
        index:1
      }, {
        navInfo: '中学',
        isActive: false,
        index:2
      }, {
        navInfo: '艺术学院',
        isActive: false,
        index:3
      }, {
        navInfo: '文理学院',
        isActive: false,
        index:4
      },{
        navInfo: '社区大学',
        isActive: false,
        index:5
      }],

//		isActive:true,
      	index:0,
		searchKeywords:'',
        searchDataList:[]
    }
  },
  components:{
  	AllSchool,
  	University,
  	MiddleSchool,
  	ArtsSchool,
  	ScienceSchool,
  	CommunitySchool
  },
  methods:{
  	/**
  	 * [选择不同学校]
  	 * @作者     王柳
  	 * @日期     2017-11-07
  	 */
		selectChange(item,index){
		//  		console.log(item);
			this.index = index;
			// console.log(this.index);
            for(let i = 0;i<this.title.length;i++){
	            this.title[i].isActive = false;
            }
            this.title[index].isActive = true;
		},
	  //学校搜索
	  searchSchool(keywords){
		  this.$http.get(`/frontend/college?keywords=${keywords}`)
			  .then((res)=>{
				  // console.log(res.data.data);
				  this.searchDataList = res.data.data.rows
			  })
	  },
	  //综合排名
	  sortRank(){
			this.$http.get(`/frontend/category/info?cateId=${this.$route.query.id}&sort=rank`)
                .then((res)=>{
                	// console.log(res.data.data.colleges.rows);
	                this.searchDataList = res.data.data.colleges.rows
                })
	  },
	  //总费用
	  sortFee(){
		  this.$http.get(`/frontend/category/info?cateId=${this.$route.query.id}&sort=cost`)
			  .then((res)=>{
				  // console.log(res.data.data.colleges.rows);
				  this.searchDataList = res.data.data.colleges.rows
			  })
	  },
	  //人气
	  sortHot(){
		  this.$http.get(`/frontend/category/info?cateId=${this.$route.query.id}&sort=follow`)
			  .then((res)=>{
				  // console.log(res.data.data.colleges.rows);
				  this.searchDataList = res.data.data.colleges.rows
			  })
	  },

  },
  created(){

  },
}

</script>
<style lang="less">
.cooper-all{
	height: auto;
	margin: 54px 0;
	.cooper-container{
		height:auto ;
		.cooper-header{
			height: 72px;
			border-bottom: 1px solid black;
			.cooper-select,.cooper-input,.cooper-btn{
				float: left;
			}
			.cooper-select{
				width: 46%;
				li{
					float: left;
					font-size: 20px;
					cursor: pointer;
					margin: 30px 11px 10px 11px;
					.active{
						color:#00aeea ;
					}
				}
			}
			.cooper-btn{
				width: 26.4%;
				margin-top: 30px;
				.cooper-btns{
					color: white;
					background-color: #00aeea;
				}
			}
			.cooper-input{
				margin-top: 30px;
				width:27.6%;
				position: relative;
				right: 0;
				.cooper-span{
					font-size: 20px;
				}
				.input-box{
					width: 68%;
					height: 32px;
					font-size: 16px;
					border: 2px solid #00aeea;
				}
				.input-btn{
					cursor: pointer;
					height: 31px;
					padding: 6px 15px;
					position: absolute;
					right: 5px;
					bottom: 1px;
					border: none;
					background-color: #00aeea;
					color: white;
				}
			}
		}
		.cooper-content{
			height:100%;
		}
	}
}


</style>
