/**
 *  Class: Constants
 *  Author: Niu Xiaoyu
 *  Date: 16/9/2.
 *  Description: 常量
 */

const Constants = {
  /**
   * 数组对象缓存
   * 使用时需要设置key
   * resultsCache['国内游']: {
   *   dataForQuery: {},
   *   nextPageNumberForQuery: {},
   *   totalForQuery: {}
   * }
   **/
  resultsCache: {},

  /**
   * resultsCache的key
   */
  cacheKey: {
    DomesticTravel: 'DomesticTravel',
    Account: 'Account',
    SubAccountList: 'SubAccountList',
    Transaction: 'Transaction',
    TransactionList: 'TransactionList',
    FinancialProducts: 'FinancialProducts'
  },

  productInterface: {
    banner: 'getBanner',
    foreign: 'getForeign',
    inland: 'getInland',
    boat: 'getBoat',
    arround: 'getArround',
    OrderList: 'OrderList'
  },

  /**
   * 个人账户互转用途
   */
  purposeId: ['24', '00', '01', '02', '03', '04', '05T', '06', '07', '08'],
  purposeName: ['手机银行转账', '贷款', '采购款', '工资', '借款', '往来款', '还款', '差旅费', '保证金', '运费'],

  /**
   * 校验提示信息
   */
  validationMessage: {
    FastTransfer: {  //实时跨行转账
      payeeAcInfo: '请录入收款人账号和收款人',
      purposeNameNotExists: '请输入转账用途!',
      purposeNameInput: '[转账用途]格式有误,长度需大于2位小于30位!',
      ClearBankNo: '汇入地不能为本行!',
      transactionAmount: '[交易金额]格式有误,不能为空,只允许数字,整数部分最多11位,小数部分最多2位,金额不能为负数,请重新输入!',
      transactionAmountLt0: '交易金额不能小于0!',
      transactionAmountGtBal: '交易金额不能大于可用余额!',
      transactionAmountGt50000: '跨行实时转账金额不能超过5万元!',
      phoneNoNotExists: '请输入收款人手机号码!',
      phoneNo: '请输入有效的手机号码!'
    },
    Transfer: {  //普通跨行转账
      payeeAcInfo: '请录入收款人账号和收款人',
      purposeNameNotExists: '请输入转账用途!',
      purposeNameInput: '[转账用途]格式有误,长度需大于2位小于30位!',
      openingBankId: '请选择收款人开户网点!',
      transactionAmount: '[交易金额]格式有误,不能为空,只允许数字,整数部分最多11位,小数部分最多2位,金额不能为负数和0,请重新输入!',
      transactionAmountLt0: '交易金额不能小于0!',
      transactionAmountGtBal: '交易金额不能大于可用余额!',
      phoneNoNotExists: '请输入收款人手机号码!',
      phoneNo: '请输入有效的手机号码!'
    },
    SuspendAccount: {//帐户挂失
      accountNumber: '账号不能为空!',
      accountSpecial: '账号不能包含特殊字符!',
      idNumber: '证件号码不能为空!'
    },
    InLineTransfer: {
      acNoMessage: '付款人账号不能为空!',
      acNoPayeeNoMessage: '收款账户不能和付款账号相同!',
      isPayeeNameMessage: '收款人账户不存在，请确认！',
      SMSNoMessage: '请输入正确的短信验证码！',
      payeeAcNoMessage: '收款人账号不能为空!',
      payeeAcNameMessage: '收款人姓名不能为空!'
    },
    PersonalAccount: {
      outNumber: '请选择转账账号!',
      amount: '请输入交易金额!',
      transactionAmount: '[交易金额]格式有误,只允许数字,其中整数部分最多11位,小数部分最多2位,金额不能为负数和零,请重新输入!',
      cardNumber: '当前账户只绑定一张卡!',
      numbers: '请选择与转出账号不同的账号!',
      balance: '当前账户余额不足!',
      purpose: '请输入转账交易用途!',
      purposeFormat: '转账用途长度要求为2-30个字符,请输入有效转账用途!'
    }
  },
  manageAccountMessage: {
    addCardTip: {
      writeAcNo: '请输入加挂账号',
      writeRightAcNo: '加挂账号长度不能大于24位',
      writeAcName: '请输入加挂账户名称',
      writeRightAcName: '加挂账户名称长度不能大于20位',
      writeAcAlias: '请输入加挂账号昵称',
      writeRightAcAlias: '加挂账号昵称长度不能大于20位'
    },
    ManageCardConfirmTip: {
      getPhoneMessage: '请先获取短信验证码',
      writePhoneMessage: '请输入短信验证码',
      writeRightPhoneMessage: '短信验证码有误,请重新录入'
    },
    ManageAccountTip: {
      deleteCardValidData: '手机银行只有一个账户，不能进行减挂',
      newAliasMessage: '别名长度要求为2-20个字符,请输入有效别名!'
    }
  },

  /**
   * 校验提示信息
   */
  WEBAPIERROR: {
    TIMEOUT: '请求超时',
    NONET: '网络异常，请稍后重试'
  },

  /**
   * 提示信息
   */
  tipMessage: {
    CHAGNE_PASSWORD_SUCCESS: '修改密码成功!',

    REGISTER_SUCCESS: '注册成功!',
    REGISTER_PHONENUMEXIST: '手机号码已经存在',
    LOGIN_BANKLOGIN_FAILED: '手机银行登录失败',
    LOGOUT_SUCCESS: '退出成功!'
  },

  /**
   * 事件
   */
  eventsName: {
    LoginCTSHO: 'userLoginCTSHO',
    LogoutCTSHO: 'userLogoutCTSHO',
    LoginBank: 'bankLoginSuccess'
  },
/**
 * 注册登录修改密码
 */
  managePhoneNoPwdMessage: {
    phoneNoEmpty: '手机号码不能为空',
    errPhoneNoTips: '手机号格式不正确',
    passwordEmpty: '密码不能为空',
    errPwdTips: '密码必须是6-12位字母或数字',
    confirmPwd: '请输入确认密码',
    confirmEmpty: '确认密码不能为空',
    errConfirmPwd: '确认密码与新密码不一致',
    captchaEmpty: '验证码不能为空',
    oldPwdEmpty: '旧密码不能为空',
    newPwdEmpty: '请输入新密码',
    againPwdEmpty: '确认新密码不能为空',
    oldPwdAndNewPwdRepeat: '新密码不能与旧密码重复',
    errConfirmPwdAndLoginPwd: '确认密码与登录密码不一致',

  },
};

export default Constants;