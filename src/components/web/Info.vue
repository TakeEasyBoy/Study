<template>
  <div class="info-container">
    <h5>留学资讯</h5>
    <ul>
      <li @click="$router.push('/infolist/details')" v-for="(item,index) in dataLists">
        <p>{{item.title}}</p>
        <span>{{item.createTime}}</span>
      </li>
      <!--<li>
        <p>资讯留学标题</p>
        <span>2017-02-15 02:32:25</span>
      </li>
      <li>
        <p>资讯留学标题</p>
        <span>2017-02-15 02:32:25</span>
      </li>
      <li>
        <p>资讯留学标题</p>
        <span>2017-02-15 02:32:25</span>
      </li>
      <li>
        <p>资讯留学标题</p>
        <span>2017-02-15 02:32:25</span>
      </li>-->
    </ul>
  </div>
</template>
<script>
export default {
	data() {
		return {
            dataLists:[]
		}
	},
	methods:{
		getStudyAbord(){
			this.$http.get('/frontend/article/list')
				.then((res)=>{
					this.dataLists = res.data.data.information;
				})
		}
	},
	created(){
		this.getStudyAbord();
	},
	mounted(){
//		this.getStudyAbord();
	}
}

</script>
<style lang="less">


</style>
