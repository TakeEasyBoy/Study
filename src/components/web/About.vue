<template>
	<div class="about-container">
		<div class="about-slider">
			<div class="about-one">
				<img src="/static/image/banner11.jpg" alt="">
			</div>
			<div class="about-two">
				<div class="about-two-top">
					<img src="/static/image/banner12.jpg" alt="">
				</div>
				<div class="about-two-bottom">
					<div class="about-two-each">
						<img src="/static/image/banner13.jpg" alt="">
					</div>
					<div class="about-two-each">
						<img src="/static/image/banner15.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="about-three">
				<img src="/static/image/banner14.jpg" alt="">
			</div>
		</div>
		<div class="about-us">
			<h3 class="title">
				关于金桥
				<!--<span class="subhead">待提供的软文</span>-->
			</h3>
			<div class="about-us-main">
				<p>中新金桥的短期留学项目通过建立国内高校同海外名校件的直接合作关系，为学生提供半年或者一年的美国学习机会i，推动教育全球化发展。</p>
				<h4>为研究生留学打下基础</h4>
				<p>学生想入读美国的常青藤名校，前期没有美国留学的经历，英语听说读写能力没有全方位的提高，基本上是不现实的（被录取的概率很小）。海外一年的本科期间留学，不仅让学生能够是否要出国长期留学，更重要的是未能够为未来就读美国名校打下坚实的基础。</p>
				<h5>
					修取相应学分，并可进一步获得海外学位
				</h5>
				<p>建立学校间的学分互认体系，学生在海外对应专业课程的学习所获得的学分可以纳入国内教育体系，并且学生回国完成学业后，如想获取美国学位，可继续出国深造一年，获取美国对应学位。</p>
				<h5>学生负担轻，并可申请奖学金</h5>
				<p>相对其他留学，短期留学学生花费成本低，同时对于学习成绩优异的同学，还可以申请对应的奖学金。</p>
				<h4>快速提高英语能力</h4>
				<p>英语已经成为职场的必备技能，目前国内的专业培训班的英语培训课程花销大约三到五万元人民币。花同样的价钱，完全可以在美国学习3个月了，在地道的英语为母语的国家学英语，英语提升的效果可想而知。</p>
				<h4>
					学生的素质得到全面培养，潜力得到更大程度的开发
				</h4>
				<p>美国很注重培养学生的全面素质，它的这一理念也得到了广大中国家长的认同，在美国，中等教育阶段培养孩子的目标就是让孩子们广泛接触各类课程，各类活动，在实际参与中最终选择自己喜欢的，感兴趣的，擅长的领域。</p>
				<h4>未来可以更好的工作和职业发展</h4>
				<p>大学学习期间出国进行一年的深造，对接下来的工作帮助很多，为升职、加薪都打下坚实基础。</p>

			</div>
			<div class="about-us-info">
					<h4>公司简介</h4>
					<p>中新金桥信息技术（北京）有限公司成立与2006年，公司一直致力于教育行业，在高等教育领域取得了骄人的成绩。</p>
					<p>中新金桥专注于美国留学业务，一直秉承“专业、权威、优质”的服务理念，以“为每一个学生量身打造未来”为服务宗旨，帮助国内高校同海外高校建立合作关系。公司总部位于北京，在美国设有分公司，成都、广州、南京、重庆等地设立分支机构和教育基地，用丰富的专业经验，帮助每一位梦想北美留学的学生提供最全面的服务。</p>
				</div>
		</div>
		<!-- 公司能力 -->
    <WebCapacity></WebCapacity>

    <!-- 留学特色 -->
    <WebFeature></WebFeature>

	</div>
</template>

<script>
import WebCapacity from "@/components/web/Capacity"
import WebFeature from "@/components/web/Feature"


	export default {
		data(){
			return {

			}
		},
		components:{
			WebCapacity,
			WebFeature
		}
	}
</script>

<style lang="less">
	@media screen and (min-width: 1220px) {
		.about-container{
			.about-slider{
				height: 400px;
				overflow: hidden;
				>div{
					float: left;
				}
				.about-one{
					width: 700px;
					height: 100%;
				}
				.about-two{
					width: 300px;
					height: 100%;
				}
				.about-two-top{
					height: 250px;
					width: 100%;
				}
				.about-two-bottom{
					height: 150px;
					width: 100%;
					overflow: hidden;
				}
				.about-two-each{
					float: left;
					width: 50%;
					height: 100%;
				}

				.about-three{
					width: 220px;
					height: 100%;
				}

				img{
					width: 100%;
					height: 100%;
				}
			}

			.about-us{
				font-size: 16px;
				color: #000;
				padding: 56px 0 0;
				.about-us-main{
					p{
					margin: 8px 0;
					line-height: 24px;
					text-indent: 2em;
				}
				h4{
					color: #fff;
					text-indent: 47px;
					height: 30px;
					line-height: 30px;
					position: relative;
					background-color: #00688b;

					&:before{
						content: '';
						position: absolute;
						left: -30px;
						top: 7px;


					}
				}
				h5{
					font-size: 16px;
					text-indent: 47px;
					color: #000;
					line-height: 24px;
					margin: 0;
				}
				}

				

				
			}
			.about-us-info{
				padding-top: 7px;
				border-top: 1px solid #a0a0a0;
				h4{
					margin: 0;
				line-height: 24px;
				text-indent: 2em;
				}
				p{
					text-indent: 2em;
				}
			}

			


		}
	}
</style>