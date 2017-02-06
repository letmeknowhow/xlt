/**
 *  Class: WebApiConfig
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description: 请求配置项
 */

import global from '../config/global';
import Constants from './Constants';

export default {
  baseurl: '',
  api: [
    {
      name: 'getBanner',
      method: 'get',
      url: global.ctshoApiURL + '/slideShow/getSlideShow.json',
      desc: '轮播图'
    },
    {
      name: 'productSetoutCityListWs',
      method: 'get',
      url: global.ctshoApiURL + '/city/getCityList.json',
      desc: '出发地列表'
    },
    {
      name: Constants.productInterface.foreign,
      method: 'get',
      url: global.ctshoApiURL + '/list/getOutbound.json',
      desc: '国外游'
    },
    {
      name: Constants.productInterface.inland,
      method: 'get',
      url: global.ctshoApiURL + '/list/getDomestic.json',
      desc: '国内游'
    },
    {
      name: Constants.productInterface.boat,
      method: 'get',
      url: global.ctshoApiURL + '/list/getCruise.json',
      desc: '游轮'
    },
    {
      name: Constants.productInterface.arround,
      method: 'get',
      url: global.ctshoApiURL + '/list/getSurround.json',
      desc: '周边游'
    },
    {
      name: 'login',
      method: 'post',
      url: global.ctshoApiURL + '/user/login.json',
      desc: '登录'
    },
    {
      name: 'setAge',
      method: 'get',
      url: global.ctshoApiURL + '/userTest/setAge',
      desc: '登录'
    },
    {
      name: 'userRegisterNewWs',
      method: 'post',
      url: global.ctshoApiURL + '/user/regist.json',
      desc: '中旅注册'
    },

    {
      name: 'sendEMSIdentifyCodeWs',
      method: 'post',
      url: global.ctshoApiURL + '/user/sendSMSCodeByRegister.json',
      desc: '注册短信验证码'
    },
    {
      name: 'sendSMSCode',
      method: 'post',
      url: global.ctshoApiURL + '/user/sendSMSCode.json',
      desc: '修改密码发送证码'
    },
    {
      name: 'getCaptcha',
      method: 'post',
      url: global.ctshoApiURL + '/user/captcha.json',
      desc: '校验验证码'
    },
    {
      name: 'updatePasswordByUsername',
      method: 'post',
      url: global.ctshoApiURL + '/user/updatePasswordByUsername.json',
      desc: '登录用户修改密码时,根据用户名修改密码'
    },
    {
      name: 'updatePasswordByOld',
      method: 'post',
      url: global.ctshoApiURL + '/user/updatePasswordByOld.json',
      desc: '登录用户修改密码时,根据旧密码修改密码'
    },
    {
      name: 'getUserInfo',
      method: 'get',
      url: global.ctshoApiURL + '/userTest/getUser',
      desc: 'xxx'
    },
    {
      name: 'loginBank',
      method: 'post',
      url: global.ctsbankApiURL + '/login.do',
      desc: '登录手机银行'
    },
    {
      name: 'getAccount',
      method: 'post',
      url: global.ctsbankApiURL + '/ActQryPre.do',
      desc: '账户查询'
    },
    {
      name: 'getAccountList',
      method: 'post',
      url: global.ctsbankApiURL + '/SubActQry.do',
      desc: '子账户列表'
    },
    {
      name: 'subAccountQry',
      method: 'post',
      url: global.ctsbankApiURL + '/SubActQry.do',
      desc: '子账户详情'
    },
    {
      name: 'accountCurrent2Current',
      method: 'get',
      url: global.ctsbankApiURL + '/SavToSavPre.do',
      desc: '活期转活期'
    },
    {
      name: 'getShopData',
      method: 'get',
      url: global.ctshoApiURL + '/store/getStoreListCount.json',
      desc: '国内门店数据请求'
    },
    {
      name: 'getForeignShopData',
      method: 'get',
      url: global.ctshoApiURL + '/foreignShop.json',
      desc: ' 国外门店数据请求'
    },
    {
      name: 'getAreaShopData',
      method: 'get',
      url: global.ctshoApiURL + '/store/getStoreList.json',
      desc: '区域门店数据请求'
    },
    {
      name: 'getCurrentShopData',
      method: 'get',
      url: global.ctshoApiURL + '/store/getStoreDetail.json',
      desc: '当前的门店数据请求'
    },
    {
      name: 'getGroupDetail',
      method: 'get',
      url: global.ctshoApiURL + '/detail/getGroupDetail.json',
      desc: '参团产品详情'
    },
    {
      name: 'getModuleDetail',
      method: 'get',
      url: global.ctshoApiURL + '/detail/getModuleDetail.json',
      desc: '模块产品详情'
    },
    {
      name: 'getOrderListNew',
      method: 'post',
      url: global.ctshoApiURL + '/order/getOrderList.json',
      // url: global.imgBaseURL + '/orderList.json',
      desc: '订单列表'
    },
    {
      name: 'getScheduleList',
      method: 'post',
      url: global.ctshoApiURL + '/datePrice/getDatePrice.json',
      desc: '游团日历'
    },
    {
      name: 'orderCreateNewWs',
      method: 'post',
      url: global.ctshoApiURL + '/order/orderCreate.json',
      desc: '预订单提交'
    },
    {
      name: 'getLinkmanShopData',
      method: 'get',
      url: global.ctshoApiURL + '/store/getStoreManDetail.json',
      desc: '当前的门店数据请求'
    },
    {
      name: 'getOrderDetailNewWs',
      method: 'post',
      url: global.ctshoApiURL + '/order/getOrderDetail.json',
      desc: '预订单提交完成'
    },
    {
      name: 'getPay',
      method: 'post',
      url: global.ctshoApiURL + '/pay/pay.action',
      desc: '支付'
    },
  /**
   * 个人账户互转-start
   */
    {
      name: 'getPersonalAccount',
      method: 'post',
      url: global.ctsbankApiURL + '/SavToSavPre.do',
      desc: '个人账户互转初始页-渲染页面'
    },
    {
      name: 'getPersonalInformation',
      method: 'post',
      url: global.ctsbankApiURL + '/SavToSavConfirm.do',
      desc: '个人账户互转初始页-验证账户数据'
    },
    {
      name: 'getAccountBalance',
      method: 'post',
      url: global.ctsbankApiURL + '/QueryAcNoBalance.do',
      desc: '个人账户互转初始页-获取账户余额'
    },
    {
      name: 'getPersonalConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/SavToSav.do',
      desc: '个人账户互转确认页-验证交易数据'
    },
    {
      name: 'getCheckCheatQry',
      method: 'post',
      url: global.ctsbankApiURL + '/CheckCheatQry.do',
      desc: '账户转账-反欺诈验证'
    },
  /**
   * 个人账户互转-end
   */
    {
      name: 'ActLossPre',
      method: 'post',
      url: global.ctsbankApiURL + '/ActLossPre.do',
      desc: '账户挂失'
    },
    {
      name: 'AcctLostConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/AcctLostConfirm.do',
      desc: '账户挂失确认'
    },
    {
      name: 'AcctLost',
      method: 'post',
      url: global.ctsbankApiURL + '/AcctLost.do',
      desc: '账户挂失结果'
    },
    //跨行转账start
    {
      name: 'getFastPaymentAccount1',
      method: 'get',
      url: global.ctshoApiURL + '/interbankTransfer/fastPaymentAccount.json',
      desc: '实时跨行转账初始页'
    },
    {
      name: 'getFastPaymentAccount',
      method: 'post',
      url: global.ctsbankApiURL + '/FastTransferPre.do',
      desc: '实时跨行转账初始页'
    },
    {
      name: 'getPaymentAccount1',
      method: 'get',
      url: global.ctshoApiURL + '/interbankTransfer/paymentAccount.json',
      desc: '普通跨行转账初始页'
    },
    {
      name: 'getPaymentAccount',
      method: 'post',
      url: global.ctsbankApiURL + '/TransferPre.do',
      desc: '普通跨行转账初始页'
    },
    {
      name: 'getFastBeneficiaryList',
      method: 'post',
      url: global.ctsbankApiURL + '/SuperBankPayeeListQry.do',
      desc: '实时跨行转账收款人列表'
    },
    {
      name: 'getBeneficiaryList',
      method: 'post',
      url: global.ctsbankApiURL + '/CrossBankPayeeListQry.do',
      desc: '普通跨行转账收款人列表'
    },
    {
      name: 'getInterbankTransferConfirm1',
      method: 'get',
      url: global.ctshoApiURL + '/interbankTransfer/interbankTransferConfirm.json',
      desc: '跨行转账确认'
    },
    {
      name: 'getInterbankTransferConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/FastTransferConfirm.do',
      desc: '实时跨行转账确认'
    },
    {
      name: 'transferConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/TransferConfirm.do',
      desc: '普通跨行转账确认'
    },
    {
      name: 'FastTransfer',
      method: 'post',
      url: global.ctsbankApiURL + '/FastTransfer.do',
      desc: '实时跨行转账结果'
    },
    {
      name: 'Transfer',
      method: 'post',
      url: global.ctsbankApiURL + '/Transfer.do',
      desc: '普通跨行转账结果'
    },
    {
      name: 'getAvailableBalance',
      method: 'get',
      url: global.ctshoApiURL + '/interbankTransfer/queryAcNoBalance.json',
      desc: '跨行转账可用余额'
    },
    //跨行转账end
    {
      name: 'actMngPre',
      method: 'post',
      url: global.ctsbankApiURL + '/ActMngPre.do',
      desc: '账户管理'
    },
    {
      name: 'relaActAddPre',
      method: 'post',
      url: global.ctsbankApiURL + '/RelaActAddPre.do',
      desc: '加挂预设'
    },
    {
      name: 'relaActDeleteConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/RelaActDeleteConfirm.do',
      desc: '减挂确认请求'
    },
    {
      name: 'relaActDelete',
      method: 'post',
      url: global.ctsbankApiURL + '/RelaActDelete.do',
      desc: '减挂'
    },
    {
      name: 'RelaActModify',
      method: 'post',
      url: global.ctsbankApiURL + '/RelaActModify.do',
      desc: '修改别名设置确认'
    },
    {
      name: 'TrsDetailQryPre',
      method: 'post',
      url: global.ctsbankApiURL + '/TrsDetailQryPre.do',
      desc: '查询明细'
    },
    {
      name: 'ActTrsInfoQry',
      method: 'post',
      url: global.ctsbankApiURL + '/ActTrsInfoQry.do',
      desc: '交易明细列表'
    },
    {
      name: 'ActTrsInfoById',
      method: 'post',
      url: global.ctsbankApiURL + '/ActTrsInfoById.do',
      desc: '交易明细详情'
    },
    {
      name: 'TrsDetailQryPre1',
      method: 'get',
      url: global.ctshoApiURL + '/transactionQuery.json',
      desc: '查询明细'
    },
    {
      name: 'ActTrsInfoQry1',
      method: 'get',
      url: global.ctshoApiURL + '/transactionList.json',
      desc: '交易明细列表'
    },
    {
      name: 'ActTrsInfoById1',
      method: 'get',
      url: global.ctshoApiURL + '/transactionDetail.json',
      desc: '交易明细详情'
    },
    {
      name: 'getBankQry',
      method: 'get',
      url: global.ctsbankApiURL + '/BankListQry.do',
      desc: '银行网点查询初始页查询银行'
    },
    {
      name: 'getProvinceListQry',
      method: 'get',
      url: global.ctsbankApiURL + '/ProvinceListQry.do',
      desc: '银行网点查询初始页查询省'
    },
    {
      name: 'getCityListQry',
      method: 'get',
      url: global.ctsbankApiURL + '/CityListQry.do',
      desc: '银行网点查询初始页查询市或县'
    },
    {
      name: 'payeeBankDeptListQry',
      method: 'post',
      url: global.ctsbankApiURL + '/PayeeBankDeptListQry.do',
      desc: '银行网点查询结果'
    },
    {
      name: 'getPayeerList',
      method: 'post',
      url: global.ctsbankApiURL + '/PayeeBookQry.do',
      desc: '行内收款人名册'
    },
    {
      name: 'relaActAddConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/RelaActAddConfirm.do',
      desc: '加挂确认'
    },
    {
      name: 'bankLogin',
      method: 'post',
      url: global.ctsbankApiURL + '/login.do',
      desc: '临时手机银行登录'
    },
    {
      name: 'relaActAdd',
      method: 'post',
      url: global.ctsbankApiURL + '/RelaActAdd.do',
      desc: '加挂确认'
    },
    {
      name: 'DummySMSOTPToken',
      method: 'post',
      url: global.ctsbankApiURL + '/DummySMSOTPToken.do',
      desc: '手机银行短信验证码'
    },
    {
      name: 'DummySMSOTPTokenApp',
      method: 'post',
      url: global.ctsbankApiURL + '/DummySMSOTPTokenApp.do',
      desc: '手机银行绑定交易短信验证码'
    },
    /**
     * 行内转账接口
     */
    {
      name: 'BankInnerTransferPre',
      method: 'post',
      url: global.ctsbankApiURL + '/BankInnerTransferPre.do',
      desc: '行内转账初始页'
    },
    {
      name: 'BankInnerTransferConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/BankInnerTransferConfirm.do',
      desc: '行内转账确认页'
    },
    {
      name: 'BankInnerTransfer',
      method: 'post',
      url: global.ctsbankApiURL + '/BankInnerTransfer.do',
      desc: '行内转账结果页'
    },
    {
      name: 'BankAcNameQry',
      method: 'post',
      url: global.ctsbankApiURL + '/BankAcNameQry.do',
      desc: '账户名查询'
    },
    {
      name: 'FinPrdOnSellList',
      method: 'post',
      url: global.ctsbankApiURL + '/FinPrdOnSellList.do',
      desc: '在售理财产品'
    },
    {
      name: 'AppUserBound',
      method: 'post',
      url: global.ctsbankApiURL + '/AppUserBound.do',
      desc: '绑定手机银行'
    },
    {
      name: 'timestampForPmobile',
      method: 'post',
      url: global.ctsbankApiURL + '/TimestampForPmobile.do',
      desc: '请求时间戳'
    },
    {
      name: 'AppUserBoundConfirm',
      method: 'post',
      url: global.ctsbankApiURL + '/AppUserBoundConfirm.do',
      desc: '绑定手机确认'
    },
    {
      name: 'logout',
      method: 'post',
      url: global.ctshoApiURL + '/user/logout.json',
      desc: '退出登录'
    },
    {
      name: 'logOutBank',
      method: 'post',
      url: global.ctsbankApiURL + '/logout.do',
      desc: '退出登录'
    },
    {
      name: 'convertLocationToCity',
      method: 'get',
      url: 'http://restapi.amap.com/v3/geocode/regeo'
    }
  ]
};
