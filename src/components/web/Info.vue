<template>
  <div class="info-container">
    <h5>{{dataLists.length?getCurType(dataLists[0].type):'留学资讯'}}<!--{{getCurType(dataLists[0].type)}}--></h5>
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
            dataLists:[],
            title:''
		}
	},
	methods:{
		getStudyAbord(){
			this.$http.get('/frontend/article/list')
				.then((res)=>{
					// console.log(res.data.data.information)
					this.dataLists = res.data.data.information;
				})
		},
		getCurType(type){
			let curType = '';
			switch (type){
				case 1:
					curType = '最新动态';
					break;
				case 2:
					curType = '最新录取';
					break;
				case 3:
					curType = '留学资讯';
					break;
			}
			return curType;
		},
	},
	created(){
		this.getStudyAbord();
	},
    computed:{

    },
    watch:{
        "$props.currentDataLists":function(val,oldval){
        	// console.log(this.dataLists)
        	this.dataLists = val;
        }
    },
}

</script>
<style lang="less">


</style>
