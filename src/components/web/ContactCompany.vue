<template>
	<div class='capacity-container'>
		<h3 class="title">
			公司展示
			<span class="subhead">教育百强企业，IOS9001认证，国内1000家高校建立合作关系</span>
		</h3>
		<div class="capacity-main">
			<div class="capacity-main-one">
				<div class="capacity-one-list">
					<img src="/static/image/nengli1.jpg" alt="">
					
				</div>
				<div class="capacity-one-list">
					<img src="/static/image/nengli1.jpg" alt="">
					
				</div>
				<div class="capacity-one-list">
					<img src="/static/image/nengli1.jpg" alt="">
					
				</div>
			</div>
			<div  class="capacity-main-two">
				<div class="capacity-two-top">
					<img src="/static/image/nengli1.jpg" alt="">
					
				</div>
				<div class="capacity-two-bottom">
					<img src="/static/image/nengli5.jpg" alt="">
					
				</div>
			</div>
			<div  class="capacity-main-three">
				<img src="/static/image/nengli6.jpg" alt="">
					
			</div>
			<div  class="capacity-main-two">
				<div class="capacity-two-top">
					<img src="/static/image/nengli1.jpg" alt="">
					
				</div>
				<div class="capacity-two-bottom">
					<img src="/static/image/nengli5.jpg" alt="">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>

<style lang="less">
	@media screen and (min-width: 1220px) {
		.capacity-container{
			padding: 56px 0;
			.capacity-main{
				padding-top: 33px;
				overflow: hidden;
				color: #fff;
			}
			.capacity-main-one{
				float: left;
				width: 243px;
			}
			.capacity-one-list{
				height: 150px;
				width: 100%;
				margin-bottom: 10px;
				
				font-size: 12px;
				position: relative;
				&:last-child{
					margin-bottom: 0;
				}
				
				
			}
			img{
					height: 100%;
					width: 100%;
				}
			.intro-main{
					position: absolute;
					text-align: center;
					line-height: 30px;
					left: 0;
					bottom: 0;
					background-color: #000;
					width: 100%;
					opacity: 0.4;
					z-index: 10;
				}
			
			.capacity-main-two{
				float: left;
				width: 280px;
				margin-left: 10px;
				height: 100%;
				position: relative;
			}
			.capacity-two-top{
				height: 174px;
				width: 100%;
				margin-bottom: 10px;
			}
			.capacity-two-bottom{
				height: 285px;
				width: 100%;
			}

			.capacity-main-three{
				width: 387px;
				float: left;
				margin-left: 10px;
				height: 469px;
				position: relative;
			}
		}
	}
</style>