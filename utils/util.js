function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getDateStr(AddDayCount) { 
    var dd = new Date(); 
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear(); 
    var m = dd.getMonth()+1;//获取当前月份的日期 
    var d = dd.getDate(); 
    return y+"-"+m+"-"+d; 
} 
/**
 * 通用ajax
 * @param {String} url
 * @param {Function} cb
 */
function commonAjax(paramUrl,cb){
	wx.request({
  	url: paramUrl,
  	header: {
      	'content-type': 'application/json'
  	},
  	success: function(res) {
  		cb(res);
  	}
	})
}

module.exports = {
  formatTime: formatTime,
  getDateStr: getDateStr,
  commonAjax: commonAjax
}
