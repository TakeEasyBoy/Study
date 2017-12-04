<template>
  <div id="app">
    <span class="apply-for-btn" @click="personalApply">
      个人留学申请
    </span>
    <span class="online-service-btn" @click="service"> </span>
    <div class="web-container">
      <!-- header -->
      <WebHeader></WebHeader>
      <router-view/>
    </div>
    <div class="web-footer">
      <!-- footer -->
      <WebFooter></WebFooter>
    </div>
      <!-- 留学报名-->
    <div class="apply-for-modal" :class="{hideApply:isHideApply}">
      <h4>留学报名</h4>
      <div>
        <div class="form-inline">
          <span>意向国家</span>
          <div class="form-main">
            <Select v-model="applyDatas.state" placeholder="选择意向国家">
              <Option value="1" style="font-size: 14px!important">美国</Option>
              <Option value="2" style="font-size: 14px!important">德国</Option>
              <Option value="3" style="font-size: 14px!important">加拿大</Option>
              <Option value="4" style="font-size: 14px!important">英国</Option>
              <Option value="5" style="font-size: 14px!important">法国</Option>
            </Select>
          </div>
        </div>
        <div class="form-inline">
          <span>申请学历</span>
          <div class="form-main">
            <Select v-model="applyDatas.state" placeholder="选择意向国家">
              <Option value="1" style="font-size: 14px!important">美国</Option>
              <Option value="2" style="font-size: 14px!important">德国</Option>
              <Option value="3" style="font-size: 14px!important">加拿大</Option>
              <Option value="4" style="font-size: 14px!important">英国</Option>
              <Option value="5" style="font-size: 14px!important">法国</Option>
            </Select>
          </div>
        </div>
        <div class="form-inline">
          <span>在读年级 </span>
          <div class="form-main">
            <Select v-model="applyDatas.state" placeholder="选择意向国家">
              <Option value="1" style="font-size: 14px!important">美国</Option>
              <Option value="2" style="font-size: 14px!important">德国</Option>
              <Option value="3" style="font-size: 14px!important">加拿大</Option>
              <Option value="4" style="font-size: 14px!important">英国</Option>
              <Option value="5" style="font-size: 14px!important">法国</Option>
            </Select>
          </div>
        </div>
        <div class="form-inline">
          <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
          <div class="form-main">
            <Input v-model="applyDatas.name" placeholder="请输入您的姓名"></Input>
          </div>
        </div>
        <div class="form-inline">
          <span>手 机 号</span>
          <div class="form-main">
            <Input v-model="applyDatas.phone" placeholder="请输入您的手机号"></Input>
          </div>
        </div>
        <div class="apply-submit-btn">
          立即报名
        </div>
      </div>
      <div class="apply-close-btn" @click="closeApply"></div>
    </div>
      <!-- 客服服务-->
    <div class="online-service-modal" :class="{hideService:isHideService}">
      <div class="online-service-header">
      </div>
      <ul class="online-service-main">
        <li>
          <a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=123456789&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
            <span class="service-logo"></span>
            <span class="service-text">客服1</span>
          </a>
        </li>
        <li>
          <a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=123456789&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
            <span class="service-logo"></span>
            <span class="service-text">客服2</span>
          </a>
        </li>
        <li>
          <a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=123456789&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
            <span class="service-logo"></span>
            <span class="service-text">客服3</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import WebHeader from '@/components/web/Header'
import WebFooter from '@/components/web/Footer'
export default {
  data() {
    return {
        applyDatas: {
            state: '',
            name: '',
            phone:''
        },
        isHideApply:true,
        isHideService:true,
    }
  },
  components: {
    WebHeader,
    WebFooter
  },
  methods:{
      //客服QQ
      service(){
          this.isHideService = !this.isHideService;
      },
      personalApply(){
          this.isHideApply = !this.isHideApply;
          // console.log(this.isHideApply);
      },
      closeApply(){
          this.isHideApply = true;
          // console.log(this.isHideApply);
      }
  },
}

</script>
<style lang="less">
.clearfix:after {
  display: block;
  clear: both;
  content: ".";
  visibility: hidden;
  height: 0
}

.clearfix {
  zoom: 1;
}

.fl {
  float: left;
}

