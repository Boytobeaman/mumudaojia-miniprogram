// pages/goujian/goujian.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submit: function(res) {
    console.log(res);
    let { value } = res.detail;
    // let formData = new FormData();
    // formData.append("name",value.name);
    // formData.append("password",value.password);
    wx.request({
      url: `${app.globalData.host}/bospersonnelservice/${app.globalData.appKey}/users/login`,
      method: 'POST',
      data: value,
      header: {'Accept':'*/*','Content-Type':'application/x-www-form-urlencoded'},
      success: async (res) => {
        console.log(res);
        if(res.data && res.data.code==="SUCCESS"){
          let token = res.data.data.access_token;
          await wx.setStorageSync('access_token', token)
          console.log(token)
          this.setData({
            user: res.data.data,
          })
          console.log()
          wx.navigateTo({
            url: '/pages/viewer3d/viewer3d',
          })
          
        }
        
      },
      fail: function(){

      }
    })
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