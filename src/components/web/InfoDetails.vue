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
            getNewsDetail(id){
            	this.$http.get('/frontend/article/detail?articleId='+id)
                    .then((res)=>{
	                    console.log(res.data.data)
	                    this.newsDetails = res.data.data;
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
        	
        },
        watch:{
        	"$props.queryId":function(val,oldval){
        		console.log(val)
        	}
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
