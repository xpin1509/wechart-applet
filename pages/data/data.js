//data.js
//api->https://matchweb.sports.qq.com/html/rank?competitionId=100000&tabType=1
Page({
	data: {
  	dataList:[]
  },
  onLoad: function(options) {
  	var self = this;
  	getListJson(function(res){
  		//先转成字符串去除 "-" 再转化json
  		var arr = [];
  		var str = JSON.stringify(res.data[1])
		var regStr = str.replace(/-/g,'')
  		arr = JSON.parse(regStr)
		self.setData({
			dataList: arr
		})
  	})
    /**
  	 * 获取比赛列表
  	 * @param {Number} num
  	 * @param {Function} cb
  	 */
  	function getListJson(cb){
	  	var urlParam = "https://matchweb.sports.qq.com/html/rank?competitionId=100000&tabType=1"
	  	wx.request({
		  	url: urlParam,
		  	header: {
		      	'content-type': 'application/json'
		  	},
		  	success: function(res) {
		  		cb(res);
		  	}
			})
  	}
  }
})