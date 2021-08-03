// miniprogram/pages/viewer3d/viewer3d.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bos3dViewerUrl: app.globalData.bos3dViewerUrl,
    modelDbKey: app.globalData.modelDbKey,
    finalUrl: ``
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    let token = await wx.getStorageSync('access_token')
    console.log(token)
    let finalUrl = `${app.globalData.bos3dUrl}/static/index.html?dbName=${app.globalData.modelDbKey}&modelId=M1627016138261&url=${app.globalData.bos3dUrl}&token=${token}`;
    console.log(finalUrl)
    this.setData({
      finalUrl
    })
    
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