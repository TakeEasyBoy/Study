<template>
  <div class="meaning-container">
    <h3 class="title">
			留学的意义
			<span class="subhead">出国留学的意义</span>
		</h3>
    <Row type="flex" justify="center" class="meaning-main">
      <Col span="6" class="meaning-list">
      <div class="intro-img">
        <img src="/static/image/icon1.png" alt="">
      </div>
      <p class="intro">
        英语听力提高
      </p>
      </Col>
      <Col span="6" class="meaning-list">
      <div class="intro-img">
        <img src="/static/image/icon2.png" alt="">
      </div>
      <p class="intro">
        独立生活能力的提高
      </p>
      </Col>
      <Col span="6" class="meaning-list">
      <div class="intro-img">
        <img src="/static/image/icon3.png" alt="">
      </div>
      <p class="intro">
        省时高效，尽早进行职业生涯规划
      </p>
      </Col>
      <Col span="6" class="meaning-list">
      <div class="intro-img">
        <img src="/static/image/icon4.png" alt="">
      </div>
      <p class="intro">
        全新的生活环境体验
      </p>
      </Col>
      <Col span="6" class="meaning-list">
      <div class="intro-img">
        <img src="/static/image/icon5.png" alt="">
      </div>
      <p class="intro">
        专业选择多样化
      </p>
      </Col>
      <Col span="6" class="meaning-list">
      <div class="intro-img">
        <img src="/static/image/icon6.png" alt="">
      </div>
      <p class="intro">
        海外工作和实习机会
      </p>
      </Col>
      <Col span="6" class="meaning-list">
      <div class="intro-img">
        <img src="/static/image/icon7.png" alt="">
      </div>
      <p class="intro">
        改变目前职业现状契机
      </p>
      </Col>
    </Row>
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
  .meaning-container {
    overflow: hidden;
    padding: 56px 0;
    background: url('/static/image/diwen1.png') no-repeat  right 480px;
    background-size: 25%;
    .meaning-main {
      padding: 38px 0 18px;
      margin: 0 -49px;
      position: relative;
      .meaning-list {
        text-align: center;
        .intro-img {
          width: 230px;
          height: 230px;
          margin: 0 auto;
        }
        .intro {
          font-size: 20px;
          font-weight: bold;
          height: 60px;
          line-height: 60px;
          text-align: center;
          color: #000;
          letter-spacing: 1px;
        }
      }
      &:after {
        content: '';
        height: 1px;
        background-color: #a0a0a0;
        width: 1220px;
        left: 49px;
      }
    }
  }
}

</style>
