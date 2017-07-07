//news.js
var util = require('../../utils/util.js');

Page({
	data:{
		isOpen:false,
		hideCor:true,
		birDate: util.formatTime(new Date()),
		doctorType:['正畸专科（博士）','正畸专科（硕士）','口腔全科'],
		index: 0,
		checked:false
	},
	changeOpen:function(){
		this.setData({
	      	isOpen: !this.data.isOpen
	    })
		
	},
	bindDoctorChange:function(e){
		this.setData({
      		index: e.detail.value
    	})
	},
	bindDateChange:function(e){
		this.setData({
      		birDate: e.detail.value
    	})
	},
	changeFalseInfo:function(){
		this.setData({
      		hideCor: false
    	})
	},
	changeTrueInfo:function(){
		this.setData({
      		hideCor: true
    	})
	},
	changeType:function(e){
		this.setData({
      		checked: !this.data.checked
    	})
	},
	formSubmit:function(e){
		 console.log(e.detail.value)
		 
		 wx.showToast({
			title: '提交成功',
			icon: 'success'
		})
	},
	onLoad: function(options) {
	    this.setData({
	      	title: options.title
	    })
	    console.log(this)
	}
})