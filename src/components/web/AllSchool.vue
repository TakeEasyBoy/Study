<template>
  <div class="all-all" v-show="index == 0">
  	<div class="content-one">
  		<div class="content-img fl">
  			<img src="/static/image/kuang.jpg" alt="">
  		</div>
  		<div class="content-text fl">
  			<div class="content-title">
  				<span>澳大利亚国立大学</span><button >咨询</button>
  			</div>
  			<div class="content-content">
  				<div class="part-two fl">
		  			<span>所在州省：北部地区</span>
		  			<span>总费用：$48.452</span>
		  			<span>官网：wwwmic.edu</span>
		  			<span>课程内容：夏校CFP课程（一门学分）</span>
		  		</div>
		  		<div class="part-three fl">
		  			<span>学校性质：私立</span>
		  			<span>录取率：8.20%</span>
		  			<span>招生对象：高中在读或者刚毕业</span>
		  			<span>课程时间：7.3-8.11</span>
		  		</div>
		  		<div class="part-four fl">
		  			<span>综合排名：2</span>
		  			<span>中国教育部是否认证：认证</span>
		  			<span>语言要求：托福80雅思6.5或者等同</span>
		  			<span class="top-span" @click="getTable">专业排行&gt&gt</span>
		  		</div>
  			</div>
  			<div class="clearfix"></div>
  			<div class="content-table" v-show="flag">
  				<Table :columns="columns1" :data="data1"></Table>
  			</div>
  		</div>	
  	</div>
  	<div class="content-one">
  		<div class="content-img fl">
  			<img src="/static/image/kuang.jpg" alt="">
  		</div>
  		<div class="content-text fl">
  			<div class="content-title">
  				<span>澳大利亚国立大学</span><button >咨询</button>
  			</div>
  			<div class="content-content">
  				<div class="part-two fl">
		  			<span>所在州省：北部地区</span>
		  			<span>总费用：$48.452</span>
		  			<span>官网：wwwmic.edu</span>
		  			<span>课程内容：夏校CFP课程（一门学分）</span>
		  		</div>
		  		<div class="part-three fl">
		  			<span>学校性质：私立</span>
		  			<span>录取率：8.20%</span>
		  			<span>招生对象：高中在读或者刚毕业</span>
		  			<span>课程时间：7.3-8.11</span>
		  		</div>
		  		<div class="part-four fl">
		  			<span>综合排名：2</span>
		  			<span>中国教育部是否认证：认证</span>
		  			<span>语言要求：托福80雅思6.5或者等同</span>
		  			<span class="top-span" @click="getTable">专业排行&gt&gt</span>
		  		</div>
  			</div>
  			<div class="clearfix"></div>
  			<div class="content-table" v-show="flag">
  				<Table :columns="columns1" :data="data1"></Table>
  			</div>
  		</div>	
  	</div>
  </div>
</template>
<script>
export default {
	props:['index'],
  data() {
    return {
    	 columns1: [
            {
                title: '专业',
                key: 'name'
            },
            {
                title: '全美排名',
                key: 'age'
            },
            {
                title: '全美排名',
                key: 'address'
            },
            {
                title: '全美排名',
                key: 'date'
            },
            {
                title: '全美排名',
                key: 'address'
            },
            {
                title: '全美排名',
                key: 'address'
            }
        ],
        data1: [
            {
                name: '电脑工程',
                age: '|',
                address: '-',
                date: '化学工程'
            },
            {
                name: '工商生产管理',
                age: '|',
                address: '-',
                date: '机械工程'
            },
            {
                name: '天空科技工程',
                age: '|',
                address: '-',
                date: '人工智能'
            },
            {
                name: '材料科学',
                age: '|',
                address: '-',
                date: '基因科学'
            },
            {
                name: '数学分析',
                age: '|',
                address: '-',
                date: '......'
            }
        ],

        flag:true,
    }
  },
  methods:{
  	getTable(){
  		 if(this.flag){
  		 	this.flag = false;
  		 	$('.content-one').css('borderBottom','1px solid black');
  		 }else{
  		 	this.flag = true;
  		 	$('.content-one').css('border','none');
  		 }
  	},

  },
  mounted(){
    
  }
}

</script>
<style lang="less">
.all-all{
	height: auto;
	margin: 0 0 8px 0;
	.content-one{
		height: auto;
		overflow: hidden;
		margin-top: 12px;
		border-bottom: 1px solid black;
		.content-img{
			width: 17.7%;
			height: 118px;
			margin-right: 36px;
		}
		.content-text{
			width: 79.3%;
			.content-title{
				margin-bottom: 16px;
				span{
					font-size: 16px;
				}
				button{
					background-color: #fd0002;
					color: white;
					margin-left: 10px;
					width: 50px;
					border: none;
				}
			}
			.content-content{
				span{
					display:block;
					font-size: 14px;
				}
				.part-two{
					width: 27.7%;
				}
				.part-three{
					width: 24.8%;
				}
				.part-four{
					width: 47.5%;
					.top-span{
						color:#fd0002;
						text-decoration: underline;
					}
				}
			}
			.content-table{
				margin-top: 6px;
			}
		}
		
	}
}


</style>
