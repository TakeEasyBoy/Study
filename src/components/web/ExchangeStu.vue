<!--<template>
  <div class="flow-all">
    <div class="clearfix"></div>
    <h3 class="title">
			流程
			&lt;!&ndash;<span class="subhead">待提供的软文</span>&ndash;&gt;
		</h3>
    <div class="flow-container">
      <div class="flow-img">
        <img src="/static/image/yizhanshi.png" alt="">
      </div>
    </div>
  </div>
</template>-->
<!--<script>
export default {
  data() {
    return {

    }
  },
}

</script>
<style lang="less">
	@media screen and (min-width: 1220px) {
	  .flow-all {
		height: 300px;
		margin: 54px 0;
		.flow-container {
		  height: 218px;
		  margin-top: 38px;
		}
	  }
	}
</style>-->
<template>
  <div class="introduction-container">
    <!-- 简介 -->
    <Introduction></Introduction>
    <!-- 流程 -->
    <FlowChart></FlowChart>
    <!-- 合作院校 -->
    <CooperationSchool></CooperationSchool>
  </div>
</template>
<script>
import Introduction from '@/components/web/Introduction'
import FlowChart from '@/components/web/FlowChart'
import CooperationSchool from '@/components/web/CooperationSchool'
export default {
  data() {
    return {

    }
  },
  components: {
    Introduction,
    FlowChart,
    CooperationSchool,
  }
}

</script>
<style lang="less">

</style>
