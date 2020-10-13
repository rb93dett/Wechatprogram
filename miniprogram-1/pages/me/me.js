// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 用户头像，姓名和电话
     */
    UserInfo:{
      head_img:"../../icons/head.jpeg",
      name:"Peppa Pig",
      tele:"1008611"
    },

    /**
     * 用户头像，姓名和电话
     */
    CenterListInfo:[
      {
        icon: "../../icons/record.png",
        text: "交易记录",
      },
      {
        icon: "../../icons/like.png",
        text: "我的收藏",
      },
      {
        icon: "../../icons/history.png",
        text: "浏览历史",
      },
      {
        icon: "../../icons/reward.png",
        text: "我的积分",
      },
      {
        icon: "../../icons/account.png",
        text: "账户信息",
      },
      {
        icon: "../../icons/location.png",
        text: "收货地址",
      },
      {
        icon: "../../icons/about.png",
        text: "关于我们",
      },
      {
        icon: "../../icons/set.png",
        text: "设置",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})