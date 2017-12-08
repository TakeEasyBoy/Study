<template>
  <div class="web-header">
    <div class="web-header-main">
      <div class="logo"></div>
      <div class="search">
        <Select v-model="searchType"  class="search-select">
          <Option value="1" style="font-size: 14px!important">全 部</Option>
          <Option value="2" style="font-size: 14px!important">交换生院校</Option>
          <Option value="3" style="font-size: 14px!important">专升本院校</Option>
          <Option value="4" style="font-size: 14px!important">夏 校</Option>
          <Option value="5" style="font-size: 14px!important">直 升</Option>
        </Select>
        <input type="text" class="search-input" @keyup.enter="searchMethod" v-model="searchKey">
        <Button @click='searchMethod' class="search-btn">搜 索</Button>
      </div>
      <div class="tel-code">
        <span class="code"></span>
        <span class="tel"></span>
      </div>
    </div>
    <ul class="nav">
      <li :class="this.nav == 1?'selected':''" @click="$router.push('/')">首页</li>
      <li :class="this.nav == 2?'selected':''" @click="$router.push('/about')">关于金桥</li>
      <li :class="this.nav == 3?'selected':''" @click="$router.push('/cooperate')">合作院校</li>
      <li :class="this.nav == 4?'selected':''" @click="$router.push('/service')">服务</li>
      <li :class="this.nav == 5?'selected':''" @click="$router.push({path:'/summersch',query:{id:1}})">夏校</li>
      <li :class="this.nav == 6?'selected':''" @click="$router.push({path:'/exchangestu',query:{id:2}})">交换生</li>
      <li :class="this.nav == 7?'selected':''" @click="$router.push({path:'/undergraduate',query:{id:3}})">专升本</li>
      <li :class="this.nav == 8?'selected':''" @click="$router.push({path:'/ueec',query:{id:4}})">直升</li>
      <li :class="this.nav == 9?'selected':''" @click="$router.push({path:'/freshman',query:{id:5}})">插班生</li>
      <li :class="this.nav == 10?'selected':''" @click="$router.push('/contact')">联系我们</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchType: '1',
      searchKey: '',
      nav:1,
		jumpName:'',
		jumpPath:''
    }
  },
  methods:{
    initSelected(nowRouter){
      switch (nowRouter) {
        case '/':
          this.nav = 1;
          break;
        case '/about':
          this.nav = 2;
          break;
        case '/cooperate':
          this.nav = 3;
          break;
        case '/service':
          this.nav = 4;
          break;
        case '/summersch':
          this.nav = 5;
          break;
        case '/exchangestu':
          this.nav = 6;
          break;
        case '/undergraduate':
          this.nav = 7;
          break;
        case '/ueec':
          this.nav = 8;
          break;
        case '/freshman':
          this.nav = 9;
          break;
        case '/contact':
          this.nav = 10;
          break;
        default:
          this.nav = 1;
          break;
      }
    },
	getPathName(type){
    	let obj = {};
    	switch(type) {
			case '1':
			case '4':
				obj.jumpPath = './summersch';
				obj.jumpName = 'Summersch';
				break;
			case '2':
				obj.jumpPath = './exchangestu';
				obj.jumpName = 'Exchangestu';
				break;
			case '3':
				obj.jumpPath = './undergraduate';
				obj.jumpName = 'Undergraduate';
				break;
			case '5':
				obj.jumpPath = './ueec';
				obj.jumpName = 'Ueec';
				break;
			default:
				break;
		}
		return obj;
	},
      /*搜索功能,*/
    searchMethod(){
//		console.log(this.getPathName(this.searchType));
//      console.log(this.searchKey,this.searchType);
      this.$router.push({
          path:this.getPathName(this.searchType).jumpPath ,
          name:this.getPathName(this.searchType).jumpName ,
          query: {
              keywords: this.searchKey,
              type:this.searchType,
			  id:2
          }
      })
    }
  },
  created(){
    let nowRouter = this.$route.path;
    this.initSelected(nowRouter);
  },
  watch:{
    "$route.path":function(val,oldVal){
      this.initSelected(val)
    }
  }
}

