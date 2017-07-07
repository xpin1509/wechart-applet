//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    videoUrl: 'http://www.ortholink.cn/include/mt/video/Ortholink_md.mp4',
    posterUrl:'http://www.ortholink.cn/include/mt/images/index/@2x_2.jpg',
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
   //事件处理函数
  bindViewTap: function() {
		wx.chooseImage({
		  count: 1, // 默认9
		  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		  success: function (res) {
		    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
		    var tempFilePaths = res.tempFilePaths
		  }
		})
  }
})
