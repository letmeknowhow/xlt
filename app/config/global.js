/**
 *  Class: global
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description: 配置项
 */

const global = {
  /** webApi 旅行社域名前辍*/
  ctshoApiURL: 'http://106.38.101.115:88/ctsho',
  //ctshoApiURL: 'http://125.46.12.76:80/ctsho',

  /** webApi 手机银行域名前辍*/
  ctsbankApiURL: 'http://106.38.101.115:88/pmobile',
  //ctsbankApiURL: 'http://125.46.12.76:80/pmobile',

  /** 图片地址前缀 **/
  imgBaseURL: 'http://192.168.8.137:3001',

  /** 配置token失效时间 以天为单位**/
  tokenTime: 1
};

export default global;
