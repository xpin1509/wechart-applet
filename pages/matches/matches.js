//matches.js
//api->https://sportswebapi.qq.com/kbs/list?&columnId=100000&startTime=2017-5-4&endTime=2017-5-9
var util = require('../../utils/util.js')
Page({
  data: {
  	matchList:[]
  },
  onLoad: function () {
  	var self = this;
		getListJson(function(res){
				//拼装数据
				var arr= []
				for(var i in res.data.data ){
					var obj = {};
					obj.matchDate = i;
					obj.matchList = res.data.data[i];
					arr.push(obj);
				}
				self.setData({
					matchList: arr
				})
		})

  	
    /**
  	 * 获取比赛列表
  	 * @param {Number} num
  	 * @param {Function} cb
  	 */
  	function getListJson(cb){
	  	var urlParam = "https://sportswebapi.qq.com/kbs/list?&columnId=100000"
	  	var param = "&startTime=" + util.getDateStr(0) + "&endTime=" + util.getDateStr(5);
	  	wx.request({
		  	url: urlParam + param,
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
