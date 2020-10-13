// pages/msg/msg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,

    MsgList: [
      {
        head: "../../icons/head1.jpeg",
        name: "彭于晏中南分晏",
        msg: "真的太谢谢你啦！",
        time: "21:23",
        num: 1,
      },
      {
        head: "../../icons/head2.jpg",
        name: "逮虾户本博",
        msg: "在吗同学？",
        time: "18:59",
        num: 1,
      },
      {
        head: "../../icons/head3.jpg",
        name: "荷塘月色",
        msg: "行吧那我再问问别人咯:)",
        time: "7:59",
        num: 1,
      },
    ]
  },

  clickTab(e){
    //console.log(e.target.dataset.current);
    this.setData({
      currentTab: e.target.dataset.current
    })
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