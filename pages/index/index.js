//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
		fontSize:50
  },
  onLoad: function () {

  },
	changeStyle:function(){
		
		this.setData({
			fontSize:this.data.fontSize+50
		})
	}
})
