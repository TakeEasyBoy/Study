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
  },
	created(){
  		console.log(this.$route.name)
	}

}

</script>
<style lang="less">

</style>
