// pages/service-detail/index.js

import Service from "../../models/service";
import User from "../../models/user";
import Rating from "../../models/rating";
import serviceType from "../../enum/service-type";

const ratingModel = new Rating()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    service: null,
    isPublisher: false,
    ratingList: [],
    serviceType: serviceType,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.data.id = options.id
    await this._getService(this.data.id)
    await this._getServiceRatingList()
    this._checkRole()
  },

  async _getService(serviceId) {
    const service = await Service.getServiceById(serviceId)
    this.setData({
        service
    })
  },

  _checkRole() {
    const userInfo = User.getUserInfoByLocal();
    if (userInfo && userInfo.id === this.data.service.publisher.id) {
        this.setData({
            isPublisher: true
        })
    }
  },

  async _getServiceRatingList() {
    const ratingList = await ratingModel.reset().getRatingListByServiceId(this.data.service.id);
    this.setData({
        ratingList
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