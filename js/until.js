var DMUtil = function() {
	
	this.ip ="";
	this.meetingName = "";
	this.hoster = "";
	this.userName = "";
	
	
	//动画运行
	this.runAnimation = function(obj,classStr,css0,css1,callBack) {
		var css0 = css0 || false;
		var css1 = css1 || false;
		var callBack = callBack || function () { };
		if (css0) {
			$(obj).css(css0);
		}
		$(obj)
		.addClass(classStr)
		.on("webkitAnimationEnd", function(){
			$(this).off("webkitAnimationEnd").removeClass(classStr);
			if(css1) {
				$(obj).css(css1);
			}
			callBack();
		})
	}
}
