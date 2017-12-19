<template>
	<div class="info-details-container" >
		<h3>{{newsDetails.title}}</h3>
		<p >
			<span>{{newsDetails.createTime}}</span>
			<span>来源于：留学网</span>
			<span>编辑：888888</span>
			<span>浏览：186次</span>
		</p>
		<div>
            <p>{{newsDetails.content}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				queryId:'',
                newsDetails:{}
			}
		},
		methods:{
			//获取新闻详情方法  接口有问题,无论id是什么,数据都是id为3的数据 2017-12-17
            getNewsDetail(id){
            	this.$http.get('/frontend/article/news?id='+id)
                    .then((res)=>{
	                    console.log(res.data.data[0])
	                    this.newsDetails = res.data.data[0];
                    })
            }
        },
        created(){
			//获取查询ID
			this.queryId = this.$route.query.id;
			// console.log(this.queryId)
			this.getNewsDetail(this.queryId);
        },
        mounted() {
        }
	}
</script>

<style lang="less">
	@media screen and (min-width: 1220px) {
		.info-details-container{
			h3{
				text-align: center;
				font-size: 16px;
				color: #000;
				line-height: 32px;
			}
			>p{
				text-align: center;
				font-size: 12px;
				color: #9d9d9d;
				line-height: 32px;
				border-bottom: 1px solid #999999;
				span{
					display: inline-block;
					margin-right: 30px;

					&:last-child{
						margin-right: 0;
					}
				}
			}
			>div{
				padding: 10px 18px;
				border-bottom: 1px solid #999 ;
			}
		}
	}
</style>
