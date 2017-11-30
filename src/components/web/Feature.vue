<template>
  <div class="prefecture-container">
    <h3 class="title">
			留学特色
			<span class="subhead">待提供的软文</span>
		</h3>
    <ul class="perfecture-list">
      <li class="perfecture-each">
        <div class="perfecture-each-bg">
          <img src="/static/image/teshe1.jpg" alt="">
        </div>
        <div class="perfecture-object">
        	<h5>热门特色<span>MORE</span></h5>
        	<p>
        		适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群
        	</p>
        </div>
      </li>
      <li class="perfecture-each">
        <div class="perfecture-each-bg">
          <img src="/static/image/teshe2.jpg" alt="">
        </div>
        <div class="perfecture-object">
        	<h5>热门特色<span>MORE</span></h5>
        	<p>
        		适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群
        	</p>
        </div>
      </li>
      <li class="perfecture-each">
        <div class="perfecture-each-bg">
          <img src="/static/image/teshe3.jpg" alt="">
 
        </div>
        <div class="perfecture-object">
        	<h5>热门特色<span>MORE</span></h5>
        	<p>
        		适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群
        	</p>
        </div>
      </li>
      <li class="perfecture-each">
        <div class="perfecture-each-bg">
          <img src="/static/image/teshe4.jpg" alt="">
        </div>
        <div class="perfecture-object">
        	<h5>热门特色<span>MORE</span></h5>
        	<p>
        		适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群
        	</p>
        </div>
      </li>
      <li class="perfecture-each">
        <div class="perfecture-each-bg">
          <img src="/static/image/teshe5.jpg" alt="">
        </div>
        <div class="perfecture-object">
        	<h5>热门特色<span>MORE</span></h5>
        	<p>
        		适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群适合人群
        	</p>
        </div>
      </li>
    </ul>
    <div class="feature-more">
      <h4>更多特色</h4>
      <div>
        <h5>Here's the title</h5>
        <p>Here's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the title</p>
      </div>
      <div>
        <h5>Here's the title</h5>
        <p>Here's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the title</p>
      </div>

<div>
        <h5>Here's the title</h5>
        <p>Here's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the title</p>
      </div>

<div>
        <h5>Here's the title</h5>
        <p>Here's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the titleHere's the title</p>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}

</script>
<style lang="less">
@media screen and (min-width: 1220px) {
  .prefecture-container {
    padding-top: 58px;
    .perfecture-list {
      overflow: hidden;
      margin-top: 33px;
    }
    .perfecture-each {
      float: left;
      width: 228px;
      height: 480px;
      margin-left: 20px;

      &:first-child{
      	margin-left: 0;
      }
    }
    .perfecture-each-title {
      background-color: #fff;
      opacity: 0.9;
      height: 40px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: 16px;
      line-height: 40px;
      color: #000;
    }
    .perfecture-each-intro {
      height: 260px;
      width: 100%;
      position: absolute;
      left: 0;
      background-color: #fff;
      opacity: 0.9;
      padding: 12px;
      overflow: hidden;
      color: #000;
      font-size: 12px;
      -webkit-transition: -webkit-transform 0.35s;
      transition: transform 0.35s;
      h5 {
        font-weight: bold;
      }
    }
    .perfecture-each-bg {
      position: relative;
      height: 376px;
      cursor: pointer;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }

      &:hover {
        .perfecture-each-title {
          display: none;
        }
        .perfecture-each-intro {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          bottom: 0;
        }
      }
    }
    .perfecture-object{
    	color: #000;
    	font-size: 12px;

    	h5{
    		font-weight: bold;
    		margin: 8px 0;
    		position: relative;
    		span{
    			color: red;
    			float: right;
    			cursor: pointer;
    		}
    		&:after{
    			content: '';
    			width:100%;
    			height: 1px;
    			background-color: #000;
    			display: inline-block;
    			position: absolute;
    			left: 0;
    			bottom: -4px;
    		}
    	}
    }
    .feature-more{
      padding-bottom: 56px;
      h4{
        color: #fff;
        padding: 8px 10px;
        margin: 6px 0 0;
        font-size: 14px;
        background-color: #00688b;
      }
      >div{
        padding-left: 10px;
        color: #000;
        h5{
          line-height: 20px;
          font-size: 14px;
          padding-top: 6px;

        }
        p{
          line-height: 16px;
          position: relative;
          margin-bottom: 8px;

          &:after{
            content: '';
            width: 100%;
            height: 1px;
            background-color: #010101;
            position: absolute;
            left: 0;
            bottom: -8px;
          }
        }
      }
    }
  }
}

</style>