</script>
<style lang='less'>
@media screen and (min-width: 1220px) {
  .web-header {
    padding: 17px 0 0;
    .web-header-main{
      overflow: hidden;
    }
    .logo {
      width: 228px;
      height: 86px;
      border-radius: 4px;
      float: left;
      background: url('/static/image/logo.png') no-repeat 100%;
      cursor: pointer;
    }
    .search {
      width: 629px;
      height: 40px;
      float: left;
      margin-top: 21px;
      margin-left: 57px;
      border: 2px solid #00afec;
    }
    .search-select {
      width: 114px;
      float: left;
      .ivu-select-selection {
        height: 36px!important;
        background-color: #00688b!important;
        border-radius: 0;
        border: none;
        .ivu-select-placeholder,
        .ivu-select-selected-value {
          height: 36px;
          line-height: 36px;
          color: #fff;
          font-size: 16px;
        }
        .ivu-icon-arrow-down-b:before {
          color: #fff;
          font-size: 14px;
        }
      }
      .ivu-select-dropdown {
        padding: 0;
        border-radius: 0;
      }
      .ivu-select-dropdown-list {
        background-color: #00d6e9!important;
        .ivu-select-item {
          color: #fff;
          &:hover {
            background-color: #00688b!important;
          }
        }
        .ivu-select-item-selected {
          background-color: #00688b!important;
        }
      }
    }
    .search-input {
      border: none;
      outline: none;
      height: 33px;
      line-height: 35px;
      width: 433px;
      text-indent: 6px;
      font-size: 16px;
      color: #495060;
      float: left;
    }
    .search-btn {
      float: right;
      border: none;
      border-radius: 0;
      background-color: #00688b!important;
      font-size: 16px!important;
      height: 36px;
      color: #fff;
      width: 78px;
      &:hover{
        background-color: #00aee9!important;
      }
    }



    .tel-code {
      width: 247px;
      float: right;
      .code {
        width: 40px;
        height: 40px;
        display: inline-block;
        margin-top: 21px;
        background: url('/static/image/erweima.png') no-repeat 100%;
        cursor: pointer;
      }
      .tel {
        width: 203px;
        height: 40px;
        display: inline-block;
        background: url('/static/image/dianhua.png') no-repeat 0 -10px;
      }
    }
    .nav {
      overflow: hidden;
      width: 100%;
      margin-top: 15px;
      position: relative;
      >li {
        float: left;
        width: 122px;
        font-size: 16px;
        line-height: 42px;
        text-align: center;
        cursor: pointer;
      }
      &:after {
        content: '';
        display: inline-block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: #00aee9;
      }
      .selected {
        background-color: #00aee9;
        color: #fff;
        border-radius: 4px 4px 0 0;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1219px) {
  .web-header {
    padding: 0.17rem 0 0.15rem;
    overflow: hidden;
    .logo {
      width: 2.28rem;
      height: 0.86rem;
      background-color: red;
      border-radius: 4px;
      float: left;
    }
    .search {
      width: 6.29rem;
      height: auto;
      float: left;
      margin-top: 0.21rem;
      margin-left: 0.57rem;
      border: 0.02rem solid #00afec;
    }
    .search-select {
      width: 1.14rem;
      float: left;
      .ivu-select-selection {
        height: 0.36rem!important;
        background-color: #00688b;
        border-radius: 0;
        border: none;
        .ivu-select-placeholder,
        .ivu-select-selected-value {
          height: 0.36rem;
          line-height: 0.36rem;
          color: #fff;
          font-size: 16px;
        }
        .ivu-icon-arrow-down-b:before {
          color: #fff;
          font-size: 0.14rem;
        }
      }
      .ivu-select-dropdown {
        padding: 0;
        border-radius: 0;
      }
      .ivu-select-dropdown-list {
        background-color: #00d6e9;
        .ivu-select-item {
          color: #fff;
          padding: 0.07rem 10px;
          &:hover {
            background-color: #00688b;
          }
        }
        .ivu-select-item-selected {
          background-color: #00688b;
        }
      }
    }
    .search-input {
      border: none;
      outline: none;
      height: 0.33rem;
      line-height: 0.35rem;
      width: 4.33rem;
      text-indent: 0.06rem;
      font-size: 0.16rem;
      color: #495060;
      float: left;
    }
    .search-btn {
      float: right;
      border: none;
      border-radius: 0;
      background-color: #00688b;
      font-size: 0.16rem!important;
      height: 0.36rem;
      color: #fff;
      width: .78rem;
    }

    .tel-code {
      width: 2.47rem;
      float: right;
      .code {
        width: .40rem;
        height: .40rem;
        display: inline-block;
        margin-top: .21rem;
        background-color: red;
      }
    }
  }
}

@media screen and (max-width: 767px) {}

</style>
