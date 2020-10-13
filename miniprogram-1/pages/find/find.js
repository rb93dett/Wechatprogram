// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 用户头像，姓名和电话
     */
    SwiperList: [
      {
        img: "../../icons/swiper1.jpg",
      },
      {
        img: "../../icons/swiper2.jpg",
      },
      {
        img: "../../icons/swiper3.jpg",
      },
    ],

    TalkList: [
      {
        img: "../../icons/mask.jpeg",
        title: "疫情仍在，开学后，口罩不够用怎么办？",
        count:11137,
        date:"23:21"
      },
      {
        img: "../../icons/italy.jpg",
        title: "意大利疫情快速蔓延，当地采取了哪些措施？",
        count: 3382,
        date: "14:48"
      },
      {
        img: "../../icons/friend.jpeg",
        title: "大学拥有一个好基友是一种怎样的体验？",
        count: 4823,
        date: "9:05"
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