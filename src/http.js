/**
 * 统一配置axios
 * 使用qs.stringify解决axios跨域问题
 * 配置axios请求类型为post时，使用qs.stringify来实现跨域访问，以及每次请求携带token
 * 配置请求成功后res，实现诸如登录失败，登录超时，账户密码错误和请求错误等拦截器
 */
import axios from 'axios'
import qs from 'qs'
import { Modal, Message } from 'iview'
import router from './router/index.js'

// axios 配置
axios.defaults.timeout = 10000; //请求超时设置
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    } else if (config.method === 'get') {
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
/**
 * 拦截器也可以判定返回的response成功时的状态码进行拦截
 */
axios.interceptors.response.use(
  res => {
    switch (parseInt(res.data.status)) {
      case 200: //请求成功
        return res;
        break;
      case 16: //账号或者密码错误
        Message.warning(res.data.Description + '，请更正后重试！', 4);
        return res;
        break;
      case 32: //锁定
        Modal.warning({
          title: '提示',
          content: '该账号已经被锁定暂时无法使用，请联系管理员解锁！',
          onOk: () => {
            // this.$router.push('/')
          }
        });
        break;
      case 33: //未激活
        Modal.warning({
          title: '提示',
          content: '该账号还未激活，请联系管理员激活账号！',
          onOk: () => {
            // this.$router.push('/')
          }
        });
        break;
      case 34: //登录超时
        Modal.error({
          title: '提示',
          content: '账号登录超时，请重新登录！',
          onOk: () => {
            var rootPath = router.currentRoute.fullPath.split("/")[1];

            router.replace({
              path: '/' + rootPath + '/login',
              query: { redirect: router.currentRoute.fullPath }
            })
          }
        });
        break;
      default:
        return res;
        break;
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }else{
      Message.error({
        content:'网络请求超时，请稍后再试或联系管理员',
        duration:4
      })
    }
  });

export default axios;
