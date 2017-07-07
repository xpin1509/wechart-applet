//data.js
//api->https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=get_playoff_vs
var util = require('../../utils/util.js')
Page({
	data: {
  		first:[],
  		second:[],
  		half:[],
  		finals:[]
  },
  onLoad: function(options) {
    var self = this;
    var url = "https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=get_playoff_vs"
    util.commonAjax(url,function(res){
    	var obj = res.data.get_playoff_vs.data
    	self.setData({
    		first:obj.first,
    		second:obj.second,
    		half:obj.half,
    		finals:obj.final
    	})
    })
  }
})