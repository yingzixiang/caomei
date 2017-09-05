var TAO; //初始化通用方式及变量

$(document).ready(function(){
	TAO = new DMUtil();
})


//=============================动态加载页面跳转=============================//

	function openContent(url)
	{
		TAO.runAnimation(".page-current", "loadliAnimate-2","",{"top":"0px"}, function()
		{		
			$.ajax
			({
			    url: url ,
				success: function(ResponseStr)
				{
					$(".page-home").html(ResponseStr);
				}
			})
		})
	}
	//============================移除内容=========================================//
	function closeContentBox()
	{
		$(".page-home").html("");
	}
		
	//页面加载操作
	var changes = function(){}
	changes.prototype = {
		//个人信息填写
		userInfo : function(){
			openContent("user_info.html")
		},
		//分班页面
		groupClass : function(){
			openContent("group_classs.html")
		}
	}
	window.onload=function(){
	//页面切换
	var nowPage = new changes();

	}
	
