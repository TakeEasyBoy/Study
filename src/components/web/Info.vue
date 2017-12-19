<template>
  <div class="info-container">
    <h5>留学资讯</h5>
    <ul>
      <li @click="$router.push({path:'/infolist/details',query:{id:item.id}})" v-for="(item,index) in dataLists">
        <p>{{item.title}}</p>
        <span>{{item.createTime}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props:['currentDataLists'],
	data() {
		return {
            dataLists:[]
		}
	},
	methods:{
		getStudyAbord(){
			this.$http.get('/frontend/article/list')
				.then((res)=>{
					// console.log(res.data.data.information)
					this.dataLists = res.data.data.news;
				})
		}
	},
	created(){
		this.getStudyAbord();
	},
    computed:{

    },
    watch:{
        "$props.currentDataLists":function(val,oldval){
        	this.dataLists = val;
        }
    },
	mounted(){
//		this.getStudyAbord();
	}
}

</script>
<style lang="less">


</style>
