//index.js
//天行静态数据：https://api.tianapi.com/weixin/?key=8f5b339e5b453da100d1a734013e1b86
//腾讯数据：https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=index_basic_new%2Cindex_live%2Cteam_news_new&tn_ids=5%2C9%2C14%2C24&tn_size=12
//index_basic_new基本新闻
//index_live当日比赛
//team_news_new骑勇马火新闻
var util = require('../../utils/util.js')
Page({
	data: {
    imgUrls: [],
    newsItems:[],
    indicatorDots: true,
    indicatorColor:'#fff',
    indicatorActiveColor:'#4998e7',
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function(options) {
  	var self = this;
  	//获取数据
  	getIndexList(function(res){
  		var arr = []
  		var length = res.data.index_basic_new.data.quickList.length > 50 ? 50 : res.data.index_basic_new.data.quickList.length
  		//去除广告
  		for(var i = 0; i < res.data.index_basic_new.data.foucsImageList.length; i++){
  			if(undefined === res.data.index_basic_new.data.foucsImageList[i].source){
  				arr.push(res.data.index_basic_new.data.foucsImageList[i])
  			}
  		}
  		self.setData({
			imgUrls: arr,
			newsItems: res.data.index_basic_new.data.quickList.slice(0,length)
		})
  	});
  	
  	/**
  	 * 请求数据
  	 * @param {Function} cb
  	 */
  	function getIndexList(cb){
  		var url = 'https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=index_basic_new';
  		util.commonAjax(url,function(res){
  			cb(res)
  		})
  	}
  }
})