.fr {
  float: right;
}
.hideApply,.hideService{
    display: none;
}
@media screen and (min-width: 1220px) {
  .apply-for-modal {
    height: 438px;
    width: 387px;
    border-radius: 4px;
    background-color: #00688b;
    position: fixed;
    left: 22px;
    top: 160px;
    z-index: 999;
    padding: 25px 22px 30px 19px;
    .apply-submit-btn {
      height: 44px;
      color: #fff;
      line-height: 44px;
      text-align: center;
      background-color: #c20009;
      border-radius: 2px;
      cursor: pointer;
    }
    >h4 {
      font-size: 14px;
      margin: 0;
      padding-bottom: 18px;
      border-bottom: 1px solid #fff;
      color: #fff;
    }
    >div {
      padding: 24px 13px 0 11px;
    }
    .apply-close-btn {
      width: 24px;
      height: 24px;
      background: url('/static/image/guanbi.png');
      position: absolute;
      right: -12px;
      top: -12px;
      z-index: 1000;
      cursor: pointer;
    }
    .form-inline {
      border: 1px solid #eee;
      margin-bottom: 10px;
      height: 46px;
      background-color: #fff;
      width: 100%;
      border-radius: 2px;
      color: #000;
      font-size: 14px;
      overflow: hidden;
      >span {
        display: inline-block;
        width: 74px;
        line-height: 35px;
        height: 35px;
        margin-top: 5px;
        text-align: center;
        float: left;
        position: relative;

        &:after {
          content: '';
          height: 100%;
          width: 1px;
          background-color: #bfbfbf;
          position: absolute;
          right: 0;
          top: 0;
        }
      }

      .form-main {
        width: 245px;
        float: right;
        .ivu-select-placeholder {
          font-size: 14px;
        }
        .ivu-select-selection {
          border: none!important;
          height: 34px;
          margin-top: 6px;
        }
        .ivu-select-visible .ivu-select-selection {
          box-shadow: none!important;
        }
        .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
          font-size: 14px;
        }
        .ivu-input {
          border: none!important;
          box-shadow: none!important;
          height: 34px;
          margin-top: 6px;
          font-size: 14px;
        }
      }
    }
  }
  .online-service-modal {
    height: 162px;
    width: 130px;
    position: fixed;
    top: 85px;
    right: 22px;
    background-color: #74ad44;
    border-radius: 4px;
    padding: 6px;
  }
  .online-service-header {
    height: 34px;
    outline: 1px solid red;
  }
  .online-service-main {
    background-color: #fff;
    height: 116px;
    border-radius: 4px;
    overflow: hidden;
    color: #000;
    font-size: 14px;
    padding: 8px;
    >li {
      height: 31px;
      width: 100px;
      border: 1px solid #f1f1f1;
      border-left: none;
      border-right: none;
      overflow: hidden;
      cursor: pointer;
      margin-bottom: 4px;
      >a{
        color: #000;

      }
    }
    .service-logo {
      display: inline-block;
      float: left;
      width: 20px;
      height: 21px;
      background: url('/static/image/qq.png');
      margin: 3px 17px 0 5px;
    }
    .service-text {
      line-height: 30px;
      float: left;
    }
  }

  .apply-for-btn,
  .online-service-btn {
    width: 22px;
    position: fixed;
    top: 78px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    padding: 5px 0;
    cursor: pointer;
  }
  .apply-for-btn {
    left: 0;
    background-color: #00688b;
    border-radius: 0 4px 0 0;
    overflow: hidden;
  }
  .online-service-btn {
    right: 0;
    height: 76px;
    background-color: #74ad44;
    display: inline-block;
    background: url('/static/image/zaixianbg.png') no-repeat 100% 100%;
    background-position: center;
  }
  .web-footer {
    background-color: #1b1b1b;
  }
  .web-container {
    width: 1220px;
    margin: 0 auto;
    overflow: hidden;
    .title {
      font-size: 32px;
      color: #000;
      font-weight: normal;
      position: relative;
      text-indent: 13px;
      &:before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 45px;
        position: absolute;
        left: 0;
        background-color: #00aee9;
      }
      .subhead {
        font-size: 12px;
        color: #808080;
        padding-left: 14px;
        vertical-align: baseline;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1219px) {
  .web-container {
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .web-container {
    width: 100%;
  }
}

</style>
